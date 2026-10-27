/* Portfolio Q&A chat. Matches what a visitor types to the closest answer in js/faq-data.js.
   No network calls, no storage, no AI. */
(function () {
  var D = window.FAQ_DATA;
  /* js/lagoon.js shows a stand-in "Ask a question" button and loads this file on first use. */
  var stub = document.getElementById('faq-launch');
  if (!D || (stub && !stub.hasAttribute('data-stub'))) return;

  /* ---------- Matching ---------- */
  var STOP = {};
  ('a an and are as at be but by can do does for from has have how i if in is it its me my of on or so that the their them then there these they this to was we what when where which who why will with you your yours about get got just really please tell give want like know could would should us our').split(' ').forEach(function (w) { STOP[w] = 1; });
  var ALIAS = { courses: 'course', specializations: 'specialization', nurses: 'nurse', tools: 'tool', platforms: 'platform', sprints: 'sprint', learners: 'learner', projects: 'project', experts: 'expert', teaching: 'teach', taught: 'teach', teacher: 'teach', designed: 'design', designer: 'design', designing: 'design', managing: 'manage', managed: 'manage', manager: 'manage', building: 'build', built: 'build', studied: 'study', studying: 'study', worked: 'work', working: 'work', accessible: 'accessibility', resume: 'resume', cv: 'resume', hire: 'contact', hiring: 'contact', email: 'contact', ai: 'ai' };
  function norm(s) {
    return String(s).toLowerCase().replace(/é/g, 'e').replace(/[‘’]/g, '\'').replace(/&/g, ' and ');
  }
  function stem(w) {
    if (ALIAS[w]) return ALIAS[w];
    if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + 'y';
    if (w.length > 4 && /(ing|ed)$/.test(w)) return w.replace(/(ing|ed)$/, '');
    if (w.length > 3 && /s$/.test(w) && !/ss$/.test(w)) return w.slice(0, -1);
    return w;
  }
  function tokens(s) {
    return norm(s).split(/[^a-z0-9+#]+/).filter(function (w) { return w && !STOP[w]; }).map(stem);
  }

  var items = D.items.map(function (it) {
    var f = {};
    function add(list, wt) { list.forEach(function (t) { if (!f[t] || f[t] < wt) f[t] = wt; }); }
    add(tokens(it.a.join(' ')), 1);
    add(tokens(it.keys || ''), 3);
    add(tokens(it.q), 4);
    return { item: it, f: f };
  });
  var df = {};
  items.forEach(function (x) { Object.keys(x.f).forEach(function (t) { df[t] = (df[t] || 0) + 1; }); });
  function idf(t) { return Math.log(1 + items.length / (df[t] || 1)); }

  function rank(text) {
    var q = tokens(text), low = norm(text);
    var seen = {}, uq = q.filter(function (t) { return seen[t] ? false : (seen[t] = 1); });
    return items.map(function (x) {
      var s = 0, hit = 0, strong = 0;
      uq.forEach(function (t) {
        if (x.f[t]) { s += x.f[t] * idf(t); hit++; if (x.f[t] >= 3) strong++; }
      });
      (x.item.phrases || []).forEach(function (p) { if ((' ' + low.replace(/[^a-z0-9+#]+/g, ' ') + ' ').indexOf(' ' + p + ' ') > -1) { s += 8 + 4 * p.split(' ').length; strong++; } });
      return { item: x.item, score: s, hit: hit / (uq.length || 1), strong: strong };
    }).filter(function (r) { return r.score > 0; }).sort(function (a, b) { return b.score - a.score; });
  }

  /* ---------- DOM helpers ---------- */
  function el(tag, attrs, kids) {
    var e = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === 'text') e.textContent = attrs[k];
      else if (k === 'class') e.className = attrs[k];
      else e.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  var ICON_CHAT = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>';
  var ICON_X = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var ICON_SEND = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Build the widget ---------- */
  var launch = stub || el('button', { type: 'button', id: 'faq-launch', class: 'faq-launch', 'aria-label': 'Ask a question', 'aria-expanded': 'false', 'aria-controls': 'faq-panel' });
  if (stub) { stub.removeAttribute('data-stub'); stub.removeAttribute('aria-busy'); }
  else launch.innerHTML = ICON_CHAT + '<span>Ask a question</span>';

  var panel = el('section', { id: 'faq-panel', class: 'faq-panel', role: 'dialog', 'aria-labelledby': 'faq-title', hidden: '' });
  var head = el('div', { class: 'faq-head' });
  var title = el('h2', { id: 'faq-title', class: 'faq-title', text: D.title });
  var close = el('button', { type: 'button', class: 'faq-close', 'aria-label': 'Close questions' });
  close.innerHTML = ICON_X;
  head.appendChild(title); head.appendChild(close);

  var log = el('div', { class: 'faq-log', role: 'log', 'aria-live': 'polite', 'aria-relevant': 'additions', tabindex: '0', 'aria-label': 'Conversation' });
  var form = el('form', { class: 'faq-form', autocomplete: 'off' });
  var input = el('input', { type: 'text', class: 'faq-input', id: 'faq-input', placeholder: 'Type a question', 'aria-label': 'Type your question', maxlength: '200', enterkeyhint: 'send' });
  var send = el('button', { type: 'submit', class: 'faq-send', 'aria-label': 'Send question' });
  send.innerHTML = ICON_SEND;
  form.appendChild(input); form.appendChild(send);
  var note = el('p', { class: 'faq-note', text: D.note });
  panel.appendChild(head); panel.appendChild(log); panel.appendChild(form); panel.appendChild(note);
  if (!stub) document.body.appendChild(launch);
  document.body.appendChild(panel);

  /* On the Branching Biology page a sticky Back/Next bar sits at the bottom. */
  if (document.getElementById('bwApp')) document.documentElement.classList.add('faq-lift');

  /* ---------- Conversation ---------- */
  function scrollEnd() { log.scrollTop = log.scrollHeight; }
  function bot(nodes) {
    var b = el('div', { class: 'faq-msg faq-bot' }, nodes);
    log.appendChild(b); log.scrollTop = Math.max(0, b.offsetTop - 14); return b;
  }
  function me(text) { log.appendChild(el('div', { class: 'faq-msg faq-me', text: text })); scrollEnd(); }
  function pageLinks(it) {
    if (!it.links) return null;
    var wrap = el('div', { class: 'faq-links' });
    if (it.links === 'contact') {
      wrap.appendChild(el('a', { class: 'faq-btn faq-btn-dark', href: 'mailto:' + D.email, text: 'Email Megan' }));
      var li = el('a', { class: 'faq-btn', href: D.linkedin, target: '_blank', rel: 'noopener', text: 'LinkedIn' });
      li.appendChild(el('span', { class: 'sr-only', text: ' (opens in a new tab)' }));
      wrap.appendChild(li);
      return wrap;
    }
    var many = it.links.length > 2;
    it.links.forEach(function (l) {
      var a = el('a', { class: many ? 'faq-row' : 'faq-btn', href: l.href });
      a.appendChild(el('span', { class: 'faq-row-t', text: l.label + (many ? '' : ' →') }));
      if (l.note) a.appendChild(el('span', { class: 'faq-row-n', text: l.note }));
      if (many) a.appendChild(el('span', { class: 'faq-row-go', 'aria-hidden': 'true', text: '→' }));
      wrap.appendChild(a);
    });
    return wrap;
  }
  function chips(list, cls) {
    var wrap = el('div', { class: 'faq-chips ' + (cls || '') });
    list.forEach(function (c) {
      var b = el('button', { type: 'button', class: 'faq-chip', text: c.label });
      b.addEventListener('click', c.run);
      wrap.appendChild(b);
    });
    return wrap;
  }
  function byId(id) { return D.items.filter(function (i) { return i.id === id; })[0]; }
  function related(it, n) {
    var same = D.items.filter(function (x) { return x.group === it.group && x.id !== it.id; });
    var other = D.items.filter(function (x) { return x.group !== it.group && x.id !== it.id; });
    return same.concat(other).slice(0, n);
  }
  function topicChips() {
    return chips(D.groups.map(function (g) { return { label: g.label, run: function () { showGroup(g.id, true); } }; }), 'faq-topics');
  }
  function questionChips(list) {
    return chips(list.map(function (it) { return { label: it.q, run: function () { ask(it.q, it); } }; }), 'faq-qs');
  }
  function showGroup(id, echo) {
    var g = D.groups.filter(function (x) { return x.id === id; })[0];
    if (echo) me(g.label);
    bot([el('p', { text: 'Here are the questions I\u2019ve answered under \u201C' + g.label + '\u201D:' }),
      questionChips(D.items.filter(function (i) { return i.group === id && i.id !== 'about-chat'; })),
      chips([{ label: 'Other topics', run: function () { bot([el('p', { text: 'Which topic would you like?' }), topicChips()]); } }], 'faq-more')]);
  }
  function answer(it) {
    var kids = it.a.map(function (p) { return el('p', { text: p }); });
    var links = pageLinks(it); if (links) kids.push(links);
    kids.push(el('p', { class: 'faq-more-l', text: 'You might also like:' }));
    kids.push(questionChips(related(it, 3)));
    bot(kids);
  }
  function ask(text, forced) {
    me(text);
    var hit = forced;
    if (!hit) {
      var r = rank(text);
      if (r.length && r[0].strong > 0 && r[0].score >= 4 && (r[0].hit >= 0.34 || r[0].score >= 9)) hit = r[0].item;
    }
    if (hit) { answer(hit); return; }
    var r2 = rank(text).slice(0, 3).map(function (x) { return x.item; });
    var sugg = r2.length ? r2 : D.items.filter(function (i) { return ['what-do-you-do', 'where-start', 'contact'].indexOf(i.id) > -1; });
    var kids = [el('p', { text: D.noMatch }), questionChips(sugg)];
    var l = el('div', { class: 'faq-links' });
    l.appendChild(el('a', { class: 'faq-btn faq-btn-dark', href: 'mailto:' + D.email, text: 'Email Megan' }));
    kids.push(l);
    bot(kids);
  }

  var started = false;
  function start() {
    started = true;
    bot([el('p', { text: D.greeting }), topicChips(),
      chips([{ label: 'Where should I start?', run: function () { ask('Where should I start?', byId('where-start')); } }], 'faq-more')]);
  }

  /* ---------- Open / close ---------- */
  var lastFocus = null;
  function open() {
    lastFocus = document.activeElement;
    panel.hidden = false;
    launch.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('faq-open');
    if (!started) start();
    setTimeout(function () { input.focus(); }, 30);
  }
  function shut() {
    panel.hidden = true;
    launch.setAttribute('aria-expanded', 'false');
    document.documentElement.classList.remove('faq-open');
    launch.focus();
  }
  launch.addEventListener('click', function () { if (panel.hidden) open(); else shut(); });
  close.addEventListener('click', shut);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { e.preventDefault(); shut(); }
    /* keep keyboard focus inside the open panel */
    if (e.key === 'Tab' && !panel.hidden) {
      var f = [].slice.call(panel.querySelectorAll('button, a[href], input')).filter(function (n) { return n.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = input.value.trim();
    if (!v) return;
    input.value = '';
    ask(v);
  });

  if (stub && window.FAQ_OPEN_ON_LOAD) open();
  /* Question starters on project pages: FAQ_ASK('item-id') opens the chat and answers that question. */
  window.FAQ_ASK = function (q) {
    var it = byId(q) || D.items.filter(function (i) { return i.q === q; })[0];
    if (panel.hidden) open();
    ask(it ? it.q : q, it);
  };
  if (window.FAQ_PENDING) { var pending = window.FAQ_PENDING; window.FAQ_PENDING = null; window.FAQ_ASK(pending); }
})();
