// ---------- Frontbuch: Guide-Suche & Filter (nutzt window.FB_GUIDES aus guides-data.js) ----------
(function () {
  const DATA = window.FB_GUIDES || [];
  const LP = window.fbLP || '';
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }
  const IDX = DATA.map(g => ({ g, t: norm(g.t), k: norm(g.k), d: norm(g.d), c: norm(g.cl) }));
  function search(q) {
    const toks = norm(q).split(' ').filter(Boolean);
    if (!toks.length) return DATA.map(g => ({ g, score: 0 }));
    const out = [];
    IDX.forEach(e => {
      let score = 0;
      for (const tk of toks) {
        let s = 0;
        if (e.t.includes(tk)) s += 5;
        if (e.k.includes(tk)) s += 3;
        if (e.c.includes(tk)) s += 2;
        if (e.d.includes(tk)) s += 1;
        if (!s) return;          // alle Wörter müssen vorkommen
        score += s;
      }
      out.push({ g: e.g, score });
    });
    return out.sort((a, b) => b.score - a.score);
  }
  window.fbSearch = search;

  // ----- Startseite: Live-Ergebnisse -----
  const homeInput = document.getElementById('fbHomeSearch');
  const homeRes = document.getElementById('fbHomeResults');
  if (homeInput && homeRes) {
    let last = '';
    function render() {
      const q = homeInput.value.trim();
      last = q;
      if (!q) { homeRes.hidden = true; homeRes.innerHTML = ''; return; }
      const r = search(q).slice(0, 6);
      homeRes.innerHTML = r.length
        ? r.map(x => `<li><a href="${LP}/guides/${x.g.s}/"><span>${escapeHtml(x.g.t)}</span><small>${escapeHtml(x.g.cl)}</small></a></li>`).join('') +
          `<li><a href="${LP}/guides/?q=${encodeURIComponent(q)}"><b>${escapeHtml(t('homeAllGuides'))}</b></a></li>`
        : `<li class="none">${escapeHtml(t('searchNone'))}</li>`;
      homeRes.hidden = false;
    }
    homeInput.addEventListener('input', render);
    homeInput.closest('form').addEventListener('submit', (e) => {
      e.preventDefault();
      location.href = LP + '/guides/' + (homeInput.value.trim() ? '?q=' + encodeURIComponent(homeInput.value.trim()) : '');
    });
    homeInput.addEventListener('keydown', (e) => { if (e.key === 'Escape') { homeInput.value = ''; render(); } });
    window.fbLangHooks.push(() => { if (last) render(); });
  }

  // ----- Guide-Übersicht: Chips + Suche -----
  const list = document.getElementById('fbList');
  if (!list) return;
  const input = document.getElementById('fbSearch');
  const chips = Array.from(document.querySelectorAll('#fbChips .fb-chip'));
  const count = document.getElementById('fbCount');
  const none = document.getElementById('fbNone');
  const items = new Map(Array.from(list.children).map(li => [li.dataset.slug, li]));
  const params = new URLSearchParams(location.search);
  let cat = params.get('k') || 'alle';
  if (!chips.some(c => c.dataset.cat === cat)) cat = 'alle';
  input.value = params.get('q') || '';

  function apply() {
    const res = search(input.value).filter(x => cat === 'alle' || x.g.c === cat);
    items.forEach(li => { li.hidden = true; });
    res.forEach(x => { const li = items.get(x.g.s); if (li) { li.hidden = false; list.appendChild(li); } });
    chips.forEach(c => c.setAttribute('aria-pressed', c.dataset.cat === cat ? 'true' : 'false'));
    count.textContent = t('searchCount', { n: res.length });
    none.hidden = res.length > 0;
    const p = new URLSearchParams();
    if (input.value.trim()) p.set('q', input.value.trim());
    if (cat !== 'alle') p.set('k', cat);
    const qs = p.toString();
    history.replaceState(null, '', location.pathname + (qs ? '?' + qs : ''));
  }
  chips.forEach(c => c.addEventListener('click', () => { cat = c.dataset.cat; apply(); }));
  input.addEventListener('input', apply);
  input.closest('form').addEventListener('submit', (e) => { e.preventDefault(); apply(); });
  window.fbLangHooks.push(apply);
  apply();
})();
