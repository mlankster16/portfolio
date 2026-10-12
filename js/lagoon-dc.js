/* Tiny state helper for the Lagoon pages that have simple interactions (tabs, toggles, pickers).
   A page defines `class Component extends DCLogic` with `state` and `renderVals()`, then calls DCMount(Component).
   Markup hooks: data-if, data-text, data-click, data-style, data-bind-<attribute>. */
(function () {
  var UNITLESS = { fontWeight: 1, lineHeight: 1, opacity: 1, zIndex: 1, flex: 1, flexGrow: 1, flexShrink: 1, order: 1, aspectRatio: 1 };
  function DCLogic() { this.state = {}; this._root = null; }
  DCLogic.prototype.setState = function (p) {
    var n = typeof p === 'function' ? p(this.state) : p;
    this.state = Object.assign({}, this.state, n);
    this.render();
  };
  DCLogic.prototype.renderVals = function () { return {}; };
  DCLogic.prototype.render = function () {
    var v = this.renderVals(), root = this._root || document;
    root.querySelectorAll('[data-if]').forEach(function (e) { e.style.display = v[e.getAttribute('data-if')] ? 'contents' : 'none'; });
    root.querySelectorAll('[data-text]').forEach(function (e) { e.textContent = v[e.getAttribute('data-text')]; });
    root.querySelectorAll('[data-style]').forEach(function (e) {
      var o = v[e.getAttribute('data-style')] || {};
      Object.keys(o).forEach(function (k) {
        var val = o[k];
        if (typeof val === 'number' && !UNITLESS[k]) val = val + 'px';
        e.style[k] = val;
      });
    });
    root.querySelectorAll('*').forEach(function (e) {
      for (var i = 0; i < e.attributes.length; i++) {
        var a = e.attributes[i];
        if (a.name.indexOf('data-bind-') === 0) e.setAttribute(a.name.slice(10), String(v[a.value]));
      }
    });
  };
  window.DCLogic = DCLogic;
  window.DCMount = function (C) {
    var c = new C();
    document.querySelectorAll('[data-click]').forEach(function (e) {
      e.addEventListener('click', function () { var f = c.renderVals()[e.getAttribute('data-click')]; if (f) f(); });
    });
    c.render();
    return c;
  };
})();
