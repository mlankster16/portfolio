#!/usr/bin/env python3
"""Stamp the shared header and footer from partials/ into every page.

The site is plain static HTML, so the shared pieces live in partials/ and this
script copies them into each page between marker comments:

    <!-- build:header --> ... <!-- /build:header -->
    <!-- build:footer --> ... <!-- /build:footer -->

Usage (from the repo root):
    python3 tools/build.py            # rewrite pages
    python3 tools/build.py --check    # exit 1 if any page is out of date

Edit partials/header.html or partials/footer.html, run the script, then commit
the updated pages. In the header, {{current:page.html}} becomes
aria-current="page" on that page, and {{samples-current}} marks the Samples
menu when the page is one of the sample pages.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SKIP = {"404.html"}
INDENT = "  "


def render(partial: str, page: str) -> str:
    menu = re.search(r'<div class="site-menu">.*?</div>', partial, re.S)
    sample_pages = set(re.findall(r"\{\{current:([^}]+)\}\}", menu.group(0))) if menu else set()
    out = re.sub(r"\{\{current:([^}]+)\}\}", lambda m: ' aria-current="page"' if m.group(1) == page else "", partial)
    out = out.replace("{{samples-current}}", ' class="is-current"' if page in sample_pages else "")
    return "\n".join((INDENT + line if line else line) for line in out.rstrip("\n").split("\n"))


def build(check: bool) -> int:
    partials = {name: (ROOT / "partials" / f"{name}.html").read_text(encoding="utf-8") for name in ("header", "footer")}
    stale = 0
    for path in sorted(ROOT.glob("*.html")):
        if path.name in SKIP:
            continue
        text = path.read_text(encoding="utf-8")
        new = text
        for name, partial in partials.items():
            pattern = re.compile(rf"<!-- build:{name} -->.*?<!-- /build:{name} -->", re.S)
            if not pattern.search(new):
                print(f"{path.name}: missing build:{name} markers")
                stale += 1
                continue
            block = f"<!-- build:{name} -->\n{render(partial, path.name)}\n{INDENT}<!-- /build:{name} -->"
            new = pattern.sub(lambda _m: block.lstrip(), new)
        if new != text:
            if check:
                print(f"{path.name}: out of date")
                stale += 1
            else:
                path.write_text(new, encoding="utf-8")
                print(f"{path.name}: updated")
    return 1 if stale else 0


if __name__ == "__main__":
    sys.exit(build("--check" in sys.argv))
