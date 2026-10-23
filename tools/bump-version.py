#!/usr/bin/env python3
"""Bump the ?v= cache-buster for a shared asset everywhere it is referenced.

Usage (from the repo root):
    python3 tools/bump-version.py js/lagoon.js
    python3 tools/bump-version.py css/lagoon.css js/faq-data.js

Run it after editing a shared css/js file so visitors do not get a stale copy.
"""
import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parent.parent
targets = [p for p in sys.argv[1:]]
if not targets:
    sys.exit(__doc__)

files = [p for p in root.rglob("*") if p.suffix in {".html", ".js"} and ".git" not in p.parts and "tools" not in p.parts]
for target in targets:
    pattern = re.compile(re.escape(target) + r"\?v=(\d+)")
    hits = [(f, f.read_text(encoding="utf-8")) for f in files]
    hits = [(f, text) for f, text in hits if pattern.search(text)]
    if not hits:
        print(f"{target}: no references found")
        continue
    new = max(int(v) for _, text in hits for v in pattern.findall(text)) + 1
    for f, text in hits:
        f.write_text(pattern.sub(f"{target}?v={new}", text), encoding="utf-8")
    print(f"{target}: v{new} in {len(hits)} file(s)")
