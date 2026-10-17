const l81Table = [
  [132,850],[140,840],[151,830],[163,820],[175,810],[187,800],[198,790],[208,780],
  [219,770],[229,760],[239,750],[250,740],[260,730],[270,720],[280,710],[290,700],
  [300,690],[310,680],[319,670],[329,660],[339,650],[348,640],[358,630],[367,620],
  [376,610],[385,600],[394,590],[403,580],[412,570],[420,560],[429,550],[437,540],
  [446,530],[454,520],[462,510],[470,500],[478,490],[486,480],[494,470],[500,461],
  [501,460],[509,450],[516,440],[524,430],[531,420],[538,410],[545,400],[552,390],
  [559,380],[565,370],[572,360],[578,350],[585,340],[591,330],[597,320],[603,310],
  [609,300],[615,290],[620,280],[626,270],[631,260],[636,250],[641,240],[646,230],
  [651,220],[656,210],[661,200],[666,190],[670,180],[675,170],[680,160],[684,150]
];

function interpolateMils(distance) {
  if (distance < 132 || distance > 684) return null;
  for (let i = 0; i < l81Table.length - 1; i++) {
    const [r1, m1] = l81Table[i];
    const [r2, m2] = l81Table[i+1];
    if (distance >= r1 && distance <= r2) {
      const t = (distance - r1) / (r2 - r1);
      return Math.round(m1 + t * (m2 - m1));
    }
  }
  return null;
}

