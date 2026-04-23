/* Auto-extracted from original index.html */
const COLORS = {
  red: '#e7466d',
  dark: '#050507',
  gray: '#707175',
  light: '#f5f5f3',
  blue: '#217ebe',
  purple: '#394882',
  green: '#dde44c',
  orange: '#ff7c53',
  teal: '#9b9fbc',
};

// ── Card Visual: 311 Revolution ──
function svg311Revolution() {
  const cities = [
    { name: 'Denver', before: 48, after: 18 },
    { name: 'San Jose', before: 72, after: 24 },
    { name: 'Kansas City', before: 36, after: 12 },
    { name: 'Pittsburgh', before: 60, after: 22 },
    { name: 'Louisville', before: 44, after: 16 },
  ];
  const maxVal = 80;
  const barH = 16;
  const gap = 38;
  const chartL = 95, chartR = 370, chartT = 65, chartW = chartR - chartL;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">After AI, 311 answers in hours, not days</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Average hours to first response, selected cities</text>
    <!-- Axis -->
    <line x1="${chartL}" y1="${chartT - 8}" x2="${chartL}" y2="${chartT + cities.length * gap}" stroke="#ddd" stroke-width="1"/>
    ${[0, 20, 40, 60, 80].map(v => {
      const x = chartL + (v / maxVal) * chartW;
      return `<line x1="${x}" y1="${chartT - 8}" x2="${x}" y2="${chartT + cities.length * gap}" stroke="#eee" stroke-width="1"/>
      <text x="${x}" y="${chartT - 14}" font-family="Inter,sans-serif" font-size="8" fill="#aaa" text-anchor="middle">${v}h</text>`;
    }).join('')}
    <!-- Bars -->
    ${cities.map((c, i) => {
      const y = chartT + i * gap;
      const bw = (c.before / maxVal) * chartW;
      const aw = (c.after / maxVal) * chartW;
      return `
        <text x="${chartL - 6}" y="${y + barH}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="end" font-weight="500">${c.name}</text>
        <rect class="anim-bar" style="animation-delay:${i * 60}ms" x="${chartL}" y="${y}" width="${bw}" height="${barH}" fill="${COLORS.dark}" opacity="0.25"/>
        <rect class="anim-bar" style="animation-delay:${i * 60 + 30}ms" x="${chartL}" y="${y + barH + 2}" width="${aw}" height="${barH}" fill="${COLORS.red}"/>
        <text x="${chartL + aw + 4}" y="${y + barH * 2}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.red}" font-weight="600">${c.after}h</text>`;
    }).join('')}
    <!-- Legend -->
    <g transform="translate(${chartL}, ${chartT + cities.length * gap + 14})">
      <rect x="0" y="0" width="10" height="10" fill="${COLORS.dark}" opacity="0.25"/>
      <text x="14" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Before AI</text>
      <rect x="80" y="0" width="10" height="10" fill="${COLORS.red}"/>
      <text x="94" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">After AI</text>
    </g>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: City 311 annual reports, 2024-2025</text>
  </svg>`;
}

// ── Card Visual: Permits ──
function svgPermits() {
  const data = [
    { city: 'Honolulu', before: 150, after: 7 },
    { city: 'Seattle', before: 120, after: 14 },
    { city: 'Hamilton, ON', before: 100, after: 40 },
    { city: 'Hernando Co., FL', before: 30, after: 2 },
  ];
  const chartL = 110, chartR = 370, chartT = 60;
  const maxDays = 200;
  const rowH = 52;
  const chartW = chartR - chartL;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">AI is compressing months of permit review into days</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Days from application to approval, before and after AI review</text>
    <!-- Time axis -->
    ${[0, 50, 100, 150, 200].map(v => {
      const x = chartL + (v / maxDays) * chartW;
      return `<line x1="${x}" y1="${chartT - 4}" x2="${x}" y2="${chartT + data.length * rowH + 4}" stroke="#eee"/>
      <text x="${x}" y="${chartT - 10}" font-family="Inter,sans-serif" font-size="8" fill="#bbb" text-anchor="middle">${v}</text>`;
    }).join('')}
    <text x="${chartL + chartW / 2}" y="${chartT - 22}" font-family="Inter,sans-serif" font-size="8" fill="#aaa" text-anchor="middle">Days</text>
    <!-- Gantt rows -->
    ${data.map((d, i) => {
      const y = chartT + i * rowH;
      const x1 = chartL + (d.after / maxDays) * chartW;
      const x2 = chartL + (d.before / maxDays) * chartW;
      const pct = Math.round((1 - d.after / d.before) * 100);
      return `
        <text x="${chartL - 6}" y="${y + 14}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="end" font-weight="600">${d.city}</text>
        <!-- Before bar (full span) -->
        <rect class="anim-bar" style="animation-delay:${i * 80}ms" x="${chartL}" y="${y + 4}" width="${x2 - chartL}" height="12" fill="#e5e5e5"/>
        <text x="${x2 + 4}" y="${y + 14}" font-family="Inter,sans-serif" font-size="7.5" fill="#aaa">${d.before}d</text>
        <!-- After bar (compressed) -->
        <rect class="anim-bar" style="animation-delay:${i * 80 + 40}ms" x="${chartL}" y="${y + 20}" width="${Math.max(4, x1 - chartL)}" height="12" fill="${COLORS.red}"/>
        <text x="${Math.max(4, x1 - chartL) + chartL + 4}" y="${y + 30}" font-family="Inter,sans-serif" font-size="7.5" fill="${COLORS.red}" font-weight="600">${d.after}d</text>
        <!-- Reduction label -->
        <text x="${chartL - 6}" y="${y + 30}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.green}" text-anchor="end">-${pct}%</text>
        <!-- Connecting arrow -->
        <line x1="${x2 - 2}" y1="${y + 10}" x2="${Math.max(6, x1 - chartL) + chartL + 2}" y2="${y + 26}" stroke="${COLORS.green}" stroke-width="0.75" stroke-dasharray="3,2"/>`;
    }).join('')}
    <!-- Legend -->
    <g transform="translate(${chartL}, ${chartT + data.length * rowH + 16})">
      <rect x="0" y="0" width="10" height="8" fill="#e5e5e5"/>
      <text x="14" y="8" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Before AI</text>
      <rect x="80" y="0" width="10" height="8" fill="${COLORS.red}"/>
      <text x="94" y="8" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">After AI</text>
    </g>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Municipal permit offices, 2024-2025</text>
  </svg>`;
}

