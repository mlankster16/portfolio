/* Light the Beacon, toy-world edition: every picture in the game is built here as a 3D model.
   Needs js/three.min.js (r149). Exposes window.BeaconToy. */
(function () {
  'use strict';
  var T = window.THREE;
  var root = document.documentElement;
  if (!T) return;
  if (T.ColorManagement) T.ColorManagement.legacyMode = false;
  var PI = Math.PI;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var C = {
    sky: 0xBFE3FF, sea: 0x1E63D6, foam: 0xFFFFFF, white: 0xFFFFFF, cream: 0xFFF8E6,
    sand: 0xFFD21F, peach: 0xF6A81A, coral: 0xE8262A, pink: 0xFF5A4E, rose: 0xF2C230,
    lilac: 0x3C7BEA, violet: 0x1746B0, stone: 0xD9DEE8, navy: 0x0F1F4D,
    mint: 0x3FB34F, green: 0x1F9A45, teal: 0x0E7A4A, yellow: 0xFFD21F, gold: 0xFFB800,
    blue: 0x1E63D6, wood: 0xD9893A, woodDk: 0xB06A22, glass: 0xCFE8FF, red: 0xE8262A,
    storm: 0x6F7C99, off: 0xC9CED9
  };

  var ST = { sky: 0x24386E, sea: 0x163F96, cloud: 0x4A5C8F, dark: 0x1B2A57 };   // the storm, until the ship is safe

  /* ---------- small modelling kit ---------- */
  var mats = {};
  function M(color, o) {
    o = o || {};
    var k = color + '|' + (o.opacity || 1) + '|' + (o.glow || 0) + '|' + (o.flat ? 1 : 0) + '|' + (o.basic ? 1 : 0) + '|' + (o.side || 0);
    if (mats[k]) return mats[k];
    var m;
    if (o.basic) m = new T.MeshBasicMaterial({ color: color });
    else m = new T.MeshStandardMaterial({ color: color, roughness: 0.82, metalness: 0, flatShading: !!o.flat });
    if (o.opacity) { m.transparent = true; m.opacity = o.opacity; m.depthWrite = false; }
    if (o.glow && !o.basic) { m.emissive = new T.Color(color); m.emissiveIntensity = o.glow; }
    if (o.side) m.side = T.DoubleSide;
    return (mats[k] = m);
  }
  function mesh(geo, color, o) {
    var m = new T.Mesh(geo, M(color, o));
    var ghost = o && (o.opacity || o.basic || o.noShadow);
    m.castShadow = !ghost; m.receiveShadow = !ghost;
    return m;
  }
  function at(m, x, y, z) { m.position.set(x, y, z); return m; }
  function rot(m, x, y, z) { m.rotation.set(x || 0, y || 0, z || 0); return m; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function rboxGeo(w, h, d, r) {
    var g = new T.BoxGeometry(w, h, d, 5, 5, 5), p = g.attributes.position, n = g.attributes.normal;
    var hx = w / 2 - r, hy = h / 2 - r, hz = d / 2 - r, v = new T.Vector3(), c = new T.Vector3();
    for (var i = 0; i < p.count; i++) {
      v.fromBufferAttribute(p, i);
      c.set(clamp(v.x, -hx, hx), clamp(v.y, -hy, hy), clamp(v.z, -hz, hz));
      v.sub(c); if (v.lengthSq() < 1e-10) continue; v.normalize();
      n.setXYZ(i, v.x, v.y, v.z); p.setXYZ(i, c.x + v.x * r, c.y + v.y * r, c.z + v.z * r);
    }
    return g;
  }
  function box(w, h, d, color, o) { var r = o && o.r != null ? o.r : Math.min(w, h, d) * 0.16; return mesh(r > 0 ? rboxGeo(w, h, d, r) : new T.BoxGeometry(w, h, d), color, o); }
  function cyl(rt, rb, h, color, o) { return mesh(new T.CylinderGeometry(rt, rb, h, (o && o.seg) || 36), color, o); }
  function sph(r, color, o) { return mesh(new T.SphereGeometry(r, 28, 20), color, o); }
  function cone(r, h, color, o) { return mesh(new T.ConeGeometry(r, h, (o && o.seg) || 36), color, o); }
  function tor(R, r, color, o) { return mesh(new T.TorusGeometry(R, r, 12, 48, (o && o.arc) || PI * 2), color, o); }
  function prism(w, h, d, color) {
    var s = new T.Shape(); s.moveTo(-w / 2, 0); s.lineTo(w / 2, 0); s.lineTo(0, h); s.closePath();
    var g = new T.ExtrudeGeometry(s, { depth: d, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2 }); g.translate(0, 0, -d / 2);
    return mesh(g, color);
  }
  function tube(pts, r, color, o) {
    var curve = new T.CatmullRomCurve3(pts.map(function (p) { return new T.Vector3(p[0], p[1], p[2]); }));
    return mesh(new T.TubeGeometry(curve, 28, r, 8, false), color, o);
  }
  function blobGeo(r, h, seed, taper) {
    var g = new T.CylinderGeometry(r * (taper || 0.9), r, h, 56, 1), p = g.attributes.position;
    for (var i = 0; i < p.count; i++) {
      var x = p.getX(i), z = p.getZ(i), a = Math.atan2(z, x);
      var k = 1 + 0.1 * Math.sin(a * 3 + seed) + 0.06 * Math.sin(a * 5 + seed * 2.3) + 0.035 * Math.sin(a * 8 + seed * 4.1);
      p.setX(i, x * k); p.setZ(i, z * k);
    }
    g.computeVertexNormals(); return g;
  }
  function blob(r, h, color, seed, taper) { return mesh(blobGeo(r, h, seed, taper), color); }
  function boltMesh(s, own) {
    var sh = new T.Shape(), P = [[0.3, 1], [-0.42, 0.02], [-0.02, 0.02], [-0.3, -1], [0.44, 0.2], [0.04, 0.2]];
    sh.moveTo(P[0][0] * s, P[0][1] * s); for (var i = 1; i < P.length; i++) sh.lineTo(P[i][0] * s, P[i][1] * s); sh.closePath();
    var g = new T.ExtrudeGeometry(sh, { depth: 0.14 * s, bevelEnabled: true, bevelSize: 0.03 * s, bevelThickness: 0.03 * s, bevelSegments: 2 }); g.translate(0, 0, -0.07 * s);
    var m = mesh(g, C.yellow, { glow: 0.35 }); if (own) m.material = m.material.clone(); return m;
  }
  function cloud(s, color) {
    var g = new T.Group(), c = color || C.white;
    [[0, 0, 0, 1], [0.95, -0.12, 0.1, 0.72], [-0.95, -0.15, 0, 0.68], [0.4, 0.4, -0.15, 0.7], [-0.45, 0.32, 0.1, 0.62]].forEach(function (b) {
      var m = sph(b[3], c, { noShadow: true }); m.scale.y = 0.78; g.add(at(m, b[0], b[1], b[2]));
    });
    g.scale.setScalar(s); return g;
  }
  function rain(n, w, h, d, cx, cy, cz, s) {
    var g = new T.Group(); s = s || 1;
    for (var i = 0; i < n; i++) { var r = box(0.05 * s, 0.5 * s, 0.05 * s, C.white, { r: 0, opacity: 0.7, basic: true }); r.userData.x = cx - w / 2 + ((i * 7.31) % w); r.userData.o = (i * 3.77) % h; r.position.set(r.userData.x, cy, cz - d / 2 + ((i * 2.93) % d)); r.rotation.z = -0.28; g.add(r); }
    g.userData.tick = function (t) { g.children.forEach(function (r) { var f = (r.userData.o + t * 9 * s) % h; r.position.y = cy + h / 2 - f; r.position.x = r.userData.x - f * 0.28; }); };
    g.userData.tick(0.4); return g;
  }
  function pine(s, c1, c2) {
    var g = new T.Group();
    g.add(at(cyl(0.09, 0.11, 0.4, C.woodDk), 0, 0.2, 0));
    g.add(at(cone(0.5, 0.75, c1 || C.green), 0, 0.7, 0));
    g.add(at(cone(0.4, 0.65, c2 || C.mint), 0, 1.12, 0));
    g.add(at(cone(0.28, 0.5, c1 || C.green), 0, 1.5, 0));
    g.scale.setScalar(s); return g;
  }
  function battery(color) {
    var g = new T.Group();
    g.add(at(cyl(0.13, 0.13, 0.4, color || C.mint), 0, 0.2, 0));
    g.add(at(cyl(0.135, 0.135, 0.08, C.navy), 0, 0.3, 0));
    g.add(at(cyl(0.05, 0.05, 0.08, C.gold), 0, 0.44, 0));
    return g;
  }

  /* ---------- props that appear in several pictures ---------- */
  function lensProp(lit) {            // faces +z, radius about 1.15
    var g = new T.Group();
    g.add(rot(cyl(1, 1, 0.14, C.glass, { opacity: 0.6 }), PI / 2));
    g.add(at(tor(1.08, 0.1, C.gold), 0, 0, 0.02));
    [0.8, 0.58, 0.36].forEach(function (r, i) { g.add(at(tor(r, 0.055, i === 1 ? C.blue : C.white), 0, 0, 0.1)); });
    for (var i = 0; i < 8; i++) { var s = box(0.07, 0.9, 0.06, C.gold, { r: 0.02 }); s.position.set(Math.cos(i * PI / 4) * 0.56, Math.sin(i * PI / 4) * 0.56, 0.04); s.rotation.z = i * PI / 4 - PI / 2; g.add(s); }
    g.add(at(sph(0.2, lit ? C.yellow : 0xFFE9B8, lit ? { glow: 0.9 } : null), 0, 0, 0.12));
    return g;
  }
  var SOLVED = 'ggggbbbbbbbbgggggggg';
  function lensUnit(plate) {          // faces +z; the 20 puzzle panels sit on the brass rim (radius 1.08)
    var g = new T.Group(), U = g.userData, studs = [], i;
    g.add(rot(cyl(1, 1, 0.14, C.glass, { opacity: 0.6 }), PI / 2));
    g.add(at(tor(1.08, 0.1, C.gold), 0, 0, 0.02));
    [0.8, 0.58].forEach(function (r, k) { g.add(at(tor(r, 0.055, k ? C.blue : C.white), 0, 0, 0.1)); });
    for (i = 0; i < 8; i++) { var sp = box(0.07, 0.42, 0.06, C.gold, { r: 0.02 }); sp.position.set(Math.cos(i * PI / 4) * 0.78, Math.sin(i * PI / 4) * 0.78, 0.04); sp.rotation.z = i * PI / 4 - PI / 2; g.add(sp); }
    var halo = sph(0.62, 0xFFF3B0, { opacity: 0.45, basic: true }); halo.position.z = 0.1; halo.visible = false; g.add(halo);
    var bulbM = new T.MeshStandardMaterial({ color: 0xFFE9B8, roughness: 0.8 }), bulb;
    if (plate) { bulb = new T.Mesh(new T.CylinderGeometry(0.5, 0.5, 0.08, 40), bulbM); bulb.rotation.x = PI / 2; bulb.position.z = 0.16; g.add(at(tor(0.5, 0.045, C.gold), 0, 0, 0.18)); }
    else { bulb = new T.Mesh(new T.SphereGeometry(0.24, 28, 20), bulbM); bulb.position.z = 0.14; }
    g.add(bulb);
    for (i = 0; i < 20; i++) {
      var a = i / 20 * PI * 2 - PI / 2, m = new T.Mesh(new T.CylinderGeometry(0.135, 0.135, 0.12, 28), new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }));
      m.rotation.x = PI / 2; m.position.set(Math.cos(a) * 1.08, -Math.sin(a) * 1.08, 0.12); m.castShadow = true; g.add(m); studs.push(m);
      if (i < 4) g.add(at(tor(0.155, 0.03, 0xC98A12), m.position.x, m.position.y, 0.15));
    }
    U.set = function (on, slots) {
      slots = slots && slots.length === 20 ? slots : 'gggg----------------';
      if (U.key === on + slots) return; U.key = on + slots;
      studs.forEach(function (m, k) {
        var c = slots[k], col = c === 'b' ? C.blue : c === 'g' ? 0xFFC400 : 0xEEF3FF;
        m.material.color.setHex(col); m.material.emissive.setHex(on && c !== '-' ? col : 0x000000); m.material.emissiveIntensity = 0.55;
        m.scale.setScalar(c === '-' ? 0.72 : 1); m.scale.y = 1;
      });
      bulbM.color.setHex(on ? (plate ? 0xFFF6CF : C.yellow) : (plate ? 0xFFFFFF : 0xFFE9B8)); bulbM.emissive.setHex(on ? 0xFFD35C : 0x000000); bulbM.emissiveIntensity = plate ? 0.25 : 0.9;
      halo.visible = !!on; U.on = !!on;
    };
    U.tick = function (t) { if (U.on) halo.scale.setScalar(1 + Math.sin(t * 2.4) * 0.08); };
    U.set(false, '');
    return g;
  }
  function generatorProp() {          // about 3.4 wide, 2 tall
    var g = new T.Group(), U = g.userData;
    g.add(at(box(3.5, 0.26, 1.8, C.navy), 0, 0.13, 0));
    g.add(at(box(1.5, 1.25, 1.35, C.teal), -0.65, 0.88, 0));
    var drum = rot(cyl(0.64, 0.64, 1.35, C.yellow), 0, 0, PI / 2); g.add(at(drum, 0.95, 0.95, 0));
    [0.32, 0.95, 1.58].forEach(function (x) { g.add(at(rot(tor(0.66, 0.075, C.coral), 0, PI / 2, 0), x, 0.95, 0)); });
    g.add(at(rot(cyl(0.3, 0.3, 0.2, C.navy), 0, 0, PI / 2), 1.72, 0.95, 0));
    var fw = new T.Group(); fw.add(tor(0.62, 0.1, C.coral)); fw.add(rot(cyl(0.16, 0.16, 0.22, C.yellow), PI / 2));
    for (var i = 0; i < 4; i++) fw.add(rot(box(0.08, 1.2, 0.08, C.coral, { r: 0.02 }), 0, 0, i * PI / 4));
    g.add(at(rot(fw, 0, PI / 2, 0), -1.56, 0.95, 0));
    g.add(at(cyl(0.11, 0.11, 0.9, C.lilac), -0.95, 1.9, -0.3)); g.add(at(cyl(0.16, 0.16, 0.12, C.lilac), -0.95, 2.36, -0.3));
    var puffs = [at(sph(0.2, C.white, { noShadow: true }), -0.9, 2.72, -0.3), at(sph(0.15, C.white, { noShadow: true }), -0.7, 3.0, -0.25), at(sph(0.11, C.white, { noShadow: true }), -0.95, 3.3, -0.3)];
    puffs.forEach(function (pf) { g.add(pf); });
    g.add(at(rot(cyl(0.3, 0.3, 0.08, C.white), PI / 2), -0.95, 1.05, 0.7)); g.add(at(rot(tor(0.3, 0.045, C.navy)), -0.95, 1.05, 0.72));
    var needle = new T.Group(); needle.add(at(box(0.04, 0.24, 0.04, C.red, { r: 0.01 }), 0, 0.1, 0)); needle.position.set(-0.95, 1.02, 0.76); g.add(needle);
    [C.coral, C.yellow, C.mint].forEach(function (c, k) { g.add(at(sph(0.08, c), -0.44 + k * 0.2, 0.62, 0.69)); });
    var bolt = boltMesh(0.26, true); g.add(at(bolt, -0.25, 1.1, 0.72));
    U.set = function (on) {
      U.on = !!on; bolt.material.color.setHex(on ? C.yellow : C.off); bolt.material.emissive.setHex(on ? C.yellow : 0x000000);
      needle.rotation.z = on ? -0.9 : 0.9; puffs.forEach(function (pf) { pf.visible = !!on; });
    };
    U.tick = function (t) {
      if (!U.on) return; fw.rotation.z = t * 5; needle.rotation.z = -0.9 + Math.sin(t * 7) * 0.09;
      puffs.forEach(function (pf, k) { var f = (t * 0.45 + k * 0.33) % 1; pf.position.y = 2.6 + f * 1.1; pf.scale.setScalar(0.6 + f * 0.9); });
    };
    U.set(false);
    return g;
  }
  function packRack(n, dead) {
    var g = new T.Group(), cols = Math.ceil(n / 2);
    g.add(at(box(cols * 0.36 + 0.2, 0.14, 0.9, C.woodDk), 0, 0.07, 0));
    for (var i = 0; i < n; i++) { var b = battery(i >= n - (dead || 0) ? C.off : C.mint); g.add(at(b, (i % cols - (cols - 1) / 2) * 0.36, 0.14, i < cols ? -0.2 : 0.2)); }
    return g;
  }
  function radioProp() {              // radio set on a desk, about 3.3 wide
    var g = new T.Group(), U = g.userData;
    g.add(at(box(3.3, 0.2, 1.5, C.wood), 0, 1.1, 0));
    [[-1.45, -0.55], [1.45, -0.55], [-1.45, 0.55], [1.45, 0.55]].forEach(function (p) { g.add(at(box(0.18, 1.0, 0.18, C.woodDk), p[0], 0.5, p[1])); });
    var set = new T.Group();
    set.add(at(box(1.6, 0.95, 0.75, C.coral), 0, 0.475, 0));
    set.add(at(rot(cyl(0.3, 0.3, 0.06, C.cream), PI / 2), -0.42, 0.5, 0.385)); set.add(at(tor(0.3, 0.04, C.navy), -0.42, 0.5, 0.4));
    [-0.12, 0, 0.12].forEach(function (y) { set.add(at(box(0.36, 0.035, 0.03, C.navy, { r: 0.01 }), -0.42, 0.5 + y, 0.42)); });
    var dial = box(0.6, 0.24, 0.05, C.cream, { r: 0.03 }); dial.material = new T.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 }); set.add(at(dial, 0.36, 0.66, 0.385));
    var needle = at(box(0.03, 0.2, 0.03, C.red, { r: 0.01 }), 0.2, 0.66, 0.42); set.add(needle);
    set.add(at(rot(cyl(0.1, 0.1, 0.1, C.yellow), PI / 2), 0.2, 0.3, 0.42)); set.add(at(rot(cyl(0.1, 0.1, 0.1, C.mint), PI / 2), 0.52, 0.3, 0.42));
    set.add(at(rot(cyl(0.025, 0.025, 1.3, C.navy), 0, 0, -0.35), 0.75, 1.5, -0.1)); set.add(at(sph(0.08, C.yellow), 0.97, 2.1, -0.1));
    var waves = [0.3, 0.5, 0.7].map(function (r) { var w = at(rot(tor(r, 0.035, C.teal, { arc: PI / 2, noShadow: true }), 0, 0, -PI / 4 + 0.2), 0.97, 2.1, -0.1); set.add(w); return w; });
    g.add(at(set, -0.55, 1.2, -0.1));
    g.add(at(cyl(0.14, 0.17, 0.06, C.navy), 0.75, 1.23, 0.3)); g.add(at(cyl(0.03, 0.03, 0.5, C.navy), 0.75, 1.48, 0.3)); g.add(at(sph(0.13, C.lilac), 0.75, 1.78, 0.3));
    [1.18, 1.44].forEach(function (x) { g.add(at(rot(cyl(0.11, 0.13, 0.4, C.navy), PI / 2), x, 1.33, 0.25)); g.add(at(rot(cyl(0.1, 0.1, 0.03, C.glass), PI / 2), x, 1.33, 0.46)); });
    g.add(at(box(0.9, 0.03, 0.6, C.cream, { r: 0.01 }), 0.2, 1.215, 0.42)); [0, 1, 2].forEach(function (k) { g.add(at(box(0.6, 0.012, 0.03, C.blue, { r: 0 }), 0.2, 1.235, 0.25 + k * 0.14)); });
    g.add(at(cyl(0.42, 0.42, 0.14, C.pink), 0.1, 0.72, 1.45)); g.add(at(cyl(0.07, 0.1, 0.66, C.woodDk), 0.1, 0.33, 1.45));
    U.set = function (on) {
      U.on = !!on; waves.forEach(function (w) { w.visible = !!on; });
      dial.material.color.setHex(on ? 0xFFE27A : 0xE6E1F2); dial.material.emissive.setHex(on ? 0xFFD35C : 0x000000); dial.material.emissiveIntensity = 0.6; needle.position.x = on ? 0.44 : 0.14;
    };
    U.tick = function (t) { if (!U.on) return; waves.forEach(function (w, k) { w.visible = ((t * 1.6) % 4) > k; }); needle.position.x = 0.38 + Math.sin(t * 2.2) * 0.16; };
    U.set(false);
    return g;
  }
  function wheelProp() {              // ship's wheel on a stand, faces +z
    var g = new T.Group(), w = new T.Group();
    w.add(tor(0.72, 0.085, C.gold)); w.add(rot(cyl(0.2, 0.2, 0.2, C.coral), PI / 2));
    for (var i = 0; i < 8; i++) { var s = rot(cyl(0.045, 0.045, 2.0, C.wood), 0, 0, i * PI / 4); w.add(s); if (i < 8) { var a = i * PI / 4 + PI / 2; w.add(at(sph(0.085, C.coral), Math.cos(a) * 1.02, Math.sin(a) * 1.02, 0)); w.add(at(sph(0.085, C.coral), -Math.cos(a) * 1.02, -Math.sin(a) * 1.02, 0)); i += 0; } if (i >= 3) break; }
    g.add(at(w, 0, 1.7, 0.22)); g.userData.wheel = w;
    g.add(at(cyl(0.2, 0.34, 1.5, C.white), 0, 0.75, 0)); g.add(at(cyl(0.45, 0.5, 0.16, C.coral), 0, 0.08, 0)); g.add(at(rot(cyl(0.07, 0.07, 0.4, C.navy), PI / 2), 0, 1.7, 0.05));
    return g;
  }
  function bunting(a, b, sag, n) {
    var g = new T.Group(), cols = [C.coral, C.yellow, C.blue, C.white, C.mint, C.pink, C.violet];
    var mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2 - sag, (a[2] + b[2]) / 2];
    g.add(tube([a, mid, b], 0.018, C.navy));
    var curve = new T.CatmullRomCurve3([new T.Vector3(a[0], a[1], a[2]), new T.Vector3(mid[0], mid[1], mid[2]), new T.Vector3(b[0], b[1], b[2])]);
    for (var i = 0; i < n; i++) { var p = curve.getPoint((i + 0.7) / (n + 0.4)); var f = box(0.26, 0.3, 0.03, cols[i % cols.length], { r: 0.012 }); f.position.set(p.x, p.y - 0.17, p.z); f.rotation.y = Math.atan2(b[0] - a[0], b[2] - a[2]) + PI / 2; g.add(f); }
    return g;
  }
  function shipProp() {               // bow points to -x
    var g = new T.Group(), s = new T.Shape();
    s.moveTo(1.45, -0.6); s.lineTo(-0.5, -0.6); s.quadraticCurveTo(-1.5, -0.45, -2.0, 0); s.quadraticCurveTo(-1.5, 0.45, -0.5, 0.6); s.lineTo(1.45, 0.6); s.quadraticCurveTo(1.72, 0, 1.45, -0.6);
    var hg = new T.ExtrudeGeometry(s, { depth: 0.62, bevelEnabled: true, bevelSize: 0.06, bevelThickness: 0.06, bevelSegments: 3, curveSegments: 16 });
    hg.rotateX(-PI / 2); var p = hg.attributes.position;
    for (var i = 0; i < p.count; i++) { var k = 0.78 + 0.22 * clamp(p.getY(i) / 0.62, 0, 1); p.setX(i, p.getX(i) * k); p.setZ(i, p.getZ(i) * k); }
    hg.computeVertexNormals(); g.add(mesh(hg, C.coral));
    var rg = new T.ExtrudeGeometry(s, { depth: 0.12, bevelEnabled: true, bevelSize: 0.1, bevelThickness: 0.04, bevelSegments: 2, curveSegments: 16 }); rg.rotateX(-PI / 2);
    g.add(at(mesh(rg, C.white), 0, 0.6, 0));
    g.add(at(box(1.25, 0.66, 0.84, C.white), 0.25, 1.08, 0));
    [-0.1, 0.25, 0.6].forEach(function (x) { g.add(at(box(0.24, 0.26, 0.88, C.blue, { r: 0.05 }), x, 1.14, 0)); });
    g.add(at(box(0.1, 0.26, 0.5, C.blue, { r: 0.04 }), -0.36, 1.14, 0));
    g.add(at(box(1.45, 0.12, 1.0, C.yellow), 0.25, 1.46, 0));
    g.add(at(cyl(0.17, 0.2, 0.55, C.coral), 0.95, 1.2, 0)); g.add(at(cyl(0.185, 0.185, 0.14, C.navy), 0.95, 1.46, 0));
    g.add(at(cyl(0.035, 0.035, 0.75, C.navy), 0.1, 1.88, 0)); g.add(at(sph(0.1, C.yellow, { glow: 0.6 }), 0.1, 2.28, 0));
    g.add(at(rot(tor(0.17, 0.065, C.coral)), 0.72, 1.02, 0.46)); g.add(at(rot(tor(0.17, 0.066, C.white, { arc: PI / 4 })), 0.72, 1.02, 0.46));
    g.add(at(cyl(0.03, 0.03, 0.5, C.navy), -1.35, 0.98, 0)); g.add(at(rot(prism(0.3, 0.36, 0.03, C.pink), 0, 0, -PI / 2), -1.33, 1.05, 0));
    g.add(at(box(0.5, 0.26, 0.5, C.wood), -0.75, 0.86, 0));
    return g;
  }
  function buoy() {
    var g = new T.Group();
    g.add(at(cyl(0.28, 0.34, 0.3, C.red), 0, 0.12, 0)); g.add(at(cyl(0.2, 0.26, 0.3, C.white), 0, 0.42, 0)); g.add(at(cyl(0.05, 0.05, 0.4, C.navy), 0, 0.74, 0)); g.add(at(sph(0.11, C.yellow, { glow: 0.5 }), 0, 0.98, 0));
    return g;
  }
  function reef() {
    var g = new T.Group();
    [[0, 0, 0.75, 1.5, C.lilac], [0.9, 0.3, 0.55, 1.05, C.violet], [-0.75, 0.45, 0.5, 0.9, C.stone], [0.3, 0.95, 0.42, 0.7, C.lilac], [-0.3, -0.75, 0.48, 0.85, C.violet], [1.25, -0.5, 0.36, 0.55, C.stone]].forEach(function (r, i) {
      var m = mesh(new T.ConeGeometry(r[2], r[3], 6), r[4], { flat: true }); m.position.set(r[0], r[3] / 2 - 0.08, r[1]); m.rotation.y = i * 1.3; g.add(m);
    });
    g.add(at(mesh(blobGeo(1.9, 0.06, 2.2, 1), C.foam, { noShadow: true }), 0.2, 0.0, 0.1));
    return g;
  }
  function cottage() {
    var g = new T.Group();
    g.add(at(box(1.5, 0.95, 1.15, C.cream), 0, 0.47, 0)); g.add(at(prism(1.75, 0.75, 1.35, C.coral), 0, 0.92, 0));
    g.add(at(box(0.32, 0.55, 0.1, C.violet, { r: 0.05 }), -0.3, 0.3, 0.58)); g.add(at(box(0.36, 0.32, 0.08, C.blue, { r: 0.05 }), 0.32, 0.52, 0.58));
    g.add(at(box(0.24, 0.6, 0.24, C.stone), 0.48, 1.4, -0.2));
    return g;
  }

  /* ---------- the lighthouse, seen from outside ---------- */
  function tower(o) {
    o = o || {};
    var g = new T.Group(), i;
    g.add(at(cyl(1.75, 1.95, 1.9, C.stone), 0, 0.95, 0)); g.add(at(cyl(1.84, 1.84, 0.16, C.white), 0, 1.92, 0));
    g.add(at(box(0.74, 1.0, 0.3, C.violet, { r: 0.08 }), 0, 0.52, 1.8)); g.add(at(rot(cyl(0.37, 0.37, 0.3, C.violet), PI / 2), 0, 1.02, 1.8)); g.add(at(sph(0.06, C.yellow), 0.2, 0.55, 1.97));
    g.add(at(box(1.2, 0.16, 0.6, C.cream), 0, 0.08, 2.15));
    g.add(at(cyl(1.42, 1.6, 1.9, C.white), 0, 2.95, 0)); g.add(at(cyl(1.3, 1.42, 1.7, C.coral), 0, 4.75, 0)); g.add(at(cyl(1.22, 1.3, 0.62, C.white), 0, 5.91, 0));
    [[0.5, 3.1], [-0.45, 4.8]].forEach(function (w) { var r = 1.56 - (w[1] - 2) * 0.095, a = w[0]; var wn = new T.Group(); wn.add(rot(cyl(0.26, 0.26, 0.1, C.blue), PI / 2)); wn.add(tor(0.26, 0.05, C.yellow)); wn.position.set(Math.sin(a) * r, w[1], Math.cos(a) * r); wn.rotation.y = a; g.add(wn); });
    g.add(at(cyl(2.0, 1.75, 0.24, C.lilac), 0, 6.3, 0)); g.add(at(rot(tor(1.9, 0.05, C.white), PI / 2), 0, 7.0, 0));
    for (i = 0; i < 16; i++) g.add(at(cyl(0.035, 0.035, 0.62, C.white, { seg: 8 }), Math.cos(i * PI / 8) * 1.9, 6.7, Math.sin(i * PI / 8) * 1.9));
    g.add(at(cyl(1.0, 1.06, 0.3, C.white), 0, 6.56, 0)); g.add(at(cyl(0.93, 0.93, 1.25, C.glass, { opacity: 0.4 }), 0, 7.33, 0));
    for (i = 0; i < 8; i++) g.add(at(cyl(0.05, 0.05, 1.25, C.white, { seg: 8 }), Math.cos(i * PI / 4 + 0.39) * 0.94, 7.33, Math.sin(i * PI / 4 + 0.39) * 0.94));
    g.add(at(sph(0.46, o.lit ? C.yellow : C.off, o.lit ? { glow: 1 } : null), 0, 7.3, 0)); g.add(at(rot(tor(0.5, 0.05, C.gold), PI / 2), 0, 7.3, 0)); g.add(at(cyl(0.2, 0.3, 0.3, C.gold), 0, 6.85, 0));
    g.add(at(cyl(1.08, 1.08, 0.14, C.white), 0, 8.02, 0)); g.add(at(cone(1.2, 1.05, C.coral), 0, 8.6, 0)); g.add(at(sph(0.15, C.yellow), 0, 9.16, 0));
    // generator annex with exhaust and power packs
    g.add(at(box(1.5, 1.15, 1.5, C.teal), 2.35, 0.57, 0.35)); g.add(at(box(1.72, 0.16, 1.72, C.yellow), 2.35, 1.2, 0.35));
    g.add(at(cyl(0.1, 0.1, 0.8, C.lilac), 2.75, 1.65, -0.05)); g.add(at(sph(0.17, C.white, { noShadow: true }), 2.82, 2.3, -0.05)); g.add(at(sph(0.12, C.white, { noShadow: true }), 2.98, 2.58, -0.02));
    g.add(at(boltMesh(0.3), 2.35, 0.62, 1.12));
    for (i = 0; i < 5; i++) g.add(at(battery(o.storm && i > 2 ? C.off : C.mint), 1.75 + i * 0.3, 0, 1.55));
    // radio mast
    g.add(at(box(0.9, 0.1, 0.1, C.navy, { r: 0.03 }), -1.85, 3.2, 0.2)); g.add(at(cyl(0.05, 0.05, 2.5, C.navy, { seg: 8 }), -2.3, 4.4, 0.2)); g.add(at(sph(0.12, C.coral), -2.3, 5.7, 0.2));
    var waves = new T.Group(); [0.35, 0.6, 0.85].forEach(function (r) { waves.add(rot(tor(r, 0.04, C.teal, { arc: PI / 2, noShadow: true }), 0, 0, PI / 2 + PI / 4 - PI / 4)); }); waves.position.set(-2.3, 5.7, 0.2); waves.rotation.z = PI / 4; g.add(waves); g.userData.waves = waves;
    // signal gallery: wheel and flags on the balcony
    var wh = wheelProp(); wh.scale.setScalar(0.42); wh.position.set(1.05, 6.42, 1.25); wh.rotation.y = 0.7; g.add(wh);
    g.add(bunting([0, 9.1, 0], [-1.9, 7.0, 0.3], 0.25, 4)); g.add(bunting([0, 9.1, 0], [1.75, 7.0, -0.75], 0.25, 4));
    if (o.lit) {
      var beams = new T.Group();
      [[1, 1.9, 18], [-1, 1.1, 7]].forEach(function (d) { var cg = new T.ConeGeometry(d[1], d[2], 40, 1, true); cg.translate(0, -d[2] / 2, 0); var b = new T.Mesh(cg, M(0xFFF6C4, { opacity: 0.5, basic: true, side: 1 })); b.rotation.z = d[0] * PI / 2; beams.add(b); });
      beams.position.set(0, 7.3, 0); beams.rotation.y = o.beamYaw || 0; beams.rotation.z = 0; g.add(beams); g.userData.beams = beams;
      g.add(at(sph(0.8, 0xFFF3B0, { opacity: 0.35, basic: true }), 0, 7.3, 0));
    }
    return g;
  }

  /* ---------- sea, sky and lights ---------- */
  var SEA_R = 150;
  function seaY(x, z) { return Math.sqrt(SEA_R * SEA_R - x * x - z * z) - SEA_R; }
  function drop(parent, obj, x, z, y) { obj.position.set(x, seaY(x, z) + (y || 0), z); parent.add(obj); return obj; }
  function stage(bg, o) {
    o = o || {};
    var sc = new T.Scene(); sc.background = bg == null ? null : new T.Color(bg);
    var hl = new T.HemisphereLight(0xffffff, o.ground || 0xFFE9A8, o.hemi == null ? 0.62 : o.hemi); sc.add(hl); sc.userData.hemi = hl;
    sc.add(new T.AmbientLight(o.tint || 0xffffff, o.amb == null ? 0.16 : o.amb));
    var d = new T.DirectionalLight(o.sun || 0xffffff, o.dir == null ? 0.55 : o.dir); d.position.set(o.sx == null ? 7 : o.sx, 13, 9);
    d.castShadow = true; d.shadow.mapSize.set(2048, 2048); var s = o.span || 16, c = d.shadow.camera; c.left = -s; c.right = s; c.top = s; c.bottom = -s; c.near = 1; c.far = 50; d.shadow.bias = -0.0006; d.shadow.radius = 4;
    sc.add(d); if (o.target) { d.target.position.set(o.target[0], o.target[1], o.target[2]); d.position.add(d.target.position); sc.add(d.target); }
    return sc;
  }
  function sea(sc, color, ripples) {
    var g = new T.SphereGeometry(SEA_R, 128, 48, 0, PI * 2, 0, 0.42), m = new T.Mesh(g, M(color)); m.position.y = -SEA_R; m.receiveShadow = true; sc.add(m);
    (ripples || []).forEach(function (r) { var a = mesh(new T.TorusGeometry(r[2], 0.035, 5, 20, r[3] || 1.2), C.white, { basic: true }); a.rotation.set(PI / 2, 0, r[4] || 0); drop(sc, a, r[0], r[1], 0.03); });
  }
  function scatterRipples(n, span, seed) {
    var out = [], s = seed || 1; function rnd() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
    for (var i = 0; i < n; i++) out.push([(rnd() - 0.5) * span * 2, (rnd() - 0.5) * span * 1.3, 0.3 + rnd() * 0.5, 0.8 + rnd() * 1.2, rnd() * 6]);
    return out;
  }

  /* ---------- the outdoor world: island, reef, ship, harbor ---------- */
  var MOOD = {
    day: { bg: C.sky, sea: C.sea, cloud: C.white },
    storm: { bg: ST.sky, sea: ST.sea, cloud: ST.cloud, light: { hemi: 0.46, dir: 0.4, amb: 0.14, tint: 0xC4D2FF, ground: 0x6C7FB5 } },
    lit: { bg: 0x8FD0FF, sea: 0x2B7BEA, cloud: 0xFFFFFF, light: { hemi: 0.56, dir: 0.5, sun: 0xFFF3D0, ground: 0xFFE9A8, sx: -8 } }
  };
  function world(o) {
    o = o || {};
    var mood = MOOD[o.mood || 'day'], L = Object.assign({ span: 20 }, mood.light || {}), sc = stage(o.clear ? null : mood.bg, L), i;
    var P = Object.assign({ isle: [0, 0], reef: [-6.2, 4.6], ship: [7.2, 5], harbor: [12.5, -5], west: [-12, -4.5] }, o.at || {});
    sea(sc, mood.sea, scatterRipples(o.mood === 'storm' ? 70 : 46, 22, 7));
    // lighthouse island
    var isle = new T.Group();
    isle.add(at(mesh(blobGeo(5.3, 0.08, 1.2, 1), C.foam, { noShadow: true }), 0, 0.02, 0));
    isle.add(at(blob(4.7, 0.7, C.sand, 1.2), 0, 0.2, 0)); isle.add(at(blob(3.9, 0.6, C.peach, 2.6), 0.1, 0.75, -0.1)); isle.add(at(blob(3.2, 0.4, C.mint, 0.4), 0.1, 1.2, -0.1));
    var tw = tower({ lit: (o.mood === 'lit' || o.lit) && !o.dark, storm: o.mood === 'storm', beamYaw: o.beamYaw }); tw.position.set(0, 1.4, 0); tw.scale.setScalar(0.82); isle.add(tw);
    var ct = cottage(); ct.position.set(-2.1, 1.4, 0.9); ct.rotation.y = 0.35; isle.add(ct);
    [[-2.6, -0.9, 0.9], [-1.5, -2.0, 1.1], [2.4, -1.6, 1.0], [1.4, -2.3, 0.75]].forEach(function (t, k) { var pn = pine(t[2], k % 2 ? C.teal : C.green); pn.position.set(t[0], 1.38, t[1]); isle.add(pn); });
    [[3.6, 1.6, 0.45], [-3.7, 1.9, 0.38], [3.2, -2.6, 0.5]].forEach(function (r, k) { var rk = mesh(new T.DodecahedronGeometry(r[2], 0), k % 2 ? C.stone : C.lilac, { flat: true }); rk.position.set(r[0], 0.72, r[1]); isle.add(rk); });
    isle.add(at(box(1.6, 0.14, 0.7, C.wood), 0.3, 0.62, 3.9)); isle.add(at(box(0.7, 0.14, 1.5, C.wood), 0.3, 0.62, 4.9));
    drop(sc, isle, P.isle[0], P.isle[1]);
    // reef
    var rf = reef(); drop(sc, rf, P.reef[0], P.reef[1]); var by = buoy(); drop(sc, by, P.reef[0] + 2.4, P.reef[1] + 0.9); var by2 = buoy(); by2.scale.setScalar(0.8); drop(sc, by2, P.reef[0] - 1.2, P.reef[1] + 2.2);
    var r2 = reef(); r2.scale.setScalar(0.6); r2.rotation.y = 2; drop(sc, r2, P.reef[0] - 2.6, P.reef[1] - 0.6);
    // harbor
    var hb = new T.Group();
    hb.add(at(mesh(blobGeo(3.5, 0.08, 4.4, 1), C.foam, { noShadow: true }), 0, 0.02, 0)); hb.add(at(blob(3.1, 0.6, C.rose, 4.4), 0, 0.2, 0)); hb.add(at(blob(2.4, 0.45, C.cream, 3.1), 0.1, 0.7, -0.1));
    [[-0.9, -0.3, C.yellow, C.violet], [0.3, -0.7, C.mint, C.coral], [1.2, 0.1, C.white, C.teal]].forEach(function (h) { var ho = new T.Group(); ho.add(at(box(0.8, 0.8 + Math.abs(h[0]) * 0.3, 0.75, h[2]), 0, 0.45, 0)); ho.add(at(prism(0.95, 0.5, 0.9, h[3]), 0, 0.85 + Math.abs(h[0]) * 0.3 - 0.1, 0)); ho.position.set(h[0], 0.9, h[1]); hb.add(ho); });
    hb.add(at(box(0.6, 0.12, 2.4, C.wood), -0.9, 0.5, 3.0)); [2.2, 3.1, 4.0].forEach(function (z) { hb.add(at(cyl(0.07, 0.07, 0.7, C.woodDk, { seg: 8 }), -1.25, 0.3, z)); hb.add(at(cyl(0.07, 0.07, 0.7, C.woodDk, { seg: 8 }), -0.55, 0.3, z)); });
    hb.add(at(cyl(0.04, 0.04, 1.8, C.navy, { seg: 8 }), 1.7, 1.8, -0.8)); hb.add(at(rot(prism(0.5, 0.6, 0.03, C.green), 0, 0, -PI / 2), 1.74, 2.42, -0.8));
    hb.add(at(pine(0.8), 0.2, 0.9, 1.0));
    drop(sc, hb, P.harbor[0], P.harbor[1]);
    // a quiet western islet
    var ws = new T.Group(); ws.add(at(mesh(blobGeo(2.6, 0.08, 3.3, 1), C.foam, { noShadow: true }), 0, 0.02, 0)); ws.add(at(blob(2.3, 0.5, C.sand, 3.3), 0, 0.15, 0)); ws.add(at(blob(1.7, 0.4, C.mint, 5.5), 0, 0.55, 0));
    ws.add(at(pine(1.2), -0.4, 0.74, -0.2)); ws.add(at(pine(0.85, C.teal), 0.6, 0.74, 0.3)); ws.add(at(sph(0.38, C.pink), 0.3, 0.9, -0.7));
    drop(sc, ws, P.west[0], P.west[1]);
    // ship
    var ship = null;
    if (!o.noShip) { ship = shipProp(); ship.scale.setScalar(0.85); ship.rotation.y = o.shipYaw == null ? -0.25 : o.shipYaw; if (o.mood === 'storm') ship.rotation.z = 0.14; drop(sc, ship, P.ship[0], P.ship[1], -0.12); var fm = mesh(blobGeo(1.9, 0.05, 1.1, 1), C.foam, { noShadow: true }); fm.scale.z = 0.6; fm.rotation.y = ship.rotation.y; drop(sc, fm, P.ship[0], P.ship[1], 0.02); }
    // clouds
    var clouds = [];
    [[-9, 9.5, -8, 1.3], [9, 10.5, -10, 1.6], [15, 8, -3, 1.0], [-16, 8.5, -2, 1.1], [3, 12, -14, 1.2]].forEach(function (c) { var cl = cloud(c[3], mood.cloud); cl.position.set(c[0], c[1], c[2]); sc.add(cl); clouds.push(cl); });
    var bolt = null, rainG = null;
    if (o.mood !== 'lit' && !o.lit) {
      var sg = new T.Group(), sc2 = o.mood === 'storm' ? ST.dark : C.storm;
      [[-1.6, 0, 0, 1.5], [0.6, 0.35, -0.3, 1.8], [2.6, -0.1, 0.2, 1.3]].forEach(function (c) { var cl = cloud(c[3], sc2); cl.position.set(c[0], c[1], c[2]); sg.add(cl); });
      bolt = boltMesh(0.95); bolt.position.set(1.3, -2.1, 0.5); bolt.rotation.z = 0.1; sg.add(bolt);
      for (i = 0; i < 16; i++) { var rn = box(0.05, 0.42, 0.05, C.white, { r: 0.02, noShadow: true }); rn.position.set(-2.6 + (i * 0.37) % 5.6, -1.6 - (i * 0.83) % 2.6, ((i * 0.61) % 1.6) - 0.8); rn.rotation.z = 0.25; sg.add(rn); }
      sg.position.set(P.isle[0] + 0.6, 11.6, P.isle[1] - 0.8); sc.add(sg); clouds.push(sg);
    }
    if (o.mood === 'storm') {
      for (i = 0; i < 46; i++) { var x = ((i * 7.3) % 40) - 20, z = ((i * 4.7) % 18) - 5, wv = sph(0.3 + (i % 3) * 0.08, C.white, { noShadow: true }); wv.scale.set(1.5, 0.45, 0.7); drop(sc, wv, x, z, 0); }
      rainG = rain(120, 48, 14, 20, 0, 8, 2); sc.add(rainG);
      [[-10, 13.5, -3, 2.2], [11, 14, -4, 2.4], [0, 15.5, -9, 2.8], [-19, 12.5, -8, 2.3], [20, 13, -9, 2.3], [-4, 14.5, 3, 1.9], [6, 15, 2, 2.0]].forEach(function (c) { var cl = cloud(c[3], ST.dark); cl.position.set(c[0], c[1], c[2]); sc.add(cl); });
      var b2 = boltMesh(0.8); b2.position.set(11, 11.2, -3.5); sc.add(b2);
    }
    if (o.mood === 'lit') { for (i = 0; i < 26; i++) sc.add(at(sph(0.07 + (i % 3) * 0.02, C.white, { basic: true }), ((i * 9.7) % 50) - 25, 11 + (i * 2.3) % 7, -16 - (i % 5))); }
    return { scene: sc, ship: ship, clouds: clouds, bolt: bolt, tower: tw, buoys: [by, by2], isle: isle, rain: rainG, storm: o.mood === 'storm', hemi: sc.userData.hemi, hemi0: sc.userData.hemi.intensity };
  }
  function cam(aspect, fov, pos, look) { var c = new T.PerspectiveCamera(fov, aspect, 0.1, 400); c.position.set(pos[0], pos[1], pos[2]); c.lookAt(look[0], look[1], look[2]); return c; }

  /* ---------- room pictures ---------- */
  function shell(sc, wall, floor, trim) {
    sc.add(at(box(8.6, 0.5, 8.6, floor, { r: 0.12 }), 0, -0.25, 0));
    sc.add(at(box(8.6, 5.2, 0.4, wall, { r: 0.1 }), 0, 2.6, -4.1)); sc.add(at(box(0.4, 5.2, 8.6, wall, { r: 0.1 }), -4.1, 2.6, 0));
    sc.add(at(box(8.2, 0.3, 0.12, trim, { r: 0.04 }), 0.1, 0.15, -3.86)); sc.add(at(box(0.12, 0.3, 8.2, trim, { r: 0.04 }), -3.86, 0.15, 0.1));
  }
  function porthole(sc, x, y, z, ry) { var g = new T.Group(); g.add(rot(cyl(0.7, 0.7, 0.08, ST.sky), PI / 2)); g.add(at(rot(cyl(0.7, 0.7, 0.09, ST.sea, { seg: 36 }), PI / 2), 0, 0, -0.01)); var skyHalf = mesh(new T.CylinderGeometry(0.7, 0.7, 0.1, 36, 1, false, -PI / 2, PI), ST.sky); skyHalf.rotation.x = PI / 2; g.add(skyHalf); g.add(tor(0.72, 0.09, C.yellow)); g.position.set(x, y, z); g.rotation.y = ry || 0; sc.add(g); }
  var ISO = [10.5, 8.2, 12.5];
  function glowMat(off) { return new T.MeshStandardMaterial({ color: off, roughness: 0.7 }); }
  function setGlow(m, on, col, off) { m.color.setHex(on ? col : off); m.emissive.setHex(on ? col : 0x000000); m.emissiveIntensity = 0.85; }
  var PIC = {
    1: function (aspect) {            // lens room, top of the tower
      var sc = stage(ST.sky, { span: 8, hemi: 0.66 }), i, rn = rain(46, 24, 9, 6, 0, 4, -9); sc.add(rn);
      sc.add(at(cyl(5.2, 5.2, 0.4, C.cream), 0, -0.2, 0)); sc.add(at(cyl(5.0, 5.0, 0.42, C.rose), 0, -0.2, 0)); sc.add(at(cyl(3.2, 3.2, 0.44, C.cream), 0, -0.2, 0));
      for (i = -5; i <= 5; i++) { var a = PI / 2 + i * 0.3; sc.add(at(cyl(0.11, 0.11, 6.4, C.white, { seg: 10 }), Math.cos(a) * 5, 3.2, -Math.sin(a) * 5 + 1.2)); }
      sc.add(at(rot(tor(5, 0.14, C.white, { arc: PI }), PI / 2), 0, 1.25, 1.2)); sc.add(at(rot(tor(5, 0.14, C.white, { arc: PI }), PI / 2), 0, 5.6, 1.2));
      var seaM = mesh(new T.PlaneGeometry(80, 40), ST.sea, { basic: true }); seaM.rotation.x = -PI / 2; seaM.position.set(0, -1.2, -30); sc.add(seaM);
      [[-5.5, 4.6, -12, 1.4], [5.8, 5.4, -14, 1.7], [1, 6.8, -16, 1.5]].forEach(function (c) { var cl = cloud(c[3], ST.cloud); cl.position.set(c[0], c[1], c[2]); sc.add(cl); });
      var lens = lensUnit(false); lens.scale.setScalar(1.62); lens.position.set(0, 2.93, 0); sc.add(lens);
      sc.add(at(cyl(0.34, 0.5, 0.95, C.coral), 0, 0.62, 0)); sc.add(at(cyl(0.9, 1.0, 0.24, C.white), 0, 0.12, 0)); sc.add(at(cyl(0.5, 0.36, 0.22, C.gold), 0, 1.02, 0));
      sc.add(at(box(0.8, 0.5, 0.8, C.wood), 3.4, 0.25, 1.5)); sc.add(at(box(0.5, 0.36, 0.5, C.blue), 3.4, 0.68, 1.5)); sc.add(at(box(0.5, 0.36, 0.5, C.gold), 4.15, 0.18, 1.9)); sc.add(at(box(0.5, 0.36, 0.5, C.blue), -3.5, 0.18, 1.6));
      return { scene: sc, camera: cam(aspect, 35, [0, 2.9, 9], [0, 2.7, 0]), design: 1.25, set: function (s) { lens.userData.set(s.on, s.slots); }, tick: function (t) { lens.userData.tick(t); rn.userData.tick(t); } };
    },
    2: function (aspect) {            // generator room, basement
      var sc = stage(0xFFEFC2, { span: 9 }); shell(sc, C.lilac, C.cream, C.violet);
      var gen = generatorProp(); gen.scale.setScalar(1.5); gen.position.set(-0.2, 0, -1.3); gen.rotation.y = -0.3; sc.add(gen);
      var rack = packRack(10); rack.scale.setScalar(1.6); rack.position.set(1.0, 0, 2.2); sc.add(rack);
      sc.add(tube([[2.3, 0.3, -0.6], [3.2, 0.12, 0.8], [2.3, 0.12, 2.0]], 0.07, C.coral));
      sc.add(at(box(1.5, 1.9, 0.2, C.navy), 2.6, 3.0, -3.85));
      var lights = [C.coral, C.yellow, C.mint, C.pink, C.teal, C.white].map(function (c, k) { var b = new T.Mesh(new T.SphereGeometry(0.13, 20, 14), glowMat(C.off)); b.position.set(2.6 + (k % 3 - 1) * 0.45, 3.0 + (k < 3 ? 0.5 : -0.1), -3.72); b.userData.c = c; sc.add(b); return b; });
      sc.add(at(box(1.0, 0.16, 0.1, C.cream, { r: 0.04 }), 2.6, 2.42, -3.72));
      var lampM = glowMat(C.off), lamp = new T.Group(); lamp.add(cyl(0.03, 0.03, 0.9, C.navy, { seg: 8 })); lamp.add(at(cone(0.42, 0.36, C.yellow), 0, -0.55, 0)); lamp.add(at(new T.Mesh(new T.SphereGeometry(0.16, 20, 14), lampM), 0, -0.72, 0)); lamp.position.set(-1.6, 4.7, -2.4); sc.add(lamp);
      sc.add(tube([[-3.86, 3.6, 2.6], [-3.6, 3.6, -1], [-3.6, 4.4, -3.2]], 0.1, C.teal)); sc.add(at(box(0.9, 0.7, 0.9, C.wood), -3.0, 0.35, 2.7)); sc.add(at(box(0.7, 0.5, 0.7, C.peach), -3.0, 0.95, 2.7));
      var sign = boltMesh(0.6, true); sc.add(at(rot(sign, 0, PI / 2, 0), -3.86, 2.6, 0.4));
      return { scene: sc, camera: cam(aspect, 26, ISO, [0, 1.75, 0]), design: 1.5,
        set: function (s) { if (this.on === s.on) return; this.on = s.on; gen.userData.set(s.on); setGlow(lampM, s.on, 0xFFF3B0, C.off); setGlow(sign.material, s.on, C.yellow, C.off); lights.forEach(function (b) { setGlow(b.material, s.on, b.userData.c, C.off); }); },
        tick: function (t) { gen.userData.tick(t); if (this.on) lights.forEach(function (b, k) { b.material.emissiveIntensity = 0.5 + 0.5 * Math.sin(t * 3 + k * 1.3); }); } };
    },
    3: function (aspect) {            // radio room, middle floor
      var sc = stage(0xDDF3E0, { span: 9 }); shell(sc, 0x5CC46E, C.cream, C.teal);
      var rp = radioProp(); rp.scale.setScalar(1.45); rp.position.set(-0.4, 0, -1.9); sc.add(rp);
      porthole(sc, 2.2, 3.4, -3.86, 0); porthole(sc, -3.86, 3.3, 1.6, PI / 2);
      sc.add(at(rot(cyl(0.5, 0.5, 0.08, C.white), PI / 2), -1.6, 4.2, -3.86)); sc.add(at(tor(0.5, 0.07, C.coral), -1.6, 4.2, -3.84)); sc.add(at(box(0.05, 0.32, 0.04, C.navy, { r: 0.01 }), -1.6, 4.33, -3.8)); sc.add(at(rot(box(0.05, 0.24, 0.04, C.navy, { r: 0.01 }), 0, 0, -1.2), -1.5, 4.24, -3.8));
      sc.add(at(cyl(1.9, 1.9, 0.06, C.rose), 0.6, 0.03, 1.4));
      sc.add(at(box(0.16, 0.9, 1.8, C.wood), -3.82, 1.9, -1.6)); [C.coral, C.yellow, C.violet, C.white, C.pink].forEach(function (c, k) { sc.add(at(box(0.5, 0.55 + (k % 2) * 0.12, 0.22, c, { r: 0.03 }), -3.6, 2.6 + (k % 2) * 0.06, -2.2 + k * 0.28)); });
      var lamp = new T.Group(); lamp.add(at(cyl(0.2, 0.26, 0.08, C.navy), 0, 0.04, 0)); lamp.add(at(cyl(0.03, 0.03, 0.7, C.navy, { seg: 8 }), 0, 0.4, 0)); lamp.add(at(cone(0.3, 0.3, C.yellow), 0, 0.8, 0)); lamp.scale.setScalar(1.3); lamp.position.set(1.6, 1.74, -2.4); sc.add(lamp);
      return { scene: sc, camera: cam(aspect, 26, ISO, [0, 1.75, 0]), design: 1.5, set: function (s) { if (this.on === s.on) return; this.on = s.on; rp.userData.set(s.on); }, tick: function (t) { rp.userData.tick(t); } };
    },
    4: function (aspect) {            // signal gallery, the balcony
      var sc = stage(ST.sky, { span: 9, hemi: 0.56, dir: 0.46 }), i, low = new T.Group(), rn = rain(80, 28, 10, 16, 0, 4.5, -8); low.position.y = -7; sc.add(low); sc.add(rn);
      sea(low, ST.sea, scatterRipples(40, 26, 3));
      sc.add(at(cyl(6.2, 5.6, 0.5, C.lilac), 0, -0.25, 0)); sc.add(at(cyl(5.9, 5.9, 0.06, C.cream), 0, 0.02, 0));
      for (i = -7; i <= 7; i++) { var a = PI / 2 + i * 0.21; sc.add(at(cyl(0.07, 0.07, 1.3, C.white, { seg: 8 }), Math.cos(a) * 5.7, 0.65, -Math.sin(a) * 5.7)); }
      sc.add(at(rot(tor(5.7, 0.1, C.coral, { arc: 3.1 }), PI / 2, 0, 0.02), 0, 1.3, 0)); sc.add(at(rot(tor(5.7, 0.05, C.white, { arc: 3.1 }), PI / 2, 0, 0.02), 0, 0.7, 0));
      var wh = wheelProp(); wh.scale.setScalar(1.5); wh.position.set(0, 0, -0.6); sc.add(wh);
      var tb = new T.Group(); tb.add(at(box(1.9, 0.16, 1.2, C.wood), 0, 0.95, 0)); [[-0.8, -0.45], [0.8, -0.45], [-0.8, 0.45], [0.8, 0.45]].forEach(function (p) { tb.add(at(box(0.14, 0.9, 0.14, C.woodDk), p[0], 0.45, p[1])); }); tb.add(at(box(1.3, 0.03, 0.85, C.cream, { r: 0.01 }), 0, 1.05, 0)); tb.add(at(box(0.9, 0.012, 0.04, C.coral, { r: 0 }), 0, 1.07, -0.15)); tb.add(at(box(0.6, 0.012, 0.04, C.blue, { r: 0 }), -0.1, 1.07, 0.12)); tb.add(at(rot(cyl(0.06, 0.06, 0.6, C.yellow, { seg: 8 }), 0, 0.5, PI / 2), 0.5, 1.1, 0.3));
      tb.position.set(3.0, 0, 0.8); tb.rotation.y = -0.4; sc.add(tb);
      var glassM = glowMat(C.off), lp = new T.Group(); [[-0.35, 0.3], [0.35, 0.3], [0, -0.4]].forEach(function (p) { lp.add(at(rot(cyl(0.04, 0.04, 1.5, C.navy, { seg: 8 }), p[1] * 0.4, 0, -p[0] * 0.4), p[0], 0.7, p[1])); });
      lp.add(at(rot(cyl(0.42, 0.34, 0.7, C.yellow), PI / 2), 0, 1.65, 0)); var glass = new T.Mesh(new T.CylinderGeometry(0.36, 0.36, 0.06, 32), glassM); glass.rotation.x = PI / 2; lp.add(at(glass, 0, 1.65, 0.36)); lp.add(at(rot(tor(0.4, 0.06, C.coral)), 0, 1.65, 0.36));
      var cg = new T.ConeGeometry(1.5, 6, 32, 1, true); cg.translate(0, -3, 0); var beam = new T.Mesh(cg, M(0xFFF6C4, { opacity: 0.5, basic: true, side: 1 })); beam.rotation.x = -PI / 2; beam.position.set(0, 1.65, 0.4); beam.visible = false; lp.add(beam);
      lp.position.set(-3.1, 0, 0.6); lp.rotation.y = 0.5; sc.add(lp);
      sc.add(at(cyl(0.06, 0.06, 5.2, C.navy, { seg: 8 }), -4.6, 2.6, -2.6)); sc.add(at(cyl(0.06, 0.06, 5.2, C.navy, { seg: 8 }), 4.6, 2.6, -2.6));
      var bn = bunting([-4.6, 5.0, -2.6], [4.6, 5.0, -2.6], 0.9, 9); bn.children.forEach(function (f, k) { if (k) f.scale.setScalar(1.9); }); sc.add(bn);
      var sh = shipProp(); sh.scale.setScalar(1.1); sh.position.set(7, -7.1, -22); sh.rotation.y = -0.2; sc.add(sh);
      var rf = reef(); rf.scale.setScalar(1.4); rf.position.set(-9, -7, -17); sc.add(rf);
      [[-8, 5.5, -18, 2.0], [8.5, 6.5, -22, 2.4], [0, 8.2, -26, 2.2]].forEach(function (c) { var cl = cloud(c[3], ST.cloud); cl.position.set(c[0], c[1], c[2]); sc.add(cl); });
      return { scene: sc, camera: cam(aspect, 34, [0, 3.6, 11.5], [0, 2.1, 0]), design: 1.5,
        set: function (s) { if (this.on === s.on) return; this.on = s.on; setGlow(glassM, s.on, 0xFFF3B0, C.off); beam.visible = !!s.on; },
        tick: function (t) { rn.userData.tick(t); bn.children.forEach(function (f, k) { if (k) f.rotation.z = Math.sin(t * 3 + k) * 0.2; }); if (this.on) { wh.userData.wheel.rotation.z = Math.sin(t * 0.8) * 0.5; var p = (Math.sin(t * 4) > 0) ? 1 : 0.15; glassM.emissiveIntensity = p; beam.material.opacity = 0.5 * p; sh.position.y = -7.1 + Math.sin(t * 1.6) * 0.08; } } };
    },
    5: function (aspect) {            // outside, beacon lit
      var w = world({ mood: 'lit', at: { ship: [8.5, 4.5] }, shipYaw: PI + 0.35, beamYaw: -0.32 });
      return { scene: w.scene, camera: cam(aspect, 30, [3.5, 6.2, 27], [1.6, 4.9, 0]), design: 1.7, tick: function (t) { worldTick(w, t); if (w.tower.userData.beams) w.tower.userData.beams.rotation.y = -0.32 + Math.sin(t * 0.5) * 0.5; } };
    }
  };
  function lensPuzzle() {             // straight-on close-up; the game's 20 buttons sit exactly over these panels
    var sc = stage(ST.sky, { span: 3, hemi: 0.72, dir: 0.45 }), lens = lensUnit(true), rn = rain(30, 2.6, 2.4, 0.5, 0, 0, -2.4, 0.16); sc.add(rn);
    lens.scale.setScalar(0.62 / 1.08); lens.position.set(0, 0.08, 0); sc.add(lens);
    var seaM = mesh(new T.PlaneGeometry(6, 1.2), ST.sea, { basic: true }); seaM.position.set(0, -1.05, -3); sc.add(seaM);
    [-0.92, -0.46, 0.46, 0.92].forEach(function (x) { sc.add(at(cyl(0.035, 0.035, 3, C.white, { seg: 10 }), x, 0, -1.5)); });
    sc.add(at(box(3, 0.07, 0.07, C.white, { r: 0.02 }), 0, -0.52, -1.5));
    [[-0.7, 0.72, 0.22], [0.75, 0.55, 0.18]].forEach(function (c) { var cl = cloud(c[2] * 1.4, ST.cloud); cl.position.set(c[0], c[1], -2.5); sc.add(cl); });
    sc.add(at(cyl(0.1, 0.2, 0.36, C.coral), 0, -0.78, -0.2)); sc.add(at(cyl(0.34, 0.38, 0.12, C.white), 0, -0.98, -0.2));
    var c = new T.OrthographicCamera(-1, 1, 1, -1, 0.1, 40); c.position.set(0, 0, 10); c.lookAt(0, 0, 0);
    return { scene: sc, camera: c, set: function (s) { lens.userData.set(s.on, s.slots); }, tick: function (t) { lens.userData.tick(t); rn.userData.tick(t); } };
  }
  function worldTick(W, t) {
    var k = W.storm ? 2.4 : 1;
    if (W.ship) { W.ship.position.y = seaY(W.ship.position.x, W.ship.position.z) - 0.12 + Math.sin(t * 1.6) * 0.07 * k; W.ship.rotation.z = Math.sin(t * 1.3) * 0.05 * k; W.ship.rotation.x = Math.sin(t * 1.1) * 0.03 * k; }
    if (W.rain) W.rain.userData.tick(t);
    W.clouds.forEach(function (c, i) { c.position.x += Math.sin(t * 0.2 + i) * 0.0016; c.position.y += Math.sin(t * 0.5 + i * 2) * 0.0012; });
    if (W.bolt) { W.bolt.visible = (t % 3.4) < 0.5 || ((t % 3.4) > 0.7 && (t % 3.4) < 0.85); if (W.storm) W.hemi.intensity = W.hemi0 * (W.bolt.visible && (t % 3.4) < 0.16 ? 1.9 : 1); }
    W.buoys.forEach(function (b, i) { b.rotation.z = Math.sin(t * 1.4 + i * 2) * 0.12; });
    if (W.tower.userData.waves) W.tower.userData.waves.children.forEach(function (c, i) { c.visible = ((t * 1.6) % 4) > i; });
  }
  var PANO = { isle: [-23, -19], reef: [-11.4, -2.2], harbor: [15, -7], west: [1.5, -14] };
  function panoCam(aspect) { return cam(aspect, 26, [0, 5, 24], [0, 2.7, -2]); }
  function pano(lit) { return function (aspect) { var w = world({ mood: lit ? 'day' : 'storm', lit: lit, beamYaw: -0.15, noShip: true, at: PANO }); w.camera = panoCam(aspect); return w; }; }
  function panoPoints() {             // where the reef and harbor land in the panorama, in percent
    var c = panoCam(3); c.updateMatrixWorld();
    function pt(x, y, z) { var v = new T.Vector3(x, seaY(x, z) + y, z).project(c); return { x: +((v.x + 1) * 50).toFixed(1), y: +((1 - v.y) * 50).toFixed(1) }; }
    return { reef: pt(PANO.reef[0] + 0.2, 2.5, PANO.reef[1]), harbor: pt(PANO.harbor[0], 3.6, PANO.harbor[1]), berth: pt(PANO.harbor[0] - 3.0, 0, PANO.harbor[1] + 3.4) };
  }
  function still(room, on) { return function (aspect) { var v = PIC[room](aspect), s = { room: room, on: !!on, slots: on ? SOLVED : '' }; if (v.set) v.set(s); if (v.tick) v.tick(0.7, s); return v; }; }
  var ROOMS = {
    lens: still(1), 'lens-on': still(1, true), generator: still(2), 'generator-on': still(2, true), radio: still(3), 'radio-on': still(3, true), gallery: still(4),
    storm: function (aspect) { var w = world({ mood: 'storm', at: { ship: [8.5, 4.5] } }); w.camera = cam(aspect, 30, [3.5, 6.2, 27], [1.2, 4.6, 0]); return w; },
    'sea-panorama': pano(false), 'sea-panorama-lit': pano(true),
    boat: function (aspect) {
      var sc = stage(null, { span: 4, hemi: 0.7 }), sh = shipProp(); sh.rotation.y = -0.42; sc.add(sh);
      [[-2.0, 0.34], [-1.3, 0.26], [-0.5, 0.22], [0.3, 0.24], [1.1, 0.26], [1.75, 0.32], [-1.65, 0.2], [0.75, 0.18]].forEach(function (f, i) { var s = sph(f[1], C.white, { noShadow: true }); s.scale.y = 0.6; s.position.set(f[0] * 0.95, 0.02, 0.75 + (i % 2) * 0.14 - f[0] * 0.42); sc.add(s); });
      var c = new T.OrthographicCamera(-2.55, 2.55, 2.55 / aspect, -2.55 / aspect, 0.1, 50); c.position.set(-1.0, 3.6, 9); c.lookAt(-0.1, 0.85, 0); c.updateProjectionMatrix();
      return { scene: sc, camera: c };
    },
    cutaway: function () { return cutaway(); }
  };

  /* ---------- the cutaway map of the tower ---------- */
  var FLOORS = { 2: { y: 2.0, h: 2.25, w: 4.7, name: 'Generator room', wall: C.lilac, side: C.stone }, 3: { y: 4.4, h: 2.15, w: 4.1, name: 'Radio room', wall: 0x5CC46E, side: C.white }, 4: { y: 6.7, h: 2.0, w: 3.6, name: 'Signal gallery', wall: 0x7C84C8, side: C.coral }, 1: { y: 8.95, h: 1.75, w: 2.7, name: 'Lens room', wall: C.glass, side: C.white }, 0: { y: 0.95, h: 0.95, w: 1.5, name: 'Front door' } };
  function cutCam(aspect) { var hw = 6 * (aspect || 2 / 3), c = new T.OrthographicCamera(-hw, hw, 6, -6, 0.1, 80); c.position.set(0, 9.2, 30); c.lookAt(0, 6.05, 0); c.updateMatrixWorld(); c.updateProjectionMatrix(); return c; }
  function cutaway(aspect) {
    var sc = stage(ST.sky, { span: 9, target: [0, 6, 0], hemi: 0.66 }), k, f, i;
    sc.add(rain(60, 9, 13, 3, 0, 6, -4));
    var seaM = mesh(new T.PlaneGeometry(40, 30), ST.sea, { basic: true }); seaM.rotation.x = -PI / 2; seaM.position.set(0, 0, -6); sc.add(seaM);
    sc.add(at(mesh(blobGeo(5.4, 0.06, 1.2, 1), C.foam, { noShadow: true }), 0, 0.03, 0)); sc.add(at(blob(4.9, 0.5, C.sand, 1.2), 0, 0.25, 0)); sc.add(at(blob(4.2, 0.5, C.mint, 0.4), 0, 0.72, 0));
    // plinth and door
    sc.add(at(box(5.3, 1.0, 2.4, C.stone, { r: 0.1 }), 0, 1.47, 0)); sc.add(at(box(0.8, 0.82, 0.2, C.violet, { r: 0.08 }), 0, 1.4, 1.2)); sc.add(at(rot(cyl(0.4, 0.4, 0.2, C.violet), PI / 2), 0, 1.8, 1.2)); sc.add(at(sph(0.06, C.yellow), 0.22, 1.4, 1.33)); sc.add(at(box(1.3, 0.14, 0.5, C.cream), 0, 1.02, 1.5));
    for (k in FLOORS) {
      if (k === '0') continue; f = FLOORS[k];
      sc.add(at(box(f.w + 0.6, 0.2, 2.3, C.cream, { r: 0.06 }), 0, f.y - 0.05, 0));
      sc.add(at(box(f.w, f.h, 0.2, f.wall, k === '1' ? { opacity: 0.55 } : { r: 0.04 }), 0, f.y + f.h / 2, -1.0));
      sc.add(at(box(0.3, f.h, 2.2, f.side, { r: 0.08 }), -f.w / 2 - 0.15, f.y + f.h / 2, 0)); sc.add(at(box(0.3, f.h, 2.2, f.side, { r: 0.08 }), f.w / 2 + 0.15, f.y + f.h / 2, 0));
    }
    // generator room
    var gen = generatorProp(); gen.scale.setScalar(0.72); gen.position.set(-0.85, 2.05, -0.1); sc.add(gen); var rack = packRack(10); rack.scale.setScalar(0.78); rack.position.set(1.4, 2.05, 0.4); sc.add(rack);
    // radio room
    var rp = radioProp(); rp.scale.setScalar(0.6); rp.position.set(-0.35, 4.45, -0.1); sc.add(rp); var ph = new T.Group(); ph.add(rot(cyl(0.34, 0.34, 0.06, C.sky), PI / 2)); ph.add(tor(0.34, 0.06, C.yellow)); ph.position.set(1.45, 5.75, -0.88); sc.add(ph);
    // gallery
    var wh = wheelProp(); wh.scale.setScalar(0.72); wh.position.set(-0.55, 6.75, 0); sc.add(wh);
    var lp = new T.Group(); lp.add(at(cyl(0.05, 0.05, 0.9, C.navy, { seg: 8 }), 0, 0.45, 0)); lp.add(at(rot(cyl(0.26, 0.2, 0.42, C.yellow), PI / 2), 0, 1.0, 0)); lp.add(at(rot(cyl(0.22, 0.22, 0.05, 0xFFF3B0, { glow: 0.8 }), PI / 2), 0, 1.0, 0.22)); lp.position.set(0.95, 6.75, 0.2); sc.add(lp);
    sc.add(bunting([-1.7, 8.45, -0.8], [1.7, 8.45, -0.8], 0.3, 6));
    sc.add(at(box(5.6, 0.2, 2.6, C.lilac, { r: 0.08 }), 0, 8.8, 0)); [-2.65, 2.65].forEach(function (x) { sc.add(at(cyl(0.05, 0.05, 0.7, C.white, { seg: 8 }), x, 9.25, 1.1)); sc.add(at(cyl(0.05, 0.05, 0.7, C.white, { seg: 8 }), x, 9.25, -1.1)); sc.add(at(box(0.08, 0.08, 2.3, C.white, { r: 0.03 }), x, 9.6, 0)); });
    // lens room and roof
    var lens = lensProp(false); lens.scale.setScalar(0.62); lens.position.set(0, 9.95, 0.1); sc.add(lens); sc.add(at(cyl(0.16, 0.26, 0.3, C.coral), 0, 9.1, 0.1));
    sc.add(at(box(3.5, 0.22, 2.5, C.white, { r: 0.08 }), 0, 10.8, 0)); sc.add(at(cone(1.95, 1.0, C.coral), 0, 11.4, 0)); sc.add(at(sph(0.14, C.yellow), 0, 11.95, 0));
    // ladders between floors
    [[1.75, 2.0, 2.4], [-1.55, 4.4, 2.3], [1.35, 6.7, 2.2]].forEach(function (l) { for (i = 0; i < 2; i++) sc.add(at(box(0.07, l[2], 0.07, C.yellow, { r: 0.02 }), l[0] + i * 0.4 - 0.2, l[1] + l[2] / 2, -0.8)); for (i = 0; i < 6; i++) sc.add(at(box(0.4, 0.06, 0.06, C.yellow, { r: 0.02 }), l[0], l[1] + 0.25 + i * 0.36, -0.8)); });
    [[-3.2, 1.0, 0.4, 0.9], [3.3, 1.0, 0.2, 1.1], [3.0, 1.0, -1.4, 0.8]].forEach(function (t) { var p = pine(t[3]); p.position.set(t[0], t[1], t[2]); sc.add(p); });
    [[-3.0, 10.6, -6, 1.1], [3.1, 8.0, -7, 1.2], [-3.2, 5.2, -8, 1.0], [2.6, 11.4, -7, 1.0]].forEach(function (c) { var cl = cloud(c[3], ST.cloud); cl.position.set(c[0], c[1], c[2]); sc.add(cl); });
    return { scene: sc, camera: cutCam(aspect) };
  }
  function mapBoxes() {       // where each room sits in the cutaway picture, in percent
    var c = cutCam(), out = {}, v = new T.Vector3();
    Object.keys(FLOORS).forEach(function (k) {
      var f = FLOORS[k], x0 = 1, x1 = 0, y0 = 1, y1 = 0;
      [-1, 1].forEach(function (sx) { [0, 1].forEach(function (sy) { [-1.1, 1.1].forEach(function (z) { v.set(sx * f.w / 2, f.y + sy * f.h, k === '0' ? 1.3 : z).project(c); var px = (v.x + 1) / 2, py = (1 - v.y) / 2; x0 = Math.min(x0, px); x1 = Math.max(x1, px); y0 = Math.min(y0, py); y1 = Math.max(y1, py); }); }); });
      out[k] = { l: +(x0 * 100).toFixed(1), t: +(y0 * 100).toFixed(1), w: +((x1 - x0) * 100).toFixed(1), h: +((y1 - y0) * 100).toFixed(1), name: f.name };
    });
    return out;
  }

  /* ---------- render every still picture once, hand them to CSS ---------- */
  var SHOTS = [['cutaway', 800, 1200], ['sea-panorama', 1800, 600], ['boat', 720, 480, true], ['lens', 960, 600], ['generator', 960, 600], ['radio', 960, 600], ['gallery', 960, 600], ['storm', 1440, 900], ['sea-panorama-lit', 1800, 600], ['lens-on', 400, 400], ['generator-on', 400, 400], ['radio-on', 400, 400]];
  function newRenderer(canvas) {
    var r = new T.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, preserveDrawingBuffer: false });
    r.outputEncoding = T.sRGBEncoding; r.shadowMap.enabled = true; r.shadowMap.type = T.PCFSoftShadowMap; r.setClearColor(0x000000, 0); return r;
  }
  function freeScene(sc) { sc.traverse(function (o) { if (o.geometry) o.geometry.dispose(); }); }
  function renderStills(done) {
    var r; try { r = newRenderer(document.createElement('canvas')); } catch (e) { done && done(); return; }
    r.setPixelRatio(1); var i = 0;
    (function next() {
      if (i >= SHOTS.length) { r.dispose(); if (r.forceContextLoss) r.forceContextLoss(); root.classList.add('toy-ready'); done && done(); return; }
      var s = SHOTS[i++], built = ROOMS[s[0]](s[1] / s[2]);
      r.setSize(s[1], s[2], false); r.render(built.scene, built.camera);
      r.domElement.toBlob(function (b) { if (b) root.style.setProperty('--toy-' + s[0], 'url(' + URL.createObjectURL(b) + ')'); freeScene(built.scene); setTimeout(next, 0); }, s[3] ? 'image/png' : 'image/webp', 0.9);
    })();
  }

  /* ---------- the live home world ---------- */
  var ICON = {
    lens: '<circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="4" fill="currentColor"/><path d="M32 6v6M32 52v6M6 32h6M52 32h6"/>',
    generator: '<path d="M36 6L16 36h14l-4 22 22-32H34z" fill="currentColor"/>',
    radio: '<rect x="12" y="28" width="40" height="24" rx="4"/><circle cx="24" cy="40" r="5"/><path d="M36 36h10M36 44h10"/><path d="M26 28l16-16"/><path d="M44 8a10 10 0 0 1 6 6M46 2a16 16 0 0 1 10 10"/>',
    gallery: '<circle cx="32" cy="32" r="16"/><circle cx="32" cy="32" r="5" fill="currentColor"/><path d="M32 6v10M32 48v10M6 32h10M48 32h10M14 14l7 7M43 43l7 7M50 14l-7 7M21 43l-7 7"/>',
    ship: '<path d="M8 40h48l-6 12H14z"/><path d="M20 40V28h22l6 12"/><path d="M30 28V16M30 16l10 5-10 4"/><path d="M6 58c5-3 8-3 13 0s8 3 13 0 8-3 13 0 8 3 13 0"/>',
    door: '<path d="M32 6v4"/><path d="M24 14h16l-2 8H26z" fill="currentColor"/><path d="M22 22h20"/><path d="M26 22l-4 34h20l-4-34"/><path d="M24 36h16M23 46h18"/><path d="M16 58h32"/>'
  };
  var SPOTS = [
    { id: 'lens', n: 1, at: [0, 7.3, 0.6], dx: -92, dy: -36, hue: 'a', title: 'Lens room', skill: 'Match a ratio', text: 'Climb all the way to the top of the tower. The storm cracked the lens, and the ship needs its light.' },
    { id: 'generator', n: 2, at: [2.4, 0.9, 0.9], dx: 96, dy: 6, hue: 'c', title: 'Generator room', skill: 'Fill a ratio table', text: 'The lens needs power to shine. Head all the way down to the generator room and its power packs.' },
    { id: 'radio', n: 3, at: [-2.3, 4.6, 0.2], dx: -84, dy: 10, hue: 'b', title: 'Radio room', skill: 'Find a unit rate', text: 'Power is flowing up the tower. Climb up to the radio room to call for help.' },
    { id: 'gallery', n: 4, at: [1.2, 6.9, 1.3], dx: 104, dy: -30, hue: 'd', title: 'Signal gallery', skill: 'Set the signal', text: 'Put it all together on the balcony, then send a signal before the ship reaches the rocks.' },
    { id: 'ship', ship: true, at: [0, 1.6, 0], dx: 0, dy: -64, hue: 'b', title: 'Rescue ship', skill: '3.0 miles from the reef', text: 'A rescue ship is sailing straight toward the rocks, and the crew can’t see the danger. Only you can get the light shining again.', img: 'storm' }
  ];
  var live = null;
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function svg(id) { return '<svg viewBox="0 0 64 64" width="26" height="26" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[id] + '</svg>'; }
  function buildLive() {
    var canvas = document.createElement('canvas'); canvas.className = 'ty-canvas'; canvas.setAttribute('aria-hidden', 'true');
    var r; try { r = newRenderer(canvas); } catch (e) { return null; }
    r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    var w = world({ mood: 'storm' }), camera = new T.PerspectiveCamera(30, 2, 0.1, 400);
    var layer = el('div', 'ty-spots'); layer.style.visibility = 'hidden'; var lines = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); lines.setAttribute('class', 'ty-lines'); lines.setAttribute('aria-hidden', 'true');
    var card = el('div', 'ty-card'); card.setAttribute('role', 'dialog'); card.hidden = true;
    var L = { r: r, canvas: canvas, layer: layer, lines: lines, card: card, world: w, camera: camera, yaw: 0.12, yawT: 0.12, pitch: 0.2, zoom: 1, zoomT: 1, focus: new T.Vector3(0.6, 4.3, 0), focusT: new T.Vector3(0.6, 4.3, 0), open: null, spots: [], t0: performance.now(), host: null, w: 0, h: 0 };
    SPOTS.forEach(function (s) {
      var b = el('button', 'ty-spot ty-hue-' + s.hue, svg(s.id) + (s.n ? '<span class="ty-num">' + s.n + '</span>' : '')); b.type = 'button'; b.setAttribute('aria-label', (s.n ? 'Room ' + s.n + ': ' : '') + s.title + '. ' + s.skill);
      var dot = el('span', 'ty-dot ty-hue-' + s.hue), ln = document.createElementNS('http://www.w3.org/2000/svg', 'line'); lines.appendChild(ln);
      b.addEventListener('click', function () { openSpot(L, s); }); layer.appendChild(dot); layer.appendChild(b); L.spots.push({ s: s, b: b, dot: dot, ln: ln });
    });
    var go = el('button', 'ty-spot ty-go', svg('door') + '<span class="ty-go-l">Climb in</span>'); go.type = 'button'; go.setAttribute('aria-label', 'Climb the lighthouse and start the game'); go.addEventListener('click', start); layer.appendChild(go); L.go = go;
    // drag to look around
    var drag = null;
    canvas.addEventListener('pointerdown', function (e) { drag = { x: e.clientX, yaw: L.yawT, moved: false }; try { canvas.setPointerCapture(e.pointerId); } catch (x) {} });
    canvas.addEventListener('pointermove', function (e) { if (!drag) return; var dx = e.clientX - drag.x; if (Math.abs(dx) > 4) drag.moved = true; L.yawT = clamp(drag.yaw - dx * 0.006, -1.0, 1.0); L.host && L.host.classList.add('ty-dragged'); });
    function end() { if (drag && !drag.moved && L.open) closeSpot(L); drag = null; }
    canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', function () { drag = null; });
    return L;
  }
  function start() { var b = document.querySelector('.ty-nc'); if (b) b.click(); }
  function openSpot(L, s) {
    L.open = s; L.zoomT = 0.84; L.host && L.host.classList.add('ty-open');
    L.card.innerHTML = '<div class="ty-card-img" style="background-image:var(--toy-' + (s.img || s.id) + ')"></div><div class="ty-card-b"><span class="ty-card-k">' + (s.n ? 'Room ' + s.n + ' of 4' : 'Out at sea') + '</span><strong class="ty-card-t">' + s.title + '</strong><span class="ty-card-s ty-hue-' + s.hue + '">' + s.skill + '</span><p>' + s.text + '</p><div class="ty-card-a"><button type="button" class="ty-btn" data-go>Climb in</button><button type="button" class="ty-link" data-x>Back to the island</button></div></div>';
    L.card.setAttribute('aria-label', s.title); L.card.hidden = false;
    L.card.querySelector('[data-go]').addEventListener('click', start); var x = L.card.querySelector('[data-x]'); x.addEventListener('click', function () { closeSpot(L); s._b && s._b.focus(); });
    L.spots.forEach(function (p) { p.b.classList.toggle('is-on', p.s === s); if (p.s === s) s._b = p.b; }); x.focus({ preventScroll: true });
  }
  function closeSpot(L) { L.host && L.host.classList.remove('ty-open'); L.open = null; L.zoomT = 1; L.card.hidden = true; L.spots.forEach(function (p) { p.b.classList.remove('is-on'); }); }
  var v3 = new T.Vector3();
  function frame(now) {
    if (!live) return; var L = live, host = L.host;
    if (!host || !host.isConnected) { L.running = false; return; }
    requestAnimationFrame(frame);
    var w = host.clientWidth, h = host.clientHeight; if (!w || !h || document.hidden) return;
    if (w !== L.w || h !== L.h) { L.w = w; L.h = h; L.r.setSize(w, h, false); L.camera.aspect = w / h; L.lines.setAttribute('viewBox', '0 0 ' + w + ' ' + h); }
    var t = (now - L.t0) / 1000, W = L.world, narrow = w < 620;
    // gentle life
    if (!reduce) worldTick(W, t);
    // camera
    var tgt = L.open ? spotPos(L, L.open, v3).clone() : null;
    if (tgt) L.focusT.set(tgt.x * 0.5 + (narrow ? 0.3 : 3.4), clamp(tgt.y, 3.6, 4.8) - (narrow ? 1.6 : 0), tgt.z * 0.3); else L.focusT.set(0.6, 4.3, 0);
    L.focus.lerp(L.focusT, 0.07); L.yaw += (L.yawT - L.yaw) * 0.1; L.zoom += (L.zoomT - L.zoom) * 0.07;
    var fit = Math.max(1, 1.75 / (w / h)), dist = 29 * L.zoom * (narrow ? Math.min(fit, 1.75) : Math.min(fit, 1.35)), sway = reduce ? 0 : Math.sin(t * 0.25) * 0.03;
    L.camera.position.set(L.focus.x + Math.sin(L.yaw + sway) * Math.cos(L.pitch) * dist, L.focus.y + Math.sin(L.pitch) * dist, L.focus.z + Math.cos(L.yaw + sway) * Math.cos(L.pitch) * dist);
    L.camera.lookAt(L.focus); L.camera.updateProjectionMatrix(); L.camera.updateMatrixWorld();
    L.r.render(W.scene, L.camera); if (L.layer.style.visibility) L.layer.style.visibility = '';
    // hotspots follow their anchors
    var k = narrow ? 0.62 : 1;
    L.spots.forEach(function (p) {
      spotPos(L, p.s, v3); v3.project(L.camera); var ax = (v3.x + 1) / 2 * w, ay = (1 - v3.y) / 2 * h, bx = clamp(ax + p.s.dx * k, 28, w - 28), byy = clamp(ay + p.s.dy * k, 28, h - 28);
      p.b.style.transform = 'translate(' + bx.toFixed(1) + 'px,' + byy.toFixed(1) + 'px)'; p.dot.style.transform = 'translate(' + ax.toFixed(1) + 'px,' + ay.toFixed(1) + 'px)';
      p.ln.setAttribute('x1', ax); p.ln.setAttribute('y1', ay); p.ln.setAttribute('x2', bx); p.ln.setAttribute('y2', byy);
    });
    v3.set(0, 0.6, 2.6).applyMatrix4(W.isle.matrixWorld).project(L.camera);
    L.go.style.transform = 'translate(' + ((v3.x + 1) / 2 * w).toFixed(1) + 'px,' + (clamp((1 - v3.y) / 2 * h + (narrow ? 34 : 46), 30, h - 34)).toFixed(1) + 'px)';
  }
  function spotPos(L, s, out) {
    if (s.ship) return out.set(s.at[0], s.at[1], s.at[2]).applyMatrix4(L.world.ship.matrixWorld);
    return out.set(s.at[0], s.at[1], s.at[2]).applyMatrix4(L.world.tower.matrixWorld);
  }
  function mount() {
    var host = document.getElementById('toyWorld');
    if (!host) return;
    if (!live) { live = buildLive(); if (!live) { host.classList.add('ty-nogl'); return; } }
    if (live.host !== host || !live.canvas.isConnected) { live.host = host; host.appendChild(live.canvas); host.appendChild(live.lines); host.appendChild(live.layer); host.appendChild(live.card); live.w = 0; closeSpot(live); }
    if (!live.running) { live.running = true; live.world.scene.updateMatrixWorld(true); requestAnimationFrame(frame); }
  }

  /* ---------- live pictures inside the game: they read the game's state from #toyState ---------- */
  var VIEWS = [
    { sel: '.ty-pic', key: function (s) { return 'room' + s.room; }, build: function (s, a) { return PIC[s.room] ? PIC[s.room](a) : null; } },
    { sel: '.ty-lenslive', key: function () { return 'lens'; }, build: function () { return lensPuzzle(); } }
  ];
  function readState() {
    var e = document.getElementById('toyState'); if (!e) return null;
    var p = (e.textContent || '').split('|'); return { room: +p[0] || 0, on: p[1] === '1', storm: p[2] === '1', slots: p[3] || '' };
  }
  function fit(view, aspect) {
    var c = view.camera; if (!c.isPerspectiveCamera) return;
    view.fov = view.fov || c.fov; c.aspect = aspect; c.fov = 2 * Math.atan(Math.tan(view.fov * PI / 360) * Math.max(1, (view.design || 1.5) / aspect)) * 180 / PI; c.updateProjectionMatrix();
  }
  function viewsFrame(now) {
    requestAnimationFrame(viewsFrame); if (document.hidden) return;
    var s = readState(); if (!s) return; var t = reduce ? 0.7 : now / 1000;
    VIEWS.forEach(function (v) {
      var host = document.querySelector(v.sel); if (!host || v.dead) return;
      var w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
      if (!v.r) { v.canvas = document.createElement('canvas'); v.canvas.className = 'ty-live'; v.canvas.setAttribute('aria-hidden', 'true'); try { v.r = newRenderer(v.canvas); } catch (e) { v.dead = true; return; } v.r.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2)); }
      if (v.canvas.parentNode !== host) { host.appendChild(v.canvas); v.w = 0; }
      var k = v.key(s); if (k !== v.k) { if (v.view) freeScene(v.view.scene); v.view = v.build(s, w / h); v.k = k; v.w = 0; }
      if (!v.view) { v.canvas.style.visibility = 'hidden'; return; } v.canvas.style.visibility = '';
      if (w !== v.w || h !== v.h) { v.w = w; v.h = h; v.r.setSize(w, h, false); fit(v.view, w / h); }
      if (v.view.set) v.view.set(s); if (v.view.tick) v.view.tick(t, s);
      v.r.render(v.view.scene, v.view.camera);
    });
  }

  window.BeaconToy = { boxes: mapBoxes(), pano: panoPoints(), rooms: ROOMS, mount: mount,
    // modelling kit, so matching pictures (handouts, slides) can be built from the same parts
    kit: { T: T, C: C, ST: ST, M: M, mesh: mesh, at: at, rot: rot, box: box, cyl: cyl, sph: sph, cone: cone, tor: tor, prism: prism, tube: tube, blob: blob, blobGeo: blobGeo, cloud: cloud, pine: pine, rain: rain, battery: battery, packRack: packRack, lensUnit: lensUnit, generatorProp: generatorProp, radioProp: radioProp, wheelProp: wheelProp, shipProp: shipProp, bunting: bunting, tower: tower, cottage: cottage, reef: reef, buoy: buoy, boltMesh: boltMesh, stage: stage, sea: sea, scatterRipples: scatterRipples, seaY: seaY, drop: drop, world: world, cam: cam, shell: shell, PIC: PIC, cutaway: cutaway, panoCam: panoCam, PANO: PANO, newRenderer: newRenderer, fit: fit, glowMat: glowMat, setGlow: setGlow } };
  function boot() {
    mount();
    new MutationObserver(mount).observe(document.body, { childList: true, subtree: true });
    setTimeout(renderStills, 60);
    requestAnimationFrame(viewsFrame);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
