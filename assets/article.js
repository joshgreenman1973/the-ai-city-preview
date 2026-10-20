/* Article page renderer: reads window.ARTICLE_SLUG, finds the article
   in the global `articles` array (assets/articles.js) and fills the page. */
(function () {
  const slug = window.ARTICLE_SLUG;
  const idx  = articles.findIndex(a => a.slug === slug);
  if (idx === -1) {
    document.body.innerHTML = '<p style="padding:60px;font-family:sans-serif">Article not found.</p>';
    return;
  }
  const a    = articles[idx];
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;
  const strip = s => s.replace(/<[^>]+>/g, '');

  const sectionClass = {
    'The Promise':             'cat-promise',
    'The Peril':               'cat-peril',
    'The Disruption':          'cat-disruption',
    'The Governance Question': 'cat-governance',
  }[a.section] || '';

  document.title = strip(a.title) + ' — The Algorithmic City';

  document.getElementById('article-hero').innerHTML = `
    <div class="article-hero-inner">
      <span class="article-category-pill ${sectionClass}">${a.category}</span>
      <h1>${a.title}</h1>
      <p class="article-dek">${a.subtitle}</p>
      <div class="article-byline">
        <span>By <strong>${a.author}</strong>, ${a.authorTitle}</span>
        <span class="sep">·</span>
        <span>October 2026</span>
        <span class="sep">·</span>
        <span>${a.section}</span>
      </div>
    </div>`;

  document.getElementById('article-lead').innerHTML =
    `<img src="../${a.image}" alt="${a.alt}">` +
    (a.credit ? `<figcaption class="art-credit">${a.credit}</figcaption>` : '');

  // Chart goes after the third paragraph
  function insertChart(body, chart) {
    if (!chart) return body;
    const parts = body.split('</p>');
    if (parts.length > 4) {
      parts.splice(3, 0, `<div class="inline-infographic">${chart}</div>`);
      return parts.join('</p>');
    }
    return body + chart;
  }
  document.getElementById('article-body').innerHTML = insertChart(a.body, a.chart);

  const nextBlock = next
    ? `<a class="next-article" href="${next.slug}.html"><em>Next in the issue</em>${next.title} →</a>`
    : '';
  document.getElementById('article-footer-nav').innerHTML = `
    ${nextBlock}
    <a href="../index.html">← Back to the issue</a>`;
})();
