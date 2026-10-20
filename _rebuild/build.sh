#!/bin/zsh
# Full rebuild: fragments -> curly quotes -> assemble -> cover -> front page cover splice
set -e
cd "$(dirname "$0")/.."
node _rebuild/build.mjs fragments
(cd _rebuild/out && for f in [a-z]*.html; do [[ $f == cover.svg.html ]] && continue; python3 ~/.claude/skills/vital-city-voice/scripts/smartquotes.py "$f" | grep -q "check passed" || { echo "QUOTE CHECK FAILED: $f"; exit 1; }; done; rm -f *.bak)
node _rebuild/build.mjs assemble
python3 _rebuild/cover.py
python3 - <<'PY'
import re
s=open('index.html').read(); cover=open('_rebuild/out/cover.svg.html').read()
a=s.index('<figure class="skyline-figure"'); b=s.index('</figure>',a)+len('</figure>')
s=s[:a]+cover+s[b:]
m=re.search(r'(\d[\d,]*) in all; the (\d+) orange',cover)
s=re.sub(r'every checkable statement in the draft, [\d,]+ statements across the 20 essays, and corrected \d+ of them',f'every checkable statement in the draft, {m.group(1)} statements across the 20 essays, and corrected {m.group(2)} of them',s)
open('index.html','w').write(s)
PY
node --check assets/articles.js && node --check assets/article.js
echo BUILD OK
