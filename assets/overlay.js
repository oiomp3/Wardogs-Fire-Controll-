// ---------- Frontbuch: Loadout-Roulette als Streamer-Overlay (/overlay/roulette/) ----------
// Parameter: channel, cmd (Standard roulette), cooldown (s, Standard 30), lang (de/en/es/fr), layout (grid/row), scale, sound=1
(function () {
  const D = window.FB_DATA;
  const root = document.getElementById('ov');
  if (!D || !root) return;
  const BY = Object.fromEntries(D.items.map(i => [i.id, i]));
  const Q = new URLSearchParams(location.search);
  const L = {
    de: { title: 'Loadout-Roulette', p: 'Primär', s: 'Sekundär', l: 'Werfer', h: 'Helm', v: 'Weste', r: 'Rig', b: 'Rucksack', e: 'Ausrüstung', none: 'Nichts',
      cost: 'Gesamtkosten', by: 'gedreht von {u}', chat: '{c} im Chat', click: 'Klicken zum Drehen', cd: 'Nächste Runde in {n} s', live: 'Chat verbunden', conn: 'Verbinde …', off: 'Chat getrennt' },
    en: { title: 'Loadout Roulette', p: 'Primary', s: 'Secondary', l: 'Launcher', h: 'Helmet', v: 'Vest', r: 'Rig', b: 'Backpack', e: 'Equipment', none: 'Nothing',
      cost: 'Total cost', by: 'spun by {u}', chat: 'Type {c} in chat', click: 'Click to spin', cd: 'Next round in {n} s', live: 'Chat connected', conn: 'Connecting …', off: 'Chat disconnected' },
    es: { title: 'Ruleta de loadouts', p: 'Primaria', s: 'Secundaria', l: 'Lanzador', h: 'Casco', v: 'Chaleco', r: 'Rig', b: 'Mochila', e: 'Equipo', none: 'Nada',
      cost: 'Coste total', by: 'girada por {u}', chat: 'Escribe {c} en el chat', click: 'Haz clic para girar', cd: 'Siguiente ronda en {n} s', live: 'Chat conectado', conn: 'Conectando…', off: 'Chat desconectado' },
    fr: { title: 'Roulette de loadout', p: 'Principale', s: 'Secondaire', l: 'Lanceur', h: 'Casque', v: 'Gilet', r: 'Rig', b: 'Sac à dos', e: 'Équipement', none: 'Rien',
      cost: 'Coût total', by: 'lancée par {u}', chat: 'Tape {c} dans le chat', click: 'Clique pour lancer', cd: 'Prochaine manche dans {n} s', live: 'Chat connecté', conn: 'Connexion…', off: 'Chat déconnecté' }
  };
  const lang = L[Q.get('lang')] ? Q.get('lang') : 'de';
  const T = (k, o) => String(L[lang][k]).replace(/\{(\w+)\}/g, (_, x) => (o && o[x] !== undefined ? o[x] : ''));
  const channel = (Q.get('channel') || '').toLowerCase().replace(/^#/, '').replace(/[^a-z0-9_]/g, '').slice(0, 25);
  const cmd = '!' + ((Q.get('cmd') || 'roulette').toLowerCase().replace(/^!+/, '').replace(/\s+/g, '').slice(0, 25) || 'roulette');
  const cdRaw = parseInt(Q.get('cooldown'), 10);
  const cooldown = Number.isFinite(cdRaw) ? Math.max(0, Math.min(3600, cdRaw)) : 30;
  const layout = Q.get('layout') === 'row' ? 'row' : 'grid';
  const scaleP = parseFloat(Q.get('scale'));
  const sound = Q.get('sound') === '1';
  const SIZE = { grid: [800, 450], row: [1280, 210] }[layout];
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const nf = n => Number(n).toLocaleString('de-DE');
  document.documentElement.lang = lang;

  // gleiche Walzen und Quoten wie /slots/
  const REELS = [['p', 'primary', 1 / 8], ['s', 'secondary', 1 / 4], ['l', 'launcher', 1 / 4],
    ['h', 'helmet', 1 / 4], ['v', 'vest', 1 / 4], ['r', 'rig', 1 / 4], ['b', 'backpack', 1 / 4], ['e', 'equip', 1 / 4]];
  const KEYS = REELS.map(r => r[0]);
  const NONE_P = Object.fromEntries(REELS.map(r => [r[0], r[2]]));
  const POOL = Object.fromEntries(REELS.map(([k, slot]) => [k, D.items.filter(i => i.slot === slot && !(k === 'e' && i.type === 'Fallschirm'))]));
  const rand = () => { try { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; } catch (e) { return Math.random(); } };
  const pick = A => A[Math.floor(rand() * A.length)];
  const roll = k => (!POOL[k].length || rand() < NONE_P[k] ? '' : pick(POOL[k]).id);
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  const CAT_EMO = { weapon: '🔫', armor: '🦺', equipment: '🧰', gear: '🎒' };
  function cell(id) {
    const i = BY[id];
    if (id === null) return '<div class="ov-cell ov-idle"><span class="ov-q">?</span></div>';
    if (!i) return `<div class="ov-cell ov-none"><span class="ov-x">❌</span><span class="ov-nm">${esc(T('none'))}</span></div>`;
    const im = i.img ? `<img class="ov-pic${i.cat === 'weapon' ? ' wide' : ''}" src="${esc(i.img)}" width="${i.cat === 'weapon' ? 128 : 64}" height="64" alt="">` : `<span class="ov-emo">${CAT_EMO[i.cat] || '•'}</span>`;
    return `<div class="ov-cell" data-id="${esc(i.id)}">${im}<span class="ov-nm">${esc(i.name)}</span></div>`;
  }
  const reel = (k, cls) => `<div class="ov-reel ${cls}" data-k="${k}"><span class="ov-lbl">${esc(T(k))}</span><div class="ov-win"><div class="ov-strip">${cell(null)}</div></div></div>`;
  root.className = 'ov ov-L-' + layout;
  root.style.width = SIZE[0] + 'px'; root.style.height = SIZE[1] + 'px';
  const statusHtml = `<div class="ov-status"><span class="ov-by" id="ovBy"></span><span class="ov-hint" id="ovHint"></span></div>`;
  const costHtml = `<div class="ov-cost"><small>${esc(T('cost'))}</small><b id="ovCost">–</b></div>`;
  const brand = '<div class="ov-brand">oiotv.de</div>';
  const conn = channel ? `<span class="ov-conn" id="ovConn" data-s="conn"><i></i><span>#${esc(channel)}</span></span>` : '';
  if (layout === 'grid') {
    root.innerHTML = `<div class="ov-head"><b class="ov-title">🎰 ${esc(T('title'))}</b>${conn}</div>${statusHtml}
<div class="ov-row ov-r1">${reel('p', 'big')}${reel('s', 'big')}${reel('l', 'big')}</div>
<div class="ov-row ov-r2">${reel('h', 'sm')}${reel('v', 'sm')}${reel('r', 'sm')}${reel('b', 'sm')}</div>
<div class="ov-row ov-r3">${reel('e', 'eq')}${costHtml}</div>${brand}`;
  } else {
    root.innerHTML = `<div class="ov-side"><b class="ov-title">🎰 ${esc(T('title'))}</b>${conn}${statusHtml}${costHtml}${brand}</div>
<div class="ov-row ov-reels">${KEYS.map(k => reel(k, 'sm')).join('')}</div>`;
  }
  const $ = id => document.getElementById(id);
  const stripEl = k => root.querySelector(`.ov-reel[data-k="${k}"] .ov-strip`);

  function fit() {
    const s = scaleP > 0 ? Math.min(scaleP, 6) : Math.min(innerWidth / SIZE[0], innerHeight / SIZE[1]);
    root.style.transform = `translate(-50%, -50%) scale(${s})`;
  }
  addEventListener('resize', fit); fit();

  let st = null, spinning = false, spins = 0, last = 0, by = '', hintT = 0, ac = null;
  function beep(f) {
    if (!sound) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const o = ac.createOscillator(), g = ac.createGain();
      o.frequency.value = f; o.type = 'triangle'; g.gain.setValueAtTime(.08, ac.currentTime); g.gain.exponentialRampToValueAtTime(.0001, ac.currentTime + .12);
      o.connect(g).connect(ac.destination); o.start(); o.stop(ac.currentTime + .13);
    } catch (e) {}
  }
  function hint() {
    const left = Math.ceil((last + cooldown * 1000 - Date.now()) / 1000);
    $('ovHint').textContent = spinning ? '' : (channel && last && left > 0 ? T('cd', { n: left }) : (channel ? T('chat', { c: cmd }) : T('click')));
    clearTimeout(hintT);
    if (channel && left > 0) hintT = setTimeout(hint, 1000);
  }
  function render() {
    $('ovBy').textContent = by ? T('by', { u: by }) : '';
    $('ovBy').hidden = !by;
    root.classList.toggle('spinning', spinning);
    if (st && !spinning) {
      let cost = 0, comm = false;
      KEYS.map(k => BY[st[k]]).filter(Boolean).forEach(i => { if (i.price && typeof i.price.v === 'number') { cost += i.price.v; if (i.price.f === 'c') comm = true; } });
      $('ovCost').textContent = nf(cost) + ' $' + (comm ? ' ⚠' : '');
      $('ovCost').dataset.v = cost;
    }
    hint();
  }
  function spinReel(k, final, dur, ix) {
    const strip = stripEl(k), win = strip.parentElement;
    if (!dur || !strip.animate) { strip.innerHTML = cell(final); return Promise.resolve(); }
    const P = POOL[k], n = 8 + Math.round(dur / 120);
    strip.innerHTML += Array.from({ length: n }, (_, x) => cell(x % 5 === 3 || !P.length ? '' : pick(P).id)).join('') + cell(final);
    const h = win.clientHeight, dist = (strip.children.length - 1) * h;
    win.classList.remove('land'); win.classList.add('spin');
    const a = strip.animate([{ transform: 'translateY(0)' }, { transform: `translateY(-${dist}px)` }], { duration: dur, easing: 'cubic-bezier(.12,.62,.18,1)', fill: 'forwards' });
    return a.finished.catch(() => {}).then(() => {
      strip.innerHTML = cell(final); a.cancel(); beep(520 + ix * 60);
      win.classList.remove('spin'); void win.offsetWidth; win.classList.add('land');
    });
  }
  async function spin(user, fromChat) {
    if (spinning) return false;
    if (fromChat && last && Date.now() - last < cooldown * 1000) { hint(); return false; }
    spinning = true; last = Date.now(); by = user || '';
    const next = {}; KEYS.forEach(k => { next[k] = roll(k); });
    render();
    const rm = reduced();
    await Promise.all(KEYS.map((k, ix) => spinReel(k, next[k], rm ? 0 : 700 + ix * 240, ix)));
    st = next; spinning = false; spins++;
    root.dataset.spins = spins;
    render();
    return true;
  }
  root.addEventListener('click', () => spin('', false));
  render();

  // ---------- Twitch-Chat (anonym, nur lesen) ----------
  let ws = null, backoff = 1000, retryT = 0, connState = 'conn';
  const nick = 'justinfan' + (10000 + Math.floor(rand() * 89999));
  function setConn(s) { connState = s; const el = $('ovConn'); if (el) { el.dataset.s = s; el.title = T(s === 'on' ? 'live' : s === 'off' ? 'off' : 'conn'); } }
  function clean(txt) { return txt.replace(/[\s\u034f\u200b-\u200d\u2060\ufeff]+$/u, '').replace(/\u{E0000}/gu, '').trim(); }
  function onLine(line) {
    let tags = {}, rest = line, prefix = '';
    if (rest[0] === '@') { const sp = rest.indexOf(' '); rest.slice(1, sp).split(';').forEach(kv => { const i = kv.indexOf('='); tags[kv.slice(0, i)] = kv.slice(i + 1); }); rest = rest.slice(sp + 1); }
    if (rest[0] === ':') { const sp = rest.indexOf(' '); prefix = rest.slice(1, sp); rest = rest.slice(sp + 1); }
    const sp = rest.indexOf(' '), command = sp < 0 ? rest : rest.slice(0, sp), params = sp < 0 ? '' : rest.slice(sp + 1);
    if (command === 'PING') { ws.send('PONG ' + params); return; }
    if (command === 'RECONNECT') { try { ws.close(); } catch (e) {} return; }
    if (command === '366' || (command === 'JOIN' && prefix.split('!')[0] === nick)) { setConn('on'); backoff = 1000; return; }
    if (command === 'PRIVMSG') {
      const i = params.indexOf(' :'); if (i < 0) return;
      const text = clean(params.slice(i + 2)).toLowerCase();
      if (text === cmd) spin(tags['display-name'] || prefix.split('!')[0], true);
    }
  }
  function connect() {
    clearTimeout(retryT); setConn('conn');
    try { ws = new WebSocket('wss://irc-ws.chat.twitch.tv:443'); } catch (e) { return retry(); }
    ws.onopen = () => { ws.send('CAP REQ :twitch.tv/tags'); ws.send('PASS SCHMOOPIIE'); ws.send('NICK ' + nick); ws.send('JOIN #' + channel); };
    ws.onmessage = e => String(e.data).split('\r\n').forEach(l => { if (l) onLine(l); });
    ws.onclose = () => { setConn('off'); retry(); };
    ws.onerror = () => {};
  }
  function retry() { clearTimeout(retryT); retryT = setTimeout(connect, backoff); backoff = Math.min(backoff * 2, 60000); }
  if (channel) connect();

  window.fbOverlay = { spin: () => spin('', false), state: () => (st ? Object.assign({}, st) : null), by: () => by, spins: () => spins, conn: () => connState,
    config: { channel, cmd, cooldown, lang, layout, sound, size: SIZE } };
})();