// ── Card Visual: Public Health ──
function svgPublicHealth() {
  const cities = [
    { name: 'NYC (restaurants)', before: 27, after: 52 },
    { name: 'Chicago (food)', before: 31, after: 58 },
    { name: 'Boston (housing)', before: 22, after: 41 },
    { name: 'Las Vegas (pools)', before: 19, after: 44 },
    { name: 'Singapore (cardio)', before: 34, after: 61 },
  ];
  const colW = 68, chartL = 22, chartT = 58, barMax = 42;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">AI finds public-health risks faster than inspectors can walk</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Hit rate: % of inspections that find violations, before vs. after AI prioritization</text>
    <!-- Small multiples -->
    ${cities.map((c, i) => {
      const x = chartL + i * colW + 12;
      const bH = (c.before / 70) * barMax;
      const aH = (c.after / 70) * barMax;
      const baseY = chartT + barMax + 8;
      return `
        <g transform="translate(${x}, 0)">
          <!-- Before bar -->
          <rect class="anim-bar-v" style="animation-delay:${i * 80}ms" x="8" y="${baseY - bH}" width="16" height="${bH}" fill="${COLORS.dark}" opacity="0.2"/>
          <text x="16" y="${baseY - bH - 4}" font-family="Inter,sans-serif" font-size="8" fill="#aaa" text-anchor="middle">${c.before}%</text>
          <!-- After bar -->
          <rect class="anim-bar-v" style="animation-delay:${i * 80 + 40}ms" x="28" y="${baseY - aH}" width="16" height="${aH}" fill="${COLORS.green}"/>
          <text x="36" y="${baseY - aH - 4}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.green}" text-anchor="middle" font-weight="600">${c.after}%</text>
          <!-- Baseline -->
          <line x1="4" y1="${baseY}" x2="48" y2="${baseY}" stroke="#ddd" stroke-width="1"/>
          <!-- City label -->
          <text x="26" y="${baseY + 12}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">${c.name.split('(')[0].trim()}</text>
          <text x="26" y="${baseY + 21}" font-family="Inter,sans-serif" font-size="6.5" fill="${COLORS.gray}" text-anchor="middle">${c.name.includes('(') ? '(' + c.name.split('(')[1] : ''}</text>
        </g>`;
    }).join('')}
    <!-- Improvement annotations -->
    <g transform="translate(22, 160)">
      <text x="0" y="0" font-family="Inter,sans-serif" font-size="9" font-weight="600" fill="${COLORS.dark}">Efficiency gains</text>
      ${cities.map((c, i) => {
        const gain = c.after - c.before;
        const x = i * colW + 38;
        return `
          <text x="${x}" y="18" font-family="Inter,sans-serif" font-size="10" fill="${COLORS.green}" text-anchor="middle" font-weight="700">+${gain}</text>
          <text x="${x}" y="28" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.gray}" text-anchor="middle">pts</text>`;
      }).join('')}
    </g>
    <!-- Bottom insight -->
    <line x1="30" y1="205" x2="370" y2="205" stroke="#eee"/>
    <text x="200" y="222" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">AI-targeted inspections find violations nearly twice as often</text>
    <text x="200" y="236" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Same number of inspectors, dramatically better allocation of their time</text>
    <!-- Legend -->
    <g transform="translate(130, 254)">
      <rect x="0" y="0" width="10" height="10" fill="${COLORS.dark}" opacity="0.2"/>
      <text x="14" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Before AI</text>
      <rect x="80" y="0" width="10" height="10" fill="${COLORS.green}"/>
      <text x="94" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">After AI</text>
    </g>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: City health departments, CDC TowerScout, AI4HealthyCities</text>
  </svg>`;
}

// ── Card Visual: Traffic ──
function svgTraffic() {
  const pts = [
    { date: 'Q1 23', rides: 5, label: '' },
    { date: 'Q2 23', rides: 12, label: '' },
    { date: 'Q3 23', rides: 25, label: '' },
    { date: 'Q4 23', rides: 40, label: 'SF only' },
    { date: 'Q1 24', rides: 55, label: '' },
    { date: 'Q2 24', rides: 75, label: '' },
    { date: 'Q3 24', rides: 100, label: '+Phoenix, LA' },
    { date: 'Q4 24', rides: 150, label: '' },
    { date: 'Q1 25', rides: 200, label: '+Austin, Atlanta' },
    { date: 'Q2 25', rides: 250, label: '' },
    { date: 'Q3 25', rides: 300, label: '+Miami' },
    { date: 'Q4 25', rides: 400, label: '' },
    { date: 'Q1 26', rides: 500, label: '25 cities (plan)' },
  ];
  const chartL = 50, chartR = 380, chartB = 230, chartT = 60;
  const chartW = chartR - chartL, chartH = chartB - chartT;
  const maxR = 550;
  const xStep = chartW / (pts.length - 1);
  const toY = v => chartB - (v / maxR) * chartH;
  const toX = i => chartL + i * xStep;
  const pathD = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(p.rides).toFixed(1)}`).join(' ');
  const areaD = pathD + ` L${toX(pts.length - 1)},${chartB} L${toX(0)},${chartB} Z`;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Driverless rides are scaling past a quarter-million a week</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Paid rides in thousands, with city expansion milestones</text>
    <!-- Y axis -->
    ${[0, 100, 200, 300, 400, 500].map(v => {
      const y = toY(v);
      return `<line x1="${chartL}" y1="${y}" x2="${chartR}" y2="${y}" stroke="#eee"/>
      <text x="${chartL - 6}" y="${y + 3}" font-family="Inter,sans-serif" font-size="8" fill="#bbb" text-anchor="end">${v}K</text>`;
    }).join('')}
    <!-- X axis labels -->
    ${pts.filter((_, i) => i % 3 === 0 || i === pts.length - 1).map(p => {
      const i = pts.indexOf(p);
      return `<text x="${toX(i)}" y="${chartB + 14}" font-family="Inter,sans-serif" font-size="7" fill="#bbb" text-anchor="middle">${p.date}</text>`;
    }).join('')}
    <!-- Area fill -->
    <path class="anim-area" style="animation-delay:900ms" d="${areaD}" fill="${COLORS.blue}" opacity="0.08"/>
    <!-- Line -->
    <path class="anim-line" d="${pathD}" fill="none" stroke="${COLORS.blue}" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- City expansion markers -->
    ${pts.filter(p => p.label).map(p => {
      const i = pts.indexOf(p);
      const x = toX(i), y = toY(p.rides);
      return `
        <circle cx="${x}" cy="${y}" r="4" fill="#fff" stroke="${COLORS.red}" stroke-width="2"/>
        <line x1="${x}" y1="${y - 6}" x2="${x}" y2="${y - 18}" stroke="${COLORS.red}" stroke-width="0.75"/>
        <text x="${x}" y="${y - 22}" font-family="Inter,sans-serif" font-size="6.5" fill="${COLORS.red}" text-anchor="middle" font-weight="600">${p.label}</text>`;
    }).join('')}
    <!-- End dot -->
    <circle cx="${toX(pts.length - 1)}" cy="${toY(pts[pts.length - 1].rides)}" r="3.5" fill="${COLORS.blue}"/>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Waymo quarterly reports, Alphabet earnings calls 2023-2026</text>
  </svg>`;
}

// ── Card Visual: Climate/Energy ──
function svgClimate() {
  const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026];
  const dcEnergy = [15, 20, 28, 40, 58, 80, 110]; // TWh AI data center consumption
  const aiSavings = [5, 10, 18, 30, 48, 72, 100]; // TWh energy saved by AI optimization
  const chartL = 55, chartR = 375, chartB = 235, chartT = 60;
  const chartW = chartR - chartL, chartH = chartB - chartT;
  const maxVal = 120;
  const toX = i => chartL + (i / (years.length - 1)) * chartW;
  const toY = v => chartB - (v / maxVal) * chartH;
  // Build area paths
  const costPath = years.map((_, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(dcEnergy[i]).toFixed(1)}`).join(' ');
  const costArea = costPath + ` L${toX(years.length - 1)},${chartB} L${toX(0)},${chartB} Z`;
  const savePath = years.map((_, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toY(aiSavings[i]).toFixed(1)}`).join(' ');
  const saveArea = savePath + ` L${toX(years.length - 1)},${chartB} L${toX(0)},${chartB} Z`;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">AI that fights climate change runs on an electricity bill of its own</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">AI data center consumption vs. AI-enabled energy savings (TWh)</text>
    <!-- Y gridlines -->
    ${[0, 30, 60, 90, 120].map(v => {
      const y = toY(v);
      return `<line x1="${chartL}" y1="${y}" x2="${chartR}" y2="${y}" stroke="#eee"/>
      <text x="${chartL - 6}" y="${y + 3}" font-family="Inter,sans-serif" font-size="8" fill="#bbb" text-anchor="end">${v}</text>`;
    }).join('')}
    <text x="20" y="${toY(60)}" font-family="Inter,sans-serif" font-size="7" fill="#bbb" text-anchor="middle" transform="rotate(-90,20,${toY(60)})">TWh</text>
    <!-- X axis -->
    ${years.map((yr, i) => `<text x="${toX(i)}" y="${chartB + 14}" font-family="Inter,sans-serif" font-size="8" fill="#bbb" text-anchor="middle">${yr}</text>`).join('')}
    <!-- Stacked areas -->
    <path class="anim-area" style="animation-delay:900ms" d="${costArea}" fill="${COLORS.red}" opacity="0.18"/>
    <path class="anim-area" style="animation-delay:950ms" d="${saveArea}" fill="${COLORS.green}" opacity="0.18"/>
    <!-- Lines -->
    <path class="anim-line" d="${costPath}" fill="none" stroke="${COLORS.red}" stroke-width="2.5" stroke-linejoin="round"/>
    <path class="anim-line" style="animation-delay:100ms" d="${savePath}" fill="none" stroke="${COLORS.green}" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- End labels -->
    <text x="${toX(6) + 4}" y="${toY(dcEnergy[6]) - 2}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.red}" font-weight="600">110 TWh consumed</text>
    <text x="${toX(6) + 4}" y="${toY(aiSavings[6]) + 10}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.green}" font-weight="600">100 TWh saved</text>
    <!-- Gap annotation -->
    <line x1="${toX(5)}" y1="${toY(dcEnergy[5])}" x2="${toX(5)}" y2="${toY(aiSavings[5])}" stroke="${COLORS.dark}" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="${toX(5) + 4}" y="${(toY(dcEnergy[5]) + toY(aiSavings[5])) / 2 + 3}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.dark}" font-weight="600">Net gap</text>
    <!-- Legend -->
    <g transform="translate(${chartL}, ${chartB + 26})">
      <line x1="0" y1="5" x2="16" y2="5" stroke="${COLORS.red}" stroke-width="2.5"/>
      <text x="20" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">AI data center energy use</text>
      <line x1="170" y1="5" x2="186" y2="5" stroke="${COLORS.green}" stroke-width="2.5"/>
      <text x="190" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Energy saved via AI optimization</text>
    </g>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: IEA, Goldman Sachs, BCG estimates 2020-2026</text>
  </svg>`;
}

