#!/usr/bin/env python3
"""Repo health checks. Run before you push; GitHub runs the same script on every push.

    python3 tools/check.py

Checks:
  1. Shared header and footer are up to date (tools/build.py --check)
  2. JavaScript parses (needs node; skipped with a note if node is missing)
  3. No duplicate ids on a page
  4. No em dashes in site copy
  5. Role titles are capitalized (Senior Learning Experience Designer, Project Manager, ...)
  6. Every local link, image, script, stylesheet and font reference points at a file that exists
  7. Each ?v= cache-buster has one version everywhere it is used
  8. No oversized assets, and no asset that nothing references
"""
import html
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MAX_ASSET_KB = {".webp": 250, ".png": 250, ".jpg": 250, ".woff2": 80, ".pdf": 500}
PAGES = sorted(p for p in ROOT.glob("*.html"))
EMBEDS = sorted((ROOT / "assets" / "interactives").glob("*.html"))
CODE = sorted((ROOT / "js").glob("*.js")) + sorted((ROOT / "css").glob("*.css"))
ROLE = re.compile(
    r"\b(senior learning experience designers?|lead learning experience designers?|learning experience designers?|"
    r"learning designers?|project managers?|program managers?|instructional designers?|stem educators?|"
    r"product owners?|educational technology specialists?)\b"
)

problems = []


def fail(msg):
    problems.append(msg)


def rel(p):
    return str(p.relative_to(ROOT))


def visible_text(page: str) -> str:
    page = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", page, flags=re.S)
    page = re.sub(r"<meta[^>]*>", "", page)
    return html.unescape(re.sub(r"<[^>]+>", "\n", page))


# 1. shared header and footer
r = subprocess.run([sys.executable, str(ROOT / "tools" / "build.py"), "--check"], capture_output=True, text=True)
if r.returncode:
    fail("Header/footer out of date. Run: python3 tools/build.py\n    " + r.stdout.strip().replace("\n", "\n    "))

# 2. JavaScript syntax
if shutil.which("node"):
    for f in CODE:
        if f.suffix == ".js" and subprocess.run(["node", "--check", str(f)], capture_output=True).returncode:
            fail(f"{rel(f)}: JavaScript does not parse")
else:
    print("note: node not found, skipping the JavaScript syntax check")

# 3, 4, 5 per page
for p in PAGES:
    text = p.read_text(encoding="utf-8")
    ids = re.findall(r'\sid="([^"{]+)"', text)
    dups = sorted({i for i in ids if ids.count(i) > 1})
    if dups:
        fail(f"{rel(p)}: duplicate ids {dups}")
    if "—" in text:
        fail(f"{rel(p)}: contains an em dash")
    if p.name != "404.html":
        for m in ROLE.finditer(visible_text(text)):
            if m.group(0) != m.group(0).title().replace(" And ", " and "):
                fail(f"{rel(p)}: role title not capitalized: '{m.group(0)}'")
for f in [ROOT / "js" / "faq-data.js", ROOT / "README.md", *sorted((ROOT / "partials").glob("*.html"))]:
    if "—" in f.read_text(encoding="utf-8"):
        fail(f"{rel(f)}: contains an em dash")
faq = (ROOT / "js" / "faq-data.js").read_text(encoding="utf-8")
for line in faq.splitlines():
    if line.strip().startswith(("keys:", "phrases:")):
        continue
    for m in ROLE.finditer(line):
        if m.group(0) != m.group(0).title().replace(" And ", " and "):
            fail(f"js/faq-data.js: role title not capitalized: '{m.group(0)}'")

# 6. local references exist, and collect what is referenced
referenced = set()
ref_re = re.compile(r"""(?<![\w-])(?:href|src)\s*=\s*["']([^"']+)["']|url\(\s*["']?([^"')]+)["']?\s*\)|['"]((?:\.\./)*(?:assets|css|js)/[A-Za-z0-9_./-]+)['"]""")
for f in PAGES + EMBEDS + CODE + sorted((ROOT / "partials").glob("*.html")):
    text = f.read_text(encoding="utf-8")
    for m in ref_re.finditer(text):
        target = next(g for g in m.groups() if g)
        if re.match(r"^(https?:|mailto:|tel:|#|data:|javascript:|//)", target) or "{" in target or "+" in target:
            continue
        path = target.split("#")[0].split("?")[0]
        if not path or path.endswith("/"):
            continue
        base = f.parent if f.suffix in (".css",) or f in EMBEDS else ROOT  # pages, partials and scripts resolve from the site root
        resolved = (base / path).resolve()
        if not resolved.exists():
            fail(f"{rel(f)}: points at a missing file: {target}")
        else:
            referenced.add(resolved)
# dynamic names: space-medicine images are built from a list, so count a file as used if its name appears in source
corpus = "\n".join(f.read_text(encoding="utf-8") for f in PAGES + EMBEDS + CODE)

# 7. cache-buster consistency
versions = {}
for f in PAGES + EMBEDS + CODE:
    for path, v in re.findall(r"((?:css|js)/[A-Za-z0-9_.-]+\.(?:css|js))\?v=(\d+)", f.read_text(encoding="utf-8")):
        versions.setdefault(path, {}).setdefault(v, []).append(rel(f))
for path, vs in versions.items():
    if len(vs) > 1:
        fail(f"{path}: different ?v= values in use: " + ", ".join(f"v{v} ({len(fs)} files)" for v, fs in vs.items()))

# 8. asset size and orphans
for a in sorted((ROOT / "assets").rglob("*")):
    if not a.is_file() or a.name.startswith(".") or a.suffix == ".md":
        continue
    cap = MAX_ASSET_KB.get(a.suffix)
    if cap and a.stat().st_size > cap * 1024:
        fail(f"{rel(a)}: {a.stat().st_size // 1024}KB is over the {cap}KB limit for {a.suffix} files. Compress it first.")
    if a.suffix == ".html":
        used = a in referenced or a.name in corpus
    else:
        used = a.resolve() in referenced or a.name in corpus or a.stem in corpus
    if not used:
        fail(f"{rel(a)}: nothing references this file. Remove it or link it.")

if problems:
    print(f"{len(problems)} problem(s):")
    for p in problems:
        print(" -", p)
    sys.exit(1)
print("All checks passed.")
