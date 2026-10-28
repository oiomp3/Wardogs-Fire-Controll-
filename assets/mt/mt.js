
/* ---- i18n.js ---- */
/* Mortar Trainer · UI strings. English is the default; German ships as an option (?lang=de).
 * ES/FR: add another object with the same keys — missing keys fall back to English.
 * Language: ?lang=xx > window.MT_LANG > localStorage 'mt_lang' > 'wardogsLang' > en. */
(function (MT) {
  'use strict';
  const STR = {
   "en": {
    "title": "Mortar Trainer",
    "badge": "WARDOGS fan training",
    "tagline": "Read the map, estimate the range, lay the mortar – and hit.",
    "chooseDiff": "Difficulty",
    "d_rekrut": "Recruit",
    "d_rekrut_desc": "Kill zone 6 m around the target, no timer. Hints after every shot.",
    "d_soldat": "Soldier",
    "d_soldat_desc": "Kill zone 4 m – you have to hit almost perfectly. Hints after every shot.",
    "d_veteran": "Veteran",
    "d_veteran_desc": "Moving targets, kill zone 3 m, 60 s per target, no hints.",
    "start": "Start mission",
    "howto": "How to play",
    "best": "Best",
    "noBest": "no best score yet",
    "disclaimer": "Unofficial fan project by Frontbuch (oiotv.de). Range → elevation from the community L81 range table of the Frontbuch calculator (132–684 m). All graphics self-made, terrain fictional.",
    "target": "Target",
    "score": "Score",
    "streak": "Streak",
    "time": "Time",
    "ptsShort": "PTS",
    "direction": "Direction",
    "range": "Range",
    "dirShort": "DIR",
    "rngShort": "RNG",
    "weapon": "L81 Mortar",
    "map": "Map",
    "fire": "FIRE",
    "firing": "SHOT OUT!",
    "muteOn": "Mute",
    "muteOff": "Unmute",
    "menu": "Menu",
    "close": "Close",
    "ownPos": "Own position",
    "dragHint": "← drag to traverse →  ·  drag the RNG ladder for range",
    "noMarker": "No marker",
    "markerInfo": "Marker set",
    "tabletTitle": "TAC TABLET · Training area",
    "grid100": "Grid 100 m",
    "mapHintPlace": "Tap the map to place a marker. Drag the marker by its head to move it.",
    "mapHintMove": "Move or use the marker.",
    "mapYou": "YOU",
    "clearMarker": "Clear",
    "applyMarker": "Use marker",
    "backToMortar": "Back to mortar",
    "newTarget": "New target: {name}",
    "newTargetSub": "Open the MAP (bottom left) and place a marker.",
    "markerSet": "Marker sent to the sight",
    "t_apc": "APC",
    "t_truck": "Supply truck",
    "t_squad": "Infantry squad",
    "t_bunker": "Bunker",
    "t_mg": "MG nest",
    "t_mortar": "Enemy mortar",
    "g_direct": "DIRECT HIT!",
    "g_hit": "HIT!",
    "g_near": "CLOSE",
    "g_miss": "MISS",
    "impactDist": "{d} m from target",
    "tooShort": "{d} m short",
    "tooLong": "{d} m long",
    "left": "{d} m left",
    "right": "{d} m right",
    "onLine": "on line",
    "gridSq": "1 square = 100 m",
    "hintShort": "Short → add range by about that many metres.",
    "hintLong": "Long → reduce range by about that many metres.",
    "hintLeft": "Left of target → turn right (higher direction).",
    "hintRight": "Right of target → turn left (lower direction).",
    "shotOf": "Round {n}/3",
    "pts": "+{p} pts",
    "destroyed": "target destroyed",
    "escaped": "Target got away",
    "solution": "Correct setting",
    "solLine": "Direction {dir}° · Range {d} m",
    "yourSetting": "Your setting",
    "yourLine": "Direction {dir}° · Range {r} m",
    "correct": "Adjust",
    "nextTarget": "Next target",
    "toResults": "Debrief",
    "timeUp": "Time is up!",
    "shellsLeft": "{n} × 81 mm left for this target.",
    "outOfShells": "No rounds left for this target",
    "endTitle": "Mission complete",
    "finalScore": "Final score",
    "newBest": "New best score!",
    "hits": "Destroyed",
    "avgDist": "Avg. miss 1st round",
    "bestStreak": "Best streak",
    "again": "Play again",
    "changeDiff": "Choose difficulty",
    "highscores": "High scores (this device)",
    "rank0": "Recruit on the tube",
    "rank1": "Solid gunner",
    "rank2": "Sharp-eyed gunner",
    "rank3": "Fire-control ace",
    "resume": "Resume",
    "restart": "Restart",
    "mainMenu": "Main menu",
    "paused": "Paused",
    "tut1t": "Spot the target",
    "tut1": "A target is called in. Tap the MAP (bottom left) – the target is marked in red.",
    "tut2t": "Mark & estimate",
    "tut2": "Zoom in and tap the target to place a marker. No range is shown – estimate it: one grid square = 100 m, plus the scale bar. Targets are small – real size.",
    "tut3t": "Lay the mortar",
    "tut3": "Turn until the orange marker on the compass sits under the centre box. Then set your estimated range in metres on the RNG ladder (drag it or use ‹ ›).",
    "tut4t": "Fire & adjust",
    "tut4": "Three rounds per target. Only a near-perfect hit kills (Soldier: within 4 m) and points drop fast with every metre. Read the miss, fine-tune (range 1 m, direction 0.1°) and fire again!",
    "next": "Next",
    "prev": "Back",
    "letsgo": "Let’s go",
    "skip": "Skip",
    "keys": "Keyboard: ←/→ direction 1° (Shift 0.1°) · ↑/↓ range 10 m (Shift 1 m) · M map · Space fire",
    "outOfRangeWarn": "Out of range (132–684 m)!",
    "minmax": "L81 range: 132–684 m",
    "round": "ROUND",
    "rounds": "rounds",
    "rk_pvt": "Private",
    "rk_pfc": "Private First Class",
    "rk_cpl": "Corporal",
    "rk_sgt": "Sergeant",
    "rk_ssg": "Staff Sergeant",
    "rk_lt": "Lieutenant",
    "rk_cpt": "Captain",
    "rk_maj": "Major",
    "rk_col": "Colonel",
    "rk_gen": "General",
    "rank": "Rank",
    "nextRank": "Next: {r}",
    "promoted": "Promotion!",
    "unlockedNew": "Unlocked",
    "carryOn": "Carry on",
    "loadout": "Loadout",
    "u_terrain": "Terrain",
    "u_reticle": "Reticle colour",
    "u_style": "Reticle style",
    "u_tint": "Scope tint",
    "u_target": "Targets",
    "terrain_grass": "Grassland",
    "terrain_desert": "Desert",
    "terrain_forest": "Forest",
    "terrain_winter": "Winter",
    "reticle_ink": "Black",
    "reticle_red": "Red",
    "reticle_white": "White",
    "reticle_brass": "Brass",
    "reticle_cyan": "Cyan",
    "reticle_lime": "Lime",
    "reticle_pink": "Pink",
    "reticle_violet": "Violet",
    "reticle_ember": "Ember (glow)",
    "style_bracket": "Bracket",
    "style_chevron": "Chevron",
    "style_circle": "Ring",
    "style_dot": "Dot",
    "style_mil": "Mil-dot",
    "tint_none": "Clear",
    "tint_amber": "Amber",
    "tint_cold": "Cold",
    "tint_night": "Night",
    "tint_sepia": "Sepia",
    "tint_brass": "Brass scope",
    "tint_olive": "Olive",
    "tint_crimson": "Crimson",
    "tint_thermal": "Thermal",
    "target_sniper": "Sniper nest",
    "target_artillery": "Artillery",
    "target_convoy": "Convoy",
    "t_sniper": "Sniper nest",
    "t_artillery": "Artillery piece",
    "t_convoy": "Convoy",
    "dailyChallenge": "Daily Challenge",
    "dailyShort": "Daily",
    "dailyN": "Daily #{n}",
    "dailyDesc": "5 targets · same for everyone · 1 scored attempt",
    "endsIn": "New in",
    "nextDaily": "Next challenge in",
    "todayScore": "Today: {s} pts",
    "days": "days",
    "day": "day",
    "missions": "Missions",
    "mission": "Mission",
    "endless": "Endless",
    "practice": "Free practice",
    "practiceSub": "Recruit · Soldier · Veteran",
    "practiceShort": "practice",
    "profile": "Profile",
    "achievements": "Achievements",
    "howtoSub": "Grid, range, correction",
    "settings": "Settings",
    "back": "Back",
    "needStars": "Needs {n} ★",
    "lives": "Lives",
    "livesLeft": "Lives left: {n}",
    "movingSub": "Moving target! Lead it – open the MAP.",
    "firstRound": "FIRST ROUND +{p}",
    "comboX": "COMBO ×{m}",
    "streakLost": "Streak lost",
    "dailyPractice": "Practice run",
    "dailyPracticeSub": "Today’s scored attempt is used – this run does not count.",
    "dailyPracticeNote": "Practice run – not counted.",
    "targets": "Targets",
    "shellsW": "Shells",
    "killZone": "Kill zone",
    "deploy": "Deploy",
    "starRule": "★ complete · ★★ ≤{a} shells · ★★★ ≤{b} shells",
    "missionDone": "Mission accomplished",
    "missionFailed": "Mission failed",
    "nextMission": "Next mission",
    "retry": "Retry",
    "practiceAgain": "Practice again (not counted)",
    "endlessOver": "Out of lives",
    "endlessBest": "Endless best: {s} pts · {k} kills",
    "firstHits": "First-round",
    "achUnlocked": "Achievement unlocked",
    "shareHead": "Mortar Trainer Daily #{n}",
    "shareScore": "{s} pts · {k}/5 destroyed",
    "cardDaily": "DAILY CHALLENGE #{n}",
    "cardKills": "destroyed",
    "cardSub": "WARDOGS FAN TRAINING",
    "cardStreak": "Daily streak: {n}",
    "copy": "Copy",
    "share": "Share",
    "savePng": "Image",
    "copied": "Copied to clipboard",
    "sound": "Sound",
    "haptics": "Vibration",
    "language": "Language",
    "fullscreen": "Fullscreen",
    "fsNo": "Fullscreen not available here",
    "resetProgress": "Reset progress",
    "resetConfirm": "Reset ALL progress (XP, stars, achievements, $, items)? This cannot be undone.",
    "resetDone": "Progress reset",
    "saveNote": "Progress is saved on this device only.",
    "adDoubleXp": "Watch ad: double reward (+{n} XP, +${c})",
    "adExtraShell": "Watch ad: 1 extra shell",
    "rotate": "Rotate your phone",
    "rotateSub": "Mortar Trainer is played in portrait.",
    "shop": "Armory",
    "shopSub": "crates & cosmetics",
    "shopNote": "Everything here is cosmetic only. It never changes accuracy, damage or score – the game stays fair.",
    "crate_field": "Field crate",
    "crate_officer": "Officer crate",
    "crateDesc": "One random cosmetic item you don’t own yet.",
    "dropRates": "Drop rates",
    "rar_common": "Common",
    "rar_rare": "Rare",
    "rar_epic": "Epic",
    "rar_legendary": "Legendary",
    "pityInfo": "Guaranteed Epic+ at the latest every {e} crates ({ce} since last), Legendary every {l} ({cl} since last).",
    "dupInfo": "Duplicate protection: you never get an item you already own; if a rarity is complete you get the next higher one.",
    "openCrate": "Open",
    "bought": "Bought!",
    "equip": "Equip",
    "crateErr_complete": "Collection complete",
    "crateErr_unknown": "Unknown crate",
    "pityHit": "guarantee",
    "collection": "Collection",
    "collectionComplete": "Collection complete – nothing left to open.",
    "directTitle": "Buy skins with $",
    "ms1t": "Bunker Buster",
    "ms1": "An enemy bunker 280 m out covers the road. Find it on the map and knock it out.",
    "ms2t": "Counter-Battery",
    "ms2": "An enemy mortar is shelling our lines. Silence it before it finds our range.",
    "ms3t": "Twin Guns",
    "ms3": "Two MG nests pin our squad. Six shells for both – make them count.",
    "ms4t": "Long Reach",
    "ms4": "A bunker far out near the L81’s limit. Range estimation must be spot on.",
    "ms5t": "Danger Close",
    "ms5": "Infantry only 165 m away. Close to the minimum range – careful with your corrections.",
    "ms6t": "Desert Supply",
    "ms6": "In the dunes: a supply truck and an APC. Cut the supply line.",
    "ms7t": "Moving Armor",
    "ms7": "An APC is driving across the valley. Lead the target and time your shot.",
    "ms8t": "Sniper Hunt",
    "ms8": "A sniper nest hides in the forest. Kill zone only 3 m.",
    "ms9t": "Convoy Ambush",
    "ms9": "A convoy rolls through the forest. Four shells to stop it.",
    "ms10t": "Gun Line",
    "ms10": "Two artillery pieces. 90 seconds before they relocate.",
    "ms11t": "White Out",
    "ms11": "Winter front: bunker, MG and mortar. 120 seconds for all three.",
    "ms12t": "Final Barrage",
    "ms12": "Everything at once: artillery, APC, sniper and a convoy. 150 s, kill zone 3 m. Prove you’re a General.",
    "a_first_blood": "First Blood",
    "ad_first_blood": "Destroy your first target.",
    "a_first_round": "One and Done",
    "ad_first_round": "Destroy a target with the first round.",
    "a_fr10": "Calculated",
    "ad_fr10": "10 first-round kills.",
    "a_direct": "Bullseye",
    "ad_direct": "Score a direct hit.",
    "a_direct10": "Surgeon",
    "ad_direct10": "10 direct hits.",
    "a_sharpshooter": "Long Shot",
    "ad_sharpshooter": "Destroy a target 600 m or further away.",
    "a_danger_close": "Danger Close",
    "ad_danger_close": "Destroy a target closer than 200 m.",
    "a_moving": "Leading the Target",
    "ad_moving": "Destroy a moving target.",
    "a_streak5": "On Fire",
    "ad_streak5": "Streak of 5 kills.",
    "a_streak10": "Unstoppable",
    "ad_streak10": "Streak of 10 kills.",
    "a_flawless": "Flawless",
    "ad_flawless": "Destroy all 5 targets in a game.",
    "a_veteran_clear": "Veteran Gunner",
    "ad_veteran_clear": "Clear all 5 targets on Veteran.",
    "a_daily1": "Reporting In",
    "ad_daily1": "Finish a Daily Challenge.",
    "a_perfect_daily": "Perfect Day",
    "ad_perfect_daily": "Destroy all 5 Daily targets.",
    "a_daily3": "Routine",
    "ad_daily3": "Daily streak of 3 days.",
    "a_daily7": "Dedicated",
    "ad_daily7": "Daily streak of 7 days.",
    "a_endless10": "Holding the Line",
    "ad_endless10": "10 kills in one Endless run.",
    "a_endless25": "Last Gun Standing",
    "ad_endless25": "25 kills in one Endless run.",
    "a_missions12": "Campaign Complete",
    "ad_missions12": "Complete all 12 missions.",
    "a_stars36": "Decorated",
    "ad_stars36": "Collect all 36 stars.",
    "a_rank_sgt": "Stripes",
    "ad_rank_sgt": "Reach the rank of Sergeant.",
    "a_rank_gen": "Top Brass",
    "ad_rank_gen": "Reach the rank of General.",
    "tutGt": "Estimate with the grid",
    "tutG": "Count squares: 1 square = 100 m, a diagonal ≈ 141 m. Example: 3 across and 4 up → √(3²+4²) = 5 squares = 500 m. Then add the leftover part of a square – every metre counts.",
    "kills": "Kills",
    "directs": "Direct hits",
    "longest": "Longest kill",
    "closest": "Closest impact",
    "games": "Games",
    "shotsW": "Shots fired"
   },
   "de": {
    "title": "Mörser-Trainer",
    "badge": "WARDOGS Fan-Training",
    "tagline": "Karte lesen, Entfernung schätzen, Mörser richten – und treffen.",
    "chooseDiff": "Schwierigkeit",
    "d_rekrut": "Rekrut",
    "d_rekrut_desc": "Zerstörzone 6 m ums Ziel, kein Zeitlimit. Tipps nach jedem Schuss.",
    "d_soldat": "Soldat",
    "d_soldat_desc": "Zerstörzone 4 m – du musst fast perfekt treffen. Tipps nach jedem Schuss.",
    "d_veteran": "Veteran",
    "d_veteran_desc": "Ziele bewegen sich, Zerstörzone 3 m, 60 s pro Ziel, keine Tipps.",
    "start": "Einsatz starten",
    "howto": "Kurzanleitung",
    "best": "Bestwert",
    "noBest": "noch kein Bestwert",
    "disclaimer": "Inoffizielles Fan-Projekt von Frontbuch (oiotv.de). Entfernung → Elevation aus der Community-Schusstafel L81 des Frontbuch-Rechners (132–684 m). Alle Grafiken selbst gezeichnet, Gelände frei erfunden.",
    "target": "Ziel",
    "score": "Punkte",
    "streak": "Serie",
    "time": "Zeit",
    "ptsShort": "PKT",
    "direction": "Richtung",
    "range": "Entfernung",
    "dirShort": "RICHT",
    "rngShort": "ENTF",
    "weapon": "L81 Mörser",
    "map": "Karte",
    "fire": "FEUER",
    "firing": "SCHUSS!",
    "muteOn": "Ton aus",
    "muteOff": "Ton an",
    "menu": "Menü",
    "close": "Schließen",
    "ownPos": "Eigene Position",
    "dragHint": "← ziehen zum Drehen →  ·  RNG-Leiter ziehen für Entfernung",
    "noMarker": "Kein Marker",
    "markerInfo": "Marker gesetzt",
    "tabletTitle": "TAK-TABLET · Übungsgelände",
    "grid100": "Gitter 100 m",
    "mapHintPlace": "Tippe auf die Karte, um einen Marker zu setzen. Marker am Kopf ziehen zum Verschieben.",
    "mapHintMove": "Marker verschieben oder übernehmen.",
    "mapYou": "DU",
    "clearMarker": "Löschen",
    "applyMarker": "Marker übernehmen",
    "backToMortar": "Zum Mörser",
    "newTarget": "Neues Ziel: {name}",
    "newTargetSub": "Öffne die KARTE (unten links) und setze einen Marker.",
    "markerSet": "Marker ins Visier übertragen",
    "t_apc": "Schützenpanzer",
    "t_truck": "Versorgungs-LKW",
    "t_squad": "Infanterietrupp",
    "t_bunker": "Bunker",
    "t_mg": "MG-Nest",
    "t_mortar": "Feindlicher Mörser",
    "g_direct": "VOLLTREFFER!",
    "g_hit": "TREFFER!",
    "g_near": "NAH DRAN",
    "g_miss": "DANEBEN",
    "impactDist": "{d} m vom Ziel",
    "tooShort": "{d} m zu kurz",
    "tooLong": "{d} m zu weit",
    "left": "{d} m links",
    "right": "{d} m rechts",
    "onLine": "Seite passt",
    "gridSq": "1 Feld = 100 m",
    "hintShort": "Zu kurz → Entfernung um etwa so viele Meter erhöhen.",
    "hintLong": "Zu weit → Entfernung um etwa so viele Meter verringern.",
    "hintLeft": "Links vorbei → nach rechts drehen (Richtung erhöhen).",
    "hintRight": "Rechts vorbei → nach links drehen (Richtung verringern).",
    "shotOf": "Schuss {n}/3",
    "pts": "+{p} Punkte",
    "destroyed": "Ziel zerstört",
    "escaped": "Ziel entkommen",
    "solution": "Richtige Einstellung",
    "solLine": "Richtung {dir}° · Entfernung {d} m",
    "yourSetting": "Deine Einstellung",
    "yourLine": "Richtung {dir}° · Entfernung {r} m",
    "correct": "Korrigieren",
    "nextTarget": "Nächstes Ziel",
    "toResults": "Auswertung",
    "timeUp": "Zeit abgelaufen!",
    "shellsLeft": "Noch {n} × 81 mm für dieses Ziel.",
    "outOfShells": "Keine Granaten mehr für dieses Ziel",
    "endTitle": "Einsatz beendet",
    "finalScore": "Endpunktzahl",
    "newBest": "Neuer Bestwert!",
    "hits": "Zerstört",
    "avgDist": "Ø Abstand 1. Schuss",
    "bestStreak": "Beste Serie",
    "again": "Nochmal",
    "changeDiff": "Schwierigkeit wählen",
    "highscores": "Bestenliste (lokal)",
    "rank0": "Rekrut am Rohr",
    "rank1": "Solider Richtschütze",
    "rank2": "Zielsicherer Kanonier",
    "rank3": "Feuerleit-Ass",
    "resume": "Weiter",
    "restart": "Neu starten",
    "mainMenu": "Hauptmenü",
    "paused": "Pause",
    "tut1t": "Ziel aufklären",
    "tut1": "Ein Ziel wird gemeldet. Tippe auf die KARTE (unten links) – das Ziel ist rot markiert.",
    "tut2t": "Marker setzen & schätzen",
    "tut2": "Zoome hinein und tippe aufs Ziel, um einen Marker zu setzen. Es wird keine Entfernung angezeigt – schätze sie: ein Gitterfeld = 100 m, dazu der Maßstab. Ziele sind klein – echte Größe.",
    "tut3t": "Mörser richten",
    "tut3": "Drehe, bis der orange Marker im Kompass unter dem Mittelkasten sitzt. Stelle dann deine geschätzte Entfernung in Metern an der RNG-Leiter ein (ziehen oder ‹ ›).",
    "tut4t": "Feuer & korrigieren",
    "tut4": "Drei Granaten pro Ziel. Nur ein fast perfekter Treffer zerstört (Soldat: innerhalb 4 m), und die Punkte fallen mit jedem Meter stark ab. Abweichung lesen, fein korrigieren (Entfernung 1 m, Richtung 0,1°) und nochmal!",
    "next": "Weiter",
    "prev": "Zurück",
    "letsgo": "Los geht’s",
    "skip": "Überspringen",
    "keys": "Tastatur: ←/→ Richtung 1° (Shift 0,1°) · ↑/↓ Entfernung 10 m (Shift 1 m) · M Karte · Leertaste Feuer",
    "outOfRangeWarn": "Außerhalb der Reichweite (132–684 m)!",
    "minmax": "Reichweite L81: 132–684 m",
    "round": "SCHUSS",
    "rounds": "Schuss",
    "rk_pvt": "Schütze",
    "rk_pfc": "Gefreiter",
    "rk_cpl": "Obergefreiter",
    "rk_sgt": "Unteroffizier",
    "rk_ssg": "Feldwebel",
    "rk_lt": "Leutnant",
    "rk_cpt": "Hauptmann",
    "rk_maj": "Major",
    "rk_col": "Oberst",
    "rk_gen": "General",
    "rank": "Dienstgrad",
    "nextRank": "Nächster: {r}",
    "promoted": "Beförderung!",
    "unlockedNew": "Freigeschaltet",
    "carryOn": "Weitermachen",
    "loadout": "Ausrüstung",
    "u_terrain": "Gelände",
    "u_reticle": "Fadenkreuz-Farbe",
    "u_style": "Fadenkreuz-Stil",
    "u_tint": "Optik-Tönung",
    "u_target": "Ziele",
    "terrain_grass": "Grasland",
    "terrain_desert": "Wüste",
    "terrain_forest": "Wald",
    "terrain_winter": "Winter",
    "reticle_ink": "Schwarz",
    "reticle_red": "Rot",
    "reticle_white": "Weiß",
    "reticle_brass": "Messing",
    "reticle_cyan": "Cyan",
    "reticle_lime": "Limette",
    "reticle_pink": "Pink",
    "reticle_violet": "Violett",
    "reticle_ember": "Glut (leuchtend)",
    "style_bracket": "Klammer",
    "style_chevron": "Winkel",
    "style_circle": "Ring",
    "style_dot": "Punkt",
    "style_mil": "Mil-Punkte",
    "tint_none": "Klar",
    "tint_amber": "Bernstein",
    "tint_cold": "Kalt",
    "tint_night": "Nacht",
    "tint_sepia": "Sepia",
    "tint_brass": "Messing-Optik",
    "tint_olive": "Oliv",
    "tint_crimson": "Karmesin",
    "tint_thermal": "Wärmebild",
    "target_sniper": "Scharfschützennest",
    "target_artillery": "Artillerie",
    "target_convoy": "Konvoi",
    "t_sniper": "Scharfschützennest",
    "t_artillery": "Geschütz",
    "t_convoy": "Konvoi",
    "dailyChallenge": "Tages-Challenge",
    "dailyShort": "Täglich",
    "dailyN": "Tag #{n}",
    "dailyDesc": "5 Ziele · für alle gleich · 1 gewerteter Versuch",
    "endsIn": "Neu in",
    "nextDaily": "Nächste Challenge in",
    "todayScore": "Heute: {s} Pkt.",
    "days": "Tage",
    "day": "Tag",
    "missions": "Missionen",
    "mission": "Mission",
    "endless": "Endlos",
    "practice": "Freies Training",
    "practiceSub": "Rekrut · Soldat · Veteran",
    "practiceShort": "Training",
    "profile": "Profil",
    "achievements": "Erfolge",
    "howtoSub": "Gitter, Entfernung, Korrektur",
    "settings": "Einstellungen",
    "back": "Zurück",
    "needStars": "Benötigt {n} ★",
    "lives": "Leben",
    "livesLeft": "Verbleibende Leben: {n}",
    "movingSub": "Bewegliches Ziel! Vorhalten – öffne die KARTE.",
    "firstRound": "ERSTER SCHUSS +{p}",
    "comboX": "KOMBO ×{m}",
    "streakLost": "Serie verloren",
    "dailyPractice": "Trainingslauf",
    "dailyPracticeSub": "Der gewertete Versuch für heute ist verbraucht – dieser Lauf zählt nicht.",
    "dailyPracticeNote": "Trainingslauf – nicht gewertet.",
    "targets": "Ziele",
    "shellsW": "Granaten",
    "killZone": "Zerstörzone",
    "deploy": "Ausrücken",
    "starRule": "★ geschafft · ★★ ≤{a} Granaten · ★★★ ≤{b} Granaten",
    "missionDone": "Mission erfüllt",
    "missionFailed": "Mission gescheitert",
    "nextMission": "Nächste Mission",
    "retry": "Nochmal",
    "practiceAgain": "Nochmal üben (nicht gewertet)",
    "endlessOver": "Keine Leben mehr",
    "endlessBest": "Endlos-Rekord: {s} Pkt. · {k} Zerstörungen",
    "firstHits": "Erster Schuss",
    "achUnlocked": "Erfolg freigeschaltet",
    "shareHead": "Mörser-Trainer Tag #{n}",
    "shareScore": "{s} Pkt. · {k}/5 zerstört",
    "cardDaily": "TAGES-CHALLENGE #{n}",
    "cardKills": "zerstört",
    "cardSub": "WARDOGS FAN-TRAINING",
    "cardStreak": "Tagesserie: {n}",
    "copy": "Kopieren",
    "share": "Teilen",
    "savePng": "Bild",
    "copied": "In die Zwischenablage kopiert",
    "sound": "Ton",
    "haptics": "Vibration",
    "language": "Sprache",
    "fullscreen": "Vollbild",
    "fsNo": "Vollbild hier nicht verfügbar",
    "resetProgress": "Fortschritt zurücksetzen",
    "resetConfirm": "GESAMTEN Fortschritt (XP, Sterne, Erfolge, $, Gegenstände) löschen? Das kann nicht rückgängig gemacht werden.",
    "resetDone": "Fortschritt zurückgesetzt",
    "saveNote": "Der Fortschritt wird nur auf diesem Gerät gespeichert.",
    "adDoubleXp": "Werbung ansehen: doppelte Belohnung (+{n} XP, +${c})",
    "adExtraShell": "Werbung ansehen: 1 Extra-Granate",
    "rotate": "Handy drehen",
    "rotateSub": "Der Mörser-Trainer wird im Hochformat gespielt.",
    "shop": "Waffenkammer",
    "shopSub": "Kisten & Kosmetik",
    "shopNote": "Alles hier ist rein kosmetisch. Es ändert nie Genauigkeit, Schaden oder Punkte – das Spiel bleibt fair.",
    "crate_field": "Feldkiste",
    "crate_officer": "Offizierskiste",
    "crateDesc": "Ein zufälliger kosmetischer Gegenstand, den du noch nicht hast.",
    "dropRates": "Wahrscheinlichkeiten",
    "rar_common": "Gewöhnlich",
    "rar_rare": "Selten",
    "rar_epic": "Episch",
    "rar_legendary": "Legendär",
    "pityInfo": "Garantiert Episch+ spätestens alle {e} Kisten ({ce} seit dem letzten), Legendär alle {l} ({cl} seit dem letzten).",
    "dupInfo": "Duplikatschutz: Du bekommst nie einen Gegenstand, den du schon hast; ist eine Seltenheit komplett, bekommst du die nächsthöhere.",
    "openCrate": "Öffnen",
    "bought": "Gekauft!",
    "equip": "Ausrüsten",
    "crateErr_complete": "Sammlung komplett",
    "crateErr_unknown": "Unbekannte Kiste",
    "pityHit": "Garantie",
    "collection": "Sammlung",
    "collectionComplete": "Sammlung komplett – nichts mehr zu öffnen.",
    "directTitle": "Skins mit $ kaufen",
    "ms1t": "Bunkerknacker",
    "ms1": "Ein feindlicher Bunker 280 m entfernt deckt die Straße. Finde ihn auf der Karte und schalte ihn aus.",
    "ms2t": "Konterbatterie",
    "ms2": "Ein feindlicher Mörser beschießt unsere Linien. Bring ihn zum Schweigen, bevor er sich einschießt.",
    "ms3t": "Doppel-MG",
    "ms3": "Zwei MG-Nester halten unseren Trupp nieder. Sechs Granaten für beide – jede muss sitzen.",
    "ms4t": "Weiter Arm",
    "ms4": "Ein Bunker weit draußen, nahe der Reichweitengrenze der L81. Die Entfernung muss exakt geschätzt sein.",
    "ms5t": "Gefahr nah",
    "ms5": "Infanterie nur 165 m entfernt. Nahe der Mindestreichweite – vorsichtig korrigieren.",
    "ms6t": "Wüstennachschub",
    "ms6": "In den Dünen: ein Versorgungs-Lkw und ein Schützenpanzer. Kapp die Nachschublinie.",
    "ms7t": "Rollender Panzer",
    "ms7": "Ein Schützenpanzer fährt durchs Tal. Halte vor und triff den richtigen Moment.",
    "ms8t": "Scharfschützenjagd",
    "ms8": "Ein Scharfschützennest versteckt sich im Wald. Zerstörzone nur 3 m.",
    "ms9t": "Konvoi-Hinterhalt",
    "ms9": "Ein Konvoi rollt durch den Wald. Vier Granaten, um ihn zu stoppen.",
    "ms10t": "Geschützlinie",
    "ms10": "Zwei Artilleriegeschütze. 90 Sekunden, bevor sie Stellung wechseln.",
    "ms11t": "Whiteout",
    "ms11": "Winterfront: Bunker, MG und Mörser. 120 Sekunden für alle drei.",
    "ms12t": "Letztes Sperrfeuer",
    "ms12": "Alles auf einmal: Artillerie, Schützenpanzer, Scharfschütze und ein Konvoi. 150 s, Zerstörzone 3 m. Zeig, dass du General bist.",
    "a_first_blood": "Erster Treffer",
    "ad_first_blood": "Zerstöre dein erstes Ziel.",
    "a_first_round": "Einer reicht",
    "ad_first_round": "Zerstöre ein Ziel mit dem ersten Schuss.",
    "a_fr10": "Berechnet",
    "ad_fr10": "10 Zerstörungen mit dem ersten Schuss.",
    "a_direct": "Ins Schwarze",
    "ad_direct": "Erziele einen Volltreffer.",
    "a_direct10": "Chirurg",
    "ad_direct10": "10 Volltreffer.",
    "a_sharpshooter": "Weitschuss",
    "ad_sharpshooter": "Zerstöre ein Ziel in 600 m oder mehr.",
    "a_danger_close": "Gefahr nah",
    "ad_danger_close": "Zerstöre ein Ziel näher als 200 m.",
    "a_moving": "Vorgehalten",
    "ad_moving": "Zerstöre ein bewegliches Ziel.",
    "a_streak5": "Heißgelaufen",
    "ad_streak5": "Serie von 5 Zerstörungen.",
    "a_streak10": "Unaufhaltsam",
    "ad_streak10": "Serie von 10 Zerstörungen.",
    "a_flawless": "Makellos",
    "ad_flawless": "Zerstöre alle 5 Ziele in einem Spiel.",
    "a_veteran_clear": "Veteranen-Kanonier",
    "ad_veteran_clear": "Alle 5 Ziele auf Veteran zerstören.",
    "a_daily1": "Zur Stelle",
    "ad_daily1": "Schließe eine Tages-Challenge ab.",
    "a_perfect_daily": "Perfekter Tag",
    "ad_perfect_daily": "Zerstöre alle 5 Ziele der Tages-Challenge.",
    "a_daily3": "Routine",
    "ad_daily3": "Tagesserie von 3 Tagen.",
    "a_daily7": "Pflichtbewusst",
    "ad_daily7": "Tagesserie von 7 Tagen.",
    "a_endless10": "Linie halten",
    "ad_endless10": "10 Zerstörungen in einem Endlos-Lauf.",
    "a_endless25": "Letztes Rohr",
    "ad_endless25": "25 Zerstörungen in einem Endlos-Lauf.",
    "a_missions12": "Feldzug beendet",
    "ad_missions12": "Schließe alle 12 Missionen ab.",
    "a_stars36": "Ordensträger",
    "ad_stars36": "Sammle alle 36 Sterne.",
    "a_rank_sgt": "Tressen",
    "ad_rank_sgt": "Erreiche den Dienstgrad Unteroffizier.",
    "a_rank_gen": "Generalität",
    "ad_rank_gen": "Erreiche den Dienstgrad General.",
    "tutGt": "Mit dem Gitter schätzen",
    "tutG": "Kästchen zählen: 1 Kästchen = 100 m, eine Diagonale ≈ 141 m. Beispiel: 3 quer und 4 hoch → √(3²+4²) = 5 Kästchen = 500 m. Dann den Rest eines Kästchens dazuschätzen – jeder Meter zählt.",
    "kills": "Zerstört",
    "directs": "Volltreffer",
    "longest": "Weitester Treffer",
    "closest": "Nächster Einschlag",
    "games": "Spiele",
    "shotsW": "Schüsse"
   },
   "es": {
    "title": "Entrenador de Mortero",
    "badge": "Entrenamiento fan de WARDOGS",
    "tagline": "Lee el mapa, estima la distancia, apunta el mortero… y acierta.",
    "chooseDiff": "Dificultad",
    "d_rekrut": "Recluta",
    "d_rekrut_desc": "Zona de destrucción de 6 m alrededor del objetivo, sin tiempo. Pistas tras cada disparo.",
    "d_soldat": "Soldado",
    "d_soldat_desc": "Zona de destrucción de 4 m: tienes que acertar casi perfecto. Pistas tras cada disparo.",
    "d_veteran": "Veterano",
    "d_veteran_desc": "Objetivos móviles, zona de 3 m, 60 s por objetivo, sin pistas.",
    "start": "Iniciar misión",
    "howto": "Cómo jugar",
    "best": "Récord",
    "noBest": "aún sin récord",
    "disclaimer": "Proyecto fan no oficial de Frontbuch (oiotv.de). Distancia → elevación según la tabla de tiro L81 de la comunidad de la calculadora Frontbuch (132–684 m). Todos los gráficos son propios, el terreno es ficticio.",
    "target": "Objetivo",
    "score": "Puntos",
    "streak": "Racha",
    "time": "Tiempo",
    "ptsShort": "PTS",
    "direction": "Dirección",
    "range": "Distancia",
    "dirShort": "DIR",
    "rngShort": "DIST",
    "weapon": "Mortero L81",
    "map": "Mapa",
    "fire": "FUEGO",
    "firing": "¡DISPARO!",
    "muteOn": "Silenciar",
    "muteOff": "Activar sonido",
    "menu": "Menú",
    "close": "Cerrar",
    "ownPos": "Posición propia",
    "dragHint": "← arrastra para girar →  ·  arrastra la escala DIST para la distancia",
    "noMarker": "Sin marcador",
    "markerInfo": "Marcador puesto",
    "tabletTitle": "TABLETA TÁCTICA · Zona de práctica",
    "grid100": "Cuadrícula 100 m",
    "mapHintPlace": "Toca el mapa para poner un marcador. Arrástralo por la cabeza para moverlo.",
    "mapHintMove": "Mueve o usa el marcador.",
    "mapYou": "TÚ",
    "clearMarker": "Borrar",
    "applyMarker": "Usar marcador",
    "backToMortar": "Volver al mortero",
    "newTarget": "Nuevo objetivo: {name}",
    "newTargetSub": "Abre el MAPA (abajo a la izquierda) y pon un marcador.",
    "markerSet": "Marcador enviado a la mira",
    "t_apc": "Blindado",
    "t_truck": "Camión de suministros",
    "t_squad": "Pelotón de infantería",
    "t_bunker": "Búnker",
    "t_mg": "Nido de ametralladora",
    "t_mortar": "Mortero enemigo",
    "g_direct": "¡IMPACTO DIRECTO!",
    "g_hit": "¡IMPACTO!",
    "g_near": "CERCA",
    "g_miss": "FALLO",
    "impactDist": "a {d} m del objetivo",
    "tooShort": "{d} m corto",
    "tooLong": "{d} m largo",
    "left": "{d} m a la izquierda",
    "right": "{d} m a la derecha",
    "onLine": "en línea",
    "gridSq": "1 cuadro = 100 m",
    "hintShort": "Corto → aumenta la distancia aproximadamente esos metros.",
    "hintLong": "Largo → reduce la distancia aproximadamente esos metros.",
    "hintLeft": "A la izquierda → gira a la derecha (dirección mayor).",
    "hintRight": "A la derecha → gira a la izquierda (dirección menor).",
    "shotOf": "Disparo {n}/3",
    "pts": "+{p} pts",
    "destroyed": "objetivo destruido",
    "escaped": "El objetivo escapó",
    "solution": "Ajuste correcto",
    "solLine": "Dirección {dir}° · Distancia {d} m",
    "yourSetting": "Tu ajuste",
    "yourLine": "Dirección {dir}° · Distancia {r} m",
    "correct": "Corregir",
    "nextTarget": "Siguiente objetivo",
    "toResults": "Informe",
    "timeUp": "¡Se acabó el tiempo!",
    "shellsLeft": "Quedan {n} × 81 mm para este objetivo.",
    "outOfShells": "No quedan proyectiles para este objetivo",
    "endTitle": "Misión completada",
    "finalScore": "Puntuación final",
    "newBest": "¡Nuevo récord!",
    "hits": "Destruidos",
    "avgDist": "Error medio 1.er disparo",
    "bestStreak": "Mejor racha",
    "again": "Jugar de nuevo",
    "changeDiff": "Elegir dificultad",
    "highscores": "Récords (este dispositivo)",
    "rank0": "Recluta en el tubo",
    "rank1": "Artillero sólido",
    "rank2": "Artillero de ojo fino",
    "rank3": "As del control de tiro",
    "resume": "Continuar",
    "restart": "Reiniciar",
    "mainMenu": "Menú principal",
    "paused": "Pausa",
    "tut1t": "Localiza el objetivo",
    "tut1": "Se notifica un objetivo. Toca el MAPA (abajo a la izquierda): el objetivo está marcado en rojo.",
    "tut2t": "Marca y estima",
    "tut2": "Haz zoom y toca el objetivo para poner un marcador. No se muestra ninguna distancia: estímala. Un cuadro = 100 m, más la escala. Los objetivos son pequeños, a tamaño real.",
    "tut3t": "Apunta el mortero",
    "tut3": "Gira hasta que el marcador naranja de la brújula quede bajo la caja central. Luego ajusta tu distancia estimada en metros en la escala DIST (arrastra o usa ‹ ›).",
    "tut4t": "Dispara y corrige",
    "tut4": "Tres disparos por objetivo. Solo un impacto casi perfecto destruye (Soldado: a menos de 4 m) y los puntos caen rápido con cada metro. Lee el error, ajusta fino (distancia 1 m, dirección 0,1°) y ¡dispara otra vez!",
    "tutGt": "Estima con la cuadrícula",
    "tutG": "Cuenta cuadros: 1 cuadro = 100 m, una diagonal ≈ 141 m. Ejemplo: 3 a lo ancho y 4 hacia arriba → √(3²+4²) = 5 cuadros = 500 m. Luego añade la fracción restante de un cuadro: cada metro cuenta.",
    "next": "Siguiente",
    "prev": "Atrás",
    "letsgo": "¡Vamos!",
    "skip": "Saltar",
    "keys": "Teclado: ←/→ dirección 1° (Mayús 0,1°) · ↑/↓ distancia 10 m (Mayús 1 m) · M mapa · Espacio fuego",
    "outOfRangeWarn": "¡Fuera de alcance (132–684 m)!",
    "minmax": "Alcance L81: 132–684 m",
    "round": "DISPARO",
    "rounds": "disparos",
    "rk_pvt": "Soldado raso",
    "rk_pfc": "Soldado de primera",
    "rk_cpl": "Cabo",
    "rk_sgt": "Sargento",
    "rk_ssg": "Sargento primero",
    "rk_lt": "Teniente",
    "rk_cpt": "Capitán",
    "rk_maj": "Comandante",
    "rk_col": "Coronel",
    "rk_gen": "General",
    "rank": "Rango",
    "nextRank": "Siguiente: {r}",
    "promoted": "¡Ascenso!",
    "unlockedNew": "Desbloqueado",
    "carryOn": "Continuar",
    "loadout": "Equipamiento",
    "u_terrain": "Terreno",
    "u_reticle": "Color de retícula",
    "u_style": "Estilo de retícula",
    "u_tint": "Tinte de mira",
    "u_target": "Objetivos",
    "terrain_grass": "Pradera",
    "terrain_desert": "Desierto",
    "terrain_forest": "Bosque",
    "terrain_winter": "Invierno",
    "reticle_ink": "Negro",
    "reticle_red": "Rojo",
    "reticle_white": "Blanco",
    "reticle_brass": "Latón",
    "reticle_cyan": "Cian",
    "reticle_lime": "Lima",
    "reticle_pink": "Rosa",
    "reticle_violet": "Violeta",
    "reticle_ember": "Brasa (brillo)",
    "style_bracket": "Corchetes",
    "style_chevron": "Chevrón",
    "style_circle": "Anillo",
    "style_dot": "Punto",
    "style_mil": "Mil-dot",
    "tint_none": "Transparente",
    "tint_amber": "Ámbar",
    "tint_cold": "Frío",
    "tint_night": "Noche",
    "tint_sepia": "Sepia",
    "tint_brass": "Mira de latón",
    "tint_olive": "Oliva",
    "tint_crimson": "Carmesí",
    "tint_thermal": "Térmica",
    "target_sniper": "Nido de francotirador",
    "target_artillery": "Artillería",
    "target_convoy": "Convoy",
    "t_sniper": "Nido de francotirador",
    "t_artillery": "Pieza de artillería",
    "t_convoy": "Convoy",
    "dailyChallenge": "Reto diario",
    "dailyShort": "Diario",
    "dailyN": "Diario #{n}",
    "dailyDesc": "5 objetivos · iguales para todos · 1 intento puntuado",
    "endsIn": "Nuevo en",
    "nextDaily": "Próximo reto en",
    "todayScore": "Hoy: {s} pts",
    "days": "días",
    "day": "día",
    "missions": "Misiones",
    "mission": "Misión",
    "endless": "Infinito",
    "practice": "Práctica libre",
    "practiceSub": "Recluta · Soldado · Veterano",
    "practiceShort": "práctica",
    "profile": "Perfil",
    "achievements": "Logros",
    "howtoSub": "Cuadrícula, distancia, corrección",
    "settings": "Ajustes",
    "back": "Atrás",
    "needStars": "Requiere {n} ★",
    "lives": "Vidas",
    "livesLeft": "Vidas restantes: {n}",
    "movingSub": "¡Objetivo móvil! Adelántate: abre el MAPA.",
    "firstRound": "PRIMER DISPARO +{p}",
    "comboX": "COMBO ×{m}",
    "streakLost": "Racha perdida",
    "dailyPractice": "Ronda de práctica",
    "dailyPracticeSub": "El intento puntuado de hoy ya se usó: esta ronda no cuenta.",
    "dailyPracticeNote": "Ronda de práctica: no cuenta.",
    "targets": "Objetivos",
    "shellsW": "Proyectiles",
    "killZone": "Zona de destrucción",
    "deploy": "Desplegar",
    "starRule": "★ completar · ★★ ≤{a} proyectiles · ★★★ ≤{b} proyectiles",
    "missionDone": "Misión cumplida",
    "missionFailed": "Misión fallida",
    "nextMission": "Siguiente misión",
    "retry": "Reintentar",
    "practiceAgain": "Practicar otra vez (no cuenta)",
    "endlessOver": "Sin vidas",
    "endlessBest": "Récord infinito: {s} pts · {k} destruidos",
    "firstHits": "1.er disparo",
    "achUnlocked": "Logro desbloqueado",
    "shareHead": "Entrenador de Mortero Diario #{n}",
    "shareScore": "{s} pts · {k}/5 destruidos",
    "cardDaily": "RETO DIARIO #{n}",
    "cardKills": "destruidos",
    "cardSub": "ENTRENAMIENTO FAN WARDOGS",
    "cardStreak": "Racha diaria: {n}",
    "copy": "Copiar",
    "share": "Compartir",
    "savePng": "Imagen",
    "copied": "Copiado al portapapeles",
    "sound": "Sonido",
    "haptics": "Vibración",
    "language": "Idioma",
    "fullscreen": "Pantalla completa",
    "fsNo": "Pantalla completa no disponible aquí",
    "resetProgress": "Reiniciar progreso",
    "resetConfirm": "¿Borrar TODO el progreso (XP, estrellas, logros, $, objetos)? No se puede deshacer.",
    "resetDone": "Progreso reiniciado",
    "saveNote": "El progreso se guarda solo en este dispositivo.",
    "adDoubleXp": "Ver anuncio: recompensa doble (+{n} XP, +${c})",
    "adExtraShell": "Ver anuncio: 1 proyectil extra",
    "rotate": "Gira el móvil",
    "rotateSub": "El Entrenador de Mortero se juega en vertical.",
    "shop": "Armería",
    "shopSub": "cajas y cosméticos",
    "shopNote": "Todo aquí es solo cosmético. Nunca cambia la precisión, el daño ni la puntuación: el juego sigue siendo justo.",
    "crate_field": "Caja de campaña",
    "crate_officer": "Caja de oficial",
    "crateDesc": "Un objeto cosmético aleatorio que aún no tienes.",
    "dropRates": "Probabilidades",
    "rar_common": "Común",
    "rar_rare": "Raro",
    "rar_epic": "Épico",
    "rar_legendary": "Legendario",
    "pityInfo": "Épico o mejor garantizado como máximo cada {e} cajas ({ce} desde el último), Legendario cada {l} ({cl} desde el último).",
    "dupInfo": "Protección contra duplicados: nunca recibes un objeto que ya tienes; si una rareza está completa, recibes la siguiente superior.",
    "openCrate": "Abrir",
    "bought": "¡Comprado!",
    "equip": "Equipar",
    "crateErr_complete": "Colección completa",
    "crateErr_unknown": "Caja desconocida",
    "pityHit": "garantía",
    "collection": "Colección",
    "collectionComplete": "Colección completa: no queda nada por abrir.",
    "directTitle": "Comprar aspectos con $",
    "ms1t": "Revientabúnkeres",
    "ms1": "Un búnker enemigo a 280 m cubre la carretera. Encuéntralo en el mapa y destrúyelo.",
    "ms2t": "Contrabatería",
    "ms2": "Un mortero enemigo bombardea nuestras líneas. Siléncialo antes de que nos encuentre.",
    "ms3t": "Ametralladoras gemelas",
    "ms3": "Dos nidos de ametralladora inmovilizan a nuestro pelotón. Seis proyectiles para ambos: que cuenten.",
    "ms4t": "Largo alcance",
    "ms4": "Un búnker lejano, cerca del límite del L81. La estimación tiene que ser exacta.",
    "ms5t": "Peligro cercano",
    "ms5": "Infantería a solo 165 m. Cerca del alcance mínimo: corrige con cuidado.",
    "ms6t": "Suministro en el desierto",
    "ms6": "En las dunas: un camión de suministros y un blindado. Corta la línea de suministro.",
    "ms7t": "Blindado en marcha",
    "ms7": "Un blindado cruza el valle. Adelántate al objetivo y calcula el momento.",
    "ms8t": "Caza del francotirador",
    "ms8": "Un nido de francotirador se esconde en el bosque. Zona de destrucción de solo 3 m.",
    "ms9t": "Emboscada al convoy",
    "ms9": "Un convoy atraviesa el bosque. Cuatro proyectiles para detenerlo.",
    "ms10t": "Línea de cañones",
    "ms10": "Dos piezas de artillería. 90 segundos antes de que cambien de posición.",
    "ms11t": "Ventisca",
    "ms11": "Frente invernal: búnker, ametralladora y mortero. 120 segundos para los tres.",
    "ms12t": "Barrera final",
    "ms12": "Todo a la vez: artillería, blindado, francotirador y un convoy. 150 s, zona de 3 m. Demuestra que eres general.",
    "a_first_blood": "Primera sangre",
    "ad_first_blood": "Destruye tu primer objetivo.",
    "a_first_round": "A la primera",
    "ad_first_round": "Destruye un objetivo con el primer disparo.",
    "a_fr10": "Calculado",
    "ad_fr10": "10 destrucciones al primer disparo.",
    "a_direct": "En el blanco",
    "ad_direct": "Consigue un impacto directo.",
    "a_direct10": "Cirujano",
    "ad_direct10": "10 impactos directos.",
    "a_sharpshooter": "Tiro largo",
    "ad_sharpshooter": "Destruye un objetivo a 600 m o más.",
    "a_danger_close": "Peligro cercano",
    "ad_danger_close": "Destruye un objetivo a menos de 200 m.",
    "a_moving": "Adelantado",
    "ad_moving": "Destruye un objetivo móvil.",
    "a_streak5": "En racha",
    "ad_streak5": "Racha de 5 destrucciones.",
    "a_streak10": "Imparable",
    "ad_streak10": "Racha de 10 destrucciones.",
    "a_flawless": "Impecable",
    "ad_flawless": "Destruye los 5 objetivos de una partida.",
    "a_veteran_clear": "Artillero veterano",
    "ad_veteran_clear": "Destruye los 5 objetivos en Veterano.",
    "a_daily1": "Presente",
    "ad_daily1": "Completa un reto diario.",
    "a_perfect_daily": "Día perfecto",
    "ad_perfect_daily": "Destruye los 5 objetivos del reto diario.",
    "a_daily3": "Rutina",
    "ad_daily3": "Racha diaria de 3 días.",
    "a_daily7": "Dedicado",
    "ad_daily7": "Racha diaria de 7 días.",
    "a_endless10": "Mantener la línea",
    "ad_endless10": "10 destrucciones en una partida infinita.",
    "a_endless25": "El último cañón",
    "ad_endless25": "25 destrucciones en una partida infinita.",
    "a_missions12": "Campaña completa",
    "ad_missions12": "Completa las 12 misiones.",
    "a_stars36": "Condecorado",
    "ad_stars36": "Consigue las 36 estrellas.",
    "a_rank_sgt": "Galones",
    "ad_rank_sgt": "Alcanza el rango de Sargento.",
    "a_rank_gen": "Alto mando",
    "ad_rank_gen": "Alcanza el rango de General.",
    "kills": "Destruidos",
    "directs": "Impactos directos",
    "longest": "Destrucción más lejana",
    "closest": "Impacto más cercano",
    "games": "Partidas",
    "shotsW": "Disparos"
   },
   "fr": {
    "title": "Entraîneur Mortier",
    "badge": "Entraînement fan WARDOGS",
    "tagline": "Lis la carte, estime la distance, pointe le mortier… et touche.",
    "chooseDiff": "Difficulté",
    "d_rekrut": "Recrue",
    "d_rekrut_desc": "Zone de destruction de 6 m autour de la cible, sans chrono. Conseils après chaque tir.",
    "d_soldat": "Soldat",
    "d_soldat_desc": "Zone de destruction de 4 m : il faut toucher presque parfaitement. Conseils après chaque tir.",
    "d_veteran": "Vétéran",
    "d_veteran_desc": "Cibles mobiles, zone de 3 m, 60 s par cible, sans conseils.",
    "start": "Lancer la mission",
    "howto": "Comment jouer",
    "best": "Record",
    "noBest": "pas encore de record",
    "disclaimer": "Projet de fan non officiel de Frontbuch (oiotv.de). Distance → élévation d’après la table de tir L81 communautaire du calculateur Frontbuch (132–684 m). Graphismes entièrement faits maison, terrain fictif.",
    "target": "Cible",
    "score": "Score",
    "streak": "Série",
    "time": "Temps",
    "ptsShort": "PTS",
    "direction": "Direction",
    "range": "Distance",
    "dirShort": "DIR",
    "rngShort": "DIST",
    "weapon": "Mortier L81",
    "map": "Carte",
    "fire": "FEU",
    "firing": "COUP PARTI !",
    "muteOn": "Couper le son",
    "muteOff": "Activer le son",
    "menu": "Menu",
    "close": "Fermer",
    "ownPos": "Position propre",
    "dragHint": "← glisse pour pivoter →  ·  glisse l’échelle DIST pour la distance",
    "noMarker": "Pas de marqueur",
    "markerInfo": "Marqueur posé",
    "tabletTitle": "TABLETTE TACTIQUE · Zone d’entraînement",
    "grid100": "Grille 100 m",
    "mapHintPlace": "Touche la carte pour poser un marqueur. Fais-le glisser par sa tête pour le déplacer.",
    "mapHintMove": "Déplace ou utilise le marqueur.",
    "mapYou": "TOI",
    "clearMarker": "Effacer",
    "applyMarker": "Utiliser le marqueur",
    "backToMortar": "Retour au mortier",
    "newTarget": "Nouvelle cible : {name}",
    "newTargetSub": "Ouvre la CARTE (en bas à gauche) et pose un marqueur.",
    "markerSet": "Marqueur transmis au viseur",
    "t_apc": "Blindé",
    "t_truck": "Camion de ravitaillement",
    "t_squad": "Groupe d’infanterie",
    "t_bunker": "Bunker",
    "t_mg": "Nid de mitrailleuse",
    "t_mortar": "Mortier ennemi",
    "g_direct": "COUP DIRECT !",
    "g_hit": "TOUCHÉ !",
    "g_near": "PROCHE",
    "g_miss": "RATÉ",
    "impactDist": "à {d} m de la cible",
    "tooShort": "{d} m trop court",
    "tooLong": "{d} m trop long",
    "left": "{d} m à gauche",
    "right": "{d} m à droite",
    "onLine": "dans l’axe",
    "gridSq": "1 carreau = 100 m",
    "hintShort": "Court → augmente la distance d’environ autant de mètres.",
    "hintLong": "Long → réduis la distance d’environ autant de mètres.",
    "hintLeft": "À gauche de la cible → tourne à droite (direction plus grande).",
    "hintRight": "À droite de la cible → tourne à gauche (direction plus petite).",
    "shotOf": "Tir {n}/3",
    "pts": "+{p} pts",
    "destroyed": "cible détruite",
    "escaped": "La cible s’est échappée",
    "solution": "Réglage correct",
    "solLine": "Direction {dir}° · Distance {d} m",
    "yourSetting": "Ton réglage",
    "yourLine": "Direction {dir}° · Distance {r} m",
    "correct": "Corriger",
    "nextTarget": "Cible suivante",
    "toResults": "Débriefing",
    "timeUp": "Temps écoulé !",
    "shellsLeft": "Il reste {n} × 81 mm pour cette cible.",
    "outOfShells": "Plus d’obus pour cette cible",
    "endTitle": "Mission terminée",
    "finalScore": "Score final",
    "newBest": "Nouveau record !",
    "hits": "Détruites",
    "avgDist": "Écart moyen 1er tir",
    "bestStreak": "Meilleure série",
    "again": "Rejouer",
    "changeDiff": "Choisir la difficulté",
    "highscores": "Records (cet appareil)",
    "rank0": "Recrue au tube",
    "rank1": "Pointeur solide",
    "rank2": "Pointeur à l’œil vif",
    "rank3": "As du contrôle de tir",
    "resume": "Reprendre",
    "restart": "Recommencer",
    "mainMenu": "Menu principal",
    "paused": "Pause",
    "tut1t": "Repérer la cible",
    "tut1": "Une cible est signalée. Touche la CARTE (en bas à gauche) : la cible est marquée en rouge.",
    "tut2t": "Marquer et estimer",
    "tut2": "Zoome et touche la cible pour poser un marqueur. Aucune distance n’est affichée : estime-la. Un carreau = 100 m, plus l’échelle. Les cibles sont petites, à taille réelle.",
    "tut3t": "Pointer le mortier",
    "tut3": "Tourne jusqu’à ce que le marqueur orange de la boussole soit sous la case centrale. Règle ensuite ta distance estimée en mètres sur l’échelle DIST (glisse ou utilise ‹ ›).",
    "tut4t": "Tirer et corriger",
    "tut4": "Trois tirs par cible. Seul un coup presque parfait détruit (Soldat : à moins de 4 m) et les points chutent vite à chaque mètre. Lis l’écart, affine (distance 1 m, direction 0,1°) et tire encore !",
    "tutGt": "Estimer avec la grille",
    "tutG": "Compte les carreaux : 1 carreau = 100 m, une diagonale ≈ 141 m. Exemple : 3 en largeur et 4 en hauteur → √(3²+4²) = 5 carreaux = 500 m. Ajoute ensuite le reste d’un carreau : chaque mètre compte.",
    "next": "Suivant",
    "prev": "Retour",
    "letsgo": "C’est parti",
    "skip": "Passer",
    "keys": "Clavier : ←/→ direction 1° (Maj 0,1°) · ↑/↓ distance 10 m (Maj 1 m) · M carte · Espace feu",
    "outOfRangeWarn": "Hors de portée (132–684 m) !",
    "minmax": "Portée L81 : 132–684 m",
    "round": "TIR",
    "rounds": "tirs",
    "rk_pvt": "Soldat",
    "rk_pfc": "Soldat de 1re classe",
    "rk_cpl": "Caporal",
    "rk_sgt": "Sergent",
    "rk_ssg": "Sergent-chef",
    "rk_lt": "Lieutenant",
    "rk_cpt": "Capitaine",
    "rk_maj": "Commandant",
    "rk_col": "Colonel",
    "rk_gen": "Général",
    "rank": "Grade",
    "nextRank": "Suivant : {r}",
    "promoted": "Promotion !",
    "unlockedNew": "Débloqué",
    "carryOn": "Continuer",
    "loadout": "Équipement",
    "u_terrain": "Terrain",
    "u_reticle": "Couleur du réticule",
    "u_style": "Style du réticule",
    "u_tint": "Teinte du viseur",
    "u_target": "Cibles",
    "terrain_grass": "Prairie",
    "terrain_desert": "Désert",
    "terrain_forest": "Forêt",
    "terrain_winter": "Hiver",
    "reticle_ink": "Noir",
    "reticle_red": "Rouge",
    "reticle_white": "Blanc",
    "reticle_brass": "Laiton",
    "reticle_cyan": "Cyan",
    "reticle_lime": "Citron vert",
    "reticle_pink": "Rose",
    "reticle_violet": "Violet",
    "reticle_ember": "Braise (lumineux)",
    "style_bracket": "Crochets",
    "style_chevron": "Chevron",
    "style_circle": "Anneau",
    "style_dot": "Point",
    "style_mil": "Mil-dot",
    "tint_none": "Clair",
    "tint_amber": "Ambre",
    "tint_cold": "Froid",
    "tint_night": "Nuit",
    "tint_sepia": "Sépia",
    "tint_brass": "Viseur laiton",
    "tint_olive": "Olive",
    "tint_crimson": "Cramoisi",
    "tint_thermal": "Thermique",
    "target_sniper": "Nid de tireur d’élite",
    "target_artillery": "Artillerie",
    "target_convoy": "Convoi",
    "t_sniper": "Nid de tireur d’élite",
    "t_artillery": "Pièce d’artillerie",
    "t_convoy": "Convoi",
    "dailyChallenge": "Défi du jour",
    "dailyShort": "Défi",
    "dailyN": "Défi #{n}",
    "dailyDesc": "5 cibles · les mêmes pour tous · 1 essai compté",
    "endsIn": "Nouveau dans",
    "nextDaily": "Prochain défi dans",
    "todayScore": "Aujourd’hui : {s} pts",
    "days": "jours",
    "day": "jour",
    "missions": "Missions",
    "mission": "Mission",
    "endless": "Sans fin",
    "practice": "Entraînement libre",
    "practiceSub": "Recrue · Soldat · Vétéran",
    "practiceShort": "entraînement",
    "profile": "Profil",
    "achievements": "Succès",
    "howtoSub": "Grille, distance, correction",
    "settings": "Réglages",
    "back": "Retour",
    "needStars": "Il faut {n} ★",
    "lives": "Vies",
    "livesLeft": "Vies restantes : {n}",
    "movingSub": "Cible mobile ! Anticipe – ouvre la CARTE.",
    "firstRound": "PREMIER TIR +{p}",
    "comboX": "COMBO ×{m}",
    "streakLost": "Série perdue",
    "dailyPractice": "Partie d’entraînement",
    "dailyPracticeSub": "L’essai compté du jour est utilisé : cette partie ne compte pas.",
    "dailyPracticeNote": "Partie d’entraînement : non comptée.",
    "targets": "Cibles",
    "shellsW": "Obus",
    "killZone": "Zone de destruction",
    "deploy": "Déployer",
    "starRule": "★ réussir · ★★ ≤{a} obus · ★★★ ≤{b} obus",
    "missionDone": "Mission accomplie",
    "missionFailed": "Mission échouée",
    "nextMission": "Mission suivante",
    "retry": "Réessayer",
    "practiceAgain": "S’entraîner encore (non compté)",
    "endlessOver": "Plus de vies",
    "endlessBest": "Record sans fin : {s} pts · {k} détruites",
    "firstHits": "1er tir",
    "achUnlocked": "Succès débloqué",
    "shareHead": "Entraîneur Mortier Défi #{n}",
    "shareScore": "{s} pts · {k}/5 détruites",
    "cardDaily": "DÉFI DU JOUR #{n}",
    "cardKills": "détruites",
    "cardSub": "ENTRAÎNEMENT FAN WARDOGS",
    "cardStreak": "Série quotidienne : {n}",
    "copy": "Copier",
    "share": "Partager",
    "savePng": "Image",
    "copied": "Copié dans le presse-papiers",
    "sound": "Son",
    "haptics": "Vibration",
    "language": "Langue",
    "fullscreen": "Plein écran",
    "fsNo": "Plein écran indisponible ici",
    "resetProgress": "Réinitialiser la progression",
    "resetConfirm": "Effacer TOUTE la progression (XP, étoiles, succès, $, objets) ? C’est irréversible.",
    "resetDone": "Progression réinitialisée",
    "saveNote": "La progression est enregistrée uniquement sur cet appareil.",
    "adDoubleXp": "Regarder une pub : récompense doublée (+{n} XP, +${c})",
    "adExtraShell": "Regarder une pub : 1 obus supplémentaire",
    "rotate": "Tourne ton téléphone",
    "rotateSub": "L’Entraîneur Mortier se joue en mode portrait.",
    "shop": "Armurerie",
    "shopSub": "caisses et cosmétiques",
    "shopNote": "Tout ici est purement cosmétique. Cela ne change jamais la précision, les dégâts ni le score : le jeu reste équitable.",
    "crate_field": "Caisse de campagne",
    "crate_officer": "Caisse d’officier",
    "crateDesc": "Un objet cosmétique aléatoire que tu ne possèdes pas encore.",
    "dropRates": "Probabilités",
    "rar_common": "Commun",
    "rar_rare": "Rare",
    "rar_epic": "Épique",
    "rar_legendary": "Légendaire",
    "pityInfo": "Épique ou mieux garanti au plus tard toutes les {e} caisses ({ce} depuis le dernier), Légendaire toutes les {l} ({cl} depuis le dernier).",
    "dupInfo": "Protection anti-doublons : tu ne reçois jamais un objet que tu possèdes déjà ; si une rareté est complète, tu reçois la suivante.",
    "openCrate": "Ouvrir",
    "bought": "Acheté !",
    "equip": "Équiper",
    "crateErr_complete": "Collection complète",
    "crateErr_unknown": "Caisse inconnue",
    "pityHit": "garantie",
    "collection": "Collection",
    "collectionComplete": "Collection complète : plus rien à ouvrir.",
    "directTitle": "Acheter des skins avec des $",
    "ms1t": "Casse-bunker",
    "ms1": "Un bunker ennemi à 280 m couvre la route. Trouve-le sur la carte et détruis-le.",
    "ms2t": "Contre-batterie",
    "ms2": "Un mortier ennemi pilonne nos lignes. Fais-le taire avant qu’il ne règle son tir.",
    "ms3t": "Mitrailleuses jumelles",
    "ms3": "Deux nids de mitrailleuse clouent notre groupe. Six obus pour les deux : chacun doit compter.",
    "ms4t": "Longue portée",
    "ms4": "Un bunker très loin, près de la limite du L81. L’estimation doit être parfaite.",
    "ms5t": "Danger rapproché",
    "ms5": "De l’infanterie à seulement 165 m. Près de la portée minimale : corrige avec prudence.",
    "ms6t": "Ravitaillement du désert",
    "ms6": "Dans les dunes : un camion de ravitaillement et un blindé. Coupe la ligne de ravitaillement.",
    "ms7t": "Blindé en mouvement",
    "ms7": "Un blindé traverse la vallée. Anticipe et choisis le bon moment.",
    "ms8t": "Chasse au tireur",
    "ms8": "Un nid de tireur d’élite se cache dans la forêt. Zone de destruction de 3 m seulement.",
    "ms9t": "Embuscade du convoi",
    "ms9": "Un convoi traverse la forêt. Quatre obus pour l’arrêter.",
    "ms10t": "Ligne de canons",
    "ms10": "Deux pièces d’artillerie. 90 secondes avant qu’elles ne changent de position.",
    "ms11t": "Blizzard",
    "ms11": "Front d’hiver : bunker, mitrailleuse et mortier. 120 secondes pour les trois.",
    "ms12t": "Barrage final",
    "ms12": "Tout à la fois : artillerie, blindé, tireur d’élite et un convoi. 150 s, zone de 3 m. Prouve que tu es général.",
    "a_first_blood": "Premier sang",
    "ad_first_blood": "Détruis ta première cible.",
    "a_first_round": "Du premier coup",
    "ad_first_round": "Détruis une cible au premier tir.",
    "a_fr10": "Calculé",
    "ad_fr10": "10 destructions au premier tir.",
    "a_direct": "En plein dans le mille",
    "ad_direct": "Réussis un coup direct.",
    "a_direct10": "Chirurgien",
    "ad_direct10": "10 coups directs.",
    "a_sharpshooter": "Tir lointain",
    "ad_sharpshooter": "Détruis une cible à 600 m ou plus.",
    "a_danger_close": "Danger rapproché",
    "ad_danger_close": "Détruis une cible à moins de 200 m.",
    "a_moving": "Anticipation",
    "ad_moving": "Détruis une cible mobile.",
    "a_streak5": "En feu",
    "ad_streak5": "Série de 5 destructions.",
    "a_streak10": "Inarrêtable",
    "ad_streak10": "Série de 10 destructions.",
    "a_flawless": "Sans faute",
    "ad_flawless": "Détruis les 5 cibles d’une partie.",
    "a_veteran_clear": "Pointeur vétéran",
    "ad_veteran_clear": "Détruis les 5 cibles en Vétéran.",
    "a_daily1": "Au rapport",
    "ad_daily1": "Termine un défi du jour.",
    "a_perfect_daily": "Journée parfaite",
    "ad_perfect_daily": "Détruis les 5 cibles du défi du jour.",
    "a_daily3": "Routine",
    "ad_daily3": "Série quotidienne de 3 jours.",
    "a_daily7": "Assidu",
    "ad_daily7": "Série quotidienne de 7 jours.",
    "a_endless10": "Tenir la ligne",
    "ad_endless10": "10 destructions en une partie sans fin.",
    "a_endless25": "Dernier canon",
    "ad_endless25": "25 destructions en une partie sans fin.",
    "a_missions12": "Campagne terminée",
    "ad_missions12": "Termine les 12 missions.",
    "a_stars36": "Décoré",
    "ad_stars36": "Obtiens les 36 étoiles.",
    "a_rank_sgt": "Galons",
    "ad_rank_sgt": "Atteins le grade de Sergent.",
    "a_rank_gen": "État-major",
    "ad_rank_gen": "Atteins le grade de Général.",
    "kills": "Détruites",
    "directs": "Coups directs",
    "longest": "Destruction la plus lointaine",
    "closest": "Impact le plus proche",
    "games": "Parties",
    "shotsW": "Tirs"
   }
  };
  let lang = 'en';
  // priority: ?lang= > page language (window.MT_LANG, set by the oiotv.de page per language path) > saved choice > Frontbuch site choice > 'en'
  try { const q = new URLSearchParams(location.search).get('lang') || window.MT_LANG || localStorage.getItem('mt_lang') || localStorage.getItem('wardogsLang'); if (q && STR[q]) lang = q; } catch (e) {}
  MT.lang = lang; MT.STR = STR;
  MT.setLang = function (l) { if (!STR[l]) return; lang = l; MT.lang = l; try { localStorage.setItem('mt_lang', l); } catch (e) {} };
  MT.t = function (k, v) {
    // v1.1: left-handed layout mirrors the controls (map bottom right) → use a '<key>_L' variant if one exists
    if (document.body && document.body.classList.contains('lefty') && STR.en[k + '_L']) k += '_L';
    let s = (STR[lang] && STR[lang][k]) || STR.en[k] || k;
    if (v) s = s.replace(/\{(\w+)\}/g, (_, n) => (v[n] != null ? v[n] : ''));
    return s;
  };
  MT.applyI18n = function (root) {
    (root || document).querySelectorAll('[data-i18n]').forEach(el => { el.textContent = MT.t(el.dataset.i18n); });
    (root || document).querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', MT.t(el.dataset.i18nAria)); });
    document.documentElement.lang = lang;
  };
})(window.MT = window.MT || {});

/* ---- i18n_live.js ---- */
/* Mortar Trainer · strings for v1.1 live features ($ economy, calendar, contracts, season pass, collection,
 * mastery, time attack, settings). Merged into MT.STR; missing keys fall back to English. */
(function (MT) {
  'use strict';
  const S = {
    en: {
      tab_skins: 'Skins $',
      directNote: 'Every crate item can also be bought directly with earned $ – no randomness. Fixed price per rarity.',
      confirmDirectCash: 'Buy {n} for ${p}?',
      shopLegal3: 'Everything in the armory is cosmetic and paid with in-game $ or keys you earn by playing. There is no real money in this game: nothing can be bought with real money, and $ and keys cannot be bought. Crates show their drop rates before every opening.',
      seasonFree: 'The season pass is completely free – every tier is unlocked by playing.',
      freeShell: 'free shell', taBonus: '+5 s', masteryUp: 'Mastery {n} {l} · +${c}', newTargetSub_L: 'Open the MAP (bottom right) and place a marker.', tut1_L: 'A target is called in. Tap the MAP (bottom right) – the target is marked in red.', soClose: '{d} m off a kill — so close!',
      taOver: 'Clock ran out.', timeAttack: 'Time Attack', taOverT: 'Time!', taBest: 'Best: {s} · {k} kills this run',
      vsPb: 'vs. personal best', firstPb: 'First personal best set!', cashEarned: 'Earned', cashShells: 'Shells', cashNet: 'Net',
      weekendX2: '2× XP weekend', oneMore: 'One more round', armory: 'Armory', armorySub: 'Crates · upgrades · keys: {k}', masteryShort: 'Stats · mastery',
      weekendOn: 'Double-XP weekend', weekendSub: 'all XP ×2 until Sunday midnight', calendar: 'Rewards', contracts: 'Contracts', seasonPass: 'Season pass', tierN: 'Tier {n}',
      tab_crates: 'Crates', tab_upg: 'Upgrades $',
      crate_supply: 'Supply crate', crate_elite: 'Elite crate', crate_legendary: 'Legendary crate',
      crated_supply: 'Mostly common and rare cosmetics.', crated_elite: 'Rare or better – no commons.', crated_legendary: 'Epic or legendary only.',
      nItems: '{o}/{n} left', pityE: 'Epic+ guaranteed within {e} ({ce} so far)', pityL: 'Legendary within {l} ({cl} so far)', useKey: 'Key',
      dupInfo2: 'No duplicates: you always get an item you do not own yet in the rolled rarity. If that rarity is complete, you get $ instead ($ {c} common … $ {l} legendary). Cosmetic only – never affects aim or score.', confirmCrateCash: 'Open the {n} for ${p}?', crateErr_key: 'No key for this crate', crateErr_cash: 'Not enough $',
      opening: 'Opening…', dupeConv: 'rarity complete', dupeTitle: 'Converted to $', rewardT: 'Reward', shopNote2: 'Earn $ with kills and spend it on crates, keys, upgrades and terrains. Every shell costs $ – misses hurt.',
      freezeUsed: '❄ Streak freeze used – your login streak is safe!', loginLost: 'Login streak of {n} days lost. Start a new one today!',
      sfxVol: 'Effects volume', ambVol: 'Ambience & music', dragSens: 'Drag sensitivity', lefty: 'Left-handed layout', rmotion: 'Reduced motion', cbMode: 'Colour-blind-safe colours',
      key_supply: 'Supply key', key_elite: 'Elite key', key_legendary: 'Legendary key',
      loginStreak: 'login streak', freezes: '{n} streak freezes', freezeInfo: 'A streak freeze saves your login streak if you miss one day. You get one every 7 days of streak (max 2).',
      dayN: 'Day {n}', claimDay: 'Claim day {n}', calBack: 'Next reward in', buyFreeze: 'Buy streak freeze',
      con_kills: 'Destroy {g} targets', con_first: '{g} first-round kills', con_direct: '{g} direct hits', con_long: '{g} kills at 500 m+', con_moving: '{g} moving targets',
      con_streak: 'Reach a streak of {g}', con_cash: 'Earn {g}', con_stars: 'Earn {g} mission stars', con_daily: 'Play the daily challenge ({g}×)',
      con_ta: 'Score {g} in Time Attack', con_taW: 'Play {g} Time Attack runs', con_endless: '{g} kills in one Endless run', con_games: 'Finish {g} games',
      claimed: 'claimed', claim: 'Claim', dailyCon: 'Daily contracts', weeklyCon: 'Weekly contracts', resetsIn: 'resets in',
      seasonN: 'Season {n}', tier: 'Tier', seasonEnds: 'ends in {d}', seasonInfo: 'All XP you earn also fills the season pass (SXP). Contracts give bonus SXP.',
      srcSeason: 'season pass', srcCrate: 'crate', mastery: 'Mastery', masteryInfo: 'Kills on each target type and terrain raise its mastery (I–IV). Every level pays $.',
      masteryTargets: 'Targets', masteryTerrain: 'Terrains', upgrades: 'Upgrades',
      upg_logi: 'Logistics', upgd_logi: 'Shells cost 10 % less per level', upg_bounty: 'Bounty contract', upgd_bounty: '+10 % $ per kill per level', upg_qm: 'Quartermaster', upgd_qm: '+25 % $ from duplicate conversions',
      shellCostNow: 'Shell price now: ${c}. With no $ left, shells are free – training never stops.', keysT: 'Keys',
      keyd_supply: 'Opens a supply crate', keyd_elite: 'Opens an elite crate', keyd_legendary: 'Opens a legendary crate', keyEarnOnly: 'earn only',
      terrainsT: 'Terrains', owned: 'Owned', terrainBuy: 'Unlock now instead of waiting for the rank', earnCash: 'How to earn $',
      earnCashTxt: 'Kill $250 · direct hit +$150 · first-round +$150 · streak +$50 per step (max +$250) · moving +$100 · 500 m+ +$100. Each shell costs ${s}.',
      reticle_teal: 'Teal', reticle_sand: 'Sand', reticle_blood: 'Blood red', reticle_arctic: 'Arctic', reticle_neon: 'Neon (glow)', reticle_plasma: 'Plasma (glow)', reticle_iron: 'Iron cross-hair',
      tint_jungle: 'Jungle', tint_dusk: 'Dusk', tint_noir: 'Noir', tint_ironsight: 'Ironsight'
    },
    de: {
      tab_skins: 'Skins $',
      directNote: 'Jeden Kisten-Gegenstand kannst du auch direkt mit verdienten $ kaufen – ohne Zufall. Fester Preis je Seltenheit.',
      confirmDirectCash: '{n} für ${p} kaufen?',
      shopLegal3: 'Alles in der Waffenkammer ist Kosmetik und wird mit im Spiel verdienten $ oder Schlüsseln bezahlt. In diesem Spiel gibt es kein echtes Geld: Nichts lässt sich mit echtem Geld kaufen, und $ oder Schlüssel kann man nicht kaufen. Kisten zeigen ihre Wahrscheinlichkeiten vor jeder Öffnung.',
      seasonFree: 'Der Saisonpass ist komplett gratis – jede Stufe schaltest du durchs Spielen frei.',
      freeShell: 'Granate gratis', masteryUp: 'Meisterschaft {n} {l} · +${c}', newTargetSub_L: 'Öffne die KARTE (unten rechts) und setze einen Marker.', tut1_L: 'Ein Ziel wird gemeldet. Tippe auf die KARTE (unten rechts) – das Ziel ist rot markiert.', soClose: '{d} m vom Treffer — knapp!',
      taOver: 'Die Zeit ist um.', timeAttack: 'Zeitangriff', taOverT: 'Zeit!', taBest: 'Bestwert: {s} · {k} Ziele in diesem Lauf',
      vsPb: 'vs. persönlicher Rekord', firstPb: 'Erster persönlicher Rekord!', cashEarned: 'Verdient', cashShells: 'Granaten', cashNet: 'Netto',
      weekendX2: '2× XP Wochenende', oneMore: 'Noch eine Runde', armory: 'Waffenkammer', armorySub: 'Kisten · Upgrades · Schlüssel: {k}', masteryShort: 'Statistik · Meisterschaft',
      weekendOn: 'Doppel-XP-Wochenende', weekendSub: 'alle XP ×2 bis Sonntag Mitternacht', calendar: 'Belohnungen', contracts: 'Aufträge', seasonPass: 'Saisonpass', tierN: 'Stufe {n}',
      tab_crates: 'Kisten', tab_upg: 'Upgrades $',
      crate_supply: 'Nachschubkiste', crate_elite: 'Elitekiste', crate_legendary: 'Legendäre Kiste',
      crated_supply: 'Meist gewöhnliche und seltene Kosmetik.', crated_elite: 'Selten oder besser – nichts Gewöhnliches.', crated_legendary: 'Nur episch oder legendär.',
      nItems: 'noch {o}/{n}', pityE: 'Episch+ garantiert innerhalb {e} ({ce} bisher)', pityL: 'Legendär innerhalb {l} ({cl} bisher)', useKey: 'Schlüssel',
      dupInfo2: 'Keine Duplikate: In der gezogenen Seltenheit bekommst du immer etwas, das du noch nicht hast. Ist sie komplett, gibt es stattdessen $ ($ {c} gewöhnlich … $ {l} legendär). Nur Kosmetik – kein Einfluss auf Zielen oder Punkte.', confirmCrateCash: '{n} für ${p} öffnen?', crateErr_key: 'Kein Schlüssel für diese Kiste', crateErr_cash: 'Nicht genug $',
      opening: 'Wird geöffnet…', dupeConv: 'Seltenheit komplett', dupeTitle: 'In $ umgewandelt', rewardT: 'Belohnung', shopNote2: 'Verdiene $ mit Treffern und gib sie für Kisten, Schlüssel, Upgrades und Gelände aus. Jede Granate kostet $ – Fehlschüsse tun weh.',
      freezeUsed: '❄ Serienschutz eingesetzt – deine Login-Serie bleibt!', loginLost: 'Login-Serie von {n} Tagen verloren. Starte heute eine neue!',
      sfxVol: 'Effekte', ambVol: 'Atmo & Musik', dragSens: 'Wisch-Empfindlichkeit', lefty: 'Linkshänder-Layout', rmotion: 'Weniger Bewegung', cbMode: 'Farbenblind-sichere Farben',
      key_supply: 'Nachschub-Schlüssel', key_elite: 'Elite-Schlüssel', key_legendary: 'Legendärer Schlüssel',
      loginStreak: 'Login-Serie', freezes: '{n} Serienschutz', freezeInfo: 'Ein Serienschutz rettet deine Login-Serie, wenn du einen Tag verpasst. Alle 7 Serientage gibt es einen (max. 2).',
      dayN: 'Tag {n}', claimDay: 'Tag {n} abholen', calBack: 'Nächste Belohnung in', buyFreeze: 'Serienschutz kaufen',
      con_kills: '{g} Ziele zerstören', con_first: '{g} Treffer mit dem ersten Schuss', con_direct: '{g} Volltreffer', con_long: '{g} Treffer ab 500 m', con_moving: '{g} bewegliche Ziele',
      con_streak: 'Serie von {g} erreichen', con_cash: '{g} verdienen', con_stars: '{g} Missionssterne holen', con_daily: 'Tageschallenge spielen ({g}×)',
      con_ta: '{g} Punkte im Zeitangriff', con_taW: '{g} Zeitangriff-Läufe', con_endless: '{g} Ziele in einem Endlos-Lauf', con_games: '{g} Spiele beenden',
      claimed: 'abgeholt', claim: 'Abholen', dailyCon: 'Tagesaufträge', weeklyCon: 'Wochenaufträge', resetsIn: 'neu in',
      seasonN: 'Saison {n}', tier: 'Stufe', seasonEnds: 'endet in {d}', seasonInfo: 'Alle verdienten XP füllen auch den Saisonpass (SXP). Aufträge geben Bonus-SXP.',
      srcSeason: 'Saisonpass', srcCrate: 'Kiste', mastery: 'Meisterschaft', masteryInfo: 'Treffer pro Zieltyp und Gelände steigern die Meisterschaft (I–IV). Jede Stufe zahlt $.',
      masteryTargets: 'Ziele', masteryTerrain: 'Gelände', upgrades: 'Upgrades',
      upg_logi: 'Logistik', upgd_logi: 'Granaten 10 % billiger pro Stufe', upg_bounty: 'Kopfgeldvertrag', upgd_bounty: '+10 % $ pro Treffer und Stufe', upg_qm: 'Quartiermeister', upgd_qm: '+25 % $ aus Duplikat-Umwandlung',
      shellCostNow: 'Granatenpreis jetzt: ${c}. Ohne $ sind Granaten gratis – Training geht immer.', keysT: 'Schlüssel',
      keyd_supply: 'Öffnet eine Nachschubkiste', keyd_elite: 'Öffnet eine Elitekiste', keyd_legendary: 'Öffnet eine legendäre Kiste', keyEarnOnly: 'nur erspielbar',
      terrainsT: 'Gelände', owned: 'Besitzt du', terrainBuy: 'Sofort freischalten statt auf den Rang zu warten', earnCash: 'So verdienst du $',
      earnCashTxt: 'Treffer $250 · Volltreffer +$150 · erster Schuss +$150 · Serie +$50 je Stufe (max +$250) · bewegt +$100 · ab 500 m +$100. Jede Granate kostet ${s}.',
      reticle_teal: 'Petrol', reticle_sand: 'Sand', reticle_blood: 'Blutrot', reticle_arctic: 'Arktis', reticle_neon: 'Neon (leuchtend)', reticle_plasma: 'Plasma (leuchtend)', reticle_iron: 'Eisenkreuz',
      tint_jungle: 'Dschungel', tint_dusk: 'Dämmerung', tint_noir: 'Noir', tint_ironsight: 'Kimme'
    },
    es: {
      tab_skins: 'Aspectos $',
      directNote: 'Cada objeto de las cajas también se puede comprar directamente con $ ganados, sin azar. Precio fijo por rareza.',
      confirmDirectCash: '¿Comprar {n} por ${p}?',
      shopLegal3: 'Todo en la armería es cosmético y se paga con $ o llaves ganados jugando. En este juego no hay dinero real: no se puede comprar nada con dinero real y los $ y las llaves no se venden. Las cajas muestran sus probabilidades antes de cada apertura.',
      seasonFree: 'El pase de temporada es totalmente gratis: cada nivel se desbloquea jugando.',
      freeShell: 'proyectil gratis', masteryUp: 'Maestría {n} {l} · +${c}', newTargetSub_L: 'Abre el MAPA (abajo a la derecha) y pon un marcador.', tut1_L: 'Se notifica un objetivo. Toca el MAPA (abajo a la derecha): el objetivo está marcado en rojo.', soClose: '¡A {d} m de destruirlo — casi!',
      taOver: 'Se acabó el tiempo.', timeAttack: 'Contrarreloj', taOverT: '¡Tiempo!', taBest: 'Récord: {s} · {k} objetivos',
      vsPb: 'vs. récord personal', firstPb: '¡Primer récord personal!', cashEarned: 'Ganado', cashShells: 'Proyectiles', cashNet: 'Neto',
      weekendX2: 'Fin de semana 2× XP', oneMore: 'Una ronda más', armory: 'Armería', armorySub: 'Cajas · mejoras · llaves: {k}', masteryShort: 'Estadísticas · maestría',
      weekendOn: 'Fin de semana doble XP', weekendSub: 'XP ×2 hasta el domingo a medianoche', calendar: 'Premios', contracts: 'Contratos', seasonPass: 'Pase de temporada', tierN: 'Nivel {n}',
      tab_crates: 'Cajas', tab_upg: 'Mejoras $',
      crate_supply: 'Caja de suministros', crate_elite: 'Caja élite', crate_legendary: 'Caja legendaria',
      crated_supply: 'Sobre todo cosméticos comunes y raros.', crated_elite: 'Raro o mejor.', crated_legendary: 'Solo épico o legendario.',
      nItems: 'quedan {o}/{n}', pityE: 'Épico+ garantizado en {e} ({ce})', pityL: 'Legendario en {l} ({cl})', useKey: 'Llave',
      dupInfo2: 'Sin duplicados: siempre recibes algo que no tienes en la rareza obtenida. Si está completa, recibes $ ($ {c} común … $ {l} legendario). Solo cosmético.', confirmCrateCash: '¿Abrir {n} por ${p}?', crateErr_key: 'No tienes llave', crateErr_cash: 'No tienes suficientes $',
      opening: 'Abriendo…', dupeConv: 'rareza completa', dupeTitle: 'Convertido en $', rewardT: 'Premio', shopNote2: 'Gana $ con impactos y gástalos en cajas, llaves, mejoras y terrenos. Cada proyectil cuesta $.',
      freezeUsed: '❄ Protector de racha usado.', loginLost: 'Racha de {n} días perdida. ¡Empieza otra hoy!',
      sfxVol: 'Efectos', ambVol: 'Ambiente y música', dragSens: 'Sensibilidad al arrastrar', lefty: 'Modo zurdo', rmotion: 'Menos movimiento', cbMode: 'Colores para daltónicos',
      key_supply: 'Llave de suministros', key_elite: 'Llave élite', key_legendary: 'Llave legendaria',
      loginStreak: 'racha diaria', freezes: '{n} protectores', freezeInfo: 'Un protector salva tu racha si faltas un día. Ganas uno cada 7 días (máx. 2).',
      dayN: 'Día {n}', claimDay: 'Recoger día {n}', calBack: 'Próximo premio en', buyFreeze: 'Comprar protector',
      con_kills: 'Destruye {g} objetivos', con_first: '{g} impactos al primer disparo', con_direct: '{g} impactos directos', con_long: '{g} impactos a 500 m+', con_moving: '{g} objetivos móviles',
      con_streak: 'Racha de {g}', con_cash: 'Gana {g}', con_stars: 'Consigue {g} estrellas', con_daily: 'Juega el desafío diario ({g}×)',
      con_ta: '{g} puntos en Contrarreloj', con_taW: '{g} partidas de Contrarreloj', con_endless: '{g} objetivos en una partida infinita', con_games: 'Termina {g} partidas',
      claimed: 'recogido', claim: 'Recoger', dailyCon: 'Contratos diarios', weeklyCon: 'Contratos semanales', resetsIn: 'reinicio en',
      seasonN: 'Temporada {n}', tier: 'Nivel', seasonEnds: 'termina en {d}', seasonInfo: 'Toda la XP también llena el pase (SXP). Los contratos dan SXP extra.',
      srcSeason: 'pase', srcCrate: 'caja', mastery: 'Maestría', masteryInfo: 'Los impactos por tipo de objetivo y terreno suben la maestría (I–IV). Cada nivel paga $.',
      masteryTargets: 'Objetivos', masteryTerrain: 'Terrenos', upgrades: 'Mejoras',
      upg_logi: 'Logística', upgd_logi: 'Proyectiles un 10 % más baratos por nivel', upg_bounty: 'Recompensa', upgd_bounty: '+10 % $ por impacto y nivel', upg_qm: 'Intendente', upgd_qm: '+25 % $ por duplicados',
      shellCostNow: 'Precio por proyectil: ${c}. Sin $, los proyectiles son gratis.', keysT: 'Llaves',
      keyd_supply: 'Abre una caja de suministros', keyd_elite: 'Abre una caja élite', keyd_legendary: 'Abre una caja legendaria', keyEarnOnly: 'solo jugando',
      terrainsT: 'Terrenos', owned: 'Tuyo', terrainBuy: 'Desbloquéalo ya', earnCash: 'Cómo ganar $',
      earnCashTxt: 'Impacto $250 · directo +$150 · primer disparo +$150 · racha +$50 por paso (máx. +$250) · móvil +$100 · 500 m+ +$100. Cada proyectil cuesta ${s}.',
      reticle_teal: 'Verde azulado', reticle_sand: 'Arena', reticle_blood: 'Sangre', reticle_arctic: 'Ártico', reticle_neon: 'Neón (brillo)', reticle_plasma: 'Plasma (brillo)', reticle_iron: 'Cruz de hierro',
      tint_jungle: 'Jungla', tint_dusk: 'Ocaso', tint_noir: 'Noir', tint_ironsight: 'Mira de hierro'
    },
    fr: {
      tab_skins: 'Skins $',
      directNote: 'Chaque objet des caisses peut aussi être acheté directement avec des $ gagnés, sans hasard. Prix fixe par rareté.',
      confirmDirectCash: 'Acheter {n} pour {p} $ ?',
      shopLegal3: 'Tout dans l’armurerie est cosmétique et se paie avec des $ ou des clés gagnés en jouant. Il n’y a pas d’argent réel dans ce jeu : rien ne s’achète avec de l’argent réel, et les $ et les clés ne sont pas à vendre. Les caisses affichent leurs probabilités avant chaque ouverture.',
      seasonFree: 'Le passe de saison est entièrement gratuit : chaque palier se débloque en jouant.',
      freeShell: 'obus gratuit', masteryUp: 'Maîtrise {n} {l} · +${c}', newTargetSub_L: 'Ouvre la CARTE (en bas à droite) et pose un marqueur.', tut1_L: 'Une cible est signalée. Touche la CARTE (en bas à droite) : la cible est marquée en rouge.', soClose: 'À {d} m de la destruction — si près !',
      taOver: 'Le temps est écoulé.', timeAttack: 'Contre-la-montre', taOverT: 'Temps !', taBest: 'Record : {s} · {k} cibles',
      vsPb: 'vs. record perso', firstPb: 'Premier record perso !', cashEarned: 'Gagné', cashShells: 'Obus', cashNet: 'Net',
      weekendX2: 'Week-end XP ×2', oneMore: 'Encore une manche', armory: 'Armurerie', armorySub: 'Caisses · améliorations · clés : {k}', masteryShort: 'Stats · maîtrise',
      weekendOn: 'Week-end double XP', weekendSub: 'XP ×2 jusqu’à dimanche minuit', calendar: 'Récompenses', contracts: 'Contrats', seasonPass: 'Passe saison', tierN: 'Palier {n}',
      tab_crates: 'Caisses', tab_upg: 'Améliorations $',
      crate_supply: 'Caisse de ravitaillement', crate_elite: 'Caisse d’élite', crate_legendary: 'Caisse légendaire',
      crated_supply: 'Surtout des cosmétiques communs et rares.', crated_elite: 'Rare ou mieux.', crated_legendary: 'Épique ou légendaire uniquement.',
      nItems: 'reste {o}/{n}', pityE: 'Épique+ garanti sous {e} ({ce})', pityL: 'Légendaire sous {l} ({cl})', useKey: 'Clé',
      dupInfo2: 'Pas de doublons : vous recevez toujours un objet que vous n’avez pas dans la rareté tirée. Si elle est complète, vous recevez des $ ($ {c} commun … $ {l} légendaire). Purement cosmétique.', confirmCrateCash: 'Ouvrir {n} pour {p} $ ?', crateErr_key: 'Pas de clé', crateErr_cash: 'Pas assez de $',
      opening: 'Ouverture…', dupeConv: 'rareté complète', dupeTitle: 'Converti en $', rewardT: 'Récompense', shopNote2: 'Gagnez des $ en détruisant des cibles et dépensez-les en caisses, clés, améliorations et terrains. Chaque obus coûte des $.',
      freezeUsed: '❄ Protection de série utilisée.', loginLost: 'Série de {n} jours perdue. Recommencez aujourd’hui !',
      sfxVol: 'Effets', ambVol: 'Ambiance et musique', dragSens: 'Sensibilité du glisser', lefty: 'Mode gaucher', rmotion: 'Animations réduites', cbMode: 'Couleurs daltoniens',
      key_supply: 'Clé de ravitaillement', key_elite: 'Clé d’élite', key_legendary: 'Clé légendaire',
      loginStreak: 'série de connexions', freezes: '{n} protections', freezeInfo: 'Une protection sauve votre série si vous manquez un jour. Une tous les 7 jours (max 2).',
      dayN: 'Jour {n}', claimDay: 'Récupérer jour {n}', calBack: 'Prochaine récompense dans', buyFreeze: 'Acheter une protection',
      con_kills: 'Détruire {g} cibles', con_first: '{g} cibles au 1er tir', con_direct: '{g} coups directs', con_long: '{g} cibles à 500 m+', con_moving: '{g} cibles mobiles',
      con_streak: 'Série de {g}', con_cash: 'Gagner {g}', con_stars: 'Gagner {g} étoiles', con_daily: 'Jouer le défi du jour ({g}×)',
      con_ta: '{g} points en contre-la-montre', con_taW: '{g} parties contre-la-montre', con_endless: '{g} cibles en une partie sans fin', con_games: 'Terminer {g} parties',
      claimed: 'récupéré', claim: 'Récupérer', dailyCon: 'Contrats du jour', weeklyCon: 'Contrats de la semaine', resetsIn: 'réinit. dans',
      seasonN: 'Saison {n}', tier: 'Palier', seasonEnds: 'fin dans {d}', seasonInfo: 'Toute l’XP remplit aussi le passe (SXP). Les contrats donnent des SXP bonus.',
      srcSeason: 'passe', srcCrate: 'caisse', mastery: 'Maîtrise', masteryInfo: 'Les cibles détruites par type et terrain montent la maîtrise (I–IV). Chaque niveau rapporte des $.',
      masteryTargets: 'Cibles', masteryTerrain: 'Terrains', upgrades: 'Améliorations',
      upg_logi: 'Logistique', upgd_logi: 'Obus 10 % moins chers par niveau', upg_bounty: 'Prime', upgd_bounty: '+10 % de $ par cible et niveau', upg_qm: 'Intendant', upgd_qm: '+25 % de $ sur les doublons',
      shellCostNow: 'Prix de l’obus : {c} $. Sans $, les obus sont gratuits.', keysT: 'Clés',
      keyd_supply: 'Ouvre une caisse de ravitaillement', keyd_elite: 'Ouvre une caisse d’élite', keyd_legendary: 'Ouvre une caisse légendaire', keyEarnOnly: 'à gagner',
      terrainsT: 'Terrains', owned: 'Possédé', terrainBuy: 'Débloquer maintenant', earnCash: 'Gagner des $',
      earnCashTxt: 'Cible $250 · coup direct +$150 · 1er tir +$150 · série +$50 par palier (max +$250) · mobile +$100 · 500 m+ +$100. Chaque obus coûte {s} $.',
      reticle_teal: 'Sarcelle', reticle_sand: 'Sable', reticle_blood: 'Sang', reticle_arctic: 'Arctique', reticle_neon: 'Néon (lueur)', reticle_plasma: 'Plasma (lueur)', reticle_iron: 'Croix de fer',
      tint_jungle: 'Jungle', tint_dusk: 'Crépuscule', tint_noir: 'Noir', tint_ironsight: 'Mire'
    }
  };
  for (const l in S) MT.STR[l] = Object.assign(MT.STR[l] || {}, S[l]);
})(window.MT = window.MT || {});

/* ---- ballistics.js ---- */
/* Mörser-Trainer · Ballistik
 * Die L81-Werte sind 1:1 aus dem Frontbuch-Rechner übernommen:
 *   fbsrc/parts/js_calc.js, Z. 1–11  (l81Table, Community-Tabelle Entfernung m → Elevation mil)
 *   fbsrc/parts/js_calc.js, Z. 13–24 (interpolateMils, lineare Interpolation)
 *   fbsrc/parts/js_calc.js, Z. 150–157 (Distanz = √(dx²+dy²), Richtung = atan2(dx,dy), Azimut = Grad·6400/360)
 * Reichweite L81: 132–684 m (wie /rechner). Ladungsstufen, Flugzeit oder Wind kennt der Rechner nicht –
 * deshalb gibt es sie hier auch nicht. TODO vor Release: gemeinsames Modul mit /rechner.
 * Koordinaten hier direkt in Metern (der Rechner nutzt 1 Einheit = 100 m; identische Rechnung). */
(function (MT) {
  'use strict';
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
  const MIN_RANGE = 132, MAX_RANGE = 684;
  const MIL_MAX = l81Table[0][1], MIL_MIN = l81Table[l81Table.length - 1][1];

  // identisch zu /rechner
  function interpolateMils(distance) {
    if (distance < 132 || distance > 684) return null;
    for (let i = 0; i < l81Table.length - 1; i++) {
      const [r1, m1] = l81Table[i];
      const [r2, m2] = l81Table[i + 1];
      if (distance >= r1 && distance <= r2) {
        const t = (distance - r1) / (r2 - r1);
        return Math.round(m1 + t * (m2 - m1));
      }
    }
    return null;
  }

  // gleiche Interpolation ohne Rundung (nur für die Darstellung der Skalen im Visier)
  function milsExact(distance) {
    const d = Math.max(132, Math.min(684, distance));
    for (let i = 0; i < l81Table.length - 1; i++) {
      const [r1, m1] = l81Table[i], [r2, m2] = l81Table[i + 1];
      if (d >= r1 && d <= r2) return m1 + (d - r1) / (r2 - r1) * (m2 - m1);
    }
    return l81Table[l81Table.length - 1][1];
  }

  // Umkehrung derselben Tabelle (gleiche lineare Interpolation): eingestellte Elevation → Schussweite
  function rangeForMils(mil) {
    if (mil > MIL_MAX || mil < MIL_MIN) return null;
    for (let i = 0; i < l81Table.length - 1; i++) {
      const [r1, m1] = l81Table[i];
      const [r2, m2] = l81Table[i + 1];
      if (mil <= m1 && mil >= m2) {
        const t = m1 === m2 ? 0 : (m1 - mil) / (m1 - m2);
        return r1 + t * (r2 - r1);
      }
    }
    return null;
  }

  // wie calculate() im Rechner, ohne DOM. x = Osten, y = Norden, Meter.
  function solve(gx, gy, tx, ty) {
    const dx = tx - gx, dy = ty - gy;
    const distance = Math.sqrt(dx * dx + dy * dy);
    let bearing = Math.atan2(dx, dy) * 180 / Math.PI;
    if (bearing < 0) bearing += 360;
    const azMil = Math.round(bearing * 6400 / 360) % 6400;
    const mils = interpolateMils(distance);
    const status = distance < MIN_RANGE ? 'tooClose' : distance > MAX_RANGE ? 'outOfRange' : 'inRange';
    return { distance, bearing, azMil, mils, status };
  }

  MT.ballistics = { table: l81Table, MIN_RANGE, MAX_RANGE, MIL_MIN, MIL_MAX, interpolateMils, milsExact, rangeForMils, solve,
    milToDeg: m => m * 360 / 6400, degToMil: d => d * 6400 / 360 };
})(window.MT = window.MT || {});

/* ---- audio.js ---- */
/* Mörser-Trainer · Sound – komplett per WebAudio synthetisiert (keine Audiodateien). */
(function (MT) {
  'use strict';
  let ctx = null, master = null, noiseBuf = null, ambience = null;
  let muted = false, sfxBus = null, ambBus = null;
  const vol = { sfx: 0.9, amb: 0.5 };
  try { Object.assign(vol, JSON.parse(localStorage.getItem('mt_vol') || '{}')); } catch (e) {}
  try { muted = localStorage.getItem('mt_muted') === '1'; } catch (e) {}

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try { ctx = new AC(); } catch (e) { return null; }
      master = ctx.createGain();
      master.gain.value = muted ? 0 : 0.85;
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14; comp.ratio.value = 6;
      master.connect(comp); comp.connect(ctx.destination);
      sfxBus = ctx.createGain(); sfxBus.gain.value = vol.sfx; sfxBus.connect(master);
      ambBus = ctx.createGain(); ambBus.gain.value = vol.amb; ambBus.connect(master);
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      let b = 0;
      for (let i = 0; i < d.length; i++) { const w = Math.random() * 2 - 1; b = 0.97 * b + 0.03 * w; d[i] = w * 0.6 + b * 2.2; }
    }
    if (ctx.state === 'suspended' && !hiddenNow()) ctx.resume().catch(() => {});
    return ctx;
  }

  const hiddenNow = () => typeof document !== 'undefined' && document.hidden;
  function env(g, t0, a, peak, dec, sustainEnd) {
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(peak, t0 + a);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + a + dec);
  }

  function noise(o) {
    if (!ensure() || muted) return;
    const t0 = ctx.currentTime + (o.delay || 0);
    const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
    const f = ctx.createBiquadFilter(); f.type = o.type || 'lowpass';
    f.frequency.setValueAtTime(o.f || 1000, t0); f.Q.value = o.q || 0.7;
    if (o.fEnd) f.frequency.exponentialRampToValueAtTime(o.fEnd, t0 + (o.a || 0.003) + o.dec);
    const g = ctx.createGain();
    env(g, t0, o.a || 0.003, o.gain || 0.4, o.dec || 0.2);
    src.connect(f); f.connect(g); g.connect(o.bus || sfxBus);
    src.start(t0, Math.random() * 1.5); src.stop(t0 + (o.a || 0.003) + (o.dec || 0.2) + 0.05);
  }

  function tone(o) {
    if (!ensure() || muted) return;
    const t0 = ctx.currentTime + (o.delay || 0);
    const osc = ctx.createOscillator(); osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(o.f, t0);
    if (o.fEnd) osc.frequency.exponentialRampToValueAtTime(o.fEnd, t0 + (o.a || 0.005) + o.dec);
    const g = ctx.createGain();
    env(g, t0, o.a || 0.005, o.gain || 0.2, o.dec || 0.2);
    osc.connect(g); g.connect(o.bus || sfxBus);
    osc.start(t0); osc.stop(t0 + (o.a || 0.005) + o.dec + 0.05);
  }

  let lastTick = 0;
  const S = {
    unlock() { if (ensure() && !muted && !ambience && vol.amb > 0) S.ambienceStart(); },
    get muted() { return muted; },
    setMuted(m) {
      muted = !!m;
      try { localStorage.setItem('mt_muted', muted ? '1' : '0'); } catch (e) {}
      if (master) master.gain.setTargetAtTime(muted ? 0 : 0.85, ctx.currentTime, 0.03);
      if (muted) S.ambienceStop(); else if (S._ambWanted) S.ambienceStart();
    },
    // v1.2: temporary silence while an ad plays (does not touch the saved mute setting)
    duck(on) { if (master && ctx) master.gain.setTargetAtTime(on || muted ? 0 : 0.85, ctx.currentTime, 0.05); },
    click() { noise({ type: 'bandpass', f: 2600, q: 3, gain: 0.35, dec: 0.04 }); tone({ f: 1400, dec: 0.03, gain: 0.05, type: 'square' }); },
    tick() {
      const now = performance.now(); if (now - lastTick < 34) return; lastTick = now;
      noise({ type: 'highpass', f: 3200, gain: 0.18, dec: 0.025 });
      tone({ f: 900 + Math.random() * 120, dec: 0.02, gain: 0.03, type: 'triangle' });
    },
    clunk() { tone({ f: 180, fEnd: 90, dec: 0.18, gain: 0.25, type: 'triangle' }); noise({ type: 'bandpass', f: 900, q: 2, gain: 0.3, dec: 0.12 }); },
    drop() { // Granate rutscht ins Rohr
      noise({ type: 'bandpass', f: 1800, fEnd: 500, q: 4, gain: 0.18, a: 0.02, dec: 0.28 });
      tone({ f: 620, fEnd: 240, dec: 0.3, gain: 0.05, type: 'sine' });
    },
    fire() {
      tone({ f: 120, fEnd: 38, dec: 0.55, gain: 0.9, type: 'sine' });
      noise({ type: 'lowpass', f: 2400, fEnd: 200, gain: 0.9, a: 0.002, dec: 0.7 });
      noise({ type: 'bandpass', f: 600, q: 1.2, gain: 0.5, dec: 1.4, delay: 0.05, fEnd: 120 });
      tone({ f: 70, fEnd: 30, dec: 1.2, gain: 0.35, delay: 0.02 });
    },
    whistle(dur) {
      if (!ensure() || muted) return;
      const t0 = ctx.currentTime; const d = Math.max(0.6, dur);
      const osc = ctx.createOscillator(); osc.type = 'sine';
      osc.frequency.setValueAtTime(1500, t0); osc.frequency.exponentialRampToValueAtTime(420, t0 + d);
      const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t0);
      g.gain.exponentialRampToValueAtTime(0.09, t0 + d * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t0 + d);
      osc.connect(g); g.connect(sfxBus); osc.start(t0); osc.stop(t0 + d + 0.05);
    },
    boom(near) {
      const k = near ? 1 : 0.75;
      tone({ f: 90, fEnd: 28, dec: 1.4, gain: 0.9 * k });
      noise({ type: 'lowpass', f: 3000, fEnd: 120, gain: 1.0 * k, a: 0.004, dec: 1.6 });
      noise({ type: 'bandpass', f: 400, q: 0.8, gain: 0.45 * k, dec: 2.4, delay: 0.12, fEnd: 80 });
      for (let i = 0; i < 6; i++) noise({ type: 'highpass', f: 2500, gain: 0.06, dec: 0.05, delay: 0.25 + Math.random() * 0.9 });
    },
    radio() { // Funk-Knacksen bei neuem Ziel
      noise({ type: 'bandpass', f: 1800, q: 1.5, gain: 0.2, dec: 0.18 });
      tone({ f: 1200, dec: 0.08, gain: 0.06, type: 'square', delay: 0.2 });
      tone({ f: 1600, dec: 0.08, gain: 0.06, type: 'square', delay: 0.32 });
      noise({ type: 'bandpass', f: 1800, q: 1.5, gain: 0.12, dec: 0.12, delay: 0.42 });
    },
    good() { [660, 880, 1320].forEach((f, i) => tone({ f, dec: 0.18, gain: 0.12, type: 'triangle', delay: i * 0.09 })); },
    hitMark() { tone({ f: 2200, dec: 0.05, gain: 0.09, type: 'square' }); tone({ f: 3300, dec: 0.06, gain: 0.06, type: 'square', delay: 0.035 }); noise({ type: 'highpass', f: 5000, gain: 0.12, dec: 0.05 }); },
    kill() { tone({ f: 110, fEnd: 40, dec: 0.7, gain: 0.3, type: 'sine' }); [523, 659, 784, 1046].forEach((f, i) => tone({ f, dec: 0.22, gain: 0.1, type: 'triangle', delay: 0.08 + i * 0.07 })); noise({ type: 'lowpass', f: 600, fEnd: 120, gain: 0.35, dec: 0.9 }); },
    combo(n) { const b = 440 * Math.pow(2, Math.min(n, 12) / 12); tone({ f: b, dec: 0.12, gain: 0.09, type: 'square' }); tone({ f: b * 1.5, dec: 0.16, gain: 0.07, type: 'square', delay: 0.08 }); },
    levelUp() { [392, 523, 659, 784, 1046, 1318].forEach((f, i) => tone({ f, dec: i === 5 ? 0.6 : 0.16, gain: 0.11, type: 'triangle', delay: i * 0.1 })); tone({ f: 196, dec: 0.9, gain: 0.08, type: 'sawtooth', delay: 0.5 }); },
    achieve() { [880, 1175, 1568].forEach((f, i) => tone({ f, dec: 0.25, gain: 0.08, type: 'sine', delay: i * 0.07 })); },
    coin() { tone({ f: 1318, dec: 0.05, gain: 0.06, type: 'square' }); tone({ f: 1760, dec: 0.12, gain: 0.06, type: 'square', delay: 0.05 }); },
    bad() { tone({ f: 240, fEnd: 150, dec: 0.35, gain: 0.12, type: 'sawtooth' }); },
    tablet(open) { tone({ f: open ? 520 : 780, fEnd: open ? 900 : 420, dec: 0.12, gain: 0.07, type: 'triangle' }); noise({ type: 'highpass', f: 4000, gain: 0.05, dec: 0.1 }); },
    // cash register: drawer clunk + bell "ka-ching"
    cash() {
      const now = performance.now(); if (now - (S._lc || 0) < 90) return; S._lc = now;
      noise({ type: 'bandpass', f: 1400, q: 2, gain: 0.22, dec: 0.06 });
      tone({ f: 2093, dec: 0.32, gain: 0.08, type: 'triangle', delay: 0.06 }); tone({ f: 2637, dec: 0.45, gain: 0.07, type: 'triangle', delay: 0.11 });
      tone({ f: 4186, dec: 0.25, gain: 0.025, type: 'sine', delay: 0.11 });
    },
    crateRise() { tone({ f: 110, fEnd: 440, dec: 1.4, gain: 0.07, type: 'sawtooth', a: 0.2 }); noise({ type: 'bandpass', f: 300, fEnd: 2400, q: 2, gain: 0.12, a: 0.3, dec: 1.2 }); for (let i = 0; i < 5; i++) noise({ type: 'bandpass', f: 900, q: 3, gain: 0.15, dec: 0.05, delay: 0.25 * i + 0.2 }); },
    crateReveal(tier) {
      const base = [523, 587, 659, 784][tier] || 523, n = 3 + tier;
      for (let i = 0; i < n; i++) tone({ f: base * Math.pow(2, [0, 4, 7, 12, 16, 19, 24][i] / 12), dec: i === n - 1 ? 0.8 : 0.18, gain: 0.09, type: 'triangle', delay: 0.15 + i * 0.08 });
      if (tier >= 2) noise({ type: 'highpass', f: 6000, gain: 0.08, a: 0.05, dec: 1.5, delay: 0.2 });
      if (tier >= 3) tone({ f: base / 2, dec: 1.6, gain: 0.08, type: 'sawtooth', delay: 0.15 });
    },
    get vol() { return vol; },
    setVol(k, v) { vol[k] = Math.max(0, Math.min(1, v)); try { localStorage.setItem('mt_vol', JSON.stringify(vol)); } catch (e) {} const b = k === 'sfx' ? sfxBus : ambBus; if (b) b.gain.setTargetAtTime(vol[k], ctx.currentTime, 0.05); },
    suspend() { if (ctx && ctx.state === 'running') ctx.suspend().catch(() => {}); },
    resume() { if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {}); },
    place() { tone({ f: 980, dec: 0.07, gain: 0.08, type: 'square' }); tone({ f: 1470, dec: 0.08, gain: 0.06, type: 'square', delay: 0.06 }); },
    _ambWanted: false,
    ambienceStart() {
      S._ambWanted = true;
      if (!ensure() || muted || ambience) return;
      const t0 = ctx.currentTime;
      const src = ctx.createBufferSource(); src.buffer = noiseBuf; src.loop = true;
      const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 420; f.Q.value = 0.6;
      const g = ctx.createGain(); g.gain.value = 0.0001; g.gain.setTargetAtTime(0.06, t0, 1.2);
      const lfo = ctx.createOscillator(); lfo.frequency.value = 0.09;
      const lg = ctx.createGain(); lg.gain.value = 180; lfo.connect(lg); lg.connect(f.frequency);
      src.connect(f); f.connect(g); g.connect(ambBus); src.start(); lfo.start();
      // music: very quiet minor drone (A1/E2/C3) through a slowly breathing low-pass
      const pad = ctx.createGain(); pad.gain.value = 0.0001; pad.gain.setTargetAtTime(0.035, t0, 3);
      const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 380; lp.Q.value = 0.5;
      const plfo = ctx.createOscillator(); plfo.frequency.value = 0.05; const plg = ctx.createGain(); plg.gain.value = 160; plfo.connect(plg); plg.connect(lp.frequency); plfo.start();
      const oscs = [55, 82.4, 130.8, 110.3].map((fr, i) => { const o = ctx.createOscillator(); o.type = i % 2 ? 'sawtooth' : 'triangle'; o.frequency.value = fr; o.detune.value = (i - 1.5) * 4; const og = ctx.createGain(); og.gain.value = i === 1 ? 0.5 : i === 3 ? 0.25 : 0.7; o.connect(og); og.connect(lp); o.start(); return o; });
      lp.connect(pad); pad.connect(ambBus);
      // distant artillery rumbles at random intervals
      const rumble = () => { if (!ambience || muted) return; noise({ type: 'lowpass', f: 180, fEnd: 50, gain: 0.25 + Math.random() * 0.2, a: 0.05, dec: 2.2, bus: ambBus }); ambience.rt = setTimeout(rumble, 9000 + Math.random() * 16000); };
      ambience = { src, lfo, g, pad, plfo, oscs, rt: setTimeout(rumble, 5000) };
    },
    ambienceStop() {
      if (!ambience) return;
      const a = ambience; ambience = null; clearTimeout(a.rt);
      try { a.g.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.2); a.pad.gain.setTargetAtTime(0.0001, ctx.currentTime, 0.2); setTimeout(() => { try { a.src.stop(); a.lfo.stop(); a.plfo.stop(); a.oscs.forEach(o => o.stop()); } catch (e) {} }, 700); } catch (e) {}
    }
  };
  MT.audio = S;
})(window.MT = window.MT || {});

/* ---- terrain.js ---- */
/* Mörser-Trainer · prozedurales Übungsgelände (frei erfunden, keine Spielkarten). Koordinaten in Metern, y nach Süden. */
(function (MT) {
  'use strict';
  const SIZE = 1400; // 14 × 14 Planquadrate à 100 m

  function mulberry32(a) {
    return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  }
  function makeNoise(R) {
    const p = new Uint8Array(512), g = new Float32Array(256);
    for (let i = 0; i < 256; i++) { p[i] = i; g[i] = R(); }
    for (let i = 255; i > 0; i--) { const j = (R() * (i + 1)) | 0; const t = p[i]; p[i] = p[j]; p[j] = t; }
    for (let i = 0; i < 256; i++) p[i + 256] = p[i];
    const sm = t => t * t * (3 - 2 * t);
    function n2(x, y) {
      const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
      const X = xi & 255, Y = yi & 255;
      const a = g[p[p[X] + Y]], b = g[p[p[X + 1] + Y]], c = g[p[p[X] + Y + 1]], d = g[p[p[X + 1] + Y + 1]];
      const u = sm(xf), v = sm(yf);
      return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
    }
    function fbm(x, y, oct) { let s = 0, amp = 0.5, f = 1, n = 0; for (let i = 0; i < oct; i++) { s += amp * n2(x * f, y * f); n += amp; amp *= 0.5; f *= 2.03; } return s / n; }
    return { n2, fbm };
  }
  function distToPoly(px, py, pts) {
    let best = 1e9;
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, ay] = pts[i], [bx, by] = pts[i + 1];
      const dx = bx - ax, dy = by - ay, l2 = dx * dx + dy * dy;
      let t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0; t = Math.max(0, Math.min(1, t));
      const ex = ax + t * dx - px, ey = ay + t * dy - py; const d = ex * ex + ey * ey;
      if (d < best) best = d;
    }
    return Math.sqrt(best);
  }
  function segInter(p1, p2, p3, p4) {
    const d = (p2[0] - p1[0]) * (p4[1] - p3[1]) - (p2[1] - p1[1]) * (p4[0] - p3[0]);
    if (!d) return null;
    const t = ((p3[0] - p1[0]) * (p4[1] - p3[1]) - (p3[1] - p1[1]) * (p4[0] - p3[0])) / d;
    const u = ((p3[0] - p1[0]) * (p2[1] - p1[1]) - (p3[1] - p1[1]) * (p2[0] - p1[0])) / d;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) return [p1[0] + t * (p2[0] - p1[0]), p1[1] + t * (p2[1] - p1[1]), Math.atan2(p2[1] - p1[1], p2[0] - p1[0])];
    return null;
  }

  function generate(seed, biome) {
    const R = mulberry32(seed), N = makeNoise(R);
    const rr = (a, b) => a + R() * (b - a);
    const own = { x: Math.round(rr(640, 760)), y: Math.round(rr(660, 780)) };
    const T = { seed, biome: biome || 'grass', SIZE, own, N, rivers: [], roads: [], buildings: [], trees: [], fields: [], bridges: [], bushes: [] };

    // Fluss
    const ra = rr(0, Math.PI), dvx = Math.cos(ra), dvy = Math.sin(ra), nx = -dvy, ny = dvx;
    const off = rr(200, 380) * (R() < 0.5 ? -1 : 1), ph1 = rr(0, 6), ph2 = rr(0, 6);
    const river = [];
    for (let t = -1200; t <= 1200; t += 16) {
      const w = 70 * Math.sin(t / 190 + ph1) + 32 * Math.sin(t / 71 + ph2);
      river.push([own.x + nx * (off + w) + dvx * t, own.y + ny * (off + w) + dvy * t]);
    }
    T.rivers.push(river);

    // Straße 1 quer zum Fluss, nahe der eigenen Stellung
    const ra2 = ra + Math.PI / 2 + rr(-0.35, 0.35), ex = Math.cos(ra2), ey = Math.sin(ra2), qx = -ey, qy = ex;
    const roff = rr(45, 90) * (R() < 0.5 ? -1 : 1), ph3 = rr(0, 6);
    const road1 = [];
    for (let t = -1200; t <= 1200; t += 20) {
      const w = 40 * Math.sin(t / 260 + ph3);
      road1.push([own.x + qx * (roff + w) + ex * t, own.y + qy * (roff + w) + ey * t]);
    }
    T.roads.push(road1);
    // Straße 2 zweigt ab
    const bi = 20 + ((R() * 80) | 0), bp = road1[Math.min(road1.length - 2, bi)];
    const a3 = ra2 + (R() < 0.5 ? 1 : -1) * rr(0.9, 1.6), road2 = [bp.slice()];
    let cx = bp[0], cy = bp[1], ang = a3;
    for (let i = 0; i < 70; i++) { ang += rr(-0.12, 0.12); cx += Math.cos(ang) * 20; cy += Math.sin(ang) * 20; road2.push([cx, cy]); }
    T.roads.push(road2);

    // Brücken
    T.roads.forEach(rd => { for (let i = 0; i < rd.length - 1; i++) for (let j = 0; j < river.length - 1; j++) { const p = segInter(rd[i], rd[i + 1], river[j], river[j + 1]); if (p) T.bridges.push(p); } });

    const nearWater = (x, y, m) => distToPoly(x, y, river) < m;
    const nearRoad = (x, y, m) => T.roads.some(rd => distToPoly(x, y, rd) < m);
    const inMap = (x, y, m) => x > m && y > m && x < SIZE - m && y < SIZE - m;
    const nearOwn = (x, y, m) => Math.hypot(x - own.x, y - own.y) < m;

    // Dorf an einer Straße
    let vc = null;
    for (let k = 0; k < 60 && !vc; k++) {
      const rd = T.roads[k % 2], i = 2 + ((R() * (rd.length - 4)) | 0), p = rd[i];
      const d = Math.hypot(p[0] - own.x, p[1] - own.y);
      if (d > 280 && d < 620 && inMap(p[0], p[1], 120) && !nearWater(p[0], p[1], 90)) vc = { rd, i };
    }
    if (vc) {
      const { rd, i } = vc;
      for (let k = -5; k <= 5; k++) {
        const j = Math.max(0, Math.min(rd.length - 2, i + k)); const a = rd[j], b = rd[j + 1];
        const ang2 = Math.atan2(b[1] - a[1], b[0] - a[0]);
        for (const side of [-1, 1]) {
          if (R() < 0.25) continue;
          const dist = rr(14, 26) * side;
          const x = a[0] - Math.sin(ang2) * dist, y = a[1] + Math.cos(ang2) * dist;
          if (nearWater(x, y, 25)) continue;
          T.buildings.push({ x, y, w: rr(10, 17), h: rr(7, 11), a: ang2 + rr(-0.08, 0.08), ruin: R() < 0.25, tone: R() });
          if (R() < 0.35) { const d2 = dist + side * rr(16, 24); T.buildings.push({ x: a[0] - Math.sin(ang2) * d2, y: a[1] + Math.cos(ang2) * d2, w: rr(6, 10), h: rr(5, 8), a: ang2, ruin: R() < 0.3, tone: R() }); }
        }
      }
      const c = rd[i], ang3 = Math.atan2(rd[i + 1][1] - c[1], rd[i + 1][0] - c[0]);
      T.church = { x: c[0] - Math.sin(ang3) * 38, y: c[1] + Math.cos(ang3) * 38, a: ang3 };
      T.buildings.push({ x: T.church.x, y: T.church.y, w: 24, h: 11, a: ang3, church: true, tone: 0.5 });
      T.village = { x: c[0], y: c[1] };
    }
    // vereinzelte Gehöfte
    for (let k = 0; k < 5; k++) {
      const x = rr(80, SIZE - 80), y = rr(80, SIZE - 80);
      if (nearWater(x, y, 40) || nearRoad(x, y, 14) || nearOwn(x, y, 90)) continue;
      const a = rr(0, Math.PI);
      T.buildings.push({ x, y, w: rr(12, 18), h: rr(8, 11), a, ruin: R() < 0.4, tone: R() });
      T.buildings.push({ x: x + Math.cos(a + 1.57) * 20, y: y + Math.sin(a + 1.57) * 20, w: rr(7, 10), h: rr(6, 8), a, ruin: false, tone: R() });
    }
    const nearBld = (x, y, m) => T.buildings.some(b => Math.hypot(b.x - x, b.y - y) < m + b.w * 0.6);

    // Felder
    for (let k = 0; k < 9; k++) {
      const x = rr(60, SIZE - 60), y = rr(60, SIZE - 60);
      if (nearOwn(x, y, 140) || nearWater(x, y, 70)) continue;
      T.fields.push({ x, y, w: rr(90, 210), h: rr(60, 150), a: rr(0, Math.PI), kind: (R() * 3) | 0 });
    }
    // Wälder
    const forests = [];
    for (let k = 0; k < 7; k++) {
      const x = rr(0, SIZE), y = rr(0, SIZE), r = rr(70, 170);
      if (nearOwn(x, y, r + 50)) continue; forests.push({ x, y, r });
    }
    T.forests = forests;
    forests.forEach(f => {
      for (let gx = f.x - f.r; gx < f.x + f.r; gx += 8) for (let gy = f.y - f.r; gy < f.y + f.r; gy += 8) {
        const x = gx + rr(-3.5, 3.5), y = gy + rr(-3.5, 3.5);
        const d = Math.hypot(x - f.x, y - f.y) / f.r; const n = N.fbm(x / 60, y / 60, 3);
        if (d + (n - 0.5) * 0.9 > 0.95) continue;
        if (!inMap(x, y, -10) || nearWater(x, y, 16) || nearRoad(x, y, 7) || nearBld(x, y, 10)) continue;
        T.trees.push({ x, y, r: rr(3.5, 6.2), t: R() });
      }
    });
    // Baumreihen / Büsche entlang Straßen und Fluss
    for (let k = 0; k < 260; k++) {
      const src = R() < 0.5 ? river : T.roads[(R() * 2) | 0]; const p = src[(R() * src.length) | 0];
      const side = R() < 0.5 ? -1 : 1, x = p[0] + rr(9, 22) * side, y = p[1] + rr(9, 22) * side;
      if (!inMap(x, y, -5) || nearOwn(x, y, 60) || nearWater(x, y, 13) || nearRoad(x, y, 6)) continue;
      T.bushes.push({ x, y, r: rr(2.2, 4.5), t: R() });
    }
    T.distToRiver = (x, y) => distToPoly(x, y, river);
    T.distToRoad = (x, y) => Math.min(...T.roads.map(rd => distToPoly(x, y, rd)));
    T.height = (x, y) => N.fbm(x / 430 + 3.1, y / 430 + 7.7, 4);
    return T;
  }

  // Gelände in ein Offscreen-Canvas backen
  function bake(T, res) {
    const W = Math.round(SIZE * res);
    const cv = document.createElement('canvas'); cv.width = cv.height = W;
    const c = cv.getContext('2d');
    // 1) Boden + Hillshade + Höhenlinien (2 m pro Pixel)
    const L = 700, img = new ImageData(L, L), d = img.data, step = SIZE / L, N = T.N;
    const H = new Float32Array((L + 1) * (L + 1));
    for (let j = 0; j <= L; j++) for (let i = 0; i <= L; i++) H[j * (L + 1) + i] = T.height(i * step, j * step);
    for (let j = 0; j < L; j++) for (let i = 0; i < L; i++) {
      const h = H[j * (L + 1) + i], hx = H[j * (L + 1) + i + 1] - h, hy = H[(j + 1) * (L + 1) + i] - h;
      const shade = Math.max(-1, Math.min(1, (-hx + -hy) * 260));
      const x = i * step, y = j * step;
      const n = N.fbm(x / 90, y / 90, 3), n2 = N.n2(x / 14, y / 14);
      let r = 78 + n * 38 + h * 20, g = 92 + n * 30 + h * 14, b = 52 + n * 14;
      // trockene Stellen
      const dry = Math.max(0, N.fbm(x / 210 + 9, y / 210, 3) - 0.55) * 3;
      r += dry * 40; g += dry * 22; b += dry * 12;
      r += n2 * 10 - 5; g += n2 * 10 - 5;
      r += shade * 26; g += shade * 24; b += shade * 18;
      const cl = (h * 22) % 1; const lw = (h * 22) % 5 < 1 ? 0.07 : 0.045;
      if (cl < lw) { r -= 26; g -= 22; b -= 18; }
      const k = (j * L + i) * 4; d[k] = r; d[k + 1] = g; d[k + 2] = b; d[k + 3] = 255;
    }
    const lc = document.createElement('canvas'); lc.width = lc.height = L; lc.getContext('2d').putImageData(img, 0, 0);
    c.imageSmoothingEnabled = true; c.drawImage(lc, 0, 0, W, W);
    c.save(); c.scale(res, res);
    const R = mulberry32(T.seed + 99);
    // 2) Felder
    const fieldCols = [['#8a8350', '#7a7344'], ['#5f5a3a', '#4f4a30'], ['#6e7a3e', '#5f6a34']];
    T.fields.forEach(f => {
      c.save(); c.translate(f.x, f.y); c.rotate(f.a);
      const [a, b] = fieldCols[f.kind];
      c.globalAlpha = 0.72; c.fillStyle = a; c.fillRect(-f.w / 2, -f.h / 2, f.w, f.h);
      c.strokeStyle = b; c.lineWidth = 1.6; c.globalAlpha = 0.55;
      for (let y = -f.h / 2 + 3; y < f.h / 2; y += 5) { c.beginPath(); c.moveTo(-f.w / 2, y); c.lineTo(f.w / 2, y); c.stroke(); }
      c.globalAlpha = 0.5; c.strokeStyle = '#3c3a24'; c.lineWidth = 1.2; c.strokeRect(-f.w / 2, -f.h / 2, f.w, f.h);
      c.restore();
    });
    c.globalAlpha = 1;
    const path = pts => { c.beginPath(); c.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length - 1; i++) { const mx = (pts[i][0] + pts[i + 1][0]) / 2, my = (pts[i][1] + pts[i + 1][1]) / 2; c.quadraticCurveTo(pts[i][0], pts[i][1], mx, my); } c.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]); };
    c.lineCap = 'round'; c.lineJoin = 'round';
    // 3) Fluss
    T.rivers.forEach(rv => {
      path(rv); c.strokeStyle = 'rgba(58,52,34,.85)'; c.lineWidth = 34; c.stroke();
      path(rv); c.strokeStyle = '#5b5a3c'; c.lineWidth = 28; c.stroke();
      path(rv); c.strokeStyle = '#2f4a52'; c.lineWidth = 22; c.stroke();
      path(rv); c.strokeStyle = '#38606a'; c.lineWidth = 12; c.stroke();
      c.setLineDash([10, 22]); path(rv); c.strokeStyle = 'rgba(160,200,205,.25)'; c.lineWidth = 1.5; c.stroke(); c.setLineDash([]);
    });
    // 4) Straßen
    T.roads.forEach(rd => {
      path(rd); c.strokeStyle = 'rgba(40,34,22,.7)'; c.lineWidth = 9; c.stroke();
      path(rd); c.strokeStyle = '#9a8a64'; c.lineWidth = 6.5; c.stroke();
      c.setLineDash([3, 5]); path(rd); c.strokeStyle = 'rgba(70,58,38,.55)'; c.lineWidth = 1; c.stroke(); c.setLineDash([]);
    });
    // 5) Brücken
    T.bridges.forEach(([x, y, a]) => {
      c.save(); c.translate(x, y); c.rotate(a);
      c.fillStyle = 'rgba(0,0,0,.45)'; c.fillRect(-21, -5, 44, 12);
      c.fillStyle = '#6d6357'; c.fillRect(-22, -6, 44, 12);
      c.strokeStyle = '#4a4239'; c.lineWidth = 1; for (let i = -20; i < 22; i += 4) { c.beginPath(); c.moveTo(i, -6); c.lineTo(i, 6); c.stroke(); }
      c.fillStyle = '#3b352e'; c.fillRect(-22, -7, 44, 2); c.fillRect(-22, 5, 44, 2);
      c.restore();
    });
    // 6) Büsche + Bäume
    const tree = (t, dark) => {
      c.fillStyle = 'rgba(10,14,8,.45)'; c.beginPath(); c.arc(t.x + t.r * 0.45, t.y + t.r * 0.55, t.r, 0, 7); c.fill();
      const g = c.createRadialGradient(t.x - t.r * 0.35, t.y - t.r * 0.35, t.r * 0.1, t.x, t.y, t.r);
      const base = dark ? [38 + t.t * 14, 56 + t.t * 16, 30] : [58 + t.t * 16, 74 + t.t * 16, 38];
      g.addColorStop(0, `rgb(${base[0] + 30},${base[1] + 30},${base[2] + 14})`); g.addColorStop(1, `rgb(${base[0]},${base[1]},${base[2]})`);
      c.fillStyle = g; c.beginPath(); c.arc(t.x, t.y, t.r, 0, 7); c.fill();
    };
    T.bushes.forEach(t => tree(t, false));
    T.trees.forEach(t => tree(t, true));
    // 7) Gebäude
    T.buildings.forEach(b => {
      c.save(); c.translate(b.x, b.y); c.rotate(b.a);
      c.fillStyle = 'rgba(0,0,0,.5)'; c.fillRect(-b.w / 2 + 2.5, -b.h / 2 + 3, b.w, b.h);
      const r1 = b.church ? '#8b8178' : b.tone < 0.5 ? '#8a4c3a' : '#6f6a62', r2 = b.church ? '#6e655c' : b.tone < 0.5 ? '#6c3a2c' : '#55514b';
      c.fillStyle = r1; c.fillRect(-b.w / 2, -b.h / 2, b.w, b.h / 2);
      c.fillStyle = r2; c.fillRect(-b.w / 2, 0, b.w, b.h / 2);
      c.strokeStyle = 'rgba(20,16,12,.8)'; c.lineWidth = 0.8; c.strokeRect(-b.w / 2, -b.h / 2, b.w, b.h);
      c.beginPath(); c.moveTo(-b.w / 2, 0); c.lineTo(b.w / 2, 0); c.stroke();
      if (b.church) { c.fillStyle = '#5a534c'; c.fillRect(b.w / 2 - 2, -4.5, 8, 9); c.strokeRect(b.w / 2 - 2, -4.5, 8, 9); }
      if (b.ruin) {
        c.fillStyle = 'rgba(40,36,30,.95)'; c.beginPath(); c.moveTo(b.w / 2, -b.h / 2); c.lineTo(b.w * 0.05, -b.h / 2); c.lineTo(b.w * 0.2, b.h * 0.1); c.lineTo(b.w / 2, b.h * 0.25); c.fill();
        c.fillStyle = 'rgba(120,112,100,.9)'; for (let i = 0; i < 7; i++) c.fillRect(b.w * (0.1 + R() * 0.4), -b.h / 2 + R() * b.h * 0.7, 1.4, 1.4);
      }
      c.restore();
    });
    // 8) eigene Stellung: ausgehobene Grube + Sandsäcke (Draufsicht)
    const o = T.own;
    c.fillStyle = 'rgba(52,42,28,.9)'; c.beginPath(); c.arc(o.x, o.y, 9, 0, 7); c.fill();
    for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; c.save(); c.translate(o.x + Math.cos(a) * 11, o.y + Math.sin(a) * 11); c.rotate(a + Math.PI / 2); c.fillStyle = i % 2 ? '#a08d63' : '#8f7d55'; c.fillRect(-3, -1.6, 6, 3.2); c.restore(); }
    // 9) Körnung
    for (let i = 0; i < 9000; i++) { c.fillStyle = R() < 0.5 ? 'rgba(0,0,0,.08)' : 'rgba(255,255,230,.05)'; c.fillRect(R() * SIZE, R() * SIZE, 1.2, 1.2); }
    c.restore();
    grade(c, W, T.biome);
    return cv;
  }
  // biome colour grading of the baked map (procedural, composite ops only)
  function grade(c, W, biome) {
    const op = (mode, col) => { c.globalCompositeOperation = mode; c.fillStyle = col; c.fillRect(0, 0, W, W); };
    c.save();
    if (biome === 'desert') { op('color', 'rgba(200,160,96,.78)'); op('soft-light', 'rgba(255,214,150,.55)'); op('screen', 'rgba(70,48,20,.35)'); }
    else if (biome === 'forest') { op('multiply', 'rgba(150,175,120,1)'); op('color', 'rgba(56,84,44,.35)'); }
    else if (biome === 'winter') { op('saturation', 'rgba(128,128,128,.85)'); op('screen', 'rgba(170,182,196,.82)'); op('multiply', 'rgba(214,224,238,1)'); }
    c.restore();
  }

  MT.terrain = { SIZE, generate, bake, mulberry32, distToPoly };
})(window.MT = window.MT || {});

/* ---- map.js ---- */
/* Mörser-Trainer · Taktik-Tablet (Karte): Kamera, Gitter, Marker, Einschlag-Animation. */
(function (MT) {
  'use strict';
  const SIZE = 1400, GRID = 100, COLS = 'ABCDEFGHIJKLMN';
  const M = { cam: { s: 0.3, cx: 700, cy: 700 }, vnow: 0, timeScale: 1, killcam: null, parts: [], shake: 0, mode: 'plan', visible: false, incoming: null, fly: null, W: 1, H: 1, dpr: 1, lastSmoke: 0 };
  let cv, ctx, drag = null; const ptrs = new Map();
  const S = () => MT.state;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  M.init = function (canvas) {
    cv = canvas; ctx = cv.getContext('2d');
    cv.addEventListener('pointerdown', onDown); cv.addEventListener('pointermove', onMove);
    cv.addEventListener('pointerup', onUp); cv.addEventListener('pointercancel', onUp);
    cv.addEventListener('wheel', e => { e.preventDefault(); zoomAt(e.offsetX, e.offsetY, Math.exp(-e.deltaY * 0.0015)); }, { passive: false });
    window.addEventListener('resize', () => M.resize());
  };
  M.resize = function () {
    if (!cv) return; const r = cv.getBoundingClientRect(); if (!r.width) return;
    const keep = M.W > 2 ? M.cam.s / M.fitScale() : 1;
    M.dpr = Math.min(window.devicePixelRatio || 1, 2); M.W = r.width; M.H = r.height;
    cv.width = Math.round(r.width * M.dpr); cv.height = Math.round(r.height * M.dpr);
    M.cam.s = clamp(M.fitScale() * keep, M.minS(), 10);
  };
  M.fitScale = () => Math.min(M.W, M.H) / (SIZE + 70);
  M.minS = () => M.fitScale() * 0.92;
  M.fit = function (anim) { const t = { cx: SIZE / 2, cy: SIZE / 2, s: M.fitScale() }; anim ? M.flyTo(t.cx, t.cy, t.s, 600) : Object.assign(M.cam, t); };
  M.centerOwn = function () { const o = S().own; M.flyTo(o.x, o.y, Math.max(M.cam.s, M.fitScale() * 1.9), 500); };
  M.flyTo = function (cx, cy, s, dur) { M.fly = { from: { ...M.cam }, to: { cx, cy, s }, t0: performance.now(), dur }; };
  const toS = (x, y) => [(x - M.cam.cx) * M.cam.s + M.W / 2, (y - M.cam.cy) * M.cam.s + M.H / 2];
  const toW = (sx, sy) => [(sx - M.W / 2) / M.cam.s + M.cam.cx, (sy - M.H / 2) / M.cam.s + M.cam.cy];
  M.toS = toS; M.toW = toW;
  function clampCam() { const m = 120; M.cam.cx = clamp(M.cam.cx, -m, SIZE + m); M.cam.cy = clamp(M.cam.cy, -m, SIZE + m); }
  function zoomAt(sx, sy, f) {
    const [wx, wy] = toW(sx, sy); M.cam.s = clamp(M.cam.s * f, M.minS(), 10);
    M.cam.cx = wx - (sx - M.W / 2) / M.cam.s; M.cam.cy = wy - (sy - M.H / 2) / M.cam.s; clampCam(); M.fly = null;
  }
  M.zoom = f => { zoomAt(M.W / 2, M.H / 2, f); MT.audio.tick(); };

  function pos(e) { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  function markerHit(px, py) {
    const mk = S().marker; if (!mk) return false;
    const [sx, sy] = toS(mk.x, mk.y);
    return Math.hypot(px - sx, py - (sy - 36)) < 26 || Math.hypot(px - sx, py - sy) < 18;
  }
  function onDown(e) {
    if (!M.visible) return;
    const [x, y] = pos(e); try { cv.setPointerCapture(e.pointerId); } catch (_) {}
    ptrs.set(e.pointerId, { x, y });
    M.fly = null;
    if (ptrs.size === 1) {
      if (M.mode === 'plan' && markerHit(x, y)) {
        const mk = S().marker, [sx, sy] = toS(mk.x, mk.y);
        drag = { type: 'marker', ox: sx - x, oy: sy - y }; MT.audio.tick(); M.dragging = true;
      } else drag = { type: 'pan', x0: x, y0: y, cx: M.cam.cx, cy: M.cam.cy, t0: performance.now(), moved: 0 };
    } else if (ptrs.size === 2) {
      const [a, b] = [...ptrs.values()];
      const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      drag = { type: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y) || 1, s0: M.cam.s, w: toW(mx, my) };
    }
  }
  function onMove(e) {
    if (!ptrs.has(e.pointerId)) return;
    const [x, y] = pos(e); ptrs.set(e.pointerId, { x, y });
    if (!drag) return;
    if (drag.type === 'marker') {
      const [wx, wy] = toW(x + drag.ox, y + drag.oy);
      S().marker = { x: clamp(wx, 0, SIZE), y: clamp(wy, 0, SIZE) }; M.onMarker && M.onMarker(false);
    } else if (drag.type === 'pan') {
      drag.moved = Math.max(drag.moved, Math.hypot(x - drag.x0, y - drag.y0));
      M.cam.cx = drag.cx - (x - drag.x0) / M.cam.s; M.cam.cy = drag.cy - (y - drag.y0) / M.cam.s; clampCam();
    } else if (drag.type === 'pinch' && ptrs.size >= 2) {
      const [a, b] = [...ptrs.values()];
      const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
      M.cam.s = clamp(drag.s0 * d / drag.d0, M.minS(), 10);
      M.cam.cx = drag.w[0] - (mx - M.W / 2) / M.cam.s; M.cam.cy = drag.w[1] - (my - M.H / 2) / M.cam.s; clampCam();
    }
  }
  function onUp(e) {
    if (!ptrs.has(e.pointerId)) return;
    const [x, y] = pos(e); ptrs.delete(e.pointerId);
    if (drag && drag.type === 'pan' && e.type === 'pointerup' && drag.moved < 9 && performance.now() - drag.t0 < 600 && M.mode === 'plan') {
      const [wx, wy] = toW(x, y);
      if (wx >= 0 && wy >= 0 && wx <= SIZE && wy <= SIZE) { S().marker = { x: wx, y: wy }; MT.audio.place(); M.markerPop = performance.now(); M.onMarker && M.onMarker(true); }
    }
    if (drag && drag.type === 'marker') { MT.audio.place(); M.dragging = false; M.onMarker && M.onMarker(true); }
    drag = ptrs.size ? null : null;
  }

  // ---------- Effekte ----------
  function addP(p) { M.parts.push(p); }
  M.explode = function (x, y, big) {
    const now = M.vnow;
    addP({ k: 'flash', x, y, t0: now, life: 220, r: 34 });
    addP({ k: 'ring', x, y, t0: now, life: 650, r: big ? 60 : 46 });
    for (let i = 0; i < 22; i++) { const a = Math.random() * 6.283, v = 6 + Math.random() * 26; addP({ k: 'fire', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t0: now, life: 380 + Math.random() * 380, r: 4 + Math.random() * 7 }); }
    for (let i = 0; i < 26; i++) { const a = Math.random() * 6.283, v = 20 + Math.random() * 60; addP({ k: 'debris', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t0: now, life: 500 + Math.random() * 600, r: 0.8 + Math.random() * 1.4 }); }
    for (let i = 0; i < 16; i++) { const a = Math.random() * 6.283, v = 3 + Math.random() * 10; addP({ k: 'smoke', x: x + Math.cos(a) * 3, y: y + Math.sin(a) * 3, vx: Math.cos(a) * v + 2, vy: Math.sin(a) * v - 4, t0: now + Math.random() * 200, life: 2200 + Math.random() * 1800, r: 6 + Math.random() * 7, g: 1.5 + Math.random() }); }
    M.shake = 1;
  };
  // slow-motion kill cam: zoom onto the impact, time runs at 25 %, second fireball + letterbox
  M.killCam = function (x, y, ms) {
    ms = ms || 1900;
    M.flyTo(x, y, clamp(Math.min(M.W, M.H) / 70, M.minS(), 10), 520);
    M.killcam = { t0: performance.now(), dur: ms }; M.timeScale = 0.25;
    const now = M.vnow;
    for (let i = 0; i < 40; i++) { const a = Math.random() * 6.283, v = 4 + Math.random() * 20; addP({ k: 'fire', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t0: now, life: 500 + Math.random() * 700, r: 2 + Math.random() * 4 }); }
    for (let i = 0; i < 30; i++) { const a = Math.random() * 6.283, v = 10 + Math.random() * 40; addP({ k: 'debris', x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, t0: now, life: 700 + Math.random() * 700, r: 0.4 + Math.random() * 0.8 }); }
    addP({ k: 'ring', x, y, t0: now, life: 900, r: 22 });
    return new Promise(res => setTimeout(() => { M.timeScale = 1; M.killcam = null; res(); }, ms));
  };
  M.impact = function (x, y, flightMs) {
    M.mode = 'impact';
    if (M.W <= 2) M.resize(); // v1.1.1: first map open is the impact view (fired without opening the map) → size the canvas before zooming
    const tg = S().target, d = tg ? Math.hypot(tg.x - x, tg.y - y) : 999;
    let cx = x, cy = y, span = 300;
    if (d < 240) { cx = (x + tg.x) / 2; cy = (y + tg.y) / 2; span = Math.max(260, d * 1.8); }
    M.flyTo(cx, cy, clamp(Math.min(M.W, M.H) / span, M.minS(), 10), 750);
    const o = S().own; // v1.1.1: the shell always starts at the player's mortar and flies along the real bearing
    M.incoming = { x, y, ox: o.x, oy: o.y, t0: performance.now(), dur: flightMs };
    return new Promise(res => setTimeout(() => { M.incoming = null; res(); }, flightMs));
  };

  // ---------- Zeichnen ----------
  const TLEN = { apc: 7, truck: 8, squad: 6, bunker: 6, mg: 4, mortar: 3, convoy: 26, artillery: 9, sniper: 2 }; // footprint in metres
  function drawTarget(t, now) {
    const [sx, sy] = toS(t.x, t.y); const len = TLEN[t.type] || 6, sz = Math.max(5, len * M.cam.s * 20 / 22); // real size (m) – small like in reality
    ctx.save(); ctx.translate(sx, sy);
    if (!t.dead) { // pulsierender Spot-Ring
      const p = (now % 1400) / 1400; ctx.strokeStyle = `rgba(239,68,68,${0.6 * (1 - p)})`; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(0, 0, Math.max(10, sz) * (0.8 + p * 1.2), 0, Math.PI * 2); ctx.stroke();
    }
    ctx.rotate(t.heading || 0);
    if (t.type === 'convoy' || t.type === 'artillery' || t.type === 'sniper') { drawSpecial(t, Math.max(M.cam.s, 6 / len)); ctx.restore(); spot(t, sx, sy, sz, now); return; }
    const k = sz / 20; ctx.scale(k, k);
    ctx.fillStyle = 'rgba(0,0,0,.45)'; ctx.beginPath(); ctx.ellipse(2, 3, 11, 8, 0, 0, Math.PI * 2); ctx.fill();
    const body = t.dead ? '#2a2622' : '#5d5536', dark = t.dead ? '#151210' : '#3b3522';
    ctx.lineWidth = 1.4; ctx.strokeStyle = t.dead ? '#000' : '#b91c1c';
    if (t.type === 'apc' || t.type === 'truck') {
      if (t.type === 'apc') { ctx.fillStyle = body; rr(-10, -6, 20, 12, 3); ctx.fill(); ctx.stroke(); ctx.fillStyle = dark; ctx.fillRect(-10, -7, 20, 2.4); ctx.fillRect(-10, 4.6, 20, 2.4); ctx.fillStyle = body; ctx.beginPath(); ctx.arc(1, 0, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.fillStyle = dark; ctx.fillRect(4, -0.9, 9, 1.8); }
      else { ctx.fillStyle = body; rr(-11, -5, 15, 10, 1.5); ctx.fill(); ctx.stroke(); ctx.fillStyle = dark; rr(5, -4.5, 6, 9, 1.5); ctx.fill(); ctx.stroke(); ctx.strokeStyle = 'rgba(0,0,0,.35)'; for (let i = -9; i < 4; i += 3) { ctx.beginPath(); ctx.moveTo(i, -5); ctx.lineTo(i, 5); ctx.stroke(); } }
    } else if (t.type === 'squad') {
      [[-6, -4], [-1, 3], [4, -3], [8, 4], [-8, 5]].forEach(([x, y]) => { ctx.fillStyle = t.dead ? '#1d1a17' : '#4b4a32'; ctx.beginPath(); ctx.arc(x, y, 2.6, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); });
    } else if (t.type === 'bunker' || t.type === 'mg') {
      ctx.fillStyle = '#8f7d55'; ctx.beginPath(); ctx.arc(0, 0, 10, Math.PI * 0.85, Math.PI * 2.15); ctx.lineWidth = 4; ctx.strokeStyle = '#8f7d55'; ctx.stroke();
      ctx.lineWidth = 1.4; ctx.strokeStyle = t.dead ? '#000' : '#b91c1c';
      ctx.fillStyle = t.type === 'bunker' ? (t.dead ? '#3a3632' : '#7b766c') : body; rr(-6, -5, 12, 10, 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#111'; ctx.fillRect(-4, -5.5, 8, 1.6); if (t.type === 'mg') { ctx.fillStyle = dark; ctx.fillRect(0, -1, 0.1, 0); ctx.fillRect(-0.8, -12, 1.6, 8); }
    } else { // gegnerischer Mörser
      ctx.fillStyle = '#7e6c48'; ctx.beginPath(); ctx.arc(0, 0, 9, 0, Math.PI * 2); ctx.fill(); ctx.fillStyle = dark; ctx.beginPath(); ctx.arc(0, 0, 5, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#222'; ctx.fillRect(-1, -9, 2, 9);
    }
    ctx.restore();
    spot(t, sx, sy, sz, now);
  }
  function spot(t, sx, sy, sz, now) {
    if (!t.dead) { // roter Spot-Marker
      const bob = Math.sin(now / 300) * 2;
      ctx.save(); ctx.translate(sx, sy - sz - 8 + bob);
      ctx.fillStyle = '#ef4444'; ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, 7); ctx.lineTo(-7, -4); ctx.lineTo(7, -4); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.restore();
    }
  }
  // metre-scaled drawings for unlockable target types
  function drawSpecial(t, k) {
    ctx.scale(k, k); const dead = t.dead, body = dead ? '#2a2622' : '#5d5536', dark = dead ? '#151210' : '#363020';
    ctx.lineWidth = 0.25; ctx.strokeStyle = dead ? '#000' : '#b91c1c';
    if (t.type === 'convoy') {
      for (const ox of [-10, 0, 10]) { ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(ox - 3.4, -1.1, 7.4, 2.8); ctx.fillStyle = body; rr(ox - 3.6, -1.25, 5.2, 2.5, 0.3); ctx.fill(); ctx.stroke(); ctx.fillStyle = dark; rr(ox + 1.8, -1.15, 1.8, 2.3, 0.3); ctx.fill(); ctx.stroke(); }
    } else if (t.type === 'artillery') {
      ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.beginPath(); ctx.ellipse(0.4, 0.5, 4.5, 2.6, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = dead ? '#000' : '#b91c1c'; ctx.fillStyle = body; rr(-3, -1.6, 4, 3.2, 0.4); ctx.fill(); ctx.stroke();
      ctx.lineWidth = 0.45; ctx.strokeStyle = dark; ctx.beginPath(); ctx.moveTo(-3, -1.2); ctx.lineTo(-6, -2.6); ctx.moveTo(-3, 1.2); ctx.lineTo(-6, 2.6); ctx.stroke();
      ctx.fillStyle = dark; ctx.fillRect(0.5, -0.3, 6, 0.6); ctx.fillStyle = '#222'; ctx.beginPath(); ctx.arc(-0.6, -1.9, 0.7, 0, Math.PI * 2); ctx.arc(-0.6, 1.9, 0.7, 0, Math.PI * 2); ctx.fill();
    } else { // sniper nest: tiny camo blob + rifle
      ctx.fillStyle = dead ? '#1d1a17' : '#4f5233'; ctx.beginPath(); ctx.ellipse(0, 0, 1.1, 0.6, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      ctx.fillStyle = dead ? '#1d1a17' : '#3e4128'; for (let i = 0; i < 5; i++) { const a = i * 1.26; ctx.beginPath(); ctx.arc(Math.cos(a) * 0.9, Math.sin(a) * 0.6, 0.45, 0, Math.PI * 2); ctx.fill(); }
      ctx.fillStyle = '#111'; ctx.fillRect(0.6, -0.08, 1.6, 0.16);
    }
  }
  function rr(x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }

  function drawMarker(mk, now) {
    const st = S(), o = st.own; const [sx, sy] = toS(mk.x, mk.y); const [ox, oy] = toS(o.x, o.y);
    ctx.save(); ctx.setLineDash([7, 6]); ctx.lineDashOffset = -now / 40; ctx.strokeStyle = 'rgba(245,158,11,.85)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(sx, sy); ctx.stroke(); ctx.setLineDash([]);
    let pop = M.markerPop ? clamp((now - M.markerPop) / 260, 0, 1) : 1; const sc = 0.6 + 0.4 * (1 - Math.pow(1 - pop, 3)) + (pop < 1 ? Math.sin(pop * Math.PI) * 0.25 : 0);
    ctx.translate(sx, sy); ctx.scale(sc, sc);
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, 7, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-12, 0); ctx.lineTo(-4, 0); ctx.moveTo(12, 0); ctx.lineTo(4, 0); ctx.moveTo(0, 12); ctx.lineTo(0, 4); ctx.stroke();
    ctx.fillStyle = '#fbbf24'; ctx.beginPath(); ctx.arc(0, 0, 1.6, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,.6)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(0, -24); ctx.stroke();
    ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 1.6; ctx.stroke();
    // Kopf (Raute)
    ctx.translate(0, -36); const lift = M.dragging ? 1.15 : 1; ctx.scale(lift, lift);
    ctx.fillStyle = 'rgba(0,0,0,.5)'; ctx.beginPath(); ctx.moveTo(0, -13); ctx.lineTo(13, 1); ctx.lineTo(0, 15); ctx.lineTo(-13, 1); ctx.fill();
    ctx.fillStyle = '#f59e0b'; ctx.strokeStyle = '#1b1306'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(0, -13); ctx.lineTo(12, 0); ctx.lineTo(0, 13); ctx.lineTo(-12, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#1b1306'; ctx.font = '800 12px Inter,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('M', 0, 1);
    ctx.restore();
    // no distance / bearing label: the player has to estimate with grid and scale bar
  }

  function drawOwn(now) {
    const o = S().own; const [sx, sy] = toS(o.x, o.y);
    const p = (now % 2000) / 2000;
    ctx.save(); ctx.translate(sx, sy);
    ctx.strokeStyle = `rgba(79,140,255,${0.7 * (1 - p)})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, 10 + p * 16, 0, Math.PI * 2); ctx.stroke();
    ctx.fillStyle = '#2f6bef'; ctx.strokeStyle = '#dbeafe'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, 10, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    // Mörser-Symbol: Rohr + Fuß
    ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.2; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(0, 5); ctx.lineTo(0, -5); ctx.moveTo(-3, -2.5); ctx.lineTo(0, -6); ctx.lineTo(3, -2.5); ctx.moveTo(-4.5, 5); ctx.lineTo(4.5, 5); ctx.stroke();
    ctx.restore();
    ctx.save(); ctx.font = '800 11px Inter,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.fillStyle = '#dbeafe'; ctx.strokeStyle = 'rgba(0,0,0,.7)'; ctx.lineWidth = 3;
    ctx.strokeText(MT.t('mapYou'), sx, sy + 24); ctx.fillText(MT.t('mapYou'), sx, sy + 24); ctx.restore();
  }

  function drawGrid() {
    const s = M.cam.s; const [x0, y0] = toS(0, 0), [x1, y1] = toS(SIZE, SIZE);
    ctx.save(); ctx.lineWidth = 1;
    for (let i = 0; i <= SIZE / GRID; i++) {
      const x = Math.round(x0 + i * GRID * s) + 0.5, y = Math.round(y0 + i * GRID * s) + 0.5;
      ctx.strokeStyle = i % 5 === 0 ? 'rgba(10,14,8,.55)' : 'rgba(10,14,8,.32)';
      ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    }
    // Unterteilung 50 m bei starkem Zoom
    if (s > 1.2) { ctx.strokeStyle = 'rgba(10,14,8,.13)'; ctx.setLineDash([3, 4]); for (let i = 0; i < SIZE / GRID; i++) { const x = x0 + (i + 0.5) * GRID * s, y = y0 + (i + 0.5) * GRID * s; ctx.beginPath(); ctx.moveTo(x, y0); ctx.lineTo(x, y1); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke(); } ctx.setLineDash([]); }
    ctx.strokeStyle = 'rgba(0,0,0,.8)'; ctx.lineWidth = 2; ctx.strokeRect(x0, y0, x1 - x0, y1 - y0);
    ctx.restore();
  }
  function drawEdges() {
    const s = M.cam.s; const [x0, y0] = toS(0, 0);
    ctx.save();
    ctx.fillStyle = 'rgba(8,10,7,.78)'; ctx.fillRect(0, 0, M.W, 18); ctx.fillRect(0, 0, 20, M.H);
    ctx.font = '700 10.5px Inter,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillStyle = '#d6d3c4';
    for (let i = 0; i < SIZE / GRID; i++) {
      const x = x0 + (i + 0.5) * GRID * s; if (x > 24 && x < M.W - 4) ctx.fillText(COLS[i], x, 9.5);
      const y = y0 + (i + 0.5) * GRID * s; if (y > 22 && y < M.H - 4) ctx.fillText(String(i + 1), 10, y);
    }
    ctx.fillStyle = '#f59e0b'; ctx.fillText('▦', 10, 9.5);
    ctx.restore();
  }
  function drawScale() {
    const s = M.cam.s; let seg = 50; while (seg * s < 34) seg *= 2; const n = 3, w = seg * s;
    const x = 30, y = M.H - 22;
    ctx.save(); ctx.fillStyle = 'rgba(8,10,7,.78)'; rr(x - 8, y - 18, w * n + 44, 32, 7); ctx.fill();
    for (let i = 0; i < n; i++) { ctx.fillStyle = i % 2 ? '#e7e5d8' : '#141410'; ctx.fillRect(x + i * w, y, w, 5); }
    ctx.strokeStyle = '#e7e5d8'; ctx.lineWidth = 1; ctx.strokeRect(x + 0.5, y + 0.5, w * n, 5);
    ctx.font = '700 10px Inter,system-ui,sans-serif'; ctx.fillStyle = '#e7e5d8'; ctx.textAlign = 'center';
    for (let i = 0; i <= n; i++) ctx.fillText(i === n ? `${seg * i} m` : String(seg * i), x + i * w + (i === n ? 8 : 0), y - 5);
    ctx.restore();
    // Nordpfeil
    ctx.save(); ctx.translate(M.W - 22, 40); ctx.fillStyle = 'rgba(8,10,7,.78)'; ctx.beginPath(); ctx.arc(0, 0, 15, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.moveTo(0, -11); ctx.lineTo(5, 3); ctx.lineTo(0, 0); ctx.lineTo(-5, 3); ctx.fill();
    ctx.fillStyle = '#e7e5d8'; ctx.font = '800 8px Inter,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.fillText('N', 0, 11); ctx.restore();
  }
  function drawParts(now, dt) {
    const s = M.cam.s;
    M.parts = M.parts.filter(p => now - p.t0 < p.life);
    for (const p of M.parts) {
      const t = (now - p.t0) / p.life; if (t < 0) continue;
      if (p.vx !== undefined) { const f = p.k === 'debris' ? 0.94 : 0.965; p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= Math.pow(f, dt * 60); p.vy *= Math.pow(f, dt * 60); }
      const [sx, sy] = toS(p.x, p.y);
      if (p.k === 'flash') { const r = p.r * s * (0.6 + t); const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, Math.max(4, r)); g.addColorStop(0, `rgba(255,250,220,${1 - t})`); g.addColorStop(0.4, `rgba(255,190,80,${0.8 * (1 - t)})`); g.addColorStop(1, 'rgba(255,120,30,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(sx, sy, Math.max(4, r), 0, Math.PI * 2); ctx.fill(); }
      else if (p.k === 'ring') { ctx.strokeStyle = `rgba(255,236,200,${0.7 * (1 - t)})`; ctx.lineWidth = 3 * (1 - t) + 1; ctx.beginPath(); ctx.arc(sx, sy, p.r * s * ease(t), 0, Math.PI * 2); ctx.stroke(); }
      else if (p.k === 'fire') { const r = Math.max(2, p.r * s * (1 + t)); ctx.fillStyle = `rgba(${255},${Math.round(200 - t * 170)},${Math.round(60 - t * 60)},${0.9 * (1 - t)})`; ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill(); }
      else if (p.k === 'debris') { ctx.fillStyle = `rgba(30,24,18,${1 - t})`; const r = Math.max(1.2, p.r * s); ctx.fillRect(sx - r / 2, sy - r / 2, r, r); }
      else if (p.k === 'smoke') { p.r += (p.g || 1) * dt * 4; const r = Math.max(3, p.r * s); const a = 0.42 * Math.sin(Math.PI * Math.min(1, t * 1.2)) * (1 - t * 0.5); const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, r); g.addColorStop(0, `rgba(70,66,60,${a})`); g.addColorStop(1, 'rgba(70,66,60,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill(); }
      else if (p.k === 'ember') { ctx.fillStyle = `rgba(255,${Math.round(160 - t * 120)},40,${1 - t})`; ctx.beginPath(); ctx.arc(sx, sy, Math.max(1.5, 1.6 * s), 0, Math.PI * 2); ctx.fill(); }
    }
  }
  function drawCraters(now) {
    const st = S(), s = M.cam.s;
    for (const c of st.craters) {
      const [sx, sy] = toS(c.x, c.y); const r = Math.max(3.5, c.r * s);
      const age = clamp((now - c.t0) / 300, 0, 1);
      ctx.save(); ctx.globalAlpha = age;
      const g = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 1.6); g.addColorStop(0, 'rgba(18,14,10,.95)'); g.addColorStop(0.55, 'rgba(40,32,22,.85)'); g.addColorStop(0.75, 'rgba(110,92,64,.6)'); g.addColorStop(1, 'rgba(60,50,35,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(sx, sy, r * 1.6, 0, Math.PI * 2); ctx.fill();
      if (c.round === st.round && c.n) {
        ctx.font = '800 10px Inter,system-ui,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(8,10,7,.85)'; ctx.beginPath(); ctx.arc(sx + r + 7, sy - r - 5, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#fca5a5'; ctx.fillText(String(c.n), sx + r + 7, sy - r - 4.5);
      }
      ctx.restore();
    }
  }
  // v1.1.1: shell in flight. Ground track = straight line from the player's mortar (ox, oy) to the impact point,
  // so the shell comes from the side where the mortar stands (no hardcoded screen offsets). Height = parabola,
  // drawn as an upward screen offset, shadow on the ground track.
  M.shellAt = function (inc, p) { // world ground point + height (m) at flight progress p (0…1)
    const d = Math.hypot(inc.x - inc.ox, inc.y - inc.oy), hmax = Math.max(40, d * 0.35);
    return { gx: inc.ox + (inc.x - inc.ox) * p, gy: inc.oy + (inc.y - inc.oy) * p, h: 4 * hmax * p * (1 - p) };
  };
  function drawIncoming(now) {
    const inc = M.incoming; if (!inc) return;
    const t = clamp((now - inc.t0) / inc.dur, 0, 1), s = M.cam.s; const [sx, sy] = toS(inc.x, inc.y);
    const pos = p => { const q = M.shellAt(inc, p), [gx, gy] = toS(q.gx, q.gy); return [gx, gy, gx, gy - q.h * s]; };
    ctx.save();
    if (t >= 0.25) { // closing warning ring at the impact point
      const k = (t - 0.25) / 0.75, r = (1 - k) * 60 + 6;
      ctx.strokeStyle = `rgba(239,68,68,${0.3 + k * 0.6})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.stroke();
    }
    const [gx, gy, hx, hy] = pos(t);
    // shadow on the ground track (grows/darkens as the shell comes down)
    ctx.fillStyle = `rgba(0,0,0,${0.12 + t * 0.38})`; ctx.beginPath(); ctx.ellipse(gx, gy, 2 + t * 5, 1.5 + t * 3.5, 0, 0, Math.PI * 2); ctx.fill();
    // smoke trail behind the shell (towards the mortar)
    ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 2.5; ctx.beginPath();
    for (let i = 0; i <= 8; i++) { const [, , x, y] = pos(Math.max(0, t - 0.12 * i / 8)); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.stroke();
    // shell body, rotated along its screen velocity
    const [, , px, py] = pos(Math.max(0, t - 0.01)), ang = Math.atan2(hy - py, hx - px);
    ctx.translate(hx, hy); ctx.rotate(ang + Math.PI / 2);
    ctx.fillStyle = '#1c1f16'; ctx.strokeStyle = 'rgba(255,240,200,.6)'; ctx.lineWidth = 0.8;
    ctx.beginPath(); ctx.ellipse(0, 0, 3.4, 8, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.restore();
  }

  M.frame = function (now, dt) {
    if (!M.visible || !cv) return;
    const st = S(); if (!st || !st.base) return;
    M.vnow += dt * 1000 * M.timeScale; const vdt = dt * M.timeScale;
    if (M.fly) { const f = M.fly, t = clamp((now - f.t0) / f.dur, 0, 1), e = ease(t); M.cam.s = f.from.s + (f.to.s - f.from.s) * e; M.cam.cx = f.from.cx + (f.to.cx - f.from.cx) * e; M.cam.cy = f.from.cy + (f.to.cy - f.from.cy) * e; if (t >= 1) M.fly = null; }
    ctx.setTransform(M.dpr, 0, 0, M.dpr, 0, 0);
    let shx = 0, shy = 0; if (M.shake > 0) { shx = (Math.random() - 0.5) * 14 * M.shake; shy = (Math.random() - 0.5) * 14 * M.shake; M.shake = Math.max(0, M.shake - dt * 2.2); }
    ctx.fillStyle = '#10140d'; ctx.fillRect(0, 0, M.W, M.H);
    ctx.save(); ctx.translate(shx, shy);
    const [x0, y0] = toS(0, 0); ctx.imageSmoothingEnabled = true; ctx.drawImage(st.base, x0, y0, SIZE * M.cam.s, SIZE * M.cam.s);
    drawCraters(now); drawGrid();
    if (st.target) {
      if (st.target.dead && M.vnow - M.lastSmoke > 120) { M.lastSmoke = M.vnow; M.parts.push({ k: 'smoke', x: st.target.x + (Math.random() - 0.5) * 4, y: st.target.y, vx: 1.5, vy: -3, t0: M.vnow, life: 2600, r: 3, g: 2.2 }); if (Math.random() < 0.6) M.parts.push({ k: 'ember', x: st.target.x + (Math.random() - 0.5) * 5, y: st.target.y + (Math.random() - 0.5) * 5, vx: (Math.random() - 0.5) * 3, vy: -6, t0: M.vnow, life: 700 }); }
      drawTarget(st.target, now);
    }
    if (st.lastImpact && st.lastImpact.round === st.round && M.mode === 'plan') { const [ax, ay] = toS(st.lastImpact.x, st.lastImpact.y), [ox, oy] = toS(st.own.x, st.own.y); ctx.save(); ctx.strokeStyle = 'rgba(252,165,165,.35)'; ctx.setLineDash([2, 5]); ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ax, ay); ctx.stroke(); ctx.restore(); }
    drawOwn(now);
    if (st.marker) drawMarker(st.marker, now);
    drawIncoming(now);
    drawParts(M.vnow, vdt);
    ctx.restore();
    drawEdges(); drawScale();
    if (M.killcam) { // letterbox + label
      const k = clamp((now - M.killcam.t0) / 220, 0, 1) * clamp((M.killcam.t0 + M.killcam.dur - now) / 220, 0, 1), bh = Math.round(M.H * 0.11 * k);
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, M.W, bh); ctx.fillRect(0, M.H - bh, M.W, bh);
      ctx.globalAlpha = k; ctx.fillStyle = '#fff'; ctx.font = '700 12px ' + 'ui-monospace,Menlo,monospace'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText('● KILL CAM  ×0.25', 14, bh / 2); ctx.textAlign = 'right'; ctx.fillText(MT.t('t_' + st.target.type).toUpperCase(), M.W - 14, M.H - bh / 2); ctx.globalAlpha = 1;
    }
  };
  M.SIZE = SIZE; M.COLS = COLS;
  MT.map = M;
})(window.MT = window.MT || {});

/* ---- scene.js ---- */
/* Mortar Trainer · sight view (Canvas, fully procedural, no game assets).
 * Layout modelled on the in-game mortar optic: big round scope on black, ground seen close up,
 * thin HUD inside the scope: compass strip, corner brackets, deflection ruler, RNG ladder (metres, left),
 * MIL ladder (elevation that belongs to the SET range, right), bracket reticle.
 * The ladders show the range the player has set – never the distance to the target. */
(function (MT) {
  'use strict';
  const V = { W: 1, H: 1, dpr: 1, parts: [], recoilT: -1, dropT: 0, ladderZone: 120, ppdG: 8, pxPerMil: 0.8, r: 0 };
  let cv, ctx, mini, mctx, ground = null, pattern = null, groundSeed = null, miniT = 0;
  const S = () => MT.state;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const angDiff = (a, b) => ((a - b + 540) % 360) - 180; // degrees
  const R = Math.random;
  const MONO = 'ui-monospace,"SF Mono","JetBrains Mono",Menlo,Consolas,monospace';
  const INK = 'rgba(24,21,16,.9)', INK2 = 'rgba(24,21,16,.55)';
  const DIRS = { 0: 'N', 45: 'NE', 90: 'E', 135: 'SE', 180: 'S', 225: 'SW', 270: 'W', 315: 'NW' };

  V.init = function (canvas, miniCanvas) {
    cv = canvas; ctx = cv.getContext('2d');
    mini = miniCanvas; mctx = mini ? mini.getContext('2d') : null;
  };

  // ---------- Layout ----------
  V.resize = function () {
    const b = cv.getBoundingClientRect(); if (!b.width) return;
    V.dpr = Math.min(window.devicePixelRatio || 1, 2); V.W = b.width; V.H = b.height;
    cv.width = Math.round(V.W * V.dpr); cv.height = Math.round(V.H * V.dpr);
    const W = V.W, H = V.H, wide = W >= 760 && W > H * 1.1; V.wide = wide;
    if (wide) { V.r = Math.min(H * 0.53, W * 0.37); V.cy = H / 2 - 6; }
    else {
      const top = 54, bot = 196, avail = Math.max(240, H - top - bot);
      V.r = Math.max(130, Math.min(W * 0.58, avail / 2)); V.cy = top + avail / 2;
    }
    V.cx = W / 2;
    const r = V.r;
    V.hw = r * 0.54; V.hh = r * (wide ? 0.4 : 0.6);
    V.compY = V.cy - r * (wide ? 0.83 : 0.8);
    V.ppdG = (2 * V.hw) / 30;            // ground + deflection ruler: 30° across the bracket box
    V.pxPerMil = V.hh / 170;             // ladders: ±170 mil inside the box
    V.ladderZone = V.cx - V.hw * 0.4;    // pointer left of this = range ladder
    if (mini) { const m = mini.getBoundingClientRect(); mini.width = Math.round(m.width * V.dpr); mini.height = Math.round(m.height * V.dpr); V.MW = m.width; }
    buildGround();
  };
  V.buildStrips = function () { groundSeed = null; buildGround(); }; // called on a new world

  // ---------- Ground texture (periodic so it wraps seamlessly over 360°) ----------
  function buildGround() {
    const st = S(); if (!V.r || !st || !st.T) return;
    const full = 360 * V.ppdG, n = Math.max(1, Math.round(full / 560)), TW = full / n;
    const key = st.T.seed + ':' + st.T.biome + ':' + Math.round(TW); const PAL = { grass: [128, 98, 58, 100, 92, 72], desert: [168, 124, 72, 82, 84, 74], forest: [74, 62, 40, 70, 64, 44], winter: [176, 182, 192, 70, 70, 60] }[st.T.biome] || [128, 98, 58, 100, 92, 72];
    if (key === groundSeed && pattern) return; groundSeed = key;
    const q = Math.min(V.dpr, 1.25), N = Math.round(TW * q);
    const c = document.createElement('canvas'); c.width = N; c.height = N; const g = c.getContext('2d');
    const rnd = MT.terrain.mulberry32(st.T.seed + 31);
    const octs = [3, 6, 12, 24, 48, 96].map((k, i) => { const a = new Float32Array(k * k); for (let j = 0; j < a.length; j++) a[j] = rnd(); return { k, a, amp: Math.pow(0.55, i) }; });
    const patch = (() => { const k = 4, a = new Float32Array(k * k); for (let j = 0; j < a.length; j++) a[j] = rnd(); return { k, a }; })();
    const sm = t => t * t * (3 - 2 * t);
    const sample = (o, u, v) => { const k = o.k, x = u * k, y = v * k, x0 = Math.floor(x), y0 = Math.floor(y), fx = sm(x - x0), fy = sm(y - y0), X0 = x0 % k, Y0 = y0 % k, X1 = (X0 + 1) % k, Y1 = (Y0 + 1) % k, a = o.a; const top = a[Y0 * k + X0] * (1 - fx) + a[Y0 * k + X1] * fx, bot = a[Y1 * k + X0] * (1 - fx) + a[Y1 * k + X1] * fx; return top * (1 - fy) + bot * fy; };
    const img = g.createImageData(N, N), d = img.data;
    let ampSum = 0; for (const o of octs) ampSum += o.amp;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const u = x / N, v = y / N; let n0 = 0; for (const o of octs) n0 += sample(o, u, v) * o.amp; n0 /= ampSum;
      const p = sample(patch, u, v);
      let t = clamp((n0 - 0.5) * 2.2 + 0.55, 0, 1);
      const grain = (rnd() - 0.5) * 22;
      // sandy loam: dark ochre → pale sand, with slightly greyer patches
      let R0 = PAL[0] + t * PAL[3], G0 = PAL[1] + t * PAL[4], B0 = PAL[2] + t * PAL[5];
      const grey = clamp((p - 0.55) * 1.6, 0, 0.5); R0 = R0 * (1 - grey * 0.25) + 120 * grey * 0.25; G0 = G0 * (1 - grey * 0.15) + 112 * grey * 0.15;
      const i = (y * N + x) * 4; d[i] = clamp(R0 + grain, 0, 255); d[i + 1] = clamp(G0 + grain * 0.9, 0, 255); d[i + 2] = clamp(B0 + grain * 0.7, 0, 255); d[i + 3] = 255;
    }
    g.putImageData(img, 0, 0);
    // pebbles, darker clods, cracks – drawn with wrap-around
    const wrap = (fn) => { for (const ox of [-N, 0, N]) for (const oy of [-N, 0, N]) { g.save(); g.translate(ox, oy); fn(); g.restore(); } };
    for (let i = 0; i < N * 0.5; i++) {
      const x = rnd() * N, y = rnd() * N, rr = (0.6 + rnd() * rnd() * 3.2) * q, dark = rnd() < 0.6, a = 0.25 + rnd() * 0.4;
      if (x < 8 || y < 8 || x > N - 8 || y > N - 8) wrap(() => pebble(g, x, y, rr, dark, a)); else pebble(g, x, y, rr, dark, a);
    }
    g.lineCap = 'round';
    for (let i = 0; i < 26; i++) {
      let x = rnd() * N, y = rnd() * N, ang = rnd() * 6.28; const pts = [[x, y]];
      for (let k = 0; k < 6 + rnd() * 10; k++) { ang += (rnd() - 0.5) * 1.2; x += Math.cos(ang) * 9 * q; y += Math.sin(ang) * 9 * q; pts.push([x, y]); }
      const w = (0.6 + rnd() * 0.8) * q;
      wrap(() => { g.strokeStyle = 'rgba(80,58,34,.28)'; g.lineWidth = w; g.beginPath(); pts.forEach(([a, b], j) => j ? g.lineTo(a, b) : g.moveTo(a, b)); g.stroke(); });
    }
    ground = c; pattern = ctx.createPattern(c, 'repeat');
    try { pattern.setTransform(new DOMMatrix().scale(1 / q)); } catch (e) {}
    V.TW = TW;
  }
  function pebble(g, x, y, r, dark, a) {
    g.fillStyle = dark ? `rgba(70,52,32,${a})` : `rgba(246,228,190,${a})`;
    g.beginPath(); g.ellipse(x, y, r, r * 0.75, x % 3, 0, Math.PI * 2); g.fill();
    if (r > 2) { g.fillStyle = 'rgba(40,28,16,.18)'; g.beginPath(); g.ellipse(x + r * 0.3, y + r * 0.35, r, r * 0.6, 0, 0, Math.PI * 2); g.fill(); }
  }

  // ---------- Particles ----------
  function emit(p) { V.parts.push(p); }
  function stepParts(now, dt) {
    V.parts = V.parts.filter(p => now - p.t0 < p.life);
    for (const p of V.parts) {
      const t = (now - p.t0) / p.life; if (t < 0) continue;
      p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= Math.pow(p.drag || 0.96, dt * 60); p.vy = p.vy * Math.pow(p.drag || 0.96, dt * 60) + (p.grav || 0) * dt;
      if (p.k === 'smoke') { const r = p.r * (1 + t * p.grow); const a = p.a * (1 - t) * Math.min(1, t * 8 + 0.2); const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r); g.addColorStop(0, `rgba(${p.c},${a})`); g.addColorStop(1, `rgba(${p.c},0)`); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, r, 0, Math.PI * 2); ctx.fill(); }
      else if (p.k === 'dirt') { ctx.fillStyle = `rgba(60,44,26,${1 - t})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
    }
  }
  // v1.1.1: rel = bearing of the impact point relative to the current view (deg, + = right). The shell leaves from
  // the player's side (bottom of the lens) and flies away towards that bearing.
  V.fire = function (rel) { V.recoilT = performance.now(); V.burst = true; V.shot = { t0: V.recoilT + 60, rel: rel || 0, dur: 1100 }; };
  function drawShot(now, cx, cy, r) {
    const sh = V.shot; if (!sh) return; const t = (now - sh.t0) / sh.dur; if (t < 0) return; if (t > 1) { V.shot = null; return; }
    const st = S(), rel = sh.rel - angDiff(st.dirVis, st.dir); // follows the view if it is still turning
    const ex = cx + Math.max(-1.2, Math.min(1.2, rel * V.ppdG / r)) * r, ey = cy - r * 0.62; // vanishing point in the fire direction
    const P = u => { const e = 1 - Math.pow(1 - u, 2.2); return [cx + (ex - cx) * e, cy + r * 1.05 + (ey - cy - r * 1.05) * e]; };
    const [x, y] = P(t), size = 9 * (1 - t) + 1.4;
    ctx.save(); ctx.lineCap = 'round';
    ctx.strokeStyle = `rgba(245,240,228,${0.55 * (1 - t * 0.6)})`; ctx.lineWidth = Math.max(1, size * 0.7); ctx.beginPath();
    for (let i = 0; i <= 6; i++) { const [a, b] = P(Math.max(0, t - 0.18 * i / 6)); i ? ctx.lineTo(a, b) : ctx.moveTo(a, b); } ctx.stroke();
    const [px, py] = P(Math.max(0, t - 0.02)); ctx.translate(x, y); ctx.rotate(Math.atan2(y - py, x - px) + Math.PI / 2);
    ctx.fillStyle = 'rgba(28,31,22,.95)'; ctx.beginPath(); ctx.ellipse(0, 0, size * 0.42, size, 0, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
  V.dropShell = function () { V.dropT = performance.now(); };

  // ---------- Frame ----------
  V.frame = function (now, dt) {
    const st = S(); if (!cv || !st || !V.r) return;
    if (!pattern) buildGround(); if (!pattern) return;
    st.dirVis = (st.dirVis + angDiff(st.dir, st.dirVis) * Math.min(1, dt * 14) + 360) % 360;
    const milSet = MT.ballistics.milsExact(st.range);
    st.milVis += (milSet - st.milVis) * Math.min(1, dt * 12);
    const W = V.W, H = V.H, cx = V.cx, cy = V.cy, r = V.r;
    let kick = 0, shake = 0;
    if (V.recoilT > 0) { const t = (now - V.recoilT) / 1000; kick = t < 0.04 ? t / 0.04 : Math.exp(-(t - 0.04) * 6) * Math.cos((t - 0.04) * 22); shake = Math.max(0, 1 - t / 0.5); if (t > 1.6) V.recoilT = -1; }
    if (V.dropT && now - V.dropT < 300) { const t = (now - V.dropT) / 300; kick -= Math.sin(t * Math.PI) * 0.12; shake = Math.max(shake, 0.25 * (1 - t)); }
    const sx = (R() - 0.5) * 14 * shake + Math.sin(now / 2300) * 0.8, sy = (R() - 0.5) * 14 * shake + Math.sin(now / 1700) * 1.0 - kick * 10;
    ctx.setTransform(V.dpr, 0, 0, V.dpr, 0, 0);
    ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H);
    ctx.save(); ctx.translate(sx, sy);
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
    // ground: pans with direction, shifts a little with elevation, jumps on recoil
    const offX = st.dirVis * V.ppdG, offY = (st.milVis - 500) * V.pxPerMil * 0.6 + kick * r * 0.25;
    ctx.save(); ctx.translate(-offX, -offY); ctx.fillStyle = pattern; ctx.fillRect(offX + cx - r - 4, offY + cy - r - 4, 2 * r + 8, 2 * r + 8); ctx.restore();
    // soft light falloff + dark rim of the optic
    let g = ctx.createRadialGradient(cx, cy, r * 0.55, cx, cy, r);
    g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(0.75, 'rgba(20,12,4,.18)'); g.addColorStop(0.93, 'rgba(10,6,2,.55)'); g.addColorStop(1, 'rgba(0,0,0,.92)');
    ctx.fillStyle = g; ctx.fillRect(cx - r, cy - r, 2 * r, 2 * r);
    const tint = MT.meta && MT.meta.cos().tint, TC = { amber: ['soft-light', 'rgba(255,150,30,.55)'], cold: ['color', 'rgba(70,110,150,.35)'], sepia: ['color', 'rgba(120,80,40,.5)'], night: ['multiply', 'rgba(140,150,190,1)'], brass: ['soft-light', 'rgba(255,200,60,.75)'], olive: ['color', 'rgba(110,120,60,.35)'], crimson: ['soft-light', 'rgba(200,30,40,.6)'], thermal: ['difference', 'rgba(230,222,205,1)'], jungle: ['soft-light', 'rgba(40,140,60,.55)'], dusk: ['soft-light', 'rgba(150,60,170,.55)'], noir: ['saturation', 'rgba(128,128,128,1)'], ironsight: ['overlay', 'rgba(90,110,130,.6)'] }[tint];
    if (TC) { ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip(); ctx.globalCompositeOperation = TC[0]; ctx.fillStyle = TC[1]; ctx.fillRect(cx - r, cy - r, 2 * r, 2 * r); ctx.restore(); }
    if (V.burst) {
      V.burst = false;
      for (let i = 0; i < 30; i++) emit({ k: 'smoke', x: cx + (R() - 0.2) * r * 1.4, y: cy - r * (0.1 + R() * 0.9), vx: (R() - 0.5) * 70, vy: -10 - R() * 30, t0: now + R() * 250, life: 2200 + R() * 2200, r: r * (0.1 + R() * 0.14), grow: 2.2, a: 0.55, c: '226,220,206', drag: 0.95, grav: 4 });
      for (let i = 0; i < 46; i++) { const dirt = R() < 0.65; emit({ k: dirt ? 'dirt' : 'smoke', x: cx + (R() - 0.5) * r * 2, y: cy + r * (0.2 + R() * 0.8), vx: (R() - 0.5) * 180, vy: -80 - R() * 220, t0: now, life: 800 + R() * 1000, r: dirt ? 1.4 + R() * 2.4 : r * 0.12, grow: 2, a: 0.4, c: '196,170,124', drag: 0.95, grav: dirt ? 320 : -20 }); }
    }
    stepParts(now, dt);
    drawShot(now, cx, cy, r);
    drawHud(now, st);
    ctx.restore();
    // rim shading outside the lens edge
    g = ctx.createRadialGradient(cx, cy, r * 0.98, cx, cy, r * 1.06); g.addColorStop(0, 'rgba(0,0,0,.6)'); g.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r * 1.06, 0, Math.PI * 2); ctx.arc(cx, cy, r * 0.98, 0, Math.PI * 2, true); ctx.fill();
    ctx.restore();
    // muzzle flash light
    if (V.recoilT > 0) { const t = (now - V.recoilT) / 180; if (t < 1) { g = ctx.createRadialGradient(cx, cy - r, 0, cx, cy - r, Math.max(W, H)); g.addColorStop(0, `rgba(255,240,205,${0.85 * (1 - t)})`); g.addColorStop(0.45, `rgba(255,180,90,${0.35 * (1 - t)})`); g.addColorStop(1, 'rgba(255,150,70,0)'); ctx.fillStyle = g; ctx.fillRect(0, 0, W, H); } }
    if (mctx && now - miniT > 100) { miniT = now; drawMini(); }
  };

  // ---------- HUD inside the scope ----------
  function txt(s, x, y, size, align, col, weight) { ctx.font = `${weight || 600} ${size}px ${MONO}`; ctx.textAlign = align || 'center'; ctx.fillStyle = col || INK; ctx.fillText(s, x, y); }
  function drawHud(now, st) {
    const cx = V.cx, cy = V.cy, hw = V.hw, hh = V.hh, B = MT.ballistics;
    const small = V.wide ? 11 : 10;
    ctx.save(); ctx.lineCap = 'butt'; ctx.textBaseline = 'middle';
    // halo so dark lines stay readable on darker patches
    ctx.shadowColor = 'rgba(255,240,210,.35)'; ctx.shadowBlur = 0;
    ctx.strokeStyle = INK; ctx.fillStyle = INK; ctx.lineWidth = 1.2;

    // --- compass strip ---
    const cy0 = V.compY, cppd = V.wide ? 4.4 : 3.5, cw = Math.min(V.r * (V.wide ? 0.92 : 0.98), V.W * 0.8) / 2;
    const dirV = st.dirVis;
    for (let d = Math.ceil((dirV - cw / cppd) / 5) * 5; d <= dirV + cw / cppd; d += 5) {
      const x = cx + (d - dirV) * cppd; if (Math.abs(x - cx) > cw) continue;
      const dd = ((d % 360) + 360) % 360, fade = 1 - Math.pow(Math.abs(x - cx) / cw, 4);
      ctx.globalAlpha = fade;
      const major = dd % 15 === 0;
      ctx.fillRect(x - 0.6, cy0 - (major ? 5 : 3), 1.2, major ? 10 : 6);
      if (major && Math.abs(x - cx) > 34) txt(DIRS[dd] || String(dd).padStart(3, '0'), x + (major ? 0 : 0), cy0 - 13, small, 'center', INK, DIRS[dd] ? 800 : 600);
    }
    ctx.globalAlpha = 1;
    // marker waypoint (no distance)
    if (st.marker) {
      const sol = B.solve(st.own.x, -st.own.y, st.marker.x, -st.marker.y);
      const dx = angDiff(sol.bearing, dirV) * cppd, off = Math.abs(dx) > cw - 6, x = cx + clamp(dx, -cw + 6, cw - 6), y = cy0 + 12;
      ctx.save(); ctx.translate(x, y); ctx.rotate(Math.PI / 4); ctx.fillStyle = 'rgba(236,128,24,.95)'; ctx.fillRect(-4, -4, 8, 8); ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.strokeRect(-4, -4, 8, 8); ctx.restore();
      if (off) { const s = dx < 0 ? -1 : 1; ctx.beginPath(); ctx.moveTo(x + s * 13, y); ctx.lineTo(x + s * 8, y - 4); ctx.lineTo(x + s * 8, y + 4); ctx.fill(); }
    }
    // current direction, boxed
    const dTxt = (Math.round(((st.dir % 360) + 360) % 360 * 10) / 10).toFixed(1).padStart(5, '0');
    ctx.font = `700 ${small + 2}px ${MONO}`; const bw = ctx.measureText(dTxt).width + 12;
    ctx.fillStyle = 'rgba(232,212,170,.55)'; ctx.fillRect(cx - bw / 2, cy0 - 22, bw, 17);
    ctx.strokeRect(cx - bw / 2, cy0 - 22, bw, 17); txt(dTxt, cx, cy0 - 13, small + 2, 'center', INK, 700);
    ctx.beginPath(); ctx.moveTo(cx, cy0 - 5); ctx.lineTo(cx - 4, cy0 + 1); ctx.lineTo(cx + 4, cy0 + 1); ctx.fill();

    // --- corner brackets ---
    const L = Math.min(16, hw * 0.12), x0 = cx - hw, x1 = cx + hw, y0 = cy - hh, y1 = cy + hh;
    ctx.lineWidth = 1.6; ctx.beginPath();
    [[x0, y0, 1, 1], [x1, y0, -1, 1], [x0, y1, 1, -1], [x1, y1, -1, -1]].forEach(([x, y, a, b]) => { ctx.moveTo(x, y + b * L); ctx.lineTo(x, y); ctx.lineTo(x + a * L, y); });
    ctx.stroke(); ctx.lineWidth = 1.2;

    // --- deflection ruler along the top edge (degrees) ---
    const ry = y0 + 22, rw = hw * 0.78, ppdG = V.ppdG;
    ctx.beginPath(); ctx.moveTo(cx - rw, ry); ctx.lineTo(cx + rw, ry); ctx.stroke();
    const lblStep = ppdG * 5 >= 38 ? 5 : 10;
    for (let d = Math.ceil(dirV - rw / ppdG); d <= dirV + rw / ppdG; d++) {
      const x = cx + (d - dirV) * ppdG; if (Math.abs(x - cx) > rw) continue;
      const dd = ((d % 360) + 360) % 360, maj = dd % 5 === 0;
      ctx.fillRect(x - 0.5, ry - (maj ? 6 : 3), 1, maj ? 12 : 6);
      if (dd % lblStep === 0) txt(String(dd).padStart(3, '0'), x, ry - 13, small - 2, 'center', INK2);
    }
    ctx.beginPath(); ctx.moveTo(cx, ry + 8); ctx.lineTo(cx - 3.5, ry + 13); ctx.lineTo(cx + 3.5, ry + 13); ctx.fill();

    // --- ladders: same vertical scale; left = range in metres, right = mil for that range ---
    const ppm = V.pxPerMil, mv = st.milVis, lim = hh - 34;
    const XL = x0 + (V.wide ? 62 : 52), XR = x1 - (V.wide ? 62 : 52);
    const yOf = mil => cy + (mil - mv) * ppm;
    // spines
    ctx.globalAlpha = 0.5; ctx.beginPath(); ctx.moveTo(XL, cy - lim); ctx.lineTo(XL, cy + lim); ctx.moveTo(XR, cy - lim); ctx.lineTo(XR, cy + lim); ctx.stroke(); ctx.globalAlpha = 1;
    for (let m = 140; m <= 680; m += 10) {
      const y = yOf(B.milsExact(m)); if (Math.abs(y - cy) > lim) continue;
      const maj = m % 50 === 0; ctx.globalAlpha = 1 - Math.pow(Math.abs(y - cy) / lim, 4);
      ctx.fillRect(XL - (maj ? 9 : 4), y - 0.6, maj ? 9 : 4, 1.2);
      if (maj && Math.abs(y - cy) > 13) txt(m + 'M', XL - 13, y, small, 'right');
    }
    for (let mil = 150; mil <= 850; mil += 10) {
      const y = yOf(mil); if (Math.abs(y - cy) > lim) continue;
      const maj = mil % 50 === 0; ctx.globalAlpha = 1 - Math.pow(Math.abs(y - cy) / lim, 4);
      ctx.fillRect(XR, y - 0.6, maj ? 9 : 4, 1.2);
      if (maj && Math.abs(y - cy) > 13) txt(String(mil), XR + 13, y, small, 'left');
    }
    ctx.globalAlpha = 1;
    // range limits (gun limits, not target info)
    [[B.MIN_RANGE, B.MIL_MAX], [B.MAX_RANGE, B.MIL_MIN]].forEach(([m, mil]) => { const y = yOf(mil); if (Math.abs(y - cy) <= lim) { ctx.fillRect(XL - 12, y - 1, 12, 2); ctx.fillRect(XR, y - 1, 12, 2); } });
    // set values at the centre line
    const rTxt = st.range + 'M', mTxt = String(MT.ballistics.interpolateMils(st.range));
    ctx.font = `700 ${small + 1}px ${MONO}`;
    const bwl = ctx.measureText(rTxt).width + 10, bwr = ctx.measureText(mTxt).width + 10;
    ctx.fillStyle = 'rgba(232,212,170,.55)'; ctx.fillRect(XL - 11 - bwl, cy - 8.5, bwl, 17); ctx.fillRect(XR + 11, cy - 8.5, bwr, 17);
    ctx.strokeRect(XL - 11 - bwl, cy - 8.5, bwl, 17); ctx.strokeRect(XR + 11, cy - 8.5, bwr, 17);
    txt(rTxt, XL - 11 - bwl / 2, cy + 0.5, small + 1, 'center', INK, 700); txt(mTxt, XR + 11 + bwr / 2, cy + 0.5, small + 1, 'center', INK, 700);
    ctx.beginPath(); ctx.moveTo(XL - 1, cy); ctx.lineTo(XL - 8, cy - 4); ctx.lineTo(XL - 8, cy + 4); ctx.fill();
    ctx.beginPath(); ctx.moveTo(XR + 1, cy); ctx.lineTo(XR + 8, cy - 4); ctx.lineTo(XR + 8, cy + 4); ctx.fill();
    txt('RNG', x0 - 8, cy, small, 'right', INK, 700); txt('MIL', x1 + 8, cy, small, 'left', INK, 700);

    // --- reticle: bracket [ ] with a dot, T above, inverted T below ---
    const bx = V.wide ? 24 : 20, by = V.wide ? 13 : 11;
    const cos = (MT.meta && MT.meta.cos()) || {}, RC = { ink: INK, red: 'rgba(200,30,24,.95)', white: 'rgba(250,248,240,.95)', brass: 'rgba(230,170,40,.98)', cyan: 'rgba(34,211,238,.95)', lime: 'rgba(190,240,60,.95)', pink: 'rgba(244,114,182,.95)', violet: 'rgba(167,139,250,.98)', ember: 'rgba(255,140,40,1)', teal: 'rgba(20,184,166,.95)', sand: 'rgba(214,190,140,.96)', blood: 'rgba(150,10,20,.97)', arctic: 'rgba(186,230,253,.97)', neon: 'rgba(57,255,20,1)', plasma: 'rgba(120,200,255,1)', iron: 'rgba(160,166,172,.98)' }[cos.reticle] || INK;
    const GLOW = { ember: 'rgba(255,90,0,.9)', neon: 'rgba(57,255,20,.8)', plasma: 'rgba(60,120,255,.95)' }[cos.reticle];
    if (GLOW) { ctx.shadowColor = GLOW; ctx.shadowBlur = 8; }
    if (cos.style === 'dot') { ctx.lineWidth = 1.2; ctx.beginPath(); ctx.moveTo(cx - 30, cy); ctx.lineTo(cx - 8, cy); ctx.moveTo(cx + 8, cy); ctx.lineTo(cx + 30, cy); ctx.moveTo(cx, cy + 8); ctx.lineTo(cx, cy + 30); ctx.stroke(); ctx.beginPath(); ctx.arc(cx, cy, 2.4, 0, Math.PI * 2); ctx.fill(); ctx.restore(); return; }
    if (cos.style === 'mil') { ctx.lineWidth = 1.1; ctx.beginPath(); ctx.moveTo(cx - 60, cy); ctx.lineTo(cx + 60, cy); ctx.moveTo(cx, cy - 46); ctx.lineTo(cx, cy + 60); ctx.stroke(); for (let k = -5; k <= 5; k++) { if (!k) continue; ctx.beginPath(); ctx.arc(cx + k * 11, cy, 1.5, 0, Math.PI * 2); ctx.fill(); if (k > 0) { ctx.beginPath(); ctx.arc(cx, cy + k * 11, 1.5, 0, Math.PI * 2); ctx.fill(); } } ctx.restore(); return; }
    ctx.strokeStyle = RC; ctx.fillStyle = RC;
    if (cos.style === 'chevron') { // alternative reticle: chevron + stadia dots
      ctx.lineWidth = 1.6; ctx.beginPath(); ctx.moveTo(cx - 12, cy + 12); ctx.lineTo(cx, cy); ctx.lineTo(cx + 12, cy + 12);
      ctx.moveTo(cx - 40, cy); ctx.lineTo(cx - 20, cy); ctx.moveTo(cx + 20, cy); ctx.lineTo(cx + 40, cy); ctx.moveTo(cx, cy + 22); ctx.lineTo(cx, cy + 46); ctx.stroke();
      for (let k = 1; k <= 3; k++) { ctx.beginPath(); ctx.arc(cx, cy + 46 + k * 9, 1.4, 0, Math.PI * 2); ctx.fill(); }
      ctx.restore(); return;
    }
    if (cos.style === 'circle') {
      ctx.lineWidth = 1.4; ctx.beginPath(); ctx.arc(cx, cy, by + 10, 0, Math.PI * 2); ctx.moveTo(cx - by - 22, cy); ctx.lineTo(cx - 6, cy); ctx.moveTo(cx + 6, cy); ctx.lineTo(cx + by + 22, cy); ctx.moveTo(cx, cy - by - 22); ctx.lineTo(cx, cy - 6); ctx.moveTo(cx, cy + 6); ctx.lineTo(cx, cy + by + 22); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx, cy, 1.3, 0, Math.PI * 2); ctx.fill(); ctx.restore(); return;
    }
    ctx.lineWidth = 1.5; ctx.beginPath();
    ctx.moveTo(cx - bx + 6, cy - by); ctx.lineTo(cx - bx, cy - by); ctx.lineTo(cx - bx, cy + by); ctx.lineTo(cx - bx + 6, cy + by);
    ctx.moveTo(cx + bx - 6, cy - by); ctx.lineTo(cx + bx, cy - by); ctx.lineTo(cx + bx, cy + by); ctx.lineTo(cx + bx - 6, cy + by);
    const t0 = by + 8, t1 = by + 22;
    ctx.moveTo(cx - 8, cy - t0); ctx.lineTo(cx + 8, cy - t0); ctx.moveTo(cx, cy - t0); ctx.lineTo(cx, cy - t1);
    ctx.moveTo(cx - 8, cy + t0); ctx.lineTo(cx + 8, cy + t0); ctx.moveTo(cx, cy + t0); ctx.lineTo(cx, cy + t1);
    ctx.stroke();
    ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(cx, cy, 3.2, 0, Math.PI * 2); ctx.stroke(); ctx.beginPath(); ctx.arc(cx, cy, 1, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // ---------- Minimap (bottom left, tap = tablet) ----------
  function drawMini() {
    const st = S(); if (!st || !st.base || !V.MW) return;
    const c = mctx, s = V.MW, d = V.dpr; c.setTransform(d, 0, 0, d, 0, 0);
    c.fillStyle = '#0b0d0a'; c.fillRect(0, 0, s, s);
    const span = 900, k = s / span, ox = st.own.x - span / 2, oy = st.own.y - span / 2;
    c.save(); c.globalAlpha = 0.85; c.filter = 'saturate(.6) brightness(.8)';
    c.drawImage(st.base, -ox * k, -oy * k, MT.terrain.SIZE * k, MT.terrain.SIZE * k); c.restore();
    c.strokeStyle = 'rgba(255,255,255,.12)'; c.lineWidth = 1;
    for (let gx = Math.ceil(ox / 100) * 100; gx < ox + span; gx += 100) { const x = (gx - ox) * k; c.beginPath(); c.moveTo(x, 0); c.lineTo(x, s); c.stroke(); }
    for (let gy = Math.ceil(oy / 100) * 100; gy < oy + span; gy += 100) { const y = (gy - oy) * k; c.beginPath(); c.moveTo(0, y); c.lineTo(s, y); c.stroke(); }
    const P = (x, y) => [(x - ox) * k, (y - oy) * k];
    if (st.target && !st.target.dead) { const [x, y] = P(st.target.x, st.target.y); c.fillStyle = '#ef4444'; c.fillRect(x - 2.5, y - 2.5, 5, 5); }
    if (st.marker) { const [x, y] = P(st.marker.x, st.marker.y); c.save(); c.translate(x, y); c.rotate(Math.PI / 4); c.fillStyle = '#f59e0b'; c.fillRect(-3, -3, 6, 6); c.restore(); }
    // own position: view cone in the current direction
    const [x, y] = P(st.own.x, st.own.y), a = (st.dirVis - 90) * Math.PI / 180;
    c.fillStyle = 'rgba(147,197,253,.28)'; c.beginPath(); c.moveTo(x, y); c.arc(x, y, s * 0.3, a - 0.3, a + 0.3); c.closePath(); c.fill();
    c.fillStyle = '#60a5fa'; c.strokeStyle = '#fff'; c.lineWidth = 1.2; c.beginPath(); c.arc(x, y, 3.2, 0, Math.PI * 2); c.fill(); c.stroke();
  }
  V.drawMini = drawMini;

  MT.scene = V;
})(window.MT = window.MT || {});

/* ---- meta.js ---- */
/* Mortar Trainer · progression: profile (localStorage), XP & ranks with self-drawn insignia, unlocks,
 * achievements, daily challenge seed, missions, share text + PNG result card. All client-side. */
(function (MT) {
  'use strict';
  const KEY = 'mt_profile_v2';
  const t = (k, v) => MT.t(k, v);
  const DEF = () => ({
    v: 2, xp: 0,
    stats: { shots: 0, kills: 0, direct: 0, first: 0, games: 0, longest: 0, bestStreak: 0, moving: 0, closest: null, endlessRuns: 0, missionsDone: 0 },
    ach: {}, ms: {}, daily: { last: null, streak: 0, best: 0, hist: {} }, endless: { best: 0, kills: 0 },
    cos: { reticle: 'ink', style: 'bracket', tint: 'none', biome: 'grass' },
    set: { haptics: true }, seenUnlocks: 0, hs: {},
    inv: {}, crate: { pity: {}, opened: 0, log: [] }
  });
  let P = DEF();
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) { const o = JSON.parse(raw); P = Object.assign(DEF(), o); for (const k of ['stats', 'daily', 'endless', 'cos', 'set', 'crate']) P[k] = Object.assign(DEF()[k], o[k] || {}); }
      else { const old = localStorage.getItem('mt_hs_v1'); if (old) P.hs = JSON.parse(old) || {}; }
    } catch (e) { P = DEF(); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(P)); } catch (e) {} }
  function reset() { P = DEF(); save(); try { localStorage.removeItem('mt_tut'); localStorage.removeItem('mt_hs_v1'); } catch (e) {} }
  load();
  // v1.2.0 migration: the premium currency and everything tied to it is gone. Old profiles keep all in-game
  // progress; a stored balance is simply dropped (it could never be exchanged), legacy ids are renamed.
  (function migrate() {
    let ch = false; const LEG = 'go' + 'ld'; // legacy id of the brass reticle/tint and the removed currency field
    if (LEG in P) { delete P[LEG]; ch = true; }
    if (P.set && 'crateCap' in P.set) { delete P.set.crateCap; ch = true; }
    if (P.crate) { if ('day' in P.crate) { delete P.crate.day; ch = true; } if ('today' in P.crate) { delete P.crate.today; ch = true; } if (!Array.isArray(P.crate.log)) { P.crate.log = []; ch = true; } if (!P.crate.pity || typeof P.crate.pity !== 'object') { P.crate.pity = {}; ch = true; } }
    if (!P.inv || typeof P.inv !== 'object') { P.inv = {}; ch = true; }
    for (const k of ['tint', 'reticle']) { const o = k + ':' + LEG; if (P.inv[o]) { P.inv[k + ':brass'] = P.inv[o]; delete P.inv[o]; ch = true; } }
    if (P.cos) { if (P.cos.tint === LEG) { P.cos.tint = 'brass'; ch = true; } if (P.cos.reticle === LEG) { P.cos.reticle = 'brass'; ch = true; } }
    try { if (localStorage.getItem('mt_supporter') != null) localStorage.removeItem('mt_supporter'); } catch (e) {}
    if (ch) save();
  })();
  if (P.crate.pity.field && !P.crate.pity.supply) P.crate.pity.supply = P.crate.pity.field;
  if (P.crate.pity.officer && !P.crate.pity.elite) P.crate.pity.elite = P.crate.pity.officer;

  // ---------- ranks ----------
  const RANKS = [
    { id: 'pvt', xp: 0 }, { id: 'pfc', xp: 400 }, { id: 'cpl', xp: 1100 }, { id: 'sgt', xp: 2200 }, { id: 'ssg', xp: 3800 },
    { id: 'lt', xp: 6000 }, { id: 'cpt', xp: 9000 }, { id: 'maj', xp: 13000 }, { id: 'col', xp: 18500 }, { id: 'gen', xp: 26000 }
  ];
  function rankOf(xp) {
    let i = 0; while (i + 1 < RANKS.length && xp >= RANKS[i + 1].xp) i++;
    const cur = RANKS[i], nx = RANKS[i + 1];
    return { i, id: cur.id, name: t('rk_' + cur.id), min: cur.xp, next: nx ? nx.xp : null, frac: nx ? (xp - cur.xp) / (nx.xp - cur.xp) : 1 };
  }
  // self-drawn insignia (chevrons / bars / leaf / eagle / stars) as SVG strings
  function insignia(i, size) {
    size = size || 48; const S = (b) => `<svg class="ins" viewBox="0 0 48 48" width="${size}" height="${size}" aria-hidden="true">${b}</svg>`;
    const brass = 'url(#gG)', silver = 'url(#gS)';
    const defs = '<defs><linearGradient id="gG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fde68a"/><stop offset=".55" stop-color="#d4a017"/><stop offset="1" stop-color="#8a6508"/></linearGradient><linearGradient id="gS" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f4f5"/><stop offset=".6" stop-color="#a1a1aa"/><stop offset="1" stop-color="#52525b"/></linearGradient></defs>';
    const chev = (y) => `<path d="M8 ${y + 8} L24 ${y} L40 ${y + 8} L40 ${y + 13} L24 ${y + 5} L8 ${y + 13}Z" fill="${brass}" stroke="#3b2a05" stroke-width="1"/>`;
    const rocker = (y) => `<path d="M8 ${y} Q24 ${y + 9} 40 ${y} L40 ${y + 5} Q24 ${y + 14} 8 ${y + 5}Z" fill="${brass}" stroke="#3b2a05" stroke-width="1"/>`;
    const bar = (x, c) => `<rect x="${x}" y="10" width="7" height="28" rx="1.5" fill="${c}" stroke="#222" stroke-width="1"/>`;
    const star = (cx, cy, r, c) => { let d = ''; for (let k = 0; k < 10; k++) { const a = -Math.PI / 2 + k * Math.PI / 5, rr = k % 2 ? r * 0.42 : r; d += (k ? 'L' : 'M') + (cx + Math.cos(a) * rr).toFixed(1) + ' ' + (cy + Math.sin(a) * rr).toFixed(1); } return `<path d="${d}Z" fill="${c}" stroke="#3b2a05" stroke-width=".8"/>`; };
    let b = defs;
    switch (i) {
      case 0: b += chev(18); break;
      case 1: b += chev(10) + rocker(28); break;
      case 2: b += chev(10) + chev(22); break;
      case 3: b += chev(6) + chev(17) + chev(28); break;
      case 4: b += chev(2) + chev(12) + chev(22) + rocker(34); break;
      case 5: b += bar(20.5, brass); break;
      case 6: b += bar(14, silver) + bar(27, silver); break;
      case 7: b += `<path d="M24 6 C34 12 38 22 30 34 L26 34 L26 42 L22 42 L22 34 L18 34 C10 22 14 12 24 6Z" fill="${brass}" stroke="#3b2a05"/><path d="M24 10 V32 M24 16 L18 20 M24 16 L30 20 M24 23 L17 27 M24 23 L31 27" stroke="#8a6508" stroke-width="1.2" fill="none"/>`; break;
      case 8: b += `<path d="M24 14 L28 18 L44 12 L38 22 L44 24 L34 28 L28 26 L28 36 L24 40 L20 36 L20 26 L14 28 L4 24 L10 22 L4 12 L20 18Z" fill="${silver}" stroke="#222"/><circle cx="24" cy="12" r="3.5" fill="${silver}" stroke="#222"/>`; break;
      default: b += star(13, 24, 9, silver) + star(35, 24, 9, silver);
    }
    return S(b);
  }

  // ---------- unlocks ----------
  const UNLOCKS = [
    { r: 0, kind: 'terrain', id: 'grass' }, { r: 0, kind: 'reticle', id: 'ink' }, { r: 0, kind: 'style', id: 'bracket' }, { r: 0, kind: 'tint', id: 'none' },
    { r: 1, kind: 'reticle', id: 'red' }, { r: 1, kind: 'target', id: 'sniper' },
    { r: 2, kind: 'terrain', id: 'desert' }, { r: 2, kind: 'tint', id: 'amber' },
    { r: 3, kind: 'target', id: 'artillery' }, { r: 3, kind: 'style', id: 'chevron' },
    { r: 4, kind: 'terrain', id: 'forest' }, { r: 4, kind: 'reticle', id: 'white' },
    { r: 5, kind: 'target', id: 'convoy' }, { r: 5, kind: 'tint', id: 'cold' },
    { r: 6, kind: 'terrain', id: 'winter' }, { r: 6, kind: 'style', id: 'circle' },
    { r: 7, kind: 'tint', id: 'night' }, { r: 8, kind: 'reticle', id: 'brass' }, { r: 9, kind: 'tint', id: 'sepia' }
  ];
  // ---------- crates (cosmetic only, opened with earned keys or in-game $ – never affects aiming, damage or scoring) ----------
  const CRATE_ITEMS = [
    { kind: 'reticle', id: 'cyan', rar: 'common' }, { kind: 'reticle', id: 'lime', rar: 'common' }, { kind: 'tint', id: 'olive', rar: 'common' }, { kind: 'style', id: 'dot', rar: 'common' },
    { kind: 'reticle', id: 'pink', rar: 'rare' }, { kind: 'tint', id: 'crimson', rar: 'rare' }, { kind: 'style', id: 'mil', rar: 'rare' },
    { kind: 'tint', id: 'thermal', rar: 'epic' }, { kind: 'reticle', id: 'violet', rar: 'epic' },
    { kind: 'tint', id: 'brass', rar: 'legendary' }, { kind: 'reticle', id: 'ember', rar: 'legendary' },
    // v1.1 additions
    { kind: 'reticle', id: 'teal', rar: 'common' }, { kind: 'reticle', id: 'sand', rar: 'common' }, { kind: 'tint', id: 'jungle', rar: 'common' },
    { kind: 'reticle', id: 'blood', rar: 'rare' }, { kind: 'reticle', id: 'arctic', rar: 'rare' }, { kind: 'tint', id: 'dusk', rar: 'rare' },
    { kind: 'reticle', id: 'neon', rar: 'epic' }, { kind: 'tint', id: 'noir', rar: 'epic' },
    { kind: 'reticle', id: 'plasma', rar: 'legendary' }
  ];
  // season-pass exclusives (never in crates)
  const SEASON_ITEMS = [{ kind: 'reticle', id: 'iron', rar: 'epic', season: true }, { kind: 'tint', id: 'ironsight', rar: 'legendary', season: true }];
  const RAR = ['common', 'rare', 'epic', 'legendary'];
  // odds in percent – shown to the player before every purchase (Google Play / JuSchG transparency)
  // pay: 'key' (earned keys) or 'cash' (earned in-game $). Nothing here can be bought with real money.
  const CRATES = [
    { id: 'supply', cash: 2500, odds: { common: 72, rare: 22, epic: 5, legendary: 1 }, pity: { epic: 10, legendary: 40 } },
    { id: 'elite', cash: 7500, odds: { common: 0, rare: 62, epic: 30, legendary: 8 }, pity: { epic: 4, legendary: 15 } },
    { id: 'legendary', cash: 20000, odds: { common: 0, rare: 0, epic: 65, legendary: 35 }, pity: { epic: 1, legendary: 4 } }
  ];
  const DUPE_CASH = { common: 400, rare: 1000, epic: 2500, legendary: 6000 };
  const owned = (kind, id) => !!P.inv[kind + ':' + id];
  const crateItem = (kind, id) => CRATE_ITEMS.find(c => c.kind === kind && c.id === id) || SEASON_ITEMS.find(c => c.kind === kind && c.id === id);
  function unownedOf(rar) { return CRATE_ITEMS.filter(c => c.rar === rar && !owned(c.kind, c.id)); }
  const allOwned = () => CRATE_ITEMS.every(c => owned(c.kind, c.id));
  // returns {ok:false, why} or {ok:true, item|null, rar, pityHit, dupe:$}
  // Rarity is rolled with the shown odds (+ pity). Inside the rolled rarity you always get an item you do not own yet
  // (duplicate protection); if that rarity is already complete, the drop converts into $ (DUPE_CASH) instead.
  function openCrate(cid, rnd, pay) {
    if (typeof rnd === 'string') { pay = rnd; rnd = null; }
    rnd = rnd || Math.random; pay = pay || 'cash';
    const C = CRATES.find(c => c.id === cid); if (!C) return { ok: false, why: 'unknown' };
    const L = MT.live && MT.live.L;
    if (pay === 'key') { if (!L || !(L.keys[cid] > 0)) return { ok: false, why: 'key' }; }
    else if (pay === 'cash') { if (!L || L.cash < C.cash) return { ok: false, why: 'cash' }; }
    else return { ok: false, why: 'unknown' };
    const pc = P.crate.pity[cid] || (P.crate.pity[cid] = { epic: 0, legendary: 0 });
    let rar, pityHit = false;
    if (pc.legendary + 1 >= C.pity.legendary) { rar = 'legendary'; pityHit = C.odds.legendary < 100; }
    else if (pc.epic + 1 >= C.pity.epic) { rar = 'epic'; pityHit = C.odds.epic + C.odds.legendary < 100; }
    else { let x = rnd() * 100; rar = 'common'; for (const r of RAR.slice().reverse()) { if ((x -= C.odds[r]) < 0) { rar = r; break; } } }
    const pick = unownedOf(rar), item = pick.length ? pick[Math.floor(rnd() * pick.length) % pick.length] : null;
    if (pay === 'key') L.keys[cid]--;
    else L.cash -= C.cash;
    let dupe = 0;
    if (item) P.inv[item.kind + ':' + item.id] = Date.now();
    else { dupe = Math.round(DUPE_CASH[rar] * (MT.live ? MT.live.dupeMult() : 1)); if (L) L.cash += dupe; }
    pc.epic = (rar === 'epic' || rar === 'legendary') ? 0 : pc.epic + 1;
    pc.legendary = rar === 'legendary' ? 0 : pc.legendary + 1;
    P.crate.opened++;
    P.crate.log.unshift({ t: Date.now(), c: cid, p: pay, i: item ? item.kind + ':' + item.id : '$' + dupe, r: rar }); P.crate.log = P.crate.log.slice(0, 30);
    save();
    return { ok: true, item, rar, pityHit, dupe };
  }
  function grantItem(kind, id) { P.inv[kind + ':' + id] = Date.now(); save(); }
  const unlocked = (kind, id) => { if (crateItem(kind, id)) return owned(kind, id); if (kind === 'terrain' && MT.live && MT.live.L.terr[id]) return true; const u = UNLOCKS.find(u => u.kind === kind && u.id === id); return !u || rankOf(P.xp).i >= u.r; };
  const unlocksFor = (r) => UNLOCKS.filter(u => u.r === r);
  const pool = () => ['apc', 'truck', 'squad', 'bunker', 'mg', 'mortar'].concat(['sniper', 'artillery', 'convoy'].filter(id => unlocked('target', id)));
  function cos() { return P.cos; }
  function setCos(k, v) { P.cos[k] = v; save(); }
  function addXP(n) {
    const before = rankOf(P.xp).i; P.xp += Math.max(0, Math.round(n)); const after = rankOf(P.xp).i; save();
    const ups = []; for (let r = before + 1; r <= after; r++) ups.push(r); return ups;
  }

  // ---------- achievements ----------
  const ACH = ['first_blood', 'first_round', 'fr10', 'direct', 'direct10', 'sharpshooter', 'danger_close', 'moving', 'streak5', 'streak10',
    'flawless', 'veteran_clear', 'daily1', 'perfect_daily', 'daily3', 'daily7', 'endless10', 'endless25', 'missions12', 'stars36', 'rank_sgt', 'rank_gen'];
  function unlockAch(id) { if (P.ach[id]) return false; P.ach[id] = Date.now(); save(); return true; }

  // ---------- daily ----------
  const pad = n => String(n).padStart(2, '0');
  function dailyKey(d) { d = d || new Date(); return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`; }
  function dayNo(d) { d = d || new Date(); return Math.floor((Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()) - Date.UTC(2026, 0, 1)) / 864e5) + 1; }
  function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function dailySeed(key) { return hashStr('mt-daily-' + (key || dailyKey())); }
  function msToNext() { const n = new Date(); return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + 1) - n.getTime(); }
  function fmtCountdown(ms) { const s = Math.max(0, Math.floor(ms / 1000)); return `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}`; }
  const dailyDone = () => !!P.daily.hist[dailyKey()];
  function recordDaily(res) {
    const k = dailyKey(); if (P.daily.hist[k]) return false;
    const y = new Date(Date.now() - 864e5), yk = dailyKey(y);
    P.daily.streak = P.daily.last === yk ? P.daily.streak + 1 : 1; P.daily.last = k;
    P.daily.best = Math.max(P.daily.best, res.score); P.daily.hist[k] = res; save(); return true;
  }
  function dailyStreak() { const k = dailyKey(), yk = dailyKey(new Date(Date.now() - 864e5)); return (P.daily.last === k || P.daily.last === yk) ? P.daily.streak : 0; }

  // ---------- missions ----------
  // b = bearing (deg), d = distance (m); positions are nudged deterministically if they fall into the river.
  const MISSIONS = [
    { id: 1, seed: 1101, biome: 'grass', kr: 6, shells: 3, par: [3, 2, 1], req: 0, tg: [{ type: 'bunker', d: 280, b: 40 }] },
    { id: 2, seed: 2207, biome: 'grass', kr: 5, shells: 3, par: [3, 2, 1], req: 1, tg: [{ type: 'mortar', d: 410, b: 300 }] },
    { id: 3, seed: 3313, biome: 'grass', kr: 5, shells: 6, par: [6, 4, 2], req: 2, tg: [{ type: 'mg', d: 330, b: 120 }, { type: 'mg', d: 460, b: 150 }] },
    { id: 4, seed: 4421, biome: 'grass', kr: 5, shells: 3, par: [3, 2, 1], req: 4, tg: [{ type: 'bunker', d: 655, b: 210 }] },
    { id: 5, seed: 5531, biome: 'grass', kr: 5, shells: 3, par: [3, 2, 1], req: 5, tg: [{ type: 'squad', d: 165, b: 75 }] },
    { id: 6, seed: 6643, biome: 'desert', kr: 5, shells: 6, par: [6, 4, 2], req: 7, tg: [{ type: 'truck', d: 520, b: 20 }, { type: 'apc', d: 380, b: 340 }] },
    { id: 7, seed: 7757, biome: 'desert', kr: 5, shells: 4, par: [4, 2, 1], req: 9, tg: [{ type: 'apc', d: 420, b: 250, mv: 2.6 }] },
    { id: 8, seed: 8861, biome: 'forest', kr: 3, shells: 4, par: [4, 2, 1], req: 11, tg: [{ type: 'sniper', d: 470, b: 100 }] },
    { id: 9, seed: 9973, biome: 'forest', kr: 5, shells: 4, par: [4, 2, 1], req: 13, tg: [{ type: 'convoy', d: 500, b: 190, mv: 3 }] },
    { id: 10, seed: 10079, biome: 'desert', kr: 4, shells: 5, par: [5, 3, 2], req: 16, time: 90, tg: [{ type: 'artillery', d: 560, b: 60 }, { type: 'artillery', d: 610, b: 75 }] },
    { id: 11, seed: 11197, biome: 'winter', kr: 4, shells: 7, par: [7, 5, 3], req: 19, time: 120, tg: [{ type: 'bunker', d: 300, b: 330 }, { type: 'mg', d: 450, b: 10 }, { type: 'mortar', d: 590, b: 345 }] },
    { id: 12, seed: 12301, biome: 'winter', kr: 3, shells: 9, par: [9, 6, 4], req: 22, time: 150, tg: [{ type: 'artillery', d: 620, b: 140 }, { type: 'apc', d: 380, b: 200, mv: 2.6 }, { type: 'sniper', d: 260, b: 250 }, { type: 'convoy', d: 520, b: 170, mv: 3 }] }
  ];
  const stars = id => P.ms[id] || 0;
  const totalStars = () => MISSIONS.reduce((a, m) => a + stars(m.id), 0);
  const missionOpen = m => totalStars() >= m.req;
  function recordMission(id, s) { const prev = stars(id); if (s > prev) { P.ms[id] = s; save(); } return s > prev; }

  // ---------- share ----------
  const EMO = { direct: '🎯', hit: '💥', near: '🟠', miss: '❌', time: '⏱️' };
  function shareText(r) {
    const rows = r.rows.map(row => row.map(k => EMO[k] || '❌').join('')).join('\n');
    return `${t('shareHead', { n: r.day })}\n${rows}\n${t('shareScore', { s: r.score, k: r.kills })}\n${shareUrl()}`;
  }
  // PNG result card (scope style), 1080×1350
  function shareUrl() { const l = MT.lang || 'en'; return 'https://oiotv.de' + (l === 'de' ? '' : '/' + l) + '/tools/moerser-trainer/'; }
  function renderCard(r) {
    const W = 1080, H = 1350, c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
    const mono = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';
    g.fillStyle = '#050505'; g.fillRect(0, 0, W, H);
    const cx = W / 2, cy = 640, R = 470;
    const gr = g.createRadialGradient(cx, cy - 80, 40, cx, cy, R); gr.addColorStop(0, '#e2c48e'); gr.addColorStop(0.7, '#b8915a'); gr.addColorStop(1, '#3a2a16');
    g.save(); g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.clip(); g.fillStyle = gr; g.fillRect(cx - R, cy - R, 2 * R, 2 * R);
    const rnd = MT.terrain.mulberry32(r.day * 77 + 3);
    for (let i = 0; i < 2600; i++) { g.fillStyle = rnd() < 0.6 ? `rgba(70,50,28,${0.15 + rnd() * 0.3})` : `rgba(250,232,196,${0.15 + rnd() * 0.3})`; const s = 1 + rnd() * rnd() * 6; g.beginPath(); g.arc(cx - R + rnd() * 2 * R, cy - R + rnd() * 2 * R, s, 0, Math.PI * 2); g.fill(); }
    const v = g.createRadialGradient(cx, cy, R * 0.6, cx, cy, R); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,.85)'); g.fillStyle = v; g.fillRect(cx - R, cy - R, 2 * R, 2 * R);
    const INK = 'rgba(24,21,16,.92)'; g.strokeStyle = INK; g.fillStyle = INK; g.lineWidth = 3;
    // brackets
    const bx = 330, by = 300; [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([a, b]) => { g.beginPath(); g.moveTo(cx + a * bx, cy + b * (by - 40)); g.lineTo(cx + a * bx, cy + b * by); g.lineTo(cx + a * (bx - 40), cy + b * by); g.stroke(); });
    for (let k = -30; k <= 30; k++) { const x = cx + k * 10; g.fillRect(x - 1, cy - by + 30, 2, k % 5 ? 10 : 20); }
    g.textAlign = 'center'; g.textBaseline = 'middle';
    g.font = `700 34px ${mono}`; g.fillText(t('cardDaily', { n: r.day }), cx, cy - 210);
    g.font = `800 150px ${mono}`; g.fillText(String(r.score), cx, cy - 80);
    g.font = `700 30px ${mono}`; g.fillText(t('ptsShort') + ' · ' + r.kills + '/5 ' + t('cardKills'), cx, cy + 10);
    // rows of shot marks
    const rowY0 = cy + 80, cell = 64;
    r.rows.forEach((row, i) => {
      const y = rowY0 + i * 0 + 0; const x0 = cx - 2 * cell * 1.25 + i * cell * 1.25;
      row.forEach((k, j) => mark(g, x0, y + j * (cell * 0.95), k, 26));
    });
    g.restore();
    // outer HUD
    g.fillStyle = '#eceee6'; g.textAlign = 'left'; g.font = `800 52px ${mono}`; g.fillText('MORTAR TRAINER', 60, 92);
    g.font = `600 28px ${mono}`; g.fillStyle = '#c9ccc0'; g.fillText(t('cardSub'), 60, 140);
    g.textAlign = 'right'; g.fillStyle = '#eceee6'; g.font = `700 30px ${mono}`; g.fillText(r.dateLabel, W - 60, 92);
    g.fillText(r.rank.toUpperCase(), W - 60, 140);
    g.textAlign = 'left'; g.font = `700 34px ${mono}`; g.fillText('L81 MORTAR', 60, H - 120); g.font = `600 28px ${mono}`; g.fillStyle = '#c9ccc0'; g.fillText(t('cardStreak', { n: r.streak }), 60, H - 74);
    g.textAlign = 'right'; g.fillStyle = '#fbbf24'; g.font = `800 40px ${mono}`; g.fillText('oiotv.de', W - 60, H - 96);
    return c;
  }
  function mark(g, x, y, k, r) {
    g.save(); g.translate(x, y); g.lineWidth = 5;
    if (k === 'direct') { g.strokeStyle = '#b91c1c'; g.beginPath(); g.arc(0, 0, r, 0, Math.PI * 2); g.stroke(); g.beginPath(); g.arc(0, 0, r * 0.5, 0, Math.PI * 2); g.stroke(); g.fillStyle = '#b91c1c'; g.beginPath(); g.arc(0, 0, r * 0.18, 0, Math.PI * 2); g.fill(); }
    else if (k === 'hit') { g.fillStyle = '#ea580c'; g.beginPath(); for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, rr = i % 2 ? r * 0.5 : r; g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); } g.closePath(); g.fill(); g.fillStyle = '#fde68a'; g.beginPath(); g.arc(0, 0, r * 0.3, 0, Math.PI * 2); g.fill(); }
    else if (k === 'near') { g.fillStyle = '#f59e0b'; g.beginPath(); g.arc(0, 0, r * 0.8, 0, Math.PI * 2); g.fill(); }
    else { g.strokeStyle = 'rgba(24,21,16,.9)'; g.lineWidth = 7; g.beginPath(); g.moveTo(-r * 0.7, -r * 0.7); g.lineTo(r * 0.7, r * 0.7); g.moveTo(r * 0.7, -r * 0.7); g.lineTo(-r * 0.7, r * 0.7); g.stroke(); }
    g.restore();
  }

  MT.meta = {
    get P() { return P; }, save, reset, RANKS, rankOf, insignia, UNLOCKS, unlocked, unlocksFor, pool, cos, setCos, addXP,
    ACH, unlockAch, dailyKey, dayNo, dailySeed, msToNext, fmtCountdown, dailyDone, recordDaily, dailyStreak,
    CRATE_ITEMS, SEASON_ITEMS, DUPE_CASH, CRATES, RAR, owned, unownedOf, crateItem, openCrate, allOwned, grantItem,
    MISSIONS, stars, totalStars, missionOpen, recordMission, EMO, shareText, renderCard, hashStr
  };
})(window.MT = window.MT || {});

/* ---- live.js ---- */
/* Mortar Trainer · live layer: $ cash economy, upgrades, keys, 7-day calendar, login streak (+freeze),
 * season pass, daily/weekly contracts, weekend double XP, mastery, collection milestones, personal-best ghost.
 * Pure client-side state inside the profile (META.P.lv). $ can only be EARNED in play – it is never sold for money. */
(function (MT) {
  'use strict';
  const META = MT.meta;
  const pad = n => String(n).padStart(2, '0');
  const DEF = () => ({
    cash: 2000, earned: 0, keys: { supply: 1, elite: 0, legendary: 0 }, upg: { logi: 0, bounty: 0, qm: 0 }, terr: {},
    cal: { n: 0, last: null }, login: { streak: 0, last: null, freezes: 1, best: 0, frozeOn: null },
    season: { id: null, xp: 0, claimed: {} }, con: { d: null, w: null, dl: [], wl: [] },
    mast: { target: {}, terrain: {}, claimed: {} }, pb: {}, coll: {}, ta: { best: 0 }
  });
  function L() {
    const P = META.P;
    if (!P.lv) P.lv = DEF();
    const d = DEF(); for (const k in d) if (P.lv[k] == null) P.lv[k] = d[k];
    for (const k of ['keys', 'upg', 'cal', 'login', 'season', 'con', 'mast']) { const o = P.lv[k]; for (const j in d[k]) if (o[j] == null) o[j] = d[k][j]; } // in place: never orphan references
    return P.lv;
  }
  L();
  const save = () => META.save();

  // ---------- $ economy ----------
  const SHELL_COST = 60;
  const UPG = {
    logi: { max: 3, cost: [3000, 6000, 12000] },   // shell cost −10 % per level
    bounty: { max: 3, cost: [4000, 8000, 16000] }, // kill payouts +10 % per level
    qm: { max: 2, cost: [5000, 10000] }            // duplicate → $ +25 % per level
  };
  const TERRAIN_PRICE = { desert: 5000, forest: 8000, winter: 12000 };
  const KEY_PRICE = { supply: 2500, elite: 7500 };
  const FREEZE_PRICE = 3000, FREEZE_MAX = 2;
  const shellCost = () => Math.round(SHELL_COST * (1 - 0.1 * L().upg.logi));
  const dupeMult = () => 1 + 0.25 * L().upg.qm;
  function addCash(n, earned) { const l = L(); l.cash = Math.max(0, Math.round(l.cash + n)); if (earned && n > 0) { l.earned += n; ev('cash', n); } save(); return l.cash; }
  // pay for a shell; when broke the shell is free (training is never blocked) → returns cost actually paid
  function payShell() { const c = shellCost(), l = L(); if (l.cash < c) return 0; l.cash -= c; save(); return c; }
  // kill payout breakdown (all integers, shown as +$ popups)
  function killPay(o) {
    const b = 1 + 0.1 * L().upg.bounty, parts = [];
    parts.push(['kill', 250]);
    if (o.direct) parts.push(['direct', 150]);
    if (o.first) parts.push(['first', 150]);
    if (o.streak > 1) parts.push(['streak', 50 * Math.min(5, o.streak - 1)]);
    if (o.moving) parts.push(['moving', 100]);
    if (o.long) parts.push(['long', 100]);
    const total = Math.round(parts.reduce((a, p) => a + p[1], 0) * b);
    return { total, parts };
  }
  function buyUpg(id) { const u = UPG[id], l = L(), lv = l.upg[id]; if (!u || lv >= u.max || l.cash < u.cost[lv]) return false; l.cash -= u.cost[lv]; l.upg[id]++; save(); return true; }
  function buyTerrain(id) { const pr = TERRAIN_PRICE[id], l = L(); if (!pr || l.terr[id] || META.unlocked('terrain', id) || l.cash < pr) return false; l.cash -= pr; l.terr[id] = Date.now(); save(); return true; }
  function buyKey(id) { const pr = KEY_PRICE[id], l = L(); if (!pr || l.cash < pr) return false; l.cash -= pr; l.keys[id]++; save(); return true; }
  function buyFreeze() { const l = L(); if (l.login.freezes >= FREEZE_MAX || l.cash < FREEZE_PRICE) return false; l.cash -= FREEZE_PRICE; l.login.freezes++; save(); return true; }

  // generic reward: {cash, keys:{supply:1}, item:{kind,id}, xp} – in-game only
  function grant(r) {
    if (!r) return; const l = L();
    if (r.cash) l.cash += r.cash, l.earned += r.cash;
    if (r.keys) for (const k in r.keys) l.keys[k] = (l.keys[k] || 0) + r.keys[k];
    if (r.item) META.P.inv[r.item.kind + ':' + r.item.id] = Date.now();
    if (r.freeze) l.login.freezes = Math.min(FREEZE_MAX, l.login.freezes + r.freeze);
    save();
    if (r.xp) MT.live._pendingUps = (MT.live._pendingUps || []).concat(META.addXP(r.xp));
  }

  // ---------- days ----------
  const dk = d => META.dailyKey(d);
  const yesterday = () => dk(new Date(Date.now() - 864e5));
  const dayBefore = () => dk(new Date(Date.now() - 2 * 864e5));
  function weekKey(d) { d = d || new Date(); const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate())); const day = t.getUTCDay() || 7; t.setUTCDate(t.getUTCDate() + 4 - day); const y0 = new Date(Date.UTC(t.getUTCFullYear(), 0, 1)); return t.getUTCFullYear() + 'W' + pad(Math.ceil(((t - y0) / 864e5 + 1) / 7)); }
  function msToWeekEnd() { const n = new Date(), day = n.getUTCDay() || 7; return Date.UTC(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate() + (8 - day)) - n.getTime(); }

  // ---------- login streak + freeze ----------
  // called once per app start / home visit; returns {changed, froze, lost}
  function touchLogin() {
    const g = L().login, k = dk(); if (g.last === k) return { changed: false };
    let froze = false, lost = 0;
    if (g.last === yesterday()) g.streak++;
    else if (g.last === dayBefore() && g.freezes > 0) { g.freezes--; g.streak++; froze = true; g.frozeOn = yesterday(); }
    else { lost = g.streak; g.streak = 1; }
    g.last = k; g.best = Math.max(g.best, g.streak);
    if (g.streak > 1 && g.streak % 7 === 0) g.freezes = Math.min(FREEZE_MAX, g.freezes + 1);
    save(); return { changed: true, froze, lost: lost > 1 ? lost : 0 };
  }

  // ---------- 7-day reward calendar ----------
  const CAL = [{ cash: 500 }, { keys: { supply: 1 } }, { cash: 1000 }, { cash: 1500 }, { keys: { elite: 1 } }, { cash: 2500 }, { keys: { legendary: 1 }, cash: 7500 }];
  const calIndex = () => L().cal.n % 7;
  const calCanClaim = () => L().cal.last !== dk();
  function calClaim() { const c = L().cal; if (!calCanClaim()) return null; const i = c.n % 7, r = CAL[i]; c.n++; c.last = dk(); grant(r); return { i, r }; }

  // ---------- weekend event ----------
  function weekend(d) { d = d || new Date(); const w = d.getDay(); return w === 0 || w === 6; } // local Sat/Sun
  const xpMult = () => weekend() ? 2 : 1;

  // ---------- season pass (30 tiers, free track only – there is no paid track) ----------
  function seasonInfo(d) {
    d = d || new Date(); const y = d.getUTCFullYear(), q = Math.floor(d.getUTCMonth() / 3);
    const start = Date.UTC(y, q * 3, 1), end = Date.UTC(y, q * 3 + 3, 1);
    return { id: `${y}Q${q + 1}`, no: (y - 2026) * 4 + q - 2, start, end, msLeft: end - d.getTime() };
  }
  const TIER_XP = 500, TIERS = 30;
  function seasonTierReward(n) { // n = 1..30
    if (n === 30) return { keys: { legendary: 1 }, cash: 10000, item: { kind: 'tint', id: 'ironsight' } };
    if (n === 15) return { item: { kind: 'reticle', id: 'iron' }, cash: 3000 };
    if (n % 10 === 0) return { keys: { legendary: 1 } };
    if (n % 5 === 0) return { keys: { elite: 1 }, cash: 1500 };
    if (n % 3 === 0) return { keys: { supply: 1 } };
    if (n % 4 === 0) return { cash: 1500 };
    return { cash: 600 + n * 40 };
  }
  function season() {
    const s = L().season, inf = seasonInfo();
    if (s.id !== inf.id) { s.id = inf.id; s.xp = 0; s.claimed = {}; save(); }
    const tier = Math.min(TIERS, Math.floor(s.xp / TIER_XP));
    return Object.assign(inf, { xp: s.xp, tier, frac: tier >= TIERS ? 1 : (s.xp % TIER_XP) / TIER_XP, claimed: s.claimed });
  }
  function seasonAdd(xp) { season(); L().season.xp += Math.max(0, Math.round(xp)); save(); }
  function seasonClaim(n) { const s = season(); if (n > s.tier || s.claimed[n]) return null; L().season.claimed[n] = 1; const r = seasonTierReward(n); grant(r); return r; }
  const seasonUnclaimed = () => { const s = season(); let c = 0; for (let n = 1; n <= s.tier; n++) if (!s.claimed[n]) c++; return c; };

  // ---------- contracts ----------
  // type → [dailyGoal, weeklyGoal]
  const CTYPES = {
    kills: [8, 50], first: [3, 15], direct: [2, 10], long: [2, 10], moving: [2, 8], streak: [3, 6],
    cash: [3000, 25000], stars: [3, 9], daily: [1, 5], ta: [1500, 4], endless: [8, 20], games: [3, 15]
  };
  const DAILY_POOL = ['kills', 'first', 'direct', 'long', 'moving', 'streak', 'cash', 'stars', 'daily', 'ta', 'endless', 'games'];
  const WEEKLY_POOL = ['kills', 'first', 'direct', 'long', 'moving', 'cash', 'stars', 'daily', 'ta', 'games'];
  const C_REWARD = { d: { cash: 750, sxp: 150 }, w: { cash: 4000, keys: { elite: 1 }, sxp: 600 } };
  function pick3(pool, seed) { const r = MT.terrain.mulberry32(seed), a = pool.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a.slice(0, 3); }
  function contracts() {
    const c = L().con, d = dk(), w = weekKey();
    if (c.d !== d) { c.d = d; c.dl = pick3(DAILY_POOL, META.hashStr('c-d-' + d)).map(id => ({ id, n: 0, g: CTYPES[id][0], done: 0 })); save(); }
    if (c.w !== w) { c.w = w; c.wl = pick3(WEEKLY_POOL, META.hashStr('c-w-' + w)).map(id => ({ id, n: 0, g: CTYPES[id][1], done: 0 })); save(); }
    return c;
  }
  // progress event. 'max' types (streak, endless, ta score) take the best value instead of summing
  const MAXT = { streak: 1, endless: 1 };
  const listeners = [];
  function ev(type, n) {
    n = n || 1; const c = contracts(); let fin = [];
    for (const [arr, kind] of [[c.dl, 'd'], [c.wl, 'w']]) for (const x of arr) {
      if (x.id !== type || x.n >= x.g) continue;
      // weekly "ta" = number of time-attack runs; daily "ta" = best time-attack score
      if (type === 'ta') { if (kind === 'd') x.n = Math.max(x.n, n); else x.n += 1; }
      else if (MAXT[type] && kind === 'd') x.n = Math.max(x.n, n);
      else if (MAXT[type]) x.n = Math.max(x.n, n);
      else x.n += n;
      x.n = Math.min(x.n, x.g);
      if (x.n >= x.g) fin.push({ kind, id: x.id });
    }
    save(); fin.forEach(f => listeners.forEach(fn => fn('contract', f)));
  }
  function conClaim(kind, i) {
    const c = contracts(), x = (kind === 'd' ? c.dl : c.wl)[i]; if (!x || x.n < x.g || x.done) return null;
    x.done = 1; const r = C_REWARD[kind]; grant({ cash: r.cash, keys: r.keys }); seasonAdd(r.sxp); return r;
  }
  const conReady = () => { const c = contracts(); return c.dl.concat(c.wl).filter(x => x.n >= x.g && !x.done).length; };

  // ---------- mastery (per target type and per terrain) ----------
  const MLV = [5, 15, 40, 100], MREW = [500, 1500, 4000, 10000];
  function mastery(kind, id) { const n = (L().mast[kind][id] || 0); let lv = 0; while (lv < 4 && n >= MLV[lv]) lv++; return { n, lv, next: MLV[lv] || null, prev: lv ? MLV[lv - 1] : 0 }; }
  function addKill(type, biome) {
    const m = L().mast, ups = [];
    for (const [kind, id] of [['target', type], ['terrain', biome]]) {
      const before = mastery(kind, id).lv; m[kind][id] = (m[kind][id] || 0) + 1; const after = mastery(kind, id).lv;
      if (after > before) { L().cash += MREW[after - 1]; ups.push({ kind, id, lv: after, cash: MREW[after - 1] }); }
    }
    save(); return ups;
  }

  // ---------- collection book ----------
  const COLL_MS = [25, 50, 75, 100], COLL_REW = [{ cash: 2000 }, { keys: { elite: 1 } }, { keys: { legendary: 1 } }, { cash: 20000 }];
  function collection() {
    const all = META.CRATE_ITEMS.concat(META.SEASON_ITEMS), own = all.filter(i => META.owned(i.kind, i.id)).length;
    const pct = Math.round(own / all.length * 100);
    return { all, own, pct, ms: COLL_MS.map((p, i) => ({ p, r: COLL_REW[i], ok: pct >= p, claimed: !!L().coll[p] })) };
  }
  function collClaim(p) { const c = collection(), m = c.ms.find(x => x.p === p); if (!m || !m.ok || m.claimed) return null; L().coll[p] = 1; grant(m.r); return m.r; }

  // ---------- personal best ghost ----------
  function pbKey(cfg) { return cfg.mode === 'free' ? 'free_' + cfg.diff : cfg.mode === 'mission' ? 'm' + cfg.m.id : cfg.mode; }
  const pbGet = cfg => L().pb[pbKey(cfg)] || null;
  function pbRecord(cfg, score, cum) { const k = pbKey(cfg), p = L().pb[k]; if (!p || score > p.s) { L().pb[k] = { s: score, cum: cum.slice(0, 60), t: Date.now() }; save(); return true; } return false; }

  // ---------- ui badge count for the home screen ----------
  const notif = () => { const o = { cal: calCanClaim() ? 1 : 0, con: conReady(), season: seasonUnclaimed(), coll: collection().ms.filter(m => m.ok && !m.claimed).length }; o.total = o.cal + o.con + o.season + o.coll; return o; };
  const keyCount = () => { const k = L().keys; return (k.supply || 0) + (k.elite || 0) + (k.legendary || 0); };

  MT.live = {
    get L() { return L(); }, SHELL_COST, UPG, TERRAIN_PRICE, KEY_PRICE, FREEZE_PRICE, FREEZE_MAX,
    shellCost, dupeMult, addCash, payShell, killPay, buyUpg, buyTerrain, buyKey, buyFreeze, grant,
    touchLogin, CAL, calIndex, calCanClaim, calClaim, weekend, xpMult,
    season, seasonInfo, seasonAdd, seasonClaim, seasonTierReward, seasonUnclaimed, TIER_XP, TIERS,
    contracts, ev, conClaim, conReady, C_REWARD, weekKey, msToWeekEnd,
    mastery, addKill, MLV, MREW, collection, collClaim, pbKey, pbGet, pbRecord, notif, keyCount, MAXT,
    on(fn) { listeners.push(fn); }
  };
})(window.MT = window.MT || {});

/* ---- monetize.js ---- */
/* Mortar Trainer · ad hooks. There are NO real-money purchases of any kind (no premium currency, no packs,
 * no paid pass, no donations) – since v1.2.0. Ads are OFF by default (standalone build); the oiotv.de play page
 * switches them on with Google's H5 Games Ads (Ad Placement API: adBreak/adConfig). See site-integration/MONETIZATION.md.
 *
 *   window.MT_MONETIZE = { ads: true, rewarded: true, h5: true }   // + adsbygoogle.js and the adBreak/adConfig shim
 *   or a custom provider: { ads, rewarded, provider: { rewarded: fn, interstitial: fn } } (fn(placement) → Promise<boolean>)
 *
 * Rewards from optional ads are convenience only (double XP + bonus $ after a game, one extra shell when a target's
 * shells are used up). Rewarded buttons are only shown once an ad is actually available; if the ad script is
 * missing, blocked or has no fill, nothing is shown and the game simply continues (no errors, no dead buttons). */
(function (MT) {
  'use strict';
  const ext = window.MT_MONETIZE || {};
  const DEV = /[?&]mtdev=1\b/.test(location.search); // dev stub mode: ?mtdev=1 turns the ad hooks on with instant fake rewards
  const H5 = !!ext.h5 && !DEV;
  const cfg = {
    ads: !!ext.ads || DEV,            // master switch for interstitials
    rewarded: !!ext.rewarded || DEV,  // optional "watch ad" buttons (only visible when an ad is ready)
    h5: H5,
    interstitialEveryN: ext.interstitialEveryN || 3, // frequency cap: at most every Nth round transition …
    interstitialMinGapMs: ext.interstitialMinGapMs || 180000 // … and at least 3 min apart (Google applies its own cap too)
  };
  // ---- DEV STUB provider (clearly fake, resolves immediately). ----
  const stub = {
    rewarded: (placement) => { console.info('[MT ads DEV STUB] rewarded:', placement); return Promise.resolve(true); },
    interstitial: (placement) => { console.info('[MT ads DEV STUB] interstitial:', placement); return Promise.resolve(true); }
  };
  const duck = on => { try { MT.audio && MT.audio.duck && MT.audio.duck(on); } catch (e) {} };
  // ---- Google H5 Games Ads (Ad Placement API) ----
  let h5Ready = false, pending = null;
  const callBreak = o => { try { if (typeof window.adBreak !== 'function') return false; window.adBreak(o); return true; } catch (e) { return false; } };
  if (H5 && typeof window.adConfig === 'function') {
    try { window.adConfig({ preloadAdBreaks: 'on', sound: 'on', onReady: () => { h5Ready = true; } }); } catch (e) {}
  }
  const h5 = {
    interstitial: (placement) => new Promise(res => {
      if (!h5Ready) return res(false);
      let started = false, done = false;
      const fin = v => { if (!done) { done = true; duck(false); res(v); } };
      const ok = callBreak({ type: 'next', name: placement, beforeAd() { started = true; duck(true); }, afterAd() { duck(false); },
        adBreakDone(i) { fin(!!i && i.breakStatus === 'viewed'); } });
      if (!ok) return fin(false);
      setTimeout(() => { if (!started) fin(false); }, 1500); // no ad decided quickly → just continue
    }),
    // asks Google whether a rewarded ad is available; resolves true only then (the button is shown afterwards)
    offer: (placement) => new Promise(res => {
      if (!h5Ready) return res(false);
      let answered = false; const ans = v => { if (!answered) { answered = true; res(v); } };
      const slot = { placement, show: null, result: false, cb: null };
      const ok = callBreak({ type: 'reward', name: placement,
        beforeAd() { duck(true); }, afterAd() { duck(false); },
        beforeReward(showAdFn) { slot.show = showAdFn; pending = slot; ans(true); },
        adDismissed() { slot.result = false; }, adViewed() { slot.result = true; },
        adBreakDone() { duck(false); if (pending === slot) pending = null; ans(false); const cb = slot.cb; slot.cb = null; if (cb) cb(!!slot.result); } });
      if (!ok) return ans(false);
      setTimeout(() => ans(false), 2500);
    }),
    show: (placement) => new Promise(res => {
      const s = pending;
      if (!s || s.placement !== placement || !s.show) return res(false);
      pending = null; s.cb = res;
      try { s.show(); } catch (e) { s.cb = null; duck(false); res(false); }
    })
  };
  const provider = Object.assign({}, DEV ? stub : {}, H5 ? { interstitial: h5.interstitial } : {}, ext.provider || {});
  let transitions = 0, lastInter = 0;
  MT.monetize = Object.assign(cfg, {
    // resolves true when a rewarded ad can be shown for this placement right now
    offerRewarded(placement) {
      if (!cfg.rewarded) return Promise.resolve(false);
      if (H5 && !(ext.provider && ext.provider.rewarded)) return h5.offer(placement);
      return Promise.resolve(!!provider.rewarded);
    },
    showRewarded(placement) {
      if (!cfg.rewarded) return Promise.resolve(false);
      if (H5 && !(ext.provider && ext.provider.rewarded)) return h5.show(placement);
      if (!provider.rewarded) return Promise.resolve(false);
      MT.audio && MT.audio.ambienceStop && MT.audio.ambienceStop();
      return Promise.resolve().then(() => provider.rewarded(placement)).then(ok => !!ok).catch(() => false);
    },
    // only called between rounds/missions (never during gameplay, never in the ranked daily), frequency-capped
    interstitial(placement) {
      transitions++;
      if (!cfg.ads || !provider.interstitial) return Promise.resolve(false);
      if (transitions % cfg.interstitialEveryN !== 0 || Date.now() - lastInter < cfg.interstitialMinGapMs) return Promise.resolve(false);
      lastInter = Date.now();
      return Promise.resolve().then(() => provider.interstitial(placement)).then(v => !!v).catch(() => false);
    }
  });
})(window.MT = window.MT || {});

/* ---- live_ui.js ---- */
/* Mortar Trainer · screens for the live layer: reward calendar, contracts, season pass, collection book,
 * mastery panel and the $ armory tab (upgrades / terrains / keys / streak freeze). Pure DOM strings, self-made SVG. */
(function (MT) {
  'use strict';
  const t = (k, v) => MT.t(k, v), META = MT.meta, LV = MT.live;
  let H = null; // helpers from game.js
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fc = n => Math.round(n).toLocaleString('en-US');
  const KEYC = { supply: '#a39770', elite: '#f59e0b', legendary: '#fde047' };
  const keySvg = (id, s) => `<svg class="key-svg" viewBox="0 0 24 24" width="${s || 16}" height="${s || 16}"><circle cx="7" cy="12" r="4.5" fill="none" stroke="${KEYC[id]}" stroke-width="2.6"/><path d="M11 12h11M18 12v4M21 12v3" stroke="${KEYC[id]}" stroke-width="2.6" stroke-linecap="round"/></svg>`;
  function chips(r) {
    if (!r) return ''; let h = '';
    if (r.cash) h += `<span class="rw cash">$${fc(r.cash)}</span>`;
    if (r.keys) for (const k in r.keys) h += `<span class="rw key">${keySvg(k, 14)}${r.keys[k] > 1 ? r.keys[k] + '× ' : ''}${t('key_' + k)}</span>`;
    if (r.item) h += `<span class="rw item r-${(META.crateItem(r.item.kind, r.item.id) || {}).rar || 'epic'}">★ ${esc(t(r.item.kind + '_' + r.item.id))}</span>`;
    if (r.sxp) h += `<span class="rw sxp">+${r.sxp} SXP</span>`;
    return h;
  }
  const bar = (f, cls) => `<div class="pbar ${cls || ''}"><i style="width:${Math.max(0, Math.min(100, f * 100)).toFixed(1)}%"></i></div>`;
  const back = () => `<button class="back" data-go="home" aria-label="${t('back')}">‹ ${t('back')}</button>`;
  const dhm = ms => { const d = Math.floor(ms / 864e5), h = Math.floor(ms % 864e5 / 36e5), m = Math.floor(ms % 36e5 / 6e4); return d ? `${d}d ${h}h` : `${h}h ${m}m`; };

  function calendar() {
    const L = LV.L, idx = LV.calIndex(), can = LV.calCanClaim(), g = L.login;
    let h = `${back()}<h2 class="scr-t">${t('calendar')}</h2>`;
    h += `<div class="streak-box"><div><b class="big">🔥 ${g.streak}</b><small>${t('loginStreak')} · ${t('best')} ${g.best}</small></div><div class="frz">${[0, 1].map(i => `<span class="ice${i < g.freezes ? ' on' : ''}">❄</span>`).join('')}<small>${t('freezes', { n: g.freezes })}</small></div></div>`;
    h += `<p class="fine" style="text-align:left;margin:4px 0 10px">${t('freezeInfo')}</p><div class="cal-grid">`;
    LV.CAL.forEach((r, i) => {
      h += `<div class="cal-d${i < idx ? ' got' : ''}${i === idx && can ? ' today' : ''}${i === 6 ? ' d7' : ''}"><small>${t('dayN', { n: i + 1 })}</small><div class="cal-r">${chips(r)}</div>${i < idx ? '<em class="tick">✔</em>' : ''}</div>`;
    });
    h += `</div>`;
    h += can ? `<button class="btn-big glow" data-lv="calClaim">${t('claimDay', { n: idx + 1 })}</button>` : `<div class="cal-wait">${t('calBack')} <b data-countdown>--:--:--</b></div>`;
    h += `<button class="btn-ghost wide" data-lv="freeze" ${g.freezes >= LV.FREEZE_MAX || L.cash < LV.FREEZE_PRICE ? 'disabled' : ''}>❄ ${t('buyFreeze')} · $${fc(LV.FREEZE_PRICE)}</button>`;
    return h;
  }
  function conCard(x, kind, i) {
    const ok = x.n >= x.g, r = LV.C_REWARD[kind];
    const num = x.id === 'cash' ? `$${fc(x.n)} / $${fc(x.g)}` : `${fc(x.n)} / ${fc(x.g)}`;
    return `<div class="con${x.done ? ' done' : ok ? ' ready' : ''}"><div class="con-t"><b>${esc(t('con_' + x.id + (kind === 'w' && x.id === 'ta' ? 'W' : ''), { g: x.id === 'cash' ? '$' + fc(x.g) : x.g }))}</b><small>${num}</small></div>${bar(x.n / x.g, ok ? 'ok' : '')}<div class="con-f"><span>${chips({ cash: r.cash, keys: r.keys, sxp: r.sxp })}</span>${x.done ? `<em>✔ ${t('claimed')}</em>` : `<button class="claim" data-lv="con" data-k="${kind}" data-i="${i}" ${ok ? '' : 'disabled'}>${t('claim')}</button>`}</div></div>`;
  }
  function contracts() {
    const c = LV.contracts();
    let h = `${back()}<h2 class="scr-t">${t('contracts')}</h2>`;
    h += `<div class="con-h"><b>${t('dailyCon')}</b><small>${t('resetsIn')} <span data-countdown>--:--:--</span></small></div>` + c.dl.map((x, i) => conCard(x, 'd', i)).join('');
    h += `<div class="con-h"><b>${t('weeklyCon')}</b><small>${t('resetsIn')} ${dhm(LV.msToWeekEnd())}</small></div>` + c.wl.map((x, i) => conCard(x, 'w', i)).join('');
    if (LV.weekend()) h += `<div class="wk-banner">⚡ ${t('weekendOn')} <small>${t('weekendSub')}</small></div>`;
    return h;
  }
  function season() {
    const s = LV.season();
    let h = `${back()}<h2 class="scr-t">${t('seasonPass')} <small>${t('seasonN', { n: s.no })}</small></h2>`;
    h += `<div class="sp-head"><div class="sp-tier"><small>${t('tier')}</small><b>${s.tier}</b><small>/ ${LV.TIERS}</small></div><div style="flex:1">${bar(s.frac, 'hl')}<small class="xp-num">${s.tier >= LV.TIERS ? 'MAX' : `${s.xp % LV.TIER_XP} / ${LV.TIER_XP} SXP`} · ${t('seasonEnds', { d: dhm(s.msLeft) })}</small></div></div>`;
    h += `<p class="fine" style="text-align:left;margin:6px 0 10px">${t('seasonInfo')}${LV.weekend() ? ' · ⚡ ' + t('weekendOn') : ''}</p>`;
    h += `<div class="sp-list">`;
    for (let n = 1; n <= LV.TIERS; n++) {
      const r = LV.seasonTierReward(n), got = s.claimed[n], open = n <= s.tier, big = n % 5 === 0;
      h += `<div class="sp-row${open ? ' open' : ''}${got ? ' got' : ''}${big ? ' big' : ''}${n === s.tier + 1 ? ' cur' : ''}"><span class="sp-n">${n}</span><span class="sp-free">${chips(r)}${got ? '<em>✔</em>' : open ? `<button class="claim" data-lv="season" data-n="${n}">${t('claim')}</button>` : '<i class="lock">🔒</i>'}</span></div>`;
    }
    h += `</div><p class="legal">${t('seasonFree')}</p>`;
    return h;
  }
  function collection() {
    const c = LV.collection(), C = 2 * Math.PI * 34;
    let h = `${back()}<h2 class="scr-t">${t('collection')}</h2>`;
    h += `<div class="coll-head"><svg viewBox="0 0 80 80" width="88" height="88"><circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="8"/><circle cx="40" cy="40" r="34" fill="none" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" stroke-dasharray="${(C * c.pct / 100).toFixed(1)} ${C.toFixed(1)}" transform="rotate(-90 40 40)"/><text x="40" y="46" text-anchor="middle" fill="#fff" font-size="17" font-weight="900">${c.pct}%</text></svg><div class="coll-rar">`;
    META.RAR.forEach(r => { const all = c.all.filter(i => i.rar === r), own = all.filter(i => META.owned(i.kind, i.id)).length; h += `<div><span class="r-${r}">${t('rar_' + r)}</span>${bar(own / all.length, 'r-' + r)}<small>${own}/${all.length}</small></div>`; });
    h += `</div></div><div class="coll-ms">`;
    c.ms.forEach(m => { h += `<div class="cm${m.claimed ? ' got' : m.ok ? ' ready' : ''}"><b>${m.p}%</b><span>${chips(m.r)}</span>${m.claimed ? '<em>✔</em>' : `<button class="claim" data-lv="coll" data-p="${m.p}" ${m.ok ? '' : 'disabled'}>${t('claim')}</button>`}</div>`; });
    h += `</div>`;
    for (const kind of ['reticle', 'tint', 'style']) {
      const items = c.all.filter(i => i.kind === kind); if (!items.length) continue;
      h += `<h3 class="sub-t">${t('u_' + kind)} <small>${items.filter(i => META.owned(i.kind, i.id)).length}/${items.length}</small></h3><div class="book">`;
      items.forEach(i => { const own = META.owned(i.kind, i.id); h += `<div class="bk r-${i.rar}${own ? ' own' : ''}"><span class="bk-ic">${own ? (kind === 'reticle' ? `<span class="sw sw-${i.id}"></span>` : kind === 'tint' ? `<span class="tn tn-${i.id}"></span>` : '◎') : '?'}</span><b>${own ? esc(t(i.kind + '_' + i.id)) : '???'}</b><small>${t('rar_' + i.rar)} · ${i.season ? t('srcSeason') : t('srcCrate')}</small></div>`; });
      h += `</div>`;
    }
    return h;
  }
  function masteryHtml() {
    const roman = ['–', 'I', 'II', 'III', 'IV'];
    const row = (kind, id, name) => { const m = LV.mastery(kind, id); const f = m.next ? (m.n - m.prev) / (m.next - m.prev) : 1; return `<div class="ma"><span class="ma-l lv${m.lv}">${roman[m.lv]}</span><div><b>${esc(name)}</b>${bar(f, 'hl')}<small>${m.next ? `${m.n}/${m.next} · ${t('next')}: $${fc(LV.MREW[m.lv])}` : `${m.n} · MAX`}</small></div></div>`; };
    let h = `<h3 class="sub-t">${t('mastery')}</h3><p class="fine" style="text-align:left;margin:0 0 8px">${t('masteryInfo')}</p><div class="pick-l">${t('masteryTargets')}</div><div class="ma-grid">`;
    ['bunker', 'mg', 'mortar', 'squad', 'truck', 'apc', 'sniper', 'artillery', 'convoy'].forEach(id => { h += row('target', id, t('t_' + id)); });
    h += `</div><div class="pick-l">${t('masteryTerrain')}</div><div class="ma-grid">`;
    ['grass', 'desert', 'forest', 'winter'].forEach(id => { h += row('terrain', id, t('terrain_' + id)); });
    return h + '</div>';
  }
  function armoryHtml() {
    const L = LV.L; let h = `<h3 class="sub-t">${t('upgrades')}</h3><div class="upg-list">`;
    for (const id in LV.UPG) {
      const u = LV.UPG[id], lv = L.upg[id], max = lv >= u.max, pr = u.cost[lv];
      h += `<div class="upg"><div><b>${t('upg_' + id)}</b><small>${t('upgd_' + id)}</small><span class="pips">${[...Array(u.max)].map((_, i) => `<i class="${i < lv ? 'on' : ''}"></i>`).join('')}</span></div><button class="buy cash" data-lv="upg" data-id="${id}" ${max || L.cash < pr ? 'disabled' : ''}>${max ? 'MAX' : '$' + fc(pr)}</button></div>`;
    }
    h += `</div><p class="fine" style="text-align:left;margin:4px 0 0">${t('shellCostNow', { c: LV.shellCost() })}</p><h3 class="sub-t">${t('keysT')}</h3><div class="upg-list">`;
    for (const id of ['supply', 'elite', 'legendary']) {
      const pr = LV.KEY_PRICE[id];
      h += `<div class="upg"><div><b>${keySvg(id, 18)} ${t('key_' + id)} <small>×${L.keys[id] || 0}</small></b><small>${t('keyd_' + id)}</small></div>${pr ? `<button class="buy cash" data-lv="key" data-id="${id}" ${L.cash < pr ? 'disabled' : ''}>$${fc(pr)}</button>` : `<span class="fine">${t('keyEarnOnly')}</span>`}</div>`;
    }
    h += `</div><h3 class="sub-t">${t('terrainsT')}</h3><div class="upg-list">`;
    for (const id in LV.TERRAIN_PRICE) {
      const own = META.unlocked('terrain', id), pr = LV.TERRAIN_PRICE[id];
      h += `<div class="upg"><div><b>${t('terrain_' + id)}</b><small>${own ? t('owned') : t('terrainBuy')}</small></div>${own ? '<em class="okm">✔</em>' : `<button class="buy cash" data-lv="terr" data-id="${id}" ${L.cash < pr ? 'disabled' : ''}>$${fc(pr)}</button>`}</div>`;
    }
    h += `</div><h3 class="sub-t">${t('earnCash')}</h3><p class="fine" style="text-align:left;margin:0">${t('earnCashTxt', { s: LV.shellCost() })}</p>`;
    return h;
  }
  function wire(root) {
    root.querySelectorAll('[data-lv]').forEach(b => b.onclick = () => {
      const a = b.dataset.lv; let r = null, ok = false; MT.audio.unlock();
      if (a === 'calClaim') { r = LV.calClaim(); if (r) { H.reward(r.r, r.i === 6 ? 'legendary' : 'rare'); } }
      else if (a === 'con') { r = LV.conClaim(b.dataset.k, +b.dataset.i); if (r) H.reward({ cash: r.cash, keys: r.keys, sxp: r.sxp }, b.dataset.k === 'w' ? 'epic' : 'common'); }
      else if (a === 'season') { r = LV.seasonClaim(+b.dataset.n); if (r) H.reward(r, +b.dataset.n % 5 === 0 ? 'epic' : 'common'); }
      else if (a === 'coll') { r = LV.collClaim(+b.dataset.p); if (r) H.reward(r, 'legendary'); }
      else if (a === 'upg') ok = LV.buyUpg(b.dataset.id);
      else if (a === 'key') ok = LV.buyKey(b.dataset.id);
      else if (a === 'terr') ok = LV.buyTerrain(b.dataset.id);
      else if (a === 'freeze') ok = LV.buyFreeze();
      if (ok) { MT.audio.cash(); H.toast(t('bought')); }
      if (r || ok) { META.save(); H.rerender(); } else MT.audio.click();
    });
  }
  const VIEWS = { calendar, contracts, season, collection };
  MT.liveUI = { init(h) { H = h; }, has: v => !!VIEWS[v], render: v => VIEWS[v](), wire, chips, keySvg, masteryHtml, armoryHtml, bar };
})(window.MT = window.MT || {});

/* ---- game.js ---- */
/* Mortar Trainer · game flow, modes (daily / missions / endless / free practice), scoring, juice, screens */
(function (MT) {
  'use strict';
  const $ = id => document.getElementById(id);
  const t = MT.t, B = MT.ballistics, A = MT.audio, META = MT.meta;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const SHELLS = 3;
  const DIFF_MULT = { rekrut: 1, soldat: 1.5, veteran: 2 };
  const SHOT_MULT = [1.5, 1, 0.6, 0.5, 0.4, 0.4, 0.3, 0.3, 0.3];
  // HARD scoring: a kill needs a near-perfect hit. Kill radius per mode, 'close' up to 10 m, beyond = miss (0 pts).
  const KILL_R = { rekrut: 6, soldat: 4, veteran: 3 }, CLOSE_R = 10, FIRST_BONUS = 200;
  const basePts = d => Math.round(100 * Math.pow(2, -d / 2)); // 0 m → 100, 2 m → 50, 4 m → 25, 6 m → 13, 10 m → 3
  const streakMult = s => s >= 5 ? 3 : s >= 3 ? 2 : s >= 2 ? 1.5 : 1;
  function grade(d) {
    const kr = st.cfg.kr;
    if (d <= Math.min(1.5, kr * 0.4)) return { k: 'direct', kill: true, pts: basePts(d) };
    if (d <= kr) return { k: 'hit', kill: true, pts: basePts(d) };
    if (d <= CLOSE_R) return { k: 'near', kill: false, pts: basePts(d) };
    return { k: 'miss', kill: false, pts: 0 };
  }
  const fmtDir = d => (Math.round((((d % 360) + 360) % 360) * 10) / 10 % 360).toFixed(1).padStart(5, '0');
  const BASE_TYPES = ['apc', 'truck', 'squad', 'bunker', 'mg', 'mortar'];
  const MOVERS = ['apc', 'truck', 'squad', 'convoy'];
  const SPEED = { squad: 1.5, apc: 2.8, truck: 3.2, convoy: 3 };
  const BIOMES = ['grass', 'desert', 'forest', 'winter'];

  const st = MT.state = { cfg: { mode: 'free', kr: 4, rounds: 5 }, diff: 'soldat', phase: 'menu', dir: 0, range: 400, dirVis: 0, milVis: 520, craters: [], round: 0, score: 0, streak: 0, bestStreak: 0, shellsLeft: SHELLS, shot: 0, marker: null, results: [], target: null, rows: [] };
  try { const d = localStorage.getItem('mt_diff'); if (d && DIFF_MULT[d]) st.diff = d; } catch (e) {}
  const P = () => META.P;

  // ---------- world ----------
  function newWorld(seed, biome) {
    st.seed = seed != null ? seed : (Math.random() * 1e9) | 0;
    st.T = MT.terrain.generate(st.seed, biome || 'grass');
    st.own = st.T.own;
    st.base = MT.terrain.bake(st.T, Math.min(2, Math.max(1.2, (window.devicePixelRatio || 1) * 1.1)));
    st.craters = []; st.lastImpact = null;
    MT.scene.buildStrips();
  }
  const okPos = (x, y) => !(x < 50 || y < 50 || x > 1350 || y > 1350 || st.T.distToRiver(x, y) < 24);
  function place(d, b) {
    for (let k = 0; k < 80; k++) { // deterministic nudge if the spot is unusable
      const bb = b + (k % 2 ? 1 : -1) * Math.ceil(k / 2) * 6, dd = clamp(d + (k > 40 ? (k % 3 - 1) * 30 : 0), 140, 670);
      const x = st.own.x + dd * Math.sin(bb * Math.PI / 180), y = st.own.y - dd * Math.cos(bb * Math.PI / 180);
      if (okPos(x, y)) return { x, y, bearing: bb };
    }
    return { x: st.own.x + 250, y: st.own.y - 200, bearing: 51 };
  }
  function mkTarget(type, p, speed, R) { return { x: p.x, y: p.y, type, bearing: p.bearing, heading: R() * 6.28, speed: speed || 0, dead: false }; }
  function spawnTarget() {
    const c = st.cfg, R = st.rng;
    if (c.fixed) { const s = c.fixed[st.round - 1]; return mkTarget(s.type, place(s.d, s.b), s.mv || 0, R); }
    const prevB = st.target ? st.target.bearing : null;
    let dmin = 170, dmax = 650;
    if (c.mode === 'endless') { const k = st.kills || 0; dmin = 170; dmax = Math.min(660, 360 + k * 30); }
    for (let k = 0; k < 400; k++) {
      const d = dmin + R() * (dmax - dmin), b = R() * 360;
      if (prevB != null && Math.abs(((b - prevB + 540) % 360) - 180) < 50) continue;
      const x = st.own.x + d * Math.sin(b * Math.PI / 180), y = st.own.y - d * Math.cos(b * Math.PI / 180);
      if (!okPos(x, y)) continue;
      const moveChance = c.mode === 'endless' ? ((st.kills || 0) >= 6 ? 0.4 : 0) : c.moving ? 0.7 : 0;
      const wantMove = R() < moveChance;
      const types = wantMove ? MOVERS.filter(m => c.pool.includes(m)) : c.pool;
      const type = types[(R() * types.length) | 0];
      return mkTarget(type, { x, y, bearing: b }, wantMove ? SPEED[type] : 0, R);
    }
    return mkTarget('bunker', place(300, 56), 0, R);
  }
  function moveTarget(dt) {
    const tg = st.target; if (!tg || tg.dead || !tg.speed) return;
    tg.heading += (Math.random() - 0.5) * dt * 0.6;
    const nx = tg.x + Math.cos(tg.heading) * tg.speed * dt, ny = tg.y + Math.sin(tg.heading) * tg.speed * dt;
    const d = Math.hypot(nx - st.own.x, ny - st.own.y);
    if (d < 170 || d > 650 || !okPos(nx, ny)) { tg.heading += Math.PI * (0.6 + Math.random() * 0.6); return; }
    tg.x = nx; tg.y = ny;
  }
  const solveTo = p => B.solve(st.own.x, -st.own.y, p.x, -p.y);

  // ---------- modes ----------
  function cfgFor(mode, arg) {
    const cos = META.cos();
    if (mode === 'daily') {
      const key = META.dailyKey(), seed = META.dailySeed(key), ranked = !META.dailyDone();
      return { mode, key, seed, ranked, biome: BIOMES[META.hashStr(key) % 4], rounds: 5, shells: 3, kr: 4, mult: 1.5, hints: true, moving: false, timer: 0, pool: BASE_TYPES.concat(['sniper', 'artillery']) };
    }
    if (mode === 'mission') {
      const m = META.MISSIONS.find(x => x.id === arg);
      return { mode, m, seed: m.seed, biome: m.biome, rounds: m.tg.length, pool: [], fixed: m.tg, shells: m.shells, sharedShells: true, kr: m.kr, mult: 1.5, hints: true, timer: m.time || 0, missionTimer: !!m.time };
    }
    if (mode === 'ta') return { mode, seed: null, biome: cos.biome, rounds: Infinity, shells: 3, kr: 5, mult: 1.5, hints: true, moving: false, timer: 120, missionTimer: true, pool: META.pool() };
    if (mode === 'endless') return { mode, seed: null, biome: cos.biome, rounds: Infinity, shells: 3, kr: 5, mult: 1.5, hints: true, lives: 3, timer: 0, pool: META.pool() };
    const diff = arg || st.diff;
    return { mode: 'free', diff, seed: null, biome: cos.biome, rounds: 5, shells: 3, kr: KILL_R[diff], mult: DIFF_MULT[diff], hints: diff !== 'veteran', moving: diff === 'veteran', timer: diff === 'veteran' ? 60 : 0, pool: META.pool() };
  }

  // ---------- flow ----------
  function startGame(mode, arg) {
    A.unlock(); A.click(); A.ambienceStart();
    mode = mode || (st.cfg && st.cfg.mode) || 'free'; if (arg === undefined && st.cfg) arg = mode === 'mission' ? st.cfg.m.id : mode === 'free' ? st.cfg.diff : undefined;
    if (mode === 'free') { st.diff = arg || st.diff; try { localStorage.setItem('mt_diff', st.diff); } catch (e) {} }
    st.cfg = cfgFor(mode, arg);
    st.rng = st.cfg.seed != null ? MT.terrain.mulberry32((st.cfg.seed ^ 0x5bd1e995) >>> 0) : Math.random;
    newWorld(st.cfg.seed, st.cfg.biome);
    Object.assign(st, { round: 0, score: 0, streak: 0, bestStreak: 0, results: [], rows: [], target: null, dir: 0, range: 400, dirVis: 0, milVis: B.milsExact(400), kills: 0, lives: st.cfg.lives || 0, firsts: 0, directs: 0, shotsTotal: 0, xpGain: 0, killDists: [], timeLeft: st.cfg.timer, missionFailed: false, paused: false, taOver: false, cashEarned: 0, cashSpent: 0, cum: [], pb: MT.live.pbGet(st.cfg) });
    updateCash(); updatePb();
    st.shellsLeft = st.cfg.shells;
    $('hudTimerWrap').hidden = !st.cfg.timer;
    $('hudLivesWrap').hidden = !st.cfg.lives;
    hideAll(); updateHud(); syncControls();
    $('app').classList.add('in-game');
    let seen = false; try { seen = localStorage.getItem('mt_tut') === '1'; } catch (e) {}
    const go = () => { if (mode === 'mission') briefing(); else if (mode === 'daily' && !st.cfg.ranked) { banner(t('dailyPractice'), t('dailyPracticeSub'), 'alert', 2600); setTimeout(nextTarget, 900); } else nextTarget(); };
    if (!seen) showTut(0, go); else go();
  }
  function briefing() {
    const m = st.cfg.m;
    $('briefPanel').innerHTML = `<div class="badge">${t('mission')} ${m.id}/12</div><h2>${esc(t('ms' + m.id + 't'))}</h2><p class="brief-txt">${esc(t('ms' + m.id))}</p>
      <div class="brief-facts"><div><b>${m.tg.length}</b><small>${t('targets')}</small></div><div><b>${m.shells}</b><small>${t('shellsW')}</small></div><div><b>${m.kr} m</b><small>${t('killZone')}</small></div>${m.time ? `<div><b>${m.time}s</b><small>${t('time')}</small></div>` : ''}</div>
      <div class="brief-stars">${starRow(3, true)}<span>${t('starRule', { a: m.par[1], b: m.par[2] })}</span></div>
      <button class="btn-big" id="bGo">${t('deploy')}</button>`;
    show('ovBrief'); A.radio();
    $('bGo').onclick = () => { A.click(); hide('ovBrief'); nextTarget(); };
  }
  function nextTarget() {
    st.round++; st.shot = 0; st.marker = null; st.firstDist = null; st.roundPts = 0;
    if (!st.cfg.sharedShells) st.shellsLeft = st.cfg.shells;
    if (!st.cfg.missionTimer) st.timeLeft = st.cfg.timer;
    st.target = spawnTarget(); st.roundOver = false; st.rows.push([]);
    st.phase = 'aim'; MT.map.fit(false);
    updateHud(); updateWp(); lockDeck(false);
    banner(t('newTarget', { name: t('t_' + st.target.type) }), st.target.speed ? t('movingSub') : t('newTargetSub'), 'alert', 2600);
    A.radio(); $('btnMap').classList.add('attn'); vib(25);
  }
  function endRound(reason) {
    st.roundOver = true;
    const destroyed = st.target.dead;
    if (!destroyed && st.cfg.lives) { st.lives--; updateHud(); }
    st.results.push({ type: st.target.type, destroyed, shots: st.shot, first: st.firstDist, pts: st.roundPts || 0, reason });
    st.cum.push(st.score); updatePb();
  }
  const gameOver = () => st.taOver || (st.cfg.lives && st.lives <= 0) || st.missionFailed || (st.cfg.rounds !== Infinity && st.round >= st.cfg.rounds);

  async function fire() {
    if (st.phase !== 'aim' || st.shellsLeft <= 0) return;
    st.phase = 'flight'; st.shellsLeft--; st.shot++; st.shotsTotal++; lockDeck(true); updateHud();
    const paid = MT.live.payShell(); st.cashSpent += paid; updateCash(); cashFloat(paid ? `−$${fmtCash(paid)}` : t('freeShell'), paid ? 'neg' : 'free');
    $('btnMap').classList.remove('attn');
    A.drop(); MT.scene.dropShell(); await wait(420);
    // v1.1.1: the scope looks along st.dir, so the shell leaves straight away from the player (relative bearing 0)
    A.fire(); MT.scene.fire(0); vib(70); banner(t('firing'), '', 'info', 900); shake(1);
    // set range (m) → elevation via the L81 table (rounded mil, as on the gun) → actual range
    const range = B.rangeForMils(B.interpolateMils(st.range)), br = st.dir * Math.PI / 180;
    const ix = st.own.x + range * Math.sin(br), iy = st.own.y - range * Math.cos(br);
    await wait(1000);
    openMap('impact');
    const flight = 2600;
    setTimeout(() => A.whistle(1.5), flight - 1500);
    await MT.map.impact(ix, iy, flight);
    MT.map.explode(ix, iy, true); A.boom(true); vib([90, 40, 140]); shake(2);
    const now = performance.now();
    st.craters.push({ x: ix, y: iy, r: 5 + Math.random() * 2, t0: now, round: st.round, n: st.shot });
    st.lastImpact = { x: ix, y: iy, round: st.round };
    const tg = st.target, dx = ix - tg.x, dy = iy - tg.y, dist = Math.hypot(dx, dy);
    if (st.firstDist == null) st.firstDist = dist;
    const g = grade(dist);
    st.rows[st.rows.length - 1].push(g.k);
    // --- scoring ---
    let pts = Math.round(g.pts * (SHOT_MULT[st.shot - 1] || 0.3) * st.cfg.mult), first = 0, mult = 1, timeB = 0, xp = 5; const c0 = st.cfg;
    const pops = [];
    if (g.kill) {
      tg.dead = true; st.kills++; st.streak++; st.bestStreak = Math.max(st.bestStreak, st.streak);
      if (st.shot === 1) { first = FIRST_BONUS; st.firsts++; }
      if (g.k === 'direct') st.directs++;
      mult = streakMult(st.streak);
      if (st.cfg.timer && !st.cfg.missionTimer) timeB = Math.round(st.timeLeft * 2);
      pts = Math.round((pts + first) * mult) + timeB;
      st.killDists.push(solveTo(tg).distance);
      xp += 40 + (first ? 60 : 0) + (g.k === 'direct' ? 40 : 0);
      pops.push([`+${pts}`, 'big']); if (first) pops.push([t('firstRound', { p: FIRST_BONUS }), 'hl']); if (mult > 1) pops.push([t('comboX', { m: mult }), 'combo']);
      const kd = solveTo(tg).distance, kp = MT.live.killPay({ direct: g.k === 'direct', first: !!first, streak: st.streak, moving: !!tg.speed, long: kd >= 500 });
      MT.live.addCash(kp.total, true); st.cashEarned += kp.total; pops.push([`+$${fmtCash(kp.total)}`, 'cash']);
      if (c0.mode === 'ta' && first) { st.timeLeft += 5; pops.push([t('taBonus'), 'hl']); }
      MT.live.ev('kills'); if (first) MT.live.ev('first'); if (g.k === 'direct') MT.live.ev('direct'); if (kd >= 500) MT.live.ev('long'); if (tg.speed) MT.live.ev('moving'); MT.live.ev('streak', st.streak);
      MT.live.addKill(tg.type, c0.biome).forEach((u, i) => setTimeout(() => { toast(t('masteryUp', { n: t(u.kind === 'target' ? 't_' + u.id : 'terrain_' + u.id), l: ['', 'I', 'II', 'III', 'IV'][u.lv], c: fmtCash(u.cash) })); A.cash(); }, 2800 + i * 2000));
    } else {
      if (g.k === 'miss') { if (st.streak >= 2) pops.push([t('streakLost'), 'bad']); st.streak = 0; }
      if (pts) pops.push([`+${pts}`, '']);
      if (dist <= st.cfg.kr + 4) pops.unshift([t('soClose', { d: Math.max(0.1, dist - st.cfg.kr).toFixed(1) }), 'close']);
    }
    xp += Math.round(pts / 2); st.xpGain += xp;
    st.score += pts; st.roundPts = (st.roundPts || 0) + pts;
    statShot(g, tg, dist);
    const s2 = solveTo(tg); const ux = Math.sin(s2.bearing * Math.PI / 180), uy = -Math.cos(s2.bearing * Math.PI / 180);
    const along = dx * ux + dy * uy, lat = dx * -uy + dy * ux;
    if (g.kill) {
      A.hitMark(); setTimeout(() => A.kill(), 120); vib([40, 30, 40, 30, 160]);
      if (g.k === 'direct') confetti();
      pops.forEach((p, i) => setTimeout(() => popup(p[0], p[1]), 350 + i * 420));
      if (mult > 1) setTimeout(() => A.combo(st.streak), 800);
      await MT.map.killCam(tg.x, tg.y, 2000);
    } else {
      await wait(650);
      pops.forEach((p, i) => setTimeout(() => popup(p[0], p[1]), i * 380));
    }
    stamp(t('g_' + g.k), g.k === 'miss' ? 'miss' : g.k === 'near' ? 'near' : '');
    if (!g.kill) A.bad();
    updateHud();
    let over = g.kill || st.shellsLeft <= 0;
    if (st.cfg.sharedShells && !g.kill && st.shellsLeft <= 0) st.missionFailed = true;
    if (over) endRound(g.kill ? 'kill' : 'shells');
    checkAch();
    showResult({ g, dist, along, lat, pts, over, sol: s2 });
    st.phase = 'result';
  }
  function timeUp() {
    if (st.phase === 'flight' || st.roundOver) return;
    st.phase = 'result'; if (st.cfg.mode === 'ta') st.taOver = true; else if (st.cfg.missionTimer) st.missionFailed = true; endRound('time'); A.bad();
    st.rows[st.rows.length - 1].push('time');
    openMap('impact');
    showResult({ timeout: true, over: true, sol: solveTo(st.target) });
  }
  function statShot(g, tg, dist) {
    const S = P().stats; S.shots++;
    if (g.kill) { S.kills++; if (st.shot === 1) S.first++; if (g.k === 'direct') S.direct++; const d = solveTo(tg).distance; S.longest = Math.max(S.longest, Math.round(d)); if (tg.speed) S.moving++; }
    S.closest = S.closest == null ? Math.round(dist * 10) / 10 : Math.min(S.closest, Math.round(dist * 10) / 10);
    S.bestStreak = Math.max(S.bestStreak, st.streak);
    META.save();
  }

  // ---------- result card (tablet) ----------
  function showResult(r) {
    const c = $('resultCard'); const sol = r.sol; const last = gameOver();
    let h = '';
    if (r.timeout) h += `<div class="r-top"><div class="grade g-miss">${t('timeUp')}</div></div><div class="hint">${st.cfg.mode === 'ta' ? t('taOver') : t('escaped')}</div>`;
    else {
      h += `<div class="r-top"><div><span class="tag">${t('shotOf', { n: st.shot })}</span><div class="grade g-${r.g.k}">${t('g_' + r.g.k)}</div></div><div class="r-pts">${t('pts', { p: r.pts })}</div></div>`;
      h += `<div class="r-dist">${t('impactDist', { d: r.dist < 10 ? r.dist.toFixed(1) : Math.round(r.dist) })}${st.target.dead ? ' · ' + t('destroyed') : ''}</div>`;
      if (!r.g.kill) {
        const a = Math.round(Math.abs(r.along)), l = Math.round(Math.abs(r.lat));
        h += '<div class="r-corr">';
        h += `<span class="chip">${a < 1 ? '±0 m' : t(r.along < 0 ? 'tooShort' : 'tooLong', { d: a })}</span>`;
        h += `<span class="chip">${l < 1 ? t('onLine') : t(r.lat < 0 ? 'left' : 'right', { d: l })}</span></div>`;
        if (st.cfg.hints) {
          if (a >= 1) h += `<div class="hint">${t(r.along < 0 ? 'hintShort' : 'hintLong')}</div>`;
          if (l >= 1) h += `<div class="hint">${t(r.lat < 0 ? 'hintLeft' : 'hintRight')}</div>`;
        }
        if (!r.over) h += `<div class="hint">${t('shellsLeft', { n: st.shellsLeft })}</div>`;
      }
    }
    if (st.cfg.lives) h += `<div class="hint lives-l">${t('livesLeft', { n: Math.max(0, st.lives) })}</div>`;
    if (st.missionFailed) h += `<div class="hint bad-l">${t('missionFailed')}</div>`;
    if (r.over) {
      h += `<div class="sol mine"><b>${t('yourSetting')}</b><span>${t('yourLine', { dir: fmtDir(st.dir), r: st.range })}</span></div>`;
      h += `<div class="sol"><b>${t('solution')}</b><span>${t('solLine', { dir: fmtDir(sol.bearing), d: Math.round(sol.distance) })}</span></div>`;
      const canRevive = MT.monetize && MT.monetize.rewarded && !st.target.dead && !r.timeout && st.revived !== st.round && !(st.cfg.mode === 'daily' && st.cfg.ranked);
      h += `<div class="r-btns">${canRevive ? `<button class="btn-ghost ad-btn" id="rAdShell" hidden>▶ ${t('adExtraShell')}</button>` : ''}<button class="btn-go" id="rNext">${last ? t('toResults') : t('nextTarget')} →</button></div>`;
    } else {
      h += `<div class="r-btns"><button class="btn-go" id="rCorr">${t('correct')} (${t('shotOf', { n: st.shot + 1 })})</button></div>`;
    }
    c.innerHTML = h; c.hidden = false;
    const n = $('rNext'), k = $('rCorr');
    if (n) n.onclick = () => { A.click(); c.hidden = true; closeMap(); if (last) setTimeout(showEnd, 450); else setTimeout(nextTarget, 450); };
    const ad = $('rAdShell');
    if (ad) MT.monetize.offerRewarded('extra-shell').then(ok => { if (ok && ad.isConnected) ad.hidden = false; else ad.remove(); });
    if (ad) ad.onclick = () => { ad.disabled = true; MT.monetize.showRewarded('extra-shell').then(ok => {
      if (!ok) { ad.remove(); return; }
      st.revived = st.round; st.results.pop(); if (st.cfg.lives) st.lives++; st.missionFailed = false; st.roundOver = false; st.shellsLeft = 1;
      c.hidden = true; st.phase = 'map'; MT.map.mode = 'plan'; lockDeck(false); setMapUi(); updateHud();
    }); };
    if (k) k.onclick = () => { A.click(); c.hidden = true; st.phase = 'map'; MT.map.mode = 'plan'; lockDeck(false); setMapUi(); };
    $('tabFoot').style.visibility = 'hidden';
  }

  // ---------- end of game ----------
  function starsFor() {
    const m = st.cfg.m; if (st.missionFailed || st.results.some(r => !r.destroyed)) return 0;
    const used = m.shells - st.shellsLeft; return used <= m.par[2] ? 3 : used <= m.par[1] ? 2 : 1;
  }
  function starRow(n, small) { return `<span class="stars${small ? ' sm' : ''}">${[0, 1, 2].map(i => `<i class="${i < n ? 'on' : ''}" style="--d:${i * 0.35}s">★</i>`).join('')}</span>`; }
  const levelQueue = [];
  function showEnd() {
    st.phase = 'end'; lockDeck(true); $('app').classList.remove('in-game');
    const c = st.cfg, Pp = P(), kills = st.results.filter(r => r.destroyed).length, n = st.results.length;
    Pp.stats.games++;
    let title = t('endTitle'), extra = '', badge = '';
    let ranked = true;
    if (c.mode === 'free') {
      badge = t('d_' + c.diff);
      const list = Pp.hs[c.diff] || []; const prev = list.length ? list[0].s : 0;
      list.push({ s: st.score, d: new Date().toLocaleDateString(), id: Date.now() }); list.sort((a, b) => b.s - a.s); Pp.hs[c.diff] = list.slice(0, 5);
      if (st.score > prev && st.score > 0) extra += `<div class="end-new">★ ${t('newBest')}</div>`;
    } else if (c.mode === 'endless') {
      badge = t('endless'); title = t('endlessOver');
      const prev = Pp.endless.best; if (st.score > prev) { Pp.endless.best = st.score; extra += `<div class="end-new">★ ${t('newBest')}</div>`; }
      Pp.endless.kills = Math.max(Pp.endless.kills, st.kills); Pp.stats.endlessRuns++; MT.live.ev('endless', st.kills);
      extra += `<div class="end-sub">${t('endlessBest', { s: Pp.endless.best, k: Pp.endless.kills })}</div>`;
    } else if (c.mode === 'mission') {
      const m = c.m, s = starsFor(); badge = `${t('mission')} ${m.id}`;
      title = s ? t('missionDone') : t('missionFailed');
      const improved = META.recordMission(m.id, s);
      extra += `<div class="end-stars">${starRow(s)}</div><div class="end-sub">${esc(t('ms' + m.id + 't'))}${improved && s ? ' · ' + t('newBest') : ''}</div>`;
      if (s) { st.xpGain += 100 * s; MT.live.ev('stars', s); }
    } else if (c.mode === 'ta') {
      badge = t('timeAttack'); title = t('taOverT');
      const TA = MT.live.L.ta; if (st.score > TA.best) { TA.best = st.score; extra += `<div class="end-new">★ ${t('newBest')}</div>`; }
      extra += `<div class="end-sub">${t('taBest', { s: TA.best, k: st.kills })}</div>`; MT.live.ev('ta', st.score);
    } else if (c.mode === 'daily') {
      badge = t('dailyN', { n: META.dayNo() }); MT.live.ev('daily');
      ranked = c.ranked;
      const res = { score: st.score, kills, rows: st.rows.map(r => r.slice()) };
      if (ranked) { META.recordDaily(res); st.xpGain += 150; }
      else extra += `<div class="end-sub">${t('dailyPracticeNote')}</div>`;
    }
    META.save(); MT.live.ev('games');
    const xm = MT.live.xpMult(), gained = Math.round(st.xpGain * xm); MT.live.seasonAdd(gained);
    const pbPrev = st.pb, pbNew = MT.live.pbRecord(c, st.score, st.cum);
    const pbHtml = pbPrev ? `<div class="pb-cmp ${st.score >= pbPrev.s ? 'up' : 'down'}"><span>${t('vsPb')}</span><b>${st.score >= pbPrev.s ? '+' : '−'}${Math.abs(st.score - pbPrev.s)}</b><i style="--a:${Math.min(100, st.score / Math.max(1, pbPrev.s, st.score) * 100)}%;--b:${Math.min(100, pbPrev.s / Math.max(1, pbPrev.s, st.score) * 100)}%"></i></div>` : (pbNew && st.score > 0 ? `<div class="pb-cmp up"><span>${t('firstPb')}</span></div>` : '');
    const r0 = META.rankOf(Pp.xp); const ups = META.addXP(gained); const r1 = META.rankOf(Pp.xp);
    checkAch(true);
    const avg = st.results.length ? Math.round(st.results.filter(r => r.first != null).reduce((a, r) => a + r.first, 0) / Math.max(1, st.results.filter(r => r.first != null).length)) : '–';
    let h = `<div class="badge">${esc(badge)}</div><h2>${title}</h2>${extra}<div class="end-score" id="endScore">0</div>${pbHtml}`;
    h += `<div class="cash-sum"><span>${t('cashEarned')} <b class="pos">+$${fmtCash(st.cashEarned)}</b></span><span>${t('cashShells')} <b class="neg">−$${fmtCash(st.cashSpent)}</b></span><span>${t('cashNet')} <b class="${st.cashEarned - st.cashSpent >= 0 ? 'pos' : 'neg'}">${st.cashEarned - st.cashSpent >= 0 ? '+' : '−'}$${fmtCash(Math.abs(st.cashEarned - st.cashSpent))}</b></span></div>`;
    h += `<div class="end-stats"><div><b>${kills}/${n}</b><small>${t('hits')}</small></div><div><b>${st.firsts}</b><small>${t('firstHits')}</small></div><div><b>${st.bestStreak}</b><small>${t('bestStreak')}</small></div></div>`;
    h += `<div class="xp-box"><div class="xp-top">${META.insignia(r1.i, 34)}<div><b>${esc(r1.name)}</b><small id="xpTxt">+${gained} XP</small>${xm > 1 ? ` <em class="wk-tag">${t('weekendX2')}</em>` : ''}</div></div><div class="xp-bar"><i id="xpFill" style="width:${(ups.length ? 0 : r0.frac) * 100}%"></i></div></div>`;
    if (c.mode === 'daily' && (ranked || META.dailyDone())) h += dailyShareBlock();
    h += '<div class="end-rounds">' + st.results.map((r, i) => `<div><span>${i + 1}. ${t('t_' + r.type)}</span><span>${(st.rows[i] || []).map(k => META.EMO[k] || '❌').join('')}</span><span>${r.pts}</span></div>`).join('') + '</div>';
    h += '<div class="end-btns">';
    if (c.mode === 'mission') {
      const nx = META.MISSIONS.find(m => m.id === c.m.id + 1);
      if (nx && META.missionOpen(nx) && starsFor()) h += `<button class="btn-big" id="eNext">${t('nextMission')} →</button>`;
      h += `<button class="btn-ghost wide" id="eAgain">${t('retry')}</button><button class="btn-ghost wide" id="eMissions">${t('missions')}</button>`;
    } else if (c.mode === 'daily') {
      h += `<button class="btn-ghost wide" id="eAgain">${t('practiceAgain')}</button>`;
    } else h += `<button class="btn-big" id="eAgain">⟲ ${t('oneMore')}</button>`;
    const adCash = Math.max(AD_CASH_MIN, st.cashEarned || 0);
    if (MT.monetize && MT.monetize.rewarded && !(c.mode === 'daily' && ranked)) h += `<button class="btn-ghost wide ad-btn" id="eAdXp" hidden>▶ ${t('adDoubleXp', { n: gained, c: fmtCash(adCash) })}</button>`;
    h += `<button class="btn-ghost wide" id="eHome">${t('mainMenu')}</button></div>`;
    $('endPanel').innerHTML = h; show('ovEnd');
    const el = $('endScore'), t0 = performance.now();
    const tick = now => { const k = Math.min(1, (now - t0) / 1200); el.textContent = Math.round(st.score * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); else A.good(); };
    requestAnimationFrame(tick);
    setTimeout(() => { const f = $('xpFill'); if (f) f.style.width = (r1.frac * 100) + '%'; }, 500);
    if (c.mode === 'mission' && starsFor()) setTimeout(() => A.coin(), 400);
    ups.forEach(u => levelQueue.push(u)); if (levelQueue.length) setTimeout(showLevelUp, 1600);
    const on = (id, fn) => { const b = $(id); if (b) b.onclick = () => { A.click(); fn(); }; };
    // between rounds: optional, frequency-capped interstitial (never in the daily); the game always continues
    const viaAd = (name, go) => { if (c.mode === 'daily' || !(MT.monetize && MT.monetize.interstitial)) return go(); let gone = false; const g = () => { if (!gone) { gone = true; go(); } }; MT.monetize.interstitial(name).then(g, g); };
    on('eAgain', () => viaAd('between-rounds', () => startGame(c.mode, c.mode === 'mission' ? c.m.id : c.mode === 'free' ? c.diff : undefined)));
    on('eNext', () => viaAd('between-missions', () => startGame('mission', c.m.id + 1)));
    on('eMissions', () => { hide('ovEnd'); showHome('missions'); });
    on('eHome', () => { hide('ovEnd'); showHome('home'); });
    const adB = $('eAdXp');
    if (adB) MT.monetize.offerRewarded('double-reward').then(ok => { if (ok && adB.isConnected) adB.hidden = false; else adB.remove(); });
    on('eAdXp', () => { const b = $('eAdXp'); b.disabled = true; MT.monetize.showRewarded('double-reward').then(ok => { if (ok) { const u = META.addXP(gained); MT.live.addCash(adCash, true); $('xpTxt').textContent = `+${gained * 2} XP · +$${fmtCash(adCash)}`; u.forEach(x => levelQueue.push(x)); if (levelQueue.length) showLevelUp(); } b.remove(); }); });
    if (c.mode === 'daily') wireShare();
  }
  function dailyShareBlock() {
    const r = P().daily.hist[META.dailyKey()]; if (!r) return '';
    const txt = META.shareText({ day: META.dayNo(), rows: r.rows, score: r.score, kills: r.kills });
    return `<div class="share-box"><pre id="shareTxt">${esc(txt)}</pre><div class="share-btns"><button class="btn-go" id="sCopy">${t('copy')}</button><button class="btn-go" id="sShare">${t('share')}</button><button class="btn-ghost" id="sPng">${t('savePng')}</button></div><div class="countdown">${t('nextDaily')} <b data-countdown>--:--:--</b></div></div>`;
  }
  function wireShare() {
    const r = P().daily.hist[META.dailyKey()]; if (!r) return;
    const txt = META.shareText({ day: META.dayNo(), rows: r.rows, score: r.score, kills: r.kills });
    const card = () => META.renderCard({ day: META.dayNo(), rows: r.rows, score: r.score, kills: r.kills, streak: META.dailyStreak(), rank: META.rankOf(P().xp).name, dateLabel: new Date().toISOString().slice(0, 10) });
    const on = (id, fn) => { const b = $(id); if (b) b.onclick = fn; };
    on('sCopy', async () => { A.click(); try { await navigator.clipboard.writeText(txt); toast(t('copied')); } catch (e) { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); toast(t('copied')); } catch (_) {} ta.remove(); } });
    on('sShare', async () => {
      A.click();
      try {
        const blob = await new Promise(res => card().toBlob(res, 'image/png'));
        const file = new File([blob], `mortar-daily-${META.dayNo()}.png`, { type: 'image/png' });
        if (navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ text: txt, files: [file] });
        else if (navigator.share) await navigator.share({ text: txt });
        else { await navigator.clipboard.writeText(txt); toast(t('copied')); }
      } catch (e) {}
    });
    on('sPng', () => { A.click(); const a = document.createElement('a'); a.download = `mortar-daily-${META.dayNo()}.png`; a.href = card().toDataURL('image/png'); document.body.appendChild(a); a.click(); a.remove(); });
  }
  function showLevelUp() {
    const r = levelQueue.shift(); if (r == null) return;
    const un = META.unlocksFor(r);
    $('levelPanel').innerHTML = `<div class="lv-rays"></div><div class="lv-ins">${META.insignia(r, 120)}</div><div class="badge">${t('promoted')}</div><h2>${esc(t('rk_' + META.RANKS[r].id))}</h2>
      ${un.length ? `<div class="lv-un"><b>${t('unlockedNew')}</b>${un.map(u => `<span>${esc(t('u_' + u.kind))}: ${esc(t(u.kind + '_' + u.id))}</span>`).join('')}</div>` : ''}
      <button class="btn-big" id="lvOk">${t('carryOn')}</button>`;
    show('ovLevel'); A.levelUp(); vib([60, 40, 60, 40, 200]); confetti(140);
    $('lvOk').onclick = () => { A.click(); hide('ovLevel'); if (levelQueue.length) setTimeout(showLevelUp, 250); };
  }

  // ---------- achievements ----------
  const ACH_CASH = 500;
  const AD_CASH_MIN = 500; // rewarded ad after a game: double XP + the round's $ again (at least $500) // every achievement pays in-game $ (v1.2: no premium currency any more)
  function checkAch(atEnd) {
    const S = P().stats, D = P().daily, c = st.cfg, got = [];
    const u = (id, cond) => { if (cond && META.unlockAch(id)) { got.push(id); MT.live.addCash(ACH_CASH, true); } };
    u('first_blood', S.kills >= 1); u('first_round', S.first >= 1); u('fr10', S.first >= 10); u('direct', S.direct >= 1); u('direct10', S.direct >= 10);
    u('sharpshooter', S.longest >= 600); u('danger_close', st.killDists.some(d => d < 200)); u('moving', S.moving >= 1);
    u('streak5', st.bestStreak >= 5); u('streak10', st.bestStreak >= 10);
    u('endless10', c.mode === 'endless' && st.kills >= 10); u('endless25', c.mode === 'endless' && st.kills >= 25);
    if (atEnd) {
      const all = st.results.length >= 5 && st.results.every(r => r.destroyed);
      u('flawless', all && (c.mode === 'free' || c.mode === 'daily'));
      u('veteran_clear', all && c.mode === 'free' && c.diff === 'veteran');
      u('daily1', c.mode === 'daily' && c.ranked); u('perfect_daily', c.mode === 'daily' && c.ranked && all);
      u('daily3', META.dailyStreak() >= 3); u('daily7', META.dailyStreak() >= 7);
      u('missions12', META.MISSIONS.every(m => META.stars(m.id) > 0)); u('stars36', META.totalStars() >= 36);
      const ri = META.rankOf(P().xp).i; u('rank_sgt', ri >= 3); u('rank_gen', ri >= 9);
    }
    got.forEach((id, i) => setTimeout(() => achToast(id), 600 + i * 1600));
  }
  function achToast(id) {
    const el = document.createElement('div'); el.className = 'ach-toast';
    el.innerHTML = `<i>${achIcon(id)}</i><div><small>${t('achUnlocked')}</small><b>${esc(t('a_' + id))}</b><small class="ach-cash">+$${fmtCash(ACH_CASH)}</small></div>`;
    $('fx').appendChild(el); A.achieve(); vib(30);
    setTimeout(() => el.classList.add('out'), 3000); setTimeout(() => el.remove(), 3500);
  }
  function achIcon(id) {
    const k = id.startsWith('daily') || id === 'perfect_daily' ? 'cal' : id.startsWith('streak') ? 'fire' : id.startsWith('rank') ? 'star' : id.startsWith('endless') ? 'inf' : id.startsWith('mission') || id.startsWith('stars') ? 'flag' : 'tgt';
    const P2 = { cal: '<rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10h16M8 4v4M16 4v4"/>', fire: '<path d="M12 3c1 4 6 6 6 11a6 6 0 0 1-12 0c0-3 2-4 2-7 2 1 3 3 3 5 1-2 1-6 1-9z"/>', star: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6L3.4 9.3l6-.7z"/>', inf: '<path d="M6 9a3 3 0 1 0 0 6c3 0 9-6 12-6a3 3 0 1 1 0 6c-3 0-9-6-12-6z"/>', flag: '<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>', tgt: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>' }[k];
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">${P2}</svg>`;
  }

  // ---------- home / screens ----------
  let homeView = 'home', cdTimer = null;
  function xpBar(xp) { const r = META.rankOf(xp); return `<div class="xp-bar"><i style="width:${(r.frac * 100).toFixed(1)}%"></i></div><small class="xp-num">${r.next ? `${xp - r.min} / ${r.next - r.min} XP` : `${xp} XP · MAX`}</small>`; }
  function showHome(view) {
    st.phase = 'menu'; st.paused = false; lockDeck(true); closeMap(); $('app').classList.remove('in-game');
    homeView = view || 'home'; renderHome(); show('ovHome');
    const pnl = $('homePanel'); pnl.classList.remove('slide'); void pnl.offsetWidth; pnl.classList.add('slide');
  }
  function opIcon(k) {
    const d = { cal: '<rect x="4" y="6" width="16" height="14" rx="2"/><path d="M4 10h16M8 4v4M16 4v4M9 15l2 2 4-4"/>', con: '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4M10 12h6M10 16h6"/>', pass: '<path d="M4 7h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4z"/><path d="M14 7v12" stroke-dasharray="2 2"/>', book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 8h6"/>' }[k];
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round">${d}</svg>`;
  }
  function renderHome() {
    const Pp = P(), r = META.rankOf(Pp.xp), v = homeView; let h = '';
    const back = `<button class="back" data-go="home" aria-label="${t('back')}">‹ ${t('back')}</button>`;
    if (v === 'home') {
      const done = META.dailyDone(), dr = Pp.daily.hist[META.dailyKey()], ds = META.dailyStreak();
      const LV = MT.live, Lv = LV.L, nf = LV.notif(), si = LV.seasonInfo(), sn = LV.season(), col = LV.collection();
      h += `<div class="home-top"><button class="rank-chip" data-go="profile">${META.insignia(r.i, 30)}<span><b>${esc(r.name)}</b>${xpBar(Pp.xp)}</span></button><div class="wallet"><button class="cash-chip" data-go="shop" aria-label="${t('armory')}">$${fmtCash(Lv.cash)}</button></div><button class="iconbtn gear" data-go="settings" aria-label="${t('settings')}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/></svg></button></div>`;
      h += `<h1 class="logo-title"><span>MORTAR</span><span>TRAINER</span></h1><div class="badge">${t('badge')}</div>`;
      if (LV.weekend()) h += `<div class="wk-banner">⚡ ${t('weekendOn')} <small>${t('weekendSub')}</small></div>`;
      h += `<div class="ops-row">
        <button class="op" data-go="calendar">${opIcon('cal')}<b>${t('calendar')}</b><small>🔥 ${Lv.login.streak}</small>${nf.cal ? '<em class="dot"></em>' : ''}</button>
        <button class="op" data-go="contracts">${opIcon('con')}<b>${t('contracts')}</b><small>${(c => c.dl.concat(c.wl).filter(x => x.n >= x.g).length)(LV.contracts())}/6</small>${nf.con ? `<em class="dot">${nf.con}</em>` : ''}</button>
        <button class="op" data-go="season">${opIcon('pass')}<b>${t('seasonPass')}</b><small>${t('tierN', { n: sn.tier })}</small>${nf.season ? `<em class="dot">${nf.season}</em>` : ''}</button>
        <button class="op" data-go="collection">${opIcon('book')}<b>${t('collection')}</b><small>${col.pct}%</small>${nf.coll ? '<em class="dot"></em>' : ''}</button></div>`;
      h += `<button class="daily-card${done ? ' done' : ''}" data-act="daily"><div class="dc-l"><small>${t('dailyChallenge')}</small><b>#${META.dayNo()}</b></div><div class="dc-m">${done ? `${t('todayScore', { s: dr.score })}<span class="dc-row">${dr.rows.map(rw => rw.map(k => META.EMO[k]).join('')).join(' ')}</span>` : t('dailyDesc')}<span class="dc-cd">${done ? t('nextDaily') : t('endsIn')} <b data-countdown>--:--:--</b></span></div><div class="dc-r"><span class="flame${ds ? ' on' : ''}">🔥</span><b>${ds}</b><small>${t('days')}</small></div></button>`;
      h += `<div class="home-grid">
        <button class="tile" data-go="missions"><b>${t('missions')}</b><small>★ ${META.totalStars()}/36</small></button>
        <button class="tile" data-act="endless"><b>${t('endless')}</b><small>${t('best')}: ${Pp.endless.best}</small></button>
        <button class="tile ta" data-act="ta"><b>⏱ ${t('timeAttack')}</b><small>${t('best')}: ${Lv.ta.best}</small></button>
        <button class="tile" data-go="practice"><b>${t('practice')}</b><small>${t('practiceSub')}</small></button>
        <button class="tile shop" data-go="shop"><b>${t('armory')}</b><small>${t('armorySub', { k: LV.keyCount() })}</small></button>
        <button class="tile" data-go="profile"><b>${t('profile')}</b><small>${t('masteryShort')}</small></button>
        <button class="tile" data-go="ach"><b>${t('achievements')}</b><small>${Object.keys(Pp.ach).length}/${META.ACH.length}</small></button>
        <button class="tile" data-act="howto"><b>${t('howto')}</b><small>${t('howtoSub')}</small></button></div>`;
      h += `<p class="fine">${t('disclaimer')}</p>`;
      if (window.MT_BACK) h += `<p class="fine"><a class="back-site" href="${esc(String(window.MT_BACK))}">← Frontbuch · oiotv.de</a></p>`; // set by the oiotv.de play page
    } else if (v === 'missions') {
      h += `${back}<h2 class="scr-t">${t('missions')} <small>★ ${META.totalStars()}/36</small></h2><div class="ms-list">`;
      META.MISSIONS.forEach(m => {
        const open = META.missionOpen(m), s = META.stars(m.id);
        h += `<button class="ms-card${open ? '' : ' locked'}" ${open ? `data-mission="${m.id}"` : 'disabled'}><span class="ms-n">${String(m.id).padStart(2, '0')}</span><span class="ms-b"><b>${esc(t('ms' + m.id + 't'))}</b><small>${open ? esc(t('ms' + m.id)) : t('needStars', { n: m.req })}</small></span><span class="ms-s">${open ? starRow(s, true) : '🔒'}</span></button>`;
      });
      h += '</div>';
    } else if (v === 'practice') {
      h += `${back}<h2 class="scr-t">${t('practice')}</h2><div class="diffs">` + ['rekrut', 'soldat', 'veteran'].map((d, i) => { const l = Pp.hs[d]; return `<button class="diff${st.diff === d ? ' on' : ''}" data-diff="${d}"><b>${t('d_' + d)}</b><span>${t('d_' + d + '_desc')}</span><em class="d-best">${l && l.length ? `${t('best')}: ${l[0].s}` : t('noBest')}</em><i class="chev">${['I', 'II', 'III'][i]}</i></button>`; }).join('') + '</div>';
      h += `<div class="pick-l">${t('u_terrain')}</div><div class="picks">${pickRow('terrain', 'biome')}</div>`;
      h += `<button class="btn-big" data-act="free">${t('start')}</button>`;
    } else if (v === 'profile') {
      const S = Pp.stats;
      h += `${back}<div class="prof-head">${META.insignia(r.i, 84)}<div><small>${t('rank')}</small><h2>${esc(r.name)}</h2>${xpBar(Pp.xp)}${r.next ? `<small class="nx">${t('nextRank', { r: t('rk_' + META.RANKS[r.i + 1].id) })}</small>` : ''}</div></div>`;
      h += `<div class="ladder">${META.RANKS.map((x, i) => `<span class="${i <= r.i ? 'on' : ''}" title="${esc(t('rk_' + x.id))}">${META.insignia(i, 26)}</span>`).join('')}</div>`;
      h += `<div class="stat-grid">${[['shotsW', S.shots], ['kills', S.kills], ['firstHits', S.first], ['directs', S.direct], ['longest', S.longest ? S.longest + ' m' : '–'], ['closest', S.closest != null ? S.closest + ' m' : '–'], ['bestStreak', S.bestStreak], ['games', S.games]].map(([k, val]) => `<div><b>${val}</b><small>${t(k)}</small></div>`).join('')}</div>`;
      h += `<h3 class="sub-t">${t('loadout')}</h3>`;
      [['reticle', 'reticle'], ['style', 'style'], ['tint', 'tint'], ['terrain', 'biome']].forEach(([kind, key]) => { h += `<div class="pick-l">${t('u_' + kind)}</div><div class="picks">${pickRow(kind, key)}</div>`; });
      h += MT.liveUI.masteryHtml();
      h += `<div class="pick-l">${t('u_target')}</div><div class="picks">${['sniper', 'artillery', 'convoy'].map(id => { const u = META.UNLOCKS.find(x => x.id === id); const ok = META.unlocked('target', id); return `<span class="pick${ok ? ' on' : ' locked'}">${esc(t('target_' + id))}${ok ? '' : ` <i>${esc(t('rk_' + META.RANKS[u.r].id))}</i>`}</span>`; }).join('')}</div>`;
    } else if (v === 'ach') {
      h += `${back}<h2 class="scr-t">${t('achievements')} <small>${Object.keys(Pp.ach).length}/${META.ACH.length}</small></h2><div class="ach-grid">`;
      META.ACH.forEach(id => { const ok = !!Pp.ach[id]; h += `<div class="ach${ok ? ' ok' : ''}"><i>${achIcon(id)}</i><b>${esc(t('a_' + id))}</b><small>${esc(t('ad_' + id))}</small></div>`; });
      h += '</div>';
    } else if (v === 'settings') {
      h += `${back}<h2 class="scr-t">${t('settings')}</h2>` + settingsHtml();
    } else if (v === 'shop') {
      h += `${back}<div class="home-top"><h2 class="scr-t" style="flex:1;margin:0">${t('armory')}</h2><div class="wallet"><span class="cash-chip">$${fmtCash(MT.live.L.cash)}</span></div></div><p class="fine" style="text-align:left;margin:6px 0 10px">${t('shopNote2')}</p>`;
      h += shopHtml();
    } else if (MT.liveUI.has(v)) {
      h += MT.liveUI.render(v);
    } else if (v === 'dailyDone') {
      h += `${back}<h2 class="scr-t">${t('dailyChallenge')} #${META.dayNo()}</h2>` + dailyShareBlock() + `<button class="btn-ghost wide" data-act="dailyPractice">${t('practiceAgain')}</button>`;
    }
    $('homePanel').innerHTML = h;
    $('homePanel').scrollTop = 0;
    wireHome();
  }
  function pickRow(kind, key) {
    return META.UNLOCKS.filter(u => u.kind === kind).map(u => { const ok = META.unlocked(kind, u.id), on = META.cos()[key] === u.id; return `<button class="pick${on ? ' on' : ''}${ok ? '' : ' locked'}" data-pick="${key}" data-id="${u.id}" ${ok ? '' : 'disabled'}>${kind === 'reticle' ? `<span class="sw sw-${u.id}"></span>` : ''}${esc(t(kind + '_' + u.id))}${ok ? '' : ` <i>🔒 ${esc(t('rk_' + META.RANKS[u.r].id))}</i>`}</button>`; }).join('') + META.CRATE_ITEMS.filter(c => c.kind === kind && META.owned(c.kind, c.id)).map(c => `<button class="pick r-${c.rar}${META.cos()[key] === c.id ? ' on' : ''}" data-pick="${key}" data-id="${c.id}">${kind === 'reticle' ? `<span class="sw sw-${c.id}"></span>` : ''}${esc(t(kind + '_' + c.id))}</button>`).join('');
  }
  function settingsHtml() {
    const Pp = P();
    return `<div class="set-list">
      <label class="set"><span>${t('sound')}</span><input type="checkbox" id="setSound" ${A.muted ? '' : 'checked'}><i class="tgl"></i></label>
      <label class="set vol"><span>${t('sfxVol')}</span><input type="range" min="0" max="100" step="5" id="setSfx" value="${Math.round(A.vol.sfx * 100)}"></label>
      <label class="set vol"><span>${t('ambVol')}</span><input type="range" min="0" max="100" step="5" id="setAmb" value="${Math.round(A.vol.amb * 100)}"></label>
      <label class="set vol"><span>${t('dragSens')} <small id="sensV">${(Pp.set.sens || 1).toFixed(1)}×</small></span><input type="range" min="0.4" max="2" step="0.1" id="setSens" value="${Pp.set.sens || 1}"></label>
      <label class="set"><span>${t('lefty')}</span><input type="checkbox" id="setLefty" ${Pp.set.lefty ? 'checked' : ''}><i class="tgl"></i></label>
      <label class="set"><span>${t('rmotion')}</span><input type="checkbox" id="setRm" ${Pp.set.rmotion ? 'checked' : ''}><i class="tgl"></i></label>
      <label class="set"><span>${t('cbMode')}</span><input type="checkbox" id="setCb" ${Pp.set.cb ? 'checked' : ''}><i class="tgl"></i></label>
      <label class="set"><span>${t('haptics')}</span><input type="checkbox" id="setHaptics" ${Pp.set.haptics ? 'checked' : ''}><i class="tgl"></i></label>
      <div class="set"><span>${t('language')}</span><div class="langs">${['en', 'de', 'es', 'fr'].map(l => `<button class="lang${MT.lang === l ? ' on' : ''}" data-lang="${l}">${l.toUpperCase()}</button>`).join('')}</div></div>
      <button class="set set-btn" data-act="fullscreen"><span>${t('fullscreen')}</span><i>⤢</i></button>
      <button class="set set-btn danger" data-act="reset"><span>${t('resetProgress')}</span><i>⟲</i></button>
    </div><p class="fine">v1.2.0 · ${t('saveNote')}</p>`;
  }
  function applyPrefs() {
    const S = P().set; if (S.rmotion == null) { try { S.rmotion = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { S.rmotion = false; } }
    const b = document.body.classList; b.toggle('lefty', !!S.lefty); b.toggle('rm', !!S.rmotion); b.toggle('cb', !!S.cb);
    MT.scene.cb = !!S.cb;
  }
  function wireSettings(root) {
    const q = s => root.querySelector(s);
    const snd = q('#setSound'); if (snd) snd.onchange = () => { A.unlock(); A.setMuted(!snd.checked); muteUi(); if (snd.checked) A.click(); };
    const hp = q('#setHaptics'); if (hp) hp.onchange = () => { P().set.haptics = hp.checked; META.save(); vib(30); };
    root.querySelectorAll('[data-lang]').forEach(b => b.onclick = () => { A.click(); MT.setLang(b.dataset.lang); MT.applyI18n(); updateWp(); renderHome(); if (!$('ovSettings').hidden) openSettings(); });
    const sx = q('#setSfx'); if (sx) { sx.oninput = () => A.setVol('sfx', sx.value / 100); sx.onchange = () => { A.unlock(); A.click(); }; }
    const am = q('#setAmb'); if (am) am.oninput = () => { A.unlock(); A.setVol('amb', am.value / 100); };
    const se = q('#setSens'); if (se) se.oninput = () => { P().set.sens = +se.value; q('#sensV').textContent = (+se.value).toFixed(1) + '×'; META.save(); };
    [['#setLefty', 'lefty'], ['#setRm', 'rmotion'], ['#setCb', 'cb']].forEach(([id, k]) => { const c = q(id); if (c) c.onchange = () => { P().set[k] = c.checked; META.save(); applyPrefs(); A.click(); }; });
  }
  function wireHome() {
    const root = $('homePanel');
    root.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { A.unlock(); A.click(); homeView = b.dataset.go; renderHome(); const p = $('homePanel'); p.classList.remove('slide'); void p.offsetWidth; p.classList.add('slide'); });
    root.querySelectorAll('[data-mission]').forEach(b => b.onclick = () => { hide('ovHome'); startGame('mission', +b.dataset.mission); });
    root.querySelectorAll('[data-diff]').forEach(b => b.onclick = () => { A.click(); st.diff = b.dataset.diff; renderHome(); });
    root.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => { A.click(); META.setCos(b.dataset.pick, b.dataset.id); renderHome(); });
    root.querySelectorAll('[data-act]').forEach(b => b.onclick = () => {
      const a = b.dataset.act; A.unlock();
      if (a === 'daily') { if (META.dailyDone()) { A.click(); homeView = 'dailyDone'; renderHome(); } else { hide('ovHome'); startGame('daily'); } }
      else if (a === 'dailyPractice') { hide('ovHome'); startGame('daily'); }
      else if (a === 'endless') { hide('ovHome'); startGame('endless'); }
      else if (a === 'free') { hide('ovHome'); startGame('free', st.diff); }
      else if (a === 'howto') { A.click(); showTut(0, null); }
      else if (a === 'fullscreen') goFullscreen();
      else if (a === 'crate') buyCrate(b.dataset.crate, b.dataset.pay);
      else if (a === 'ta') { hide('ovHome'); startGame('ta'); }
      else if (a === 'direct') buyDirect(b.dataset.kind, b.dataset.id);
      else if (a === 'reset') { if (confirm(t('resetConfirm'))) { META.reset(); toast(t('resetDone')); renderHome(); } }
    });
    root.querySelectorAll('[data-tab]').forEach(b => b.onclick = () => { A.click(); shopTab = b.dataset.tab; renderHome(); });
    MT.liveUI.wire(root);
    tickCd();
    wireSettings(root);
    if (homeView === 'dailyDone') wireShare();
  }
  // ---------- armory: crates (key or in-game $ – odds always shown), $ upgrades, skins for $ ----------
  // v1.2: no real money anywhere. Skins can also be bought directly with earned $ (fixed price per rarity).
  const DIRECT_CASH = { common: 5000, rare: 12000, epic: 30000, legendary: 60000 };
  let shopTab = 'crates';
  function crateSvg(id, sz) {
    const S = { supply: ['#4d5236', '#3b3f2a', '#a39770'], elite: ['#7c5a1c', '#5b4214', '#fbbf24'], legendary: ['#1f1f24', '#121216', '#fde047'], officer: ['#7c5a1c', '#5b4214', '#fbbf24'] }[id] || ['#4d5236', '#3b3f2a', '#a39770'];
    const [lid, body, band] = S, star = '<path d="M32 38l2 4 4.5.5-3.3 3 .9 4.4L32 47.7l-4.1 2.2.9-4.4-3.3-3 4.5-.5z" fill="#1b1306"/>';
    const deco = id === 'legendary' ? `<path d="M32 36l2.4 4.8 5.3.6-3.9 3.6 1 5.2L32 47.6l-4.8 2.6 1-5.2-3.9-3.6 5.3-.6z" fill="${band}"/><path d="M10 22l8 8M54 22l-8 8M10 56l8-8M54 56l-8-8" stroke="${band}" stroke-width="2"/>` : id === 'elite' || id === 'officer' ? star : '<text x="15" y="45" font-size="8" font-family="monospace" fill="rgba(0,0,0,.55)">L81</text>';
    return `<svg class="crate-svg c-${id}" viewBox="0 0 64 64" width="${sz}" height="${sz}"><rect x="8" y="22" width="48" height="34" rx="3" fill="${body}" stroke="#000" stroke-width="2"/><rect class="lid" x="6" y="14" width="52" height="12" rx="3" fill="${lid}" stroke="#000" stroke-width="2"/><rect x="28" y="14" width="8" height="42" fill="${band}" stroke="#000" stroke-width="1.5"/><path d="M12 30h16M36 30h16M12 50h16M36 50h16" stroke="rgba(0,0,0,.45)" stroke-width="2"/><rect x="26" y="24" width="12" height="9" rx="1.5" fill="#1c1c1c" stroke="${band}" stroke-width="1.5"/>${deco}</svg>`;
  }
  function shopHtml() {
    const Pp = P(), L = MT.live.L, KS = MT.liveUI.keySvg; let h = '';
    if (!['crates', 'upg', 'skins'].includes(shopTab)) shopTab = 'crates';
    h += `<div class="tabs">${['crates', 'upg', 'skins'].map(x => `<button class="tab${shopTab === x ? ' on' : ''}" data-tab="${x}">${t('tab_' + x)}</button>`).join('')}</div>`;
    if (shopTab === 'crates') {
      META.CRATES.forEach(C => {
        const pc = Pp.crate.pity[C.id] || { epic: 0, legendary: 0 }, k = L.keys[C.id] || 0;
        h += `<div class="crate-card cc-${C.id}"><div class="crate-top">${crateSvg(C.id, 58)}<div><b>${t('crate_' + C.id)}</b><small>${t('crated_' + C.id)}</small></div><span class="kcount">${KS(C.id, 18)}×${k}</span></div>
          <table class="odds"><caption class="pick-l" style="text-align:left;caption-side:top">${t('dropRates')}</caption>${META.RAR.map(r => `<tr class="${C.odds[r] ? '' : 'zero'}"><td class="r-${r}">${t('rar_' + r)}</td><td>${t('nItems', { n: META.CRATE_ITEMS.filter(i => i.rar === r).length, o: META.unownedOf(r).length })}</td><td>${C.odds[r]} %</td></tr>`).join('')}</table>
          <div class="crate-meta">${[C.pity.epic > 1 ? t('pityE', { e: C.pity.epic, ce: pc.epic }) : '', C.pity.legendary > 1 ? t('pityL', { l: C.pity.legendary, cl: pc.legendary }) : ''].filter(Boolean).join(' · ')}</div>
          <div class="buy-row"><button class="buy key" data-act="crate" data-crate="${C.id}" data-pay="key" ${k ? '' : 'disabled'}>${KS(C.id, 16)} ${t('useKey')}</button><button class="buy cash" data-act="crate" data-crate="${C.id}" data-pay="cash" ${L.cash < C.cash ? 'disabled' : ''}>$${fmtCash(C.cash)}</button></div></div>`;
      });
      h += `<p class="fine" style="text-align:left">${t('dupInfo2', { c: fmtCash(META.DUPE_CASH.common * MT.live.dupeMult()), l: fmtCash(META.DUPE_CASH.legendary * MT.live.dupeMult()) })}</p>`;
      h += `<button class="btn-ghost wide" data-go="collection">${t('collection')} · ${MT.live.collection().pct}%</button>`;
    } else if (shopTab === 'upg') h += MT.liveUI.armoryHtml();
    else {
      h += `<div class="crate-card"><b>${t('directTitle')}</b><p class="fine" style="margin:4px 0 8px;text-align:left">${t('directNote')}</p><div class="picks">`;
      META.CRATE_ITEMS.forEach(i => { const own = META.owned(i.kind, i.id), pr = DIRECT_CASH[i.rar]; h += `<button class="pick r-${i.rar}" data-act="direct" data-kind="${i.kind}" data-id="${i.id}" ${own || L.cash < pr ? 'disabled' : ''}>${i.kind === 'reticle' ? `<span class="sw sw-${i.id}"></span>` : ''}${esc(t(i.kind + '_' + i.id))} ${own ? '✓' : `<i>$${fmtCash(pr)}</i>`}</button>`; });
      h += '</div></div>';
    }
    h += `<p class="legal">${t('shopLegal3')}</p>`;
    return h;
  }
  const RAR_COL = { common: '#d1d5db', rare: '#60a5fa', epic: '#c084fc', legendary: '#fbbf24' };
  function itemIcon(it) { return it.kind === 'reticle' ? `<span class="sw sw-${it.id}"></span>` : it.kind === 'tint' ? `<span class="tn tn-${it.id}"></span>` : `<svg viewBox="0 0 64 64" width="72" height="72"><circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" stroke-width="4"/><path d="M32 10v12M32 42v12M10 32h12M42 32h12" stroke="currentColor" stroke-width="3"/></svg>`; }
  function buyCrate(cid, pay) {
    A.unlock();
    const C = META.CRATES.find(c => c.id === cid); if (!C) return;
    if (pay === 'cash' && !confirm(t('confirmCrateCash', { p: fmtCash(C.cash), n: t('crate_' + cid) }))) return;
    const r = META.openCrate(cid, null, pay);
    if (!r.ok) { toast(t('crateErr_' + r.why)); return; }
    const it = r.item, rm = P().set.rmotion, tier = META.RAR.indexOf(r.rar);
    const stg = $('crateStage'); stg.className = 'open-stage r-' + r.rar; stg.style.setProperty('--rc', RAR_COL[r.rar]);
    stg.innerHTML = `<div class="rays"></div>${crateSvg(cid, 130)}<div class="flash"></div>`; $('crateDrop').innerHTML = `<div class="tap-hint">${t('opening')}</div>`; $('crateOk').hidden = true; show('ovCrate');
    A.crateRise(); vib([20, 60, 20, 60, 30]);
    // suspense: rising shake, rarity glow leaks through the lid before the burst
    setTimeout(() => { stg.classList.add('charge'); vib([30, 40, 40, 40, 60]); }, 500);
    setTimeout(() => {
      stg.classList.add('opened'); A.boom(false); A.crateReveal(tier); vib(tier >= 3 ? [80, 40, 80, 40, 200] : tier >= 2 ? [60, 40, 140] : [50]);
      if (!rm && tier >= 2) confetti(tier === 3 ? 180 : 90);
      if (tier >= 2) shake(tier === 3 ? 2 : 1);
      setTimeout(() => {
        stg.innerHTML = `<div class="rays on"></div>` + (it ? `<div class="drop r-${r.rar}">${itemIcon(it)}<small>${t('rar_' + r.rar)}${r.pityHit ? ' · ' + t('pityHit') : ''}</small><b>${esc(t(it.kind + '_' + it.id))}</b><span class="fine">${t('u_' + it.kind)}</span></div>` : `<div class="drop r-${r.rar}"><span class="dupe-cash">$${fmtCash(r.dupe)}</span><small>${t('rar_' + r.rar)} · ${t('dupeConv')}</small><b>${t('dupeTitle')}</b></div>`);
        $('crateDrop').innerHTML = ''; if (!it) { A.cash(); } else A.levelUp();
        $('crateOk').hidden = false; $('crateEquip').hidden = !it;
      }, 420);
    }, rm ? 700 : 1500);
    $('crateEquip').onclick = () => { A.click(); hide('ovCrate'); META.setCos(it.kind === 'reticle' ? 'reticle' : it.kind, it.id); renderHome(); };
    $('crateKeep').onclick = () => { A.click(); hide('ovCrate'); renderHome(); };
  }
  // generic reward reveal (calendar, contracts, season tiers, collection milestones)
  function reward(r, rar) {
    const stg = $('crateStage'); stg.className = 'open-stage opened r-' + rar; stg.style.setProperty('--rc', RAR_COL[rar]);
    stg.innerHTML = `<div class="rays on"></div><div class="drop r-${rar}"><small>${t('rewardT')}</small><div class="rw-big">${MT.liveUI.chips(r)}</div></div>`;
    $('crateDrop').innerHTML = ''; $('crateOk').hidden = false; $('crateEquip').hidden = true; show('ovCrate');
    A.cash(); A.crateReveal(META.RAR.indexOf(rar)); vib([30, 40, 80]); if (rar === 'legendary' || rar === 'epic') confetti(rar === 'legendary' ? 140 : 60);
    $('crateKeep').onclick = () => { A.click(); hide('ovCrate'); renderHome(); };
  }
  function buyDirect(kind, id) {
    const i = META.crateItem(kind, id); if (!i || META.owned(kind, id)) return; const pr = DIRECT_CASH[i.rar];
    if (MT.live.L.cash < pr || !confirm(t('confirmDirectCash', { p: fmtCash(pr), n: t(kind + '_' + id) }))) return;
    MT.live.addCash(-pr); META.grantItem(kind, id); A.coin(); toast(t('bought')); renderHome();
  }
  function openSettings() { $('settingsPanel').innerHTML = `<h2>${t('settings')}</h2>` + settingsHtml() + `<button class="btn-big" id="setClose">${t('close')}</button>`; show('ovSettings'); wireSettings($('settingsPanel')); $('settingsPanel').querySelectorAll('[data-act="fullscreen"]').forEach(b => b.onclick = goFullscreen); const rs = $('settingsPanel').querySelector('[data-act="reset"]'); if (rs) rs.onclick = () => { if (confirm(t('resetConfirm'))) { META.reset(); toast(t('resetDone')); } }; $('setClose').onclick = () => { A.click(); hide('ovSettings'); }; }
  function goFullscreen() {
    const d = document.documentElement;
    try { (d.requestFullscreen || d.webkitRequestFullscreen || (() => Promise.reject())).call(d).then(() => { try { screen.orientation && screen.orientation.lock && screen.orientation.lock('portrait').catch(() => {}); } catch (e) {} }).catch(() => toast(t('fsNo'))); } catch (e) { toast(t('fsNo')); }
  }
  function tickCd() { const s = META.fmtCountdown(META.msToNext()); document.querySelectorAll('[data-countdown]').forEach(e => { e.textContent = s; }); }
  setInterval(tickCd, 1000);
  // ---------- Karte ----------
  function openMap(mode) {
    const L = $('tabletLayer'); MT.map.mode = mode || 'plan';
    if (L.hidden) {
      L.hidden = false; MT.map.visible = true; A.tablet(true);
      requestAnimationFrame(() => { MT.map.resize(); if (mode !== 'impact') MT.map.fit(false); L.classList.add('open'); });
    }
    if (mode !== 'impact') { st.phase = 'map'; $('btnMap').classList.remove('attn'); }
    $('resultCard').hidden = true; setMapUi();
  }
  function closeMap() {
    const L = $('tabletLayer'); if (L.hidden) return;
    L.classList.remove('open'); A.tablet(false);
    setTimeout(() => { L.hidden = true; MT.map.visible = false; }, 420);
    if (st.phase === 'map') st.phase = 'aim';
  }
  function setMapUi() {
    const plan = MT.map.mode === 'plan';
    $('tabFoot').style.visibility = plan ? 'visible' : 'hidden';
    $('mapHint').textContent = plan ? (st.marker ? '' : t('mapHintPlace')) : '';
    $('btnApply').textContent = st.marker ? t('applyMarker') : t('backToMortar');
    $('btnClearMarker').disabled = !st.marker;
  }
  function applyMarker() {
    A.click(); closeMap();
    if (st.marker) {
      setTimeout(() => { banner(t('markerSet'), '', 'info', 1500); A.place(); }, 380);
    }
    updateWp();
  }

  // ---------- Bedienung ----------
  function setDir(v, sound) { const nv = Math.round((((v % 360) + 360) % 360) * 10) / 10 % 360; if (nv !== st.dir && sound !== false) A.tick(); st.dir = nv; syncControls(); }
  function setRng(v, sound) { const nv = clamp(Math.round(v), B.MIN_RANGE, B.MAX_RANGE); if (nv !== st.range && sound !== false) A.tick(); st.range = nv; syncControls(); }
  function syncControls() {
    if (document.activeElement !== $('inDir')) $('inDir').value = fmtDir(st.dir);
    if (document.activeElement !== $('inRng')) $('inRng').value = st.range;
  }
  // hold = repeat
  document.querySelectorAll('.step[data-ctl]').forEach(b => {
    let tm = null, n = 0;
    const act = () => { const v = +b.dataset.step; b.dataset.ctl === 'dir' ? setDir(st.dir + v) : setRng(st.range + v); };
    const stop = () => { clearTimeout(tm); tm = null; b.classList.remove('down'); };
    b.addEventListener('pointerdown', e => { if (st.phase !== 'aim') return; e.preventDefault(); n = 0; b.classList.add('down'); act(); const rep = () => { n++; act(); tm = setTimeout(rep, Math.max(30, 110 - n * 6)); }; tm = setTimeout(rep, 380); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev => b.addEventListener(ev, stop));
    b.addEventListener('contextmenu', e => e.preventDefault());
  });
  ['inDir', 'inRng'].forEach(id => {
    const el = $(id);
    const commit = () => { const v = parseFloat(String(el.value).replace(',', '.')); if (!isNaN(v)) { id === 'inDir' ? setDir(v) : setRng(v); A.click(); } syncControls(); };
    el.addEventListener('change', commit);
    el.addEventListener('keydown', e => { if (e.key === 'Enter') { commit(); el.blur(); } e.stopPropagation(); });
    el.addEventListener('focus', () => el.select());
  });
  // drag on the scope: horizontal = direction; vertical on the left RNG ladder = range (the tape follows the finger)
  (function () {
    const sw = $('sceneWrap'); let p0 = null, mode = null, accDir = 0, milF = 0;
    sw.addEventListener('pointerdown', e => {
      if (st.phase !== 'aim' || e.target.closest('button, input, label, .hud-bottom, .hud-tl')) return;
      const r = sw.getBoundingClientRect(), x = e.clientX - r.left;
      mode = x < MT.scene.ladderZone ? 'rng' : 'dir';
      p0 = { x: e.clientX, y: e.clientY }; accDir = 0; milF = B.milsExact(st.range); try { sw.setPointerCapture(e.pointerId); } catch (_) {}
    });
    sw.addEventListener('pointermove', e => {
      if (!p0) return;
      const dx = e.clientX - p0.x, dy = e.clientY - p0.y; p0 = { x: e.clientX, y: e.clientY };
      if (mode === 'dir') {
        accDir += -dx / MT.scene.ppdG * (P().set.sens || 1);
        const s = Math.trunc(accDir * 10) / 10; if (s) { accDir -= s; setDir(st.dir + s); $('dragHint').classList.add('gone'); }
      } else {
        milF = clamp(milF - dy / MT.scene.pxPerMil * (P().set.sens || 1), B.MIL_MIN, B.MIL_MAX);
        const r = B.rangeForMils(milF); if (r != null) { setRng(r); $('dragHint').classList.add('gone'); }
      }
    });
    const up = () => { p0 = null; }; sw.addEventListener('pointerup', up); sw.addEventListener('pointercancel', up);
  })();
  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    const fine = e.shiftKey;
    if (st.phase === 'aim') {
      if (e.key === 'ArrowLeft') { setDir(st.dir - (fine ? 0.1 : 1)); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { setDir(st.dir + (fine ? 0.1 : 1)); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { setRng(st.range + (fine ? 1 : 10)); e.preventDefault(); }
      else if (e.key === 'ArrowDown') { setRng(st.range - (fine ? 1 : 10)); e.preventDefault(); }
      else if (e.key === ' ' || e.key === 'f' || e.key === 'F') { e.preventDefault(); fire(); }
      else if (e.key === 'm' || e.key === 'M') openMap('plan');
    } else if (st.phase === 'map' && (e.key === 'm' || e.key === 'M' || e.key === 'Escape')) applyMarker();
  });


  // ---------- HUD ----------
  function updateHud() {
    const c = st.cfg;
    $('hudRound').textContent = st.round ? (c.rounds === Infinity ? `${st.round}` : `${Math.min(st.round, c.rounds)}/${c.rounds}`) : '–';
    $('hudScore').textContent = st.score; $('hudStreak').textContent = st.streak;
    const m = streakMult(st.streak + 1);
    $('hudMult').textContent = st.streak >= 1 && m > 1 ? `×${m}` : ''; 
    $('hudStreakWrap').classList.toggle('hot', st.streak >= 2);
    $('hudLives').textContent = c.lives ? '■'.repeat(Math.max(0, st.lives)) + '□'.repeat(Math.max(0, c.lives - st.lives)) : '';
    $('ammoCount').textContent = String(Math.max(0, st.shellsLeft)).padStart(3, '0');
    $('hudMode').textContent = c.mode === 'mission' ? `${t('mission')} ${c.m.id}` : c.mode === 'daily' ? `${t('dailyShort')} #${META.dayNo()}${c.ranked ? '' : ' · ' + t('practiceShort')}` : c.mode === 'endless' ? t('endless') : c.mode === 'ta' ? t('timeAttack') : t('d_' + (c.diff || st.diff));
  }
  function updateWp() {
    const w = $('wpInfo');
    w.textContent = st.marker ? t('markerInfo') : t('noMarker'); w.className = 'w-status' + (st.marker ? ' set' : '');
  }
  let bannerT = null;
  function banner(title, sub, kind, ms) {
    const b = $('banner'); b.innerHTML = `<b></b>${sub ? '<span></span>' : ''}`; b.querySelector('b').textContent = title; if (sub) b.querySelector('span').textContent = sub;
    b.className = 'banner show ' + (kind === 'info' ? 'info' : ''); clearTimeout(bannerT); bannerT = setTimeout(() => b.classList.remove('show'), ms || 2000);
  }
  function stamp(txt, cls) { const s = $('stamp'); s.textContent = txt; s.className = 'stamp ' + cls; void s.offsetWidth; s.classList.add('go'); }
  function shake(level) { if (P().set.rmotion) return; const a = $('app'); a.classList.remove('shake', 'shake2'); void a.offsetWidth; a.classList.add(level > 1 ? 'shake2' : 'shake'); }
  function lockDeck(l) { $('deck').classList.toggle('locked', l); $('btnFire').disabled = l; $('btnFire').classList.toggle('ready', !l && !!st.marker); $('btnMap').disabled = l && st.phase === 'flight'; }
  function vib(p) { try { if (P().set.haptics && navigator.vibrate) navigator.vibrate(p); } catch (e) {} }
  function show(id) { const e = $(id); e.hidden = false; e.classList.remove('closing'); }
  function hide(id) { $(id).hidden = true; }
  function hideAll() { ['ovHome', 'ovEnd', 'ovMenu', 'ovBrief', 'ovLevel', 'ovSettings', 'ovCrate'].forEach(hide); }
  function toast(msg) { const el = document.createElement('div'); el.className = 'toast'; el.textContent = msg; $('fx').appendChild(el); setTimeout(() => el.classList.add('out'), 1800); setTimeout(() => el.remove(), 2300); }
  function popup(txt, cls) { const el = document.createElement('div'); el.className = 'pop ' + (cls || ''); el.textContent = txt; $('fx').appendChild(el); setTimeout(() => el.remove(), 1700); if (cls === 'cash') { A.cash(); updateCash(true); } }
  const fmtCash = n => Math.round(n).toLocaleString('en-US');
  function updateCash(flash) { const e = $('hudCash'); if (!e) return; e.textContent = '$' + fmtCash(MT.live.L.cash); if (flash) { e.classList.remove('flash'); void e.offsetWidth; e.classList.add('flash'); } }
  function cashFloat(txt, cls) { const el = document.createElement('div'); el.className = 'cash-float ' + (cls || ''); el.textContent = txt; $('fx').appendChild(el); setTimeout(() => el.remove(), 1400); }
  function updatePb() {
    const w = $('hudPbWrap'); if (!w) return; const pb = st.pb, n = st.cum.length;
    if (!pb || !n || st.cfg.mode === 'daily') { w.hidden = true; return; }
    const ref = pb.cum[n - 1] != null ? pb.cum[n - 1] : pb.s, d = st.score - ref;
    w.hidden = false; $('hudPb').textContent = (d >= 0 ? '+' : '−') + Math.abs(d); w.classList.toggle('ahead', d >= 0);
  }
  // confetti + smoke puffs on a DOM-overlay canvas
  let cf = null;
  function confetti(n) {
    if (P().set.rmotion) n = Math.min(n || 90, 24);
    const cv = $('confetti'), r = cv.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1);
    cv.width = r.width * d; cv.height = r.height * d; const g = cv.getContext('2d'); g.setTransform(d, 0, 0, d, 0, 0);
    const cols = ['#fbbf24', '#f59e0b', '#ef4444', '#fde68a', '#e5e7eb', '#a3a37a'];
    const parts = (cf && cf.parts) || [];
    for (let i = 0; i < (n || 90); i++) parts.push({ x: r.width / 2 + (Math.random() - 0.5) * 60, y: r.height * 0.42, vx: (Math.random() - 0.5) * 520, vy: -250 - Math.random() * 420, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 14, w: 4 + Math.random() * 5, h: 6 + Math.random() * 7, c: cols[(Math.random() * cols.length) | 0], life: 1.6 + Math.random() * 1.2, t: 0 });
    if (cf) { cf.parts = parts; return; }
    cf = { parts }; let last = performance.now();
    const step = now => {
      const dt = Math.min(0.05, (now - last) / 1000); last = now; g.clearRect(0, 0, r.width, r.height);
      cf.parts = cf.parts.filter(p => (p.t += dt) < p.life);
      for (const p of cf.parts) { p.vy += 900 * dt; p.vx *= 0.985; p.x += p.vx * dt; p.y += p.vy * dt; p.rot += p.vr * dt; g.save(); g.globalAlpha = Math.min(1, (p.life - p.t) * 2); g.translate(p.x, p.y); g.rotate(p.rot); g.fillStyle = p.c; g.fillRect(-p.w / 2, -p.h / 2, p.w, p.h * Math.abs(Math.cos(p.rot * 1.7))); g.restore(); }
      if (cf.parts.length) requestAnimationFrame(step); else { g.clearRect(0, 0, r.width, r.height); cf = null; }
    };
    requestAnimationFrame(step);
  }
  // ---------- Anleitung ----------
  const TUT_ILL = [
    `<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="#2c3a22"/><g stroke="rgba(0,0,0,.35)">${[...Array(12)].map((_, i) => `<line x1="${i * 30}" y1="0" x2="${i * 30}" y2="150"/><line x1="0" y1="${i * 30}" x2="300" y2="${i * 30}"/>`).join('')}</g><path d="M0 110 Q80 80 150 115 T300 95" stroke="#38606a" stroke-width="12" fill="none"/><circle cx="90" cy="60" r="9" fill="#2f6bef" stroke="#fff" stroke-width="2"/><g transform="translate(215 55)"><circle r="16" fill="none" stroke="#ef4444" stroke-width="2"><animate attributeName="r" values="10;22" dur="1.2s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.2s" repeatCount="indefinite"/></circle><rect x="-9" y="-6" width="18" height="12" rx="3" fill="#5d5536" stroke="#b91c1c"/><path d="M0 -14 l-6 -9 h12z" fill="#ef4444"/></g></svg>`,
    `<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="#2c3a22"/><g stroke="rgba(0,0,0,.35)">${[...Array(12)].map((_, i) => `<line x1="${i * 30}" y1="0" x2="${i * 30}" y2="150"/><line x1="0" y1="${i * 30}" x2="300" y2="${i * 30}"/>`).join('')}</g><circle cx="60" cy="110" r="9" fill="#2f6bef" stroke="#fff" stroke-width="2"/><line x1="60" y1="110" x2="215" y2="55" stroke="#f59e0b" stroke-width="2" stroke-dasharray="6 5"/><g transform="translate(215 55)"><circle r="6" fill="none" stroke="#fbbf24" stroke-width="2"/><path d="M0 -36 l12 12 -12 12 -12 -12z" fill="#f59e0b" stroke="#1b1306" stroke-width="2"/><text y="-20" text-anchor="middle" font-weight="900" font-size="12" fill="#1b1306">M</text></g><g font-family="monospace" font-size="11" fill="#e7e5d8"><rect x="12" y="128" width="90" height="6" fill="#141410" stroke="#e7e5d8"/><rect x="42" y="128" width="30" height="6" fill="#e7e5d8"/><text x="12" y="124">0</text><text x="96" y="124">300 m</text></g><text x="150" y="20" fill="#fde68a" font-size="12" font-weight="700" text-anchor="middle">%GRID%</text></svg>`,
    `<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="#1b1e15"/><rect x="20" y="16" width="260" height="30" rx="6" fill="rgba(0,0,0,.6)"/><g fill="#cbd5e1" font-size="10" text-anchor="middle">${[...Array(13)].map((_, i) => `<rect x="${30 + i * 20}" y="34" width="1" height="7"/>`).join('')}</g><path d="M150 46 l-6 -8 h12z" fill="#e5e7df"/><path d="M150 22 l7 7 -7 7 -7 -7z" fill="#f59e0b"><animateTransform attributeName="transform" type="translate" values="40 0;0 0;0 0" dur="2.4s" repeatCount="indefinite"/></path><g transform="translate(90 100)"><circle r="34" fill="#3b3f2a" stroke="#000" stroke-width="2"/><g><animateTransform attributeName="transform" type="rotate" values="0;-40;-40" dur="2.4s" repeatCount="indefinite"/><text y="-18" text-anchor="middle" fill="#ef4444" font-weight="900" font-size="12">N</text><line y1="-30" y2="-24" stroke="#e7dfb8" stroke-width="2"/></g><path d="M0 -40 l5 7 h-10z" fill="#f59e0b"/></g><g transform="translate(210 100)"><circle r="30" fill="none" stroke="#4d5236" stroke-width="8"/><g><animateTransform attributeName="transform" type="rotate" values="0;120;120" dur="2.4s" repeatCount="indefinite"/><circle cy="-30" r="6" fill="#8f2d22"/><line y2="-28" stroke="#4d5236" stroke-width="5"/></g></g></svg>`,
    `<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="#2c3a22"/><circle cx="150" cy="80" r="40" fill="rgba(255,190,80,.5)"><animate attributeName="r" values="5;46;30" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;.8;0" dur="1.4s" repeatCount="indefinite"/></circle><circle cx="150" cy="80" r="10" fill="none" stroke="#fff" stroke-width="2"><animate attributeName="r" values="4;60" dur="1.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.4s" repeatCount="indefinite"/></circle><g transform="translate(190 66)"><rect x="-9" y="-6" width="18" height="12" rx="3" fill="#5d5536" stroke="#b91c1c"/></g><rect x="20" y="112" width="120" height="26" rx="13" fill="rgba(0,0,0,.6)"/><text x="80" y="129" text-anchor="middle" fill="#fde68a" font-size="12" font-weight="700">%SHORT%</text><rect x="160" y="112" width="120" height="26" rx="13" fill="rgba(0,0,0,.6)"/><text x="220" y="129" text-anchor="middle" fill="#fde68a" font-size="12" font-weight="700">%RIGHT%</text></svg>`,
    `<svg viewBox="0 0 300 150"><rect width="300" height="150" fill="#2c3a22"/><g stroke="rgba(0,0,0,.4)">${[...Array(12)].map((_, i) => `<line x1="${15 + i * 30}" y1="0" x2="${15 + i * 30}" y2="150"/><line x1="0" y1="${i * 30}" x2="300" y2="${i * 30}"/>`).join('')}</g><path d="M75 135 H165 V15" fill="none" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 4"/><line x1="75" y1="135" x2="165" y2="15" stroke="#fde68a" stroke-width="2.5"/><circle cx="75" cy="135" r="6" fill="#3b82f6" stroke="#000"/><path d="M165 15 l-6 -10 h12z" fill="#ef4444" stroke="#000"/><g font-family="monospace" font-weight="700" font-size="12" fill="#fde68a" stroke="#000" stroke-width="3" paint-order="stroke"><text x="110" y="148">3 × 100 m</text><text x="172" y="80">4 × 100 m</text><text x="60" y="70">√(3²+4²) = 500 m</text></g><g font-family="monospace" font-size="10" fill="#e5e7eb" stroke="#000" stroke-width="3" paint-order="stroke"><text x="200" y="128">1 □ = 100 m</text><text x="200" y="142">↗ □ ≈ 141 m</text></g></svg>`,
  ];
  const TUT_ORDER = [0, 1, 4, 2, 3], TUT_KEYS = ['tut1', 'tut2', 'tut3', 'tut4', 'tutG'];
  let tutI = 0, tutDone = null;
  function showTut(i, done) { tutI = i; if (done !== undefined) tutDone = done; renderTut(); show('ovTut'); }
  function renderTut() {
    const ix = TUT_ORDER[tutI], N = TUT_ORDER.length;
    $('tutIll').innerHTML = TUT_ILL[ix].replace('%GRID%', t('gridSq')).replace('%SHORT%', t('tooShort', { d: 28 })).replace('%RIGHT%', t('right', { d: 12 })); $('tutStep').textContent = `${tutI + 1}/${N}`;
    $('tutTitle').textContent = t(TUT_KEYS[ix] + 't'); $('tutText').textContent = t(TUT_KEYS[ix]);
    $('tutDots').innerHTML = TUT_ORDER.map(k => `<i class="${k === tutI ? 'on' : ''}"></i>`).join('');
    $('tutPrev').textContent = tutI === 0 ? t('skip') : t('prev');
    $('tutNext').textContent = tutI === N - 1 ? t('letsgo') : t('next');
  }
  function closeTut() { hide('ovTut'); try { localStorage.setItem('mt_tut', '1'); } catch (e) {} const d = tutDone; tutDone = null; if (d) d(); }
  $('tutNext').onclick = () => { A.click(); if (tutI < TUT_ORDER.length - 1) { tutI++; renderTut(); } else closeTut(); };
  $('tutPrev').onclick = () => { A.click(); if (tutI === 0) closeTut(); else { tutI--; renderTut(); } };


  // ---------- wiring ----------
  $('btnMap').onclick = () => { if (st.phase === 'aim') { A.click(); openMap('plan'); } };
  $('btnFire').onclick = () => fire();
  $('btnApply').onclick = () => applyMarker();
  $('btnTabClose').onclick = () => { if (MT.map.mode === 'plan') applyMarker(); };
  $('btnClearMarker').onclick = () => { A.click(); st.marker = null; setMapUi(); updateWp(); lockDeck(false); };
  $('zIn').onclick = () => MT.map.zoom(1.5); $('zOut').onclick = () => MT.map.zoom(1 / 1.5); $('zMe').onclick = () => { A.click(); MT.map.centerOwn(); };
  $('btnMute').onclick = () => { A.unlock(); A.setMuted(!A.muted); muteUi(); if (!A.muted) A.click(); };
  function muteUi() { $('btnMute').classList.toggle('muted', A.muted); $('btnMute').setAttribute('aria-label', A.muted ? t('muteOff') : t('muteOn')); }
  $('btnMenu').onclick = () => { A.click(); if (st.phase === 'menu' || st.phase === 'end') return; st.paused = true; show('ovMenu'); };
  $('mResume').onclick = () => { A.click(); st.paused = false; hide('ovMenu'); };
  $('mSettings').onclick = () => { A.click(); openSettings(); };
  $('mHowto').onclick = () => { A.click(); hide('ovMenu'); showTut(0, () => { st.paused = false; }); };
  $('mRestart').onclick = () => { st.paused = false; closeMap(); startGame(st.cfg.mode, st.cfg.mode === 'mission' ? st.cfg.m.id : st.cfg.diff); };
  $('mMain').onclick = () => { st.paused = false; hide('ovMenu'); showHome('home'); };
  MT.map.onMarker = (final) => { setMapUi(); updateWp(); if (final) lockDeck(st.phase === 'flight'); };
  document.addEventListener('visibilitychange', () => { if (document.hidden) { A.suspend(); if (st.phase === 'aim' || st.phase === 'map') { st.paused = true; show('ovMenu'); } } else A.resume(); });
  window.addEventListener('pagehide', () => A.suspend());
  // block pinch/double-tap zoom of the page itself (map has its own pinch)
  document.addEventListener('gesturestart', e => e.preventDefault());
  document.addEventListener('dblclick', e => e.preventDefault());

  // ---------- loop ----------
  let last = performance.now(), clockT = 0, sceneAcc = 0;
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (!st.paused) {
      if (st.cfg.timer && (st.phase === 'aim' || st.phase === 'map') && !st.roundOver && st.target) {
        st.timeLeft -= dt; const tl = Math.max(0, Math.ceil(st.timeLeft));
        $('hudTimer').textContent = tl; $('hudTimerWrap').classList.toggle('warn', st.timeLeft < 10);
        if (st.timeLeft <= 0) timeUp();
      }
      if (st.target && st.target.speed && (st.phase === 'aim' || st.phase === 'map' || st.phase === 'flight')) moveTarget(dt);
    }
    // perf: the scope behind the blurred home menu or the open map tablet is mostly hidden → redraw it at ~12 fps only
    if (!document.hidden) {
      const behind = !$('ovHome').hidden || (MT.map.visible && !MT.map.fly);
      sceneAcc += dt;
      if (!behind || sceneAcc > 0.08) { MT.scene.frame(now, behind ? sceneAcc : dt); sceneAcc = 0; }
      MT.map.frame(now, dt);
    }
    if (now - clockT > 1000) { clockT = now; const d = new Date(); $('tabClock').textContent = d.toLocaleTimeString(MT.lang, { hour: '2-digit', minute: '2-digit' }); }
    requestAnimationFrame(loop);
  }

  // ---------- init ----------
  MT.applyI18n(); muteUi();
  MT.scene.init($('scene'), $('mini')); MT.map.init($('map'));
  st.cfg = cfgFor('free', st.diff); st.rng = Math.random;
  newWorld(4242, META.cos().biome); MT.scene.resize(); syncControls(); updateWp(); updateHud();
  MT.liveUI.init({ toast, rerender: () => renderHome(), reward });
  applyPrefs(); showHome('home');
  (function () {
    const lg = MT.live.touchLogin();
    if (lg.froze) setTimeout(() => toast(t('freezeUsed')), 600); else if (lg.lost) setTimeout(() => toast(t('loginLost', { n: lg.lost })), 600);
    if (MT.live.calCanClaim()) { homeView = 'calendar'; renderHome(); }
  })();
  requestAnimationFrame(loop);
  window.addEventListener('resize', () => { MT.scene.resize(); });
  MT.state = st;
  MT.game = { fire, openMap, closeMap, applyMarker, startGame, nextTarget, setDir, setRng, solveTo, showHome, showEnd, showLevelUp, achToast, confetti, popup, state: st, levelQueue };
})(window.MT = window.MT || {});