function copyResult(event) {
  const dist = document.getElementById('distance').textContent || '';
  const bearing = document.getElementById('bearing').textContent || '';
  const az = document.getElementById('azMil').textContent || '';
  const milsEl = document.querySelector('#milResult .mil');
  const mils = milsEl ? milsEl.textContent : '';

  const text = mils
    ? `${dist} · ${bearing} · ${az} · ${mils}`
    : `${dist} · ${bearing} · ${az}`;

  const btn = event.currentTarget || event.target;

  function success() {
    btn.textContent = t('copied');
    setTimeout(() => btn.textContent = t('copyBtn'), 1600);
  }

  function fallbackCopy() {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    document.body.appendChild(ta);
    ta.select();
    try {
      const ok = document.execCommand('copy');
      if (ok) success();
      else alert(t('copyFail') + '\n\n' + text);
    } catch (e) {
      alert(t('copyFail') + '\n\n' + text);
    }
    document.body.removeChild(ta);
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(success).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

function swapPositions() {
  const gx = document.getElementById('gx');
  const gy = document.getElementById('gy');
  const tx = document.getElementById('tx');
  const ty = document.getElementById('ty');

  const tempX = gx.value;
  const tempY = gy.value;

  gx.value = tx.value;
  gy.value = ty.value;
  tx.value = tempX;
  ty.value = tempY;

  ['gx', 'gy', 'tx', 'ty'].forEach(id => syncInput(id));
}

function loadFromHistory(index) {
  const e = history[index];
  if (!e) return;
  document.getElementById('gx').value = Number(e.gx).toFixed(2);
  document.getElementById('gy').value = Number(e.gy).toFixed(2);
  document.getElementById('tx').value = Number(e.tx).toFixed(2);
  document.getElementById('ty').value = Number(e.ty).toFixed(2);
  document.getElementById('weapon').value = e.weapon || 'mortar';
  ['gx','gy','tx','ty'].forEach(id => syncInput(id));
  calculate();
}

let lastResult = null;

function dirIndexOf(bearing) {
  return Math.round(bearing / 22.5) % 16;
}

function renderResult() {
  const r = lastResult;
  if (!r) return;
  const cardinal = t('dirs')[r.dirIndex];
  document.getElementById('distance').textContent = Math.round(r.distance) + ' m';
  document.getElementById('bearing').textContent = Math.round(r.bearing) + '°  (' + cardinal + ')';
  document.getElementById('azMil').textContent = r.azMil + ' mil';

  let statusHtml = '';
  let milHtml = '';
  const d = r.distance;

  if (r.weapon === 'mortar') {
    if (d >= 132 && d <= 684) {
      const mils = interpolateMils(d);
      milHtml = `<div class="label-important" style="margin-top:14px;">${t('elevation')}</div><div class="compass mil" style="font-size:1.4rem; color:#34d399;">${mils} mil</div>`;
      statusHtml = `<div class="status in-range">${t('inRangeMortar')}</div>`;
    } else if (d < 132) {
      statusHtml = `<div class="status out-range">${t('tooClose', {min: 132})}</div>`;
    } else {
      statusHtml = `<div class="status out-range">${t('outOfRangeMortar', {max: 684})}</div>`;
    }
  } else {
    if (d >= 780 && d <= 2629) {
      statusHtml = `<div class="status in-range">${t('inRangeArty')}</div>`;
      milHtml = `<div class="note" style="margin-top:10px;">${t('artyNote')}</div>`;
    } else {
      statusHtml = `<div class="status out-range">${t('outOfRangeArty')}</div>`;
    }
  }

  document.getElementById('milResult').innerHTML = milHtml;
  document.getElementById('status').innerHTML = statusHtml;
}

function calculate() {
  const gx = parseFloat(document.getElementById('gx').value);
  const gy = parseFloat(document.getElementById('gy').value);
  const tx = parseFloat(document.getElementById('tx').value);
  const ty = parseFloat(document.getElementById('ty').value);
  const weapon = document.getElementById('weapon').value;

  if (isNaN(gx) || isNaN(gy) || isNaN(tx) || isNaN(ty)) {
    alert(t('enterAll'));
    return;
  }

  const dx = tx - gx;
  const dy = ty - gy;
  const distance = 100 * Math.sqrt(dx*dx + dy*dy);

  let bearing = Math.atan2(dx, dy) * 180 / Math.PI;
  if (bearing < 0) bearing += 360;

  const azMil = Math.round(bearing * 6400 / 360);
  const dirIndex = dirIndexOf(bearing);

  lastResult = { distance, bearing, azMil, dirIndex, weapon };
  renderResult();
  document.getElementById('result').style.display = 'block';

  setTimeout(() => {
    document.getElementById('result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 80);

  const entry = {
    time: new Date().toLocaleTimeString('de-DE', {hour:'2-digit', minute:'2-digit'}),
    name: null,
    num: history.length + 1,
    gx, gy, tx, ty,
    distance: Math.round(distance),
    bearing: Math.round(bearing),
    dirIndex,
    cardinal: DE_DIRS[dirIndex],
    azMil,
    mils: (weapon === 'mortar' && distance >= 132 && distance <= 684) ? interpolateMils(distance) : null,
    weapon
  };
  saveToHistory(entry);
}

let history = [];

function loadHistory() {
  try {
    history = JSON.parse(localStorage.getItem('wardogsHistory') || '[]');
  } catch (e) {
    history = [];
  }
  renderHistory();
}

function saveToHistory(entry) {
  history.unshift(entry);
  if (history.length > 15) history = history.slice(0, 15);
  try {
    localStorage.setItem('wardogsHistory', JSON.stringify(history));
  } catch (e) {}
  renderHistory();
}


function shotDisplayName(e, i) {
  if (e.name) {
    const m = LEGACY_SHOT.exec(e.name);
    return m ? t('shotN', {n: m[1]}) : e.name;
  }
  return t('shotN', {n: e.num || (history.length - i)});
}

function shotDirection(e) {
  let idx = Number.isInteger(e.dirIndex) ? e.dirIndex : DE_DIRS.indexOf(e.cardinal);
  if (idx < 0) idx = dirIndexOf(Number(e.bearing) || 0);
  return t('dirs')[idx];
}

function renderHistory() {
  const list = document.getElementById('historyList');
  if (!history.length) {
    list.innerHTML = `<div style="color:#64748b; font-size:0.9rem;">${escapeHtml(t('noShots'))}</div>`;
    return;
  }
  list.innerHTML = history.map((e, i) => `
    <div class="history-item" onclick="loadFromHistory(${i})" title="${escapeHtml(t('clickToLoad'))}">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
        <input type="text" value="${escapeHtml(shotDisplayName(e, i))}" aria-label="${escapeHtml(t('shotName'))}" 
               onchange="renameShot(${i}, this.value)"
               onclick="event.stopPropagation()"
               style="flex:1; padding:7px 10px; font-size:0.85rem; background:#0c1017; border:1px solid #1e293b; border-radius:8px; color:#f1f5f9;">
        <span style="color:#64748b; font-size:0.75rem; white-space:nowrap;">${escapeHtml(e.time || '')}</span>
      </div>
      <div style="margin-top:6px;">
        <span style="font-weight:700; color:#34d399; font-size:1.05rem;">${e.distance} m</span>
        <span style="font-weight:700; color:#f59e0b; font-size:1.05rem;"> · ${e.bearing}° (${escapeHtml(shotDirection(e))})</span>
      </div>
      <div style="color:#64748b; font-size:0.8rem; margin-top:3px;">
        ${Number(e.gx).toFixed(2)},${Number(e.gy).toFixed(2)} → ${Number(e.tx).toFixed(2)},${Number(e.ty).toFixed(2)}
        ${e.mils != null ? ' · ' + e.mils + ' mil' : ''}
      </div>
    </div>
  `).join('');
}

function renameShot(index, newName) {
  if (history[index]) {
    history[index].name = newName;
    try { localStorage.setItem('wardogsHistory', JSON.stringify(history)); } catch (e) {}
  }
}

function clearHistory() {
  history = [];
  try { localStorage.removeItem('wardogsHistory'); } catch (e) {}
  renderHistory();
}

function syncSlider(id) {
  const slider = document.getElementById(id + 'Slider');
  const input = document.getElementById(id);
  const val = parseFloat(slider.value);
  input.value = val.toFixed(2);
}

function syncInput(id) {
  const input = document.getElementById(id);
  const slider = document.getElementById(id + 'Slider');
  let val = parseFloat(input.value);
  if (isNaN(val)) return;
  const min = parseFloat(slider.min);
  const max = parseFloat(slider.max);
  const clamped = Math.max(min, Math.min(max, val));
  if (clamped !== val) input.value = clamped;
  slider.value = clamped;
}

['gx','gy','tx','ty'].forEach(id => syncSlider(id));

// Sprachwechsel neu zeichnen + Verlauf laden
window.fbLangHooks.push(() => { renderResult(); renderHistory(); });
loadHistory();
renderResult();
renderHistory();
