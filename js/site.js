/* Site-wide behavior: the "Samples" menu in the header, and the section strip on long project pages. */
(function () {
  /* ---- Samples menu ---- */
  var menu = document.querySelector('.nav-menu');
  if (menu) {
    var btn = menu.querySelector('.nav-menu-btn');

    function setOpen(open) {
      menu.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function () {
      setOpen(!menu.classList.contains('open'));
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) setOpen(false);
    });

    menu.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        setOpen(false);
        btn.focus();
      }
    });

    menu.addEventListener('focusout', function (e) {
      if (e.relatedTarget && !menu.contains(e.relatedTarget)) setOpen(false);
    });
  }

  /* ---- Section strip: highlight the section currently in view ---- */
  var strip = document.querySelector('.section-strip');
  if (strip && 'IntersectionObserver' in window) {
    var links = Array.prototype.slice.call(strip.querySelectorAll('a[href^="#"]'));
    var targets = links.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    });

    function setActive(id) {
      links.forEach(function (a) {
        var on = a.getAttribute('href') === '#' + id;
        a.classList.toggle('active', on);
        if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
      });
    }

    function update() {
      var offset = strip.offsetHeight + 60;
      var current = null;
      targets.forEach(function (t) {
        if (t && t.getBoundingClientRect().top - offset <= 0) current = t.id;
      });
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom && targets.length) current = targets[targets.length - 1].id;
      setActive(current || (targets[0] && targets[0].id));
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

  }

  /* Links that point at a section holding a collapsed <details> also open it */
  function expandFor(id) {
    var t = id && document.getElementById(id);
    if (!t || t.dataset.expand !== 'true') return;
    var d = t.nextElementSibling;
    if (d && d.tagName === 'DETAILS') d.open = true;
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (a) expandFor(a.getAttribute('href').slice(1));
  });
  expandFor(location.hash.slice(1));
})();
