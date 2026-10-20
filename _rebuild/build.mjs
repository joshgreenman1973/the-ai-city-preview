// Builds the rebuilt issue from _rebuild/drafts/*.md and _rebuild/charts.json.
//   node _rebuild/build.mjs fragments   -> _rebuild/out/<slug>.html (then run smartquotes.py on them)
//   node _rebuild/build.mjs assemble    -> assets/articles.js, articles/<slug>.html
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const RB = path.join(ROOT, '_rebuild');
const OUT = path.join(RB, 'out');

export const LINEUP = [
  ['The Promise', ['front-door', 'plan-review', 'benefits-backlog', 'block-by-block', 'streets']],
  ['The Peril', ['risk-scores', 'face-and-plate', 'sanctuary-data', 'acs-model', 'shelter-score', 'landlord-algorithm']],
  ['The Disruption', ['jobs', 'schools', 'deepfakes', 'data-centers', 'fiscal']],
  ['The Governance Question', ['the-inventory', 'the-desk', 'procurement', 'preemption']],
];
const ORDER = LINEUP.flatMap(([, s]) => s);

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escAttr = s => esc(s).replace(/"/g, '&quot;');

function parseDraft(slug) {
  const raw = fs.readFileSync(path.join(RB, 'drafts', slug + '.md'), 'utf8');
  const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
  if (!fm) throw new Error(slug + ': no front matter');
  const meta = {};
  for (const line of fm[1].split('\n')) {
    const m = line.match(/^(\w+):\s*(.*)$/);
    if (m) meta[m[1]] = m[2].replace(/^"(.*)"$/, '$1').trim();
  }
  const rest = raw.slice(fm[0].length);
  const cb = rest.match(/<!--\s*CHART\n([\s\S]*?)-->/);
  const chartMeta = {};
  if (cb) for (const k of ['title', 'dek', 'source']) {
    const m = cb[1].match(new RegExp('^' + k + ':\\s*(.*)$', 'm'));
    if (m) chartMeta[k] = m[1].trim();
  }
  const body = rest.replace(/<!--[\s\S]*?-->/g, '').trim();
  return { slug, meta, body, chartMeta };
}

// Minimal markdown: paragraphs, ## / ### headings, [text](url), **bold**. Anything else is an error.
function inline(s) {
  let out = '';
  let i = 0;
  const re = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let m;
  while ((m = re.exec(s))) {
    out += esc(s.slice(i, m.index));
    out += `<a href="${escAttr(m[2])}">${esc(m[1])}</a>`;
    i = m.index + m[0].length;
  }
  out += esc(s.slice(i));
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  if (/\*|\]\(|`/.test(out.replace(/<a [^>]*>/g, ''))) throw new Error('unhandled markdown: ' + s.slice(0, 120));
  return out;
}

function mdToHtml(md, slug) {
  const blocks = md.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  return blocks.map(b => {
    if (/^### /.test(b)) return `<h3>${inline(b.slice(4))}</h3>`;
    if (/^## /.test(b)) return `<h2>${inline(b.slice(3))}</h2>`;
    if (/^#/.test(b)) throw new Error(slug + ': unexpected heading ' + b.slice(0, 40));
    if (/^[-*] /.test(b)) {
      const items = b.split('\n').map(l => l.replace(/^[-*] /, ''));
      return `<ul>${items.map(t => `<li>${inline(t)}</li>`).join('')}</ul>`;
    }
    if (/^>/.test(b)) return `<blockquote><p>${inline(b.replace(/^>\s?/gm, ''))}</p></blockquote>`;
    return `<p>${inline(b.replace(/\n/g, ' '))}</p>`;
  }).join('\n');
}

// ---------- charts ----------
const C = { orange: '#ff7c53', magenta: '#e7466d', cerulean: '#217ebe', indigo: '#394882', periwinkle: '#9b9fbc', chartreuse: '#c9d12e', charcoal: '#707175', cloud: '#dddddd' };

function chartShell(ch, inner) {
  return `<figure class="vc-chart">
<div class="vc-chart-title">${esc(ch.title)}</div>
<div class="vc-chart-dek">${esc(ch.dek)}</div>
${inner}
<figcaption class="vc-chart-source">Source: ${esc(ch.source)}</figcaption>
</figure>`;
}

function hbar(ch) {
  const max = Math.max(...ch.rows.map(r => Math.abs(r.value)));
  const hasNeg = ch.rows.some(r => r.value < 0);
  const rows = ch.rows.map(r => {
    const w = max ? (Math.abs(r.value) / max) * (hasNeg ? 50 : 100) : 0;
    const color = r.color ? (C[r.color] || r.color) : C.orange;
    const left = hasNeg ? (r.value < 0 ? 50 - w : 50) : 0;
    return `<div class="vc-hbar-row${r.total ? ' is-total' : ''}"><div class="vc-hbar-label">${esc(r.label)}</div><div class="vc-hbar-track">${hasNeg ? '<span class="vc-hbar-zero"></span>' : ''}<span class="vc-hbar-bar" style="left:${left}%;width:${Math.max(w, r.value === 0 ? 0 : 0.6)}%;background:${color}"></span></div><div class="vc-hbar-value">${esc(r.display)}</div></div>`;
  }).join('');
  return chartShell(ch, `<div class="vc-hbar">${rows}</div>`);
}

function groupbar(ch) {
  // rows: [{label, values:[...], displays:[...]}], series: [{name,color}]
  const max = ch.max || Math.max(...ch.rows.flatMap(r => r.values));
  const legend = `<div class="vc-legend">${ch.series.map(s => `<span><i style="background:${C[s.color] || s.color}"></i>${esc(s.name)}</span>`).join('')}</div>`;
  const rows = ch.rows.map(r => `<div class="vc-group"><div class="vc-group-label">${esc(r.label)}</div>${r.values.map((v, k) => `<div class="vc-hbar-row slim"><div class="vc-hbar-track"><span class="vc-hbar-bar" style="left:0;width:${(v / max) * 100}%;background:${C[ch.series[k].color] || ch.series[k].color}"></span></div><div class="vc-hbar-value">${esc(r.displays[k])}</div></div>`).join('')}</div>`).join('');
  return chartShell(ch, legend + `<div class="vc-groupbar">${rows}</div>`);
}

function line(ch) {
  // x: [labels], series: [{name,color,values:[...], displays?}]
  const W = 640, H = 300, L = 44, R = 190, T = 16, B = 34;
  const all = ch.series.flatMap(s => s.values);
  const ymax = ch.ymax ?? Math.max(...all) * 1.1;
  const ymin = ch.ymin ?? 0;
  const xs = i => L + (i * (W - L - R)) / (ch.x.length - 1);
  const ys = v => T + (1 - (v - ymin) / (ymax - ymin)) * (H - T - B);
  const ticks = ch.yticks || [ymin, (ymin + ymax) / 2, ymax];
  let g = ticks.map(t => `<line x1="${L}" x2="${W - R}" y1="${ys(t)}" y2="${ys(t)}" stroke="#e5e5e5"/><text x="${L - 6}" y="${ys(t) + 4}" text-anchor="end" class="ax">${esc((ch.yfmt || '{v}').replace('{v}', t))}</text>`).join('');
  g += ch.x.map((x, i) => `<text x="${xs(i)}" y="${H - 10}" text-anchor="middle" class="ax">${esc(x)}</text>`).join('');
  for (const s of ch.series) {
    const col = C[s.color] || s.color;
    g += `<polyline fill="none" stroke="${col}" stroke-width="3" points="${s.values.map((v, i) => `${xs(i)},${ys(v)}`).join(' ')}"/>`;
    g += s.values.map((v, i) => `<circle cx="${xs(i)}" cy="${ys(v)}" r="4" fill="${col}"/>`).join('');
    const last = s.values.length - 1;
    g += `<text x="${xs(last) + 10}" y="${ys(s.values[last]) + 4 + (s.labelDy || 0)}" class="lab" fill="${col}">${esc(s.name)} ${esc(s.displays ? s.displays[last] : s.values[last])}</text>`;
  }
  return chartShell(ch, `<svg viewBox="0 0 ${W} ${H}" class="vc-line" role="img" aria-label="${escAttr(ch.title)}">${g}</svg>`);
}

function stacked(ch) {
  // rows: [{label, parts:[...], total:'43%'}], series: [{name,color}]
  const max = ch.max || 100;
  const legend = `<div class="vc-legend">${ch.series.map(s => `<span><i style="background:${C[s.color] || s.color}"></i>${esc(s.name)}</span>`).join('')}</div>`;
  const rows = ch.rows.map(r => {
    let left = 0;
    const segs = r.parts.map((p, k) => { const s = `<span class="vc-hbar-bar" style="left:${left}%;width:${(p / max) * 100}%;background:${C[ch.series[k].color] || ch.series[k].color}"></span>`; left += (p / max) * 100; return s; }).join('');
    return `<div class="vc-hbar-row"><div class="vc-hbar-label">${esc(r.label)}</div><div class="vc-hbar-track">${segs}</div><div class="vc-hbar-value">${esc(r.total)}</div></div>`;
  }).join('');
  return chartShell(ch, legend + `<div class="vc-hbar">${rows}</div>`);
}

function table(ch) {
  const head = `<tr>${ch.columns.map(c => `<th>${esc(c)}</th>`).join('')}</tr>`;
  const body = ch.rows.map(r => `<tr>${r.map((c, k) => `<td${k === 0 ? ' class="first"' : ''}>${esc(c)}</td>`).join('')}</tr>`).join('');
  return chartShell(ch, `<div class="vc-table-wrap"><table class="vc-table"><thead>${head}</thead><tbody>${body}</tbody></table></div>`);
}

const RENDER = { hbar, groupbar, line, stacked, table };

function renderChart(slug, charts, chartMeta) {
  const ch = { ...charts[slug], ...chartMeta, ...(charts[slug]?.override || {}) };
  if (!charts[slug]) throw new Error('no chart for ' + slug);
  for (const k of ['title', 'dek', 'source']) if (!ch[k]) throw new Error(slug + ': chart missing ' + k);
  const fn = RENDER[ch.type];
  if (!fn) throw new Error(slug + ': unknown chart type ' + ch.type);
  return fn(ch);
}

// ---------- commands ----------
const cmd = process.argv[2];
const charts = JSON.parse(fs.readFileSync(path.join(RB, 'charts.json'), 'utf8'));
const art = JSON.parse(fs.readFileSync(path.join(RB, 'art.json'), 'utf8'));

if (cmd === 'fragments') {
  fs.mkdirSync(OUT, { recursive: true });
  for (const slug of ORDER) {
    const { meta, body, chartMeta } = parseDraft(slug);
    for (const k of ['title', 'dek', 'section', 'category']) if (!meta[k]) throw new Error(slug + ': missing ' + k);
    const part = (k, v) => `<!--k:${k}-->\n${v}\n<!--/k:${k}-->\n`;
    const html = part('title', `<h1>${esc(meta.title)}</h1>`) + part('dek', `<p>${esc(meta.dek)}</p>`) + part('category', `<p>${esc(meta.category)}</p>`) + part('skyline', `<p>${esc(meta.skyline_stat || '')}</p>`) + part('body', mdToHtml(body, slug)) + part('chart', renderChart(slug, charts, chartMeta)) + part('credit', `<p>${esc(art[slug]?.credit || '')}</p>`) + part('alt', `<p>${esc(art[slug]?.alt || '')}</p>`);
    fs.writeFileSync(path.join(OUT, slug + '.html'), html);
  }
  console.log('wrote', ORDER.length, 'fragments');
} else if (cmd === 'assemble') {
  const pick = (html, k) => {
    const m = html.match(new RegExp(`<!--k:${k}-->\\n([\\s\\S]*?)\\n<!--/k:${k}-->`));
    if (!m) throw new Error('missing ' + k);
    let v = m[1].trim();
    if (['title', 'dek', 'category', 'skyline', 'credit', 'alt'].includes(k)) v = v.replace(/^<(h1|p)>|<\/(h1|p)>$/g, '');
    return v;
  };
  const strip = s => s.replace(/<[^>]+>/g, '');
  const list = [];
  for (const [section, slugs] of LINEUP) {
    for (const slug of slugs) {
      const { meta } = parseDraft(slug);
      const h = fs.readFileSync(path.join(OUT, slug + '.html'), 'utf8');
      list.push({
        slug, section,
        title: pick(h, 'title'), subtitle: pick(h, 'dek'), category: pick(h, 'category'),
        skylineStat: pick(h, 'skyline'), skylineValue: Number(meta.skyline_value),
        author: 'A. Bot', authorTitle: 'AI Assistant',
        image: `images/essays/${slug}.jpg`, credit: pick(h, 'credit'), alt: pick(h, 'alt'),
        chart: pick(h, 'chart'), body: pick(h, 'body'),
        words: strip(pick(h, 'body')).split(/\s+/).filter(Boolean).length,
      });
    }
  }
  const js = '/* Articles data: generated by _rebuild/build.mjs from _rebuild/drafts. Do not edit by hand. */\nconst articles = ' + JSON.stringify(list, null, 1) + ';\n';
  fs.writeFileSync(path.join(ROOT, 'assets', 'articles.js'), js);
  const tpl = fs.readFileSync(path.join(RB, 'article-template.html'), 'utf8');
  for (const a of list) fs.writeFileSync(path.join(ROOT, 'articles', a.slug + '.html'), tpl.replace(/__SLUG__/g, a.slug).replace(/__TITLE__/g, strip(a.title)));
  console.log('assembled', list.length, 'articles,', list.reduce((s, a) => s + a.words, 0), 'words');
} else {
  console.log('usage: node _rebuild/build.mjs fragments|assemble');
}
