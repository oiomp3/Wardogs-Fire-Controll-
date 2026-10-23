// ---------- Frontbuch-Tools (Datenbank, Loadout, Tierlist, Vergleich, Loadout-Roulette) ----------
// Alle Werte kommen aus window.FB_DATA (assets/data.js, erzeugt aus fbsrc/data/wardogs.json).
(function () {
  const D = window.FB_DATA;
  if (!D) return;
  const $ = (s, r) => (r || document).querySelector(s);
  const BY = Object.fromEntries(D.items.map(i => [i.id, i]));
  const MONEY = ['unlock', 'price', 'reward'];
  const PCT = ['dr', 'supp'];
  const FIELD_ORDER = Object.keys(D.fields);
  const LOC = () => ({ de: 'de-DE', en: 'en-US', es: 'es-ES', fr: 'fr-FR' })[lang] || 'de-DE';
  const LP = window.fbLP || '';
  const nf = n => Number(n).toLocaleString(LOC());
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
  const SIGNED = { vrec: ' %', hrec: ' %', spread: ' %', ads: ' %', adsSec: ' s' };
  const TONE = { vrec: 1, hrec: 1, ads: 1, adsSec: 1 };
  const fname = f => (I18N.de['fld_' + f] ? t('fld_' + f) : D.fields[f]);
  const sgn = (x, unit) => (x > 0 ? '+' : x < 0 ? '−' : '±') + nf(Math.abs(x)) + unit;
  function fmt(field, x) {
    if (typeof x === 'number') {
      if (SIGNED[field]) { const txt = sgn(x, SIGNED[field]); return TONE[field] && x ? `<span class="fbt-tone ${x < 0 ? 'good' : 'bad'}">${txt}</span>` : txt; }
      if (field === 'zoom') return nf(x) + '×';
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
  function money(n) { return lang === 'en' ? '$' + nf(n) : nf(n) + ' $'; }
  const CAT_EMO = { weapon: '🔫', vehicle: '🚙', buildable: '🏗️', attachment: '🔧', equipment: '🧰', armor: '🦺', gear: '🎒', magazine: '📦', ammo: '💥' };
  function pic(i, sz, cls) {
    if (!i || !i.img) { const w = i && i.cat === 'weapon' ? sz * 2 : sz; return `<span class="fbt-pic none ${w > sz ? 'wide ' : ''}${cls || ''}" style="width:${w}px;height:${sz}px;font-size:${Math.round(sz * (w > sz ? .34 : .55))}px" aria-hidden="true">${w > sz ? esc(i.name.split(' ')[0].slice(0, 7)) : (CAT_EMO[i && i.cat] || '•')}</span>`; }
    const w = i.cat === 'weapon' ? sz * 2 : sz;
    return `<img class="fbt-pic ${i.cat === 'weapon' ? 'wide ' : ''}${cls || ''}" src="${esc(i.img)}" width="${w}" height="${sz}" loading="lazy" decoding="async" alt="">`;
  }
  const STAR = '<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3.2 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.2l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>';
  function favBtn(u, title, k, ic) { return `<button type="button" class="fb-fav" data-fu="${esc(u)}" data-ft="${esc(title)}" data-fk="${k}" data-fi="${esc(ic)}" aria-pressed="false">${STAR}<span>${esc(t('fav'))}</span></button>`; }
  const itemIc = i => i.img || CAT_EMO[i.cat] || '•';
  const itemK = i => i.cat === 'weapon' && i.img ? 'iw' : 'i';
  function tierOf(id) { return ((D.tierlist && D.tierlist.classes) || []).flatMap(c => c.tiers.filter(r => r[1] === id).map(r => [c.name, r[0]])); }
  const fitsW = (a, w) => a.for ? a.for === w : (a.fits ? a.fits.includes(w) : true);
  const fitKnown = a => !!(a.for || a.fits);
  function dmgMag(i) {
    const d = num(i, 'dmg'), m = num(i, 'magmax') !== null ? num(i, 'magmax') : num(i, 'mag');
    return d !== null && m !== null ? Math.round(d * m) : null;
  }

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
<td class="fbt-namecell">${pic(i, 32)}<button type="button" class="fbt-link" data-open="${i.id}">${esc(i.name)}</button></td>
<td data-l="">${esc(catName(i.cat))}${i.type && i.type !== catName(i.cat) ? `<small>${esc(i.type)}</small>` : ''}</td>
<td data-l="${esc(t('tTrack'))}">${val(i, 'track', false)}</td><td data-l="${esc(t('tLevel'))}">${val(i, 'level', false)}</td><td data-l="${esc(t('tUnlock'))}">${val(i, 'unlock', false)}</td><td data-l="${esc(t('tPrice'))}">${val(i, 'price', false)}</td></tr>`).join('');
      cnt.textContent = list.length ? t('tCount', { n: list.length }) : t('tNone');
      tbl.querySelectorAll('th[data-k]').forEach(th => {
        th.setAttribute('aria-sort', th.dataset.k === sortK ? (sortDir > 0 ? 'ascending' : 'descending') : 'none');
      });
      renderCompare();
    }
    function fieldRows(i) {
      return FIELD_ORDER.filter(f => has(i, f)).map(f => `<tr><th scope="row">${esc(fname(f))}</th><td>${val(i, f)}</td></tr>`).join('');
    }
    const LOK = { primary: 'p', secondary: 's', launcher: 'l', helmet: 'h', vest: 'v', rig: 'r', backpack: 'b' };
    function loLink(i) {
      let q = '';
      if (LOK[i.slot]) q = LOK[i.slot] + '=' + i.id;
      else if (i.slot === 'equip') q = 'e=' + i.id + ':1';
      else if (i.cat === 'attachment' && (i.for || (i.fits && i.fits.length))) q = 'p=' + (i.for || i.fits[0]) + '&a=' + i.id;
      return q ? `<a href="${LP}/tools/loadout/?${q}">🎒 ${esc(t('tToLoadout'))}</a>` : '';
    }
    function openDetail(id) {
      const i = BY[id];
      if (!i) return;
      const srcs = [...new Set(FIELD_ORDER.filter(f => has(i, f)).map(f => i[f].s))].filter(k => D.sources[k]);
      const fw = (i.for ? [i.for] : (i.fits || [])).filter(w => BY[w]);
      const compat = fw.length ? `<p>${esc(t('tCompatOk'))}: ${fw.map(w => `<a href="${LP}/tools/datenbank/?id=${w}"><b>${esc(BY[w].name)}</b></a>`).join(', ')}${i.fits && i.fits.length ? warn({ f: 'c' }) : ''}</p>` : (i.cat === 'attachment' ? `<p>${esc(t('tCompatUnknown'))}</p>` : '');
      const mg = i.cat === 'weapon' ? D.items.filter(m => m.cat === 'magazine' && (m.fits || []).includes(id)).sort((x, y) => (num(x, 'cap') || 0) - (num(y, 'cap') || 0)) : [];
      const mags = mg.length ? `<p>${esc(t('dbMags'))}: ${mg.map(m => `<a href="${LP}/tools/datenbank/?id=${m.id}">${esc(m.name)}</a>`).join(', ')}${warn({ f: 'c' })}</p>` : '';
      const dm = dmgMag(i);
      const missing = ['magazine', 'ammo'].includes(i.cat) ? [] : FIELD_ORDER.filter(f => !has(i, f) && ['track', 'level', 'unlock', 'price'].includes(f)).map(f => fname(f));
      const du = '/tools/datenbank/?id=' + id;
      const xl = [loLink(i)].concat(i.cat === 'weapon' ? [`<a href="${LP}/tools/vergleich/?w=${id}">⚖️ ${esc(t('dbToCmp'))}</a>`] : [],
        tierOf(id).map(([c, tr]) => `<a href="${LP}/tools/tierlist/#t-${id}">🏆 ${esc(t('dbInTier'))}: <b>${esc(tr)}</b>&nbsp;<small>${esc(c)}</small></a>`)).filter(Boolean).join('');
      const gm = (D.mentions || {})[id] || [];
      detail.innerHTML = `<div class="fbt-detail-head">${pic(i, i.cat === 'weapon' ? 72 : 96, 'big')}<h2 id="dbDetailH">${esc(i.name)}</h2><button type="button" class="fbt-btn ghost" id="dbDetailClose">${esc(t('tClose'))}</button></div>
<div class="fbt-detail-sub"><p class="fbt-sub">${esc(catName(i.cat))}${i.type && i.type !== catName(i.cat) ? ' · ' + esc(i.type) : ''}</p>${favBtn(du, i.name, itemK(i), itemIc(i))}</div>
${xl ? `<div class="fbt-xlinks">${xl}</div>` : ''}
<div class="fb-tablewrap"><table class="fbt-kv"><tbody>${fieldRows(i) || `<tr><td>${unk()}</td></tr>`}${dm !== null ? `<tr><th scope="row">${esc(t('tDmgMag'))}</th><td>${nf(dm)}${warn({ f: 'c' })}</td></tr>` : ''}</tbody></table></div>
${missing.length ? `<p class="fbt-sub">${esc(t('tMissingFields'))}: ${missing.map(esc).join(', ')}</p>` : ''}
${compat}${mags}${i.note ? `<p>${esc(i.note)}</p>` : ''}
${gm.length ? `<h3>${esc(t('dbInGuides'))}</h3><ul class="fbt-glinks">${gm.map(([sl, ti, ic]) => `<li><a href="${LP}/guides/${esc(sl)}/"><span aria-hidden="true">${esc(ic)}</span> ${esc(ti)}</a></li>`).join('')}</ul>` : ''}
<h3>${esc(t('tSources'))}</h3><ul class="fbt-srclist">${srcs.map(k => `<li><a href="${esc(D.sources[k].url)}" target="_blank" rel="noopener noreferrer">${esc(D.sources[k].title)}</a>${D.sources[k].type === 'community' ? ' ⚠' : ''}</li>`).join('') || '<li>–</li>'}</ul>`;
      detail.hidden = false;
      const fresh = detail.dataset.id !== id;
      detail.dataset.id = id;
      $('#dbDetailClose').addEventListener('click', () => {
        detail.hidden = true; delete detail.dataset.id;
        const P = new URLSearchParams(location.search); P.delete('id');
        history.replaceState(null, '', location.pathname + (P.toString() ? '?' + P : ''));
        const b = body.querySelector(`[data-open="${id}"]`); if (b) b.focus();
      });
      if (window.fbRenderPersonal) window.fbRenderPersonal();
      if (fresh) {
        const P = new URLSearchParams(location.search); P.set('id', id);
        history.replaceState(null, '', location.pathname + '?' + P);
        if (window.FBP) window.FBP.track({ u: du, t: i.name, k: itemK(i), i: itemIc(i) });
        detail.scrollIntoView({ block: 'nearest', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    }
    function renderCompare() {
      if (!sel.length) { cmpBox.hidden = true; return; }
      const items = sel.map(id => BY[id]);
      const fields = FIELD_ORDER.filter(f => items.some(i => has(i, f)));
      const HI = { dmg: 1, hdmg: 1, rpm: 1, mag: 1, magmax: 1, dr: 1, supp: 1, price: -1, unlock: -1, weight: -1, vrec: -1, hrec: -1, ads: -1, adsSec: -1 };
      const best = f => { if (!HI[f] || items.length < 2) return null; const xs = items.map(i => num(i, f)).filter(x => x !== null); if (xs.length < 2) return null; const b = HI[f] > 0 ? Math.max(...xs) : Math.min(...xs); return xs.every(x => x === b) ? null : b; };
      const dms = items.map(dmgMag), dmb = dms.filter(x => x !== null).length > 1 ? Math.max(...dms.filter(x => x !== null)) : null;
      cmpBox.hidden = false;
      cmpBox.innerHTML = `<div class="fbt-detail-head"><h2>${esc(t('tCompare'))} (${items.length}/3)</h2><button type="button" class="fbt-btn ghost" id="dbCmpClear">${esc(t('tCompareClear'))}</button></div>
<div class="fb-tablewrap"><table class="fbt-cmp-table"><thead><tr><th></th>${items.map(i => `<th scope="col">${pic(i, 48, 'cmp')}<span>${esc(i.name)}</span></th>`).join('')}</tr></thead><tbody>
<tr><th scope="row">${esc(t('tCat'))}</th>${items.map(i => `<td>${esc(catName(i.cat))} · ${esc(i.type)}</td>`).join('')}</tr>
${fields.map(f => { const b = best(f); return `<tr><th scope="row">${esc(fname(f))}</th>${items.map(i => `<td${b !== null && num(i, f) === b ? ' class="best"' : ''}>${val(i, f)}</td>`).join('')}</tr>`; }).join('')}
${dms.some(x => x !== null) ? `<tr><th scope="row">${esc(t('tDmgMag'))}</th>${dms.map(x => `<td${dmb !== null && x === dmb ? ' class="best"' : ''}>${x === null ? unk() : nf(x) + warn({ f: 'c' })}</td>`).join('')}</tr>` : ''}
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
    const SLOTS = { p: ['loPrim', 'primary'], s: ['loSec', 'secondary'], l: ['loLaunch', 'launcher'], h: ['loHelm', 'helmet'], v: ['loVest', 'vest'], r: ['loRig', 'rig'], b: ['loPack', 'backpack'] };
    const SK = Object.keys(SLOTS);
    const GROUP = { p: 'w', s: 'w', l: 'w', h: 'r', v: 'r', r: 'r', b: 'r' };
    const selK = el('loKlasse'), attBox = el('loAtt'), attWrap = el('loAttWrap'), eqBox = el('loEq'), sum = el('loSum'), msg = el('loMsg');
    const budgetIn = el('loBudget'), baseBtn = el('loBase');
    const EQ = D.items.filter(i => i.slot === 'equip');
    const PRESETS = D.presets || [];
    const empty = () => ({ k: '', p: '', s: '', l: '', v: '', h: '', r: '', b: '', a: [], e: {} });
    let st = empty(), base = null;

    const priceTxt = i => { const p = num(i, 'price'); return p === null ? t('tNoPrice') : (p === 0 ? t('tFree') : money(p)); };
    const cw = v => v && v.f === 'c' ? ' ⚠' : '';
    const kg = n => (Math.round(n * 100) / 100).toLocaleString(LOC()) + ' kg';
    const maxQ = i => (i.ty0 || i.type) === 'Fallschirm' ? 1 : MAXQ;
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
      return parts.join('') + `<a class="lo-db" href="${LP}/tools/datenbank/?id=${i.id}" aria-label="${esc(t('tToDb'))}">ⓘ</a>`;
    }
    function allowedAtt() {
      return D.items.filter(i => i.cat === 'attachment' && fitsW(i, st.p))
        .sort((a, b) => (fitKnown(a) ? 0 : 1) - (fitKnown(b) ? 0 : 1) || a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
    }
    function renderPresets() {
      el('loPresets').innerHTML = PRESETS.map(p => {
        const c = totals(fromPreset(p));
        return `<button type="button" class="lo-preset" data-preset="${p.id}"><b>${esc(p.name)}</b><span class="lo-tag">${esc(p.track)}</span><span class="lo-preset-cost">${money(c.cost)}${c.comm ? ' ⚠' : ''}</span><small>${esc(p.desc)}</small></button>`;
      }).join('');
    }
    function renderInputs() {
      selK.value = st.k;
      SK.forEach(k => { const [id, slot] = SLOTS[k]; fillSel(el(id), slot, st[k]); });
      const atts = allowedAtt();
      st.a = st.a.filter(id => atts.some(i => i.id === id));
      attWrap.hidden = !st.p;
      attBox.innerHTML = !st.p ? '' : (atts.length ? atts.map(i => `<button type="button" class="lo-chip" data-att="${i.id}" aria-pressed="${st.a.includes(i.id)}"${fitKnown(i) ? '' : ` title="${esc(t('tCompatUnknown'))}"`}>${pic(i, 28, 'chip')}<span>${esc(i.name)}</span><small>${esc(priceTxt(i))}${cw(i.price)}${fitKnown(i) ? '' : ' · ?'}</small></button>`).join('')
        : `<p class="fbt-sub">${esc(t('tNoAtt'))}</p>`);
      const types = [...new Set(EQ.map(i => i.type))];
      const openG = new Set([...eqBox.querySelectorAll('details[open]')].map(d => d.dataset.ty));
      eqBox.innerHTML = types.map(ty => { const L = EQ.filter(i => i.type === ty), sel = L.reduce((x, i) => x + (st.e[i.id] || 0), 0);
        return `<details class="lo-eqgrp" data-ty="${esc(ty)}"${sel || openG.has(ty) ? ' open' : ''}><summary><span>${esc(ty)}</span><span class="lo-eqcnt" data-cnt="${esc(ty)}">${sel || ''}</span></summary>${L.map(i => {
        const n = st.e[i.id] || 0;
        return `<div class="lo-eq${n ? ' on' : ''}">${pic(i, 32, 'eq')}<span class="lo-eq-name"><span>${esc(i.name)}</span><small>${esc(priceTxt(i))}${cw(i.price)}${has(i, 'weight') ? ' · ' + kg(i.weight.v) + cw(i.weight) : ''}</small></span>
<span class="lo-step" role="group" aria-label="${esc(t('tQty'))}: ${esc(i.name)}"><button type="button" data-eq="${i.id}" data-d="-1" aria-label="− ${esc(i.name)}"${n ? '' : ' disabled'}>−</button><output data-q="${i.id}">${n}</output><button type="button" data-eq="${i.id}" data-d="1" aria-label="+ ${esc(i.name)}"${n >= maxQ(i) ? ' disabled' : ''}>+</button></span></div>`;
      }).join('')}</details>`; }).join('');
      renderMeta();
    }
    function renderMeta() {
      SK.forEach(k => {
        const id = SLOTS[k][0], i = BY[st[k]], ic = el(id + 'Ic');
        el(id + 'Meta').innerHTML = meta(i); el(id).closest('.lo-slot').classList.toggle('on', !!st[k]);
        ic.innerHTML = i && i.img ? pic(i, 48, 'slot') : esc(ic.dataset.ic); ic.classList.toggle('has-pic', !!(i && i.img));
      });
    }
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
      // Waffenwerte
      el('loWpn').innerHTML = ['p', 's', 'l'].map(k => BY[st[k]]).filter(Boolean).map(i => {
        const c = (lab, x) => `<span class="lo-wst"><small>${esc(lab)}</small><b>${x}</b></span>`, dm = dmgMag(i);
        const mags = has(i, 'mag') ? val(i, 'mag', false) + (num(i, 'magmax') !== null && num(i, 'magmax') !== num(i, 'mag') ? ' / ' + val(i, 'magmax', false) : '') : unk();
        let rec = '';
        if (i.id === st.p) {
          const A = st.a.map(id => BY[id]).filter(a => a && (num(a, 'vrec') !== null || num(a, 'hrec') !== null));
          if (A.length) {
            const sv = A.reduce((x, a) => x + (num(a, 'vrec') || 0), 0), sh = A.reduce((x, a) => x + (num(a, 'hrec') || 0), 0);
            rec = c(t('tRecoil'), `<span class="lo-rec">V ${fmt('vrec', sv)} · H ${fmt('hrec', sh)}</span>${warn({ f: 'c' })}`);
          }
        }
        return `<div class="lo-wrow" data-w="${i.id}">${pic(i, 30, 'wpn')}<div><b class="lo-wname">${esc(i.name)}</b><div class="lo-wstats">${c(t('tDmgBody'), val(i, 'dmg', false))}${c(t('tDmgHead'), val(i, 'hdmg', false))}${c('RPM', val(i, 'rpm', false))}${c(t('tMagShort'), mags)}${c(t('tDmgMag'), dm === null ? unk() : nf(dm) + warn({ f: 'c' }))}${rec}</div></div></div>`;
      }).join('');
      sum.innerHTML = T.n ? `<div class="fb-tablewrap"><table class="fbt-kv lo-list"><tbody>${T.c.map(([i, n]) => {
        const p = num(i, 'price');
        return `<tr><td class="fbt-namecell">${pic(i, 28, 'li')}${esc(i.name)}${n > 1 ? ' × ' + n : ''}</td><td>${p === null ? unk() : fmt('price', p * n) + warn(i.price)}</td><td>${has(i, 'weight') ? kg(i.weight.v * n) + warn(i.weight) : unk()}</td></tr>`;
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
      if (s.a.length) { const ok = new Set(D.items.filter(i => i.cat === 'attachment' && fitsW(i, s.p)).map(i => i.id)); s.a = s.p ? s.a.filter(id => ok.has(id)) : []; }
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
    el('loRandom').addEventListener('click', () => {
      const rnd = L => L[Math.floor(Math.random() * L.length)];
      const priced = slot => D.items.filter(i => i.slot === slot && num(i, 'price') !== null);
      const tracks = [...selK.options].map(o => o.value).filter(Boolean);
      const bud = parseInt(budgetIn.value, 10);
      let best = null;
      for (let n = 0; n < 300; n++) {
        const s = empty();
        s.k = rnd(tracks) || '';
        const mine = slot => { const L = priced(slot), M = L.filter(i => has(i, 'track') && i.track.v === s.k); return M.length && Math.random() < .75 ? M : L; };
        const pr = mine('primary'); if (pr.length) s.p = rnd(pr).id;
        if (Math.random() < .35) { const L = mine('launcher'); if (L.length) s.l = rnd(L).id; }
        if (Math.random() < .3) { const L = mine('secondary'); if (L.length) s.s = rnd(L).id; }
        ['helmet', 'vest'].forEach((slot, ix) => { if (Math.random() < .8) { const L = priced(slot); if (L.length) s[ix ? 'v' : 'h'] = rnd(L).id; } });
        if (Math.random() < .4) { const L = priced('backpack'); if (L.length) s.b = rnd(L).id; }
        const atts = D.items.filter(i => i.cat === 'attachment' && fitKnown(i) && fitsW(i, s.p) && num(i, 'price') !== null);
        const types = {};
        atts.sort(() => Math.random() - .5).forEach(i => { if (!types[i.type] && Object.keys(types).length < 2 && Math.random() < .6) types[i.type] = i.id; });
        s.a = Object.values(types);
        const eq = EQ.filter(i => num(i, 'price') !== null && (i.ty0 || i.type) !== 'Fallschirm');
        for (let k = 0, m = 1 + Math.floor(Math.random() * 3); k < m && eq.length; k++) { const i = rnd(eq); s.e[i.id] = Math.min(maxQ(i), (s.e[i.id] || 0) + 1); }
        const c = totals(s).cost;
        if (!(bud > 0) || c <= bud) { best = s; break; }
        if (!best || c < totals(best).cost) best = s;
      }
      if (!best) return;
      st = best; msg.textContent = t('loRandomMsg'); update(true);
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
    // v25: Ansicht „Preis-Leistung“ (eigene Regel: billigere Waffe derselben Klasse mit gleichem/besserem Tier, nur offizielle Preise)
    const viewBox = $('#tlView'), valBox = $('#tlValue'), valRoot = $('#tlValueRoot');
    const RANK = { S: 0, A: 1, B: 2, C: 3 };
    const offP = id => { const i = BY[id], v = i && i.price; return v && v.f === 'o' && typeof v.v === 'number' ? v.v : null; };
    let view = new URLSearchParams(location.search).get('ansicht') === 'preis' ? 'preis' : 'tiers';
    function valueRows(c) {
      const rows = c.tiers.filter(r => RANK[r[0]] !== undefined);
      const priced = rows.filter(r => offP(r[1]) !== null).map(([tr, id, , prov]) => ({ tr, id, prov, p: offP(id) }));
      priced.forEach(x => {
        const alts = priced.filter(y => y.id !== x.id && y.p < x.p && RANK[y.tr] <= RANK[x.tr]).sort((a, b) => a.p - b.p || RANK[a.tr] - RANK[b.tr]);
        x.alt = alts[0] || null;
        x.best = !x.alt && !priced.some(y => y.id !== x.id && y.p === x.p && RANK[y.tr] < RANK[x.tr]);
      });
      priced.sort((a, b) => RANK[a.tr] - RANK[b.tr] || a.p - b.p);
      return { priced, missing: rows.filter(r => offP(r[1]) === null).map(r => r[1]) };
    }
    function renderValue() {
      const cls = T.classes.map((c, ix) => [c, ix]).filter(([c, ix]) => (cur === 'alle' || String(ix) === cur) && c.tiers.some(r => RANK[r[0]] !== undefined));
      valRoot.innerHTML = cls.length ? cls.map(([c]) => {
        const { priced, missing } = valueRows(c);
        const body = priced.map(x => {
          const i = BY[x.id], note = x.alt
            ? `<span class="tl-alt">${esc(t('tlAlt'))}: <a href="#pl-${x.alt.id}">${esc(BY[x.alt.id].name)}</a> <small>(${esc(x.alt.tr)}, ${esc(money(x.alt.p))} · −${esc(money(x.p - x.alt.p))})</small></span>`
            : `<span class="tl-ok">✓ ${esc(t('tlBest', { t: x.tr }))}</span>`;
          return `<tr id="pl-${x.id}"${x.alt ? ' class="has-alt"' : ''}><td class="fbt-namecell"><a href="${LP}/tools/datenbank/?id=${x.id}">${pic(i, 28, 'li')}${esc(i.name)}</a>${x.prov ? ` <span class="fbt-badge">${esc(t('tProv'))}</span>` : ''}</td>`
            + `<td><span class="fbt-tier sm t-${x.tr}">${esc(x.tr)}</span></td><td class="tl-price" data-p="${x.p}">${esc(money(x.p))} ${srcLink(i.price)}</td><td>${note}</td></tr>`;
        }).join('');
        const miss = missing.length ? `<p class="fbt-sub tl-miss">${esc(t('tlNoPrice'))}: ${missing.map(id => `<a href="${LP}/tools/datenbank/?id=${id}">${esc(BY[id].name)}</a>`).join(', ')}</p>` : '';
        return `<section class="fbt-tierclass"><h3>${esc(c.name)}</h3>${priced.length ? `<div class="fb-tablewrap"><table class="fbt-table tl-vtable"><thead><tr><th scope="col">${esc(t('tName'))}</th><th scope="col">Tier</th><th scope="col">${esc(t('tlPriceLife'))}</th><th scope="col">${esc(t('tlVerdict'))}</th></tr></thead><tbody>${body}</tbody></table></div>` : ''}${miss}</section>`;
      }).join('') : `<p class="fbt-sub">${esc(t('tNone'))}</p>`;
    }
    function setView(v, push) {
      view = v;
      viewBox.querySelectorAll('.tl-vbtn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.v === v)));
      root.hidden = v !== 'tiers'; valBox.hidden = v !== 'preis';
      if (v === 'preis') renderValue();
      if (push) { const P = new URLSearchParams(location.search); if (v === 'preis') P.set('ansicht', 'preis'); else P.delete('ansicht'); history.replaceState(null, '', location.pathname + (P.toString() ? '?' + P : '') + location.hash); }
    }
    if (viewBox) viewBox.addEventListener('click', e => { const b = e.target.closest('.tl-vbtn'); if (b) setView(b.dataset.v, true); });
    window.fbTierValue = c => valueRows(T.classes[c]);
    function render() {
      if (viewBox && view === 'preis') renderValue();
      root.innerHTML = T.classes.filter((c, ix) => cur === 'alle' || String(ix) === cur).map(c => {
        const tiers = [...new Set(c.tiers.map(r => r[0]))];
        return `<section class="fbt-tierclass"><h2>${esc(c.name)}</h2>${tiers.map(tr => `<div class="fbt-tierrow"><div class="fbt-tier t-${tr === '–' ? 'x' : tr}" aria-label="Tier ${esc(tr)}">${esc(tr)}</div><div class="fbt-tieritems">
${c.tiers.filter(r => r[0] === tr).map(([, id, why, prov]) => `<details class="fbt-tieritem" id="t-${id}"${location.hash === '#t-' + id ? ' open' : ''}><summary>${pic(BY[id], 32, 'tier')}<span>${esc(BY[id].name)}</span>${prov ? ` <span class="fbt-badge">${esc(t('tProv'))}</span>` : ''}</summary><p>${esc(why)}</p><div class="fbt-xlinks sm"><a href="${LP}/tools/datenbank/?id=${id}">🗃️ ${esc(t('tToDb'))}</a>${BY[id].cat === 'weapon' ? `<a href="${LP}/tools/vergleich/?w=${id}">⚖️ ${esc(t('dbToCmp'))}</a>` : ''}${BY[id].slot ? `<a href="${LP}/tools/loadout/?${{ primary: 'p', secondary: 's', launcher: 'l' }[BY[id].slot] || 'p'}=${id}">🎒 ${esc(t('tToLoadout'))}</a>` : ''}</div></details>`).join('')}</div></div>`).join('')}</section>`;
      }).join('');
    }
    chips.addEventListener('click', e => {
      const b = e.target.closest('.fb-chip'); if (!b) return;
      cur = b.dataset.c;
      chips.querySelectorAll('.fb-chip').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
      render();
    });
    function jump() {
      const h = location.hash; if (!h.startsWith('#t-')) return;
      const el = document.getElementById(h.slice(1)); if (!el) return;
      el.open = true; el.scrollIntoView({ block: 'center' }); el.classList.remove('fb-flash'); void el.offsetWidth; el.classList.add('fb-flash');
    }
    render(); if (viewBox) setView(location.hash.startsWith('#t-') ? 'tiers' : view, false); jump();
    addEventListener('hashchange', () => { if (viewBox && location.hash.startsWith('#t-') && view !== 'tiers') setView('tiers', true); if (cur !== 'alle' && location.hash.startsWith('#t-')) { cur = 'alle'; chips.querySelectorAll('.fb-chip').forEach(x => x.setAttribute('aria-pressed', String(x.dataset.c === 'alle'))); render(); } jump(); });
    hooks.push(render);
  })();

  // ======================================================== Waffenvergleich
  (function compare() {
    const pick = $('#cmpPick');
    if (!pick) return;
    const out = $('#cmpOut'), msgEl = $('#cmpMsg'), KEY = 'fbCompare';
    const sels = [1, 2, 3, 4].map(n => document.getElementById('cmpW' + n));
    const W = D.items.filter(i => i.cat === 'weapon');
    const okId = id => BY[id] && BY[id].cat === 'weapon';
    let ids = [];
    const P = new URLSearchParams(location.search).get('w');
    if (P !== null) ids = P.split(',').filter(okId);
    else { try { ids = (localStorage.getItem(KEY) || '').split(',').filter(okId); } catch (e) {} }
    if (!ids.length && P === null) ids = ['ak74', 'm4'].filter(okId);
    ids = [...new Set(ids)].slice(0, 4);
    const dps = i => { const d = num(i, 'dmg'), r = num(i, 'rpm'); return d !== null && r !== null ? Math.round(d * r / 60) : null; };
    const ROWS = [
      ['dmg', () => t('tDmgBody'), i => num(i, 'dmg'), 1],
      ['hdmg', () => t('tDmgHead'), i => num(i, 'hdmg'), 1],
      ['rpm', () => 'RPM', i => num(i, 'rpm'), 1],
      ['dps', () => t('cmpDps'), dps, 1, true],
      ['mag', () => t('tMagShort'), i => num(i, 'mag'), 1],
      ['magmax', () => t('cmpMagMax'), i => num(i, 'magmax'), 1],
      ['dm', () => t('tDmgMag'), dmgMag, 1, true],
      ['weight', () => t('tWeight'), i => num(i, 'weight'), -1],
      ['price', () => t('tPrice'), i => num(i, 'price'), -1],
      ['unlock', () => t('tUnlock'), i => num(i, 'unlock'), -1]
    ];
    function render() {
      sels.forEach((s, n) => {
        const cur = ids[n] || '';
        if (s.dataset.filled !== '1') {
          const types = [...new Set(W.map(i => i.type))];
          s.innerHTML = `<option value="">${esc(t('cmpAdd'))}</option>` + types.map(ty => `<optgroup label="${esc(ty)}">${W.filter(i => i.type === ty).map(i => `<option value="${i.id}">${esc(i.name)}</option>`).join('')}</optgroup>`).join('');
          s.dataset.filled = '1';
        }
        s.value = cur;
      });
      const items = ids.map(id => BY[id]);
      if (!items.length) { out.innerHTML = `<p class="cmp-empty">${esc(t('cmpAdd'))}</p>`; return; }
      const rows = ROWS.filter(r => items.some(i => r[2](i) !== null));
      out.innerHTML = `<table class="cmp-tbl"><thead><tr><th scope="col"><span class="fb-sr">${esc(t('cmpWeapon'))}</span></th>${items.map(i => `<th scope="col"><a href="${LP}/tools/datenbank/?id=${i.id}">${pic(i, 40)}<span>${esc(i.name)}</span></a><small class="fbt-sub">${esc(i.type)}${has(i, 'cal') ? ' · ' + esc(i.cal.v) : ''}</small></th>`).join('')}</tr></thead><tbody>${rows.map(r => {
        const xs = items.map(r[2]).filter(x => x !== null);
        const max = xs.length ? Math.max(...xs) : 0, min = xs.length ? Math.min(...xs) : 0;
        const best = items.length > 1 && xs.length > 1 && max !== min ? (r[3] > 0 ? max : min) : null;
        return `<tr><th scope="row">${esc(r[1]())}</th>${items.map(i => barCell(i, r, best, max, min)).join('')}</tr>`;
      }).join('')}</tbody></table>`;
    }
    function barCell(i, r, best, max, min) {
      const [f, , get, dir, derived] = r, x = get(i);
      if (x === null) return `<td>${unk()}</td>`;
      const txt = derived ? nf(x) + warn({ f: 'c' }) : val(i, f, false);
      const pct = !max ? 0 : dir > 0 ? x / max : (x ? min / x : 1);
      return `<td class="${best !== null && x === best ? 'cmp-best' : ''}"><div class="cmp-v"><b>${txt}</b><span class="cmp-bar" aria-hidden="true"><i style="width:${Math.max(4, Math.round(pct * 100))}%"></i></span></div></td>`;
    }
    function save() {
      try { localStorage.setItem(KEY, ids.join(',')); } catch (e) {}
      history.replaceState(null, '', location.pathname + (ids.length ? '?w=' + ids.join(',') : ''));
    }
    pick.addEventListener('change', e => {
      const s = e.target.closest('select'); if (!s) return;
      const n = sels.indexOf(s), v = s.value;
      const next = ids.slice(); next[n] = v;
      ids = [...new Set(next.filter(Boolean))].slice(0, 4);
      msgEl.textContent = ''; save(); render();
    });
    $('#cmpClear').addEventListener('click', () => { ids = []; msgEl.textContent = ''; save(); render(); });
    $('#cmpShare').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(location.href); msgEl.textContent = t('tCopied'); } catch (e) { msgEl.textContent = location.href; }
    });
    render(); if (P !== null) save();
    hooks.push(() => { sels.forEach(s => { s.dataset.filled = ''; }); render(); });
  })();

  // ======================================================== Loadout-Roulette (/slots/)
  (function roulette() {
    const root = $('#rrRoot');
    if (!root) return;
    try { localStorage.removeItem('wardogsSlot'); } catch (e) {} // alter Speicherwert von v19
    // Schlüssel = URL-Parameter des Loadout-Planers, Slot, Chance auf „Nichts“
    const REELS = [['p', 'primary', 1 / 8], ['s', 'secondary', 1 / 4], ['l', 'launcher', 1 / 4],
      ['h', 'helmet', 1 / 4], ['v', 'vest', 1 / 4], ['r', 'rig', 1 / 4], ['b', 'backpack', 1 / 4], ['e', 'equip', 1 / 4]];
    const KEYS = REELS.map(r => r[0]);
    const SLOT = Object.fromEntries(REELS.map(r => [r[0], r[1]]));
    const NONE_P = Object.fromEntries(REELS.map(r => [r[0], r[2]]));
    const POOL = Object.fromEntries(REELS.map(([k, slot]) => [k, D.items.filter(i => i.slot === slot && !(k === 'e' && (i.ty0 || i.type) === 'Fallschirm'))]));
    const rand = () => { try { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; } catch (e) { return Math.random(); } };
    const pick = L => L[Math.floor(rand() * L.length)];
    const roll = k => (!POOL[k].length || rand() < NONE_P[k] ? '' : pick(POOL[k]).id);
    const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spinBtn = $('#rrSpin'), spinTxt = $('#rrSpinTxt'), costEl = $('#rrCost'), toBtn = $('#rrToLoadout'), shareBtn = $('#rrShare'), toast = $('#rrToast');
    const reelEl = k => root.querySelector(`.rr-reel[data-k="${k}"]`);
    const stripEl = k => reelEl(k).querySelector('.rr-strip');
    const holdEl = k => reelEl(k).querySelector('.rr-hold');
    let st = null, spinning = false, spins = 0, toastT = 0;
    const held = {};

    function cell(id) {
      const i = BY[id];
      if (!i) return `<div class="rr-cell rr-none"><span class="rr-x" aria-hidden="true">❌</span><span class="rr-nm">${esc(t('rrNone'))}</span></div>`;
      const im = i.img ? pic(i, 64, 'rr-pic').replace('loading="lazy"', 'loading="eager"') : `<span class="rr-pic rr-emo" aria-hidden="true">${CAT_EMO[i.cat] || '•'}</span>`;
      return `<div class="rr-cell" data-id="${esc(i.id)}">${im}<span class="rr-nm">${esc(i.name)}</span></div>`;
    }
    function query(s) {
      const q = KEYS.filter(k => s[k]).map(k => k + '=' + encodeURIComponent(s[k]) + (k === 'e' ? ':1' : '')).join('&');
      return q || 'p=';
    }
    const shareUrl = () => location.origin + LP + '/slots/?' + query(st);
    function renderCells() { if (st) KEYS.forEach(k => { stripEl(k).innerHTML = cell(st[k]); }); }
    function render() {
      KEYS.forEach(k => {
        const b = holdEl(k), on = !!(st && held[k]);
        b.disabled = !st || spinning; b.setAttribute('aria-pressed', String(on));
        b.setAttribute('aria-label', t('rrHold') + ': ' + t('rr' + k.toUpperCase()));
        b.querySelector('.rr-lock').textContent = on ? '🔒' : '🔓';
        reelEl(k).classList.toggle('held', on);
      });
      spinTxt.textContent = t(spinning ? 'rrSpinning' : 'rrSpin');
      spinBtn.disabled = spinning || !!(st && KEYS.every(k => held[k]));
      root.classList.toggle('spinning', spinning);
      const ready = !!st && !spinning;
      shareBtn.disabled = !ready;
      if (ready) { toBtn.href = LP + '/tools/loadout/?' + query(st); toBtn.removeAttribute('aria-disabled'); }
      else { toBtn.removeAttribute('href'); toBtn.setAttribute('aria-disabled', 'true'); }
      if (!st) { costEl.textContent = '–'; delete costEl.dataset.v; return; }
      if (spinning) return;
      let cost = 0, unknown = 0, comm = false;
      KEYS.map(k => BY[st[k]]).filter(Boolean).forEach(i => {
        const p = num(i, 'price');
        if (p === null) unknown++; else { cost += p; if (i.price.f === 'c') comm = true; }
      });
      costEl.textContent = money(cost) + (comm ? ' ⚠' : '') + (unknown ? ' + ?' : '');
      costEl.dataset.v = cost;
    }
    function spinReel(k, final, dur) {
      const strip = stripEl(k), win = strip.parentElement;
      if (!dur || !strip.animate) { strip.innerHTML = cell(final); return Promise.resolve(); }
      const n = 8 + Math.round(dur / 120), L = POOL[k];
      const fill = Array.from({ length: n }, (_, x) => cell(x % 5 === 3 || !L.length ? '' : pick(L).id));
      strip.innerHTML = strip.innerHTML + fill.join('') + cell(final);
      const h = win.clientHeight, dist = (strip.children.length - 1) * h;
      win.classList.remove('land'); win.classList.add('spin');
      const a = strip.animate([{ transform: 'translateY(0)' }, { transform: `translateY(-${dist}px)` }],
        { duration: dur, easing: 'cubic-bezier(.12,.62,.18,1)', fill: 'forwards' });
      return a.finished.catch(() => {}).then(() => {
        strip.innerHTML = cell(final); a.cancel();
        win.classList.remove('spin'); void win.offsetWidth; win.classList.add('land');
      });
    }
    async function spin() {
      if (spinning) return;
      const todo = KEYS.filter(k => !(st && held[k]));
      if (!todo.length) return;
      const next = Object.assign({}, st || {});
      todo.forEach(k => { next[k] = roll(k); });
      spinning = true; render();
      const rm = reduced();
      await Promise.all(todo.map(k => spinReel(k, next[k], rm ? 0 : 700 + KEYS.indexOf(k) * 240)));
      st = next; spinning = false; spins++;
      root.dataset.spins = spins;
      try { history.replaceState(null, '', LP + '/slots/?' + query(st)); } catch (e) {}
      render();
    }
    function showToast(msg) {
      toast.textContent = msg; toast.hidden = false;
      clearTimeout(toastT); toastT = setTimeout(() => { toast.hidden = true; }, 2600);
    }
    async function copy(u) {
      try { await navigator.clipboard.writeText(u); return true; } catch (e) {}
      try {
        const ta = document.createElement('textarea'); ta.value = u; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok;
      } catch (e) { return false; }
    }
    spinBtn.addEventListener('click', spin);
    root.addEventListener('click', e => {
      const b = e.target.closest('[data-hold]'); if (!b || b.disabled || !st) return;
      held[b.dataset.hold] = !held[b.dataset.hold]; render();
    });
    shareBtn.addEventListener('click', async () => {
      if (!st || spinning) return;
      const u = shareUrl();
      shareBtn.dataset.url = u;
      if (navigator.share) {
        try { await navigator.share({ title: document.title, text: t('rrShareText'), url: u }); return; }
        catch (e) { if (e && e.name === 'AbortError') return; }
      }
      showToast((await copy(u)) ? t('tCopied') : u);
    });
    // Geteilte Challenge: /slots/?p=…&s=…
    const P = new URLSearchParams(location.search);
    if (KEYS.some(k => P.has(k))) {
      st = {};
      KEYS.forEach(k => { const id = (P.get(k) || '').split(':')[0]; st[k] = BY[id] && BY[id].slot === SLOT[k] ? id : ''; });
      renderCells();
    }
    render();
    hooks.push(() => { if (!spinning) renderCells(); render(); });
    window.fbRoulette = { roll, keys: KEYS, none: NONE_P, pools: () => Object.fromEntries(KEYS.map(k => [k, POOL[k].map(i => i.id)])), state: () => (st ? Object.assign({}, st) : null), shareUrl: () => (st ? shareUrl() : null) };
  })();


  // ======================================================== Challenge-Slot (/tools/challenge/, v31)
  (function challenge() {
    const root = $('#chRoot');
    if (!root || !window.FBChallenge) return;
    const FC = window.FBChallenge, C = FC.build();
    const el = id => document.getElementById(id);
    const KEY = 'fbChallenge';
    const load = () => { try { const x = JSON.parse(localStorage.getItem(KEY) || '{}'); return x && typeof x === 'object' ? x : {}; } catch (e) { return {}; } };
    const S = load();
    const store = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
    const okLv = L => Array.isArray(L) && L.length && L.every(x => [0, 1, 2].includes(x));
    if (!okLv(S.lv)) S.lv = [0, 1, 2];
    if (![1, 2, 3, 4].includes(S.p)) S.p = 1;
    S.ind = S.ind !== false; S.sound = !!S.sound;
    delete S.mode; delete S.noveh;
    const st0 = S.st && typeof S.st === 'object' ? S.st : {};
    S.st = { cur: +st0.cur || 0, best: +st0.best || 0, won: +st0.won || 0, tries: +st0.tries || 0, last: st0.last || '' };
    // Link-Parameter haben Vorrang: ?p=2&lvl=mittel,schwer&ind=0&id=D12
    const Q = new URLSearchParams(location.search);
    const qp = parseInt(Q.get('p'), 10); if (qp >= 1 && qp <= 4) S.p = qp;
    const qlv = FC.parseLevels(Q.get('lvl') || Q.get('levels')); if (qlv) S.lv = qlv;
    if (Q.has('ind')) S.ind = Q.get('ind') !== '0';
    const filt = () => ({ p: S.p, levels: S.lv.slice().sort(), ind: S.ind });
    let cur = null, spinning = false, spins = 0, toastT = 0, ac = null, logged = '';
    const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spinBtn = el('chSpin'), spinTxt = el('chSpinTxt'), card = el('chCard'), shareBtn = el('chShare'), toast = el('chToast');
    const R = FC.Reel(el('chReel'), { lang }), machine = el('chMachine');
    let lastTick = 0;

    function tone(f, d, type, vol) {
      if (!S.sound) return;
      try {
        ac = ac || new (window.AudioContext || window.webkitAudioContext)();
        const o = ac.createOscillator(), g = ac.createGain(), t0 = ac.currentTime;
        o.type = type || 'triangle'; o.frequency.value = f; g.gain.setValueAtTime(vol || .07, t0); g.gain.exponentialRampToValueAtTime(.0001, t0 + d);
        o.connect(g).connect(ac.destination); o.start(t0); o.stop(t0 + d + .02);
      } catch (e) {}
    }
    const fanfare = lv => [0, 1, 2].forEach(i => setTimeout(() => tone([523, 659, 784, 1046][Math.min(3, i + (lv > 1 ? 1 : 0))], .18, 'square', .045), i * 110));

    function renderFilters() {
      const all = S.lv.length === 3;
      root.querySelectorAll('#chP [data-p]').forEach(b => { b.setAttribute('aria-pressed', String(+b.dataset.p === S.p)); b.disabled = spinning; });
      el('chIndRow').hidden = S.p === 1;
      el('chInd').checked = S.ind; el('chInd').disabled = spinning;
      root.querySelectorAll('#chLv [data-lv]').forEach(b => {
        const v = b.dataset.lv;
        if (v === 'all') { b.setAttribute('aria-pressed', String(all)); b.disabled = spinning; return; }
        const on = S.lv.includes(+v);
        b.setAttribute('aria-pressed', String(on));
        b.disabled = spinning || (on && S.lv.length === 1);   // nie null Stufen
        b.title = on && S.lv.length === 1 ? t('chLvLast') : '';
      });
      // Zähler pro Stufe (für die gewählte Spielerzahl) und gesamt auf der Walze
      root.querySelectorAll('#chLv .ch-lvn').forEach((x, i) => { x.textContent = nf(C.count({ p: S.p, ind: S.ind, levels: [i] })); });
      const n = C.count(filt());
      el('chCountN').textContent = nf(n);
      el('chCountN').dataset.n = n;
      el('chCountAll').textContent = n === C.all.length ? '' : t('chOfAll', { n: nf(C.all.length) });
      spinBtn.disabled = spinning || !n;
    }
    function setSound() {
      const b = el('chSound');
      b.setAttribute('aria-pressed', String(S.sound));
      b.querySelector('.ch-snd-ic').textContent = S.sound ? '🔊' : '🔇';
    }
    function tagFor(P) {
      const pl = P.players;
      if (pl.length === 4) return t('chTagAll');
      if (pl.length === 1) return t('chP' + pl[0]);
      return t('chTagSquad24');
    }
    function renderCard() {
      ['chBadge', 'chTitle', 'chRule'].forEach(id => { el(id).removeAttribute('data-i18n'); });
      const P = cur ? C.parts(cur, lang) : null;
      card.classList.toggle('ch-idle-card', !P);
      if (!P) return;
      card.dataset.lv = P.lv;
      el('chBadge').textContent = P.lvName;
      el('chTitle').textContent = P.text;
      el('chRule').textContent = '';
      el('chRule').hidden = true;
      el('chId').textContent = t('chIdLbl') + ' ' + P.id;
      el('chTags').innerHTML = `<span>${esc(tagFor(P))}</span>`;
    }
    function render() {
      spinTxt.textContent = t(spinning ? 'chSpinning' : (cur ? 'chAgain' : 'chSpin'));
      root.classList.toggle('spinning', spinning); machine.classList.toggle('spinning', spinning);
      card.classList.toggle('ready', !!cur && !spinning);
      shareBtn.disabled = !cur || spinning;
      const can = !!cur && !spinning && logged !== cur.id;
      el('chDone').disabled = !can; el('chFail').disabled = !can;
      el('chStCur').textContent = nf(S.st.cur); el('chStBest').textContent = nf(S.st.best); el('chStWon').textContent = nf(S.st.won); el('chStTry').textContent = nf(S.st.tries);
      renderFilters();
    }
    // Ruhezustand der Walze: drei zufällige Challenges der aktuellen Auswahl (oder die gezogene in der Mitte)
    function idle(c) { R.set(C.idle3(filt(), c || null), !!c); }
    function url(c) {
      const p = ['p=' + S.p], lv = FC.levelsParam(S.lv.slice().sort());
      if (lv) p.push('lvl=' + lv);
      if (S.p > 1 && !S.ind) p.push('ind=0');
      if (c) p.push('id=' + c.id);
      return LP + '/tools/challenge/?' + p.join('&');
    }
    async function spin() {
      if (spinning) return;
      const next = C.roll(filt(), cur);
      if (!next) { showToast(t('chNone')); return; }
      spinning = true; render();
      card.classList.remove('pop');
      // Streifen mit allen passenden Challenges der Auswahl (zufällige Reihenfolge), der Gewinner steht am Ende
      await R.spin(C.reelList(filt(), next), reduced() ? 0 : 5200, () => { const n = performance.now(); if (n - lastTick > 55) { lastTick = n; tone(280, .025, 'square', .015); } });
      cur = next; spinning = false; spins++;
      root.dataset.spins = spins; root.dataset.id = cur.id;
      try { history.replaceState(null, '', url(cur)); } catch (e) {}
      tone(520, .12);
      renderCard(); render();
      void card.offsetWidth; card.classList.add('pop');
      fanfare(cur.lv);
    }
    function showToast(msg) { toast.textContent = msg; toast.hidden = false; clearTimeout(toastT); toastT = setTimeout(() => { toast.hidden = true; }, 2800); }
    async function copy(u) {
      try { await navigator.clipboard.writeText(u); return true; } catch (e) {}
      try {
        const ta = document.createElement('textarea'); ta.value = u; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(ta); ta.select(); const ok = document.execCommand('copy'); ta.remove(); return ok;
      } catch (e) { return false; }
    }
    function changed() {
      store(); if (!spinning) R.set(C.idle3(filt()), false);
      if (cur && !spinning) { try { history.replaceState(null, '', url(cur)); } catch (e) {} }
      render();
    }

    spinBtn.addEventListener('click', spin);
    el('chReel').addEventListener('click', () => { if (!spinBtn.disabled) spin(); });
    el('chP').addEventListener('click', e => { const b = e.target.closest('[data-p]'); if (!b || spinning) return; S.p = +b.dataset.p; changed(); });
    el('chInd').addEventListener('change', e => { if (spinning) return; S.ind = e.target.checked; changed(); });
    el('chLv').addEventListener('click', e => {
      const b = e.target.closest('[data-lv]'); if (!b || b.disabled || spinning) return;
      const v = b.dataset.lv;
      if (v === 'all') S.lv = [0, 1, 2];
      else {
        const x = +v;
        if (S.lv.includes(x)) { if (S.lv.length > 1) S.lv = S.lv.filter(y => y !== x); }
        else S.lv = S.lv.concat(x).sort();
      }
      changed();
    });
    el('chSound').addEventListener('click', () => { S.sound = !S.sound; store(); setSound(); if (S.sound) tone(660, .1); });
    shareBtn.addEventListener('click', async () => {
      if (!cur || spinning) return;
      const u = location.origin + url(cur);
      shareBtn.dataset.url = u;
      if (navigator.share) {
        try { await navigator.share({ title: C.parts(cur, lang).text + ' · ' + document.title, text: t('chShareText'), url: u }); return; }
        catch (e) { if (e && e.name === 'AbortError') return; }
      }
      showToast((await copy(u)) ? t('tCopied') : u);
    });
    function log(ok) {
      if (!cur || spinning || logged === cur.id) return;
      logged = cur.id; S.st.tries++; S.st.last = cur.id;
      if (ok) { S.st.won++; S.st.cur++; S.st.best = Math.max(S.st.best, S.st.cur); } else S.st.cur = 0;
      store(); render(); showToast(t('chLogged'));
      if (ok) fanfare(3); else tone(180, .25, 'sawtooth', .04);
    }
    el('chDone').addEventListener('click', () => log(true));
    el('chFail').addEventListener('click', () => log(false));
    el('chReset').addEventListener('click', () => { S.st = { cur: 0, best: 0, won: 0, tries: 0, last: '' }; store(); render(); showToast(t('chResetDone')); });

    // Geteilte Challenge: ?id=<Nr.> (alte ?c=-Links der Zufalls-Challenge gibt es nicht mehr)
    if (Q.has('id')) {
      cur = C.get(Q.get('id'));
      if (cur) { root.dataset.id = cur.id; idle(cur); renderCard(); card.classList.add('pop'); }
      else { idle(); showToast(t('chNotFound')); }
    } else { idle(); if (Q.has('c')) showToast(t('chOldLink')); }
    store(); setSound(); render();
    hooks.push(() => { R.setLang(lang); renderCard(); render(); });
    window.fbChallengeApp = { engine: C, reel: R, filter: filt, count: () => C.count(filt()), current: () => (cur ? C.parts(cur, lang) : null), shareUrl: () => (cur ? location.origin + url(cur) : null), spin };
  })();

  // ======================================================== Roulette für Streamer (/tools/streamer/)
  (function streamer() {
    const form = $('#stForm');
    if (!form) return;
    const el = id => document.getElementById(id);
    const frame = el('stFrame'), out = el('stUrl'), msg = el('stMsg'), stage = el('stStage');
    const SIZE = { grid: [800, 450], row: [1280, 210] };
    const chan = () => el('stChan').value.trim().toLowerCase().replace(/^https?:\/\/(www\.|m\.)?twitch\.tv\//, '').replace(/^[@#]/, '').split(/[/?#\s]/)[0].replace(/[^a-z0-9_]/g, '').slice(0, 25);
    const mode = () => (el('stMode').value === 'challenge' ? 'challenge' : 'roulette');
    const defCmd = () => mode();
    const cmd = () => el('stCmd').value.trim().toLowerCase().replace(/^!+/, '').replace(/\s+/g, '').slice(0, 25) || defCmd();
    const lvBoxes = () => [...form.querySelectorAll('input[name="stLv"]')];
    function lvGuard() { const on = lvBoxes().filter(b => b.checked); lvBoxes().forEach(b => { b.disabled = b.checked && on.length === 1; }); }
    let lastMode = mode();
    function query() {
      const p = [], c = chan(), cm = cmd(), cd = Math.max(0, Math.min(3600, parseInt(el('stCd').value, 10)));
      if (mode() === 'challenge') {
        p.push('mode=challenge');
        const lv = lvBoxes().filter(b => b.checked).map(b => b.value);
        if (el('stPl').value !== '1') p.push('p=' + el('stPl').value);
        if (lv.length && lv.length < 3) p.push('lvl=' + lv.join(','));
        if (el('stPl').value !== '1' && !el('stInd').checked) p.push('ind=0');
      }
      if (c) p.push('channel=' + c);
      if (cm !== defCmd()) p.push('cmd=' + encodeURIComponent(cm));
      if (Number.isFinite(cd) && cd !== 30) p.push('cooldown=' + cd);
      if (el('stLang').value !== 'de') p.push('lang=' + el('stLang').value);
      if (el('stLayout').value === 'row') p.push('layout=row');
      if (el('stScale').value) p.push('scale=' + el('stScale').value);
      if (el('stSound').checked) p.push('sound=1');
      return p.join('&');
    }
    let timer = 0, lastSrc = frame.getAttribute('src');
    function update(now) {
      if (mode() !== lastMode) {   // Standardbefehl mitwechseln, solange er nicht angepasst wurde
        const v = el('stCmd').value.trim().toLowerCase().replace(/^!+/, '');
        if (!v || v === lastMode) el('stCmd').value = mode();
        lastMode = mode();
      }
      el('stLvBox').hidden = mode() !== 'challenge';
      lvGuard();
      el('stInd').disabled = el('stPl').value === '1';
      const q = query(), path = '/overlay/roulette/' + (q ? '?' + q : '');
      out.value = location.origin + path;
      const [w, h] = SIZE[el('stLayout').value] || SIZE.grid;
      stage.style.aspectRatio = w + ' / ' + h;
      el('stStep3').innerHTML = t('stStep3', { cmd: '!' + esc(cmd()) });
      frame.title = t('stPreview');
      clearTimeout(timer);
      const go = () => { if (path !== lastSrc) { frame.src = path; lastSrc = path; } };
      if (now) go(); else timer = setTimeout(go, 600);
    }
    form.addEventListener('input', () => { msg.textContent = ''; update(false); });
    form.addEventListener('change', () => update(false));
    form.addEventListener('submit', e => { e.preventDefault(); update(true); });
    el('stCopy').addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(out.value); msg.textContent = t('tCopied'); }
      catch (e) { out.focus(); out.select(); msg.textContent = ''; }
    });
    out.addEventListener('focus', () => out.select());
    if (['en', 'es', 'fr'].includes(lang)) el('stLang').value = lang;
    if (location.hash === '#challenge' || new URLSearchParams(location.search).get('mode') === 'challenge') el('stMode').value = 'challenge';
    update(true);
    hooks.push(() => update(true));
  })();

  // ======================================================== Progression-Planer (v25)
  (function progression() {
    const root = $('#prRoot');
    if (!root) return;
    const el = id => document.getElementById(id), KEY = 'fbProgression';
    const TR = ['Assault', 'Medic', 'Recon', 'Support', 'Driver', 'Pilot', 'WARDOG'];
    const PR = D.progression || {};
    const selT = el('prTrack'), inL = el('prLevel'), inC = el('prCash'), inTo = el('prTo');
    const int = (x, lo, hi) => { const n = parseInt(x, 10); return Number.isFinite(n) ? Math.max(lo, Math.min(hi, n)) : null; };
    // Startwerte: URL > gespeichert > Standard
    const q = new URLSearchParams(location.search);
    let saved = {}; try { saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) {}
    const pick = (k, sk) => q.has(k) ? q.get(k) : saved[sk];
    const t0 = pick('t', 't'); selT.value = TR.includes(t0) ? t0 : 'Assault';
    const l0 = int(pick('lv', 'lv'), 0, 200); inL.value = l0 === null ? 1 : l0;
    const c0 = int(pick('cash', 'cash'), 0, 1e9); inC.value = c0 === null ? '' : c0;
    const to0 = int(pick('to', 'to'), 1, 200); inTo.value = to0 === null ? '' : to0;
    const lvNum = i => has(i, 'level') && typeof i.level.v === 'number' ? i.level.v : null;
    function state() {
      return { t: selT.value, lv: int(inL.value, 0, 200) || 0, cash: int(inC.value, 0, 1e9), to: int(inTo.value, 1, 200) };
    }
    function calc(S) {
      const all = D.items.filter(i => has(i, 'track') && i.track.v === S.t);
      all.forEach(i => { delete i._ok; });
      const lvl = all.filter(i => lvNum(i) !== null).sort((a, b) => lvNum(a) - lvNum(b) || a.name.localeCompare(b.name));
      const next = lvl.filter(i => lvNum(i) > S.lv && (S.to === null || lvNum(i) <= S.to));
      const have = lvl.filter(i => lvNum(i) <= S.lv);
      const std = all.filter(i => lvNum(i) === null);
      let sum = 0, unk = 0, comm = false, run = 0, afford = 0, affordLv = null, blocked = false;
      next.forEach(i => {
        const u = num(i, 'unlock');
        if (u === null) { unk++; i._ok = null; return; }
        sum += u; if (i.unlock.f === 'c') comm = true;
        if (S.cash !== null && !blocked) {
          if (run + u <= S.cash) { run += u; afford++; affordLv = lvNum(i); i._ok = true; } else { blocked = true; i._ok = false; }
        } else i._ok = S.cash === null ? null : false;
      });
      const nUnl = next.filter(i => num(i, 'unlock') !== null).length;
      return { all, lvl, next, have, std, sum, unk, comm, afford, affordLv, nUnl, rest: S.cash === null ? null : sum - S.cash };
    }
    const unlockTxt = i => { const u = num(i, 'unlock'); return u === null ? unk() : (u === 0 ? esc(t('tFree')) : fmt('unlock', u) + warn(i.unlock) + ' ' + srcLink(i.unlock)); };
    function row(i) {
      const p = num(i, 'price');
      const ok = i._ok === true ? ' ok' : (i._ok === false ? ' no' : '');
      return `<li class="pr-item${ok}">${pic(i, 30, 'li')}<span class="pr-iname"><a href="${LP}/tools/datenbank/?id=${i.id}">${esc(i.name)}</a><small>${esc(catName(i.cat))}${i.type ? ' · ' + esc(i.type) : ''} · ${esc(t('tLv'))} ${lvNum(i) === null ? (has(i, 'level') ? esc(t('tStd')) : esc(t('prLvUnk'))) : lvNum(i)}${warn(i.level)}</small></span>`
        + `<span class="pr-icost"><b>${unlockTxt(i)}</b><small>${esc(t('prPerLife'))}: ${p === null ? esc(t('tUnknown')) : (p === 0 ? esc(t('tFree')) : esc(money(p))) + warn(i.price)}</small></span></li>`;
    }
    function groups(list) {
      const by = {};
      list.forEach(i => { const k = lvNum(i); (by[k] = by[k] || []).push(i); });
      return Object.keys(by).map(Number).sort((a, b) => a - b).map(k => {
        const s = by[k].reduce((x, i) => x + (num(i, 'unlock') || 0), 0), u = by[k].some(i => num(i, 'unlock') === null);
        return `<div class="pr-lv"><div class="pr-lvh"><b>${esc(t('tLv'))} ${k}</b><small>${s ? esc(money(s)) : ''}${u ? (s ? ' + ' : '') + esc(t('prPlusUnk')) : ''}</small></div><ul class="pr-list">${by[k].map(row).join('')}</ul></div>`;
      }).join('');
    }
    function render() {
      const S = state(), R = calc(S);
      const kpi = (lab, v, sub, cls) => `<div class="lo-kpi${cls ? ' ' + cls : ''}"><small>${esc(lab)}</small><b>${v}</b>${sub ? `<span class="lo-kpi-sub">${sub}</span>` : ''}</div>`;
      const first = R.next[0], firstLv = first ? lvNum(first) : null, firstN = R.next.filter(i => lvNum(i) === firstLv);
      const toLv = S.to !== null ? S.to : (R.next.length ? lvNum(R.next[R.next.length - 1]) : null);
      let h = kpi(S.to !== null ? t('prSumTo', { n: S.to }) : t('prSumAll'), esc(money(R.sum)) + (R.comm ? ' ⚠' : ''),
        esc(t('prSumSub', { n: R.nUnl, m: R.next.length })) + (R.unk ? ' · ' + esc(t('prUnkN', { n: R.unk })) : ''), 'main');
      h += kpi(t('prNextLv'), firstLv === null ? '–' : esc(t('tLv')) + ' ' + firstLv, firstN.length ? esc(firstN.slice(0, 3).map(i => i.name).join(', ') + (firstN.length > 3 ? ' …' : '')) : esc(t('prNoneLeft')));
      if (S.cash !== null) {
        h += kpi(t('prAfford'), esc(t('prAffordV', { n: R.afford, m: R.nUnl })), R.affordLv !== null ? esc(t('prAffordLv', { n: R.affordLv })) : '');
        h += kpi(R.rest > 0 ? t('prMissing') : t('prLeft'), esc(money(Math.abs(R.rest))), R.unk ? esc(t('prOnlyKnown')) : '', R.rest > 0 ? 'bad' : 'good');
      } else h += kpi(t('prAfford'), '–', esc(t('prEnterCash')));
      el('prKpis').innerHTML = h;
      const lvO = R.all.filter(i => has(i, 'level') && i.level.f === 'o').length, lvC = R.all.filter(i => has(i, 'level') && i.level.f === 'c').length;
      const uK = R.all.filter(i => num(i, 'unlock') !== null).length;
      el('prStat').innerHTML = esc(t('prStat', { t: S.t, n: R.all.length, o: lvO, c: lvC, u: uK, x: R.all.length - uK })) + (lvC ? ' ' + warn({ f: 'c' }) : '');
      el('prNext').innerHTML = R.next.length ? groups(R.next) : `<p class="fbt-sub">${esc(t(R.lvl.length ? 'prAllDone' : 'prNoData'))}</p>`;
      el('prHave').innerHTML = R.have.length ? groups(R.have) : `<p class="fbt-sub">${esc(t('tNone'))}</p>`;
      el('prHaveN').textContent = '(' + R.have.length + ')';
      el('prStd').innerHTML = R.std.length ? `<ul class="pr-list">${R.std.map(row).join('')}</ul>` : `<p class="fbt-sub">${esc(t('tNone'))}</p>`;
      el('prStdN').textContent = '(' + R.std.length + ')';
      el('prStdBox').hidden = !R.std.length;
      // XP bis zum nächsten Meilenstein (nur Rollen-Tracks laut Patchnotes)
      const X = PR.xpCurve, xb = el('prXpNext');
      if (X && (PR.xpTracks || []).includes(S.t)) {
        const ms = Object.keys(X.v).map(Number).sort((a, b) => a - b), m = ms.find(k => k > S.lv);
        xb.innerHTML = (m ? esc(t('prXpNext', { n: m, x: nf(X.v[m]) })) : esc(t('prXpMax', { n: ms[ms.length - 1], x: nf(X.v[ms[ms.length - 1]]) }))) + ' ' + srcLink(X);
      } else xb.textContent = t('prXpNone');
      // speichern
      const o = { t: S.t, lv: S.lv }; if (S.cash !== null) o.cash = S.cash; if (S.to !== null) o.to = S.to;
      try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {}
      const P = new URLSearchParams(); Object.entries(o).forEach(([k, v]) => P.set(k, v));
      history.replaceState(null, '', location.pathname + '?' + P);
      root.dataset.sum = R.sum; root.dataset.next = R.next.length; root.dataset.unk = R.unk; root.dataset.afford = R.afford;
    }
    [selT, inL, inC, inTo].forEach(x => x.addEventListener('input', render));
    selT.addEventListener('change', render);
    window.fbProgCalc = S => { const R = calc(Object.assign({ t: 'Assault', lv: 0, cash: null, to: null }, S)); return { sum: R.sum, next: R.next.map(i => i.id), unk: R.unk, afford: R.afford, have: R.have.length, std: R.std.length }; };
    render();
    hooks.push(render);
  })();

})();
