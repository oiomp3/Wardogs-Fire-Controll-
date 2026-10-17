// ---------- Slotmaschine (nur Spielgeld) ----------
(function () {
  const SYMS = [
    { id: 'cherry', key: 'symCherry', w: 8, three: 8, two: 2 },
    { id: 'star',   key: 'symStar',   w: 7, three: 10, two: 0 },
    { id: 'target', key: 'symTarget', w: 6, three: 20, two: 0 },
    { id: 'bomb',   key: 'symBomb',   w: 5, three: 30, two: 0 },
    { id: 'skull',  key: 'symSkull',  w: 4, three: 75, two: 0 },
    { id: 'seven',  key: 'symSeven',  w: 2, three: 100, two: 2 }
  ];
  const TOTAL_W = SYMS.reduce((s, x) => s + x.w, 0); // 32
  const BETS = [1, 5, 10, 25];
  const START = 100;
  const KEY = 'wardogsSlot';
  const DUR = [900, 1300, 1700];

  const ov = document.getElementById('slotOverlay');
  const balEl = document.getElementById('slotBal');
  const machine = document.getElementById('slotMachine');
  const reels = Array.from(ov.querySelectorAll('.slot-reel'));
  const resultEl = document.getElementById('slotResult');
  const betBtns = Array.from(ov.querySelectorAll('.slot-bet'));
  const spinBtn = document.getElementById('slotSpin');
  const restartBtn = document.getElementById('slotRestart');
  const spinsEl = document.getElementById('slotSpins');
  const bestEl = document.getElementById('slotBest');
  const soundBtn = document.getElementById('slotSound');
  const soundIco = document.getElementById('slotSoundIco');
  const payBody = document.getElementById('slotPayBody');
  const reduceMQ = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };

  // ----- Zustand -----
  function load() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(KEY) || 'null'); } catch (e) {}
    const okInt = (v, max) => Number.isInteger(v) && v >= 0 && v <= max;
    return {
      bal: s && okInt(s.bal, 1e9) ? s.bal : START,
      bet: s && BETS.includes(s.bet) ? s.bet : 5,
      spins: s && okInt(s.spins, 1e12) ? s.spins : 0,
      best: s && okInt(s.best, 1e12) ? s.best : 0,
      sound: !!(s && s.sound === true)
    };
  }
  let st = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} }

  let shownBal = st.bal;     // angezeigtes Guthaben (während der Drehung = alt − Einsatz)
  let spinning = false;
  let pending = null;        // laufende Drehung
  let lastMsg = null;        // { key, params, cls } für Sprachwechsel
  let lastSyms = [0, 1, 2];
  let forced = null;         // Test-Hook: erzwungenes Ergebnis

  // ----- Zufall (fair, ohne Modulo-Bias) -----
  function randInt(n) {
    const buf = new Uint32Array(1);
    const limit = Math.floor(0x100000000 / n) * n;
    let x;
    do { crypto.getRandomValues(buf); x = buf[0]; } while (x >= limit);
    return x % n;
  }
  function randSym() {
    let r = randInt(TOTAL_W);
    for (let i = 0; i < SYMS.length; i++) { if (r < SYMS[i].w) return i; r -= SYMS[i].w; }
    return SYMS.length - 1;
  }

  // ----- Auszahlung: Rückgabe = Einsatz × Faktor (Einsatz wurde vorher abgezogen) -----
  function evaluate(idx, bet) {
    const [a, b, c] = idx;
    if (a === b && b === c) return { kind: 3, sym: a, mult: SYMS[a].three, win: bet * SYMS[a].three, hit: [0, 1, 2] };
    let pair = -1;
    if (a === b || a === c) pair = a; else if (b === c) pair = b;
    if (pair >= 0 && SYMS[pair].two > 0) {
      const hit = idx.map((v, i) => v === pair ? i : -1).filter(i => i >= 0);
      return { kind: 2, sym: pair, mult: SYMS[pair].two, win: bet * SYMS[pair].two, hit };
    }
    return { kind: 0, sym: -1, mult: 0, win: 0, hit: [] };
  }

  const money = n => '$' + n.toLocaleString('en-US');
  const icon = i => `<svg aria-hidden="true" focusable="false"><use href="#sym-${SYMS[i].id}"/></svg>`;
  const cell = i => `<div class="slot-cell">${icon(i)}</div>`;

  // ----- Sound (WebAudio, standardmäßig aus) -----
  let actx = null;
  function beep(freq, dur, when, vol) {
    if (!st.sound) return;
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === 'suspended') actx.resume();
      const t0 = actx.currentTime + (when || 0);
      const o = actx.createOscillator(), g = actx.createGain();
      o.type = 'square'; o.frequency.value = freq;
      g.gain.setValueAtTime(vol || 0.05, t0);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      o.connect(g); g.connect(actx.destination);
      o.start(t0); o.stop(t0 + dur + 0.02);
    } catch (e) {}
  }
  function winTune(kind) {
    const notes = kind === 3 ? [523, 659, 784, 1047] : [523, 784];
    notes.forEach((f, i) => beep(f, 0.14, i * 0.11, 0.06));
  }

  // ----- Darstellung -----
  function setMsg(key, params, cls) {
    lastMsg = { key, params, cls };
    resultEl.className = 'slot-result' + (cls ? ' ' + cls : '');
    resultEl.textContent = msgText();
  }
  function msgText() {
    if (!lastMsg) return '';
    const p = Object.assign({}, lastMsg.params || {});
    if (p.symIdx) p.syms = p.symIdx.map(i => t(SYMS[i].key)).join(' · ');
    return t(lastMsg.key, p);
  }

  function renderControls() {
    balEl.textContent = money(shownBal);
    spinsEl.textContent = st.spins.toLocaleString('en-US');
    bestEl.textContent = money(st.best);
    betBtns.forEach(b => {
      const v = +b.dataset.bet;
      b.setAttribute('aria-pressed', v === st.bet ? 'true' : 'false');
      b.disabled = spinning || v > st.bal;
    });
    const broke = !spinning && st.bal < BETS[0];
    spinBtn.disabled = spinning || broke || st.bet > st.bal;
    spinBtn.textContent = spinning ? t('slotSpinning') : t('slotSpin') + ' · ' + money(st.bet);
    spinBtn.setAttribute('aria-label', t('slotSpin') + ', ' + t('slotBet') + ' ' + money(st.bet));
    restartBtn.hidden = !broke;
    soundBtn.setAttribute('aria-pressed', st.sound ? 'true' : 'false');
    soundIco.textContent = st.sound ? '🔊' : '🔇';
  }

  function renderPay() {
    const rows = SYMS.map((s, i) => ({ i, m: s.three })).sort((x, y) => y.m - x.m)
      .map(r => `<tr><td><span class="ico">${icon(r.i)}${icon(r.i)}${icon(r.i)}</span><span class="nm">${escapeHtml(t(SYMS[r.i].key))}</span></td><td>×${r.m}</td></tr>`);
    SYMS.forEach((s, i) => {
      if (s.two > 0) rows.push(`<tr><td><span class="ico">${icon(i)}${icon(i)}</span><span class="nm">${escapeHtml(t('slotTwo'))}</span></td><td>×${s.two}</td></tr>`);
    });
    payBody.innerHTML = `<tr><td colspan="2" class="hd">${escapeHtml(t('slotThree'))} · ${escapeHtml(t('slotBet'))} ×</td></tr>` + rows.join('');
  }

  function showStatic(idx) {
    reels.forEach((r, k) => {
      const strip = r.firstElementChild;
      strip.style.transition = 'none';
      strip.style.transform = 'none';
      strip.innerHTML = cell(idx[k]);
    });
  }

  function renderSlot() {
    renderPay();
    renderControls();
    if (lastMsg) resultEl.textContent = msgText();
  }
  window.renderSlot = renderSlot;

  // ----- Drehen -----
  function settle() {
    if (!pending) return;
    const p = pending; pending = null;
    p.timers.forEach(clearTimeout);
    showStatic(p.idx);
    lastSyms = p.idx;
    spinning = false;
    shownBal = st.bal;
    const r = p.res;
    if (r.win > 0) {
      machine.classList.add('win');
      r.hit.forEach(i => reels[i].classList.add('hit'));
      setMsg(r.kind === 3 ? 'slotWin3' : 'slotWin2', { symIdx: p.idx, amount: money(r.win), mult: r.mult }, 'win');
      winTune(r.kind);
    } else if (st.bal < BETS[0]) {
      setMsg('slotLose', { symIdx: p.idx, bet: money(p.bet) }, 'lose');
      resultEl.textContent += ' ' + t('slotBroke');
      lastMsg.broke = true;
    } else {
      setMsg('slotLose', { symIdx: p.idx, bet: money(p.bet) }, 'lose');
    }
    renderControls();
    const ae = document.activeElement;
    if (isOpen() && (!ae || ae === document.body || (ov.contains(ae) && ae.disabled))) {
      (restartBtn.hidden ? spinBtn : restartBtn).focus();
    }
  }

  function spin() {
    if (spinning) return;
    const bet = st.bet;
    if (bet > st.bal || bet < 1) { renderControls(); return; }
    let idx;
    if (forced) { idx = forced.slice(0, 3); forced = null; }
    else idx = [randSym(), randSym(), randSym()];
    const res = evaluate(idx, bet);
    const before = st.bal;
    // Endzustand sofort speichern (Neuladen während der Animation verliert nichts)
    st.bal = st.bal - bet + res.win;
    st.spins += 1;
    if (res.win > st.best) st.best = res.win;
    if (st.bet > st.bal) { const ok = BETS.filter(b => b <= st.bal); if (ok.length) st.bet = ok[ok.length - 1]; }
    save();
    shownBal = before - bet;
    spinning = true;
    machine.classList.remove('win');
    reels.forEach(r => r.classList.remove('hit'));
    lastMsg = null;
    resultEl.className = 'slot-result';
    resultEl.textContent = '';
    renderControls();
    beep(220, 0.08, 0, 0.04);

    pending = { idx, res, bet, timers: [] };
    const reduce = reduceMQ.matches;
    reels.forEach((r, k) => {
      const strip = r.firstElementChild;
      if (reduce) {
        pending.timers.push(setTimeout(() => { strip.innerHTML = cell(idx[k]); beep(440 + k * 110, 0.06); }, 150 * (k + 1)));
        return;
      }
      const n = 14 + k * 5;
      const seq = [lastSyms[k]];
      for (let j = 0; j < n; j++) seq.push(randSym());
      seq.push(idx[k]);
      strip.style.transition = 'none';
      strip.style.transform = 'translateY(0)';
      strip.innerHTML = seq.map(cell).join('');
      void strip.offsetHeight;
      strip.style.transition = `transform ${DUR[k]}ms cubic-bezier(.12,.68,.22,1.02)`;
      strip.style.transform = `translateY(${-(seq.length - 1) / seq.length * 100}%)`;
      pending.timers.push(setTimeout(() => beep(440 + k * 110, 0.06), DUR[k]));
    });
    pending.timers.push(setTimeout(settle, (reduce ? 150 * 3 : DUR[2]) + 60));
  }

  function restart() {
    if (spinning || st.bal >= BETS[0]) return;
    st.bal = START;
    if (st.bet > st.bal) st.bet = 5;
    save();
    shownBal = st.bal;
    machine.classList.remove('win');
    setMsg('slotRestarted', null, '');
    renderControls();
    spinBtn.focus();
  }

  // ----- Seite statt Overlay: direkt initialisieren -----
  function init() {
    st = load(); shownBal = st.bal;
    if (st.bet > st.bal) { const ok = BETS.filter(b => b <= st.bal); if (ok.length) st.bet = ok[ok.length - 1]; }
    showStatic(lastSyms);
    if (!lastMsg) setMsg(st.bal < BETS[0] ? 'slotBroke' : 'slotReady', null, '');
    renderSlot();
  }
  function isOpen() { return true; }
  // Beim Verlassen der Seite eine laufende Drehung sofort abschließen
  window.addEventListener('pagehide', () => { if (spinning) settle(); });

  spinBtn.addEventListener('click', spin);
  restartBtn.addEventListener('click', restart);
  betBtns.forEach(b => b.addEventListener('click', () => {
    const v = +b.dataset.bet;
    if (spinning || v > st.bal) return;
    st.bet = v; save(); renderControls();
  }));
  soundBtn.addEventListener('click', () => {
    st.sound = !st.sound; save(); renderControls();
    if (st.sound) beep(660, 0.08);
  });
  window.addEventListener('storage', (e) => { if (e.key === KEY && !spinning) { st = load(); shownBal = st.bal; renderControls(); } });

  init();
  window.fbLangHooks.push(renderSlot);

  // Test-/Analyse-Hooks (ändern keine Auszahlungslogik)
  window.fcSlot = {
    open: () => {}, close: () => {}, isOpen: () => true,
    force: (ids) => { forced = ids ? ids.map(id => SYMS.findIndex(s => s.id === id)) : null; },
    state: () => ({ bal: st.bal, shown: shownBal, bet: st.bet, spins: st.spins, best: st.best, sound: st.sound, spinning }),
    evaluate: (ids, bet) => evaluate(ids.map(id => SYMS.findIndex(s => s.id === id)), bet),
    simulate: (n, bet) => {
      bet = bet || 1; let paid = 0, wins = 0;
      for (let i = 0; i < n; i++) { const r = evaluate([randSym(), randSym(), randSym()], bet); paid += r.win; if (r.win) wins++; }
      return { spins: n, wagered: n * bet, paid, rtp: paid / (n * bet), hitRate: wins / n };
    },
    theoreticalRtp: () => {
      let r = 0;
      for (let a = 0; a < 6; a++) for (let b = 0; b < 6; b++) for (let c = 0; c < 6; c++)
        r += SYMS[a].w * SYMS[b].w * SYMS[c].w / TOTAL_W ** 3 * evaluate([a, b, c], 1).win;
      return r;
    },
    paytable: () => SYMS.map(s => ({ id: s.id, weight: s.w, three: s.three, two: s.two }))
  };
})();

