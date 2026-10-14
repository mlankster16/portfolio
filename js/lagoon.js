/* Shared behavior for the Lagoon pages. */
(function () {
  /* Interactive embeds report their height; match it to the iframe that sent it. */
  window.addEventListener('message', function (e) {
    if (!e.data || e.data.type !== 'embed-resize') return;
    document.querySelectorAll('iframe[data-embed]').forEach(function (f) {
      if (f.contentWindow === e.source) f.style.height = Math.max(Number(f.dataset.min || 400), e.data.height) + 'px';
    });
  });
  /* Samples menu: a <details>. Close it on outside click or Escape. */
  document.addEventListener('click', function (e) {
    document.querySelectorAll('details[open]').forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute('open');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('nav details[open]').forEach(function (d) {
      d.removeAttribute('open');
      var s = d.querySelector('summary');
      if (s) s.focus();
    });
  });
  /* Section strips (Résumé, Project Management): highlight the section on screen. */
  var strip = document.querySelector('.pill-strip');
  if (strip) {
    var links = [].slice.call(strip.querySelectorAll('a[href^="#"]'));
    var spy = function () {
      var cur = links[0];
      links.forEach(function (a) {
        var t = document.querySelector(a.getAttribute('href'));
        if (t && t.getBoundingClientRect().top <= 140) cur = a;
      });
      links.forEach(function (a) {
        var on = a === cur;
        a.style.background = on ? '#0F2E33' : 'transparent';
        a.style.color = on ? '#fff' : '#4B6468';
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
        if (on && strip.scrollWidth > strip.clientWidth) {
          var l = a.offsetLeft - (strip.clientWidth - a.offsetWidth) / 2;
          strip.scrollLeft = l;
        }
      });
    };
    window.addEventListener('scroll', spy, { passive: true });
    window.addEventListener('resize', spy);
    spy();
  }
  /* Q&A chat: load its styles, answers, and script on every page. */
  (function () {
    var css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = 'css/faq.css?v=4';
    document.head.appendChild(css);
    function load(src, next) {
      var t = document.createElement('script');
      t.src = src; t.onload = next || null;
      document.body.appendChild(t);
    }
    load('js/faq-data.js?v=15', function () { load('js/faq.js?v=8'); });
  })();
})();