// ── Card Visual: Predictive Policing ──
function svgPredictivePolicing() {
  const groups = [
    { label: 'Black defendants', fp: 44.9, fn: 28.0, color: COLORS.red },
    { label: 'White defendants', fp: 23.5, fn: 47.7, color: COLORS.blue },
  ];
  const chartL = 120, chartR = 370, chartB = 220, chartT = 75;
  const chartW = chartR - chartL, chartH = chartB - chartT;
  const maxPct = 55;
  const barW = 44, gapInner = 6, gapOuter = 60;
  const toY = v => chartB - (v / maxPct) * chartH;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">When the algorithm is wrong, Black defendants pay the price</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">False positive and false negative rates by race, Broward County FL</text>
    <!-- Y axis -->
    ${[0, 10, 20, 30, 40, 50].map(v => {
      const y = toY(v);
      return `<line x1="${chartL}" y1="${y}" x2="${chartR}" y2="${y}" stroke="#eee"/>
      <text x="${chartL - 6}" y="${y + 3}" font-family="Inter,sans-serif" font-size="8" fill="#bbb" text-anchor="end">${v}%</text>`;
    }).join('')}
    <!-- False Positive group -->
    <g>
      <text x="${chartL + 50}" y="${chartT - 10}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="600">False Positive Rate</text>
      <text x="${chartL + 50}" y="${chartT - 1}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.gray}" text-anchor="middle">Labeled high-risk but didn't reoffend</text>
      ${groups.map((g, i) => {
        const x = chartL + 10 + i * (barW + gapInner);
        const h = (g.fp / maxPct) * chartH;
        return `
          <rect class="anim-bar-v" style="animation-delay:${i * 80}ms" x="${x}" y="${chartB - h}" width="${barW}" height="${h}" fill="${g.color}" opacity="0.8"/>
          <text x="${x + barW / 2}" y="${chartB - h - 5}" font-family="Inter,sans-serif" font-size="9" fill="${g.color}" text-anchor="middle" font-weight="700">${g.fp}%</text>`;
      }).join('')}
    </g>
    <!-- False Negative group -->
    <g>
      <text x="${chartR - 60}" y="${chartT - 10}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="600">False Negative Rate</text>
      <text x="${chartR - 60}" y="${chartT - 1}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.gray}" text-anchor="middle">Labeled low-risk but did reoffend</text>
      ${groups.map((g, i) => {
        const x = chartL + 120 + i * (barW + gapInner);
        const h = (g.fn / maxPct) * chartH;
        return `
          <rect class="anim-bar-v" style="animation-delay:${(i + 2) * 80}ms" x="${x}" y="${chartB - h}" width="${barW}" height="${h}" fill="${g.color}" opacity="0.8"/>
          <text x="${x + barW / 2}" y="${chartB - h - 5}" font-family="Inter,sans-serif" font-size="9" fill="${g.color}" text-anchor="middle" font-weight="700">${g.fn}%</text>`;
      }).join('')}
    </g>
    <!-- X axis line -->
    <line x1="${chartL}" y1="${chartB}" x2="${chartR}" y2="${chartB}" stroke="#ccc"/>
    <!-- Legend -->
    <g transform="translate(${chartL + 20}, ${chartB + 18})">
      <rect x="0" y="0" width="12" height="12" fill="${COLORS.red}" opacity="0.8"/>
      <text x="16" y="10" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}">Black defendants</text>
      <rect x="120" y="0" width="12" height="12" fill="${COLORS.blue}" opacity="0.8"/>
      <text x="136" y="10" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}">White defendants</text>
    </g>
    <!-- Annotation -->
    <text x="200" y="${chartB + 46}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Black defendants: nearly 2x the false positives. White defendants: nearly 2x the false negatives.</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Source: ProPublica analysis of COMPAS scores, Broward County 2013-2014</text>
  </svg>`;
}

// ── Card Visual: Child Welfare ──
function svgChildWelfare() {
  // Proportional area chart — what the 279 ACS variables actually measure
  const cats = [
    { label: 'Public benefits\nhistory', pct: 32, color: COLORS.orange },
    { label: 'Prior CPS\ncontact', pct: 22, color: COLORS.red },
    { label: 'Housing &\naddress data', pct: 16, color: '#d97706' },
    { label: 'Health system\ncontact', pct: 12, color: COLORS.purple },
    { label: 'Behavioral\nhealth flags', pct: 10, color: COLORS.blue },
    { label: 'Actual abuse\nindicators', pct: 8, color: COLORS.green },
  ];
  // Treemap layout — simple single row with proportional widths
  const tmL = 30, tmR = 380, tmT = 62, tmH = 110;
  const tmW = tmR - tmL;
  let cumX = tmL;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">NYC’s child-welfare algorithm mostly measures poverty, not abuse</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">NYC child welfare algorithm inputs by category (% of total variables)</text>
    <!-- Treemap blocks -->
    ${cats.map((c, i) => {
      const w = (c.pct / 100) * tmW;
      const x = cumX;
      cumX += w;
      const lines = c.label.split('\\n');
      return `
        <rect class="anim-bar" style="animation-delay:${i * 100}ms" x="${x}" y="${tmT}" width="${w}" height="${tmH}" fill="${c.color}" opacity="0.75" stroke="#fff" stroke-width="2"/>
        <text x="${x + w / 2}" y="${tmT + tmH / 2 - 10}" font-family="Inter,sans-serif" font-size="${w > 55 ? 9 : 7}" fill="#fff" text-anchor="middle" font-weight="600">${lines[0]}</text>
        ${lines[1] ? `<text x="${x + w / 2}" y="${tmT + tmH / 2 + 2}" font-family="Inter,sans-serif" font-size="${w > 55 ? 9 : 7}" fill="#fff" text-anchor="middle" font-weight="600">${lines[1]}</text>` : ''}
        <text x="${x + w / 2}" y="${tmT + tmH / 2 + 18}" font-family="Inter,sans-serif" font-size="14" fill="#fff" text-anchor="middle" font-weight="700" opacity="0.9">${c.pct}%</text>`;
    }).join('')}
    <!-- Bracket: poverty proxies -->
    <line x1="${tmL}" y1="${tmT + tmH + 8}" x2="${tmL + (70 / 100) * tmW}" y2="${tmT + tmH + 8}" stroke="${COLORS.red}" stroke-width="2"/>
    <text x="${tmL + (35 / 100) * tmW}" y="${tmT + tmH + 22}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.red}" text-anchor="middle" font-weight="700">~70% are poverty proxies, not abuse indicators</text>
    <!-- Bracket: actual abuse -->
    <line x1="${tmL + (92 / 100) * tmW}" y1="${tmT + tmH + 8}" x2="${tmR}" y2="${tmT + tmH + 8}" stroke="${COLORS.green}" stroke-width="2"/>
    <text x="${tmL + (96 / 100) * tmW}" y="${tmT + tmH + 22}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.green}" text-anchor="middle" font-weight="600">8%</text>
    <!-- Bottom insight -->
    <line x1="30" y1="228" x2="370" y2="228" stroke="#eee"/>
    <text x="200" y="246" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">The algorithm primarily detects poverty, not danger to children</text>
    <text x="200" y="262" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Families known to public systems are scored; affluent families are invisible to it</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Source: NYC ACS variable documentation, reviewed by Columbia DSSI</text>
  </svg>`;
}

