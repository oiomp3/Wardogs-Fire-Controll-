// ---------- Frontbuch-Tools (Datenbank, Loadout, Tierlist, Ballistik, Patchnotes) ----------
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
${compat}${i.note ? `<p lang="de">${esc(i.note)}</p>` : ''}
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
    const KEY = 'fbLoadout';
    const el = id => document.getElementById(id);
    const selK = el('loKlasse'), selP = el('loPrim'), selS = el('loSec'), selV = el('loVest'), selH = el('loHelm'), selB = el('loPack');
    const attBox = el('loAtt'), eqBox = el('loEq'), sum = el('loSum'), msg = el('loMsg');
    const W = D.items.filter(i => i.cat === 'weapon');
    const EQ = D.items.filter(i => i.slot === 'equip');
    let st = { k: '', p: '', s: '', v: '', h: '', b: '', a: [], e: {} };

    function priceTxt(i) { const p = num(i, 'price'); return p === null ? t('tNoPrice') : (p === 0 ? t('tFree') : money(p)); }
    function opt(i, cur) { return `<option value="${i.id}"${i.id === cur ? ' selected' : ''}>${esc(i.name)} – ${esc(priceTxt(i))}${i.price && i.price.f === 'c' ? ' ⚠' : ''}</option>`; }
    function none(cur) { return `<option value=""${!cur ? ' selected' : ''}>${esc(t('tNoneSel'))}</option>`; }
    function fillWeapons(sel, slot, cur) {
      const list = W.filter(i => i.slot === slot);
      if (!st.k) { sel.innerHTML = none(cur) + list.map(i => opt(i, cur)).join(''); return; }
      const mine = list.filter(i => has(i, 'track') && i.track.v === st.k), other = list.filter(i => !mine.includes(i));
      sel.innerHTML = none(cur) + (mine.length ? `<optgroup label="${esc(st.k)}">${mine.map(i => opt(i, cur)).join('')}</optgroup>` : '') +
        `<optgroup label="${esc(t('tOtherTrack'))}">${other.map(i => opt(i, cur)).join('')}</optgroup>`;
    }
    function fillSimple(sel, slot, cur) { sel.innerHTML = none(cur) + D.items.filter(i => i.slot === slot).map(i => opt(i, cur)).join(''); }
    function allowedAtt() { return D.items.filter(i => i.cat === 'attachment' && (!i.for || i.for === st.p)); }
    function renderInputs() {
      selK.value = st.k;
      fillWeapons(selP, 'primary', st.p); fillWeapons(selS, 'secondary', st.s);
      fillSimple(selV, 'vest', st.v); fillSimple(selH, 'helmet', st.h); fillSimple(selB, 'backpack', st.b);
      const atts = allowedAtt().sort((a, b) => (a.for ? 0 : 1) - (b.for ? 0 : 1) || a.name.localeCompare(b.name));
      st.a = st.a.filter(id => atts.some(i => i.id === id));
      attBox.innerHTML = st.p ? atts.map(i => `<label class="fbt-check"><input type="checkbox" value="${i.id}"${st.a.includes(i.id) ? ' checked' : ''}> <span>${esc(i.name)} <small>${esc(priceTxt(i))} · ${esc(i.for ? t('tCompatOk') : t('tCompatUnknown'))}</small></span></label>`).join('')
        : `<p class="fbt-sub">${esc(t('tPickPrimary'))}</p>`;
      eqBox.innerHTML = EQ.map(i => `<label class="fbt-qty"><span>${esc(i.name)} <small>${esc(priceTxt(i))}${i.price && i.price.f === 'c' ? ' ⚠' : ''}</small></span><input type="number" min="0" max="9" step="1" inputmode="numeric" data-id="${i.id}" value="${st.e[i.id] || 0}" aria-label="${esc(t('tQty'))}: ${esc(i.name)}"></label>`).join('');
    }
    function chosen() {
      const out = [];
      ['p', 's', 'v', 'h', 'b'].forEach(k => { if (st[k] && BY[st[k]]) out.push([BY[st[k]], 1]); });
      st.a.forEach(id => BY[id] && out.push([BY[id], 1]));
      Object.entries(st.e).forEach(([id, n]) => { if (BY[id] && n > 0) out.push([BY[id], n]); });
      return out;
    }
    function renderSum() {
      const c = chosen();
      let total = 0, unknownP = 0, unlock = 0, unknownU = 0, comm = false, weight = 0, unknownW = 0;
      const rowsH = c.map(([i, n]) => {
        const p = num(i, 'price'), u = num(i, 'unlock'), w = num(i, 'weight');
        if (p === null) unknownP++; else { total += p * n; if (i.price.f === 'c') comm = true; }
        if (u !== null) unlock += u; else if (!(has(i, 'level') && i.level.v === 'Standard')) unknownU++;
        if (w === null) unknownW++; else weight += w * n;
        return `<tr><td>${esc(i.name)}${n > 1 ? ' × ' + n : ''}</td><td>${p === null ? unk() : fmt('price', p * n) + warn(i.price)}</td></tr>`;
      }).join('');
      sum.innerHTML = c.length ? `<div class="fb-tablewrap"><table class="fbt-kv"><tbody>${rowsH}</tbody></table></div>
<p class="fbt-total"><span>${esc(t('tTotal'))}</span><b id="loTotal" data-v="${total}">${money(total)}</b>${comm ? ' ' + warn({ f: 'c' }) : ''}</p>
${unknownP ? `<p class="fbt-sub" id="loUnknown">${esc(t('tUnknownPrices', { n: unknownP }))}</p>` : ''}
<p class="fbt-total small"><span>${esc(t('tUnlockSum'))}</span><b id="loUnlock" data-v="${unlock}">${money(unlock)}</b></p>
${unknownU ? `<p class="fbt-sub">${esc(t('tUnknownUnlocks', { n: unknownU }))}</p>` : ''}
<p class="fbt-total small"><span>${esc(t('tWeight'))}</span><b id="loWeight">${unknownW ? esc(t('tUnknown')) : nf(weight) + ' kg'}</b></p>
${unknownW ? `<p class="fbt-sub">${esc(t('tWeightNote'))}</p>` : ''}` : `<p class="fbt-sub">${esc(t('tEmptyLoadout'))}</p>`;
    }
    function encode() {
      const p = new URLSearchParams();
      ['k', 'p', 's', 'v', 'h', 'b'].forEach(k => st[k] && p.set(k, st[k]));
      if (st.a.length) p.set('a', st.a.join(','));
      const e = Object.entries(st.e).filter(([, n]) => n > 0).map(([id, n]) => id + ':' + n);
      if (e.length) p.set('e', e.join(','));
      return p.toString();
    }
    function decode(str) {
      const p = new URLSearchParams(str), s = { k: '', p: '', s: '', v: '', h: '', b: '', a: [], e: {} };
      const okSlot = (id, slot) => BY[id] && BY[id].slot === slot ? id : '';
      const tracks = [...selK.options].map(o => o.value);
      s.k = tracks.includes(p.get('k')) ? p.get('k') : '';
      s.p = okSlot(p.get('p'), 'primary'); s.s = okSlot(p.get('s'), 'secondary');
      s.v = okSlot(p.get('v'), 'vest'); s.h = okSlot(p.get('h'), 'helmet'); s.b = okSlot(p.get('b'), 'backpack');
      s.a = (p.get('a') || '').split(',').filter(id => BY[id] && BY[id].cat === 'attachment');
      (p.get('e') || '').split(',').forEach(x => { const [id, n] = x.split(':'); const q = Math.max(0, Math.min(9, parseInt(n, 10) || 0)); if (BY[id] && BY[id].slot === 'equip' && q) s.e[id] = q; });
      return s;
    }
    function save() {
      const qs = encode();
      try { localStorage.setItem(KEY, qs); } catch (e) {}
      history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
      el('loLink').value = location.origin + location.pathname + (qs ? '?' + qs : '');
    }
    function update(full) { if (full) renderInputs(); renderSum(); save(); }
    selK.addEventListener('change', () => { st.k = selK.value; update(true); });
    selP.addEventListener('change', () => { st.p = selP.value; update(true); });
    [[selS, 's'], [selV, 'v'], [selH, 'h'], [selB, 'b']].forEach(([s, k]) => s.addEventListener('change', () => { st[k] = s.value; update(false); }));
    attBox.addEventListener('change', e => { st.a = [...attBox.querySelectorAll('input:checked')].map(x => x.value); update(false); });
    eqBox.addEventListener('input', e => {
      const inp = e.target.closest('input[data-id]'); if (!inp) return;
      const n = Math.max(0, Math.min(9, parseInt(inp.value, 10) || 0));
      if (n) st.e[inp.dataset.id] = n; else delete st.e[inp.dataset.id];
      update(false);
    });
    el('loReset').addEventListener('click', () => { st = decode(''); msg.textContent = ''; update(true); });
    el('loShare').addEventListener('click', async () => {
      const url = location.origin + location.pathname + (encode() ? '?' + encode() : '');
      try { await navigator.clipboard.writeText(url); msg.textContent = t('tCopied'); }
      catch (e) { msg.textContent = url; }
      el('loLink').value = url;
    });
    let stored = '';
    try { stored = localStorage.getItem(KEY) || ''; } catch (e) {}
    st = decode(location.search.length > 1 ? location.search : stored);
    update(true);
    hooks.push(() => { renderInputs(); renderSum(); });
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

  // ======================================================== Ballistik
  (function bal() {
    const root = $('#baRoot');
    if (!root) return;
    const el = id => document.getElementById(id);
    const f = { dmg: el('baDmg'), rpm: el('baRpm'), hp: el('baHp'), armor: el('baArmor'), apct: el('baArmorPct'), zone: el('baZone'), dist: el('baDist'), fs: el('baFs'), fe: el('baFe'), fmin: el('baFmin') };
    const item = el('baItem'), out = el('baOut');
    // Presets nur für Waffen mit belegtem Schaden UND Feuerrate
    const W = D.items.filter(i => i.cat === 'weapon');
    function fillItems() {
      const ok = W.filter(i => has(i, 'dmg') && has(i, 'rpm'));
      item.innerHTML = `<option value="">${esc(t('tCustom'))}</option>` +
        (ok.length ? `<optgroup label="${esc(t('tSourced'))}">${ok.map(i => `<option value="${i.id}">${esc(i.name)}</option>`).join('')}</optgroup>` : '') +
        `<optgroup label="${esc(t('tMissing'))}">${W.filter(i => !ok.includes(i)).map(i => `<option value="${i.id}" disabled>${esc(i.name)}</option>`).join('')}</optgroup>`;
    }
    const armors = D.items.filter(i => i.slot === 'vest' && has(i, 'dr'));
    function fillArmor() {
      const cur = f.armor.value;
      f.armor.innerHTML = `<option value="0">${esc(t('tArmorNone'))}</option>` + armors.map(i => `<option value="${i.id}">${esc(i.name)} – ${i.dr.v} %</option>`).join('') + `<option value="custom">${esc(t('tArmorCustom'))}</option>`;
      if (cur) f.armor.value = cur;
    }
    const n = x => { const v = parseFloat(String(x.value).replace(',', '.')); return isFinite(v) ? v : NaN; };
    function drPct() {
      const a = f.armor.value;
      if (a === 'custom') return Math.max(0, Math.min(100, n(f.apct) || 0));
      return a && BY[a] ? BY[a].dr.v : 0;
    }
    function mult(d, fs, fe, fmin) {
      if (!(fe > fs)) return d > fs && fe === fs ? fmin : 1;
      if (d <= fs) return 1;
      if (d >= fe) return fmin;
      return 1 - (1 - fmin) * (d - fs) / (fe - fs);
    }
    function calc(d) {
      const dmg = n(f.dmg), rpm = n(f.rpm), hp = n(f.hp), zone = isNaN(n(f.zone)) ? 1 : n(f.zone);
      const fs = isNaN(n(f.fs)) ? 0 : n(f.fs), fe = isNaN(n(f.fe)) ? fs : n(f.fe), fmin = (isNaN(n(f.fmin)) ? 100 : n(f.fmin)) / 100;
      const hasFall = !isNaN(n(f.fs)) && f.fs.value !== '';
      const m = hasFall ? mult(d, fs, fe, fmin) : 1;
      const eff = dmg * zone * m * (1 - drPct() / 100);
      if (!(eff > 0)) return { eff: 0, shots: Infinity, ttk: Infinity, m };
      const shots = Math.ceil(hp / eff - 1e-9);
      return { eff, shots, ttk: (shots - 1) * 60000 / rpm, m };
    }
    function render() {
      f.apct.closest('.fbt-field').hidden = f.armor.value !== 'custom';
      const dmg = n(f.dmg), rpm = n(f.rpm), hp = n(f.hp);
      if (!(dmg > 0 && rpm > 0 && hp > 0)) { out.innerHTML = `<p class="fbt-sub">${esc(t('tBalInvalid'))}</p>`; return; }
      const d = isNaN(n(f.dist)) ? 0 : n(f.dist), r = calc(d);
      const ttk = r => isFinite(r.ttk) ? Math.round(r.ttk) + ' ms' : '∞';
      const steps = [0, 25, 50, 75, 100, 150, 200, 300];
      out.innerHTML = `<div class="fbt-result">
<div><span>${esc(t('tPerHit'))}</span><b id="baEff">${(Math.round(r.eff * 100) / 100).toLocaleString('de-DE')}</b></div>
<div><span>${esc(t('tShots'))}</span><b id="baShots">${isFinite(r.shots) ? r.shots : '∞'}</b></div>
<div><span>${esc(t('tTtk'))}</span><b id="baTtk">${ttk(r)}</b></div></div>
<p class="fbt-sub">${esc(t('tBalFormula'))}</p>
<div class="fb-tablewrap"><table class="fbt-kv"><thead><tr><th>${esc(t('tDist'))}</th><th>${esc(t('tFalloffMult'))}</th><th>${esc(t('tShots'))}</th><th>${esc(t('tTtk'))}</th></tr></thead><tbody>
${steps.map(s => { const x = calc(s); return `<tr><td>${s} m</td><td>${Math.round(x.m * 100)} %</td><td>${isFinite(x.shots) ? x.shots : '∞'}</td><td>${ttk(x)}</td></tr>`; }).join('')}</tbody></table></div>`;
    }
    item.addEventListener('change', () => {
      const i = BY[item.value];
      if (i && has(i, 'dmg') && has(i, 'rpm')) { f.dmg.value = i.dmg.v; f.rpm.value = i.rpm.v; }
      render();
    });
    Object.values(f).forEach(x => x.addEventListener('input', render));
    el('baExample').addEventListener('click', () => {
      item.value = ''; f.dmg.value = 40; f.rpm.value = 600; f.hp.value = 100; f.armor.value = 'l3armor'; f.zone.value = 1;
      f.dist.value = 0; f.fs.value = ''; f.fe.value = ''; f.fmin.value = '';
      render();
    });
    fillItems(); fillArmor(); render();
    hooks.push(() => { const a = f.armor.value, it = item.value; fillItems(); fillArmor(); f.armor.value = a; item.value = it; render(); });
  })();

  // ======================================================== Patchnote-Vergleich
  (function pn() {
    const root = $('#pnRoot');
    if (!root) return;
    const P = D.patches.slice().sort((a, b) => a.date.localeCompare(b.date));
    const from = $('#pnFrom'), to = $('#pnTo'), q = $('#pnQ'), chips = $('#pnCats'), diff = $('#pnDiff'), list = $('#pnList');
    let cat = 'alle';
    const label = p => `${p.version} – ${p.date.slice(8, 10)}.${p.date.slice(5, 7)}.${p.date.slice(0, 4)}`;
    function fillSel() {
      const fv = from.value, tv = to.value;
      from.innerHTML = `<option value="-1">${esc(t('tStart'))}</option>` + P.map((p, i) => `<option value="${i}">${esc(label(p))}</option>`).join('');
      to.innerHTML = P.map((p, i) => `<option value="${i}">${esc(label(p))}</option>`).join('');
      from.value = fv !== '' ? fv : String(P.length - 2);
      to.value = tv !== '' ? tv : String(P.length - 1);
    }
    const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const match = c => (cat === 'alle' || c.cat === cat) && (!q.value.trim() || norm(c.text + ' ' + D.patchCats[c.cat]).includes(norm(q.value.trim())));
    const orig = p => `<a href="${esc(D.sources[p.src].url)}" target="_blank" rel="noopener noreferrer">${esc(t('tOriginal'))}</a>`;
    function render() {
      const a = parseInt(from.value, 10), b = parseInt(to.value, 10);
      if (!(b > a)) { diff.innerHTML = `<p class="fbt-sub" id="pnInvalid">${esc(t('tPnInvalid'))}</p>`; }
      else {
        const range = P.slice(a + 1, b + 1);
        const groups = {};
        range.forEach(p => p.changes.filter(match).forEach(c => (groups[c.cat] = groups[c.cat] || []).push([p, c])));
        const cats = Object.keys(D.patchCats).filter(k => groups[k]);
        const total = cats.reduce((s, k) => s + groups[k].length, 0);
        diff.innerHTML = `<p class="fbt-sub" id="pnSummary">${esc(t('tPnRange', { n: range.length, c: total }))}</p>` + (cats.map(k => `<section class="fbt-pncat" data-cat="${k}"><h3>${esc(D.patchCats[k])} <small>(${groups[k].length})</small></h3><ul>${groups[k].map(([p, c]) => `<li lang="de">${esc(c.text)} <small class="fbt-pnv">${esc(p.version)} · ${orig(p)}</small></li>`).join('')}</ul></section>`).join('') || `<p class="fbt-sub">${esc(t('tNone'))}</p>`);
      }
      list.innerHTML = P.slice().reverse().map(p => {
        const cs = p.changes.filter(match);
        return `<details class="fbt-pnitem"${cs.length ? '' : ' hidden'}><summary><b>${esc(p.title)}</b> <small>${esc(label(p))} · ${esc(t('tChanges', { n: cs.length }))}</small></summary><p lang="de">${esc(p.summary)}</p><ul>${cs.map(c => `<li lang="de"><span class="fbt-tag">${esc(D.patchCats[c.cat])}</span> ${esc(c.text)}</li>`).join('')}</ul><p>${orig(p)}</p></details>`;
      }).join('');
    }
    chips.addEventListener('click', e => {
      const b = e.target.closest('.fb-chip'); if (!b) return;
      cat = b.dataset.c;
      chips.querySelectorAll('.fb-chip').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      render();
    });
    [from, to, q].forEach(x => x.addEventListener('input', render));
    fillSel(); render();
    hooks.push(() => { fillSel(); render(); });
  })();
})();
