/* Out of Thin Air: flight-deck edition (assets/interactives/space-medicine-story-flight.html).
   Most pictures are drawn in code. */
(function () {
'use strict';

/* ---------- Story data (copied from the original story) ---------- */
var CHAT = {
    1: [{ r: 'Great, let’s go. Here’s the plan.' }, { r: 'Tomorrow at dawn, our balloon carries two crew members to 30,000 feet. My job, and now yours, is to keep them sharp up there.' }, { u: ['Wow, no pressure. What could go wrong up there?', 'Okay. Where do I even start?', 'Honestly, I’m a little nervous.'], a: ['Ha! A lot, if we’re not ready. Up there the air is thin, it’s far below freezing, and your body has less oxygen to work with. That’s why we prepare.', 'Same place I always do: with history. The people who went first teach us what to watch for.', 'Good. Nervous means you’re taking it seriously.'] }, { dyn: 1 }, { r: 'Here’s what helps me: two men flew this high once before, in 1862, with no oxygen and no idea what the air would do to them.' }, { r: 'Watch this first. It’s how I start every briefing. You’ll see what Glaisher and Coxwell were trying to learn, what happened as they climbed past five miles, and how Coxwell got them down. Pay attention to the symptoms. We’ll come back to them.' }, { video: ['Case Study: What Goes Up', '3 min', 'The 1862 flight of Glaisher and Coxwell', 'case-study'] }, { u: ['Okay, that was terrifying. They almost didn’t make it.', 'He pulled the cord with his TEETH?', 'Wait, why did they keep climbing?'], needVid: 1, a: ['They came so close. Glaisher lost his vision and then passed out, and Coxwell’s hands stopped working. They had no idea why.', 'He did! His hands had stopped working, so he grabbed the cord with his teeth. It took three pulls to let out enough gas to start coming down.', 'They didn’t realize anything was wrong until it was almost too late. Low oxygen dulls your thinking, so it’s hard to notice it happening to you.'] }, { dyn: 1 }, { r: 'Here’s the thing: they didn’t know what was happening to them. You can find out.' }, { r: 'Here’s Glaisher’s logbook from that day. Read it closely.' }, { file: 1 }],
    2: [{ file: 1 }, { r: 'Here’s the logbook again. Open it any time you need it.' }, { r: 'Now use it to rebuild their flight. Tap an event below, then tap the height where it happened.' }],
    3: [{ r: 'Before we can explain what happened, you need to know where oxygen goes once you breathe it in.' }, { r: 'Take a look at this to see the whole route: lungs, blood, heart, and finally the mitochondria in your cells. Notice why the narrator keeps comparing your cells to a candle.' }, { video: ['Physiology: The Fire of Life', '3 min', 'How oxygen gets from the air into your cells', 'physiology'] }, { u: ['So the mitochondria really is the powerhouse.', 'The candle going out at the end got me.', 'That’s a lot of steps for one breath.'], needVid: 1, a: ['It really is. Mitochondria use oxygen to turn food into ATP, the energy your cells run on.', 'Me too, every time. Like a candle, your cells need oxygen to keep burning. Cut it off and the flame fades.', 'It is. Air goes in through your nose and lungs, into your blood, through your heart, and out to every cell. If any step fails, the cells go hungry.'] }, { dyn: 1 }, { r: 'Oxygen has to pass along that whole chain to reach the cells. If any link breaks, the flame dims.' }, { r: 'Try breaking each link and see what happens downstream.' }],
    4: [{ r: 'So what went wrong up there? Doctors call it hypoxia: cells not getting enough oxygen.' }, { r: 'Watch this to learn which organs feel it first and why, the outside signs you can spot in a crew member, and the four ways hypoxia can happen. Keep Glaisher’s symptoms in mind as you watch.' }, { video: ['Pathophysiology: Hypoxia', '3 min', 'The signs of hypoxia, and four ways it can happen', 'hypoxia'] }, { u: ['Tunnel vision, then confusion. That’s exactly what Glaisher described.', 'I didn’t know there were four kinds.', 'Blue lips. That’s the one I’d spot first.'], needVid: 1, a: ['Exactly. Eyes, brain, and muscles use the most energy, so they feel it first. First tunnel vision, then confusion, then hands that won’t work.', 'Yes! Here’s the short version. Hypoxic: not enough oxygen gets in from the air. Anemic: the blood can’t carry enough. Stagnant: the blood isn’t flowing. Histotoxic: the cells can’t use it. Each one breaks a different link in the chain.', 'Good. That’s called cyanosis: blue lips and fingertips mean the blood is low on oxygen. It’s one of the first things I check.'] }, { dyn: 1 }, { r: 'Now let’s put it to work. I’ve got a recording from one of our training climbs. Read them like a flight surgeon.' }],
    5: [{ r: 'Here’s the puzzle. None of Glaisher’s links were damaged, yet his cells still starved.' }, { r: 'The answer is in the air itself. Watch this to explore what pressure really is, why it drops as you climb, and why the air stays about 21% oxygen even when there’s less of it. Look for the pie chart near the end.' }, { video: ['Physics: Solubility, Altitude and Pressure', '4 min', 'Why pressure drops as you climb, and what that does to each breath', 'physics'] }, { u: ['Wait, the oxygen percentage doesn’t change?', 'So that’s why pasta takes longer in Colorado.', 'The shrinking pie chart finally made it click.'], needVid: 1, a: ['Nope, still about 21%. What changes is the pressure. There’s less air in every breath, so you get less oxygen even though the share stays the same.', 'Ha, yes! Lower air pressure lets water boil at a lower temperature, so food cooks slower. Same physics as your lungs, just in a pot.', 'That’s the one. In the pie chart, the oxygen slice stays at 21%, but the whole circle gets smaller as you climb, so each breath brings in less oxygen.'] }, { dyn: 1 }, { r: 'Flight surgeons run this math before every high flight. I’ll show you an example, then it’s your turn.' }],
    6: [{ r: 'Now you know the problem: thin air means less oxygen in every breath. Engineers fix that in two ways. They add pressure, so each breath holds more air, or they add oxygen, so more of each breath is oxygen.' }, { r: 'Take a look at this to see how airliners, pilots, and spacecraft each solve it, from cabin altitude to oxygen masks to spacesuits. Watch for why the space station uses normal air instead of pure oxygen.' }, { video: ['Engineering: Countermeasures', '3 min', 'From oxygen masks to pressurized cabins and spacesuits', 'engineering'] }, { u: ['Wait, too much oxygen is a problem too?', 'So cabins aren’t at sea-level pressure?', 'Spacesuits run on pure oxygen? Wild.'], needVid: 1, a: ['It is! Breathing extra oxygen for months can harm your lungs, and it makes fires spread faster. That’s why the space station uses normal air.', 'Right. Most airliners keep the cabin at the pressure you’d feel around 8,000 feet. It’s easier on the plane’s body and still safe to breathe.', 'For a few hours, yes. A suit at low pressure stays flexible enough to move in, and pure oxygen makes up for the low pressure.'] }, { dyn: 1 }, { r: 'Every fix has a cost. Before tomorrow, check three designs our team relies on. Sign off only when every check passes.' }],
    7: [{ r: 'It’s launch day. We’re at 27,000 feet and climbing.' }, { r: 'Alert. A valve just stuck and the gondola is losing pressure. The crew is on the radio.' }, { u: ['I’m here. What do they need?', 'Okay, okay. Talk me through it.', 'On it. Are they still responding?'], a: ['Clear thinking. That’s what they need from you. Remember: oxygen first, then get them lower.', 'I’ve got you. One step at a time: watch for the first signs, get oxygen on them, then descend.', 'They are, but the pilot sounds slow. That’s an early sign. We need to move.'] }, { dyn: 1 }, { r: 'Cabin altitude is climbing. Watch them closely and make the calls. Take a breath. You’ve got this.' }],
    8: [{ r: 'They’re down safe. Landed in a field right at sunrise.' }, { r: 'You read the evidence, found the cause, and used it when it counted.' }, { u: ['Thanks, Elena. That was a lot!', 'I can’t believe we pulled that off.', 'Can we do the next flight together?'], a: ['You earned it. That’s what this work feels like on a good day.', 'Believe it. You did the hard part.', 'I’d like that. You’re ready.'] }, { dyn: 1 }, { r: 'That’s the job. Here’s what you figured out. See you on the next flight.' }]
  };
var SCENE = { 1: 'Launch field, 8:47 PM, the night before launch', 2: 'Mission tent, 9:05 PM, reading the logbook', 3: 'Mission tent, 9:30 PM', 4: 'Mission tent, 10:10 PM', 5: 'Mission tent, 10:45 PM', 6: 'Engineering bay, 11:20 PM', 7: 'Launch day, 7:42 AM, 27,000 ft', 8: 'Landing field, 9:15 AM' };
var HO = ['The cold', 'Not enough oxygen', 'Exhaustion', 'Something in the balloon gas'];
var TE = [['Sets a new record for the highest balloon flight', 'Only 19 minutes in, and both men feel fine.', 'This happened early, before anyone felt sick.'], ['Coxwell starts having trouble breathing', 'About half an hour later. He’s worried, but they keep climbing.', 'Coxwell was experienced, so this hit later, well above the clouds.'], ['Glaisher can’t read the instruments, then passes out', 'His eyes and brain are running out of oxygen first.', 'This came after the breathing trouble, near the height of Everest.'], ['Coxwell pulls the valve cord with his teeth', 'His hands have stopped working. The third pull starts their descent.', 'This was the very last thing that happened on the way up.']];
var TS = [['2 miles up, about 10,500 ft', 80], ['5 miles up, about 26,400 ft', 56], ['29,000 ft', 33], ['The top, close to 7 miles (estimated)', 11]];
var RT = ['Nose and mouth', 'Trachea', 'Bronchi', 'Alveoli (air sacs)', 'Pulmonary veins', 'Left side of the heart', 'Arteries and capillaries', 'Mitochondria in your cells'];
var RO = [3, 6, 0, 7, 2, 5, 1, 4];
var EQ = ['ATP (energy)', 'Carbon dioxide', 'Water', 'Nitrogen', 'Smoke'];
var PL = [['Top of Everest, Glaisher’s height', '29,000 ft, 31% of sea-level pressure', 0.31, 6.5, 'Use 21 × 0.31.'], ['Outside an airliner', '35,000 ft, 25% of sea-level pressure', 0.25, 5.3, 'Use 21 × 0.25. Round to one decimal.'], ['Inside an airliner cabin', 'Kept at about 8,000 ft, 74% of sea-level pressure', 0.74, 15.5, 'Use 21 × 0.74.']];
var DZ = ['Denver', '29,000 ft', 'Outside the airliner', 'Inside the cabin'];
var VH = [['Airliner cabin', 'Flights last hours. The fuselage is built for some pressure, not full sea-level pressure.', [0.33, 0.75, 1.0], 'hull'], ['Spacesuit', 'Used for a few hours outside in a vacuum. Higher pressure makes the suit stiff and strains it.', [0.33, 0.75, 1.0], 'suit'], ['Space station', 'Crews live here for months. The hull is built for full sea-level pressure.', [0.33, 0.75, 1.0], 'iss']];
var OX = [21, 50, 100];
var CK = [['12,000 ft', '94%', 'All good up here. Checklist done, view is amazing.', 0], ['18,000 ft', '86%', 'My fingers feel thick. I can’t flip this switch.', 3], ['23,000 ft', '79%', 'Wait, what was I... reading? Say again?', 2], ['27,000 ft', '71%', 'It’s like looking down a tube. The edges are going dark.', 1]];
var SG = [['No signs yet', 'Normal speech, steady hands'], ['Tunnel vision', 'Eyes run low first'], ['Confusion', 'The brain runs low'], ['Clumsy hands', 'Muscles run low']];
var HX = [['Hypoxic', 'Not enough oxygen gets in from the air', 'Both men were breathing thin air. This is the one.'], ['Anemic', 'Blood can’t carry enough', 'Neither man was bleeding or poisoned, so their blood was fine.'], ['Stagnant', 'Blood isn’t flowing', 'Heart failure striking two healthy men at once is very unlikely.'], ['Histotoxic', 'Cells can’t use oxygen', 'That takes something like cyanide. Nothing in the basket did that.']];
var RL = [[12000, 'Pilot', 'All good. Just a little stuffy in here.'], [15000, 'Pilot', 'My fingers feel… thick. I can’t get this switch.'], [18000, 'Engineer', 'Wait, what was the reading? Say again?'], [22000, 'Pilot', 'It’s like looking down a tube. The edges are going dark.']];
var TW = [['“Your mask back on first. Then hand her the spare.”', 1, 'Yes. If he passes out, he can’t help anyone. It’s the same reason airlines say: put your own mask on first.'], ['“Help her first. You can hold your breath.”', 0, 'Risky. Without oxygen up here, he could be confused in under a minute and then no one can help. Mask on first.']];
var TG = [[20000, 'Too high. Above 14,000 ft they still can’t breathe safely without oxygen. Go lower.'], [14000, 'That’s right at the limit. Any small leak puts them over it. Give yourself more margin.'], [10000, 'Good call. Well under 14,000 ft, so they can breathe safely even if a mask slips.']];
var LOGP = [['Minute 17', 'Above a sea of clouds. Both of us in fine spirits.'], ['Minute 19', 'Two miles up. Higher than any balloon has gone before.'], ['Minute 48, five miles', 'Coxwell is breathing hard. He is worried, but we climb on.'], ['29,000 ft', 'I cannot read the instruments. My arms will not lift. Everything is going dark…'], ['Coxwell’s note', 'Glaisher has gone still. My hands are useless. I take the valve cord in my teeth. Once. Twice. On the third pull, we begin to fall.']];

var CH = [
  { k: 'Before we begin', t: 'Meet your mentor', type: 'meet' },
  { k: 'Launch eve', t: 'The night before', type: 'chat' },
  { k: 'The ascent, 1862', t: 'What goes up', img: 'Glaisher and Coxwell’s open basket above the clouds', type: 'log', fig: 'ascent' },
  { k: 'Inside the body', t: 'The fire of life', img: 'stylized oxygen path from lungs to a glowing cell', type: 'chain', fig: 'oxygen' },
  { k: 'The diagnosis', t: 'What went wrong', img: 'Glaisher’s notebook beside a 19th-century barometer', type: 'weigh', fig: 'logbook' },
  { k: 'The physics', t: 'The oxygen pie chart', img: 'the balloon rising past thinning clouds, pressure gauge in the basket', type: 'pie', fig: 'altitude' },
  { k: 'The engineering', t: 'Design the atmosphere', img: 'a sealed, pressurized gondola beside an open wicker basket', type: 'atmo', fig: 'gondola' },
  { k: 'Launch day, 27,000 ft', t: 'Cabin pressure lost', img: 'inside a modern gondola, warning light glowing', type: 'scen', fig: 'cabin' },
  { k: 'Debrief', t: 'Crew home safe', img: 'the balloon landing in a field at sunrise', type: 'debrief', fig: 'landing' }
];
var N = CH.length;
var ALT = [0, 3000, 10000, 15000, 19000, 23000, 25000, 27000, 0]; /* training altitude shown on the flight profile */
var MET = { 0: -620, 1: -613, 2: -595, 3: -570, 4: -530, 5: -495, 6: -460, 7: 42, 8: 135 }; /* minutes from a 7:00 AM launch */
var PATCH = [null, 'Briefing', 'Flight rebuilt', 'Fire of life', 'Diagnosis', 'Thin air', 'Atmosphere', 'Crew safe', 'Mission complete'];
var DEF_REPLY = 'I’m ready, let’s get started!';
var KEY = 'out-of-thin-air-flight-v1';
var RM = false;
try { RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

/* ---------- Helpers ---------- */
function $(s, r) { return (r || document).querySelector(s); }
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function fmt(n) { return Number(n).toLocaleString('en-US'); }
function setH(el, h) { if (el && el._h !== h) { el._h = h; el.innerHTML = h; } }
function say(t) { var l = $('#live'); if (!l) return; l.textContent = ''; setTimeout(function () { l.textContent = t; }, 60); }
function has(a, x) { return a.indexOf(x) >= 0; }

/* ---------- State ---------- */
function simZero() { return { sAlt: 8000, sPeak: 8000, sRun: false, sStarted: false, sMask: false, sMaskAlt: null, sDesc: null, sWon: false, sFail: false, sFb: null, sMath: '', sMathOk: false, sMathT: 0, sTw: null, sTwP: null, sTwT: 0, sTwFirst: null, sTgtP: null, sTgtFirst: null }; }
function fresh() {
  var s = { c: 0, sent: null, reply: null, ci: {}, picks: {}, vp: {}, hunch: null, tp: {}, tsel: null, tfb: null, rn: 0, rfb: null, eqs: [], ckI: 0, ckA: {}, call: null, hx: [], hxf: null, alt: 0, pv: {}, pChk: false, dz: [], at: {}, pt: [] };
  var z = simZero(); for (var k in z) s[k] = z[k];
  return s;
}
var S = fresh(), gate = null;
var typing = false, chatTyping = null, chatFor = null, logN = 0, logOpen = false, lastFocus = null;
var T = { chat: 0, type: 0, send: 0, ntf: 0, ntf2: 0, sim: 0 };

function save() { if (gate) return; try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function load() {
  try {
    var s = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (!s || typeof s !== 'object' || typeof s.c !== 'number' || s.c < 0 || s.c >= N) return null;
    var f = fresh(); for (var k in f) if (s[k] === undefined) s[k] = f[k];
    if (!s.sWon) { var z = simZero(); for (var j in z) s[j] = z[j]; }
    s.sRun = false; s.tsel = null;
    return s;
  } catch (e) { return null; }
}
function wipe() { try { localStorage.removeItem(KEY); } catch (e) {} }

/* ---------- Derived values ---------- */
function press(a) { /* share of sea-level pressure, through the values the lesson states */
  var P = [[0, 1], [5280, 0.8], [8000, 0.74], [29000, 0.31], [35000, 0.25]];
  for (var i = 1; i < P.length; i++) if (a <= P[i][0]) { var f = (a - P[i - 1][0]) / (P[i][0] - P[i - 1][0]); return Math.exp(Math.log(P[i - 1][1]) + f * (Math.log(P[i][1]) - Math.log(P[i - 1][1]))); }
  return 0.25;
}
function simP(x) { return Math.pow(1 - 6.8756e-6 * x, 5.2559); }
function pOk(i) { var n = parseFloat(String(S.pv[i] || '').replace(',', '.')); return !isNaN(n) && Math.abs(n - PL[i][3]) <= 0.25; }
function vRes() {
  return VH.map(function (v, i) {
    var s = S.at[i] || {}, hasV = s.p != null && s.o != null; if (!hasV) return { has: false, ok: false };
    var u = Math.round(s.p * s.o * 10) / 10, low = u < 15, high = v[3] === 'suit' ? u > 40 : u > 40 || (s.o > 21 && v[3] !== 'suit' && u > 30), stress = v[3] === 'suit' ? s.p > 0.33 : v[3] === 'hull' ? s.p > 0.75 : false;
    var checks = [[!low, low ? 'Not enough oxygen. The crew would become hypoxic.' : 'Enough oxygen to stay alert.'], [!high, high ? (v[3] === 'iss' ? 'Too much oxygen for months-long stays. Oxygen toxicity and fire risk go up.' : 'Too much oxygen. It raises fire risk and can harm the body.') : 'The oxygen level is safe.'], [!stress, stress ? (v[3] === 'suit' ? 'Too much pressure. In a vacuum, the suit would be stiff and strained.' : 'Too much pressure for this fuselage. It would need a much heavier hull.') : 'The walls can handle this pressure.']];
    return { has: true, u: u, checks: checks, ok: checks.every(function (c) { return c[0]; }) };
  });
}
function facts() {
  var f = {};
  f.tDone = [0, 1, 2, 3].every(function (i) { return S.tp[i] === i; });
  f.rDone = S.rn >= 8;
  f.eqOk = S.eqs.length === 3 && [0, 1, 2].every(function (x) { return has(S.eqs, x); });
  f.ckAll = [0, 1, 2, 3].every(function (i) { return S.ckA[i] === CK[i][3]; });
  f.callOk = S.call === 1;
  f.hxDone = [1, 2, 3].every(function (i) { return has(S.hx, i); });
  f.piesOk = !!S.pChk && PL.every(function (_, i) { return pOk(i); });
  f.dzDone = S.dz.length === 2 && [1, 2].every(function (x) { return has(S.dz, x); });
  f.vr = vRes(); f.atmoOk = f.vr.every(function (r) { return r.ok; });
  return f;
}
function lockOf(type, f) {
  return type === 'log' ? (!f.tDone || S.hunch == null) : type === 'chain' ? !(f.rDone && f.eqOk) : type === 'weigh' ? !(f.ckAll && f.callOk && f.hxDone) : type === 'pie' ? !(f.piesOk && f.dzDone) : type === 'atmo' ? !f.atmoOk : type === 'scen' ? !S.sWon : false;
}
function chatDoneAt(c) { var L = CHAT[c]; return !L || (S.ci[c] || 0) >= L.length; }
function derive() {
  var f = facts(), ch = CH[S.c];
  f.ch = ch; f.chatDone = chatDoneAt(S.c); f.locked = lockOf(ch.type, f);
  var t = ch.type;
  f.lockMsg = !f.locked ? '' : t === 'log' ? (f.tDone ? 'Pick your hunch about what hurt them.' : 'Place all four events on the flight.') : t === 'chain' ? (f.rDone ? 'Finish the candle equation.' : 'Trace the whole route, from nose to cells.') : t === 'weigh' ? (!f.ckAll ? 'Name the sign at every check-in.' : !f.callOk ? 'Pick when you should have called for oxygen.' : 'Cross out the three types that don’t fit.') : t === 'pie' ? (f.piesOk ? 'Find the places in the dead zone.' : 'Work out the oxygen for all three places, then check.') : t === 'atmo' ? 'Pick the air for all three vehicles so every check turns green: enough oxygen (15 or more), not too much (40 or less), and walls that can handle the pressure.' : t === 'scen' ? 'Watch for the signs, make every call, and get the crew safely down.' : '';
  return f;
}

/* ---------- Drawings ---------- */
var LN = 'fill="none" stroke="#f3ead6" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"';
var OR = 'fill="none" stroke="#ff8552" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"';
var BL = 'fill="none" stroke="#8fc3ff" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"';
function balloonSvg() { return '<svg viewBox="0 0 26 34" width="100%" height="100%" aria-hidden="true"><path d="M13 1C6.4 1 2 5.800 2 11.200c0 5.400 5.400 9.600 8.300 12.200h5.400C18.600 20.800 24 16.600 24 11.200 24 5.800 19.600 1 13 1z" fill="#ff8552"/><path d="M13 1c-3 2.600-4.400 6.400-4.400 10.200 0 4.600 1.600 8.600 2.600 12.200M13 1c3 2.600 4.400 6.400 4.400 10.200 0 4.600-1.600 8.600-2.600 12.200" fill="none" stroke="#b9532c" stroke-width="1.2"/><path d="M10.300 23.400l.9 4h3.600l.9-4" fill="none" stroke="#f3ead6" stroke-width="1.2"/><rect x="10.400" y="27.400" width="5.200" height="4.400" rx="1" fill="#c9935a"/></svg>'; }
function avatar() { return ''; } /* photo comes from the .av rule in the page CSS */
function badgeFigure() {
  return '<span class="badge-img"></span><svg viewBox="0 0 200 250" preserveAspectRatio="none" aria-hidden="true"><g ' + BL + ' opacity=".7"><path d="M8 14h30M8 14v30"/><path d="M192 14h-30M192 14v30"/></g></svg>';
}
var FIG = {
  ascent: '<g transform="translate(22 0)"><g ' + LN + '><path d="M118 14c-30 0-50 22-50 46 0 22 22 40 38 52h24c16-12 38-30 38-52 0-24-20-46-50-46z"/><path d="M118 14c-12 12-18 28-18 46 0 20 6 38 10 52M118 14c12 12 18 28 18 46 0 20-6 38-10 52" opacity=".5"/><path d="M106 112l3 13h18l3-13"/></g><rect x="108" y="125" width="20" height="14" rx="2" ' + OR + '/></g><path d="M12 134q12-11 26 0q10-7 22 0M168 138q9-8 18 0" ' + BL + '/><path d="M214 16v122M209 16h10M209 138h10" ' + OR + ' stroke-dasharray="3 3"/><text x="224" y="80" font-size="8" fill="#ff8552" transform="rotate(90 224 80)" text-anchor="middle">29,000 FT</text><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 2</text><text x="10" y="29" font-size="8" fill="#cdc9e6">OPEN BASKET, 1862</text>',
  oxygen: '<g ' + LN + '><path d="M62 30v30M62 60q-6 6-14 10M62 60q6 6 14 10"/><path d="M48 62c-16 6-24 26-22 48 1 10 12 12 20 8 8-4 10-14 10-28z"/><path d="M76 62c16 6 24 26 22 48-1 10-12 12-20 8-8-4-10-14-10-28z"/><circle cx="182" cy="82" r="38"/></g><g ' + OR + '><ellipse cx="170" cy="72" rx="13" ry="6" transform="rotate(-20 170 72)"/><ellipse cx="194" cy="94" rx="13" ry="6" transform="rotate(25 194 94)"/><path d="M102 86h36M132 81l6 5-6 5"/></g><path d="M182 54c3 4 5 6 5 9a5 5 0 0 1-10 0c0-3 3-5 5-9z" fill="#ff8552"/><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 3</text><text x="10" y="138" font-size="8" fill="#cdc9e6">LUNGS</text><text x="162" y="138" font-size="8" fill="#cdc9e6">CELL</text>',
  logbook: '<g ' + LN + '><path d="M22 44q28-10 54 0v78q-26-10-54 0zM76 44q26-10 54 0v78q-28-10-54 0z"/><path d="M32 60q16-5 34 0M32 74q16-5 34 0M32 88q16-5 34 0M86 60q16-5 34 0M86 74q16-5 34 0" opacity=".55"/><circle cx="184" cy="78" r="36"/><circle cx="184" cy="78" r="29" opacity=".5"/></g><g ' + OR + '><path d="M184 78l-16-20"/><circle cx="184" cy="78" r="3" fill="#ff8552"/></g><path d="M160 92l-3 3M164 62l-4-2M184 50v-4M204 62l4-2M208 92l3 3" ' + BL + '/><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 4</text><text x="158" y="134" font-size="8" fill="#cdc9e6">BAROMETER</text><text x="46" y="138" font-size="8" fill="#cdc9e6">LOGBOOK</text>',
  altitude: '<path d="M40 136V14M35 136h10M35 96h10M35 56h10M35 16h10" ' + OR + ' stroke-dasharray="3 3"/><g ' + LN + '><circle cx="104" cy="112" r="24"/><circle cx="150" cy="76" r="17"/><circle cx="188" cy="42" r="11"/></g><path d="M104 112V88a24 24 0 0 1 23 17z" fill="#ff8552"/><path d="M150 76V59a17 17 0 0 1 16 12z" fill="#ff8552"/><path d="M188 42V31a11 11 0 0 1 10.500 8z" fill="#ff8552"/><path d="M122 92l12-8M164 60l12-8" ' + BL + ' stroke-dasharray="2 3"/><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 5</text><text x="52" y="140" font-size="8" fill="#cdc9e6">SEA LEVEL</text><text x="204" y="46" font-size="8" fill="#cdc9e6">HIGH</text>',
  gondola: '<g ' + LN + '><rect x="26" y="50" width="92" height="66" rx="30"/><circle cx="52" cy="80" r="9"/><circle cx="92" cy="80" r="9"/><path d="M46 50l-8-28M98 50l8-28M40 116v10M104 116v10"/><path d="M160 66h54l-6 54h-42z"/><path d="M160 66l-6-36M214 66l6-36"/></g><path d="M162 80h50M163 94h48M165 108h44M176 66l-4 54M190 66v54M202 66l2 54" ' + BL + ' opacity=".7"/><path d="M72 62v-6M72 110v-6M34 83h-6M116 83h-6" ' + OR + '/><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 6</text><text x="44" y="140" font-size="8" fill="#cdc9e6">SEALED</text><text x="170" y="140" font-size="8" fill="#cdc9e6">OPEN</text>',
  cabin: '<g ' + LN + '><rect x="20" y="30" width="200" height="96" rx="14"/><rect x="34" y="42" width="56" height="40" rx="8"/><circle cx="176" cy="66" r="24"/><path d="M34 96h172M48 108h20M80 108h20M112 108h20"/></g><g ' + OR + '><path d="M176 66l12-14"/><path d="M118 46l18 32h-36z"/><path d="M118 58v9M118 72v.500" stroke-width="2.200"/></g><path d="M40 70q10-12 22-4t22-8" ' + BL + '/><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 7</text><text x="150" y="110" font-size="8" fill="#cdc9e6">CABIN ALT</text>',
  landing: '<path d="M10 122h220" ' + LN + '/><g ' + OR + '><path d="M150 122a34 34 0 0 1 68 0"/><path d="M184 76v-10M150 92l-8-7M218 92l8-7M136 112h-10M232 112h10"/></g><g ' + LN + '><path d="M78 24c-22 0-36 16-36 33 0 16 16 29 27 38h18c11-9 27-22 27-38 0-17-14-33-36-33z"/><path d="M78 24c-9 9-13 20-13 33 0 15 4 28 7 38M78 24c9 9 13 20 13 33 0 15-4 28-7 38" opacity=".5"/><path d="M69 95l2 10h14l2-10"/><rect x="70" y="105" width="16" height="11" rx="2"/></g><path d="M22 130l8 6M46 130l8 6M70 130l8 6M94 130l8 6M118 130l8 6" ' + BL + ' opacity=".6"/><text x="10" y="18" font-size="8" fill="#8fc3ff">FIG. 8</text><text x="164" y="140" font-size="8" fill="#cdc9e6">SUNRISE</text>'
};
function figure(ch) { return '<div class="fig" role="img" aria-label="' + esc(ch.img) + '"><svg viewBox="0 0 240 150" aria-hidden="true">' + FIG[ch.fig] + '</svg></div>'; }

var PICON = [null,
  '<path d="M24 12c-6 0-10 4.500-10 9.500 0 5 5 9 7.500 11.500h5c2.500-2.500 7.500-6.500 7.500-11.500 0-5-4-9.500-10-9.500z" fill="#ff8552"/><rect x="21.500" y="34" width="5" height="4" rx="1" fill="#f3ead6"/>',
  '<path d="M24 36V13M18.500 18.500L24 13l5.500 5.500M17 36h14M20 29h8M20 23h8" fill="none" stroke="#f3ead6" stroke-width="2" stroke-linecap="round"/>',
  '<path d="M24 11c5 6 9 10 9 16a9 9 0 0 1-18 0c0-3 2-6 4-8 0 3 3 3 3 0s1-5 2-8z" fill="#ff8552"/><path d="M24 24c2 2 4 4 4 6a4 4 0 0 1-8 0c0-2 2-4 4-6z" fill="#ffe2a8"/>',
  '<path d="M11 24q13-13 26 0q-13 13-26 0z" fill="none" stroke="#f3ead6" stroke-width="2"/><circle cx="24" cy="24" r="4.500" fill="#8fc3ff"/>',
  '<circle cx="24" cy="24" r="11" fill="#8fc3ff"/><path d="M24 24V13a11 11 0 0 1 10.600 8z" fill="#ff8552"/>',
  '<path d="M13 30a11 11 0 0 1 22 0z" fill="none" stroke="#f3ead6" stroke-width="2"/><path d="M11 30h26v5H11z" fill="#8fc3ff"/><path d="M19 26a5 5 0 0 1 5-5" fill="none" stroke="#f3ead6" stroke-width="1.500"/>',
  '<path d="M15 15l9 9 9-9M15 25l9 9 9-9" fill="none" stroke="#5fe39a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M24 10l4.100 8.700 9.400 1.200-6.900 6.500 1.800 9.400L24 31.200l-8.400 4.600 1.800-9.400-6.900-6.500 9.400-1.200z" fill="#ffc24a"/>'
];
var PCOL = [null, '#8fc3ff', '#ff8552', '#ffc24a', '#8fc3ff', '#ff8552', '#5fe39a', '#ff6b5e', '#c9935a'];
function patch(i, on, size) {
  return '<svg viewBox="0 0 48 48" width="' + size + '" height="' + size + '" aria-hidden="true">' + (on ? '<circle cx="24" cy="24" r="23" fill="' + PCOL[i] + '"/><circle cx="24" cy="24" r="19.500" fill="#0f1535" stroke="#f3ead6" stroke-width="1.200" stroke-dasharray="1.500 2.500"/>' + PICON[i] : '<circle cx="24" cy="24" r="20" fill="none" stroke="rgba(160,160,190,.6)" stroke-width="1.500" stroke-dasharray="3 4"/>') + '</svg>';
}

function arc(cx, cy, r, a0, a1) {
  function p(a) { return (cx + r * Math.sin(a * Math.PI / 180)).toFixed(1) + ' ' + (cy - r * Math.cos(a * Math.PI / 180)).toFixed(1); }
  return 'M' + p(a0) + 'A' + r + ' ' + r + ' 0 ' + (a1 - a0 > 180 ? 1 : 0) + ' 1 ' + p(a1);
}
function gauge(o) {
  var A0 = -130, A1 = 130;
  function ang(v) { return A0 + (Math.min(o.max, Math.max(o.min, v)) - o.min) / (o.max - o.min) * (A1 - A0); }
  var h = '<svg class="gauge" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#050816" stroke="rgba(243,234,214,.3)" stroke-width="2"/>';
  o.zones.forEach(function (z) { h += '<path d="' + arc(60, 60, 47, ang(z[0]), ang(z[1])) + '" stroke="' + z[2] + '" stroke-width="6" fill="none"/>'; });
  o.ticks.forEach(function (t) {
    var a = ang(t[0]) * Math.PI / 180, s = Math.sin(a), c = Math.cos(a);
    h += '<path d="M' + (60 + 38 * s).toFixed(1) + ' ' + (60 - 38 * c).toFixed(1) + 'L' + (60 + 43 * s).toFixed(1) + ' ' + (60 - 43 * c).toFixed(1) + '" stroke="#f3ead6" stroke-width="1.500"/><text x="' + (60 + 29 * s).toFixed(1) + '" y="' + (63.500 - 29 * c).toFixed(1) + '" font-size="9" fill="#cdc9e6" text-anchor="middle">' + t[1] + '</text>';
  });
  var st = 'transform:rotate(' + ang(o.val).toFixed(1) + 'deg)';
  h += '<text x="60" y="97" font-size="8.500" fill="#a9a6cc" text-anchor="middle" letter-spacing="1">' + o.unit + '</text><g class="ndl" data-tw="' + o.key + '" data-st="' + st + '" style="' + st + '"><path d="M60 66L57.800 60 60 19 62.200 60z" fill="#f3ead6"/></g><circle cx="60" cy="60" r="5" fill="#ff8552"/></svg>';
  return h;
}
var ALT_TICKS = [[0, '0'], [10000, '10'], [20000, '20'], [30000, '30']];
var SAT_TICKS = [[60, '60'], [70, '70'], [80, '80'], [90, '90'], [100, '100']];
var SAT_ZONES = [[60, 80, '#ff6b5e'], [80, 90, '#ffc24a'], [90, 100, '#5fe39a']];

/* ---------- Sky ---------- */
function skyBuild() {
  var r = 7, sh = [];
  function rnd() { r = (r * 16807) % 2147483647; return r / 2147483647; }
  for (var i = 0; i < 150; i++) sh.push((rnd() * 100).toFixed(1) + 'vw ' + (rnd() * 100).toFixed(1) + 'vh 0 ' + (rnd() < 0.2 ? '.6px' : '0') + ' rgba(255,255,255,' + (0.4 + rnd() * 0.6).toFixed(2) + ')');
  $('#sky').innerHTML = '<i class="sk-stars" style="box-shadow:' + sh.join(',') + '"></i><i class="sk-strat"></i><i class="sk-dusk"></i><i class="sk-dawn"></i>' +
    '<i class="sk-cloud" style="top:62vh;width:34vw"></i><i class="sk-cloud" style="top:74vh;width:46vw;animation-duration:170s;animation-delay:-60s"></i><i class="sk-cloud" style="top:84vh;width:28vw;animation-duration:95s;animation-delay:-30s"></i><i class="sk-veil"></i>';
}
function skySet() {
  var t = ALT[S.c] / 27000, last = S.c === N - 1, k = $('#sky').children;
  var strat = t < 0.55 ? t / 0.55 : 1 - (t - 0.55) / 0.45 * 0.9;
  k[0].style.opacity = last ? 0.15 : 0.3 + 0.7 * t;
  k[1].style.opacity = last ? 0 : Math.max(0, strat * 0.9);
  k[2].style.opacity = last ? 0 : Math.max(0, 1 - t * 2.2);
  k[3].style.opacity = last ? 1 : 0;
  var co = last ? 0.9 : Math.max(0, 1 - t * 2.5);
  k[4].style.opacity = co; k[5].style.opacity = co; k[6].style.opacity = co;
}

/* ---------- HUD ---------- */
function hudHTML() {
  var c = S.c, pts = ALT.map(function (a, i) { return [i / (N - 1) * 100, 34 - a / 27000 * 26]; });
  function d(list) { return list.map(function (p, i) { return (i ? 'L' : 'M') + p[0].toFixed(2) + ' ' + p[1].toFixed(1); }).join(''); }
  var w = pts.map(function (p, i) { return '<i class="wp' + (i <= c ? ' on' : '') + '" style="left:' + p[0] + '%;top:' + p[1] + 'px"></i><b class="wl' + (i === c ? ' on' : '') + '" style="left:' + p[0] + '%">' + (ALT[i] ? fmt(ALT[i]) : 'GND') + '</b>'; }).join('');
  var st = 'left:' + pts[c][0] + '%;top:' + pts[c][1] + 'px';
  return '<span class="hud-t">Out of Thin Air<span class="stripes" aria-hidden="true"></span></span>' +
    '<div class="prof" role="img" aria-label="Chapter ' + (c + 1) + ' of ' + N + '. Flight profile: training altitude ' + (ALT[c] ? fmt(ALT[c]) + ' feet' : 'ground level') + '."><div class="prof-in">' +
    '<svg class="pl" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 34H100" stroke="rgba(243,234,214,.18)" stroke-width="1" stroke-dasharray="2 3" vector-effect="non-scaling-stroke" fill="none"/><path d="' + d(pts) + '" stroke="rgba(243,234,214,.3)" stroke-width="1.500" vector-effect="non-scaling-stroke" fill="none"/><path d="' + d(pts.slice(0, c + 1)) + (c ? '' : 'L0 34') + '" stroke="#ff8552" stroke-width="2.500" vector-effect="non-scaling-stroke" fill="none"/></svg>' +
    w + '<span class="bal" data-tw="hudbal" data-st="' + st + '" style="' + st + '">' + balloonSvg() + '</span></div></div>' +
    '<div class="alt-read" aria-hidden="true"><span class="ar-n">' + fmt(ALT[c]) + '</span><span class="ar-u">FT</span><span class="ar-leg">LEG ' + (c + 1) + ' / ' + N + '</span></div>';
}

/* ---------- Comms ---------- */
function met(c, i) {
  var b = MET[c] * 60 + i * 20, s = Math.abs(b);
  function p(n) { return (n < 10 ? '0' : '') + n; }
  return 'T' + (b < 0 ? '−' : '+') + p(Math.floor(s / 3600)) + ':' + p(Math.floor(s % 3600 / 60)) + ':' + p(s % 60);
}
function commsHead() {
  return '<div class="comms-h"><span class="av">' + avatar() + '</span><span class="who"><b>Dr. Elena Rivera</b><span><i class="lamp"></i>Lead flight surgeon, on comms</span></span><span class="cs" aria-hidden="true">CALL SIGN<b>SURGEON</b></span></div>';
}
function msgR(t, st, anim) { return '<div class="msg' + (anim ? ' in' : '') + '"><span class="st" aria-hidden="true">SURGEON · ' + st + '</span><span class="bub">' + esc(t) + '</span></div>'; }
function msgU(t, st, i, anim) { return '<div class="msg u' + (anim ? ' in' : '') + '"><span class="st" aria-hidden="true">YOU · ' + st + '</span><span class="bub"><span class="sr">You: </span>' + esc(t) + '</span><span class="rcpt" data-i="' + i + '"></span></div>'; }
function txHTML() { return '<span class="tx" role="img" aria-label="Dr. Rivera is typing"><i></i><i></i><i></i><i></i>TRANSMITTING</span>'; }
var REEL_NO = { 1: '01', 3: '02', 4: '03', 5: '04', 6: '05' };
function reelHTML(c, v, anim) {
  var on = !!S.vp[c];
  return '<div class="reel' + (on ? ' playing' : '') + (anim ? ' in' : '') + '"><div class="reel-s v-' + v[3] + '"><span class="sr">Title card: ' + esc(v[0]) + '</span><span class="reel-n" aria-hidden="true">BRIEFING REEL ' + (REEL_NO[c] || '') + '</span>' +
    '<button type="button" class="reel-p" data-act="play" data-arg="' + c + '" aria-label="Play video: ' + esc(v[0]) + '">▶</button>' +
    '<span class="reel-m" role="status">' + (on ? 'Instructor video not included in this sample' : '') + '</span>' +
    '<span class="reel-t"><span>' + v[1] + '</span><span>CC</span></span></div>' +
    '<div class="reel-d"><b>' + esc(v[0]) + '</b><span>' + esc(v[2]) + '</span><span class="tags"><span>Transcript</span><span>Handout</span></span></div></div>';
}
function fileHTML(anim) { return '<div class="file' + (anim ? ' in' : '') + '"><span class="ico" aria-hidden="true">LOG</span><span class="fd"><b>Glaisher_logbook_1862</b><span>5 entries, adapted from the case study</span></span><button type="button" data-act="openLog">Open</button></div>'; }
function chatItem(c, i, anim) {
  var L = CHAT[c], it = L[i], st = met(c, i);
  if (it.dyn) { var pu = L[i - 1] || {}, k = (pu.u || []).indexOf(S.picks[c + ':' + (i - 1)]); return msgR((pu.a || [])[k] || '', st, anim); }
  if (it.r) return msgR(it.r, st, anim);
  if (it.u) return msgU(S.picks[c + ':' + i] || '', st, i, anim);
  if (it.video) return reelHTML(c, it.video, anim);
  if (it.file) return fileHTML(anim);
  return '';
}
function syncChat(anim) {
  var c = S.c, L = CHAT[c], log = $('#log'); if (!L || !log) return;
  var n = Math.min(S.ci[c] || 0, L.length), done = n >= L.length;
  while (logN < n) { log.insertAdjacentHTML('beforeend', chatItem(c, logN, anim)); logN++; }
  [].forEach.call(log.querySelectorAll('.rcpt'), function (e) { var rd = +e.getAttribute('data-i') < n - 1 || done; e.textContent = rd ? '✓✓ Read' : '✓ Sent'; e.className = 'rcpt' + (rd ? ' rd' : ''); });
  var nx = L[n] || {}, h = '';
  if (chatTyping === c) h = txHTML();
  else if (nx.u) {
    var off = !!nx.needVid && !S.vp[c];
    h = '<div class="chips">' + (off ? '<span class="dim" style="font-size:13px">Play the video first</span>' : '') + '<span class="ptl" aria-hidden="true">PUSH TO TALK</span><div class="opts">' + nx.u.map(function (t, j) { return '<button type="button" class="opt" data-act="chip" data-arg="' + j + '"' + (off ? ' aria-disabled="true"' : '') + '>' + esc(t) + '</button>'; }).join('') + '</div></div>';
  }
  setH($('#chatx'), h);
}
function runChat(c, i) {
  var L = CHAT[c]; if (!L) return;
  clearTimeout(T.chat); chatFor = null;
  function put(n, ty) { S.ci[c] = n; chatTyping = ty ? c : null; if (S.c === c && !gate) { syncChat(true); update(); } }
  if (i >= L.length) { put(i, false); return; }
  var it = L[i]; if (it.u) { put(i, false); return; }
  var rr = !!(it.r || it.dyn); put(i, rr); chatFor = c;
  T.chat = setTimeout(function () { put(i + 1, false); runChat(c, i + 1); }, rr ? 1200 : 500);
}
function ensureChat(c) {
  var L = CHAT[c]; if (!L) return; var n = S.ci[c];
  if (n == null) setTimeout(function () { if (S.c === c) runChat(c, 0); }, 0);
  else if (n < L.length && !L[n].u && chatFor !== c) runChat(c, n);
}
function meetComms() {
  var h = '<div class="comms" role="log" aria-label="Messages from Dr. Rivera">' + commsHead() + '<div class="comms-b">';
  if (typing) h += txHTML();
  else h += CH0G.map(function (m, i) { return msgR(m, met(0, i), true); }).join('') + '<span class="dim" style="font-size:12px">' + (S.sent ? 'Delivered' : 'Just now') + '</span>';
  if (S.sent) h += '<div class="msg u in"><span class="st" aria-hidden="true">YOU · ' + met(0, 3) + '</span><span class="bub"><span class="sr">You: </span>' + esc(S.sent) + '</span><span class="rcpt rd">✓✓ Read</span></div>';
  else if (!typing) h += '<form class="composer" data-form="send"><label><span class="sr">Reply to Dr. Rivera</span><input data-bind="reply" data-k="reply" autocomplete="off"></label><button type="submit" class="ptt" data-k="ptt"><svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5.500" y="1" width="5" height="9" rx="2.500" fill="currentColor"/><path d="M3 7.500a5 5 0 0 0 10 0M8 12.500V15M5.500 15h5" fill="none" stroke="currentColor" stroke-width="1.500" stroke-linecap="round"/></svg>Send</button></form>';
  return h + '</div></div>';
}
var CH0G = ['Hi! I’m Elena. Welcome to the team.', 'Tomorrow we fly a crew higher than most people ever go. My job, and soon yours, is to keep them sharp up there. I’ll message you as we go. Ready?'];

/* ---------- Activities ---------- */
function fb(ok, t) { return t ? '<p class="fb' + (ok ? ' ok' : '') + '">' + esc(t) + '</p>' : ''; }
function optBtn(act, arg, label, cls, pressed, extra) { return '<button type="button" class="opt' + (cls ? ' ' + cls : '') + '" data-act="' + act + '" data-arg="' + arg + '"' + (pressed == null ? '' : ' aria-pressed="' + !!pressed + '"') + (extra || '') + '>' + label + '</button>'; }

var ACT = {};
ACT.log = function (f) {
  var sel = S.tsel, top = 94;
  var slots = TS.map(function (s, i) {
    var hs = S.tp[i] === i; if (hs && s[1] < top) top = s[1];
    return '<button type="button" class="slot' + (hs ? ' has' : sel != null ? ' aim' : '') + '" style="top:' + s[1] + '%" data-act="place" data-arg="' + i + '" data-slot="' + i + '" aria-label="' + esc(s[0] + (hs ? ': ' + TE[i][0] : ': empty')) + '"><span class="slot-d"></span><span class="slot-t"><span class="slot-a">' + esc(s[0]) + '</span><span class="slot-l">' + esc(hs ? TE[i][0] : sel != null ? 'Tap to place here' : 'Empty') + '</span>' + (hs ? '<span class="slot-x">' + esc(TE[i][1]) + '</span>' : '') + '</span></button>';
  }).join('');
  var cards = [1, 3, 0, 2].map(function (i) {
    var used = S.tp[i] === i, on = sel === i;
    return '<button type="button" class="card' + (on ? ' on' : '') + '" data-act="pick" data-arg="' + i + '" data-drag="' + i + '" aria-pressed="' + on + '"' + (used ? ' aria-disabled="true"' : '') + '><span class="grip" aria-hidden="true"></span><span>' + esc(TE[i][0]) + '</span></button>';
  }).join('');
  var st = 'top:' + top + '%';
  var h = '<span class="lbl rust">Rebuild the flight</span><span class="q">Pick an event, then tap the height where it happened. The video and the logbook will help.</span><span style="font-size:14px;color:#5a4a3a;margin-top:-8px">You can also drag an event onto the altitude scale.</span>' +
    '<div class="flight"><div class="scale" id="scale"><span class="sc-stars" aria-hidden="true"></span><span class="sc-cl" aria-hidden="true" style="left:30%;width:38%;top:84%"></span><span class="sc-cl" aria-hidden="true" style="left:58%;width:34%;top:90%"></span><span class="sc-rule" aria-hidden="true"></span><span class="sc-bal" aria-hidden="true" data-tw="scbal" data-st="' + st + '" style="' + st + '">' + balloonSvg() + '</span><span class="sc-top">Higher ↑</span><span class="sc-gnd">Wolverhampton, ground</span>' + slots + '</div>' +
    '<div class="cards"><span style="font-size:13px;font-weight:700;color:#5a4a3a">Events</span>' + cards + (S.tfb ? fb(S.tfb.ok, S.tfb.m) : '') + '</div></div>';
  if (f.tDone) h += '<div class="sub"><span class="q">The flight is rebuilt. What’s your hunch? What hurt them up there?</span><div class="opts">' + HO.map(function (t, i) { return optBtn('hunch', i, esc(t), '', S.hunch === i); }).join('') + '</div>' + (S.hunch != null ? '<span style="font-size:15px;line-height:1.5;color:#5a4a3a">Got it. It’s just a guess for now, and you’ll check it as you go.</span>' : '') + '</div>';
  return { cls: 'panel sheet', tag: 'FLIGHT LOG 1862', parts: [['m', h]] };
};

var RP = [[30, 64], [56, 100], [56, 124], [90, 170], [160, 160], [240, 136], [400, 104], [548, 110]];
ACT.chain = function (f) {
  var rn = S.rn, cur = rn ? RP[rn - 1] : [6, 64];
  var path = 'M6 64' + RP.slice(0, rn).map(function (p) { return 'L' + p[0] + ' ' + p[1]; }).join('');
  var nodes = RP.map(function (p, i) { var on = i < rn; return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="9" fill="' + (on ? '#8fc3ff' : '#070b20') + '" stroke="' + (on ? '#8fc3ff' : 'rgba(243,234,214,.5)') + '" stroke-width="1.500"/><text x="' + p[0] + '" y="' + (p[1] + 3.500) + '" font-size="10" text-anchor="middle" fill="' + (on ? '#0f1430' : '#cdc9e6') + '">' + (i + 1) + '</text>'; }).join('');
  var st = 'transform:translate(' + cur[0] + 'px,' + cur[1] + 'px)';
  var svg = '<svg viewBox="0 0 640 220" aria-hidden="true"><g ' + LN + ' opacity=".8"><circle cx="56" cy="50" r="30"/><path d="M28 50l-9 9 8 4"/><path d="M50 80v38M62 80v38"/><path d="M56 118q-8 8-20 12M56 118q8 8 20 12"/><path d="M40 128c-22 6-34 30-32 58 1 12 14 16 24 10s14-18 14-36z"/><path d="M72 128c22 6 34 30 32 58-1 12-14 16-24 10s-14-18-14-36z"/><path d="M240 120c-12-16-36-8-34 12 2 18 22 30 34 40 12-10 32-22 34-40 2-20-22-28-34-12z"/><circle cx="548" cy="110" r="76"/></g>' +
    '<g ' + BL + ' opacity=".8"><circle cx="84" cy="182" r="4"/><circle cx="93" cy="184" r="4"/><circle cx="88" cy="191" r="4"/><path d="M106 172q50 0 100-30M274 128q60-30 126-24t72 6" stroke-dasharray="4 4"/></g>' +
    '<g fill="none" stroke="' + (f.rDone ? '#ff8552' : 'rgba(243,234,214,.6)') + '" stroke-width="1.400"><ellipse cx="520" cy="86" rx="22" ry="10" transform="rotate(-18 520 86)"/><ellipse cx="578" cy="124" rx="22" ry="10" transform="rotate(24 578 124)"/><ellipse cx="526" cy="146" rx="20" ry="9" transform="rotate(8 526 146)"/></g>' +
    (f.rDone ? '<circle cx="548" cy="110" r="30" fill="#ff8552" opacity=".22"/>' : '') +
    '<path d="' + path + '" fill="none" stroke="#ff8552" stroke-width="2.500" stroke-dasharray="6 5" stroke-linejoin="round"/>' + nodes +
    '<g class="o2" data-tw="o2" data-st="' + st + '" style="' + st + '"><circle r="6" cy="-16" fill="#8fc3ff"/><text y="-13" font-size="7" text-anchor="middle" fill="#0f1430">O₂</text></g>' +
    '<text x="12" y="16" font-size="9" fill="#8fc3ff">FIG. 3A  ONE BREATH</text><text x="116" y="196" font-size="9" fill="#cdc9e6">LUNGS</text><text x="222" y="212" font-size="9" fill="#cdc9e6">HEART</text><text x="520" y="212" font-size="9" fill="#cdc9e6">A CELL</text></svg>';
  var h = '<span class="lbl blue">Trace the oxygen</span><span class="q">Follow one breath. Tap each stop in order, from the air you breathe in to the cells that use it.</span><div class="route">' + svg + '</div>' +
    '<ol class="rlist" aria-label="The route so far">' + RT.map(function (t, i) { return '<li class="' + (i < rn ? 'on' : '') + '"><b>' + (i + 1) + '</b><span>' + (i < rn ? esc(t) : '<span class="sr">empty</span>') + '</span></li>'; }).join('') + '</ol>' +
    '<div class="opts">' + RO.map(function (i) { return optBtn('tok', i, esc(RT[i]), 'bl', null, i < rn ? ' aria-disabled="true"' : ''); }).join('') + '</div>' + (S.rfb ? fb(S.rfb.ok, S.rfb.m) : '');
  if (f.rDone) {
    var good = S.eqs.filter(function (x) { return x < 3; }).length, sc = f.eqOk ? 1 : 0.34 + good * 0.14, fst = 'transform:scale(' + sc + ')';
    var eqFb = f.eqOk ? 'The flame burns bright. Cells make ATP, the energy they run on, plus carbon dioxide and water. Every link worked for Glaisher, so why did his flame dim? Keep that puzzle in mind.' : S.eqs.some(function (x) { return x > 2; }) ? (has(S.eqs, 3) ? 'Nitrogen is in the air, but your cells don’t make it.' : 'Your cells don’t make smoke. Only a candle does.') : 'Keep going. There are three things that come out.';
    h += '<div class="well candle"><svg viewBox="0 0 150 170" role="img" aria-label="A candle. Its flame grows as you complete the equation."><circle class="glow" cx="75" cy="62" r="' + (f.eqOk ? 46 : 22) + '" fill="#f6b04a" opacity="' + (f.eqOk ? 0.3 : 0.14) + '"/><ellipse cx="75" cy="156" rx="46" ry="8" fill="#2b3a6a"/><rect x="58" y="92" width="34" height="62" rx="5" fill="#f3ead6"/><path d="M58 104q8 6 17 0t17 0" fill="none" stroke="#d9c9a5" stroke-width="2"/><path d="M75 92v-9" stroke="#2a2238" stroke-width="2.500" stroke-linecap="round"/><g class="fl" data-tw="flame" data-st="' + fst + '" style="' + fst + '"><g><path d="M75 26c12 16 20 28 20 40a20 20 0 0 1-40 0c0-12 8-24 20-40z" fill="#e0602c"/><path d="M75 42c8 10 12 18 12 26a12 12 0 0 1-24 0c0-8 4-16 12-26z" fill="#f6b04a"/><path d="M75 58c4 5 6 9 6 13a6 6 0 0 1-12 0c0-4 2-8 6-13z" fill="#fff3c4"/></g></g></svg>' +
      '<div class="col"><span class="q">Now light the candle. Your cells burn fuel a lot like a flame does. What comes out?</span><span style="font-size:17px;font-weight:700">Fuel + oxygen → <span class="orange">' + (S.eqs.length ? S.eqs.map(function (x) { return EQ[x]; }).join(' + ') : '? + ? + ?') + '</span></span><div class="opts">' + EQ.map(function (t, i) { var on = has(S.eqs, i); return optBtn('eq', i, esc(t), on ? (i < 3 ? 'ok' : 'try') : '', on); }).join('') + '</div>' + (S.eqs.length ? fb(f.eqOk, eqFb) : '') + '</div></div>';
  }
  return { cls: 'panel', tag: 'PANEL 03 · OXYGEN ROUTE', parts: [['m', h]] };
};

function camSvg(alt) {
  var t = Math.min(1, Math.max(0, (alt - 12000) / 15000));
  function mix(a, b) { return Math.round(a + (b - a) * t); }
  var sky = 'rgb(' + mix(111, 11) + ',' + mix(168, 16) + ',' + mix(232, 48) + ')';
  return '<svg viewBox="0 0 320 190" role="img" aria-label="Crew camera drawing: the pilot at the controls with a headset on"><rect width="320" height="190" fill="#0c1230"/><rect x="170" y="20" width="130" height="86" rx="18" fill="' + sky + '" stroke="#3a4680" stroke-width="4"/><path d="M170 86q30-10 60-2t70-6v28H170z" fill="rgba(243,234,214,.35)"/>' +
    '<path d="M40 190c0-44 26-62 64-62s64 18 64 62z" fill="#ff8552"/><path d="M40 190c2-30 14-46 34-54l-6 54z" fill="#182456"/><path d="M90 130l14 16 14-16" fill="none" stroke="#f3ead6" stroke-width="3" stroke-linejoin="round"/><rect x="94" y="104" width="20" height="28" rx="9" fill="#c98e6b"/><circle cx="104" cy="82" r="31" fill="#dba57f"/><path d="M72 86c-5-32 12-50 32-50s37 18 32 50c-5-18-14-25-32-25s-27 7-32 25z" fill="#3a2418"/><path d="M70 84a34 34 0 0 1 68 0" fill="none" stroke="#f3ead6" stroke-width="5"/><rect x="62" y="78" width="12" height="20" rx="5" fill="#f3ead6"/><path d="M68 98q4 18 22 18" fill="none" stroke="#f3ead6" stroke-width="2.500"/><circle cx="92" cy="116" r="4" fill="#2a2238"/>' +
    '<circle cx="94" cy="84" r="3" fill="#2a1a16"/><circle cx="116" cy="84" r="3" fill="#2a1a16"/><path d="M97 99h14" stroke="#7a3b2a" stroke-width="3" stroke-linecap="round"/>' +
    '<path d="M0 160h320v30H0z" fill="#070b20"/><g fill="none" stroke="rgba(143,195,255,.6)" stroke-width="1.500"><circle cx="212" cy="174" r="9"/><circle cx="242" cy="174" r="9"/><rect x="262" y="166" width="44" height="16" rx="3"/></g><circle cx="186" cy="174" r="3" fill="#5fe39a"/>' +
    '<g fill="none" stroke="rgba(243,234,214,.7)" stroke-width="2"><path d="M8 22V8h14M312 22V8h-14"/></g></svg>';
}
ACT.weigh = function (f) {
  var i = S.ckI, k = CK[i], sat = parseInt(k[1], 10), altN = parseInt(k[0].replace(',', ''), 10), a = S.ckA[i], right = a === k[3];
  var tabs = CK.map(function (x, j) { var ok = S.ckA[j] === x[3]; return '<button type="button" role="tab" id="cktab' + j + '" class="tab' + (ok ? ' okk' : '') + '" aria-selected="' + (i === j) + '" tabindex="' + (i === j ? 0 : -1) + '" data-act="ckTab" data-arg="' + j + '"><b>' + x[0] + '</b><span>' + (ok ? '✓ ' + SG[x[3]][0] : 'Check-in ' + (j + 1)) + '</span></button>'; }).join('');
  var satC = sat >= 90 ? 'var(--ok)' : sat >= 80 ? 'var(--try)' : '#ff8a7a';
  var ckFb = right ? (i === 0 ? 'Right. Clear speech and steady hands. Nothing yet.' : 'Yes. ' + ['', 'Losing the edges of vision means the eyes are running low.', 'Muddled words mean the brain is running low.', 'Clumsy fingers mean the muscles are running low.'][k[3]] + (i < 3 ? ' Try the next check-in.' : '')) : 'Read it again. What does the pilot say feels different?';
  var h = '<span class="lbl blue">Watch your crew</span><span class="q">This is a recording from a training climb without oxygen. Go through each radio check-in and pick the sign you see.</span>' +
    '<div class="tabs" role="tablist" aria-label="Check-ins">' + tabs + '</div>' +
    '<div class="two" role="tabpanel" aria-labelledby="cktab' + i + '"><div class="cam"><div class="cam-v">' + camSvg(altN) + '<span class="rec"><i></i>Crew cam, pilot</span><span class="pb" aria-hidden="true">PLAYBACK</span></div>' +
    '<div class="gz"><div>' + gauge({ key: 'ckalt', val: altN, min: 0, max: 30000, zones: [[0, 30000, 'rgba(243,234,214,.35)']], ticks: ALT_TICKS, unit: 'FT x1000' }) + '<span class="dig"><span>Altitude</span><b>' + k[0] + '</b></span></div><div>' + gauge({ key: 'cksat', val: sat, min: 60, max: 100, zones: SAT_ZONES, ticks: SAT_TICKS, unit: 'SPO2 %' }) + '<span class="dig"><span>Blood oxygen</span><b style="color:' + satC + '">' + k[1] + '</b></span></div></div>' +
    '<div class="anns" aria-hidden="true"><span class="ann g' + (sat >= 90 ? ' on' : '') + '">O2 SAT NORMAL</span><span class="ann a' + (sat >= 80 && sat < 90 ? ' on' : '') + '">O2 SAT CAUTION</span><span class="ann r' + (sat < 80 ? ' on' : '') + '">O2 SAT LOW</span></div></div>' +
    '<div class="col"><div class="radio-b"><span class="lbl rust">Radio, pilot</span><span class="qt">“' + esc(k[2]) + '”</span></div><span style="font-size:14px;font-weight:600" class="dim">What sign is this?</span><div class="grid2">' +
    SG.map(function (g, j) { var on = a === j; return optBtn('sign', j, esc(g[0]) + '<small>' + esc(g[1]) + '</small>', on ? (j === k[3] ? 'ok' : 'try') : '', on); }).join('') + '</div>' + (a != null ? fb(right, ckFb) : '') + '</div></div>';
  if (f.ckAll) {
    var cFb = f.callOk ? 'Yes. Act at the first sign. Hypoxia gets worse fast, and it clouds your thinking, so the pilot may not notice on their own.' : S.call === 0 ? 'Nothing was wrong yet at 12,000 ft.' : 'That’s too late. By then the brain is already struggling. Look for the first sign.';
    h += '<div class="sub s-call"><span class="q">Looking back, when should you have called for oxygen?</span><div class="opts">' + CK.map(function (x, j) { var on = S.call === j; return optBtn('call', j, x[0], on ? (j === 1 ? 'ok' : 'try') : '', on); }).join('') + '</div>' + (S.call != null ? fb(f.callOk, cFb) : '') + '</div>';
  }
  if (f.callOk && f.ckAll) {
    var hFb = f.hxDone ? 'That leaves hypoxic hypoxia: not enough oxygen getting in from the air.' + (S.hunch != null ? ' Your hunch was “' + HO[S.hunch].toLowerCase() + '.”' : '') : S.hxf === 0 ? 'Don’t cross this one out. Both men were breathing the same thin air, so this fits.' : S.hxf != null ? HX[S.hxf][2] : '';
    h += '<div class="sub s-hx"><span class="q">Now find the cause. Cross out the types of hypoxia that don’t fit two healthy men climbing.</span><div class="hxg">' + HX.map(function (x, j) { var out = has(S.hx, j), it = f.hxDone && j === 0; return '<button type="button" class="hx' + (out ? ' out' : it ? ' it' : '') + '" data-act="hx" data-arg="' + j + '"><b>' + x[0] + '</b><span>' + esc(x[1]) + '</span><i>' + (out ? 'Crossed out' : it ? 'This is it' : 'Tap to cross out') + '</i></button>'; }).join('') + '</div>' + (S.hxf != null || f.hxDone ? fb(!(S.hxf === 0 && !f.hxDone), hFb) : '') + '</div>';
  }
  return { cls: 'panel', tag: 'PANEL 04 · CREW MONITOR', parts: [['m', h]] };
};

var MARKS = [[0, 'sea level'], [5500, 'Denver'], [8000, 'an airliner cabin'], [29000, 'the top of Everest, Glaisher’s height'], [35000, 'the air outside an airliner']];
function slideRead(a) {
  var p = press(a), near = '';
  MARKS.forEach(function (m) { if (m[0] === a) near = ' You are level with ' + m[1] + '.'; });
  return { size: Math.round(100 * Math.sqrt(p)), text: '<b>' + fmt(a) + ' ft.</b> Each breath holds ' + Math.round(p * 100) + '% as much air as at sea level. The oxygen slice is still 21% of it.' + near, vt: fmt(a) + ' feet, ' + Math.round(p * 100) + '% of sea-level pressure' };
}
ACT.pie = function (f) {
  var r = slideRead(S.alt || 0);
  var h = '<div class="well worked"><div class="pies2"><div><span class="pie" aria-hidden="true" style="width:84px;height:84px"></span>Sea level</div><div><span class="pie" aria-hidden="true" style="width:75px;height:75px"></span>Denver</div></div>' +
    '<div class="col" style="gap:6px"><span class="lbl orange">Worked example</span><span style="line-height:1.55">Picture one breath of air as a <strong>pie chart</strong>. The orange slice is oxygen, about 21% of the air. The blue is everything else, mostly nitrogen. As you climb, the slice stays 21%, but the whole circle gets smaller because there’s less air in each breath. So <strong>oxygen per breath = 21 × pressure</strong>.</span><span class="dim" style="font-size:15px;line-height:1.55">Sea level: 21 × 1.0 = <strong style="color:var(--cream)">21</strong>. Denver, at 80% pressure: 21 × 0.8 = <strong style="color:var(--cream)">about 17</strong>.</span></div></div>' +
    '<div class="well slide"><div class="piebox"><span class="pie" id="spie" aria-hidden="true" style="width:' + r.size + 'px;height:' + r.size + 'px;transition:none"></span></div><div class="col" style="gap:4px"><label class="lbl blue" for="altS">Climb and watch one breath</label><input type="range" id="altS" data-k="altS" data-slide="1" min="0" max="35000" step="500" value="' + (S.alt || 0) + '" aria-valuetext="' + r.vt + '"><div class="ticks" aria-hidden="true">' + MARKS.map(function (m) { return '<i style="left:' + (m[0] / 350) + '%"></i>'; }).join('') + '<span class="l" style="left:0">Sea level</span><span style="left:' + (29000 / 350) + '%">Everest</span><span class="r" style="left:100%">35,000 ft</span></div><span class="sread" id="sread">' + r.text + '</span></div></div>' +
    '<span class="q">Your turn. Figure out the oxygen in each breath for each place.</span><span class="legend"><span><i style="background:var(--orange)"></i>Oxygen</span><span><i style="background:var(--blue)"></i>Rest of the air</span><span>A smaller circle means less air in each breath.</span></span><div class="col">' +
    PL.map(function (p, i) {
      var show = S.pChk && S.pv[i] != null && S.pv[i] !== '', ok = pOk(i), sz = Math.round(96 * Math.sqrt(p[2]));
      return '<div class="prow' + (show ? (ok ? ' ok' : ' try') : '') + '"><div class="pb2"><span class="pie" aria-hidden="true" style="width:' + sz + 'px;height:' + sz + 'px"></span></div><div class="col" style="gap:8px"><span style="display:flex;flex-wrap:wrap;align-items:baseline;gap:4px 10px"><b>' + esc(p[0]) + '</b><span class="dim" style="font-size:14px">' + esc(p[1]) + '</span></span><label>21 × ' + p[2] + ' = <input class="num" inputmode="decimal" autocomplete="off" aria-label="Oxygen per breath at ' + esc(p[0]) + '" data-bind="pv:' + i + '" data-k="pv' + i + '"><span class="dim" style="font-size:13px">round to one decimal</span></label>' + (show ? fb(ok, ok ? 'Yes. About ' + p[3] + ', compared with 21 at sea level.' : 'Not quite. ' + p[4]) : '') + '</div></div>';
    }).join('') + '</div><button type="button" class="go" style="align-self:flex-start;border-color:var(--blue);color:var(--blue);background:transparent" data-act="pchk">Check my math</button>';
  if (f.piesOk) {
    var dFb = f.dzDone ? 'Yes. At 29,000 ft and 35,000 ft, pressure is below one third of sea level, so each breath carries less than a third of the oxygen. That’s where Glaisher passed out, and why airliners pressurize the cabin.' : has(S.dz, 0) || has(S.dz, 3) ? 'Check the pressures. Denver (80%) and the cabin (74%) are well above one third.' : 'One more. Look for every place below 33% of sea-level pressure.';
    h += '<div class="sub s-dz"><span class="q">The dead zone starts below one third of sea-level pressure. Which places are in it? Pick all that apply.</span><div class="opts">' + DZ.map(function (t, i) { return optBtn('dz', i, esc(t), '', has(S.dz, i)); }).join('') + '</div>' + (S.dz.length ? fb(f.dzDone, dFb) : '') + '</div>';
  }
  return { cls: 'panel', tag: 'PANEL 05 · PRESSURE', parts: [['m', h]] };
};

var VICON = {
  hull: '<path d="M4 20q0-7 10-7h22q8 0 8 7t-8 7H14q-10 0-10-7z"/><path d="M20 13l-6-9h5l9 9M20 27l-6 6h5l9-6M40 14l3-8h3l-2 9"/><path d="M12 19h3M19 19h3M26 19h3" stroke="#8fc3ff"/>',
  suit: '<circle cx="23" cy="10" r="8"/><path d="M18 9q5-4 10 0v4q-5 3-10 0z" stroke="#8fc3ff"/><path d="M13 32V22q0-4 5-4h10q5 0 5 4v10M7 30l6-8M39 30l-6-8"/><rect x="19" y="22" width="8" height="6" rx="1" stroke="#ff8552"/>',
  iss: '<rect x="16" y="12" width="14" height="12" rx="3"/><path d="M16 18H3M30 18h13"/><path d="M3 9h9v18H3zM34 9h9v18h-9z" stroke="#8fc3ff"/><path d="M7.500 9v18M38.500 9v18" stroke="#8fc3ff"/><circle cx="23" cy="18" r="2.500" stroke="#ff8552"/>'
};
ACT.atmo = function (f) {
  function cell(a, b) { return '<span><strong>' + a + '</strong>' + b + '</span>'; }
  var h = '<div class="well col"><span class="lbl orange">How the numbers work</span><span style="font-size:15.5px;line-height:1.55">Oxygen in each breath = oxygen in the air × pressure. At sea level that’s 21. Think of 21 as normal.</span><div class="eqn">' + cell('21%', 'oxygen in air') + '<b>×</b>' + cell('1.0', 'sea-level pressure') + '<b>=</b>' + cell('21', 'normal') + '</div>' +
    '<span style="font-size:15.5px;line-height:1.55"><strong>Example:</strong> Give Glaisher a mask of pure oxygen at 29,000 ft. The pressure is still low, but now every breath is all oxygen.</span><div class="eqn">' + cell('100%', 'pure oxygen') + '<b>×</b>' + cell('0.31', 'pressure up high') + '<b>=</b>' + cell('31', 'more than normal') + '</div><span style="font-size:15px;line-height:1.5;color:var(--ok)">31 is more than 21, so he’d stay awake.</span></div>' +
    '<span class="q">Pick the air for each vehicle.</span><div class="vehs">' +
    VH.map(function (v, i) {
      var s = S.at[i] || {}, r = f.vr[i], cls = !r.has ? '' : r.ok ? ' ok' : ' try';
      return '<div class="veh' + cls + '" role="group" aria-label="' + esc(v[0]) + '"><span class="veh-h"><svg viewBox="0 0 46 34" aria-hidden="true"><g ' + LN + '>' + VICON[v[3]] + '</g></svg><b>' + esc(v[0]) + '</b><span class="tagp' + cls + '">' + (!r.has ? 'Not set' : r.ok ? 'Passes' : 'Needs work') + '</span></span><span class="ctx">' + esc(v[1]) + '</span><span class="sl">Pressure</span><div class="opts">' +
        v[2].map(function (p) { return optBtn('vp', i + '|p|' + p, p + ' atm', 'bl', s.p === p); }).join('') + '</div><span class="sl">Oxygen in the air</span><div class="opts">' + OX.map(function (o) { return optBtn('vp', i + '|o|' + o, o + '%', '', s.o === o); }).join('') + '</div>' +
        (r.has ? '<span style="font-size:14px;font-weight:700">Oxygen per breath: ' + r.u + '</span><div class="col" style="gap:6px">' + r.checks.map(function (c) { return '<span class="chk"><i class="' + (c[0] ? 'ok' : '') + '">' + (c[0] ? '✓' : '!') + '</i><span>' + esc(c[1]) + '</span></span>'; }).join('') + '</div>' : '') + '</div>';
    }).join('') + '</div>' +
    (f.atmoOk ? fb(true, 'All three designs pass. Each one solves thin air in a different way: the airliner keeps normal air at lower pressure, the suit uses pure oxygen at low pressure, and the station keeps Earth-like air so the crew isn’t exposed to too much oxygen for months.') : '');
  return { cls: 'panel', tag: 'PANEL 06 · LIFE SUPPORT', parts: [['m', h]] };
};

function simHeard() {
  var h = RL.filter(function (r) { return S.sPeak >= r[0] && (!S.sMaskAlt || r[0] <= S.sMaskAlt); }).map(function (r) { return { who: r[1], t: r[2] }; });
  if (S.sMask) h.push({ who: 'Pilot', t: 'Mask on. Okay… that’s better.' });
  if (S.sTw === 0) h.push({ who: 'Engineer', t: 'Mask back on. Grabbing the spare for her now.' });
  if (S.sWon) h.push({ who: 'Pilot', t: 'Cabin’s stable. We’re okay. Thank you.' });
  return h;
}
function simScore() {
  return [['Time to masks', S.sMaskAlt != null && S.sMaskAlt >= 14000 && S.sMaskAlt <= 18000, S.sMaskAlt != null ? 'You called it at ' + fmt(S.sMaskAlt) + ' ft. ' + (S.sMaskAlt < 14000 ? 'A bit early. I’d wait for the first sign.' : S.sMaskAlt <= 18000 ? 'Right at the first signs. That’s what I’d do.' : 'Late. I’d act as soon as fingers get clumsy.') : ''],
    ['Oxygen math', !S.sMathT, !S.sMathT ? 'Right on the first try.' : 'You got there after ' + (S.sMathT + 1) + ' tries. Practice the formula: oxygen % × pressure.'],
    ['The broken mask', S.sTwFirst === true, S.sTwFirst ? 'Mask on first, then help. Exactly right.' : 'Helping first is a natural instinct, but it’s risky. Mask on first.'],
    ['Where to level off', S.sTgtFirst === true, S.sTgtFirst ? 'Well below 14,000 ft. Safe margin.' : 'You got there. Remember: stay well under 14,000 ft.']];
}
function scoreHTML() { return simScore().map(function (r) { return '<div class="callr"><span class="mark' + (r[1] ? ' ok' : '') + '">' + (r[1] ? '✓' : '!') + '</span><span><b>' + r[0] + '</b><span class="t">' + esc(r[2]) + '</span></span></div>'; }).join(''); }
function simMaskP() { var mA = S.sMaskAlt || S.sAlt; return Math.round(simP(Math.round(mA / 1000) * 1000) * 100) / 100; }
ACT.scen = function () {
  var a = S.sAlt, run = S.sRun, m = S.sMask, warn = a >= 14000 && !m;
  var lvl = !m ? 0 : !S.sMathOk ? 1 : S.sTw !== 0 ? 2 : !S.sDesc ? 3 : 4;
  var altC = a >= 18000 ? '#ff8a7a' : a >= 14000 ? 'var(--try)' : 'var(--ok)';
  var g = '<div class="cluster">' + gauge({ key: 'simalt', val: a, min: 0, max: 30000, zones: [[0, 14000, '#5fe39a'], [14000, 18000, '#ffc24a'], [18000, 30000, '#ff6b5e']], ticks: ALT_TICKS, unit: 'FT x1000' }) +
    '<div class="col" style="gap:6px"><span class="dim" style="font-size:12px">Cabin altitude</span><span class="big" style="color:' + altC + '">' + fmt(a) + ' ft</span><span class="dim" style="font-size:12px;min-height:18px">' + (S.sDesc ? 'Descending ↓' : run ? 'Climbing ↑' : '') + '</span>' +
    '<div class="anns"><span class="ann r fl' + (warn ? ' on' : '') + '"' + (warn ? '' : ' aria-hidden="true"') + '>Above 14,000 ft: oxygen required</span><span class="ann g' + (m ? ' on' : '') + '" aria-hidden="true">MASKS ON</span><span class="ann b' + (S.sDesc ? ' on' : '') + '" aria-hidden="true">DESCENT</span></div></div></div>';
  var r = '<div class="radio" role="log" aria-label="Crew radio"><span class="lbl orange" style="font-size:12px">Crew radio</span>' + simHeard().slice(-3).map(function (x) { return '<span class="rm"><strong>' + x.who + ':</strong> “' + esc(x.t) + '”</span>'; }).join('') + '</div>';
  var c = '';
  if (!run && !S.sWon && !S.sFail && !S.sStarted) c += '<button type="button" class="start" data-act="simStart">Start the clock ▶</button>';
  if (run && !m) c += '<button type="button" class="mask" data-act="simMask"><b>Call it: masks on</b><span>Only when you see the signs</span></button>';
  if (run && lvl === 1) { var mP = simMaskP(); c += '<div class="box"><span class="lbl blue" style="font-size:12px">Elena: run the numbers</span><span style="font-size:15px;line-height:1.5">Masks are on at about ' + fmt(Math.round((S.sMaskAlt || a) / 1000) * 1000) + ' ft, where pressure is about ' + Math.round(mP * 100) + '% of sea level. The masks give 100% oxygen. How much oxygen is in each breath now? (Normal is 21.)</span><label>100 × ' + mP.toFixed(2) + ' = <input class="num" style="width:70px" inputmode="numeric" autocomplete="off" aria-label="Oxygen per breath with masks on" data-bind="sMath" data-k="sMath" data-enter="mathChk"><button type="button" class="opt bl" style="width:auto;border-radius:999px;border-color:var(--blue);color:var(--blue);padding:8px 14px;font-size:14px" data-act="mathChk">Check</button></label></div>'; }
  if (run && lvl === 2) c += '<div class="box red"><span class="lbl" style="font-size:12px">New problem</span><span style="font-size:15px;line-height:1.5">The pilot’s mask hose just split. The engineer pulls off his own mask to help her. What do you tell him?</span>' + TW.map(function (w, i) { return optBtn('tw', i, esc(w[0]), S.sTwP === i ? (w[1] ? 'ok' : 'try') : ''); }).join('') + '</div>';
  if (run && lvl === 3) c += '<div class="box grn"><span class="lbl" style="font-size:12px">Descend</span><span style="font-size:15px;line-height:1.5">Open the valve and drop. Where should the cabin level off?</span><div class="g3">' + TG.map(function (t, i) { return optBtn('tgt', i, fmt(t[0]) + ' ft', S.sTgtP === i ? (i === 2 ? 'ok' : 'try') : ''); }).join('') + '</div></div>';
  if ((S.sFb && !S.sWon) || S.sFail) c += fb(!S.sFail && S.sFb && S.sFb.ok, S.sFail ? 'The pilot can’t follow what you’re saying anymore. Without oxygen, the brain slowed down first. Try again and act at the first sign.' : S.sFb.m);
  if (S.sFail) c += '<button type="button" class="go" style="align-self:flex-start" data-act="simReset" data-k="again">Run it again</button>';
  if (S.sWon) c += '<div class="calls"><span style="font-size:16px;font-weight:700">Your calls</span>' + scoreHTML() + '<button type="button" class="go" style="align-self:flex-start;font-size:14px" data-act="simReset" data-k="again">Try it again</button></div>';
  var intro = '<span class="lbl orange">Live: cabin pressure lost</span><span class="q">The cabin is leaking, so it feels higher and higher inside. Watch the crew’s messages, decide when to act, and keep them safe. The clock doesn’t stop.</span>';
  return { cls: 'panel hot sim', tag: 'MASTER CAUTION', parts: [['i', intro], ['g', g], ['r', r], ['c', c]] };
};

ACT.debrief = function (f) {
  var rows = [['Your hunch', S.hunch != null ? 'You started with “' + HO[S.hunch].toLowerCase() + '.”' : 'You started with an open mind.']];
  if (f.ckAll) rows.push(['The crew recording', 'You read the signs in order: clumsy hands at 18,000 ft, confusion at 23,000 ft, tunnel vision at 27,000 ft.' + (f.callOk ? ' Your call for oxygen: 18,000 ft, at the first sign.' : '')]);
  rows.push(['The finding', 'Hypoxic hypoxia. The air stayed 21% oxygen, but thin air put less oxygen into every breath.']);
  if (f.piesOk) rows.push(['Your numbers', 'Oxygen per breath, by your math: ' + PL.map(function (p, i) { return String(S.pv[i]).trim() + ' ' + ['at 29,000 ft', 'outside an airliner', 'inside the cabin'][i]; }).join(', ') + '. Sea level is 21.']);
  rows.push(['The fix', 'Add pressure, add oxygen, or both, without straining the walls or giving the crew too much oxygen.']);
  if (f.atmoOk) rows.push(['Your designs', VH.map(function (v, i) { var s = S.at[i]; return v[0] + ': ' + s.p + ' atm at ' + s.o + '% oxygen'; }).join('. ') + '.']);
  rows.push(['Launch day', S.sMaskAlt ? 'You got masks on at ' + fmt(S.sMaskAlt) + ' ft, then brought the crew down to thicker air.' : 'You protected the crew first, then brought them down to thicker air.']);
  var h = '<div class="db-h"><b>Mission debrief</b><span class="lbl" style="color:var(--orange)">Flight surgeon’s log</span></div>' +
    rows.map(function (r) { return '<div class="db-r"><span class="lbl rust" style="font-size:12.500px">' + r[0] + '</span><span class="v">' + esc(r[1]) + '</span></div>'; }).join('');
  if (S.sWon) h += '<div class="db-p" style="border-bottom:1px solid #e2d5b6"><span class="lbl rust">Your launch-day calls</span><div class="calls">' + scoreHTML() + '</div></div>';
  h += '<div class="db-p"><span class="lbl rust">Mission patches</span><ul class="plist">' + PATCH.slice(1).map(function (n, j) { var i = j + 1, on = has(S.pt, i); return '<li>' + patch(i, on, 64) + '<span>' + n + '<span class="sr">' + (on ? ', earned' : ', not earned') + '</span></span></li>'; }).join('') + '</ul></div>';
  return { cls: 'panel sheet debrief', parts: [['m', h]] };
};

/* ---------- Render ---------- */
function renderAct(f) {
  var host = $('#act'), fn = ACT[f.ch.type], r = f.chatDone && fn ? fn(f) : null;
  var sig = r ? S.c + ':' + r.parts.map(function (p) { return p[0]; }).join(',') : '';
  if (host._sig !== sig) {
    host._sig = sig;
    host.innerHTML = r ? '<section class="' + r.cls + '"' + (r.tag ? ' data-tag="' + r.tag + '"' : '') + ' aria-label="' + esc(f.ch.t) + '">' + r.parts.map(function (p) { return '<div class="pt pt-' + p[0] + (p[0] === 'i' ? ' sim-intro' : '') + '"></div>'; }).join('') + '</section>' : '';
  }
  if (r) r.parts.forEach(function (p) { setH(host.querySelector('.pt-' + p[0]), p[1]); });
}
function goalHTML(f) {
  var t = f.ch.type;
  if (!(f.chatDone && CHAT[S.c] && t !== 'chat' && t !== 'meet' && t !== 'debrief')) return '';
  return '<div class="goal' + (f.locked ? '' : ' done') + '"><span class="gi" aria-hidden="true">' + (f.locked ? '◎' : '✓') + '</span><span><span class="lbl gk" style="font-size:12px">' + (f.locked ? 'Your goal' : 'Done') + '</span><span class="gt">' + (f.locked ? f.lockMsg : 'Nice work! Continue when you’re ready.') + '</span></span></div>';
}
function navHTML(f) {
  var c = S.c, showNext = f.ch.type === 'meet' ? (!!S.sent && !T.send) : f.chatDone;
  var tray = '<ul class="ptray" aria-label="Mission patches earned: ' + S.pt.length + ' of 8">' + PATCH.slice(1).map(function (n, j) { return '<li title="' + n + '">' + patch(j + 1, has(S.pt, j + 1), 30) + '</li>'; }).join('') + '</ul>';
  return '<div class="nav"><button type="button" class="ghostb" data-act="back"' + (c === 0 ? ' disabled' : '') + '>← Back</button>' + tray +
    (showNext ? '<button type="button" class="go" data-act="next" data-k="next"' + (f.locked ? ' disabled' : '') + '>' + (c < N - 1 ? 'Continue →' : 'Start over') + '</button>' : '<span></span>') + '</div>';
}
function tween() {
  [].forEach.call(document.querySelectorAll('[data-tw]'), function (el) {
    var k = el.getAttribute('data-tw'), cur = el.getAttribute('data-st'), prev = tween.m[k]; tween.m[k] = cur;
    if (el._tw || RM || !prev || prev === cur) { el._tw = 1; return; }
    el._tw = 1; el.setAttribute('style', prev + ';transition:none'); el.getBoundingClientRect(); el.setAttribute('style', cur);
  });
}
tween.m = {};
function binds() {
  [].forEach.call(document.querySelectorAll('[data-bind]'), function (el) {
    var b = el.getAttribute('data-bind'), v = b === 'reply' ? (S.reply == null ? DEF_REPLY : S.reply) : b === 'sMath' ? S.sMath : b.indexOf('pv:') === 0 ? (S.pv[b.slice(3)] == null ? '' : S.pv[b.slice(3)]) : '';
    if (el.value !== String(v)) el.value = v;
  });
}
function patches(f) {
  var all = facts();
  for (var c = 1; c < N; c++) if (!has(S.pt, c) && S.ci[c] != null && chatDoneAt(c) && !lockOf(CH[c].type, all)) {
    S.pt.push(c);
    if (!gate) toast('<div class="toast pat">' + patch(c, true, 40) + '<span class="tb"><span class="tk">MISSION PATCH EARNED</span><b>' + PATCH[c] + '</b></span></div>', 3600);
  }
}
function update() {
  if (gate) return;
  var ae = document.activeElement, fk = ae && ae.getAttribute ? ae.getAttribute('data-k') || (ae.getAttribute('data-act') ? ae.getAttribute('data-act') + ':' + (ae.getAttribute('data-arg') || '') : null) : null, ss = null;
  try { ss = ae && ae.tagName === 'INPUT' && ae.type !== 'range' ? ae.selectionStart : null; } catch (e) {}
  var f = derive();
  patches(f);
  if (S.c === 0) setH($('#comms'), meetComms());
  setH($('#goal'), goalHTML(f));
  renderAct(f);
  setH($('#nav'), navHTML(f));
  setH($('#hud'), hudHTML());
  skySet(); tween(); binds();
  if (fk && document.activeElement !== ae || (fk && !document.body.contains(ae))) {
    var n = $('[data-k="' + fk + '"]') || (fk.indexOf(':') > 0 ? $('[data-act="' + fk.split(':')[0] + '"][data-arg="' + fk.split(':')[1] + '"]') : null);
    if (n && !n.disabled) { try { n.focus({ preventScroll: true }); if (ss != null && n.setSelectionRange) n.setSelectionRange(ss, ss); } catch (e) {} }
  }
  save();
}
function renderChapter() {
  var c = S.c, ch = CH[c];
  setH($('#gate'), '');
  setH($('#head'), ch.type !== 'chat' && ch.type !== 'meet' ? '<div class="head"><div><span class="lbl orange">' + esc(ch.k) + '</span><h1>' + esc(ch.t) + '</h1></div>' + figure(ch) + '</div>' : '');
  setH($('#meet'), ch.type === 'meet' ? '<div class="badge"><div class="badge-p" role="img" aria-label="Portrait of Dr. Elena Rivera in a navy flight suit with a medical patch, holding a tablet">' + badgeFigure() + '<span class="strip" aria-hidden="true"><span>CREW ID</span><span>FS-01</span></span></div><div class="badge-d"><span class="lbl rust">Your mentor</span><span class="nm">Dr. Elena Rivera</span><span class="ro">Lead flight surgeon, high-altitude test program</span><p>Elena has spent her career keeping pilots and test crews safe in thin air. She’ll guide you through this week and check in with a message at every step.</p><div class="stats"><span><strong>18 yrs</strong><span>in aerospace medicine</span></span><span><strong>60+</strong><span>high-altitude flights</span></span><span><strong>You</strong><span>her newest trainee</span></span></div><span class="fine">Dr. Rivera is a fictional character created for this module.</span></div></div>' : '');
  var cm = $('#comms'); cm._h = null; logN = 0;
  if (CHAT[c]) { cm.innerHTML = '<div class="comms">' + commsHead() + '<div class="comms-b"><span class="scene">' + esc(SCENE[c] || '') + '</span><div id="log" role="log" aria-label="Chat with Dr. Rivera"></div><div id="chatx" tabindex="-1"></div></div></div>'; syncChat(false); }
  else if (c !== 0) cm.innerHTML = '';
  $('#act')._sig = null;
  update();
}
function toast(html, ms) {
  var t = $('#toasts'), d = document.createElement('div'); d.innerHTML = html; var el = d.firstChild; t.appendChild(el);
  setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, ms);
}
function scrollTop() {
  try {
    var fe = window.frameElement;
    if (fe && window.parent) { var r = fe.getBoundingClientRect(); if (r.top < 0) window.parent.scrollTo({ top: window.parent.scrollY + r.top - 16, behavior: RM ? 'auto' : 'smooth' }); }
  } catch (e) {}
  try { window.scrollTo({ top: 0, behavior: RM ? 'auto' : 'smooth' }); } catch (e) {}
}
function goTo(i, quiet) {
  clearTimeout(T.send); T.send = 0; clearTimeout(T.ntf); clearTimeout(T.ntf2); clearInterval(T.sim);
  if (S.sRun) { var z = simZero(); for (var k in z) S[k] = z[k]; }
  S.c = i; S.tsel = null;
  if (CHAT[i] && !chatDoneAt(i)) {
    var first = (CHAT[i].filter(function (x) { return x.r; })[0] || {}).r || '';
    T.ntf = setTimeout(function () { if (S.c === i && !gate) toast('<div class="toast"><span class="av">' + avatar() + '</span><span class="tb"><span class="tk">INCOMING · SURGEON</span><b style="font-size:14px">Dr. Elena Rivera</b><span class="tt">' + esc(first) + '</span></span></div>', 4000); }, 1200);
  }
  typing = i === 0 && !S.sent; clearTimeout(T.type);
  if (typing) T.type = setTimeout(function () { typing = false; update(); }, 1100);
  renderChapter();
  ensureChat(i);
  if (!quiet) scrollTop();
}

/* ---------- Actions ---------- */
var A = {
  back: function () { goTo(Math.max(0, S.c - 1)); },
  next: function () {
    var f = derive(); if (f.locked) return;
    if (S.c < N - 1) { goTo(S.c + 1); return; }
    clearTimeout(T.chat); chatFor = null; chatTyping = null; S = fresh(); wipe(); tween.m = {}; goTo(0);
  },
  resume: function () { S = gate; gate = null; goTo(S.c, true); var n = $('[data-k="next"]') || $('#chatx button') || $('#main button'); if (n) n.focus(); },
  restart: function () { gate = null; wipe(); S = fresh(); goTo(0, true); },
  chip: function (j) {
    var c = S.c, L = CHAT[c], n = S.ci[c] || 0, nx = L[n] || {}; if (!nx.u) return;
    if (nx.needVid && !S.vp[c]) { say('Play the video first'); return; }
    S.picks[c + ':' + n] = nx.u[+j]; var x = $('#chatx'); if (x) x.focus({ preventScroll: true });
    runChat(c, n + 1);
  },
  play: function (c, el) {
    S.vp[+c] = true; var r = el.closest('.reel'); if (r) { r.classList.add('playing'); $('.reel-m', r).textContent = 'Instructor video not included in this sample'; }
    syncChat(true); update();
  },
  openLog: function (_, el) { lastFocus = el; logOpen = true; modal(); },
  closeLog: function () { logOpen = false; modal(); if (lastFocus && document.body.contains(lastFocus)) lastFocus.focus(); },
  pick: function (i, el) { i = +i; if (S.tp[i] === i) return; S.tsel = S.tsel === i ? null : i; S.tfb = null; update(); },
  place: function (i) {
    i = +i; if (S.tp[i] === i || S.tsel == null) return;
    if (S.tsel === i) { S.tp[i] = i; S.tsel = null; S.tfb = { ok: true, m: 'Yes. ' + TE[i][1] }; }
    else S.tfb = { ok: false, m: 'Not quite. ' + TE[S.tsel][2] };
    say(S.tfb.m); update();
  },
  hunch: function (i) { S.hunch = +i; say('Got it. It’s just a guess for now, and you’ll check it as you go.'); update(); },
  tok: function (i) {
    i = +i; var rn = S.rn; if (i < rn) return;
    if (i === rn) { S.rn = rn + 1; S.rfb = { ok: true, m: rn + 1 === 8 ? 'You made it to the cells. That’s the whole route of one breath.' : 'Yes! Where does it go next?' }; }
    else S.rfb = { ok: false, m: rn === 0 ? 'Start where the air comes in.' : 'Not quite. Where does oxygen go right after the ' + RT[rn - 1].toLowerCase().replace(/ \(.*\)/, '') + '?' };
    say(S.rfb.m); update();
    if (i === rn) { var nx = $('#act .opts .opt:not([aria-disabled])'); if (nx && document.activeElement === document.body) nx.focus({ preventScroll: true }); }
  },
  eq: function (i) { i = +i; S.eqs = has(S.eqs, i) ? S.eqs.filter(function (x) { return x !== i; }) : S.eqs.concat(i); update(); sayFb('.candle'); },
  ckTab: function (i) { S.ckI = +i; update(); },
  sign: function (i) { S.ckA[S.ckI] = +i; update(); sayFb('.two'); },
  call: function (i) { S.call = +i; update(); sayFb('.s-call'); },
  hx: function (i) { i = +i; if (i === 0) S.hxf = 0; else if (!has(S.hx, i)) { S.hx = S.hx.concat(i); S.hxf = i; } update(); sayFb('.s-hx'); },
  pchk: function () { S.pChk = true; update(); var f = facts(); say(f.piesOk ? 'All three are right.' : 'Some answers need another look. Check the notes under each place.'); },
  dz: function (i) { i = +i; S.dz = has(S.dz, i) ? S.dz.filter(function (x) { return x !== i; }) : S.dz.concat(i); update(); sayFb('.s-dz'); },
  vp: function (arg) {
    var p = arg.split('|'), i = +p[0]; S.at[i] = S.at[i] || {}; S.at[i][p[1]] = +p[2]; update();
    var r = vRes()[i]; if (r.has) say(VH[i][0] + ': oxygen per breath ' + r.u + '. ' + r.checks.map(function (c) { return c[1]; }).join(' '));
  },
  simStart: function () { clearInterval(T.sim); var z = simZero(); for (var k in z) S[k] = z[k]; S.sRun = true; S.sStarted = true; update(); T.sim = setInterval(simTick, 800); var m = $('[data-act="simMask"]'); if (m) m.focus({ preventScroll: true }); },
  simMask: function () {
    if (!S.sRun || S.sMask) return; var a = S.sAlt; S.sMask = true; S.sMaskAlt = a;
    S.sFb = a < 14000 ? { ok: false, m: 'Masks on at ' + fmt(a) + ' ft. Safe, but early: the crew wasn’t showing signs yet. Watch for them next time.' } : a <= 18000 ? { ok: true, m: 'Masks on at ' + fmt(a) + ' ft. Great timing, right at the first signs.' } : { ok: false, m: 'Masks on, but late. At ' + fmt(a) + ' ft they were already confused.' };
    say(S.sFb.m); update(); var n = $('[data-bind="sMath"]'); if (n) n.focus({ preventScroll: true });
  },
  mathChk: function () {
    var mP = simMaskP(), ans = Math.round(mP * 100), v = parseFloat(S.sMath);
    if (Math.abs(v - ans) <= 2) { S.sMathOk = true; S.sFb = { ok: true, m: 'Yes, about ' + ans + '. That’s more than the normal 21, so they’re safe for now. But the leak is still there.' }; }
    else { S.sMathT = (S.sMathT || 0) + 1; S.sFb = { ok: false, m: 'Not quite. Multiply 100 by the pressure: 100 × ' + mP.toFixed(2) + '. Time is passing.' }; }
    say(S.sFb.m); update(); if (S.sMathOk) { var n = $('[data-act="tw"]'); if (n) n.focus({ preventScroll: true }); }
  },
  tw: function (i) {
    i = +i; var w = TW[i]; S.sTwP = i; if (w[1]) S.sTw = 0; S.sTwT = (S.sTwT || 0) + 1; if (S.sTwFirst == null) S.sTwFirst = !!w[1]; S.sFb = { ok: !!w[1], m: w[2] };
    say(w[2]); update(); if (w[1]) { var n = $('[data-act="tgt"]'); if (n) n.focus({ preventScroll: true }); }
  },
  tgt: function (i) { i = +i; var t = TG[i]; S.sTgtP = i; if (S.sTgtFirst == null) S.sTgtFirst = i === 2; if (i === 2) S.sDesc = 10000; S.sFb = { ok: i === 2, m: t[1] }; say(t[1]); update(); },
  simReset: function () { clearInterval(T.sim); var z = simZero(); for (var k in z) S[k] = z[k]; update(); var n = $('[data-act="simStart"]'); if (n) n.focus({ preventScroll: true }); }
};
function sayFb(scope) { var l = document.querySelectorAll('#act ' + (scope || '') + ' .fb'), e = l[l.length - 1]; if (e) say(e.textContent); }
function simTick() {
  if (!S.sRun) { clearInterval(T.sim); return; }
  var a = S.sAlt, warned = a >= 14000 && !S.sMask;
  if (S.sDesc) a = Math.max(S.sDesc, a - 1500); else a = Math.min(28000, a + (S.sMask ? 500 : 1000));
  S.sAlt = a; S.sPeak = Math.max(S.sPeak || 8000, a);
  if (S.sDesc && a <= S.sDesc) { S.sRun = false; S.sWon = true; clearInterval(T.sim); say('The cabin is level at ' + fmt(a) + ' feet. The crew is safe.'); }
  else if (!S.sMask && a >= 26000) { S.sRun = false; S.sFail = true; clearInterval(T.sim); say('The pilot can’t follow what you’re saying anymore. Without oxygen, the brain slowed down first. Try again and act at the first sign.'); }
  else if (!warned && a >= 14000 && !S.sMask) say('Warning. Above 14,000 ft: oxygen required.');
  update();
  if (S.sWon || S.sFail) { var n = $('[data-k="again"]'); if (n && document.activeElement === document.body) n.focus({ preventScroll: true }); }
}

/* ---------- Logbook ---------- */
function modal() {
  var m = $('#modal');
  if (!logOpen) { m.innerHTML = ''; return; }
  var top = 60; try { var fe = window.frameElement; if (fe) top = Math.max(60, -fe.getBoundingClientRect().top + 60); } catch (e) {}
  m.innerHTML = '<div class="ov" data-act="closeLog" style="padding-top:' + Math.round(top) + 'px"><div class="logbook" role="dialog" aria-modal="true" aria-label="Glaisher’s logbook" data-stop="1"><div class="lb-h"><span class="lbl orange" style="font-size:12px">5 September 1862</span><b>Glaisher’s logbook</b><button type="button" class="lb-x" data-act="closeLog" aria-label="Close logbook">×</button></div><ol class="lb-l">' +
    LOGP.map(function (p) { return '<li><b>' + esc(p[0]) + '</b><span>“' + esc(p[1]) + '”</span></li>'; }).join('') + '</ol><div class="lb-f"><span>Adapted from the case study account</span><button type="button" data-act="closeLog">Close</button></div></div></div>';
  $('.lb-x', m).focus();
}

/* ---------- Events ---------- */
var noClick = false, drag = null;
document.addEventListener('click', function (e) {
  if (noClick) { e.preventDefault(); return; }
  var el = e.target.closest('[data-act]'); if (!el) return;
  if (el.getAttribute('data-act') === 'closeLog' && el.classList.contains('ov') && e.target.closest('[data-stop]')) return;
  if (el.disabled || el.getAttribute('aria-disabled') === 'true') return;
  var fn = A[el.getAttribute('data-act')]; if (fn) fn(el.getAttribute('data-arg'), el, e);
});
document.addEventListener('submit', function (e) {
  if (!e.target.getAttribute || e.target.getAttribute('data-form') !== 'send') return;
  e.preventDefault();
  var t = String(S.reply == null ? DEF_REPLY : S.reply).trim(); if (!t) return;
  S.sent = t; clearTimeout(T.send); T.send = setTimeout(function () { T.send = 0; goTo(1); }, 900); update();
});
document.addEventListener('input', function (e) {
  var el = e.target, b = el.getAttribute && el.getAttribute('data-bind');
  if (el.getAttribute && el.getAttribute('data-slide')) {
    S.alt = +el.value; var r = slideRead(S.alt), p = $('#spie'); p.style.width = p.style.height = r.size + 'px'; $('#sread').innerHTML = r.text; el.setAttribute('aria-valuetext', r.vt);
    $('#act .pt-m')._h = null; save(); return;
  }
  if (!b) return;
  if (b === 'reply') { S.reply = el.value; var bt = $('.ptt'); if (bt) bt.disabled = !el.value.trim(); save(); }
  else if (b === 'sMath') { S.sMath = el.value; }
  else if (b.indexOf('pv:') === 0) { S.pv[b.slice(3)] = el.value; if (S.pChk) { S.pChk = false; update(); } else save(); }
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && logOpen) { A.closeLog(); return; }
  if (e.key === 'Tab' && logOpen) { var fs = $('#modal').querySelectorAll('button'), a = fs[0], z = fs[fs.length - 1]; if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); } return; }
  var t = e.target;
  if (e.key === 'Enter' && t.getAttribute && t.getAttribute('data-enter')) { e.preventDefault(); A[t.getAttribute('data-enter')](); return; }
  if (t.getAttribute && t.getAttribute('role') === 'tab' && (e.key === 'ArrowRight' || e.key === 'ArrowLeft')) {
    e.preventDefault(); var n = (S.ckI + (e.key === 'ArrowRight' ? 1 : 3)) % 4; S.ckI = n; update(); var nt = $('#cktab' + n); if (nt) nt.focus();
  }
});
/* Drag an event card onto the altitude scale (tap-to-place and the keyboard still work). */
function slotAt(x, y) { var el = document.elementFromPoint(x, y), s = el && el.closest ? el.closest('[data-slot]') : null; return s; }
function dragEnd() { if (drag && drag.ghost) { drag.ghost.parentNode.removeChild(drag.ghost); var sc = $('#scale'); if (sc) { sc.classList.remove('dragging'); [].forEach.call(sc.querySelectorAll('.over'), function (o) { o.classList.remove('over'); }); } } drag = null; }
document.addEventListener('pointerdown', function (e) {
  var el = e.target.closest ? e.target.closest('[data-drag]') : null;
  if (!el || el.getAttribute('aria-disabled') === 'true' || e.button > 0) return;
  drag = { el: el, i: +el.getAttribute('data-drag'), x: e.clientX, y: e.clientY, id: e.pointerId, ghost: null };
});
document.addEventListener('pointermove', function (e) {
  if (!drag || e.pointerId !== drag.id) return;
  var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (!drag.ghost) {
    if (dx * dx + dy * dy < 64) return;
    var r = drag.el.getBoundingClientRect(), g = drag.el.cloneNode(true);
    g.className = 'card on ghost'; g.removeAttribute('data-act'); g.removeAttribute('data-drag'); g.setAttribute('aria-hidden', 'true');
    g.style.width = r.width + 'px'; g.style.left = r.left + 'px'; g.style.top = r.top + 'px'; document.body.appendChild(g); drag.ghost = g;
    var sc = $('#scale'); if (sc) sc.classList.add('dragging');
  }
  drag.ghost.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
  var s = slotAt(e.clientX, e.clientY);
  [].forEach.call(document.querySelectorAll('.slot.over'), function (o) { if (o !== s) o.classList.remove('over'); });
  if (s && !s.classList.contains('has')) s.classList.add('over');
});
document.addEventListener('pointerup', function (e) {
  if (!drag || e.pointerId !== drag.id) return;
  if (drag.ghost) {
    var s = slotAt(e.clientX, e.clientY), i = drag.i; dragEnd();
    noClick = true; setTimeout(function () { noClick = false; }, 60);
    if (s) { S.tsel = i; S.tfb = null; A.place(s.getAttribute('data-slot')); if (S.tsel != null) { S.tsel = null; update(); } }
  } else drag = null;
});
document.addEventListener('pointercancel', dragEnd);

/* ---------- Start ---------- */
skyBuild();
var saved = load();
if (saved && (saved.c > 0 || saved.sent)) {
  gate = saved;
  setH($('#hud'), hudHTML()); skySet();
  setH($('#gate'), '<div class="panel resume" data-tag="FLIGHT RECORDER"><span class="lbl orange">Saved flight found</span><h1>Welcome back to Out of Thin Air</h1><span style="font-size:16px;line-height:1.5">You were on leg ' + (saved.c + 1) + ' of ' + N + ': ' + esc(CH[saved.c].t) + '. Your answers so far are saved in this browser.</span><div class="opts"><button type="button" class="go solid" data-act="resume">Resume flight</button><button type="button" class="ghostb" data-act="restart">Start over</button></div></div>');
} else goTo(0, true);

/* Embedded on a page: report this story's height so the page can size the frame (see js/lagoon.js). */
(function () {
  if (window.parent === window) return; var last = 0; $('#app').style.minHeight = '0';
  function post() { var el = $('#app'), h = Math.ceil(el ? el.scrollHeight : document.documentElement.scrollHeight); if (Math.abs(h - last) > 2) { last = h; window.parent.postMessage({ type: 'embed-resize', height: h }, '*'); } }
  window.addEventListener('load', function () { post(); [300, 1000, 2500].forEach(function (t) { setTimeout(post, t); }); });
  document.addEventListener('click', function () { setTimeout(post, 60); setTimeout(post, 500); });
  try { new ResizeObserver(post).observe($('#main')); } catch (e) { setInterval(post, 800); }
  post();
})();
})();