// ── Card Visual: Courts/Sentencing ──
function svgCourts() {
  const timeline = [
    { year: 2011, cum: 2, label: 'Kentucky, Virginia' },
    { year: 2013, cum: 8, label: '' },
    { year: 2015, cum: 15, label: 'Arnold PSA launches' },
    { year: 2017, cum: 24, label: '' },
    { year: 2019, cum: 32, label: '' },
    { year: 2021, cum: 38, label: 'Post-Floyd scrutiny' },
    { year: 2023, cum: 42, label: '' },
    { year: 2025, cum: 46, label: '15% of U.S. pop.' },
  ];
  const chartL = 55, chartR = 370, chartB = 210, chartT = 65;
  const chartW = chartR - chartL, chartH = chartB - chartT;
  const maxJ = 50;
  const toX = i => chartL + (i / (timeline.length - 1)) * chartW;
  const toY = v => chartB - (v / maxJ) * chartH;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Risk-assessment algorithms now shape sentencing in almost every state</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Cumulative jurisdictions using pretrial risk assessment algorithms</text>
    <!-- Y axis -->
    ${[0, 10, 20, 30, 40, 50].map(v => {
      const y = toY(v);
      return `<line x1="${chartL}" y1="${y}" x2="${chartR}" y2="${y}" stroke="#eee"/>
      <text x="${chartL - 6}" y="${y + 3}" font-family="Inter,sans-serif" font-size="8" fill="#bbb" text-anchor="end">${v}</text>`;
    }).join('')}
    <!-- X axis -->
    ${timeline.map((d, i) => `<text x="${toX(i)}" y="${chartB + 14}" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">${d.year}</text>`).join('')}
    <!-- Lollipop stems + dots -->
    ${timeline.map((d, i) => {
      const x = toX(i), y = toY(d.cum);
      return `
        <line class="anim-stem" style="animation-delay:${i * 70}ms" x1="${x}" y1="${chartB}" x2="${x}" y2="${y}" stroke="${COLORS.purple}" stroke-width="2" opacity="0.4"/>
        <circle class="anim-lollipop" style="animation-delay:${i * 70 + 200}ms" cx="${x}" cy="${y}" r="4.5" fill="${COLORS.purple}"/>
        <text x="${x}" y="${y - 8}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.purple}" text-anchor="middle" font-weight="700">${d.cum}</text>
        ${d.label ? `<text x="${x}" y="${y - 18}" font-family="Inter,sans-serif" font-size="6.5" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">${d.label}</text>` : ''}`;
    }).join('')}
    <!-- Axis line -->
    <line x1="${chartL}" y1="${chartB}" x2="${chartR}" y2="${chartB}" stroke="#ccc"/>
    <!-- Bottom annotation -->
    <line x1="30" y1="240" x2="370" y2="240" stroke="#eee"/>
    <text x="200" y="256" font-family="Inter,sans-serif" font-size="8.5" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">These tools now influence bail, sentencing, and parole for millions of Americans</text>
    <text x="200" y="270" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Math constraint: a tool cannot be simultaneously calibrated and have equalized error rates across groups</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Arnold Ventures, Mapping Pretrial Injustice project, ProPublica</text>
  </svg>`;
}

// ── Card Visual: Surveillance ──
function svgSurveillance() {
  const countries = [
    { name: 'China', cams: 626, pop: 1412, perCap: 443 },
    { name: 'United States', cams: 85, pop: 335, perCap: 254 },
    { name: 'United Kingdom', cams: 7, pop: 67, perCap: 104 },
    { name: 'Germany', cams: 5.2, pop: 84, perCap: 62 },
    { name: 'India', cams: 6, pop: 1408, perCap: 4 },
    { name: 'Brazil', cams: 3.5, pop: 216, perCap: 16 },
  ];
  const chartL = 105, chartR = 370, chartB = 230, chartT = 62;
  const chartW = chartR - chartL;
  // Log scale for cameras: log10(3.5) ~ 0.54, log10(626) ~ 2.80
  const logMin = 0.4, logMax = 3;
  const toBarW = v => ((Math.log10(v) - logMin) / (logMax - logMin)) * chartW;
  const rowH = 26;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">The U.S. watches its cities with tens of millions of cameras</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Millions of cameras installed (log scale), with per-1,000 residents overlay</text>
    <!-- Log axis ticks -->
    ${[1, 10, 100, 1000].map(v => {
      if (v > 700) return '';
      const x = chartL + toBarW(v);
      return `<line x1="${x}" y1="${chartT - 4}" x2="${x}" y2="${chartT + countries.length * rowH + 2}" stroke="#eee"/>
      <text x="${x}" y="${chartT - 8}" font-family="Inter,sans-serif" font-size="7" fill="#bbb" text-anchor="middle">${v}M</text>`;
    }).join('')}
    <!-- Bars -->
    ${countries.map((c, i) => {
      const y = chartT + i * rowH;
      const w = toBarW(c.cams);
      return `
        <text x="${chartL - 6}" y="${y + 16}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="end" font-weight="500">${c.name}</text>
        <rect class="anim-bar" style="animation-delay:${i * 70}ms" x="${chartL}" y="${y + 4}" width="${w}" height="${rowH - 8}" fill="${COLORS.dark}" opacity="0.7"/>
        <text x="${chartL + w + 4}" y="${y + 16}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" font-weight="600">${c.cams >= 100 ? c.cams + 'M' : c.cams + 'M'}</text>
        <!-- Per capita dot -->
        <circle cx="${chartL + (c.perCap / 500) * chartW}" cy="${y + rowH / 2}" r="3.5" fill="none" stroke="${COLORS.red}" stroke-width="1.5"/>`;
    }).join('')}
    <!-- Per capita legend -->
    <g transform="translate(${chartL}, ${chartT + countries.length * rowH + 10})">
      <rect x="0" y="0" width="10" height="10" fill="${COLORS.dark}" opacity="0.7"/>
      <text x="14" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Total cameras (log scale)</text>
      <circle cx="165" cy="5" r="3.5" fill="none" stroke="${COLORS.red}" stroke-width="1.5"/>
      <text x="173" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Per 1,000 residents (linear)</text>
    </g>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Comparitech, IHS Markit, 2024 estimates</text>
  </svg>`;
}

