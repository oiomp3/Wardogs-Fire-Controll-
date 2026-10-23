// ---------- Frontbuch v32: Challenge-Slot als Streamer-Widget (/overlay/challenge/) – ohne Twitch-Chat, ohne Login, ohne Tracking ----------
// Parameter: p (1–4 = Solo/Duo/Trio/Squad), lvl (leicht,mittel,schwer; mehrere mit Komma), ind=0 (ab Duo nur Gruppen-Challenges), layout (box 800×450 / bar 1280×210),
// scale (Größe, sonst automatisch), theme=clear (ohne Kasten, nur Walze und Ergebnis), lang (de/en/es/fr; sonst aus dem Pfad), auto (Minuten, 0 = aus),
// show (Sekunden, wie lange das Ergebnis stehen bleibt; 0 = bis zum nächsten Dreh), spin=1 (beim Laden einmal drehen), sound=1.
// Drehen: Klick (auch OBS „Interagieren“), Leertaste/Enter, optional Auto-Dreh, optional spin=1.
(function () {
  'use strict';
  const FC = window.FBChallenge, root = document.getElementById('w');
  if (!FC || !root || !window.FB_CHAL_ROWS) return;
  const Q = new URLSearchParams(location.search), C = FC.build();
  const LANGS = ['de', 'en', 'es', 'fr'];
  const pathLang = (location.pathname.match(/^\/(en|es|fr)\//) || [])[1] || 'de';
  const lang = LANGS.includes(Q.get('lang')) ? Q.get('lang') : pathLang, CT = FC.TX[lang];
  const L = {
    de: { click: 'Klicken oder Leertaste zum Drehen', auto: 'Automatisch alle {n} Min. · Klick dreht sofort', idle: 'Bereit zum Drehen', aria: 'Challenge-Slot-Widget' },
    en: { click: 'Click or press Space to spin', auto: 'Automatic every {n} min · click spins now', idle: 'Ready to spin', aria: 'Challenge slot widget' },
    es: { click: 'Haz clic o pulsa Espacio para girar', auto: 'Automático cada {n} min · clic gira ya', idle: 'Listo para girar', aria: 'Widget de la tragaperras de retos' },
    fr: { click: 'Clique ou appuie sur Espace pour lancer', auto: 'Automatique toutes les {n} min · un clic lance tout de suite', idle: 'Prêt à lancer', aria: 'Widget de la machine à sous des défis' }
  }[lang];
  const num = (k, d, lo, hi) => { const v = parseFloat(Q.get(k)); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
  const pr = parseInt(Q.get('p'), 10);
  const F = { p: pr >= 1 && pr <= 4 ? pr : 1, levels: FC.parseLevels(Q.get('lvl') || Q.get('levels')) || [0, 1, 2], ind: Q.get('ind') !== '0' };
  const lq = Q.get('layout');
  const layout = ['bar', 'row'].includes(lq) ? 'bar' : ['full', 'box'].includes(lq) ? 'full' : 'compact';   // compact = Standard (eine schlanke Zeile), full = großer Kasten, bar = breite Leiste (alt)
  const SIZE = { compact: [640, 90], full: [800, 450], bar: [1280, 210] }[layout];
  const scaleP = parseFloat(Q.get('scale'));
  const autoMin = (v => (v > 0 ? Math.min(1440, Math.max(0.1, v)) : 0))(parseFloat(Q.get('auto')));
  const showSec = num('show', 0, 0, 3600);
  const sound = Q.get('sound') === '1', clear = Q.get('theme') === 'clear';
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);
  document.documentElement.lang = lang;
  document.title = CT.title + ' · Frontbuch';
  root.setAttribute('aria-label', L.aria);
  let ac = null;
  function beep(f) {
    if (!sound) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = f; o.type = 'triangle'; g.gain.setValueAtTime(.08, ac.currentTime); g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + .12);
      o.connect(g).connect(ac.destination); o.start(); o.stop(ac.currentTime + .13);
    } catch (e) {}
  }
  function fit() {
    const s = scaleP > 0 ? Math.min(scaleP, 6) : Math.min(innerWidth / SIZE[0], innerHeight / SIZE[1]);
    root.style.transform = `translate(-50%, -50%) scale(${s})`;
  }
  addEventListener('resize', fit); fit();
  const nStr = String(autoMin).replace('.', lang === 'en' ? '.' : ',');
  const hintTxt = autoMin ? L.auto.replace('{n}', nStr) : L.click;
  const reelH = `<div class="ovc-reelbox"><div class="sl-machine" id="ovcMachine"><div class="sl-win" id="ovcReel" aria-hidden="true"></div><span class="sl-arrow sl-al" aria-hidden="true"></span><span class="sl-arrow sl-ar" aria-hidden="true"></span></div></div>`;
  const cardH = `<div class="ovc-card" id="ovcCard" aria-live="polite"><span class="ovc-badge" id="ovcBadge">🎲</span><b class="ovc-title" id="ovcTitle">${esc(L.idle)}</b></div>`;
  const statusH = `<div class="ov-status"><span class="ov-hint" id="ovHint">${esc(hintTxt)}</span></div>`;
  const brand = '<div class="ov-brand">oiotv.de</div>';
  const compactH = `<div class="wc-brand"><b>🎲 ${esc(CT.title)} · oiotv.de</b></div><div class="wc-bar"><div class="sl-machine" id="ovcMachine"><div class="sl-win" id="ovcReel" aria-hidden="true"></div></div><div class="wc-idle" id="ovcIdle">${esc(hintTxt)}</div></div>`
    + `<div class="wc-sr" id="ovcCard" aria-live="polite"><span id="ovcBadge">🎲</span> <b id="ovcTitle">${esc(L.idle)}</b> <span id="ovHint">${esc(hintTxt)}</span></div>`;
  const main = `<div class="ovc-main">${reelH}${cardH}</div>`;
  root.className = 'ov ovc ' + (layout === 'compact' ? 'wc' : 'ov-L-' + (layout === 'bar' ? 'row' : 'grid')) + ' wg' + (clear ? ' wg-clear' : '');
  root.style.width = SIZE[0] + 'px'; root.style.height = SIZE[1] + 'px';
  if (layout === 'compact') root.innerHTML = compactH;
  else if (layout === 'full') root.innerHTML = `<div class="ov-head"><b class="ov-title">🎲 ${esc(CT.title)} · ${esc(CT.pl[F.p - 1])}</b></div>${statusH}${main}${brand}`;
  else root.innerHTML = `<div class="ov-side"><b class="ov-title">🎲 ${esc(CT.title)}</b><span class="ov-sub">${esc(CT.pl[F.p - 1])}</span>${statusH}${brand}</div>${main}`;
  const R = FC.Reel($('ovcReel'), { lang });
  R.set(C.idle3(F), false);
  const total = C.count(F);
  if (!total) { $('ovcTitle').textContent = CT.none; $('ovHint').textContent = ''; if ($('ovcIdle')) $('ovcIdle').textContent = CT.none; }
  let cur = null, spinning = false, spins = 0, tickT = 0, hideT = 0, autoT = 0;
  function render() {
    root.classList.toggle('spinning', spinning); root.classList.toggle('has', !!cur && !spinning); $('ovcMachine').classList.toggle('spinning', spinning);
    const card = $('ovcCard');
    if (cur && !spinning) {
      const P = C.parts(cur, lang);
      card.dataset.lv = P.lv; $('ovcBadge').textContent = P.lvName; $('ovcTitle').textContent = P.title;
      root.dataset.id = P.id;
    }
    card.classList.toggle('ready', !!cur && !spinning);
    if (cur && !spinning) fitText();
  }
  // Kompakt: der Gewinner steht in einer einzigen Zeile; lange Texte werden verkleinert, ganz lange laufen in zwei kleine Zeilen
  function fitText() {
    if (layout !== 'compact') return;
    const sp = root.querySelector('.sl-cell.mid span');
    if (!sp) return;
    sp.classList.remove('two'); sp.style.fontSize = '';
    for (let f = 25; f >= 17; f--) { sp.style.fontSize = f + 'px'; if (sp.scrollWidth <= sp.clientWidth + 1) return; }
    sp.classList.add('two');
    for (let f = 19; f >= 12; f--) { sp.style.fontSize = f + 'px'; if (sp.scrollHeight <= sp.clientHeight + 1) return; }
  }
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (cur && !spinning) fitText(); });
  async function spin() {
    if (spinning || !total) return false;
    const next = C.roll(F, cur);
    if (!next) return false;
    clearTimeout(hideT);
    spinning = true; render();
    await R.spin(C.reelList(F, next), reduced() ? 0 : 4800, () => { const n = performance.now(); if (n - tickT > 70) { tickT = n; beep(380); } });
    beep(660);
    cur = next; spinning = false; spins++; root.dataset.spins = spins;
    render();
    if (showSec > 0) hideT = setTimeout(() => {   // Ergebnis nach der eingestellten Zeit ausblenden, Walze zurück in den Ruhezustand
      if (spinning) return;
      cur = null; R.set(C.idle3(F), false); $('ovcBadge').textContent = '🎲'; $('ovcTitle').textContent = L.idle; delete root.dataset.id; render();
    }, showSec * 1000);
    return true;
  }
  root.addEventListener('click', () => spin());
  document.addEventListener('keydown', e => {
    if ((e.code === 'Space' || e.key === ' ' || e.key === 'Enter') && !e.repeat && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); spin(); }
  });
  render();
  if (autoMin) autoT = setInterval(() => spin(), Math.round(autoMin * 60000));
  if (Q.get('spin') === '1' || location.hash === '#spin') setTimeout(() => spin(), 500);
  window.fbWidget = { spin, state: () => (cur ? C.parts(cur, lang) : null), spins: () => spins, spinning: () => spinning, reel: R,
    config: { lang, filter: F, count: total, layout, size: SIZE, auto: autoMin, show: showSec, theme: clear ? 'clear' : 'dark', sound } };
})();
