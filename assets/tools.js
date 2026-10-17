// ---------- Frontbuch-Tools (Datenbank, Loadout, Tierlist) ----------
// Alle Werte kommen aus window.FB_DATA (assets/data.js, erzeugt aus fbsrc/data/wardogs.json).
(function () {
  const D = window.FB_DATA;
  if (!D) return;
  const $ = (s, r) => (r || document).querySelector(s);
  const BY = Object.fromEntries(D.items.map(i => [i.id, i]));
  const MONEY = ['unlock', 'price', 'reward'];
  const PCT = ['dr', 'supp'];
  const FIELD_ORDER = Object.keys(D.fields);
  const nf = n => Number(n).toLocaleString('de-DE');
  const esc = s => escapeHtml(String(s));
  const hooks = window.fbLangHooks;

  function srcLink(v) {
    const s = D.sources[v.s];
    if (!s) return '';
    return `<a class="fbt-src" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" title="${esc(s.title)}">[Q]</a>`;
  }
  function warn(v) {
    return v && v.f === 'c' ? `<span class="fbt-warn" role="img" title="${esc(t('tCommunity'))}" aria-label="${esc(t('tCommunity'))}">⚠</span>` : '';
  }
  function fmt(field, x) {
    if (typeof x === 'number') {
      if (MONEY.includes(field)) return x === 0 ? esc(t('tFree')) : nf(x) + ' $';
      if (PCT.includes(field)) return x + ' %';
      return nf(x);
    }
    return esc(x);
  }
  function unk() { return `<span class="fbt-unk">${esc(t('tUnknown'))}</span>`; }
  function has(item, f) { const v = item[f]; return !!(v && v.v !== undefined && v.v !== null); }
  function val(item, f, withSrc) {
    if (!has(item, f)) return unk();
    const v = item[f];
    return fmt(f, v.v) + warn(v) + (withSrc === false ? '' : ' ' + srcLink(v));
  }
  function num(item, f) { const v = item && item[f]; return v && typeof v.v === 'number' ? v.v : null; }
  function catName(c) { return D.cats[c] || c; }
  function money(n) { return nf(n) + ' $'; }

  // ======================================================== Datenbank
  (function db() {
    const tbl = $('#dbTable');
    if (!tbl) return;
    const q = $('#dbQ'), cat = $('#dbCat'), trk = $('#dbTrack'), body = $('#dbBody'), cnt = $('#dbCount');
    const detail = $('#dbDetail'), cmpBox = $('#dbCompare'), cmpMsg = $('#dbCmpMsg');
    let sortK = 'name', sortDir = 1;
    const sel = [];
    const params = new URLSearchParams(location.search);
    (params.get('cmp') || '').split(',').filter(id => BY[id]).slice(0, 3).forEach(id => sel.push(id));
    const norm = s => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    function sortVal(i, k) {
      if (k === 'name') return norm(i.name);
      if (k === 'cat') return norm(catName(i.cat) + ' ' + i.type);
      if (k === 'track') return has(i, 'track') ? norm(i.track.v) : null;
      const n = num(i, k);
      if (n !== null) return n;
      if (k === 'level' && has(i, 'level')) return 0; // „Standard“
      return null;
    }
    function rows() {
      const s = norm(q.value.trim());
      let list = D.items.filter(i => (cat.value === 'alle' || i.cat === cat.value) &&
        (trk.value === 'alle' || (has(i, 'track') && i.track.v === trk.value)) &&
        (!s || norm([i.name, i.type, catName(i.cat), i.note || '', has(i, 'cal') ? i.cal.v : ''].join(' ')).includes(s)));
      list.sort((a, b) => {
        const x = sortVal(a, sortK), y = sortVal(b, sortK);
        if (x === null && y === null) return a.name.localeCompare(b.name);
        if (x === null) return 1;
        if (y === null) return -1;
        return (x < y ? -1 : x > y ? 1 : 0) * sortDir || a.name.localeCompare(b.name);
      });
      return list;
    }
    function render() {
      const list = rows();
      body.innerHTML = list.map(i => `<tr data-id="${i.id}">
<td><input type="checkbox" class="fbt-cmp" value="${i.id}" ${sel.includes(i.id) ? 'checked' : ''} aria-label="${esc(t('tCompare'))}: ${esc(i.name)}"></td>
<td><button type="button" class="fbt-link" data-open="${i.id}">${esc(i.name)}</button></td>
<td>${esc(catName(i.cat))}<small>${esc(i.type)}</small></td>
<td>${val(i, 'track', false)}</td><td>${val(i, 'level', false)}</td><td>${val(i, 'unlock', false)}</td><td>${val(i, 'price', false)}</td></tr>`).join('');
      cnt.textContent = list.length ? t('tCount', { n: list.length }) : t('tNone');
      tbl.querySelectorAll('th[data-k]').forEach(th => {
        th.setAttribute('aria-sort', th.dataset.k === sortK ? (sortDir > 0 ? 'ascending' : 'descending') : 'none');
      });
      renderCompare();
    }
    function fieldRows(i) {
      return FIELD_ORDER.filter(f => has(i, f)).map(f => `<tr><th scope="row">${esc(D.fields[f])}</th><td>${val(i, f)}</td></tr>`).join('');
    }
    const LOK = { primary: 'p', secondary: 's', launcher: 'l', helmet: 'h', vest: 'v', backpack: 'b' };
    function loLink(i) {
      let q = '';
      if (LOK[i.slot]) q = LOK[i.slot] + '=' + i.id;
      else if (i.slot === 'equip') q = 'e=' + i.id + ':1';
      else if (i.cat === 'attachment' && i.for) q = 'p=' + i.for + '&a=' + i.id;
      return q ? `<p><a href="/tools/loadout/?${q}">${esc(t('tToLoadout'))}</a></p>` : '';
    }
    function openDetail(id) {
      const i = BY[id];
      if (!i) return;
      const srcs = [...new Set(FIELD_ORDER.filter(f => has(i, f)).map(f => i[f].s))];
      const compat = i.for && BY[i.for] ? `<p>${esc(t('tCompatOk'))}: <b>${esc(BY[i.for].name)}</b></p>` : (i.cat === 'attachment' ? `<p>${esc(t('tCompatUnknown'))}</p>` : '');
      const missing = FIELD_ORDER.filter(f => !has(i, f) && ['track', 'level', 'unlock', 'price'].includes(f)).map(f => D.fields[f]);
      detail.innerHTML = `<div class="fbt-detail-head"><h2 id="dbDetailH">${esc(i.name)}</h2><button type="button" class="fbt-btn ghost" id="dbDetailClose">${esc(t('tClose'))}</button></div>
<p class="fbt-sub">${esc(catName(i.cat))} · ${esc(i.type)}</p>
<div class="fb-tablewrap"><table class="fbt-kv"><tbody>${fieldRows(i) || `<tr><td>${unk()}</td></tr>`}</tbody></table></div>
${missing.length ? `<p class="fbt-sub">${esc(t('tMissingFields'))}: ${missing.map(esc).join(', ')}</p>` : ''}
${compat}${i.note ? `<p lang="de">${esc(i.note)}</p>` : ''}${loLink(i)}
<h3>${esc(t('tSources'))}</h3><ul class="fbt-srclist">${srcs.map(k => `<li><a href="${esc(D.sources[k].url)}" target="_blank" rel="noopener noreferrer">${esc(D.sources[k].title)}</a>${D.sources[k].type === 'community' ? ' ⚠' : ''}</li>`).join('') || '<li>–</li>'}</ul>`;
      detail.hidden = false;
      detail.dataset.id = id;
      $('#dbDetailClose').addEventListener('click', () => { detail.hidden = true; delete detail.dataset.id; });
      detail.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
    function renderCompare() {
      if (!sel.length) { cmpBox.hidden = true; return; }
      const items = sel.map(id => BY[id]);
      const fields = FIELD_ORDER.filter(f => items.some(i => has(i, f)));
      cmpBox.hidden = false;
      cmpBox.innerHTML = `<div class="fbt-detail-head"><h2>${esc(t('tCompare'))} (${items.length}/3)</h2><button type="button" class="fbt-btn ghost" id="dbCmpClear">${esc(t('tCompareClear'))}</button></div>
<div class="fb-tablewrap"><table class="fbt-cmp-table"><thead><tr><th></th>${items.map(i => `<th scope="col">${esc(i.name)}</th>`).join('')}</tr></thead><tbody>
<tr><th scope="row">${esc(t('tCat'))}</th>${items.map(i => `<td>${esc(catName(i.cat))} · ${esc(i.type)}</td>`).join('')}</tr>
${fields.map(f => `<tr><th scope="row">${esc(D.fields[f])}</th>${items.map(i => `<td>${val(i, f)}</td>`).join('')}</tr>`).join('')}
</tbody></table></div>`;
      $('#dbCmpClear').addEventListener('click', () => { sel.length = 0; cmpMsg.textContent = ''; render(); });
    }
    body.addEventListener('change', e => {
      const cb = e.target.closest('.fbt-cmp');
      if (!cb) return;
      const id = cb.value;
      if (cb.checked) {
        if (sel.length >= 3) { cb.checked = false; cmpMsg.textContent = t('tCompareMax'); return; }
        sel.push(id);
      } else sel.splice(sel.indexOf(id), 1);
      cmpMsg.textContent = '';
      renderCompare();
    });
    body.addEventListener('click', e => { const b = e.target.closest('[data-open]'); if (b) openDetail(b.dataset.open); });
    tbl.querySelectorAll('th[data-k] button').forEach(b => b.addEventListener('click', () => {
      const k = b.parentElement.dataset.k;
      if (k === sortK) sortDir = -sortDir; else { sortK = k; sortDir = 1; }
      render();
    }));
    [q, cat, trk].forEach(el => el.addEventListener('input', render));
    if (params.get('q')) q.value = params.get('q');
    render();
    if (params.get('id')) openDetail(params.get('id'));
    hooks.push(() => { render(); if (!detail.hidden && detail.dataset.id) openDetail(detail.dataset.id); });
  })();

  // ======================================================== Loadout-Planer
  (function loadout() {
    const root = $('#loRoot');
    if (!root) return;
    const KEY = 'fbLoadout', SKEY = 'fbLoadoutSaved', MAXQ = 9, MAXKITS = 12;
    const el = id => document.getElementById(id);
    const SLOTS = { p: ['loPrim', 'primary'], s: ['loSec', 'secondary'], l: ['loLaunch', 'launcher'], h: ['loHelm', 'helmet'], v: ['loVest', 'vest'], b: ['loPack', 'backpack'] };
    const SK = Object.keys(SLOTS);
    const GROUP = { p: 'w', s: 'w', l: 'w', h: 'r', v: 'r', b: 'r' };
    const selK = el('loKlasse'), attBox = el('loAtt'), attWrap = el('loAttWrap'), eqBox = el('loEq'), sum = el('loSum'), msg = el('loMsg');
    const budgetIn = el('loBudget'), baseBtn = el('loBase');
    const EQ = D.items.filter(i => i.slot === 'equip');
    const PRESETS = D.presets || [];
    const empty = () => ({ k: '', p: '', s: '', l: '', v: '', h: '', b: '', a: [], e: {} });
    let st = empty(), base = null;

    const priceTxt = i => { const p = num(i, 'price'); return p === null ? t('tNoPrice') : (p === 0 ? t('tFree') : money(p)); };
    const cw = v => v && v.f === 'c' ? ' ⚠' : '';
    const kg = n => (Math.round(n * 100) / 100).toLocaleString('de-DE') + ' kg';
    const maxQ = i => i.type === 'Fallschirm' ? 1 : MAXQ;
    function opt(i, cur) { return `<option value="${i.id}"${i.id === cur ? ' selected' : ''}>${esc(i.name)} · ${esc(priceTxt(i))}${cw(i.price)}</option>`; }
    function fillSel(sel, slot, cur) {
      const list = D.items.filter(i => i.slot === slot);
      const none = `<option value=""${!cur ? ' selected' : ''}>${esc(t('tNoneSel'))}</option>`;
      if (!st.k) { sel.innerHTML = none + list.map(i => opt(i, cur)).join(''); return; }
      const mine = list.filter(i => has(i, 'track') && i.track.v === st.k), other = list.filter(i => !mine.includes(i));
      sel.innerHTML = none + (mine.length ? `<optgroup label="${esc(st.k)}">${mine.map(i => opt(i, cur)).join('')}</optgroup>` : '') +
        (other.length ? `<optgroup label="${esc(t('tOtherTrack'))}">${other.map(i => opt(i, cur)).join('')}</optgroup>` : '');
    }
    function lvTxt(i) {
      if (!has(i, 'level')) return has(i, 'track') ? esc(i.track.v) + warn(i.track) : '';
      if (i.level.v === 'Standard') return esc(t('tStd')) + warn(i.level);
      return (has(i, 'track') ? esc(i.track.v) + ' ' : '') + esc(t('tLv')) + ' ' + esc(i.level.v) + warn(i.level);
    }
    function meta(i) {
      if (!i) return '';
      const parts = [`<span class="lo-tag price">${has(i, 'price') ? fmt('price', i.price.v) + warn(i.price) + srcLink(i.price) : unk()}</span>`];
      const lv = lvTxt(i); if (lv) parts.push(`<span class="lo-tag">${lv}</span>`);
      if (has(i, 'unlock') && i.unlock.v > 0) parts.push(`<span class="lo-tag">🔓 ${money(i.unlock.v)}${warn(i.unlock)}</span>`);
      parts.push(`<span class="lo-tag">⚖ ${has(i, 'weight') ? kg(i.weight.v) + warn(i.weight) + srcLink(i.weight) : unk()}</span>`);
      return parts.join('') + `<a class="lo-db" href="/tools/datenbank/?id=${i.id}" aria-label="${esc(t('tToDb'))}">ⓘ</a>`;
    }
    function allowedAtt() {
      return D.items.filter(i => i.cat === 'attachment' && (!i.for || i.for === st.p))
        .sort((a, b) => (a.for ? 0 : 1) - (b.for ? 0 : 1) || a.name.localeCompare(b.name));
    }
    function renderPresets() {
      el('loPresets').innerHTML = PRESETS.map(p => {
        const c = totals(fromPreset(p));
        return `<button type="button" class="lo-preset" data-preset="${p.id}"><b lang="de">${esc(p.name)}</b><span class="lo-tag">${esc(p.track)}</span><span class="lo-preset-cost">${money(c.cost)}${c.comm ? ' ⚠' : ''}</span><small lang="de">${esc(p.desc)}</small></button>`;
      }).join('');
    }
    function renderInputs() {
      selK.value = st.k;
      SK.forEach(k => { const [id, slot] = SLOTS[k]; fillSel(el(id), slot, st[k]); });
      const atts = allowedAtt();
      st.a = st.a.filter(id => atts.some(i => i.id === id));
      attWrap.hidden = !st.p;
      attBox.innerHTML = !st.p ? '' : (atts.length ? atts.map(i => `<button type="button" class="lo-chip" data-att="${i.id}" aria-pressed="${st.a.includes(i.id)}"${i.for ? '' : ` title="${esc(t('tCompatUnknown'))}"`}><span>${esc(i.name)}</span><small>${esc(priceTxt(i))}${cw(i.price)}${i.for ? '' : ' · ?'}</small></button>`).join('')
        : `<p class="fbt-sub">${esc(t('tNoAtt'))}</p>`);
      const types = [...new Set(EQ.map(i => i.type))];
      const openG = new Set([...eqBox.querySelectorAll('details[open]')].map(d => d.dataset.ty));
      eqBox.innerHTML = types.map(ty => { const L = EQ.filter(i => i.type === ty), sel = L.reduce((x, i) => x + (st.e[i.id] || 0), 0);
        return `<details class="lo-eqgrp" data-ty="${esc(ty)}"${sel || openG.has(ty) ? ' open' : ''}><summary><span lang="de">${esc(ty)}</span><span class="lo-eqcnt" data-cnt="${esc(ty)}">${sel || ''}</span></summary>${L.map(i => {
        const n = st.e[i.id] || 0;
        return `<div class="lo-eq${n ? ' on' : ''}"><span class="lo-eq-name"><span>${esc(i.name)}</span><small>${esc(priceTxt(i))}${cw(i.price)}${has(i, 'weight') ? ' · ' + kg(i.weight.v) + cw(i.weight) : ''}</small></span>
<span class="lo-step" role="group" aria-label="${esc(t('tQty'))}: ${esc(i.name)}"><button type="button" data-eq="${i.id}" data-d="-1" aria-label="− ${esc(i.name)}"${n ? '' : ' disabled'}>−</button><output data-q="${i.id}">${n}</output><button type="button" data-eq="${i.id}" data-d="1" aria-label="+ ${esc(i.name)}"${n >= maxQ(i) ? ' disabled' : ''}>+</button></span></div>`;
      }).join('')}</details>`; }).join('');
      renderMeta();
    }
    function renderMeta() { SK.forEach(k => { el(SLOTS[k][0] + 'Meta').innerHTML = meta(BY[st[k]]); el(SLOTS[k][0]).closest('.lo-slot').classList.toggle('on', !!st[k]); }); }
    function chosen(s) {
      const out = [];
      SK.forEach(k => { if (s[k] && BY[s[k]]) out.push([BY[s[k]], 1, GROUP[k]]); });
      s.a.forEach(id => BY[id] && out.push([BY[id], 1, 'a']));
      Object.entries(s.e).forEach(([id, n]) => { if (BY[id] && n > 0) out.push([BY[id], n, 'e']); });
      return out;
    }
    function totals(s) {
      const c = chosen(s), g = { w: [0, 0], a: [0, 0], r: [0, 0], e: [0, 0] }, lv = {};
      let cost = 0, unk = 0, unlock = 0, w = 0, wn = 0, cnt = 0, lvUnk = 0, comm = false, wComm = false;
      c.forEach(([i, n, grp]) => {
        cnt += n;
        const p = num(i, 'price'), u = num(i, 'unlock'), wt = num(i, 'weight');
        if (p === null) unk++; else { cost += p * n; g[grp][0] += p * n; if (i.price.f === 'c') comm = true; }
        if (u !== null) unlock += u;
        if (wt !== null) { w += wt * n; wn++; g[grp][1] += wt * n; if (i.weight.f === 'c') wComm = true; }
        if (has(i, 'level') && typeof i.level.v === 'number' && has(i, 'track')) {
          const tr = i.track.v;
          if (!lv[tr] || lv[tr][0] < i.level.v) lv[tr] = [i.level.v, i.name];
        } else if (!(has(i, 'level') && i.level.v === 'Standard')) lvUnk++;
      });
      return { c, g, lv, cost, unk, unlock, w, wn, n: c.length, cnt, lvUnk, comm, wComm };
    }
    function delta(cur, old, f) {
      if (!base) return '';
      const d = Math.round((cur - old) * 100) / 100;
      if (!d) return '±0';
      return (d > 0 ? '+' : '−') + f(Math.abs(d));
    }
    function renderSum() {
      const T = totals(st), B = base ? totals(base) : null;
      el('loTotal').textContent = money(T.cost) + (T.comm ? ' ⚠' : ''); el('loTotal').dataset.v = T.cost;
      el('loUnlock').textContent = money(T.unlock); el('loUnlock').dataset.v = T.unlock;
      const wEl = el('loWeight');
      wEl.textContent = T.wn ? kg(T.w) + (T.wComm ? ' ⚠' : '') : t('tUnknown'); wEl.dataset.v = T.w;
      el('loWeightN').textContent = T.n ? t('tWeightKnown', { n: T.wn, m: T.n }) : '';
      const u = el('loUnknown'); u.hidden = !T.unk; u.textContent = T.unk ? t('tUnknownPrices', { n: T.unk }) : '';
      el('loDTotal').textContent = B ? delta(T.cost, B.cost, money) : '';
      el('loDUnlock').textContent = B ? delta(T.unlock, B.unlock, money) : '';
      el('loDWeight').textContent = B ? delta(T.w, B.w, kg) : '';
      root.classList.toggle('has-base', !!B);
      el('loStripCost').textContent = money(T.cost); el('loStripW').textContent = T.wn ? kg(T.w) : '–'; el('loStripN').textContent = T.cnt;
      // Budget
      const bud = parseInt(budgetIn.value, 10), bo = el('loBudgetOut');
      if (bud > 0 && T.cost > 0) {
        const over = T.cost - bud;
        bo.className = 'lo-budget-out ' + (over > 0 ? 'bad' : 'ok');
        bo.textContent = over > 0 ? t('tBudgetOver', { n: money(over) }) : t('tBudgetLives', { n: Math.floor(bud / T.cost) });
      } else { bo.textContent = ''; bo.className = 'lo-budget-out'; }
      // Balken
      const G = [['w', 'tBarWeapons'], ['a', 'tBarAtt'], ['r', 'tBarArmor'], ['e', 'tBarEquip']];
      el('loBars').innerHTML = T.n ? G.map(([k, lab]) => {
        const [c, w] = T.g[k], pct = T.cost ? Math.round(c / T.cost * 100) : 0;
        return `<div class="lo-barrow"><span>${esc(t(lab))}</span><span class="lo-bar"><i style="width:${pct}%"></i></span><b>${money(c)}</b><small>${w ? kg(w) : '–'}</small></div>`;
      }).join('') : '';
      // Level
      const tr = Object.keys(T.lv).sort();
      el('loLevels').innerHTML = !T.n ? `<p class="fbt-sub">${esc(t('tEmptyLoadout'))}</p>` :
        (tr.length ? tr.map(k => `<span class="lo-lvl" title="${esc(T.lv[k][1])}"><b>${esc(k)}</b> ${esc(t('tLv'))} ${T.lv[k][0]}</span>`).join('') : `<p class="fbt-sub">${esc(t('tNoLevel'))}</p>`) +
        (T.lvUnk ? `<p class="fbt-sub">${esc(t('tLevelUnknown', { n: T.lvUnk }))}</p>` : '');
      // Liste
      sum.innerHTML = T.n ? `<div class="fb-tablewrap"><table class="fbt-kv lo-list"><tbody>${T.c.map(([i, n]) => {
        const p = num(i, 'price');
        return `<tr><td>${esc(i.name)}${n > 1 ? ' × ' + n : ''}</td><td>${p === null ? unk() : fmt('price', p * n) + warn(i.price)}</td><td>${has(i, 'weight') ? kg(i.weight.v * n) + warn(i.weight) : unk()}</td></tr>`;
      }).join('')}</tbody></table></div>` : `<p class="fbt-sub">${esc(t('tEmptyLoadout'))}</p>`;
    }
    function encode(s) {
      s = s || st;
      const p = new URLSearchParams();
      ['k'].concat(SK).forEach(k => s[k] && p.set(k, s[k]));
      if (s.a.length) p.set('a', s.a.join(','));
      const e = Object.entries(s.e).filter(([, n]) => n > 0).map(([id, n]) => id + ':' + n);
      if (e.length) p.set('e', e.join(','));
      return p.toString();
    }
    function decode(str) {
      const p = new URLSearchParams(str), s = empty();
      const okSlot = (id, slot) => id && BY[id] && BY[id].slot === slot ? id : '';
      const tracks = [...selK.options].map(o => o.value);
      s.k = tracks.includes(p.get('k')) ? p.get('k') : '';
      SK.forEach(k => { s[k] = okSlot(p.get(k), SLOTS[k][1]); });
      if (!s.l && okSlot(p.get('s'), 'launcher')) s.l = p.get('s'); // alte Links: Werfer im Sekundär-Slot
      s.a = [...new Set((p.get('a') || '').split(',').filter(id => BY[id] && BY[id].cat === 'attachment'))];
      (p.get('e') || '').split(',').forEach(x => { const [id, n] = x.split(':'); if (!BY[id] || BY[id].slot !== 'equip') return; const q = Math.max(0, Math.min(maxQ(BY[id]), parseInt(n, 10) || 0)); if (q) s.e[id] = q; });
      if (s.a.length) { const ok = new Set(D.items.filter(i => i.cat === 'attachment' && (!i.for || i.for === s.p)).map(i => i.id)); s.a = s.p ? s.a.filter(id => ok.has(id)) : []; }
      return s;
    }
    function fromPreset(p) {
      const s = empty();
      s.k = p.track || '';
      SK.forEach(k => { if (p[k]) s[k] = p[k]; });
      s.a = (p.a || []).slice(); s.e = Object.assign({}, p.e || {});
      return s;
    }
    function url(s) { const q = encode(s); return location.origin + location.pathname + (q ? '?' + q : ''); }
    function save() {
      const qs = encode();
      try { localStorage.setItem(KEY, qs); } catch (e) {}
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
      el('loLink').value = url();
    }
    function update(full) { if (full) renderInputs(); else renderMeta(); renderSum(); save(); }
    // ---- gespeicherte Loadouts
    function store() { try { const x = JSON.parse(localStorage.getItem(SKEY) || '{}'); return { kits: Array.isArray(x.kits) ? x.kits : [], budget: x.budget || '' }; } catch (e) { return { kits: [], budget: '' }; } }
    function putStore(x) { try { localStorage.setItem(SKEY, JSON.stringify(x)); } catch (e) {} }
    function renderSaved() {
      const kits = store().kits;
      el('loSavedList').innerHTML = kits.length ? kits.map((k, ix) => {
        const c = totals(decode(k.q));
        return `<li><span><b>${esc(k.n)}</b><small>${money(c.cost)}${c.wn ? ' · ' + kg(c.w) : ''}</small></span><button type="button" class="fbt-btn ghost" data-load="${ix}">${esc(t('tLoad'))}</button><button type="button" class="fbt-btn ghost" data-del="${ix}" aria-label="${esc(t('tDelete'))}: ${esc(k.n)}">✕</button></li>`;
      }).join('') : `<li class="fbt-sub">${esc(t('tSavedNone'))}</li>`;
    }
    el('loSave').addEventListener('click', () => {
      const x = store();
      const name = (el('loSaveName').value.trim() || t('tUntitled') + ' ' + (x.kits.length + 1)).slice(0, 40);
      const ix = x.kits.findIndex(k => k.n === name);
      if (ix < 0 && x.kits.length >= MAXKITS) { msg.textContent = t('tSavedMax'); return; }
      if (ix >= 0) x.kits[ix].q = encode(); else x.kits.push({ n: name, q: encode() });
      putStore(x); el('loSaveName').value = ''; msg.textContent = t('tSavedOk', { n: name }); renderSaved();
    });
    el('loSavedList').addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      const x = store();
      if (b.dataset.load !== undefined) { const k = x.kits[+b.dataset.load]; if (k) { st = decode(k.q); msg.textContent = ''; update(true); } }
      else if (b.dataset.del !== undefined) { x.kits.splice(+b.dataset.del, 1); putStore(x); renderSaved(); }
    });
    // ---- Events
    selK.addEventListener('change', () => { st.k = selK.value; update(true); });
    SK.forEach(k => el(SLOTS[k][0]).addEventListener('change', e => { st[k] = e.target.value; update(k === 'p'); }));
    attBox.addEventListener('click', e => {
      const b = e.target.closest('[data-att]'); if (!b) return;
      const id = b.dataset.att, on = st.a.includes(id);
      st.a = on ? st.a.filter(x => x !== id) : st.a.concat(id);
      b.setAttribute('aria-pressed', String(!on));
      update(false);
    });
    eqBox.addEventListener('click', e => {
      const b = e.target.closest('[data-eq]'); if (!b) return;
      const i = BY[b.dataset.eq], n = Math.max(0, Math.min(maxQ(i), (st.e[i.id] || 0) + (+b.dataset.d)));
      if (n) st.e[i.id] = n; else delete st.e[i.id];
      const row = b.closest('.lo-eq');
      row.querySelector('output').textContent = n; row.classList.toggle('on', n > 0);
      row.querySelector('[data-d="-1"]').disabled = !n; row.querySelector('[data-d="1"]').disabled = n >= maxQ(i);
      const g = row.closest('details'), cnt = EQ.filter(x => x.type === i.type).reduce((x, y) => x + (st.e[y.id] || 0), 0);
      g.querySelector('.lo-eqcnt').textContent = cnt || '';
      update(false);
    });
    el('loPresets').addEventListener('click', e => {
      const b = e.target.closest('[data-preset]'); if (!b) return;
      const p = PRESETS.find(x => x.id === b.dataset.preset); if (!p) return;
      st = fromPreset(p); msg.textContent = t('tPresetApplied', { n: p.name }); update(true);
    });
    budgetIn.addEventListener('input', () => { const x = store(); x.budget = budgetIn.value; putStore(x); renderSum(); });
    baseBtn.addEventListener('click', () => {
      base = base ? null : JSON.parse(JSON.stringify(st));
      baseBtn.setAttribute('aria-pressed', String(!!base));
      baseBtn.textContent = t(base ? 'tCompareOn' : 'tCompareBase');
      msg.textContent = base ? t('tBaseSet') : '';
      renderSum();
    });
    el('loReset').addEventListener('click', () => { st = empty(); msg.textContent = ''; update(true); });
    el('loShare').addEventListener('click', async () => {
      const u = url();
      el('loLink').value = u;
      try { await navigator.clipboard.writeText(u); msg.textContent = t('tCopied'); }
      catch (e) { el('loLink').focus(); el('loLink').select(); msg.textContent = ''; }
    });
    let stored = '';
    try { stored = localStorage.getItem(KEY) || ''; } catch (e) {}
    st = decode(location.search.length > 1 ? location.search : stored);
    budgetIn.value = store().budget || '';
    renderPresets(); renderSaved(); update(true);
    hooks.push(() => { renderPresets(); renderInputs(); renderSum(); renderSaved(); baseBtn.textContent = t(base ? 'tCompareOn' : 'tCompareBase'); });
  })();

  // ======================================================== Tierlist
  (function tier() {
    const root = $('#tlRoot');
    if (!root) return;
    const T = D.tierlist, chips = $('#tlChips');
    let cur = 'alle';
    function render() {
      root.innerHTML = T.classes.filter((c, ix) => cur === 'alle' || String(ix) === cur).map(c => {
        const tiers = [...new Set(c.tiers.map(r => r[0]))];
        return `<section class="fbt-tierclass"><h2>${esc(c.name)}</h2>${tiers.map(tr => `<div class="fbt-tierrow"><div class="fbt-tier t-${tr === '–' ? 'x' : tr}" aria-label="Tier ${esc(tr)}">${esc(tr)}</div><div class="fbt-tieritems">
${c.tiers.filter(r => r[0] === tr).map(([, id, why, prov]) => `<details class="fbt-tieritem"><summary>${esc(BY[id].name)}${prov ? ` <span class="fbt-badge">${esc(t('tProv'))}</span>` : ''}</summary><p lang="de">${esc(why)}</p><a href="/tools/datenbank/?id=${id}">${esc(t('tToDb'))}</a></details>`).join('')}</div></div>`).join('')}</section>`;
      }).join('');
    }
    chips.addEventListener('click', e => {
      const b = e.target.closest('.fb-chip'); if (!b) return;
      cur = b.dataset.c;
      chips.querySelectorAll('.fb-chip').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      render();
    });
    render();
    hooks.push(render);
  })();

})();