// ── Card Visual: Job Displacement ──
function svgJobs() {
  // Slope chart: cities ranked by displacement risk vs. creation potential
  const cities = [
    { name: 'Detroit', riskRank: 1, createRank: 8 },
    { name: 'Las Vegas', riskRank: 2, createRank: 10 },
    { name: 'Memphis', riskRank: 3, createRank: 9 },
    { name: 'Orlando', riskRank: 4, createRank: 7 },
    { name: 'Phoenix', riskRank: 5, createRank: 4 },
    { name: 'Austin', riskRank: 8, createRank: 1 },
    { name: 'San Jose', riskRank: 9, createRank: 2 },
    { name: 'Seattle', riskRank: 7, createRank: 3 },
    { name: 'Boston', riskRank: 6, createRank: 5 },
    { name: 'Raleigh', riskRank: 10, createRank: 6 },
  ];
  const colL = 130, colR = 280, chartT = 62, rowH = 20;
  const toY = rank => chartT + (rank - 1) * rowH;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">AI could displace 92 million jobs by 2030 — and create 170 million new ones</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Cities most at risk for displacement are not the same ones creating AI jobs</text>
    <!-- Column headers -->
    <text x="${colL}" y="${chartT - 10}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.red}" text-anchor="middle" font-weight="700">Displacement Risk</text>
    <text x="${colR}" y="${chartT - 10}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.green}" text-anchor="middle" font-weight="700">AI Job Creation</text>
    <text x="${colL}" y="${chartT - 1}" font-family="Inter,sans-serif" font-size="7" fill="#aaa" text-anchor="middle">(1 = highest risk)</text>
    <text x="${colR}" y="${chartT - 1}" font-family="Inter,sans-serif" font-size="7" fill="#aaa" text-anchor="middle">(1 = most jobs)</text>
    <!-- Slopes -->
    ${cities.map(c => {
      const yL = toY(c.riskRank);
      const yR = toY(c.createRank);
      const bigShift = Math.abs(c.riskRank - c.createRank) >= 4;
      const lineColor = c.createRank < c.riskRank ? COLORS.green : (c.createRank > c.riskRank ? COLORS.red : '#999');
      const opacity = bigShift ? 0.7 : 0.25;
      return `
        <line class="anim-slope" style="animation-delay:${cities.indexOf(c) * 60}ms" x1="${colL + 30}" y1="${yL}" x2="${colR - 30}" y2="${yR}" stroke="${lineColor}" stroke-width="${bigShift ? 1.8 : 1}" opacity="${opacity}"/>
        <circle class="anim-dot" style="animation-delay:${cities.indexOf(c) * 60}ms" cx="${colL + 30}" cy="${yL}" r="3" fill="${COLORS.red}" opacity="0.8"/>
        <circle class="anim-dot" style="animation-delay:${cities.indexOf(c) * 60 + 400}ms" cx="${colR - 30}" cy="${yR}" r="3" fill="${COLORS.green}" opacity="0.8"/>
        <text x="${colL - 38}" y="${yL + 3.5}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="end">${c.riskRank}. ${c.name}</text>
        <text x="${colR + 38}" y="${yR + 3.5}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}">${c.createRank}. ${c.name}</text>`;
    }).join('')}
    <!-- Annotation -->
    <line x1="30" y1="270" x2="370" y2="270" stroke="#eee"/>
    <text x="200" y="284" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Cities facing the most displacement have the least AI job creation -- the transition gap</text>
    <text x="200" y="295" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Brookings Institution, WEF Future of Jobs Report 2025</text>
  </svg>`;
}

// ── Card Visual: Education ──
function svgEducation() {
  const uses = [
    { label: 'Writing entire assignments', pct: 18, color: COLORS.red, type: 'cheat' },
    { label: 'Paraphrasing to avoid detection', pct: 12, color: COLORS.red, type: 'cheat' },
    { label: 'Answering test/quiz questions', pct: 8, color: COLORS.red, type: 'cheat' },
    { label: 'Brainstorming & outlining', pct: 24, color: COLORS.blue, type: 'legit' },
    { label: 'Grammar & style checking', pct: 19, color: COLORS.blue, type: 'legit' },
    { label: 'Practice problems & tutoring', pct: 13, color: COLORS.blue, type: 'legit' },
    { label: 'Research summarization', pct: 6, color: COLORS.blue, type: 'legit' },
  ];
  const chartL = 150, chartR = 370, chartT = 60;
  const barH = 22, gap = 6;
  const maxPct = 28;
  const chartW = chartR - chartL;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Most students use AI to do the work, not to learn from it</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">% of student AI users by activity type (RAND survey, 2024-2025)</text>
    <!-- Bars -->
    ${uses.map((u, i) => {
      const y = chartT + i * (barH + gap);
      const w = (u.pct / maxPct) * chartW;
      return `
        <text x="${chartL - 6}" y="${y + barH / 2 + 3}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="end">${u.label}</text>
        <rect class="anim-bar" style="animation-delay:${i * 60}ms" x="${chartL}" y="${y}" width="${w}" height="${barH}" fill="${u.color}" opacity="0.8"/>
        <text x="${chartL + w + 4}" y="${y + barH / 2 + 3}" font-family="Inter,sans-serif" font-size="9" fill="${u.color}" font-weight="700">${u.pct}%</text>`;
    }).join('')}
    <!-- Divider line between cheat and legit -->
    <line x1="${chartL}" y1="${chartT + 3 * (barH + gap) - gap / 2}" x2="${chartR}" y2="${chartT + 3 * (barH + gap) - gap / 2}" stroke="#ddd" stroke-dasharray="4,3"/>
    <!-- Category labels -->
    <text x="${chartR + 2}" y="${chartT + 1 * (barH + gap)}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.red}" font-weight="600" transform="rotate(90,${chartR + 2},${chartT + 1 * (barH + gap)})">ACADEMIC DISHONESTY</text>
    <text x="${chartR + 2}" y="${chartT + 5 * (barH + gap)}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.blue}" font-weight="600" transform="rotate(90,${chartR + 2},${chartT + 5 * (barH + gap)})">LEGITIMATE USE</text>
    <!-- Summary -->
    <g transform="translate(30, 265)">
      <rect x="0" y="-2" width="12" height="12" fill="${COLORS.red}" opacity="0.8"/>
      <text x="16" y="8" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}">Cheating: 38%</text>
      <rect x="100" y="-2" width="12" height="12" fill="${COLORS.blue}" opacity="0.8"/>
      <text x="116" y="8" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}">Legitimate: 62%</text>
      <text x="230" y="8" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Most student AI use is productive, but detection tools flag non-native speakers 12x more</text>
    </g>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: RAND Corporation 2025, Stanford Digital Education survey</text>
  </svg>`;
}

// ── Card Visual: Deepfakes/Democracy ──
function svgDemocracy() {
  // Waffle chart — 50 cells for 50 states, 26 with laws, 24 without
  const withLaw = ['AL','AZ','CA','CO','CT','FL','GA','HI','ID','IL','IN','KS','LA','ME','MN','MS','NH','NJ','NM','NY','NC','OR','TX','UT','WA','WI'];
  const allStates = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  const cols = 10, cellW = 32, cellH = 22, gapX = 3, gapY = 3;
  const gridL = (400 - cols * (cellW + gapX)) / 2;
  const gridT = 64;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Most states still have no rules for political deepfakes</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">States with laws restricting AI-generated political deepfakes (as of 2025)</text>
    <!-- Waffle grid -->
    ${allStates.map((st, i) => {
      const col = i % cols, row = Math.floor(i / cols);
      const x = gridL + col * (cellW + gapX);
      const y = gridT + row * (cellH + gapY);
      const hasLaw = withLaw.includes(st);
      return `
        <rect class="anim-cell" style="animation-delay:${i * 30}ms" x="${x}" y="${y}" width="${cellW}" height="${cellH}" fill="${hasLaw ? COLORS.red : '#e5e5e5'}" opacity="${hasLaw ? 0.85 : 0.6}"/>
        <text x="${x + cellW / 2}" y="${y + cellH / 2 + 3}" font-family="Inter,sans-serif" font-size="7" fill="${hasLaw ? '#fff' : '#999'}" text-anchor="middle" font-weight="${hasLaw ? 600 : 400}">${st}</text>`;
    }).join('')}
    <!-- Legend -->
    <g transform="translate(${gridL}, ${gridT + 5 * (cellH + gapY) + 12})">
      <rect x="0" y="0" width="14" height="14" fill="${COLORS.red}" opacity="0.85"/>
      <text x="18" y="11" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" font-weight="600">26 states with deepfake laws</text>
      <rect x="190" y="0" width="14" height="14" fill="#e5e5e5" opacity="0.6"/>
      <text x="208" y="11" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" font-weight="600">24 states without protection</text>
    </g>
    <text x="200" y="280" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Nearly half of states have no legal framework for AI-generated election disinformation</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Source: Brennan Center for Justice, state legislature tracking 2025</text>
  </svg>`;
}

// ── Card Visual: Digital Divide ──
function svgDigitalDivide() {
  const groups = [
    { label: 'White households', broadband: 82, aiBenefit: 74, color: COLORS.blue },
    { label: 'Asian households', broadband: 87, aiBenefit: 80, color: COLORS.teal },
    { label: 'Hispanic households', broadband: 65, aiBenefit: 42, color: COLORS.orange },
    { label: 'Black households', broadband: 62, aiBenefit: 38, color: COLORS.red },
    { label: 'Rural (all)', broadband: 55, aiBenefit: 28, color: COLORS.purple },
    { label: 'Native American', broadband: 48, aiBenefit: 21, color: COLORS.dark },
    { label: 'Seniors 65+', broadband: 60, aiBenefit: 18, color: COLORS.green },
  ];
  const chartL = 60, chartR = 365, chartB = 240, chartT = 65;
  const chartW = chartR - chartL, chartH = chartB - chartT;
  const toX = v => chartL + ((v - 30) / 65) * chartW;
  const toY = v => chartB - ((v - 10) / 80) * chartH;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">The new digital divide is who benefits from AI — and who gets sorted by it</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Groups with less broadband access capture far fewer AI economic gains</text>
    <!-- Axes -->
    <line x1="${chartL}" y1="${chartB}" x2="${chartR}" y2="${chartB}" stroke="#ccc"/>
    <line x1="${chartL}" y1="${chartT}" x2="${chartL}" y2="${chartB}" stroke="#ccc"/>
    <text x="${(chartL + chartR) / 2}" y="${chartB + 28}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Broadband access (%)</text>
    <text x="18" y="${(chartT + chartB) / 2}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle" transform="rotate(-90,18,${(chartT + chartB) / 2})">AI benefit capture (%)</text>
    <!-- Grid -->
    ${[40, 50, 60, 70, 80, 90].map(v => `<text x="${toX(v)}" y="${chartB + 12}" font-family="Inter,sans-serif" font-size="7" fill="#bbb" text-anchor="middle">${v}</text>
    <line x1="${toX(v)}" y1="${chartB}" x2="${toX(v)}" y2="${chartT}" stroke="#eee"/>`).join('')}
    ${[20, 40, 60, 80].map(v => `<text x="${chartL - 6}" y="${toY(v) + 3}" font-family="Inter,sans-serif" font-size="7" fill="#bbb" text-anchor="end">${v}</text>
    <line x1="${chartL}" y1="${toY(v)}" x2="${chartR}" y2="${toY(v)}" stroke="#eee"/>`).join('')}
    <!-- Trend line (approximate) -->
    <line x1="${toX(45)}" y1="${toY(18)}" x2="${toX(90)}" y2="${toY(82)}" stroke="#ddd" stroke-width="1" stroke-dasharray="5,3"/>
    <!-- Points -->
    ${groups.map(g => {
      const x = toX(g.broadband), y = toY(g.aiBenefit);
      return `
        <circle class="anim-dot" style="animation-delay:${groups.indexOf(g) * 120}ms" cx="${x}" cy="${y}" r="5" fill="${g.color}" opacity="0.85"/>
        <text x="${x + 7}" y="${y + 3}" font-family="Inter,sans-serif" font-size="7" fill="${g.color}" font-weight="600">${g.label}</text>`;
    }).join('')}
    <!-- Annotation -->
    <text x="200" y="${chartB + 44}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Potential annual widening of racial economic gap from gen-AI: $43B (McKinsey)</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: FCC Broadband Report 2024, McKinsey Global Institute, Pew Research</text>
  </svg>`;
}

