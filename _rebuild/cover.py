"""Draws the issue cover from the fact-check: one building per essay, one window per
statement the independent checker tested, orange windows for statements it corrected.
Reads _rebuild/checks/<slug>.md and the essay titles from assets/articles.js.
Writes _rebuild/out/cover.svg.html (an SVG <figure> block for index.html)."""
import json, re, random, html, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
RB = ROOT / '_rebuild'
js = (ROOT / 'assets' / 'articles.js').read_text()
arts = json.loads(js[js.index('['):js.rindex(']') + 1])

SECTION_COLOR = {'The Promise': '#217ebe', 'The Peril': '#e7466d',
                 'The Disruption': '#9b9fbc', 'The Governance Question': '#dde44c'}

def counts(slug):
    t = (RB / 'checks' / f'{slug}.md').read_text()
    n = int(re.search(r'[Ss]tatements checked:\s*(\d+)', t).group(1))
    m = re.search(r'^## Errors found and fixed\n(.*?)(?=^## )', t, re.S | re.M)
    e = len([l for l in m.group(1).splitlines() if l.startswith('- ')]) if m else 0
    return n, e

W, H, BASE = 1600, 600, 548
COLS, WIN, GAP = 3, 11, 3
bw = COLS * WIN + (COLS - 1) * GAP            # building width
step = (W - 2 * 50) / len(arts)
out, tot_n, tot_e = [], 0, 0
for i, a in enumerate(arts):
    n, e = counts(a['slug'])
    tot_n += n; tot_e += e
    rows = -(-n // COLS)
    x0 = 50 + i * step + (step - bw) / 2
    rng = random.Random(a['slug'])
    lit = set(rng.sample(range(n), e))
    col = SECTION_COLOR[a['section']]
    title = re.sub('<[^>]+>', '', a['title'])
    tip = f"{title}: {n} statements checked, {e} corrected"
    g = [f'<a href="articles/{a["slug"]}.html"><g class="bldg" style="--delay:{i * 0.04:.2f}s" tabindex="0"><title>{html.escape(tip)}</title>']
    top = BASE - rows * (WIN + GAP)
    g.append(f'<rect class="bldg-hit" x="{x0 - 6:.1f}" y="{top - 40}" width="{bw + 12}" height="{BASE - top + 40}"/>')
    g.append(f'<rect class="bldg-roof" x="{x0:.1f}" y="{top - 6}" width="{bw}" height="3" fill="{col}"/>')
    for k in range(n):
        r, c = divmod(k, COLS)
        x = x0 + c * (WIN + GAP)
        y = BASE - (r + 1) * (WIN + GAP) + GAP
        cls = 'win lit' if k in lit else 'win'
        g.append(f'<rect class="{cls}" x="{x:.1f}" y="{y}" width="{WIN}" height="{WIN}"/>')
    lab = html.escape(title if len(title) < 46 else title[:44] + '…')
    g.append(f'<text class="bldg-label" x="{x0 + bw / 2:.1f}" y="{top - 14}" text-anchor="middle">{lab}</text>')
    g.append('</g></a>')
    out.append(''.join(g))

svg = f'''<figure class="skyline-figure" aria-labelledby="skyline-caption">
<svg class="skyline-svg fc-cover" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMax meet" role="img" aria-labelledby="skyline-title skyline-desc">
<title id="skyline-title">The Algorithmic City, drawn from its fact-check</title>
<desc id="skyline-desc">Twenty buildings, one per essay. Each window is one statement an independent fact-checker tested against its source: {tot_n} in all. The {tot_e} orange windows are statements the checker found wrong or overstated and corrected.</desc>
<g class="skyline-bars">{''.join(out)}</g>
<line class="skyline-horizon" x1="40" y1="{BASE + 1}" x2="{W - 40}" y2="{BASE + 1}"/>
</svg>
<figcaption id="skyline-caption" class="skyline-caption">Twenty essays drawn from their fact-check. Each window is one statement checked against its source, {tot_n:,} in all; the {tot_e} orange windows were corrected. <span class="skyline-hint">Hover a building to see its essay.</span></figcaption>
</figure>'''
(RB / 'out' / 'cover.svg.html').write_text(svg)
print(tot_n, tot_e)
