/* Small state helper for the Lagoon pages that have interactions (tabs, toggles, pickers, simulators).
   A page defines `class Component extends DCLogic` with `state` and `renderVals()`, then calls DCMount(Component).
   Markup hooks:
     data-if="name"            show or hide (display: contents / none)
     data-text="name"          set the text
     data-style="name"         apply a style object
     data-bind-<attr>="name"   set an attribute (and the value property on inputs)
     data-click / data-enter / data-leave / data-change / data-focus = "name"   event handlers
     data-for="list" data-as="item"   repeat the children once per item; inside, use "item.prop"
   Names can be paths like "item.label". */
(function () {
  var UNITLESS = { fontWeight: 1, lineHeight: 1, opacity: 1, zIndex: 1, flex: 1, flexGrow: 1, flexShrink: 1, order: 1, aspectRatio: 1 };
  var EVENTS = [['click', 'data-click', 'click'], ['mouseenter', 'data-enter', 'mouseenter'], ['mouseleave', 'data-leave', 'mouseleave'],
    ['input', 'data-change', 'input'], ['focus', 'data-focus', 'focus']];

  function lookup(path, scopes) {
    var parts = String(path).split('.'), i, v, found = false;
    for (i = scopes.length - 1; i >= 0; i--) {
      if (scopes[i] && Object.prototype.hasOwnProperty.call(scopes[i], parts[0])) { v = scopes[i][parts[0]]; found = true; break; }
    }
    if (!found) return undefined;
    for (i = 1; i < parts.length; i++) { if (v == null) return undefined; v = v[parts[i]]; }
    return v;
  }

  function DCLogic() { this.state = {}; this._root = null; }
  DCLogic.prototype.setState = function (p) {
    var n = typeof p === 'function' ? p(this.state) : p;
    this.state = Object.assign({}, this.state, n);
    this.render();
  };
  DCLogic.prototype.renderVals = function () { return {}; };
  DCLogic.prototype.render = function () {
    var vals = this.renderVals();
    this._update(this._root || document.body, [vals]);
  };

  function applyStyle(e, o) {
    Object.keys(o || {}).forEach(function (k) {
      var val = o[k];
      if (typeof val === 'number' && !UNITLESS[k]) val = val + 'px';
      e.style[k] = val;
    });
  }

  function bind(e, scopes) {
    var a, n, i;
    e.__scopes = scopes;
    if (e.hasAttribute('data-if')) e.style.display = lookup(e.getAttribute('data-if'), scopes) ? 'contents' : 'none';
    if (e.hasAttribute('data-text')) { var t = lookup(e.getAttribute('data-text'), scopes); e.textContent = t == null ? '' : t; }
    if (e.hasAttribute('data-style')) applyStyle(e, lookup(e.getAttribute('data-style'), scopes));
    for (i = 0; i < e.attributes.length; i++) {
      a = e.attributes[i];
      if (a.name.indexOf('data-bind-') === 0) {
        n = a.name.slice(10);
        var v = lookup(a.value, scopes);
        e.setAttribute(n, String(v));
        if (n === 'value' && 'value' in e && String(e.value) !== String(v)) e.value = v;
      }
    }
    if (!e.__wired) {
      e.__wired = true;
      EVENTS.forEach(function (ev) {
        if (e.hasAttribute(ev[1])) {
          e.addEventListener(ev[2], function (evt) {
            var f = lookup(e.getAttribute(ev[1]), e.__scopes);
            if (typeof f === 'function') f(evt);
          });
        }
      });
    }
  }

  DCLogic.prototype._update = function (el, scopes) {
    var self = this;
    if (el.nodeType !== 1) return;
    bind(el, scopes);
    if (el.hasAttribute('data-for')) {
      if (el.__tpl == null) { el.__tpl = el.innerHTML; el.innerHTML = ''; }
      var list = lookup(el.getAttribute('data-for'), scopes) || [];
      var as = el.getAttribute('data-as') || 'item';
      while (el.children.length < list.length) {
        var w = document.createElement('span');
        w.style.display = 'contents';
        w.innerHTML = el.__tpl;
        el.appendChild(w);
      }
      while (el.children.length > list.length) el.removeChild(el.lastElementChild);
      for (var i = 0; i < list.length; i++) {
        var scope = {}; scope[as] = list[i];
        self._update(el.children[i], scopes.concat([scope]));
      }
      return;
    }
    for (var c = el.firstElementChild; c; c = c.nextElementSibling) self._update(c, scopes);
  };

  window.DCLogic = DCLogic;
  window.DCMount = function (C) {
    var c = new C();
    c.render();
    return c;
  };
})();
