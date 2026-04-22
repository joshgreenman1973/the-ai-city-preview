/* Article page renderer — reads window.ARTICLE_SLUG, finds the article
   in the global `articles` array, and populates the page. */
(function () {
  const slug = window.ARTICLE_SLUG;
  const idx  = articles.findIndex(a => a.slug === slug);
  if (idx === -1) {
    document.body.innerHTML = '<p style="padding:60px;font-family:sans-serif">Article not found.</p>';
    return;
  }
  const a    = articles[idx];
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;

  // Category pill color per section
  const sectionClass = {
    'The Promise':            'cat-promise',
    'The Peril':              'cat-peril',
    'The Disruption':         'cat-disruption',
    'The Governance Question':'cat-governance',
  }[a.section] || '';

  // Page <title>
  document.title = a.title + ' — The Algorithmic City';

  // Hero
  const heroEl = document.getElementById('article-hero');
  heroEl.innerHTML = `
    <div class="article-hero-inner">
      <span class="article-category-pill ${sectionClass}">${a.category}</span>
      <h1>${a.title}</h1>
      <p class="article-dek">${a.subtitle}</p>
      <div class="article-byline">
        <span>By <strong>${a.author}</strong>, ${a.authorTitle}</span>
        <span class="sep">·</span>
        <span>April 2026</span>
        <span class="sep">·</span>
        <span>${a.section}</span>
      </div>
    </div>`;

  // Lead image
  const leadEl = document.getElementById('article-lead');
  leadEl.innerHTML = `<img src="../images/hero-${idx + 1}.png" alt="${a.title}">`;

  // Body with SVG infographic inserted after 3rd paragraph
  function insertInfographic(body, svg) {
    if (!svg) return body;
    const parts = body.split('</p>');
    if (parts.length > 4) {
      const inf = `<div class="inline-infographic animate-on-scroll">${svg}</div>`;
      parts.splice(3, 0, inf);
      return parts.join('</p>');
    }
    return body;
  }
  document.getElementById('article-body').innerHTML = insertInfographic(a.body, a.visual);

  // Footer nav
  const footerEl = document.getElementById('article-footer-nav');
  const nextBlock = next
    ? `<a class="next-article" href="${next.slug}.html"><em>Next in the issue</em>${next.title} →</a>`
    : '';
  footerEl.innerHTML = `
    ${nextBlock}
    <a href="../index.html">← Back to the issue</a>
  `;

  // Kick off chart animations on scroll
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.querySelectorAll('.anim-line, .anim-slope').forEach(x => {
          const len = x.getTotalLength ? x.getTotalLength() : 300;
          x.style.strokeDasharray  = len;
          x.style.strokeDashoffset = len;
          x.style.setProperty('--dash-length', len);
        });
        requestAnimationFrame(() => el.classList.add('animated'));
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
})();