// ── Card Visual: DOGE ──
function svgDOGE() {
  // Dual axis: federal workforce (declining) vs federal spending (flat/rising)
  const years = ['2017','2018','2019','2020','2021','2022','2023','2024','2025','2026'];
  const workforce = [2.08, 2.10, 2.09, 2.10, 2.09, 2.07, 2.05, 2.00, 1.80, 1.73]; // millions
  const spending = [3.98, 4.11, 4.45, 6.55, 6.82, 6.27, 6.13, 6.75, 7.00, 7.20]; // trillions
  const chartL = 55, chartR = 355, chartB = 225, chartT = 65;
  const chartW = chartR - chartL, chartH = chartB - chartT;
  const wMin = 1.6, wMax = 2.2, sMin = 3.5, sMax = 7.5;
  const toX = i => chartL + (i / (years.length - 1)) * chartW;
  const toYw = v => chartB - ((v - wMin) / (wMax - wMin)) * chartH;
  const toYs = v => chartB - ((v - sMin) / (sMax - sMin)) * chartH;
  const wPath = workforce.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toYw(v).toFixed(1)}`).join(' ');
  const sPath = spending.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i).toFixed(1)},${toYs(v).toFixed(1)}`).join(' ');
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">DOGE cut 270,000 workers, and federal spending went up $248 billion</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Federal civilian workforce (M) vs. federal spending ($T), FY 2017-2026</text>
    <!-- Y axis left: workforce -->
    ${[1.6, 1.8, 2.0, 2.2].map(v => {
      const y = toYw(v);
      return `<line x1="${chartL}" y1="${y}" x2="${chartR}" y2="${y}" stroke="#eee"/>
      <text x="${chartL - 6}" y="${y + 3}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.blue}" text-anchor="end">${v.toFixed(1)}M</text>`;
    }).join('')}
    <!-- Y axis right: spending -->
    ${[4, 5, 6, 7].map(v => {
      const y = toYs(v);
      return `<text x="${chartR + 6}" y="${y + 3}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.red}">$${v}T</text>`;
    }).join('')}
    <!-- X axis -->
    ${years.map((yr, i) => `<text x="${toX(i)}" y="${chartB + 14}" font-family="Inter,sans-serif" font-size="7" fill="#bbb" text-anchor="middle">${yr}</text>`).join('')}
    <!-- DOGE era shading -->
    <rect x="${toX(8)}" y="${chartT}" width="${toX(9) - toX(8)}" height="${chartH}" fill="${COLORS.orange}" opacity="0.06"/>
    <text x="${(toX(8) + toX(9)) / 2}" y="${chartT + 10}" font-family="Inter,sans-serif" font-size="6.5" fill="${COLORS.orange}" text-anchor="middle" font-weight="600">DOGE era</text>
    <!-- Lines -->
    <path class="anim-line" d="${wPath}" fill="none" stroke="${COLORS.blue}" stroke-width="2.5" stroke-linejoin="round"/>
    <path class="anim-line" style="animation-delay:100ms" d="${sPath}" fill="none" stroke="${COLORS.red}" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- End dots -->
    <circle cx="${toX(9)}" cy="${toYw(workforce[9])}" r="3.5" fill="${COLORS.blue}"/>
    <circle cx="${toX(9)}" cy="${toYs(spending[9])}" r="3.5" fill="${COLORS.red}"/>
    <!-- End labels -->
    <text x="${toX(9) + 6}" y="${toYw(workforce[9]) + 3}" font-family="Inter,sans-serif" font-size="7.5" fill="${COLORS.blue}" font-weight="600">1.73M workers</text>
    <text x="${toX(9) + 6}" y="${toYs(spending[9]) + 3}" font-family="Inter,sans-serif" font-size="7.5" fill="${COLORS.red}" font-weight="600">$7.2T spending</text>
    <!-- Divergence annotation -->
    <line x1="${toX(7)}" y1="${toYw(workforce[7]) + 4}" x2="${toX(7)}" y2="${toYs(spending[7]) - 4}" stroke="${COLORS.dark}" stroke-width="0.75" stroke-dasharray="3,2"/>
    <!-- Legend -->
    <g transform="translate(${chartL}, ${chartB + 24})">
      <line x1="0" y1="5" x2="16" y2="5" stroke="${COLORS.blue}" stroke-width="2.5"/>
      <text x="20" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Federal workforce</text>
      <line x1="130" y1="5" x2="146" y2="5" stroke="${COLORS.red}" stroke-width="2.5"/>
      <text x="150" y="9" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Federal spending</text>
    </g>
    <text x="200" y="268" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">270K+ workers cut. Total spending: still rising. The lines diverge.</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: OPM FedScope, CBO Budget Projections, Cato Institute</text>
  </svg>`;
}

// ── Card Visual: Procurement Trap ──
function svgProcurement() {
  // Funnel chart — governance gap
  const stages = [
    { label: 'Cities using AI tools', count: 250, pct: 100 },
    { label: 'Have procurement guidelines', count: 65, pct: 26 },
    { label: 'Require bias audits', count: 18, pct: 7 },
    { label: 'Community oversight board', count: 6, pct: 2.4 },
  ];
  const funnelL = 50, funnelR = 350, funnelT = 65, rowH = 48;
  const funnelW = funnelR - funnelL;
  const cx = (funnelL + funnelR) / 2;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Cities are buying AI faster than they’re writing rules for it</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">How many cities adopt AI vs. how many govern it responsibly</text>
    <!-- Funnel trapezoids -->
    ${stages.map((s, i) => {
      const y = funnelT + i * rowH;
      const w1 = (stages[i].pct / 100) * funnelW;
      const w2 = (stages[i + 1] ? stages[i + 1].pct / 100 : stages[i].pct / 200) * funnelW;
      const x1L = cx - w1 / 2, x1R = cx + w1 / 2;
      const x2L = cx - w2 / 2, x2R = cx + w2 / 2;
      const opacity = 0.9 - i * 0.15;
      const colors = [COLORS.blue, COLORS.purple, COLORS.orange, COLORS.red];
      return `
        <polygon class="anim-funnel" style="animation-delay:${i * 150}ms" points="${x1L},${y} ${x1R},${y} ${x2R},${y + rowH - 4} ${x2L},${y + rowH - 4}" fill="${colors[i]}" opacity="${opacity}"/>
        <text x="${cx}" y="${y + rowH / 2 + 1}" font-family="Inter,sans-serif" font-size="${i === 0 ? 10 : 9}" fill="#fff" text-anchor="middle" font-weight="700">${s.label}</text>
        <!-- Count label on right -->
        <text x="${x1R + 8}" y="${y + rowH / 2 + 1}" font-family="Inter,sans-serif" font-size="10" fill="${colors[i]}" font-weight="700">${s.count}</text>
        <text x="${x1R + 8}" y="${y + rowH / 2 + 12}" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.gray}">cities</text>`;
    }).join('')}
    <!-- Drop-off annotations -->
    ${[
      { from: 0, to: 1, label: '-74%' },
      { from: 1, to: 2, label: '-72%' },
      { from: 2, to: 3, label: '-67%' },
    ].map(d => {
      const y = funnelT + d.from * rowH + rowH;
      return `<text x="${cx - (stages[d.from].pct / 100) * funnelW / 2 - 16}" y="${y}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.red}" text-anchor="end" font-weight="600">${d.label}</text>`;
    }).join('')}
    <!-- Bottom line -->
    <line x1="30" y1="262" x2="370" y2="262" stroke="#eee"/>
    <text x="200" y="276" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Only 2% of cities using AI have meaningful community oversight of those tools</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: AI Now Institute, GovAI survey, municipal records 2024-2025</text>
  </svg>`;
}

// ── Card Visual: Municipal AI Bill of Rights ──
function svgBillOfRights() {
  // Horizontal maturity chart — cities rated on 7 governance dimensions
  const dims = ['Transparency', 'Bias Audits', 'Community Input', 'Due Process', 'Equity Review', 'Sunset Clauses', 'Data Limits'];
  const cities = [
    { name: 'NYC', scores: [4, 3, 3, 2, 3, 1, 2], color: COLORS.blue },
    { name: 'San Francisco', scores: [3, 4, 2, 3, 3, 2, 3], color: COLORS.purple },
    { name: 'Seattle', scores: [3, 2, 4, 2, 2, 2, 2], color: COLORS.green },
    { name: 'Boston', scores: [2, 2, 2, 3, 2, 1, 2], color: COLORS.teal },
  ];
  const chartL = 85, chartR = 370, chartT = 68, rowH = 28;
  const chartW = chartR - chartL;
  const colW = chartW / dims.length;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">No major city has real AI oversight across every dimension that matters</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">How leading cities score on 7 dimensions of AI accountability (1-4 scale)</text>
    <!-- Dimension headers -->
    ${dims.map((d, i) => {
      const x = chartL + i * colW + colW / 2;
      return `<text x="${x}" y="${chartT - 6}" font-family="Inter,sans-serif" font-size="6.5" fill="${COLORS.gray}" text-anchor="middle" font-weight="500">${d}</text>`;
    }).join('')}
    <!-- Grid background -->
    ${dims.map((_, i) => {
      const x = chartL + i * colW;
      return `<rect x="${x}" y="${chartT}" width="${colW}" height="${cities.length * rowH}" fill="${i % 2 === 0 ? '#f8f8f8' : '#fff'}" stroke="none"/>`;
    }).join('')}
    <!-- City rows -->
    ${cities.map((c, ci) => {
      const y = chartT + ci * rowH;
      return `
        <text x="${chartL - 6}" y="${y + rowH / 2 + 3}" font-family="Inter,sans-serif" font-size="8.5" fill="${c.color}" text-anchor="end" font-weight="600">${c.name}</text>
        <line x1="${chartL}" y1="${y + rowH}" x2="${chartR}" y2="${y + rowH}" stroke="#eee" stroke-width="0.5"/>
        ${c.scores.map((s, di) => {
          const cx = chartL + di * colW + colW / 2;
          const cy = y + rowH / 2;
          const r = s * 3 + 2; // radius: 5, 8, 11, 14
          return `<circle class="anim-dot" style="animation-delay:${(ci * 7 + di) * 40}ms" cx="${cx}" cy="${cy}" r="${r}" fill="${c.color}" opacity="${0.2 + s * 0.18}"/>
          <text x="${cx}" y="${cy + 3}" font-family="Inter,sans-serif" font-size="8" fill="${s >= 3 ? '#fff' : c.color}" text-anchor="middle" font-weight="600">${s}</text>`;
        }).join('')}`;
    }).join('')}
    <!-- Scale legend -->
    <g transform="translate(${chartL}, ${chartT + cities.length * rowH + 14})">
      <text x="0" y="0" font-family="Inter,sans-serif" font-size="7.5" fill="${COLORS.gray}">Scale:</text>
      ${[1,2,3,4].map((s, i) => {
        const labels = ['Minimal','Developing','Established','Leading'];
        return `
          <circle cx="${40 + i * 72}" cy="-3" r="${s * 2.5 + 1}" fill="${COLORS.dark}" opacity="${0.15 + s * 0.15}"/>
          <text x="${40 + i * 72 + s * 2.5 + 6}" y="0" font-family="Inter,sans-serif" font-size="7" fill="${COLORS.gray}">${s} = ${labels[i]}</text>`;
      }).join('')}
    </g>
    <!-- Bottom line -->
    <line x1="30" y1="260" x2="370" y2="260" stroke="#eee"/>
    <text x="200" y="274" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">No city scores above 3 on all dimensions -- governance lags far behind deployment</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: AI Now Institute, municipal AI ordinances and executive orders</text>
  </svg>`;
}



