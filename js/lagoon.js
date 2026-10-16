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
  /* Q&A chat. The button shows right away; the answers (about 85KB) and the chat script
     load only when a visitor goes for it (hover, focus, touch, or click). */
  (function () {
    var css = document.createElement('link');
    css.rel = 'stylesheet'; css.href = 'css/faq.css?v=5';
    document.head.appendChild(css);
    var btn = document.createElement('button');
    btn.type = 'button'; btn.id = 'faq-launch'; btn.className = 'faq-launch';
    btn.setAttribute('data-stub', ''); btn.setAttribute('aria-label', 'Ask a question'); btn.setAttribute('aria-controls', 'faq-panel'); btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg><span>Ask a question</span>';
    document.body.appendChild(btn);
    var state = 0; /* 0 = idle, 1 = loading, 2 = ready */
    function load(src, next) {
      var t = document.createElement('script');
      t.src = src; t.onload = next || null;
      t.onerror = function () { state = 0; btn.removeAttribute('aria-busy'); };
      document.body.appendChild(t);
    }
    function fetchChat() {
      if (state) return;
      state = 1;
      load('js/faq-data.js?v=34', function () { load('js/faq.js?v=10'); });
    }
    ['pointerenter', 'focus', 'touchstart'].forEach(function (ev) { btn.addEventListener(ev, fetchChat, { passive: true }); });
    btn.addEventListener('click', function () {
      if (!btn.hasAttribute('data-stub')) return; /* the chat script has taken over this button */
      window.FAQ_OPEN_ON_LOAD = true;
      btn.setAttribute('aria-busy', 'true');
      fetchChat();
    });
  })();
})();
