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
    hits = 0
    new = None
    for f in files:
        text = f.read_text(encoding="utf-8")
        found = pattern.findall(text)
        if not found:
            continue
        if new is None:
            new = max(int(v) for v in found) + 1
        f.write_text(pattern.sub(f"{target}?v={new}", text), encoding="utf-8")
        hits += 1
    print(f"{target}: {'v' + str(new) + ' in ' + str(hits) + ' file(s)' if hits else 'no references found'}")