// ── Card Visual: Sanctuary City Data to ICE ──
function svgSanctuaryData() {
  const flows = [
    { src: 'Local ALPR camera', mid: 'Regional fusion center', dest: 'ICE / HSI', color: COLORS.red },
    { src: 'Jail booking roster', mid: 'Nlets / commercial broker', dest: 'ICE / HSI', color: COLORS.orange },
    { src: 'DMV / license data', mid: 'State database share', dest: 'ICE / HSI', color: COLORS.purple },
    { src: 'Gang / intel DB', mid: 'Fusion center bulletin', dest: 'ICE / HSI', color: COLORS.teal },
  ];
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Four routes sanctuary-city data still reaches ICE</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Documented data flows that survive most sanctuary ordinances</text>
    <!-- Column headers -->
    <text x="70" y="62" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle" font-weight="600" letter-spacing="0.05em">LOCAL SOURCE</text>
    <text x="200" y="62" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle" font-weight="600" letter-spacing="0.05em">INTERMEDIARY</text>
    <text x="330" y="62" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle" font-weight="600" letter-spacing="0.05em">FEDERAL ENDPOINT</text>
    ${flows.map((f, i) => {
      const y = 88 + i * 48;
      return `
        <rect x="12" y="${y - 14}" width="116" height="28" fill="#fff" stroke="${f.color}" stroke-width="1.2" rx="2"/>
        <text x="70" y="${y + 4}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">${f.src}</text>
        <rect x="140" y="${y - 14}" width="120" height="28" fill="#fff" stroke="${COLORS.gray}" stroke-width="1" rx="2"/>
        <text x="200" y="${y + 4}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle">${f.mid}</text>
        <rect x="272" y="${y - 14}" width="116" height="28" fill="${f.color}" opacity="0.9" rx="2"/>
        <text x="330" y="${y + 4}" font-family="Inter,sans-serif" font-size="9" fill="#fff" text-anchor="middle" font-weight="600">${f.dest}</text>
        <line x1="128" y1="${y}" x2="140" y2="${y}" stroke="${f.color}" stroke-width="1.2"/>
        <line x1="260" y1="${y}" x2="272" y2="${y}" stroke="${f.color}" stroke-width="1.2"/>
      `;
    }).join('')}
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: EFF Atlas of Surveillance; Brennan Center; ACLU reporting on fusion centers</text>
  </svg>`;
}

// ── Card Visual: Municipal Fiscal Cliff ──
function svgFiscalCliff() {
  const lines = [
    { label: 'Personal income tax', value: 16.8, color: COLORS.red },
    { label: 'Property tax', value: 33.5, color: COLORS.purple },
    { label: 'Sales & use tax', value: 9.6, color: COLORS.orange },
    { label: 'Business taxes', value: 7.4, color: COLORS.teal },
  ];
  const total = lines.reduce((s, l) => s + l.value, 0);
  const chartL = 40, chartT = 80, chartW = 320, rowH = 34;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">NYC's tax base is exposed to knowledge-work compression</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">FY2025 NYC tax revenue, selected categories (billions of dollars)</text>
    <text x="200" y="56" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Every category shown is sensitive to white-collar employment, office occupancy, or consumer spending</text>
    ${lines.map((l, i) => {
      const y = chartT + i * rowH;
      const w = (l.value / 40) * chartW;
      return `
        <text x="${chartL}" y="${y}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" font-weight="500">${l.label}</text>
        <rect class="anim-bar" style="animation-delay:${i * 80}ms" x="${chartL}" y="${y + 4}" width="${w}" height="14" fill="${l.color}"/>
        <text x="${chartL + w + 6}" y="${y + 14}" font-family="Inter,sans-serif" font-size="9" fill="${l.color}" font-weight="700">$${l.value}B</text>
      `;
    }).join('')}
    <line x1="${chartL}" y1="${chartT + lines.length * rowH + 4}" x2="${chartL + chartW}" y2="${chartT + lines.length * rowH + 4}" stroke="#ddd"/>
    <text x="${chartL}" y="${chartT + lines.length * rowH + 22}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" font-weight="700">Exposed revenue shown</text>
    <text x="${chartL + chartW}" y="${chartT + lines.length * rowH + 22}" font-family="Inter,sans-serif" font-size="11" fill="${COLORS.dark}" text-anchor="end" font-weight="700">~$${total.toFixed(1)}B</text>
    <text x="${chartL}" y="${chartT + lines.length * rowH + 38}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">Out of roughly $80B in city tax revenue; ~$115B total budget including state and federal aid</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: NYC Office of Management and Budget; NYC Independent Budget Office; Citizens Budget Commission</text>
  </svg>`;
}

