// ---------- Frontbuch v26: Zufalls-Challenge – Generator (Seite /tools/challenge/ und Overlay ?mode=challenge) ----------
// Alle Challenges entstehen kombinatorisch aus Waffenregel × Ziel × Zusatzregel. Waffen, Klassen, Tracks und Preise kommen aus
// window.FB_DATA (fbsrc/data/wardogs.json); Ziele nutzen nur Mechaniken, die in unseren Guides mit Quelle beschrieben sind.
// Challenge-ID = Index im vollen Raster (Basis 36) – gleiche Daten = gleiche ID für alle.
(function () {
  'use strict';
  const LV = ['leicht', 'mittel', 'schwer', 'wahnsinn'];
  const LV_ALIAS = { leicht: 0, easy: 0, facil: 0, 'fácil': 0, facile: 0, '1': 0, mittel: 1, medium: 1, media: 1, moyen: 1, '2': 1,
    schwer: 2, hard: 2, dificil: 2, 'difícil': 2, difficile: 2, '3': 2, wahnsinn: 3, insane: 3, locura: 3, folie: 3, '4': 3 };
  // Klassen (deutscher Typ in der Datendatei) – Grundpunkte
  const CLASSES = [['Sturmgewehr', 'ar', 0], ['SMG', 'smg', 1], ['LMG', 'lmg', 1], ['DMR', 'dmr', 1], ['Scharfschützengewehr', 'sr', 2], ['Schrotflinte', 'sg', 2]];
  const SPECIAL = { 'Bogen': 'bow', 'Anti-Material-Gewehr': 'amr' };
  const TRACKS = ['Assault', 'Medic', 'Recon', 'Support'];

  const TX = {
    de: {
      title: 'Zufalls-Challenge', lv: ['Leicht', 'Mittel', 'Schwer', 'Wahnsinn'], reelW: 'Waffe', reelG: 'Ziel', reelM: 'Regel', solo: 'Solo', squad: 'Squad', veh: 'Fahrzeug',
      cls: { ar: ['Sturmgewehr', 'Sturmgewehre'], smg: ['SMG', 'SMGs'], lmg: ['LMG', 'LMGs'], dmr: ['DMR', 'DMRs'], sr: ['Scharfschützengewehr', 'Scharfschützengewehre'], sg: ['Schrotflinte', 'Schrotflinten'] },
      w: { free: ['Freie Wahl', 'Waffen frei wählbar'], cls: ['{c}', 'Nur {cp} als Primärwaffe'], pistol: ['Nur Pistole', 'Nur eine Pistole – keine Primärwaffe, kein Werfer'],
        prim: ['{w}', 'Nur {w} als Primärwaffe'], sec: ['{w}', 'Nur {w} – keine Primärwaffe, kein Werfer'], lau: ['{w}', 'Nur {w} (plus Pistole) – keine Primärwaffe'],
        trk: ['{t}-Track', 'Nur Waffen aus dem {t}-Track'] },
      g: {
        kl: ['Lebensversicherung', '{n} Kills in einem Leben', '{n} Kills mit der erlaubten Waffe in einem Leben'],
        km: ['Strichliste', '{n} Kills in diesem Match', '{n} Kills mit der erlaubten Waffe in diesem Match'],
        hs: ['Kopfjäger', '{n} Kopfschuss-Kills in diesem Match', '{n} Kopfschuss-Kills mit der erlaubten Waffe in diesem Match'],
        rev: ['Schutzengel', 'Belebe {n} Mitspieler wieder'], tow: ['Turmstürmer', 'Erobere {n} feindliche Drill Tower'], tow1: ['Turmstürmer', 'Erobere einen feindlichen Drill Tower'],
        hack: ['Hacker', 'Hacke {n} feindliche FOBs'], hack1: ['Hacker', 'Hacke eine feindliche FOB'], fob: ['Abrissbirne', 'Zerstöre eine feindliche FOB'],
        veh: ['Panzerknacker', 'Zerstöre {n} feindliche Bodenfahrzeuge'], veh1: ['Panzerknacker', 'Zerstöre ein feindliches Bodenfahrzeug'],
        heli: ['Himmelsfeger', 'Hol einen feindlichen Hubschrauber vom Himmel'], mor: ['Mörser-Meister', '{n} Kills mit dem L81-Mörser'], mor1: ['Mörser-Meister', 'Ein Kill mit dem L81-Mörser'],
        spot: ['Adlerauge', 'Spotte {n} Gegner oder Fahrzeuge'], door: ['Türöffner', 'Brich {n} Türen oder Tore mit dem Halligan Bar auf'],
        pal: ['Nachschub', 'Liefere {n} Paletten oder Kisten in die Control Zone'], taxi: ['Taxi', 'Bring {n} Mitspieler per Fahrzeug in die Control Zone'],
        hot: ['Hot-Zone-Held', 'Halte dich insgesamt {n} Minuten in der Hot Zone auf'], surv: ['Zäh', 'Überlebe {n} Minuten am Stück in der Control Zone'],
        win: ['Siegertyp', 'Gewinne das Match mit deinem Team'] },
      m: { none: 'Keine Zusatzregel', nohelm: 'Ohne Helm', novest: 'Ohne Schutzweste', noarmor: 'Ohne Helm und ohne Schutzweste', budget: 'Loadout höchstens {n} pro Leben',
        noveh: 'Kein Fahrzeug fahren oder fliegen', noscope: 'Keine Optik-Aufsätze', noatt: 'Keine Waffen-Aufsätze', nomed: 'Keine Heilmittel (Verband, IFAK, Medical Bag …)',
        noexpl: 'Keine Granaten, Molotows oder Sprengstoffe', pistolafter: 'Nach deinem ersten Tod nur noch Pistole', nopack: 'Kein Rucksack',
        squadrule: 'Der ganze Squad hält sich an die Waffenregel', squadclass: 'Der ganze Squad spielt dieselbe Waffenklasse' },
      money: n => n.toLocaleString('de-DE') + '\u00a0$', sep: ': '
    },
    en: {
      title: 'Random Challenge', lv: ['Easy', 'Medium', 'Hard', 'Insane'], reelW: 'Weapon', reelG: 'Goal', reelM: 'Rule', solo: 'Solo', squad: 'Squad', veh: 'Vehicle',
      cls: { ar: ['Assault rifle', 'assault rifles'], smg: ['SMG', 'SMGs'], lmg: ['LMG', 'LMGs'], dmr: ['DMR', 'DMRs'], sr: ['Sniper rifle', 'sniper rifles'], sg: ['Shotgun', 'shotguns'] },
      w: { free: ['Free choice', 'Any weapons allowed'], cls: ['{c}', 'Primary: {cp} only'], pistol: ['Pistol only', 'A pistol only – no primary, no launcher'],
        prim: ['{w}', 'Primary: {w} only'], sec: ['{w}', '{w} only – no primary, no launcher'], lau: ['{w}', '{w} only (plus a pistol) – no primary'],
        trk: ['{t} track', 'Only weapons from the {t} track'] },
      g: {
        kl: ['Life insurance', '{n} kills in a single life', '{n} kills with the allowed weapon in a single life'],
        km: ['Tally marks', '{n} kills this match', '{n} kills with the allowed weapon this match'],
        hs: ['Headhunter', '{n} headshot kills this match', '{n} headshot kills with the allowed weapon this match'],
        rev: ['Guardian angel', 'Revive {n} teammates'], tow: ['Tower stormer', 'Capture {n} enemy Drill Towers'], tow1: ['Tower stormer', 'Capture an enemy Drill Tower'],
        hack: ['Hacker', 'Hack {n} enemy FOBs'], hack1: ['Hacker', 'Hack an enemy FOB'], fob: ['Wrecking ball', 'Destroy an enemy FOB'],
        veh: ['Tank buster', 'Destroy {n} enemy ground vehicles'], veh1: ['Tank buster', 'Destroy an enemy ground vehicle'],
        heli: ['Sky sweeper', 'Bring down an enemy helicopter'], mor: ['Mortar master', '{n} kills with the L81 mortar'], mor1: ['Mortar master', 'One kill with the L81 mortar'],
        spot: ['Eagle eye', 'Spot {n} enemies or vehicles'], door: ['Door opener', 'Breach {n} doors or gates with the Halligan Bar'],
        pal: ['Supply run', 'Deliver {n} pallets or crates to the Control Zone'], taxi: ['Taxi', 'Drive {n} teammates into the Control Zone'],
        hot: ['Hot zone hero', 'Spend {n} minutes in total in the Hot Zone'], surv: ['Tough cookie', 'Survive {n} minutes in a row in the Control Zone'],
        win: ['Winner', 'Win the match with your team'] },
      m: { none: 'No extra rule', nohelm: 'No helmet', novest: 'No body armor vest', noarmor: 'No helmet and no vest', budget: 'Loadout {n} max per life',
        noveh: 'Don’t drive or fly any vehicle', noscope: 'No optics', noatt: 'No weapon attachments', nomed: 'No healing items (bandage, IFAK, medical bag …)',
        noexpl: 'No grenades, molotovs or explosives', pistolafter: 'After your first death: pistol only', nopack: 'No backpack',
        squadrule: 'Your whole squad follows the weapon rule', squadclass: 'Your whole squad uses the same weapon class' },
      money: n => '$' + n.toLocaleString('en-US'), sep: ': '
    },
    es: {
      title: 'Reto aleatorio', lv: ['Fácil', 'Media', 'Difícil', 'Locura'], reelW: 'Arma', reelG: 'Objetivo', reelM: 'Regla', solo: 'Solo', squad: 'Escuadra', veh: 'Vehículo',
      cls: { ar: ['Fusil de asalto', 'fusiles de asalto'], smg: ['Subfusil', 'subfusiles'], lmg: ['Ametralladora ligera', 'ametralladoras ligeras'], dmr: ['DMR', 'DMR'], sr: ['Fusil de francotirador', 'fusiles de francotirador'], sg: ['Escopeta', 'escopetas'] },
      w: { free: ['Libre', 'Armas a elección'], cls: ['{c}', 'Arma principal: solo {cp}'], pistol: ['Solo pistola', 'Solo una pistola: sin arma principal ni lanzador'],
        prim: ['{w}', 'Arma principal: solo {w}'], sec: ['{w}', 'Solo {w}: sin arma principal ni lanzador'], lau: ['{w}', 'Solo {w} (más pistola): sin arma principal'],
        trk: ['Track {t}', 'Solo armas del track {t}'] },
      g: {
        kl: ['Seguro de vida', '{n} bajas en una sola vida', '{n} bajas con el arma permitida en una sola vida'],
        km: ['Palotes', '{n} bajas en esta partida', '{n} bajas con el arma permitida en esta partida'],
        hs: ['Cazacabezas', '{n} bajas por disparo a la cabeza en esta partida', '{n} bajas por disparo a la cabeza con el arma permitida en esta partida'],
        rev: ['Ángel de la guarda', 'Reanima a {n} compañeros'], tow: ['Asaltatorres', 'Captura {n} Drill Towers enemigas'], tow1: ['Asaltatorres', 'Captura una Drill Tower enemiga'],
        hack: ['Hacker', 'Hackea {n} FOB enemigas'], hack1: ['Hacker', 'Hackea una FOB enemiga'], fob: ['Bola de demolición', 'Destruye una FOB enemiga'],
        veh: ['Revientatanques', 'Destruye {n} vehículos terrestres enemigos'], veh1: ['Revientatanques', 'Destruye un vehículo terrestre enemigo'],
        heli: ['Barrecielos', 'Derriba un helicóptero enemigo'], mor: ['Maestro del mortero', '{n} bajas con el mortero L81'], mor1: ['Maestro del mortero', 'Una baja con el mortero L81'],
        spot: ['Ojo de halcón', 'Marca {n} enemigos o vehículos'], door: ['Abrepuertas', 'Fuerza {n} puertas o portones con la Halligan Bar'],
        pal: ['Suministros', 'Lleva {n} palés o cajas a la Control Zone'], taxi: ['Taxi', 'Lleva a {n} compañeros en vehículo a la Control Zone'],
        hot: ['Héroe de la Hot Zone', 'Pasa {n} minutos en total en la Hot Zone'], surv: ['Duro de pelar', 'Sobrevive {n} minutos seguidos en la Control Zone'],
        win: ['Ganador', 'Gana la partida con tu equipo'] },
      m: { none: 'Sin regla extra', nohelm: 'Sin casco', novest: 'Sin chaleco antibalas', noarmor: 'Sin casco ni chaleco', budget: 'Loadout de {n} como máximo por vida',
        noveh: 'No conduzcas ni pilotes vehículos', noscope: 'Sin miras ópticas', noatt: 'Sin accesorios de arma', nomed: 'Sin objetos de curación (venda, IFAK, Medical Bag…)',
        noexpl: 'Sin granadas, molotovs ni explosivos', pistolafter: 'Tras tu primera muerte: solo pistola', nopack: 'Sin mochila',
        squadrule: 'Toda tu escuadra sigue la regla de armas', squadclass: 'Toda tu escuadra usa la misma clase de arma' },
      money: n => n.toLocaleString('es-ES') + '\u00a0$', sep: ': '
    },
    fr: {
      title: 'Défi aléatoire', lv: ['Facile', 'Moyen', 'Difficile', 'Folie'], reelW: 'Arme', reelG: 'Objectif', reelM: 'Règle', solo: 'Solo', squad: 'Escouade', veh: 'Véhicule',
      cls: { ar: ['Fusil d’assaut', 'fusils d’assaut'], smg: ['Pistolet-mitrailleur', 'pistolets-mitrailleurs'], lmg: ['Mitrailleuse légère', 'mitrailleuses légères'], dmr: ['DMR', 'DMR'], sr: ['Fusil de précision', 'fusils de précision'], sg: ['Fusil à pompe', 'fusils à pompe'] },
      w: { free: ['Au choix', 'Armes au choix'], cls: ['{c}', 'Arme principale : {cp} uniquement'], pistol: ['Pistolet seul', 'Un pistolet seulement – ni arme principale, ni lanceur'],
        prim: ['{w}', 'Arme principale : {w} uniquement'], sec: ['{w}', '{w} uniquement – ni arme principale, ni lanceur'], lau: ['{w}', '{w} uniquement (plus un pistolet) – pas d’arme principale'],
        trk: ['Track {t}', 'Uniquement des armes du track {t}'] },
      g: {
        kl: ['Assurance vie', '{n} éliminations en une seule vie', '{n} éliminations avec l’arme autorisée en une seule vie'],
        km: ['Tableau de chasse', '{n} éliminations dans ce match', '{n} éliminations avec l’arme autorisée dans ce match'],
        hs: ['Chasseur de têtes', '{n} éliminations en pleine tête dans ce match', '{n} éliminations en pleine tête avec l’arme autorisée dans ce match'],
        rev: ['Ange gardien', 'Réanime {n} coéquipiers'], tow: ['Prise de tours', 'Capture {n} Drill Towers ennemies'], tow1: ['Prise de tours', 'Capture une Drill Tower ennemie'],
        hack: ['Hacker', 'Pirate {n} FOB ennemies'], hack1: ['Hacker', 'Pirate une FOB ennemie'], fob: ['Boule de démolition', 'Détruis une FOB ennemie'],
        veh: ['Casseur de chars', 'Détruis {n} véhicules terrestres ennemis'], veh1: ['Casseur de chars', 'Détruis un véhicule terrestre ennemi'],
        heli: ['Nettoyeur de ciel', 'Abats un hélicoptère ennemi'], mor: ['Maître du mortier', '{n} éliminations au mortier L81'], mor1: ['Maître du mortier', 'Une élimination au mortier L81'],
        spot: ['Œil de lynx', 'Repère {n} ennemis ou véhicules'], door: ['Ouvre-portes', 'Force {n} portes ou portails avec la Halligan Bar'],
        pal: ['Ravitaillement', 'Livre {n} palettes ou caisses dans la Control Zone'], taxi: ['Taxi', 'Conduis {n} coéquipiers dans la Control Zone'],
        hot: ['Héros de la Hot Zone', 'Passe {n} minutes au total dans la Hot Zone'], surv: ['Coriace', 'Survis {n} minutes d’affilée dans la Control Zone'],
        win: ['Vainqueur', 'Gagne le match avec ton équipe'] },
      m: { none: 'Pas de règle en plus', nohelm: 'Sans casque', novest: 'Sans gilet pare-balles', noarmor: 'Sans casque ni gilet', budget: 'Loadout de {n} max par vie',
        noveh: 'Ne conduis et ne pilote aucun véhicule', noscope: 'Pas d’optique', noatt: 'Aucun accessoire d’arme', nomed: 'Pas de soins (bandage, IFAK, Medical Bag…)',
        noexpl: 'Ni grenades, ni molotovs, ni explosifs', pistolafter: 'Après ta première mort : pistolet uniquement', nopack: 'Pas de sac à dos',
        squadrule: 'Toute ton escouade suit la règle d’arme', squadclass: 'Toute ton escouade joue la même classe d’arme' },
      money: n => n.toLocaleString('fr-FR') + '\u00a0$', sep: ' : '
    }
  };

  function build(D) {
    const W = D.items.filter(i => i.cat === 'weapon');
    const ty = i => i.ty0 || i.type;
    const price = i => (i && i.price && typeof i.price.v === 'number' ? i.price.v : null);
    const minPrice = L => { const p = L.map(price).filter(x => x !== null); return p.length ? Math.min(...p) : null; };
    const tierOf = {};
    ((D.tierlist && D.tierlist.classes) || []).forEach(c => c.tiers.forEach(r => { tierOf[r[1]] = r[0]; }));
    const clsOf = i => { const c = CLASSES.find(x => x[0] === ty(i)); return c ? c[1] : (SPECIAL[ty(i)] || null); };

    // ---------- Waffenregeln
    const WR = [{ k: 'free', p: 0, cost: 0, launcher: true, kill: true, scope: true }];
    CLASSES.forEach(([t, c, p]) => {
      const L = W.filter(i => i.slot === 'primary' && ty(i) === t);
      if (L.length) WR.push({ k: 'cls', c, p, cost: minPrice(L), launcher: true, kill: true, scope: true, cls: c });
    });
    const pist = W.filter(i => i.slot === 'secondary');
    if (pist.length) WR.push({ k: 'pistol', p: 3, cost: minPrice(pist), launcher: false, kill: true, scope: false, pistol: true });
    W.filter(i => i.slot === 'primary').forEach(i => {
      const c = clsOf(i), base = c === 'bow' ? 4 : c === 'amr' ? 3 : (CLASSES.find(x => x[1] === c) || [0, 0, 1])[2];
      const weak = tierOf[i.id] === 'C' || !tierOf[i.id];
      WR.push({ k: 'prim', id: i.id, p: base + 1 + (weak && c !== 'bow' ? 1 : 0), cost: price(i), launcher: true, kill: true, scope: c !== 'bow', cls: c });
    });
    pist.forEach(i => WR.push({ k: 'sec', id: i.id, p: 4, cost: price(i), launcher: false, kill: true, scope: false, pistol: true }));
    // Werfer: RPG-7/MAAWS (Panzerabwehr), MGL-40 (Granatwerfer), Verba (tragbare Flugabwehr → nur Hubschrauber-Ziel, keine Kill-Ziele)
    W.filter(i => i.slot === 'launcher').forEach(i => {
      const t = ty(i), at = t === 'Werfer', aa = /^Flugabwehr/.test(t);
      WR.push({ k: 'lau', id: i.id, p: 4, cost: price(i), launcher: true, onlyLauncher: true, at, aa, kill: !aa, scope: false, gl: t === 'Granatwerfer' });
    });
    TRACKS.forEach(t => {
      const L = W.filter(i => i.track && i.track.v === t);
      if (!L.length) return;
      WR.push({ k: 'trk', t, p: 1, cost: minPrice(L), launcher: L.some(i => i.slot === 'launcher'), at: L.some(i => ty(i) === 'Werfer'), aa: L.some(i => /^Flugabwehr/.test(ty(i))),
        kill: true, scope: L.some(i => i.slot === 'primary'), trackOnly: true });
    });
    WR.forEach(w => { if (w.k === 'free' || w.k === 'cls') { w.at = true; w.aa = true; } });

    // ---------- Ziele (Schlüssel, Anzahl, Punkte, Eigenschaften)
    const GR = [];
    const goal = (k, ns, ps, o) => ns.forEach((n, x) => GR.push(Object.assign({ k, n, p: ps[x] }, o || {})));
    goal('kl', [2, 4, 6], [1, 2, 4], { kill: true, life: true });
    goal('km', [5, 10, 20], [0, 1, 3], { kill: true });
    goal('hs', [2, 5, 10], [1, 2, 4], { kill: true, hs: true });
    goal('rev', [2, 4, 8], [0, 1, 3], { squad: true, med: true });
    goal('tow', [1, 2, 3], [1, 2, 4]);
    goal('hack', [1, 2], [2, 4]);
    goal('fob', [1], [3], { expl: true });
    goal('veh', [1, 2, 3], [3, 4, 6], { veh: true, at: true });
    goal('heli', [1], [5], { veh: true, aa: true });
    goal('mor', [1, 3, 5], [2, 3, 5]);
    goal('spot', [3, 6, 10], [0, 1, 2], { need: 'binoculars' });
    goal('door', [2, 4], [0, 1], { need: 'halligan' });
    goal('pal', [3, 6, 10], [1, 2, 3], { veh: true, drive: true });
    goal('taxi', [4, 8], [0, 1], { veh: true, drive: true });
    goal('hot', [3, 5, 10], [1, 2, 3]);
    goal('surv', [5, 10], [2, 3], { life: true });
    goal('win', [1], [3]);
    const BY = Object.fromEntries(D.items.map(i => [i.id, i]));
    GR.forEach(g => { g.needCost = g.need ? price(BY[g.need]) || 0 : 0; if (g.need && !BY[g.need]) g.bad = true; });

    // ---------- Zusatzregeln
    const MR = [{ k: 'none', p: 0 }, { k: 'nohelm', p: 1 }, { k: 'novest', p: 1 }, { k: 'noarmor', p: 2 },
      { k: 'budget', n: 1500, p: 3 }, { k: 'budget', n: 3000, p: 2 }, { k: 'budget', n: 5000, p: 1 },
      { k: 'noveh', p: 1 }, { k: 'noscope', p: 1 }, { k: 'noatt', p: 1 }, { k: 'nomed', p: 1 }, { k: 'noexpl', p: 1 },
      { k: 'pistolafter', p: 2 }, { k: 'nopack', p: 1 }, { k: 'squadrule', p: 2, squad: true }, { k: 'squadclass', p: 2, squad: true }];

    function valid(w, g, m) {
      if (g.bad) return false;
      if (g.kill && !w.kill) return false;
      if (g.hs && (w.onlyLauncher)) return false;
      if (g.kill && w.gl && g.life && g.n > 2) return false;
      if (g.at && !w.at) return false;
      if (g.aa && !w.aa) return false;
      if (w.onlyLauncher && w.aa && !g.aa && g.kill) return false;
      switch (m.k) {
        case 'budget': {
          if (g.drive || g.veh) return false;
          if (w.cost === null || w.cost + g.needCost > m.n) return false;
          break;
        }
        case 'noveh': if (g.drive) return false; break;
        case 'noscope': case 'noatt': if (!w.scope) return false; break;
        case 'nomed': if (g.med) return false; break;
        case 'noexpl': if (g.expl || (g.at && !w.onlyLauncher)) return false; break;
        case 'pistolafter': if (w.pistol || w.onlyLauncher || g.life || g.k === 'heli') return false; break;
        case 'squadrule': if (w.k === 'free') return false; break;
        case 'squadclass': if (w.k !== 'free') return false; break;
      }
      return true;
    }
    function scoreOf(w, g, m) {
      let p = w.p + g.p + m.p;
      if (m.k === 'noscope' && (w.cls === 'sr' || w.cls === 'dmr' || w.cls === 'amr')) p += 1;
      if (g.hs && w.cls === 'sg') p += 1;
      return p;
    }
    const lvOf = p => (p <= 3 ? 0 : p <= 5 ? 1 : p <= 7 ? 2 : 3);
    const NG = GR.length, NM = MR.length;
    const ALL = [];
    WR.forEach((w, wi) => GR.forEach((g, gi) => MR.forEach((m, mi) => {
      if (!valid(w, g, m)) return;
      const p = scoreOf(w, g, m);
      ALL.push({ i: (wi * NG + gi) * NM + mi, w, g, m, p, lv: lvOf(p), squad: !!(g.squad || m.squad), veh: !!g.veh });
    })));
    const BYI = new Map(ALL.map(c => [c.i, c]));
    const idOf = c => c.i.toString(36);
    const get = id => { const n = parseInt(String(id || '').toLowerCase().replace(/[^0-9a-z]/g, ''), 36); return Number.isFinite(n) ? BYI.get(n) || null : null; };
    const match = f => c => (!f || ((!f.levels || f.levels.includes(c.lv)) && (!f.mode || f.mode === 'all' || (f.mode === 'squad') === c.squad) && !(f.noveh && c.veh)));
    const list = f => ALL.filter(match(f));
    const rnd = () => { try { const a = new Uint32Array(1); crypto.getRandomValues(a); return a[0] / 4294967296; } catch (e) { return Math.random(); } };
    function roll(f, avoid) {
      const L = list(f);
      if (!L.length) return null;
      let c = L[Math.floor(rnd() * L.length)];
      if (avoid && L.length > 1 && c.i === avoid.i) c = L[(L.indexOf(c) + 1 + Math.floor(rnd() * (L.length - 1))) % L.length];
      return c;
    }

    // ---------- Texte
    const fill = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, x) => (o[x] !== undefined ? o[x] : ''));
    function parts(c, lang) {
      const T = TX[lang] || TX.de, w = c.w, g = c.g, m = c.m;
      const wn = w.id ? BY[w.id].name : '';
      const cl = w.cls && T.cls[w.cls] ? T.cls[w.cls] : ['', ''];
      const o = { w: wn, c: cl[0], cp: cl[1], t: w.t || '' };
      const wt = T.w[w.k];
      const gk = g.n === 1 && T.g[g.k + '1'] ? g.k + '1' : g.k;
      const gt = T.g[gk];
      const restricted = w.k !== 'free';
      const gl = fill(g.kill && restricted && gt[2] ? gt[2] : gt[1], { n: g.n });
      const ml = fill(T.m[m.k], { n: m.n ? T.money(m.n) : '' });
      return { id: idOf(c), lv: c.lv, lvName: T.lv[c.lv], p: c.p, squad: c.squad, veh: c.veh,
        title: gt[0] + T.sep + fill(wt[0], o), wShort: fill(wt[0], o), gTitle: gt[0], wLine: fill(wt[1], o), gLine: gl, mLine: ml, mNone: m.k === 'none',
        rule: [fill(wt[1], o), gl].concat(m.k === 'none' ? [] : [ml]).join(' · '), icon: ['🟢', '🟡', '🟠', '🔴'][c.lv] };
    }
    // Füllwerte für die Walzen-Animation
    function samples(lang, n) {
      const out = { w: [], g: [], m: [] };
      for (let x = 0; x < n; x++) { const c = ALL[Math.floor(rnd() * ALL.length)], P = parts(c, lang); out.w.push(P.wShort); out.g.push(P.gLine); out.m.push(P.mNone ? '—' : P.mLine); }
      return out;
    }
    const counts = () => [0, 1, 2, 3].map(l => ALL.filter(c => c.lv === l).length);
    return { all: ALL, count: f => list(f).length, list, roll, get, idOf, parts, samples, counts, rules: { w: WR.length, g: GR.length, m: MR.length } };
  }

  function parseLevels(s) {
    if (!s) return null;
    const out = [...new Set(String(s).toLowerCase().split(/[\s,;|+]+/).map(x => LV_ALIAS[x]).filter(x => x !== undefined))].sort();
    return out.length ? out : null;
  }
  const levelsParam = L => (!L || L.length === 4 ? '' : L.map(x => LV[x]).join(','));
  window.FBChallenge = { build, TX, LV, parseLevels, levelsParam };
})();