// ── Card Visual: Who Gets the Shelter Bed ──
function svgShelterBed() {
  const bars = [
    { label: 'White single adults', score: 7.2, color: COLORS.purple },
    { label: 'Black single adults', score: 5.9, color: COLORS.red },
    { label: 'White women', score: 6.8, color: COLORS.purple },
    { label: 'Black women', score: 5.3, color: COLORS.red },
  ];
  const chartL = 150, chartT = 80, chartW = 200, rowH = 34;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">The vulnerability score gap, at the same level of need</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Illustrative VI-SPDAT scores from a peer-reviewed Los Angeles cohort study</text>
    <text x="200" y="56" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Higher score = higher priority for housing; researchers found consistent racial gaps after adjustment</text>
    ${bars.map((b, i) => {
      const y = chartT + i * rowH;
      const w = (b.score / 10) * chartW;
      return `
        <text x="${chartL - 6}" y="${y + 14}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="end" font-weight="500">${b.label}</text>
        <rect class="anim-bar" style="animation-delay:${i * 80}ms" x="${chartL}" y="${y + 4}" width="${w}" height="16" fill="${b.color}"/>
        <text x="${chartL + w + 6}" y="${y + 16}" font-family="Inter,sans-serif" font-size="9" fill="${b.color}" font-weight="700">${b.score.toFixed(1)}</text>
      `;
    }).join('')}
    <line x1="${chartL}" y1="${chartT}" x2="${chartL}" y2="${chartT + bars.length * rowH}" stroke="#ccc"/>
    <text x="${chartL}" y="${chartT + bars.length * rowH + 18}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}">0</text>
    <text x="${chartL + chartW}" y="${chartT + bars.length * rowH + 18}" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="end">10 (highest need)</text>
    <text x="200" y="${chartT + bars.length * rowH + 40}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Same medical and housing situations; different scores</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Cronley (2022) in Journal of Social Distress and Homelessness; C4 Innovations VI-SPDAT review</text>
  </svg>`;
}

// ── Card Visual: Shadow AI in City Hall ──
function svgShadowAI() {
  const bars = [
    { label: 'Use AI tools at work', val: 75, color: COLORS.orange },
    { label: 'Use tools not approved by IT', val: 46, color: COLORS.red },
    { label: 'Paste work data into AI', val: 38, color: COLORS.red },
    { label: 'Employer has written policy', val: 27, color: COLORS.teal },
    { label: 'Received formal training', val: 14, color: COLORS.teal },
  ];
  const chartL = 170, chartT = 78, chartW = 180, rowH = 30;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Use is racing ahead of policy, training, and approval</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Knowledge workers reporting generative-AI behaviors at work, 2024-2025 surveys</text>
    <text x="200" y="56" font-family="Inter,sans-serif" font-size="8" fill="${COLORS.gray}" text-anchor="middle">Ranges shown reflect variation across Pew, McKinsey, Deloitte, and vendor surveys</text>
    ${bars.map((b, i) => {
      const y = chartT + i * rowH;
      const w = (b.val / 100) * chartW;
      return `
        <text x="${chartL - 6}" y="${y + 12}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="end" font-weight="500">${b.label}</text>
        <rect class="anim-bar" style="animation-delay:${i * 80}ms" x="${chartL}" y="${y + 2}" width="${w}" height="14" fill="${b.color}"/>
        <text x="${chartL + w + 6}" y="${y + 13}" font-family="Inter,sans-serif" font-size="9" fill="${b.color}" font-weight="700">~${b.val}%</text>
      `;
    }).join('')}
    <line x1="${chartL}" y1="${chartT}" x2="${chartL}" y2="${chartT + bars.length * rowH}" stroke="#ccc"/>
    <text x="200" y="${chartT + bars.length * rowH + 28}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">The gap between the top bar and the bottom is the shadow-AI problem</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: Pew Research 2025; McKinsey State of AI 2024; Deloitte GovAI 2024; NASCIO 2024</text>
  </svg>`;
}

// ── Card Visual: Procurement Capture ──
function svgProcurementCapture() {
  const contracts = [
    { label: 'NOLA Palantir Gotham (2012-18)', years: 6, color: COLORS.red },
    { label: 'NYPD Palantir (2008-17+)', years: 9, color: COLORS.red },
    { label: 'Chicago ShotSpotter (2018-24)', years: 6, color: COLORS.orange },
    { label: 'LAPD Axon body cams (multi-yr)', years: 5, color: COLORS.purple },
    { label: 'Typical CAD/RMS contract', years: 10, color: COLORS.teal },
  ];
  const chartL = 180, chartT = 78, chartW = 170, rowH = 32;
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
    <rect width="400" height="300" fill="#fafafa"/>
    <text x="200" y="24" font-family="Inter,sans-serif" font-size="11" font-weight="700" fill="${COLORS.dark}" text-anchor="middle" letter-spacing="0.02em">Long contracts lock cities in before anyone reviews them</text>
    <text x="200" y="40" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.gray}" text-anchor="middle">Duration of selected municipal surveillance and analytics contracts, in years</text>
    ${contracts.map((c, i) => {
      const y = chartT + i * rowH;
      const w = (c.years / 12) * chartW;
      return `
        <text x="${chartL - 6}" y="${y + 12}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="end" font-weight="500">${c.label}</text>
        <rect class="anim-bar" style="animation-delay:${i * 80}ms" x="${chartL}" y="${y + 2}" width="${w}" height="14" fill="${c.color}"/>
        <text x="${chartL + w + 6}" y="${y + 13}" font-family="Inter,sans-serif" font-size="9" fill="${c.color}" font-weight="700">${c.years} yrs</text>
      `;
    }).join('')}
    <line x1="${chartL}" y1="${chartT}" x2="${chartL}" y2="${chartT + contracts.length * rowH}" stroke="#ccc"/>
    ${[0,3,6,9,12].map(v => {
      const x = chartL + (v / 12) * chartW;
      return `<text x="${x}" y="${chartT + contracts.length * rowH + 14}" font-family="Inter,sans-serif" font-size="7.5" fill="${COLORS.gray}" text-anchor="middle">${v}</text>`;
    }).join('')}
    <text x="200" y="${chartT + contracts.length * rowH + 34}" font-family="Inter,sans-serif" font-size="9" fill="${COLORS.dark}" text-anchor="middle" font-weight="500">Multi-year terms outlast the mayors and councils that approved them</text>
    <text x="200" y="292" font-family="Inter,sans-serif" font-size="7.5" fill="#bbb" text-anchor="middle">Sources: The Verge / The Lens on NOLA-Palantir; MuckRock; Chicago Inspector General; city contract filings</text>
  </svg>`;
}
