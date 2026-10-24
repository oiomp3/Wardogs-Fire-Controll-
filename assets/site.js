
// ---------- Übersetzungen ----------
const I18N = {
  de: {
    title: 'WARDOGS · Fire Control – Mörser- & Artillerie-Rechner',
    langChoose: 'Sprache wählen',
    badge: 'Community Tool',
    subtitle: 'L81 Mörser · SPH-2 Artillerie',
    ownPos: 'Eigene Position',
    swap: '⇄ Tauschen',
    target: 'Ziel',
    weapon: 'Waffe',
    optMortar: 'L81 Mörser (132–684 m)',
    optArty: 'SPH-2 Artillerie (~780–2629 m)',
    calc: 'Berechnen',
    distance: 'Distanz',
    compassAz: 'Kompass / Azimut',
    azMilLabel: 'Azimut (6400 mil)',
    elevation: 'Elevation (Mils)',
    inRangeMortar: 'In Reichweite (Mörser)',
    tooClose: 'Zu nah (min. {min} m)',
    outOfRangeMortar: 'Außer Reichweite (max. {max} m)',
    inRangeArty: 'In Reichweite (Artillerie)',
    outOfRangeArty: 'Außer Reichweite für SPH-2',
    artyNote: 'Elevation je nach Arc (Low/High) – Community-Tabellen nutzen',
    copyBtn: '📋 Ergebnis kopieren',
    copied: '✓ Kopiert!',
    copyFail: 'Kopieren nicht möglich. Text:',
    enterAll: 'Bitte alle Koordinaten eingeben.',
    history: 'Letzte Schüsse',
    clear: 'Löschen',
    noShots: 'Noch keine Schüsse',
    shotN: 'Schuss {n}',
    clickToLoad: 'Klicken zum Laden',
    shotName: 'Name des Schusses',
    note1: '1 Koordinaten-Einheit = 100 m · Community-Tabellen (nicht offiziell)',
    note2: 'Höhe wird nicht berücksichtigt – immer nach dem ersten Schuss korrigieren.',
    posX: 'Eigene Position X', posY: 'Eigene Position Y', tgtX: 'Ziel X', tgtY: 'Ziel Y',
    posXSlider: 'Eigene Position X (Schieberegler)', posYSlider: 'Eigene Position Y (Schieberegler)',
    tgtXSlider: 'Ziel X (Schieberegler)', tgtYSlider: 'Ziel Y (Schieberegler)',
    menuOpen: 'Menü öffnen', menuClose: 'Menü schließen', mainNav: 'Hauptmenü', menuLabel: 'Menü',
    help: 'Anleitung', install: 'App installieren', about: 'Über / Hinweis',
    footer: 'Community Tool · nicht offiziell',
    installedOk: '✓ Bereits installiert',
    installedText: 'Du nutzt Fire Control gerade als App.',
    installPromptText: 'Installiere Fire Control als App auf deinem Gerät – mit eigenem Icon und auch offline nutzbar.',
    dirs: ['N','NNO','NO','ONO','O','OSO','SO','SSO','S','SSW','SW','WSW','W','WNW','NW','NNW'],
    helpHtml: `<h3>So funktioniert's</h3>
      <ol>
        <li><strong>Eigene Position</strong>: X und Y deiner Waffe eingeben – per Zahlenfeld oder Schieberegler (0–160, 1 Einheit = 100 m).</li>
        <li><strong>Ziel</strong>: X und Y des Ziels eingeben. <strong>⇄ Tauschen</strong> vertauscht Position und Ziel.</li>
        <li><strong>Waffe</strong> wählen: L81 Mörser (132–684 m) oder SPH-2 Artillerie (~780–2629 m).</li>
        <li><strong>Berechnen</strong> tippen.</li>
      </ol>
      <h3>Ergebnis ablesen</h3>
      <ul>
        <li><strong>Distanz</strong> in Metern.</li>
        <li><strong>Kompass / Azimut</strong> in Grad mit Himmelsrichtung, darunter der Azimut in mil (6400er-Teilung).</li>
        <li><strong>Elevation (Mils)</strong> – nur beim Mörser. Für die SPH-2 bitte Community-Tabellen nutzen.</li>
        <li>Grün = in Reichweite, rot = zu nah bzw. außer Reichweite.</li>
      </ul>
      <h3>Kopieren &amp; Verlauf</h3>
      <ul>
        <li><strong>Ergebnis kopieren</strong> legt alle Werte in die Zwischenablage.</li>
        <li><strong>Letzte Schüsse</strong> speichert die letzten 15 Berechnungen im Browser. Antippen lädt einen Schuss erneut, der Name ist umbenennbar, <strong>Löschen</strong> leert die Liste.</li>
      </ul>
      <p class="tip">Höhenunterschiede werden nicht berücksichtigt – nach dem ersten Schuss korrigieren.</p>`,
    installManualHtml: `<h3>iPhone / iPad (Safari)</h3>
      <ol>
        <li>Unten auf <strong>Teilen</strong> tippen (Quadrat mit Pfeil).</li>
        <li><strong>Zum Home-Bildschirm</strong> wählen.</li>
        <li>Mit <strong>Hinzufügen</strong> bestätigen.</li>
      </ol>
      <h3>Andere Browser</h3>
      <p>Im Browser-Menü <strong>App installieren</strong> bzw. <strong>Zum Startbildschirm hinzufügen</strong> wählen.</p>`,
    aboutHtml: `<p><strong>WARDOGS Fire Control</strong> ist ein Rechner für Distanz, Azimut und Mörser-Elevation.</p>
      <ul>
        <li>Community-Tool – <strong>kein offizielles Tool</strong>.</li>
        <li>Die Elevationswerte stammen aus Community-Tabellen.</li>
        <li>Alle Angaben ohne Gewähr.</li>
        <li>Der Schussverlauf wird nur lokal in deinem Browser gespeichert.</li>
      </ul>`
  },
  en: {
    title: 'WARDOGS · Fire Control – Mortar & Artillery Calculator',
    langChoose: 'Choose language',
    badge: 'Community Tool',
    subtitle: 'L81 Mortar · SPH-2 Artillery',
    ownPos: 'Your position',
    swap: '⇄ Swap',
    target: 'Target',
    weapon: 'Weapon',
    optMortar: 'L81 Mortar (132–684 m)',
    optArty: 'SPH-2 Artillery (~780–2629 m)',
    calc: 'Calculate',
    distance: 'Distance',
    compassAz: 'Compass / Azimuth',
    azMilLabel: 'Azimuth (6400 mil)',
    elevation: 'Elevation (mils)',
    inRangeMortar: 'In range (mortar)',
    tooClose: 'Too close (min. {min} m)',
    outOfRangeMortar: 'Out of range (max. {max} m)',
    inRangeArty: 'In range (artillery)',
    outOfRangeArty: 'Out of range for SPH-2',
    artyNote: 'Elevation depends on arc (low/high) – use community tables',
    copyBtn: '📋 Copy result',
    copied: '✓ Copied!',
    copyFail: 'Could not copy. Text:',
    enterAll: 'Please enter all coordinates.',
    history: 'Recent shots',
    clear: 'Clear',
    noShots: 'No shots yet',
    shotN: 'Shot {n}',
    clickToLoad: 'Click to load',
    shotName: 'Shot name',
    note1: '1 coordinate unit = 100 m · community tables (unofficial)',
    note2: 'Terrain height is not accounted for – always correct after the first round.',
    posX: 'Your position X', posY: 'Your position Y', tgtX: 'Target X', tgtY: 'Target Y',
    posXSlider: 'Your position X (slider)', posYSlider: 'Your position Y (slider)',
    tgtXSlider: 'Target X (slider)', tgtYSlider: 'Target Y (slider)',
    menuOpen: 'Open menu', menuClose: 'Close menu', mainNav: 'Main menu', menuLabel: 'Menu',
    help: 'How to use', install: 'Install app', about: 'About / Disclaimer',
    footer: 'Community tool · unofficial',
    installedOk: '✓ Already installed',
    installedText: 'You are currently using Fire Control as an app.',
    installPromptText: 'Install Fire Control as an app on your device – with its own icon and available offline.',
    dirs: ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSW','SW','WSW','W','WNW','NW','NNW'],
    helpHtml: `<h3>How it works</h3>
      <ol>
        <li><strong>Your position</strong>: enter your weapon's X and Y – using the number field or the slider (0–160, 1 unit = 100 m).</li>
        <li><strong>Target</strong>: enter the target's X and Y. <strong>⇄ Swap</strong> exchanges position and target.</li>
        <li>Choose your <strong>weapon</strong>: L81 mortar (132–684 m) or SPH-2 artillery (~780–2629 m).</li>
        <li>Tap <strong>Calculate</strong>.</li>
      </ol>
      <h3>Reading the result</h3>
      <ul>
        <li><strong>Distance</strong> in metres.</li>
        <li><strong>Compass / Azimuth</strong> in degrees with the compass direction, below it the azimuth in mils (6400 system).</li>
        <li><strong>Elevation (mils)</strong> – mortar only. For the SPH-2, please use community tables.</li>
        <li>Green = in range, red = too close or out of range.</li>
      </ul>
      <h3>Copy &amp; history</h3>
      <ul>
        <li><strong>Copy result</strong> copies all values to the clipboard.</li>
        <li><strong>Recent shots</strong> keeps your last 15 calculations in the browser. Tap a shot to load it again, rename it, or tap <strong>Clear</strong> to empty the list.</li>
      </ul>
      <p class="tip">Terrain height is not accounted for – always correct after the first round.</p>`,
    installManualHtml: `<h3>iPhone / iPad (Safari)</h3>
      <ol>
        <li>Tap <strong>Share</strong> (the square with the arrow).</li>
        <li>Choose <strong>Add to Home Screen</strong>.</li>
        <li>Confirm with <strong>Add</strong>.</li>
      </ol>
      <h3>Other browsers</h3>
      <p>Open the browser menu and choose <strong>Install app</strong> or <strong>Add to Home screen</strong>.</p>`,
    aboutHtml: `<p><strong>WARDOGS Fire Control</strong> is a calculator for distance, azimuth and mortar elevation.</p>
      <ul>
        <li>Community tool – <strong>not an official tool</strong>.</li>
        <li>Elevation values come from community tables.</li>
        <li>No guarantee of accuracy.</li>
        <li>Your shot history is stored only locally in your browser.</li>
      </ul>`
  },
  es: {
    title: 'WARDOGS · Fire Control – Calculadora de mortero y artillería',
    langChoose: 'Elegir idioma',
    badge: 'Herramienta comunitaria',
    subtitle: 'Mortero L81 · Artillería SPH-2',
    ownPos: 'Tu posición',
    swap: '⇄ Intercambiar',
    target: 'Objetivo',
    weapon: 'Arma',
    optMortar: 'Mortero L81 (132–684 m)',
    optArty: 'Artillería SPH-2 (~780–2629 m)',
    calc: 'Calcular',
    distance: 'Distancia',
    compassAz: 'Brújula / Azimut',
    azMilLabel: 'Azimut (6400 mil)',
    elevation: 'Elevación (mils)',
    inRangeMortar: 'En alcance (mortero)',
    tooClose: 'Demasiado cerca (mín. {min} m)',
    outOfRangeMortar: 'Fuera de alcance (máx. {max} m)',
    inRangeArty: 'En alcance (artillería)',
    outOfRangeArty: 'Fuera de alcance para el SPH-2',
    artyNote: 'La elevación depende del arco (bajo/alto): usa las tablas de la comunidad',
    copyBtn: '📋 Copiar resultado',
    copied: '✓ ¡Copiado!',
    copyFail: 'No se pudo copiar. Texto:',
    enterAll: 'Introduce todas las coordenadas.',
    history: 'Últimos disparos',
    clear: 'Borrar',
    noShots: 'Aún no hay disparos',
    shotN: 'Disparo {n}',
    clickToLoad: 'Haz clic para cargar',
    shotName: 'Nombre del disparo',
    note1: '1 unidad de coordenadas = 100 m · tablas de la comunidad (no oficiales)',
    note2: 'No se tiene en cuenta la altura del terreno: corrige siempre tras el primer disparo.',
    posX: 'Tu posición X', posY: 'Tu posición Y', tgtX: 'Objetivo X', tgtY: 'Objetivo Y',
    posXSlider: 'Tu posición X (control deslizante)', posYSlider: 'Tu posición Y (control deslizante)',
    tgtXSlider: 'Objetivo X (control deslizante)', tgtYSlider: 'Objetivo Y (control deslizante)',
    menuOpen: 'Abrir menú', menuClose: 'Cerrar menú', mainNav: 'Menú principal', menuLabel: 'Menú',
    help: 'Instrucciones', install: 'Instalar app', about: 'Acerca de / Aviso',
    footer: 'Herramienta comunitaria · no oficial',
    installedOk: '✓ Ya instalada',
    installedText: 'Estás usando Fire Control como app.',
    installPromptText: 'Instala Fire Control como app en tu dispositivo, con su propio icono y disponible sin conexión.',
    dirs: ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSO','SO','OSO','O','ONO','NO','NNO'],
    helpHtml: `<h3>Cómo funciona</h3>
      <ol>
        <li><strong>Tu posición</strong>: introduce la X y la Y de tu arma, con el campo numérico o el control deslizante (0–160, 1 unidad = 100 m).</li>
        <li><strong>Objetivo</strong>: introduce la X y la Y del objetivo. <strong>⇄ Intercambiar</strong> invierte posición y objetivo.</li>
        <li>Elige el <strong>arma</strong>: mortero L81 (132–684 m) o artillería SPH-2 (~780–2629 m).</li>
        <li>Toca <strong>Calcular</strong>.</li>
      </ol>
      <h3>Cómo leer el resultado</h3>
      <ul>
        <li><strong>Distancia</strong> en metros.</li>
        <li><strong>Brújula / Azimut</strong> en grados con el punto cardinal y, debajo, el azimut en mils (sistema de 6400).</li>
        <li><strong>Elevación (mils)</strong>: solo para el mortero. Para el SPH-2, usa las tablas de la comunidad.</li>
        <li>Verde = en alcance; rojo = demasiado cerca o fuera de alcance.</li>
      </ul>
      <h3>Copiar e historial</h3>
      <ul>
        <li><strong>Copiar resultado</strong> copia todos los valores al portapapeles.</li>
        <li><strong>Últimos disparos</strong> guarda tus últimos 15 cálculos en el navegador. Toca un disparo para volver a cargarlo, cámbiale el nombre o pulsa <strong>Borrar</strong> para vaciar la lista.</li>
      </ul>
      <p class="tip">No se tiene en cuenta la altura del terreno: corrige siempre tras el primer disparo.</p>`,
    installManualHtml: `<h3>iPhone / iPad (Safari)</h3>
      <ol>
        <li>Toca <strong>Compartir</strong> (el cuadrado con la flecha).</li>
        <li>Elige <strong>Añadir a pantalla de inicio</strong>.</li>
        <li>Confirma con <strong>Añadir</strong>.</li>
      </ol>
      <h3>Otros navegadores</h3>
      <p>En el menú del navegador, elige <strong>Instalar aplicación</strong> o <strong>Añadir a pantalla de inicio</strong>.</p>`,
    aboutHtml: `<p><strong>WARDOGS Fire Control</strong> es una calculadora de distancia, azimut y elevación del mortero.</p>
      <ul>
        <li>Herramienta de la comunidad: <strong>no es una herramienta oficial</strong>.</li>
        <li>Los valores de elevación proceden de tablas de la comunidad.</li>
        <li>Sin garantía de exactitud.</li>
        <li>El historial de disparos se guarda solo de forma local en tu navegador.</li>
      </ul>`
  },
  fr: {
    title: 'WARDOGS · Fire Control – Calculateur mortier & artillerie',
    langChoose: 'Choisir la langue',
    badge: 'Outil communautaire',
    subtitle: 'Mortier L81 · Artillerie SPH-2',
    ownPos: 'Votre position',
    swap: '⇄ Inverser',
    target: 'Cible',
    weapon: 'Arme',
    optMortar: 'Mortier L81 (132–684 m)',
    optArty: 'Artillerie SPH-2 (~780–2629 m)',
    calc: 'Calculer',
    distance: 'Distance',
    compassAz: 'Boussole / Azimut',
    azMilLabel: 'Azimut (6400 mils)',
    elevation: 'Élévation (mils)',
    inRangeMortar: 'À portée (mortier)',
    tooClose: 'Trop près (min. {min} m)',
    outOfRangeMortar: 'Hors de portée (max. {max} m)',
    inRangeArty: 'À portée (artillerie)',
    outOfRangeArty: 'Hors de portée pour le SPH-2',
    artyNote: 'L\u2019élévation dépend de la trajectoire (tendue/courbe) – utilisez les tables de la communauté',
    copyBtn: '📋 Copier le résultat',
    copied: '✓ Copié\u00a0!',
    copyFail: 'Impossible de copier. Texte\u00a0:',
    enterAll: 'Veuillez saisir toutes les coordonnées.',
    history: 'Derniers tirs',
    clear: 'Effacer',
    noShots: 'Aucun tir pour l\u2019instant',
    shotN: 'Tir {n}',
    clickToLoad: 'Cliquer pour charger',
    shotName: 'Nom du tir',
    note1: '1 unité de coordonnées = 100 m · tables de la communauté (non officielles)',
    note2: 'L\u2019altitude du terrain n\u2019est pas prise en compte – corrigez toujours après le premier tir.',
    posX: 'Votre position X', posY: 'Votre position Y', tgtX: 'Cible X', tgtY: 'Cible Y',
    posXSlider: 'Votre position X (curseur)', posYSlider: 'Votre position Y (curseur)',
    tgtXSlider: 'Cible X (curseur)', tgtYSlider: 'Cible Y (curseur)',
    menuOpen: 'Ouvrir le menu', menuClose: 'Fermer le menu', mainNav: 'Menu principal', menuLabel: 'Menu',
    help: 'Mode d\u2019emploi', install: 'Installer l\u2019app', about: 'À propos / Avertissement',
    footer: 'Outil communautaire · non officiel',
    installedOk: '✓ Déjà installée',
    installedText: 'Vous utilisez actuellement Fire Control en tant qu\u2019application.',
    installPromptText: 'Installez Fire Control comme application sur votre appareil – avec sa propre icône et utilisable hors ligne.',
    dirs: ['N','NNE','NE','ENE','E','ESE','SE','SSE','S','SSO','SO','OSO','O','ONO','NO','NNO'],
    helpHtml: `<h3>Fonctionnement</h3>
      <ol>
        <li><strong>Votre position</strong>&nbsp;: saisissez le X et le Y de votre arme, via le champ numérique ou le curseur (0–160, 1 unité = 100 m).</li>
        <li><strong>Cible</strong>&nbsp;: saisissez le X et le Y de la cible. <strong>⇄ Inverser</strong> échange position et cible.</li>
        <li>Choisissez l\u2019<strong>arme</strong>&nbsp;: mortier L81 (132–684 m) ou artillerie SPH-2 (~780–2629 m).</li>
        <li>Appuyez sur <strong>Calculer</strong>.</li>
      </ol>
      <h3>Lire le résultat</h3>
      <ul>
        <li><strong>Distance</strong> en mètres.</li>
        <li><strong>Boussole / Azimut</strong> en degrés avec le point cardinal, puis l\u2019azimut en mils (système 6400).</li>
        <li><strong>Élévation (mils)</strong>&nbsp;: mortier uniquement. Pour le SPH-2, utilisez les tables de la communauté.</li>
        <li>Vert = à portée, rouge = trop près ou hors de portée.</li>
      </ul>
      <h3>Copie &amp; historique</h3>
      <ul>
        <li><strong>Copier le résultat</strong> copie toutes les valeurs dans le presse-papiers.</li>
        <li><strong>Derniers tirs</strong> enregistre vos 15 derniers calculs dans le navigateur. Appuyez sur un tir pour le recharger, renommez-le ou appuyez sur <strong>Effacer</strong> pour vider la liste.</li>
      </ul>
      <p class="tip">L\u2019altitude du terrain n\u2019est pas prise en compte – corrigez toujours après le premier tir.</p>`,
    installManualHtml: `<h3>iPhone / iPad (Safari)</h3>
      <ol>
        <li>Appuyez sur <strong>Partager</strong> (le carré avec la flèche).</li>
        <li>Choisissez <strong>Sur l\u2019écran d\u2019accueil</strong>.</li>
        <li>Confirmez avec <strong>Ajouter</strong>.</li>
      </ol>
      <h3>Autres navigateurs</h3>
      <p>Dans le menu du navigateur, choisissez <strong>Installer l\u2019application</strong> ou <strong>Ajouter à l\u2019écran d\u2019accueil</strong>.</p>`,
    aboutHtml: `<p><strong>WARDOGS Fire Control</strong> est un calculateur de distance, d\u2019azimut et d\u2019élévation pour le mortier.</p>
      <ul>
        <li>Outil communautaire – <strong>pas un outil officiel</strong>.</li>
        <li>Les valeurs d\u2019élévation proviennent de tables de la communauté.</li>
        <li>Aucune garantie d\u2019exactitude.</li>
        <li>L\u2019historique des tirs est enregistré uniquement en local dans votre navigateur.</li>
      </ul>`
  }
};
const SHARE_I18N = {
  de: {
    share: 'Seite teilen',
    shareText: 'WARDOGS Fire Control – Rechner für Distanz, Azimut und Mörser-Elevation (L81 & SPH-2).',
    copyLink: 'Link kopieren',
    linkCopied: '✓ Kopiert!',
    copyLinkFail: 'Kopieren nicht möglich – Link bitte manuell kopieren.',
    shareVia: 'Teilen über',
    email: 'E-Mail',
    closeShare: 'Teilen schließen',
    pageLink: 'Link zur Seite',
    newTab: 'öffnet in neuem Tab'
  },
  en: {
    share: 'Share page',
    shareText: 'WARDOGS Fire Control – calculator for distance, azimuth and mortar elevation (L81 & SPH-2).',
    copyLink: 'Copy link',
    linkCopied: '✓ Copied!',
    copyLinkFail: 'Could not copy – please copy the link manually.',
    shareVia: 'Share via',
    email: 'Email',
    closeShare: 'Close sharing',
    pageLink: 'Page link',
    newTab: 'opens in a new tab'
  },
  es: {
    share: 'Compartir página',
    shareText: 'WARDOGS Fire Control: calculadora de distancia, azimut y elevación del mortero (L81 y SPH-2).',
    copyLink: 'Copiar enlace',
    linkCopied: '✓ ¡Copiado!',
    copyLinkFail: 'No se pudo copiar: copia el enlace manualmente.',
    shareVia: 'Compartir en',
    email: 'Correo',
    closeShare: 'Cerrar compartir',
    pageLink: 'Enlace de la página',
    newTab: 'se abre en una pestaña nueva'
  },
  fr: {
    share: 'Partager la page',
    shareText: 'WARDOGS Fire Control – calculateur de distance, d\u2019azimut et d\u2019élévation pour le mortier (L81 & SPH-2).',
    copyLink: 'Copier le lien',
    linkCopied: '✓ Copié\u00a0!',
    copyLinkFail: 'Impossible de copier – copiez le lien manuellement.',
    shareVia: 'Partager via',
    email: 'E-mail',
    closeShare: 'Fermer le partage',
    pageLink: 'Lien de la page',
    newTab: 's\u2019ouvre dans un nouvel onglet'
  }
};
Object.keys(SHARE_I18N).forEach(l => Object.assign(I18N[l], SHARE_I18N[l]));

const MUSIC_I18N = {
  de: {
    musicBy: 'Musik von {name}',
    musicShow: 'Musik von {name} anzeigen',
    musicTapNext: 'Tippe im Spotify-Player auf ▶, um weiterzuhören.',
    musicOffline: 'Offline – Spotify-Player nicht verfügbar',
    musicFail: 'Spotify-Player konnte nicht geladen werden.',
    musicLoading: 'Spotify-Player wird geladen …',
    aboutSpotify: 'Der Musik-Player wird von Spotify geladen; dabei werden Daten (z. B. deine IP-Adresse) an Spotify übertragen.'
  },
  en: {
    musicBy: 'Music by {name}',
    musicShow: 'Show music by {name}',
    musicTapNext: 'Tap ▶ in the Spotify player to keep listening.',
    musicOffline: 'Offline – Spotify player unavailable',
    musicFail: 'Could not load the Spotify player.',
    musicLoading: 'Loading Spotify player …',
    aboutSpotify: 'The music player is loaded from Spotify, which means data (e.g. your IP address) is sent to Spotify.'
  },
  es: {
    musicBy: 'Música de {name}',
    musicShow: 'Mostrar música de {name}',
    musicTapNext: 'Toca ▶ en el reproductor de Spotify para seguir escuchando.',
    musicOffline: 'Sin conexión: reproductor de Spotify no disponible',
    musicFail: 'No se pudo cargar el reproductor de Spotify.',
    musicLoading: 'Cargando el reproductor de Spotify…',
    aboutSpotify: 'El reproductor de música se carga desde Spotify, por lo que se envían datos (p. ej., tu dirección IP) a Spotify.'
  },
  fr: {
    musicBy: 'Musique de {name}',
    musicShow: 'Afficher la musique de {name}',
    musicTapNext: 'Appuyez sur ▶ dans le lecteur Spotify pour continuer l\u2019écoute.',
    musicOffline: 'Hors ligne – lecteur Spotify indisponible',
    musicFail: 'Impossible de charger le lecteur Spotify.',
    musicLoading: 'Chargement du lecteur Spotify…',
    aboutSpotify: 'Le lecteur de musique est chargé depuis Spotify\u00a0; des données (p.\u00a0ex. votre adresse IP) sont donc transmises à Spotify.'
  }
};
Object.keys(MUSIC_I18N).forEach(l => {
  Object.assign(I18N[l], MUSIC_I18N[l]);
  I18N[l].aboutHtml = I18N[l].aboutHtml.replace(/<\/ul>\s*$/, '  <li>' + MUSIC_I18N[l].aboutSpotify + '</li>\n      </ul>');
});


const LANGS = {
  de: { name: 'Deutsch', flag: 'flag-de' },
  en: { name: 'English', flag: 'flag-gb' },
  es: { name: 'Español', flag: 'flag-es' },
  fr: { name: 'Français', flag: 'flag-fr' }
};
const DE_DIRS = I18N.de.dirs;
const LEGACY_SHOT = /^(?:Schuss|Shot|Disparo|Tir) (\d+)$/;

function detectLang() {
  // v24: statische Sprachfassung (data-pl) bzw. Sprachpräfix im Pfad hat Vorrang
  const pl = document.documentElement.dataset.pl || (location.pathname.match(/^\/(en|es|fr)\//) || [])[1];
  if (pl && I18N[pl]) return pl;
  try {
    const saved = localStorage.getItem('wardogsLang');
    if (saved && I18N[saved]) return saved;
  } catch (e) {}
  const list = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || ''];
  for (const l of list) {
    const code = String(l).slice(0, 2).toLowerCase();
    if (I18N[code]) return code;
  }
  return 'de';
}

let lang = detectLang();

function t(key, params) {
  let s = (I18N[lang] && I18N[lang][key] !== undefined) ? I18N[lang][key] : I18N.de[key];
  if (typeof s === 'string' && params) s = s.replace(/\{(\w+)\}/g, (m, k) => params[k] !== undefined ? params[k] : m);
  return s;
}

// ---------- Frontbuch: zusätzliche UI-Texte ----------
const FB_I18N = {
  de: {
    musicConsentText: '♪ Musik von cloudybeatz – Beim Abspielen werden Daten an Spotify übertragen.', musicConsentBtn: 'Player laden', musicConsentPrivacy: 'Datenschutz',
    consentOn: 'Status: Spotify-Player erlaubt (Einwilligung gespeichert).', consentOff: 'Status: Spotify-Player nicht geladen (keine Einwilligung).', consentRevokeBtn: 'Einwilligung widerrufen', consentRevoked: 'Einwilligung widerrufen – der Player wird nicht mehr geladen.',
    siteSub: 'Guides & Tools für WARDOGS',
    navHome: 'Start', navGuides: 'Guides', navCalc: 'Mörserrechner', navSlots: 'Loadout-Roulette',
    navGlossary: 'Glossar', navFaq: 'FAQ', navNews: 'Was ist neu', navImpressum: 'Impressum', navPrivacy: 'Datenschutz',
    navMore: 'Mehr', discordJoin: 'Discord beitreten', navLegal: 'Rechtliches',
    fbFooter: 'Inoffizielle Fan-Seite, nicht mit BULKHEAD oder Team17 verbunden.',
    fbFooterSmall: 'WARDOGS ist eine Marke der jeweiligen Rechteinhaber. Alle Angaben ohne Gewähr.',
    footer: 'Inoffizielle Fan-Seite',
    fbDeNote: '',
    searchLabel: 'Guides durchsuchen', searchPh: 'z. B. Mörser, Geld, FOB …', searchNone: 'Keine Guides gefunden.',
    searchCount: '{n} Guides', searchAll: 'Alle', filterLabel: 'Kategorie filtern', searchClear: 'Suche leeren',
    homeKicker: 'Inoffizielle Fan-Seite',
    homeLead: 'Guides, Mörser-Rechner und Tools für WARDOGS.',
    tileGuidesT: 'Guides', tileGuidesD: '{n} Guides von Einstieg bis Artillerie',
    tileCalcT: 'Mörser-Rechner', tileCalcD: 'Distanz, Richtung und Elevation für L81 & SPH-2',
    tileSlotsD: 'Zufalls-Loadout erdrehen und als Challenge teilen.',
    homeContinue: 'Weiter zum Rechner', homeContinueD: 'Dein Schussverlauf ist gespeichert ({n}).',
    homeLatest: 'Neueste Guides', homePopular: 'Beliebte Themen', homeAllGuides: 'Alle Guides →', homeExtras: 'Nachschlagen',
    guidesTitle: 'Alle Guides', guidesLead: 'Filtere nach Kategorie oder suche nach Stichworten.',
    crumbHome: 'Start', crumbLabel: 'Brotkrumen-Navigation',
    calcGuideLink: 'Wie funktioniert der Rechner? → Guide „Mörser L81 & SPH-2“',
    steamGuideLink: 'Auch als englischer Guide auf Steam: „How to Hit with Mortars“ ↗',
    titleHome: 'Frontbuch – Guides und Tools für WARDOGS', titleCalc: 'WARDOGS Mörserrechner (L81 & SPH-2) – Mil & Elevation · Frontbuch',
    titleSlots: 'Loadout-Roulette: Zufalls-Loadout für WARDOGS · Frontbuch', titleGuides: 'Alle Guides · Frontbuch',
    nfTitle: 'Seite nicht gefunden', nfText: 'Diese Seite gibt es nicht (mehr). Vielleicht hilft die Suche?', nfBack: 'Zur Startseite',
    offTitle: 'Du bist offline', offText: 'Diese Seite ist noch nicht gespeichert. Seiten, die du schon besucht hast, sowie Rechner und Loadout-Roulette funktionieren auch offline.',
    skip: 'Zum Inhalt springen',
    installedText: 'Du nutzt Frontbuch gerade als App.',
    installPromptText: 'Installiere Frontbuch als App – mit eigenem Icon. Rechner und besuchte Seiten funktionieren auch offline.',
    shareText: 'Frontbuch – Guides und Tools für WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> ist eine <strong>inoffizielle Fan-Seite</strong> zu WARDOGS – nicht verbunden mit BULKHEAD oder Team17.</p>
      <ul>
        <li>Die Guides sind eigene Texte. Fakten stammen aus öffentlichen Quellen, die unter jedem Guide verlinkt sind.</li>
        <li>Die Elevationswerte im Rechner stammen aus Community-Tabellen.</li>
        <li>Alle Angaben ohne Gewähr.</li>
        <li>Einstellungen, Schussverlauf und Loadouts werden nur lokal in deinem Browser gespeichert.</li>
      </ul>
      <p><a href="/impressum/">Impressum</a> · <a href="/datenschutz/">Datenschutz</a></p>`
  },
  en: {
    musicConsentText: '♪ Music by cloudybeatz – playing it sends data to Spotify.', musicConsentBtn: 'Load player', musicConsentPrivacy: 'Privacy',
    consentOn: 'Status: Spotify player allowed (consent saved).', consentOff: 'Status: Spotify player not loaded (no consent).', consentRevokeBtn: 'Revoke consent', consentRevoked: 'Consent revoked – the player will no longer be loaded.',
    siteSub: 'Guides & tools for WARDOGS',
    navHome: 'Home', navGuides: 'Guides', navCalc: 'Mortar calculator', navSlots: 'Loadout Roulette',
    navGlossary: 'Glossary', navFaq: 'FAQ', navNews: 'What\u2019s new', navImpressum: 'Legal notice', navPrivacy: 'Privacy',
    navMore: 'More', discordJoin: 'Join Discord', navLegal: 'Legal',
    fbFooter: 'Unofficial fan site, not affiliated with BULKHEAD or Team17.',
    fbFooterSmall: 'WARDOGS is a trademark of its respective owners. All information without guarantee.',
    footer: 'Unofficial fan site',
    fbDeNote: '',
    searchLabel: 'Search guides', searchPh: 'e.g. mortar, money, FOB …', searchNone: 'No guides found.',
    searchCount: '{n} guides', searchAll: 'All', filterLabel: 'Filter by category', searchClear: 'Clear search',
    homeKicker: 'Unofficial fan site',
    homeLead: 'Guides, mortar calculator and tools for WARDOGS.',
    tileGuidesT: 'Guides', tileGuidesD: '{n} guides from basics to artillery',
    tileCalcT: 'Mortar calculator', tileCalcD: 'Distance, bearing and elevation for L81 & SPH-2',
    tileSlotsD: 'Spin a random loadout and share it as a challenge.',
    homeContinue: 'Back to the calculator', homeContinueD: 'Your shot history is saved ({n}).',
    homeLatest: 'Latest guides', homePopular: 'Popular topics', homeAllGuides: 'All guides →', homeExtras: 'Reference',
    guidesTitle: 'All guides', guidesLead: 'Filter by category or search by keyword.',
    crumbHome: 'Home', crumbLabel: 'Breadcrumb',
    calcGuideLink: 'How does it work? → Guide \u201cL81 Mortar & SPH-2\u201d',
    steamGuideLink: 'Also on Steam (English): \u201cHow to Hit with Mortars\u201d ↗',
    titleHome: 'Frontbuch – Guides and tools for WARDOGS', titleCalc: 'WARDOGS Mortar Calculator (L81 & SPH-2) – Mil & Elevation · Frontbuch',
    titleSlots: 'Loadout Roulette: random WARDOGS loadout · Frontbuch', titleGuides: 'All guides · Frontbuch',
    nfTitle: 'Page not found', nfText: 'This page does not exist (any more). Maybe the search helps?', nfBack: 'Back to home',
    offTitle: 'You are offline', offText: 'This page has not been saved yet. Pages you already visited, the calculator and the loadout roulette also work offline.',
    skip: 'Skip to content',
    installedText: 'You are currently using Frontbuch as an app.',
    installPromptText: 'Install Frontbuch as an app – with its own icon. The calculator and visited pages also work offline.',
    shareText: 'Frontbuch – guides and tools for WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> is an <strong>unofficial fan site</strong> about WARDOGS – not affiliated with BULKHEAD or Team17.</p>
      <ul>
        <li>The guides are original texts. Facts come from public sources linked below each guide.</li>
        <li>The calculator\u2019s elevation values come from community tables.</li>
        <li>All information without guarantee.</li>
        <li>Settings, shot history and loadouts are stored only locally in your browser.</li>
      </ul>
      <p><a href="/impressum/">Legal notice</a> · <a href="/datenschutz/">Privacy</a></p>`
  },
  es: {
    musicConsentText: '♪ Música de cloudybeatz – al reproducir se envían datos a Spotify.', musicConsentBtn: 'Cargar reproductor', musicConsentPrivacy: 'Privacidad',
    consentOn: 'Estado: reproductor de Spotify permitido (consentimiento guardado).', consentOff: 'Estado: reproductor de Spotify no cargado (sin consentimiento).', consentRevokeBtn: 'Revocar consentimiento', consentRevoked: 'Consentimiento revocado: el reproductor ya no se cargará.',
    siteSub: 'Guías y herramientas para WARDOGS',
    navHome: 'Inicio', navGuides: 'Guías', navCalc: 'Calculadora de mortero', navSlots: 'Ruleta de loadouts',
    navGlossary: 'Glosario', navFaq: 'FAQ', navNews: 'Novedades', navImpressum: 'Aviso legal', navPrivacy: 'Privacidad',
    navMore: 'Más', discordJoin: 'Únete a Discord', navLegal: 'Legal',
    fbFooter: 'Sitio de fans no oficial, sin relación con BULKHEAD ni Team17.',
    fbFooterSmall: 'WARDOGS es una marca de sus respectivos propietarios. Información sin garantía.',
    footer: 'Sitio de fans no oficial',
    fbDeNote: '',
    searchLabel: 'Buscar guías', searchPh: 'p. ej. mortero, dinero, FOB …', searchNone: 'No se encontraron guías.',
    searchCount: '{n} guías', searchAll: 'Todas', filterLabel: 'Filtrar por categoría', searchClear: 'Borrar búsqueda',
    homeKicker: 'Sitio de fans no oficial',
    homeLead: 'Guías, calculadora de mortero y herramientas para WARDOGS.',
    tileGuidesT: 'Guías', tileGuidesD: '{n} guías, de lo básico a la artillería',
    tileCalcT: 'Calculadora de mortero', tileCalcD: 'Distancia, rumbo y elevación para L81 y SPH-2',
    tileSlotsD: 'Gira un loadout aleatorio y compártelo como reto.',
    homeContinue: 'Volver a la calculadora', homeContinueD: 'Tu historial de disparos está guardado ({n}).',
    homeLatest: 'Guías recientes', homePopular: 'Temas populares', homeAllGuides: 'Todas las guías →', homeExtras: 'Consulta',
    guidesTitle: 'Todas las guías', guidesLead: 'Filtra por categoría o busca por palabra clave.',
    crumbHome: 'Inicio', crumbLabel: 'Ruta de navegación',
    calcGuideLink: '¿Cómo funciona? → Guía «Mortero L81 y SPH-2»',
    steamGuideLink: 'También en Steam (en inglés): «How to Hit with Mortars» ↗',
    titleHome: 'Frontbuch – Guías y herramientas para WARDOGS', titleCalc: 'Calculadora de mortero WARDOGS (L81 y SPH-2) – Mil y elevación · Frontbuch',
    titleSlots: 'Ruleta de loadouts: loadout aleatorio para WARDOGS · Frontbuch', titleGuides: 'Todas las guías · Frontbuch',
    nfTitle: 'Página no encontrada', nfText: 'Esta página no existe (o ya no existe). ¿Quizás ayude la búsqueda?', nfBack: 'Ir al inicio',
    offTitle: 'Sin conexión', offText: 'Esta página aún no se ha guardado. Las páginas ya visitadas, la calculadora y la ruleta de loadouts también funcionan sin conexión.',
    skip: 'Saltar al contenido',
    installedText: 'Estás usando Frontbuch como app.',
    installPromptText: 'Instala Frontbuch como app, con su propio icono. La calculadora y las páginas visitadas funcionan sin conexión.',
    shareText: 'Frontbuch – guías y herramientas para WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> es un <strong>sitio de fans no oficial</strong> sobre WARDOGS, sin relación con BULKHEAD ni Team17.</p>
      <ul>
        <li>Las guías son textos propios. Los datos proceden de fuentes públicas enlazadas en cada guía.</li>
        <li>Los valores de elevación de la calculadora proceden de tablas de la comunidad.</li>
        <li>Información sin garantía.</li>
        <li>Los ajustes, el historial y los loadouts solo se guardan localmente en tu navegador.</li>
      </ul>
      <p><a href="/impressum/">Aviso legal</a> · <a href="/datenschutz/">Privacidad</a></p>`
  },
  fr: {
    musicConsentText: '♪ Musique de cloudybeatz – la lecture transmet des données à Spotify.', musicConsentBtn: 'Charger le lecteur', musicConsentPrivacy: 'Confidentialité',
    consentOn: 'Statut : lecteur Spotify autorisé (consentement enregistré).', consentOff: 'Statut : lecteur Spotify non chargé (pas de consentement).', consentRevokeBtn: 'Retirer le consentement', consentRevoked: 'Consentement retiré – le lecteur ne sera plus chargé.',
    siteSub: 'Guides et outils pour WARDOGS',
    navHome: 'Accueil', navGuides: 'Guides', navCalc: 'Calculateur de mortier', navSlots: 'Roulette de loadout',
    navGlossary: 'Glossaire', navFaq: 'FAQ', navNews: 'Nouveautés', navImpressum: 'Mentions légales', navPrivacy: 'Confidentialité',
    navMore: 'Plus', discordJoin: 'Rejoindre Discord', navLegal: 'Légal',
    fbFooter: 'Site de fans non officiel, sans lien avec BULKHEAD ou Team17.',
    fbFooterSmall: 'WARDOGS est une marque de ses détenteurs respectifs. Informations sans garantie.',
    footer: 'Site de fans non officiel',
    fbDeNote: '',
    searchLabel: 'Rechercher des guides', searchPh: 'p. ex. mortier, argent, FOB …', searchNone: 'Aucun guide trouvé.',
    searchCount: '{n} guides', searchAll: 'Tous', filterLabel: 'Filtrer par catégorie', searchClear: 'Effacer la recherche',
    homeKicker: 'Site de fans non officiel',
    homeLead: 'Guides, calculateur de mortier et outils pour WARDOGS.',
    tileGuidesT: 'Guides', tileGuidesD: '{n} guides, des bases à l\u2019artillerie',
    tileCalcT: 'Calculateur de mortier', tileCalcD: 'Distance, gisement et élévation pour L81 et SPH-2',
    tileSlotsD: 'Tire un loadout au hasard et partage-le comme défi.',
    homeContinue: 'Retour au calculateur', homeContinueD: 'Ton historique de tirs est enregistré ({n}).',
    homeLatest: 'Derniers guides', homePopular: 'Sujets populaires', homeAllGuides: 'Tous les guides →', homeExtras: 'Référence',
    guidesTitle: 'Tous les guides', guidesLead: 'Filtre par catégorie ou recherche par mot-clé.',
    crumbHome: 'Accueil', crumbLabel: 'Fil d\u2019Ariane',
    calcGuideLink: 'Comment ça marche ? → Guide « Mortier L81 & SPH-2 »',
    steamGuideLink: 'Aussi sur Steam (en anglais) : « How to Hit with Mortars » ↗',
    titleHome: 'Frontbuch – Guides et outils pour WARDOGS', titleCalc: 'Calculateur de mortier WARDOGS (L81 et SPH-2) – Mil et élévation · Frontbuch',
    titleSlots: 'Roulette de loadout : loadout aléatoire pour WARDOGS · Frontbuch', titleGuides: 'Tous les guides · Frontbuch',
    nfTitle: 'Page introuvable', nfText: 'Cette page n\u2019existe pas (ou plus). La recherche peut peut-être aider ?', nfBack: 'Retour à l\u2019accueil',
    offTitle: 'Tu es hors ligne', offText: 'Cette page n\u2019a pas encore été enregistrée. Les pages déjà visitées, le calculateur et la roulette de loadout fonctionnent aussi hors ligne.',
    skip: 'Aller au contenu',
    installedText: 'Vous utilisez actuellement Frontbuch en tant qu\u2019application.',
    installPromptText: 'Installez Frontbuch comme application – avec sa propre icône. Le calculateur et les pages visitées fonctionnent hors ligne.',
    shareText: 'Frontbuch – guides et outils pour WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> est un <strong>site de fans non officiel</strong> consacré à WARDOGS – sans lien avec BULKHEAD ou Team17.</p>
      <ul>
        <li>Les guides sont des textes originaux. Les faits proviennent de sources publiques citées sous chaque guide.</li>
        <li>Les valeurs d\u2019élévation du calculateur proviennent de tables de la communauté.</li>
        <li>Informations sans garantie.</li>
        <li>Réglages, historique et loadouts sont stockés uniquement en local dans ton navigateur.</li>
      </ul>
      <p><a href="/impressum/">Mentions légales</a> · <a href="/datenschutz/">Confidentialité</a></p>`
  }
};
Object.keys(FB_I18N).forEach(l => Object.assign(I18N[l], FB_I18N[l]));

// ---------- Frontbuch: UI-Texte der Tools (Inhalte bleiben deutsch) ----------
const FB_TOOLS_I18N = {
  de: {
    tStreamT: 'Roulette für Streamer', tStreamD: 'Loadout-Roulette und Challenge-Slot als OBS-Overlay – per Chat-Befehl oder als Widget ohne Chat.', rrForStreamers: 'Für Streamer',
    stChan: 'Twitch-Name', stChanPh: 'deinkanal', stCmd: 'Chat-Befehl', stCd: 'Cooldown (Sek.)', stLang: 'Sprache', stLayout: 'Layout', stLayoutGrid: 'Kasten 800×450', stLayoutRow: 'Leiste 1280×210',
    stScale: 'Größe', stScaleAuto: 'Automatisch', stSound: 'Ton beim Stoppen', stPreview: 'Vorschau des Overlays', stPrevHint: 'Vorschau – Klick dreht.', stUrlH: 'Overlay-URL', stObsH: 'In OBS einbinden',
    stStep1: 'In OBS bei <b>Quellen</b> auf <b>+</b> klicken und <b>Browser</b> wählen.', stStep2: 'URL einfügen, Breite <b>800</b> und Höhe <b>450</b> eintragen (Leiste: 1280 × 210).',
    stStep3: 'Fertig: Dein Chat dreht mit <b>{cmd}</b>. Selbst drehen: Rechtsklick auf die Quelle → <b>Interagieren</b> → klicken.', stToRoulette: '→ Zum Loadout-Roulette',
    rrP: 'Primär', rrS: 'Sekundär', rrL: 'Werfer', rrH: 'Helm', rrV: 'Weste', rrR: 'Rig', rrB: 'Rucksack', rrE: 'Ausrüstung', rrNone: 'Nichts',
    rrSpin: 'Drehen', rrSpinning: 'Dreht …', rrHold: 'Halten', rrCost: 'Gesamtkosten', rrToLoadout: 'Ins Loadout übernehmen', rrShare: 'Challenge teilen',
    rrTag: 'Spiel die nächste Runde mit diesem Loadout.', rrShareText: 'Meine WARDOGS-Loadout-Challenge: Spiel die nächste Runde mit diesem Loadout.',
    navTools: 'Tools', navToolsAll: 'Alle Tools', navRef: 'Nachschlagen', titleTools: 'Tools · Frontbuch', toolsTitle: 'Tools', toolsLead: 'Rechner, Planer und Nachschlagewerke für WARDOGS.',
    tileToolsT: 'Tools', tileToolsD: 'Loadout-Planer, Datenbank, Tierlist',
    tLoadoutT: 'Loadout-Planer', tLoadoutD: 'Loadout bauen: Kosten pro Leben, Gewicht und Freischaltungen.',
    tTierT: 'Tierlist', tTierD: 'Waffen nach Klasse eingestuft.',
    tDbT: 'Datenbank', tDbD: 'Waffen, Rüstung, Fahrzeuge und Ausrüstung durchsuchen und vergleichen.',
    tCalcD: 'Distanz, Richtung und Elevation für L81 & SPH-2',
    tUnknown: '– unbekannt', tCommunity: 'Community-Wert', tFree: 'kostenlos', tStd: 'Standard',
    tSources: 'Quellen', tSearch: 'Suchen', tSearchPh: 'Name, Typ, Kaliber …', tAll: 'Alle', tCat: 'Kategorie', tTrack: 'Track',
    tName: 'Name', tLevel: 'Level', tUnlock: 'Freischaltung', tPrice: 'Preis', tCompare: 'Vergleichen', tCompareShort: 'Vgl.',
    tCompareMax: 'Maximal 3 Einträge vergleichbar.', tCompareClear: 'Vergleich leeren', tClose: 'Schließen',
    tCount: '{n} Einträge', tNone: 'Keine Treffer.', tMissingFields: 'Nicht belegt', tCompatOk: 'passt', tCompatUnknown: 'Kompatibilität unbekannt',
    tProv: 'vorläufig', tToDb: 'In der Datenbank ansehen →', tToLoadout: 'Im Loadout-Planer öffnen →', tTierFilter: 'Klasse filtern',
    tClass: 'Track', tAnyClass: 'Alle', tPrimary: 'Primärwaffe', tSecondary: 'Seitenwaffe', tLauncher: 'Werfer', tAttach: 'Aufsätze',
    tVest: 'Schutzweste', tHelmet: 'Helm', tPack: 'Rucksack', tEquip: 'Ausrüstung', tNoneSel: '– keine –', tNoPrice: 'Preis unbekannt',
    tRig: 'Taktische Weste', tDmgMag: 'Schaden/Magazin', tDmgBody: 'Torso', tDmgHead: 'Kopf', tMagShort: 'Magazin',
    tOtherTrack: 'Andere Tracks', tPickPrimary: 'Erst eine Primärwaffe wählen.', tNoAtt: 'Keine Aufsätze für diese Waffe bekannt.', tQty: 'Anzahl', tSummary: 'Zusammenfassung',
    tGrpWeapons: 'Waffen', tGrpArmor: 'Rüstung & Tragen', tPresets: 'Vorlagen', tPresetApplied: 'Vorlage geladen: {n}',
    tCostLife: 'Kosten pro Leben', tUnlockSum: 'Freischaltkosten', tWeight: 'Gewicht', tCostShort: 'Kosten', tWeightShort: 'Gewicht', tItemsShort: 'Items',
    tUnknownPrices: '+ {n} ohne Preis', tWeightKnown: '{n} von {m} mit Gewicht',
    tBudget: 'Budget ($)', tBudgetLives: 'Reicht für {n} Leben', tBudgetOver: '{n} über Budget',
    tBarWeapons: 'Waffen', tBarAtt: 'Aufsätze', tBarArmor: 'Rüstung & Tragen', tBarEquip: 'Ausrüstung',
    tUnlocksNeeded: 'Nötige Level', tNoLevel: 'Keine Level nötig.', tLevelUnknown: '{n} ohne Level-Angabe', tItemList: 'Liste', tEmptyLoadout: 'Noch nichts ausgewählt.',
    tCompareBase: 'Vergleichen', tCompareOn: 'Vergleich beenden', tBaseSet: 'Aktuelles Loadout als Vergleich gemerkt.',
    tCopyLink: 'Link kopieren', tCopied: 'Link kopiert!', tReset: 'Zurücksetzen', tShareLabel: 'Link zu diesem Loadout',
    tSavedKits: 'Gespeicherte Loadouts', tSaveName: 'Name', tSave: 'Speichern', tLoad: 'Laden', tDelete: 'Löschen', tSavedNone: 'Noch keine gespeichert.',
    tSavedOk: 'Gespeichert: {n}', tSavedMax: 'Maximal 12 Loadouts.', tUntitled: 'Loadout', tLv: 'Lv',
  },
  en: {
    tStreamT: 'Roulette for streamers', tStreamD: 'Loadout roulette and Challenge Slot as an OBS overlay – by chat command or as a widget without chat.', rrForStreamers: 'For streamers',
    stChan: 'Twitch name', stChanPh: 'yourchannel', stCmd: 'Chat command', stCd: 'Cooldown (sec.)', stLang: 'Language', stLayout: 'Layout', stLayoutGrid: 'Box 800×450', stLayoutRow: 'Bar 1280×210',
    stScale: 'Size', stScaleAuto: 'Automatic', stSound: 'Sound on stop', stPreview: 'Overlay preview', stPrevHint: 'Preview – click to spin.', stUrlH: 'Overlay URL', stObsH: 'Add to OBS',
    stStep1: 'In OBS, click <b>+</b> under <b>Sources</b> and choose <b>Browser</b>.', stStep2: 'Paste the URL, set width <b>800</b> and height <b>450</b> (bar: 1280 × 210).',
    stStep3: 'Done: your chat spins with <b>{cmd}</b>. To spin yourself: right-click the source → <b>Interact</b> → click.', stToRoulette: '→ Go to the loadout roulette',
    rrP: 'Primary', rrS: 'Secondary', rrL: 'Launcher', rrH: 'Helmet', rrV: 'Vest', rrR: 'Rig', rrB: 'Backpack', rrE: 'Equipment', rrNone: 'Nothing',
    rrSpin: 'Spin', rrSpinning: 'Spinning …', rrHold: 'Hold', rrCost: 'Total cost', rrToLoadout: 'Open in loadout planner', rrShare: 'Share challenge',
    rrTag: 'Play your next round with this loadout.', rrShareText: 'My WARDOGS loadout challenge: play your next round with this loadout.',
    navTools: 'Tools', navToolsAll: 'All tools', navRef: 'Reference', titleTools: 'Tools · Frontbuch', toolsTitle: 'Tools', toolsLead: 'Calculators, planners and references for WARDOGS.',
    tileToolsT: 'Tools', tileToolsD: 'Loadout planner, database, tier list',
    tLoadoutT: 'Loadout planner', tLoadoutD: 'Build a loadout: cost per life, weight and unlocks.',
    tTierT: 'Tier list', tTierD: 'Weapons ranked by class.',
    tDbT: 'Database', tDbD: 'Search and compare weapons, armour, vehicles and equipment.',
    tCalcD: 'Distance, bearing and elevation for L81 & SPH-2',
    tUnknown: '– unknown', tCommunity: 'Community value', tFree: 'free', tStd: 'Default',
    tSources: 'Sources', tSearch: 'Search', tSearchPh: 'Name, type, calibre …', tAll: 'All', tCat: 'Category', tTrack: 'Track',
    tName: 'Name', tLevel: 'Level', tUnlock: 'Unlock', tPrice: 'Price', tCompare: 'Compare', tCompareShort: 'Cmp.',
    tCompareMax: 'You can compare up to 3 entries.', tCompareClear: 'Clear comparison', tClose: 'Close',
    tCount: '{n} entries', tNone: 'No results.', tMissingFields: 'Not sourced', tCompatOk: 'fits', tCompatUnknown: 'Compatibility unknown',
    tProv: 'provisional', tToDb: 'View in database →', tToLoadout: 'Open in loadout planner →', tTierFilter: 'Filter class',
    tClass: 'Track', tAnyClass: 'All', tPrimary: 'Primary', tSecondary: 'Sidearm', tLauncher: 'Launcher', tAttach: 'Attachments',
    tVest: 'Body armour', tHelmet: 'Helmet', tPack: 'Backpack', tEquip: 'Equipment', tNoneSel: '– none –', tNoPrice: 'Price unknown',
    tRig: 'Tac vest', tDmgMag: 'Damage/mag', tDmgBody: 'Body', tDmgHead: 'Head', tMagShort: 'Mag',
    tOtherTrack: 'Other tracks', tPickPrimary: 'Pick a primary first.', tNoAtt: 'No known attachments for this weapon.', tQty: 'Quantity', tSummary: 'Summary',
    tGrpWeapons: 'Weapons', tGrpArmor: 'Armour & carry', tPresets: 'Presets', tPresetApplied: 'Preset loaded: {n}',
    tCostLife: 'Cost per life', tUnlockSum: 'Unlock cost', tWeight: 'Weight', tCostShort: 'Cost', tWeightShort: 'Weight', tItemsShort: 'Items',
    tUnknownPrices: '+ {n} without price', tWeightKnown: '{n} of {m} with weight',
    tBudget: 'Budget ($)', tBudgetLives: 'Enough for {n} lives', tBudgetOver: '{n} over budget',
    tBarWeapons: 'Weapons', tBarAtt: 'Attachments', tBarArmor: 'Armour & carry', tBarEquip: 'Equipment',
    tUnlocksNeeded: 'Levels needed', tNoLevel: 'No levels needed.', tLevelUnknown: '{n} without level info', tItemList: 'List', tEmptyLoadout: 'Nothing selected yet.',
    tCompareBase: 'Compare', tCompareOn: 'Stop comparing', tBaseSet: 'Current loadout saved as baseline.',
    tCopyLink: 'Copy link', tCopied: 'Link copied!', tReset: 'Reset', tShareLabel: 'Link to this loadout',
    tSavedKits: 'Saved loadouts', tSaveName: 'Name', tSave: 'Save', tLoad: 'Load', tDelete: 'Delete', tSavedNone: 'None saved yet.',
    tSavedOk: 'Saved: {n}', tSavedMax: 'Up to 12 loadouts.', tUntitled: 'Loadout', tLv: 'Lv',
  },
  es: {
    tStreamT: 'Ruleta para streamers', tStreamD: 'Ruleta de loadouts y tragaperras de retos como overlay de OBS: por comando del chat o como widget sin chat.', rrForStreamers: 'Para streamers',
    stChan: 'Nombre en Twitch', stChanPh: 'tucanal', stCmd: 'Comando del chat', stCd: 'Cooldown (s)', stLang: 'Idioma', stLayout: 'Diseño', stLayoutGrid: 'Caja 800×450', stLayoutRow: 'Barra 1280×210',
    stScale: 'Tamaño', stScaleAuto: 'Automático', stSound: 'Sonido al parar', stPreview: 'Vista previa del overlay', stPrevHint: 'Vista previa: haz clic para girar.', stUrlH: 'URL del overlay', stObsH: 'Añadir a OBS',
    stStep1: 'En OBS, pulsa <b>+</b> en <b>Fuentes</b> y elige <b>Navegador</b>.', stStep2: 'Pega la URL y pon ancho <b>800</b> y alto <b>450</b> (barra: 1280 × 210).',
    stStep3: 'Listo: tu chat gira con <b>{cmd}</b>. Para girar tú: clic derecho en la fuente → <b>Interactuar</b> → clic.', stToRoulette: '→ Ir a la ruleta de loadouts',
    rrP: 'Primaria', rrS: 'Secundaria', rrL: 'Lanzador', rrH: 'Casco', rrV: 'Chaleco', rrR: 'Rig', rrB: 'Mochila', rrE: 'Equipo', rrNone: 'Nada',
    rrSpin: 'Girar', rrSpinning: 'Girando…', rrHold: 'Fijar', rrCost: 'Coste total', rrToLoadout: 'Pasar al planificador', rrShare: 'Compartir reto',
    rrTag: 'Juega la próxima ronda con este loadout.', rrShareText: 'Mi reto de loadout en WARDOGS: juega la próxima ronda con este loadout.',
    navTools: 'Herramientas', navToolsAll: 'Todas las herramientas', navRef: 'Consulta', titleTools: 'Herramientas · Frontbuch', toolsTitle: 'Herramientas', toolsLead: 'Calculadoras, planificadores y referencias para WARDOGS.',
    tileToolsT: 'Herramientas', tileToolsD: 'Planificador de equipamiento, base de datos, tier list',
    tLoadoutT: 'Planificador de equipamiento', tLoadoutD: 'Crea un equipamiento: coste por vida, peso y desbloqueos.',
    tTierT: 'Tier list', tTierD: 'Armas clasificadas por clase.',
    tDbT: 'Base de datos', tDbD: 'Busca y compara armas, blindaje, vehículos y equipo.',
    tCalcD: 'Distancia, rumbo y elevación para L81 y SPH-2',
    tUnknown: '– desconocido', tCommunity: 'Valor de la comunidad', tFree: 'gratis', tStd: 'Estándar',
    tSources: 'Fuentes', tSearch: 'Buscar', tSearchPh: 'Nombre, tipo, calibre …', tAll: 'Todos', tCat: 'Categoría', tTrack: 'Track',
    tName: 'Nombre', tLevel: 'Nivel', tUnlock: 'Desbloqueo', tPrice: 'Precio', tCompare: 'Comparar', tCompareShort: 'Comp.',
    tCompareMax: 'Puedes comparar hasta 3 entradas.', tCompareClear: 'Vaciar comparación', tClose: 'Cerrar',
    tCount: '{n} entradas', tNone: 'Sin resultados.', tMissingFields: 'Sin fuente', tCompatOk: 'compatible', tCompatUnknown: 'Compatibilidad desconocida',
    tProv: 'provisional', tToDb: 'Ver en la base de datos →', tToLoadout: 'Abrir en el planificador →', tTierFilter: 'Filtrar clase',
    tClass: 'Track', tAnyClass: 'Todos', tPrimary: 'Arma principal', tSecondary: 'Arma secundaria', tLauncher: 'Lanzador', tAttach: 'Accesorios',
    tVest: 'Chaleco antibalas', tHelmet: 'Casco', tPack: 'Mochila', tEquip: 'Equipo', tNoneSel: '– ninguno –', tNoPrice: 'Precio desconocido',
    tRig: 'Chaleco táctico', tDmgMag: 'Daño/cargador', tDmgBody: 'Torso', tDmgHead: 'Cabeza', tMagShort: 'Cargador',
    tOtherTrack: 'Otros tracks', tPickPrimary: 'Elige primero un arma principal.', tNoAtt: 'No hay accesorios conocidos para esta arma.', tQty: 'Cantidad', tSummary: 'Resumen',
    tGrpWeapons: 'Armas', tGrpArmor: 'Blindaje y carga', tPresets: 'Plantillas', tPresetApplied: 'Plantilla cargada: {n}',
    tCostLife: 'Coste por vida', tUnlockSum: 'Coste de desbloqueo', tWeight: 'Peso', tCostShort: 'Coste', tWeightShort: 'Peso', tItemsShort: 'Objetos',
    tUnknownPrices: '+ {n} sin precio', tWeightKnown: '{n} de {m} con peso',
    tBudget: 'Presupuesto ($)', tBudgetLives: 'Alcanza para {n} vidas', tBudgetOver: '{n} por encima del presupuesto',
    tBarWeapons: 'Armas', tBarAtt: 'Accesorios', tBarArmor: 'Blindaje y carga', tBarEquip: 'Equipo',
    tUnlocksNeeded: 'Niveles necesarios', tNoLevel: 'No se necesitan niveles.', tLevelUnknown: '{n} sin nivel', tItemList: 'Lista', tEmptyLoadout: 'Aún no hay nada seleccionado.',
    tCompareBase: 'Comparar', tCompareOn: 'Dejar de comparar', tBaseSet: 'Equipamiento actual guardado como referencia.',
    tCopyLink: 'Copiar enlace', tCopied: '¡Enlace copiado!', tReset: 'Restablecer', tShareLabel: 'Enlace a este equipamiento',
    tSavedKits: 'Equipamientos guardados', tSaveName: 'Nombre', tSave: 'Guardar', tLoad: 'Cargar', tDelete: 'Borrar', tSavedNone: 'Aún no hay ninguno guardado.',
    tSavedOk: 'Guardado: {n}', tSavedMax: 'Máximo 12 equipamientos.', tUntitled: 'Equipamiento', tLv: 'Nv',
  },
  fr: {
    tStreamT: 'Roulette pour streamers', tStreamD: 'La roulette de loadout et la machine à sous des défis en overlay OBS – par commande du chat ou en widget sans chat.', rrForStreamers: 'Pour les streamers',
    stChan: 'Nom Twitch', stChanPh: 'tachaine', stCmd: 'Commande du chat', stCd: 'Cooldown (s)', stLang: 'Langue', stLayout: 'Disposition', stLayoutGrid: 'Bloc 800×450', stLayoutRow: 'Barre 1280×210',
    stScale: 'Taille', stScaleAuto: 'Automatique', stSound: 'Son à l\u2019arrêt', stPreview: 'Aperçu de l\u2019overlay', stPrevHint: 'Aperçu – clique pour lancer.', stUrlH: 'URL de l\u2019overlay', stObsH: 'Ajouter à OBS',
    stStep1: 'Dans OBS, clique sur <b>+</b> sous <b>Sources</b> et choisis <b>Navigateur</b>.', stStep2: 'Colle l\u2019URL, largeur <b>800</b> et hauteur <b>450</b> (barre : 1280 × 210).',
    stStep3: 'C\u2019est prêt : ton chat lance avec <b>{cmd}</b>. Pour lancer toi-même : clic droit sur la source → <b>Interagir</b> → clic.', stToRoulette: '→ Vers la roulette de loadout',
    rrP: 'Principale', rrS: 'Secondaire', rrL: 'Lanceur', rrH: 'Casque', rrV: 'Gilet', rrR: 'Rig', rrB: 'Sac à dos', rrE: 'Équipement', rrNone: 'Rien',
    rrSpin: 'Lancer', rrSpinning: 'Ça tourne…', rrHold: 'Garder', rrCost: 'Coût total', rrToLoadout: 'Ouvrir dans le planificateur', rrShare: 'Partager le défi',
    rrTag: 'Joue la prochaine manche avec ce loadout.', rrShareText: 'Mon défi de loadout WARDOGS : joue la prochaine manche avec ce loadout.',
    navTools: 'Outils', navToolsAll: 'Tous les outils', navRef: 'Référence', titleTools: 'Outils · Frontbuch', toolsTitle: 'Outils', toolsLead: 'Calculateurs, planificateurs et références pour WARDOGS.',
    tileToolsT: 'Outils', tileToolsD: 'Planificateur d’équipement, base de données, tier list',
    tLoadoutT: 'Planificateur d’équipement', tLoadoutD: 'Compose un équipement : coût par vie, poids et déblocages.',
    tTierT: 'Tier list', tTierD: 'Armes classées par classe.',
    tDbT: 'Base de données', tDbD: 'Recherche et compare armes, armures, véhicules et équipement.',
    tCalcD: 'Distance, cap et élévation pour L81 et SPH-2',
    tUnknown: '– inconnu', tCommunity: 'Valeur de la communauté', tFree: 'gratuit', tStd: 'Standard',
    tSources: 'Sources', tSearch: 'Rechercher', tSearchPh: 'Nom, type, calibre …', tAll: 'Tous', tCat: 'Catégorie', tTrack: 'Track',
    tName: 'Nom', tLevel: 'Niveau', tUnlock: 'Déblocage', tPrice: 'Prix', tCompare: 'Comparer', tCompareShort: 'Comp.',
    tCompareMax: 'Tu peux comparer 3 entrées au maximum.', tCompareClear: 'Vider la comparaison', tClose: 'Fermer',
    tCount: '{n} entrées', tNone: 'Aucun résultat.', tMissingFields: 'Sans source', tCompatOk: 'compatible', tCompatUnknown: 'Compatibilité inconnue',
    tProv: 'provisoire', tToDb: 'Voir dans la base de données →', tToLoadout: 'Ouvrir dans le planificateur →', tTierFilter: 'Filtrer la classe',
    tClass: 'Track', tAnyClass: 'Tous', tPrimary: 'Arme principale', tSecondary: 'Arme de poing', tLauncher: 'Lanceur', tAttach: 'Accessoires',
    tVest: 'Gilet pare-balles', tHelmet: 'Casque', tPack: 'Sac à dos', tEquip: 'Équipement', tNoneSel: '– aucun –', tNoPrice: 'Prix inconnu',
    tRig: 'Gilet tactique', tDmgMag: 'Dégâts/chargeur', tDmgBody: 'Torse', tDmgHead: 'Tête', tMagShort: 'Chargeur',
    tOtherTrack: 'Autres tracks', tPickPrimary: 'Choisis d’abord une arme principale.', tNoAtt: 'Aucun accessoire connu pour cette arme.', tQty: 'Quantité', tSummary: 'Résumé',
    tGrpWeapons: 'Armes', tGrpArmor: 'Armure et portage', tPresets: 'Modèles', tPresetApplied: 'Modèle chargé : {n}',
    tCostLife: 'Coût par vie', tUnlockSum: 'Coût de déblocage', tWeight: 'Poids', tCostShort: 'Coût', tWeightShort: 'Poids', tItemsShort: 'Objets',
    tUnknownPrices: '+ {n} sans prix', tWeightKnown: '{n} sur {m} avec poids',
    tBudget: 'Budget ($)', tBudgetLives: 'Suffit pour {n} vies', tBudgetOver: '{n} au-dessus du budget',
    tBarWeapons: 'Armes', tBarAtt: 'Accessoires', tBarArmor: 'Armure et portage', tBarEquip: 'Équipement',
    tUnlocksNeeded: 'Niveaux requis', tNoLevel: 'Aucun niveau requis.', tLevelUnknown: '{n} sans niveau', tItemList: 'Liste', tEmptyLoadout: 'Rien de sélectionné pour l’instant.',
    tCompareBase: 'Comparer', tCompareOn: 'Arrêter la comparaison', tBaseSet: 'Équipement actuel gardé comme référence.',
    tCopyLink: 'Copier le lien', tCopied: 'Lien copié !', tReset: 'Réinitialiser', tShareLabel: 'Lien vers cet équipement',
    tSavedKits: 'Équipements enregistrés', tSaveName: 'Nom', tSave: 'Enregistrer', tLoad: 'Charger', tDelete: 'Supprimer', tSavedNone: 'Aucun enregistré pour l’instant.',
    tSavedOk: 'Enregistré : {n}', tSavedMax: '12 équipements au maximum.', tUntitled: 'Équipement', tLv: 'Niv.',
  },
};
Object.keys(FB_TOOLS_I18N).forEach(l => Object.assign(I18N[l], FB_TOOLS_I18N[l]));

// ---------- Frontbuch v15: neue UI-Texte ----------
const FB15_I18N = {
  de: {
    dbMags: 'Magazine',
    fld_cap: 'Kapazität (Schuss)', fld_bdmg: 'Schaden', fld_arms: 'Waffenklasse',
    tRecoil: 'Rückstoß', fld_vrec: 'Vertikaler Rückstoß (%)', fld_hrec: 'Horizontaler Rückstoß (%)', fld_spread: 'Streuung (%)', fld_ads: 'ADS-Zeit (%)', fld_adsSec: 'ADS-Zeit (s)', fld_zoom: 'Zoom',
    cmpMagMax: 'Größtes Magazin',
    tabNav: 'Schnellnavigation', tabSearch: 'Suche', tabMenu: 'Menü', searchBtn: 'Suchen', sPh: 'Guides, Waffen, Begriffe …',
    sAll: 'Alle', sClose: 'Schließen', sResults: 'Ergebnisse', sNone: 'Nichts gefunden.', sRecent: 'Zuletzt angesehen', sQuick: 'Schnellzugriff',
    sAllResults: 'Alle Ergebnisse', fav: 'Merken', faved: 'Gemerkt', favRemove: 'Entfernen', navFavs: 'Merkliste', favsSaved: 'Gemerkt',
    favsEmpty: 'Noch nichts gemerkt.', recentEmpty: 'Noch nichts angesehen.', recentClear: 'Verlauf löschen',
    homeNew: 'Neu & beliebt', homeMeta: 'Meta-Loadouts', homeCats: 'Kategorien',
    gToc: 'Inhalt', gNext: 'Weiter mit', gRelated: 'Verwandte Guides', gMentioned: 'Im Guide erwähnt',
    cmpT: 'Waffenvergleich', cmpD: 'Schaden, Feuerrate und Magazin nebeneinander.', cmpWeapon: 'Waffe', cmpDps: 'Schaden/Sek.', cmpAdd: 'Waffe wählen',
    loRandom: '🎲 Zufall', loRandomMsg: 'Zufalls-Loadout erstellt.', dbInTier: 'Tierlist', dbInGuides: 'In Guides', dbToCmp: 'Vergleichen',
    titleFavs: 'Merkliste · Frontbuch', guidesN: '{n} Guides', minRead: '{n} Min.'
  },
  en: {
    dbMags: 'Magazines',
    fld_cap: 'Capacity (rounds)', fld_bdmg: 'Damage', fld_arms: 'Arms class',
    tRecoil: 'Recoil', fld_vrec: 'Vertical recoil (%)', fld_hrec: 'Horizontal recoil (%)', fld_spread: 'Spread (%)', fld_ads: 'ADS time (%)', fld_adsSec: 'ADS time (s)', fld_zoom: 'Zoom',
    cmpMagMax: 'Largest magazine',
    tabNav: 'Quick navigation', tabSearch: 'Search', tabMenu: 'Menu', searchBtn: 'Search', sPh: 'Guides, weapons, terms …',
    sAll: 'All', sClose: 'Close', sResults: 'Results', sNone: 'Nothing found.', sRecent: 'Recently viewed', sQuick: 'Quick access',
    sAllResults: 'All results', fav: 'Save', faved: 'Saved', favRemove: 'Remove', navFavs: 'Saved', favsSaved: 'Saved',
    favsEmpty: 'Nothing saved yet.', recentEmpty: 'Nothing viewed yet.', recentClear: 'Clear history',
    homeNew: 'New & popular', homeMeta: 'Meta loadouts', homeCats: 'Categories',
    gToc: 'Contents', gNext: 'Up next', gRelated: 'Related guides', gMentioned: 'Mentioned in this guide',
    cmpT: 'Weapon compare', cmpD: 'Damage, fire rate and magazine side by side.', cmpWeapon: 'Weapon', cmpDps: 'Damage/sec', cmpAdd: 'Pick a weapon',
    loRandom: '🎲 Random', loRandomMsg: 'Random loadout created.', dbInTier: 'Tier list', dbInGuides: 'In guides', dbToCmp: 'Compare',
    titleFavs: 'Saved · Frontbuch', guidesN: '{n} guides', minRead: '{n} min'
  },
  es: {
    dbMags: 'Cargadores',
    fld_cap: 'Capacidad (balas)', fld_bdmg: 'Daño', fld_arms: 'Clase de arma',
    tRecoil: 'Retroceso', fld_vrec: 'Retroceso vertical (%)', fld_hrec: 'Retroceso horizontal (%)', fld_spread: 'Dispersión (%)', fld_ads: 'Tiempo de apuntado (%)', fld_adsSec: 'Tiempo de apuntado (s)', fld_zoom: 'Zoom',
    cmpMagMax: 'Cargador más grande',
    tabNav: 'Navegación rápida', tabSearch: 'Buscar', tabMenu: 'Menú', searchBtn: 'Buscar', sPh: 'Guías, armas, términos …',
    sAll: 'Todo', sClose: 'Cerrar', sResults: 'Resultados', sNone: 'No se encontró nada.', sRecent: 'Vistos recientemente', sQuick: 'Acceso rápido',
    sAllResults: 'Todos los resultados', fav: 'Guardar', faved: 'Guardado', favRemove: 'Quitar', navFavs: 'Guardados', favsSaved: 'Guardados',
    favsEmpty: 'Aún no has guardado nada.', recentEmpty: 'Aún no has visto nada.', recentClear: 'Borrar historial',
    homeNew: 'Nuevo y popular', homeMeta: 'Loadouts meta', homeCats: 'Categorías',
    gToc: 'Contenido', gNext: 'Sigue con', gRelated: 'Guías relacionadas', gMentioned: 'Mencionado en la guía',
    cmpT: 'Comparar armas', cmpD: 'Daño, cadencia y cargador lado a lado.', cmpWeapon: 'Arma', cmpDps: 'Daño/seg.', cmpAdd: 'Elegir arma',
    loRandom: '🎲 Aleatorio', loRandomMsg: 'Loadout aleatorio creado.', dbInTier: 'Tier list', dbInGuides: 'En guías', dbToCmp: 'Comparar',
    titleFavs: 'Guardados · Frontbuch', guidesN: '{n} guías', minRead: '{n} min'
  },
  fr: {
    dbMags: 'Chargeurs',
    fld_cap: 'Capacité (cartouches)', fld_bdmg: 'Dégâts', fld_arms: 'Classe d’arme',
    tRecoil: 'Recul', fld_vrec: 'Recul vertical (%)', fld_hrec: 'Recul horizontal (%)', fld_spread: 'Dispersion (%)', fld_ads: 'Temps de visée (%)', fld_adsSec: 'Temps de visée (s)', fld_zoom: 'Zoom',
    cmpMagMax: 'Plus grand chargeur',
    tabNav: 'Navigation rapide', tabSearch: 'Recherche', tabMenu: 'Menu', searchBtn: 'Rechercher', sPh: 'Guides, armes, termes …',
    sAll: 'Tout', sClose: 'Fermer', sResults: 'Résultats', sNone: 'Aucun résultat.', sRecent: 'Vus récemment', sQuick: 'Accès rapide',
    sAllResults: 'Tous les résultats', fav: 'Enregistrer', faved: 'Enregistré', favRemove: 'Retirer', navFavs: 'Favoris', favsSaved: 'Enregistrés',
    favsEmpty: 'Rien d’enregistré pour l’instant.', recentEmpty: 'Rien de consulté pour l’instant.', recentClear: 'Effacer l’historique',
    homeNew: 'Nouveau & populaire', homeMeta: 'Loadouts méta', homeCats: 'Catégories',
    gToc: 'Sommaire', gNext: 'À suivre', gRelated: 'Guides liés', gMentioned: 'Cité dans ce guide',
    cmpT: 'Comparateur d’armes', cmpD: 'Dégâts, cadence et chargeur côte à côte.', cmpWeapon: 'Arme', cmpDps: 'Dégâts/s', cmpAdd: 'Choisir une arme',
    loRandom: '🎲 Aléatoire', loRandomMsg: 'Loadout aléatoire créé.', dbInTier: 'Tier list', dbInGuides: 'Dans les guides', dbToCmp: 'Comparer',
    titleFavs: 'Favoris · Frontbuch', guidesN: '{n} guides', minRead: '{n} min'
  }
};
Object.keys(FB15_I18N).forEach(l => Object.assign(I18N[l], FB15_I18N[l]));

// ---------- Frontbuch v25: Progression-Planer, Preis-Leistung (Tierlist), Tools-Menügruppen ----------
const FB25_I18N = {
  de: {
    navGrpMatch: 'Im Match', navGrpPlan: 'Planen', navGrpData: 'Waffen & Daten',
    tProgT: 'Progression-Planer', tProgD: 'Nächste Freischaltungen pro Track – mit Level und Kosten.',
    prLevel: 'Dein Level', prCash: 'Dein Kontostand ($)', prTo: 'Bis Level (optional)', prToPh: 'alle',
    prNextH: 'Nächste Freischaltungen', prHaveH: 'Schon im Level erreicht', prHaveHint: 'Ab deinem Level verfügbar – die einmalige Freischaltung musst du ggf. noch bezahlen.',
    prStdH: 'Standard & Level unbekannt', prXpH: 'So levelst du schneller',
    prTip1: '<b>Logistik in Serie:</b> Wer Kisten, Paletten oder Spieler nacheinander in die Control Zone bringt, bekommt pro Lieferung in Folge mehr XP (z. B. +100 XP pro Palette, bis 10 in Folge).',
    prTip2: '<b>Ziele angreifen:</b> Einen feindlichen Drill Tower erobern bringt jetzt 300 XP, eine feindliche FOB hacken 250 XP – auch für Teammitglieder im Radius.',
    prTip3: '<b>Richtigen Track füttern:</b> Bauwerke zerstören sowie IED/C4 zählen für Assault, Artillerie für Driver, Reparieren je nach Fahrzeug für Driver oder Pilot.',
    prTip4: '<b>Bewaffnete Fahrzeuge jagen:</b> Bewaffnete Varianten bringen 1,5-mal so viel XP wie die Standardvariante.',
    prTip5: '<b>Lonestar:</b> In Season 2 bekommt Lonestar testweise einen Cash- und XP-Bonus.',
    prTip6: '<b>Kein XP-Farming:</b> BULKHEAD bestraft Exploits mit Reset von Cash und XP, XP-Farming mit dauerhafter Sperre.',
    prXpSrc: 'Alles laut offiziellen Patchnotes (Season 2 bzw. Patch 0.11), in eigenen Worten.',
    prToGuide: '→ Guide: XP & Freischaltungen', prToLoadout: '→ Loadout-Planer',
    prLvUnk: 'unbekannt', prPerLife: 'pro Leben', prPlusUnk: 'unbekannt',
    prSumTo: 'Freischaltkosten bis Level {n}', prSumAll: 'Freischaltkosten (alle offenen)', prSumSub: '{n} von {m} mit belegtem Preis', prUnkN: '{n} unbekannt',
    prNextLv: 'Nächstes Unlock-Level', prNoneLeft: 'Nichts mehr offen', prAfford: 'Kontostand reicht für', prAffordV: '{n} von {m}', prAffordLv: 'der Reihe nach bis Level {n}',
    prMissing: 'Fehlt noch', prLeft: 'Bleibt übrig', prOnlyKnown: 'nur belegte Preise', prEnterCash: 'Kontostand eintragen',
    prStat: '{t}: {n} Einträge in unseren Daten · {o} Level offiziell, {c} Level Community · {u} mit Freischaltpreis, {x} ohne',
    prAllDone: 'Für diesen Bereich ist keine weitere Freischaltung in unseren Daten.', prNoData: 'Für diesen Track haben wir noch keine belegten Level.',
    prXpNext: 'Bis Level {n} brauchst du in diesem Rollen-Track insgesamt {x} XP (Season 2).', prXpMax: 'Höchster Wert aus den Patchnotes: Level {n} = {x} XP. Höhere Stufen sind nicht veröffentlicht.',
    prXpNone: 'Eine XP-Kurve für diesen Track ist offiziell nicht veröffentlicht – die Patchnotes nennen nur die Rollen-Tracks.',
    tlViewLabel: 'Ansicht', tlViewTiers: 'Tiers', tlViewValue: 'Preis-Leistung',
    tlRule: 'So lesen: Preis pro Leben neben <b>unserem</b> Tier. Gibt es in derselben Klasse eine billigere Waffe mit gleichem oder besserem Tier, steht dort „Günstigere Alternative“. Berücksichtigt werden nur Waffen mit <b>offiziell belegtem</b> Preis. Das Tier ist unsere Einschätzung, nicht nur eine Frage des Preises – Reichweite, Freischaltung und Spielstil zählen mit.',
    tlAlt: 'Günstigere Alternative', tlBest: 'Günstigste Wahl ab Tier {t}', tlNoPrice: 'Ohne offiziellen Preis (nicht bewertet)', tlPriceLife: 'Preis pro Leben', tlVerdict: 'Einordnung'
  },
  en: {
    navGrpMatch: 'In match', navGrpPlan: 'Plan', navGrpData: 'Weapons & data',
    tProgT: 'Progression planner', tProgD: 'Next unlocks per track – with level and cost.',
    prLevel: 'Your level', prCash: 'Your balance ($)', prTo: 'Up to level (optional)', prToPh: 'all',
    prNextH: 'Next unlocks', prHaveH: 'Already reached by level', prHaveHint: 'Available at your level – you may still have to pay the one-time unlock.',
    prStdH: 'Default & level unknown', prXpH: 'How to level faster',
    prTip1: '<b>Logistics streaks:</b> Delivering crates, pallets or players to the Control Zone in a row earns extra XP per delivery in the streak (e.g. +100 XP per pallet, up to 10 in a row).',
    prTip2: '<b>Hit objectives:</b> Capturing an enemy Drill Tower now gives 300 XP, hacking an enemy FOB 250 XP – teammates in the radius get XP too.',
    prTip3: '<b>Feed the right track:</b> Destroying buildables and IED/C4 count for Assault, artillery for Driver, repairs for Driver or Pilot depending on the vehicle.',
    prTip4: '<b>Hunt armed vehicles:</b> Armed variants give 1.5 times the XP of the default variant.',
    prTip5: '<b>Lonestar:</b> In Season 2 Lonestar gets an experimental cash and XP bonus.',
    prTip6: '<b>No XP farming:</b> BULKHEAD punishes exploits with a cash and XP reset and XP farming with a permanent ban.',
    prXpSrc: 'All based on the official patch notes (Season 2 and patch 0.11), in our own words.',
    prToGuide: '→ Guide: XP & unlocks', prToLoadout: '→ Loadout planner',
    prLvUnk: 'unknown', prPerLife: 'per life', prPlusUnk: 'unknown',
    prSumTo: 'Unlock cost up to level {n}', prSumAll: 'Unlock cost (all remaining)', prSumSub: '{n} of {m} with a sourced price', prUnkN: '{n} unknown',
    prNextLv: 'Next unlock level', prNoneLeft: 'Nothing left', prAfford: 'Your balance covers', prAffordV: '{n} of {m}', prAffordLv: 'in order up to level {n}',
    prMissing: 'Still missing', prLeft: 'Left over', prOnlyKnown: 'sourced prices only', prEnterCash: 'Enter your balance',
    prStat: '{t}: {n} entries in our data · {o} levels official, {c} levels community · {u} with unlock price, {x} without',
    prAllDone: 'No further unlock in our data for this range.', prNoData: 'We have no sourced levels for this track yet.',
    prXpNext: 'Reaching level {n} in this role track takes {x} XP in total (Season 2).', prXpMax: 'Highest value in the patch notes: level {n} = {x} XP. Higher levels are not published.',
    prXpNone: 'No XP curve has been published for this track – the patch notes only cover the role tracks.',
    tlViewLabel: 'View', tlViewTiers: 'Tiers', tlViewValue: 'Value for money',
    tlRule: 'How to read it: price per life next to <b>our</b> tier. If the same class has a cheaper weapon with an equal or better tier, you’ll see “Cheaper alternative”. Only weapons with an <b>officially sourced</b> price are included. The tier is our assessment and not just about price – range, unlock and play style matter too.',
    tlAlt: 'Cheaper alternative', tlBest: 'Cheapest pick at tier {t} or better', tlNoPrice: 'No official price (not rated)', tlPriceLife: 'Price per life', tlVerdict: 'Verdict'
  },
  es: {
    navGrpMatch: 'En partida', navGrpPlan: 'Planificar', navGrpData: 'Armas y datos',
    tProgT: 'Planificador de progresión', tProgD: 'Próximos desbloqueos por track, con nivel y coste.',
    prLevel: 'Tu nivel', prCash: 'Tu saldo ($)', prTo: 'Hasta el nivel (opcional)', prToPh: 'todos',
    prNextH: 'Próximos desbloqueos', prHaveH: 'Ya alcanzado por nivel', prHaveHint: 'Disponible con tu nivel; puede que aún tengas que pagar el desbloqueo único.',
    prStdH: 'Estándar y nivel desconocido', prXpH: 'Cómo subir de nivel más rápido',
    prTip1: '<b>Rachas de logística:</b> si llevas cajas, palés o jugadores a la Control Zone seguidos, ganas más XP por cada entrega de la racha (p. ej. +100 XP por palé, hasta 10 seguidos).',
    prTip2: '<b>Ataca objetivos:</b> capturar una Drill Tower enemiga da ahora 300 XP y hackear una FOB enemiga 250 XP; los compañeros en el radio también ganan XP.',
    prTip3: '<b>Alimenta el track correcto:</b> destruir construcciones y los IED/C4 cuentan para Assault, la artillería para Driver y las reparaciones para Driver o Pilot según el vehículo.',
    prTip4: '<b>Caza vehículos armados:</b> las variantes armadas dan 1,5 veces la XP de la variante estándar.',
    prTip5: '<b>Lonestar:</b> en la Season 2, Lonestar recibe de forma experimental un bonus de dinero y XP.',
    prTip6: '<b>Nada de farmear XP:</b> BULKHEAD castiga los exploits con un reinicio de dinero y XP, y el farmeo de XP con un baneo permanente.',
    prXpSrc: 'Todo según las notas oficiales del parche (Season 2 y parche 0.11), con nuestras palabras.',
    prToGuide: '→ Guía: XP y desbloqueos', prToLoadout: '→ Planificador de loadouts',
    prLvUnk: 'desconocido', prPerLife: 'por vida', prPlusUnk: 'desconocido',
    prSumTo: 'Coste de desbloqueo hasta el nivel {n}', prSumAll: 'Coste de desbloqueo (todos los pendientes)', prSumSub: '{n} de {m} con precio con fuente', prUnkN: '{n} desconocidos',
    prNextLv: 'Próximo nivel con desbloqueo', prNoneLeft: 'No queda nada', prAfford: 'Tu saldo alcanza para', prAffordV: '{n} de {m}', prAffordLv: 'en orden hasta el nivel {n}',
    prMissing: 'Te falta', prLeft: 'Te sobra', prOnlyKnown: 'solo precios con fuente', prEnterCash: 'Introduce tu saldo',
    prStat: '{t}: {n} entradas en nuestros datos · {o} niveles oficiales, {c} niveles de la comunidad · {u} con precio de desbloqueo, {x} sin él',
    prAllDone: 'No hay más desbloqueos en nuestros datos para este rango.', prNoData: 'Aún no tenemos niveles con fuente para este track.',
    prXpNext: 'Para llegar al nivel {n} en este track de rol necesitas {x} XP en total (Season 2).', prXpMax: 'Valor más alto en las notas del parche: nivel {n} = {x} XP. Los niveles superiores no están publicados.',
    prXpNone: 'No se ha publicado una curva de XP para este track; las notas del parche solo cubren los tracks de rol.',
    tlViewLabel: 'Vista', tlViewTiers: 'Tiers', tlViewValue: 'Calidad-precio',
    tlRule: 'Cómo leerlo: precio por vida junto a <b>nuestro</b> tier. Si en la misma clase hay un arma más barata con el mismo tier o mejor, verás «Alternativa más barata». Solo se incluyen armas con precio <b>oficial</b>. El tier es nuestra valoración y no depende solo del precio: el alcance, el desbloqueo y el estilo de juego también cuentan.',
    tlAlt: 'Alternativa más barata', tlBest: 'La opción más barata con tier {t} o mejor', tlNoPrice: 'Sin precio oficial (sin valorar)', tlPriceLife: 'Precio por vida', tlVerdict: 'Valoración'
  },
  fr: {
    navGrpMatch: 'En match', navGrpPlan: 'Planifier', navGrpData: 'Armes et données',
    tProgT: 'Planificateur de progression', tProgD: 'Prochains déblocages par track – avec niveau et coût.',
    prLevel: 'Ton niveau', prCash: 'Ton solde ($)', prTo: 'Jusqu’au niveau (optionnel)', prToPh: 'tous',
    prNextH: 'Prochains déblocages', prHaveH: 'Déjà atteint par niveau', prHaveHint: 'Disponible à ton niveau – il te reste peut-être à payer le déblocage unique.',
    prStdH: 'Standard et niveau inconnu', prXpH: 'Monter de niveau plus vite',
    prTip1: '<b>Séries logistiques :</b> livrer des caisses, des palettes ou des joueurs d’affilée dans la Control Zone rapporte plus d’XP par livraison de la série (p. ex. +100 XP par palette, jusqu’à 10 d’affilée).',
    prTip2: '<b>Attaque les objectifs :</b> capturer une Drill Tower ennemie rapporte désormais 300 XP, pirater une FOB ennemie 250 XP – les coéquipiers dans le rayon gagnent aussi de l’XP.',
    prTip3: '<b>Nourris le bon track :</b> détruire des constructions et les IED/C4 comptent pour Assault, l’artillerie pour Driver, les réparations pour Driver ou Pilot selon le véhicule.',
    prTip4: '<b>Chasse les véhicules armés :</b> les variantes armées rapportent 1,5 fois l’XP de la variante standard.',
    prTip5: '<b>Lonestar :</b> en Season 2, Lonestar reçoit à titre expérimental un bonus d’argent et d’XP.',
    prTip6: '<b>Pas de farm d’XP :</b> BULKHEAD sanctionne les exploits par une remise à zéro de l’argent et de l’XP, et le farm d’XP par un bannissement définitif.',
    prXpSrc: 'Le tout d’après les notes de patch officielles (Season 2 et patch 0.11), avec nos propres mots.',
    prToGuide: '→ Guide : XP et déblocages', prToLoadout: '→ Planificateur de loadout',
    prLvUnk: 'inconnu', prPerLife: 'par vie', prPlusUnk: 'inconnu',
    prSumTo: 'Coût de déblocage jusqu’au niveau {n}', prSumAll: 'Coût de déblocage (tout ce qui reste)', prSumSub: '{n} sur {m} avec prix sourcé', prUnkN: '{n} inconnus',
    prNextLv: 'Prochain niveau de déblocage', prNoneLeft: 'Plus rien à débloquer', prAfford: 'Ton solde suffit pour', prAffordV: '{n} sur {m}', prAffordLv: 'dans l’ordre jusqu’au niveau {n}',
    prMissing: 'Il manque', prLeft: 'Il reste', prOnlyKnown: 'prix sourcés uniquement', prEnterCash: 'Saisis ton solde',
    prStat: '{t} : {n} entrées dans nos données · {o} niveaux officiels, {c} niveaux communauté · {u} avec prix de déblocage, {x} sans',
    prAllDone: 'Plus aucun déblocage dans nos données pour cette plage.', prNoData: 'Nous n’avons pas encore de niveaux sourcés pour ce track.',
    prXpNext: 'Pour atteindre le niveau {n} dans ce track de rôle, il faut {x} XP au total (Season 2).', prXpMax: 'Valeur la plus haute des notes de patch : niveau {n} = {x} XP. Les niveaux supérieurs ne sont pas publiés.',
    prXpNone: 'Aucune courbe d’XP n’a été publiée pour ce track – les notes de patch ne couvrent que les tracks de rôle.',
    tlViewLabel: 'Vue', tlViewTiers: 'Tiers', tlViewValue: 'Rapport qualité-prix',
    tlRule: 'Comment lire : prix par vie à côté de <b>notre</b> tier. Si la même catégorie propose une arme moins chère avec un tier égal ou meilleur, tu verras « Alternative moins chère ». Seules les armes au prix <b>officiellement sourcé</b> sont prises en compte. Le tier est notre évaluation et ne dépend pas que du prix – portée, déblocage et style de jeu comptent aussi.',
    tlAlt: 'Alternative moins chère', tlBest: 'Choix le moins cher en tier {t} ou mieux', tlNoPrice: 'Sans prix officiel (non évalué)', tlPriceLife: 'Prix par vie', tlVerdict: 'Verdict'
  }
};
Object.keys(FB25_I18N).forEach(l => Object.assign(I18N[l], FB25_I18N[l]));

// ---------- Frontbuch v26: Zufalls-Challenge (/tools/challenge/), Challenge-Modus im Streamer-Overlay ----------
const FB26_I18N = {
  de: {
    tChalT: 'Challenge-Slot', tChalD: '291 Challenges für 1 bis 4 Spieler – Rad drehen und loslegen.',
    chLevels: 'Schwierigkeit', chLv0: 'Leicht', chLv1: 'Mittel', chLv2: 'Schwer', chLv3: 'Wahnsinn',
    chMode: 'Spielweise', chModeAll: 'Alle', chModeSolo: 'Solo', chModeSquad: 'Squad', chNoVeh: 'Ohne Fahrzeug-Challenges',
    chCounter: 'Challenge-Zähler', chChallenges: 'Challenges', chOfAll: 'von {n} insgesamt',
    chSpin: 'Drehen', chAgain: 'Nochmal drehen', chSpinning: 'Dreht …', chShare: 'Challenge teilen', chShareText: 'Schaffst du diese WARDOGS-Challenge?',
    chSound: 'Ton', chReelW: 'Waffe', chReelG: 'Ziel', chReelM: 'Regel', chIdle: 'Dreh dir eine Challenge!', chNoRule: 'Keine Zusatzregel',
    chStreakH: 'Deine Bilanz', chDone: '✓ Geschafft', chFail: '✗ Nicht geschafft', chStreak: 'Serie', chBest: 'Beste Serie', chWon: 'Geschafft', chTries: 'Versucht',
    chStreakHint: 'Wird nur in deinem Browser gespeichert.', chLogged: 'Eingetragen!', chResetDone: 'Bilanz zurückgesetzt.',
    chNotFound: 'Diese Challenge gibt es nicht (mehr) – dreh einfach eine neue.', chNone: 'Keine Challenge passt zu diesen Filtern.',
    chTagSolo: 'Solo', chTagSquad: 'Squad', chTagVeh: 'Fahrzeug', chIdLbl: 'Nr.', chLvLast: 'Mindestens eine Stufe bleibt ausgewählt.',
    chHowH: 'So funktioniert’s',
    chHow: 'Jede Challenge besteht aus <b>Waffenregel</b>, <b>Ziel</b> und <b>Zusatzregel</b>. Die Schwierigkeit ergibt sich aus der Summe der Teile – eine Schrotflinte ist schwerer als ein Sturmgewehr, 20 Kills schwerer als 5, ohne Helm schwerer als mit. Waffen, Klassen, Tracks und Preise stammen aus unserer <a href="/tools/datenbank/">Datenbank</a>, die Ziele nur aus Mechaniken, die unsere Guides mit Quellen beschreiben (Control Zone, Hot Zone, Drill Tower, FOB, Mörser, Halligan Bar …). Unmögliche Kombinationen werden aussortiert, z. B. Fahrzeug zerstören mit nur einer Pistole oder ein Budget unter dem Waffenpreis.',
    chToRoulette: '🎰 Loadout dazu? → Loadout-Roulette', chToStreamer: '📺 Für Streamer: !challenge im Twitch-Chat', rrToChal: '🎲 Noch mehr Chaos? Zufalls-Challenge',
    stMode: 'Modus', stModeR: 'Loadout-Roulette', stModeC: 'Zufalls-Challenge', stLevels: 'Schwierigkeit', stNoVeh: 'Ohne Fahrzeug-Challenges',
    stChalH: 'Zufalls-Challenge im Stream',
    stChalP: 'Stell oben den <b>Modus</b> auf „Zufalls-Challenge“: Dann zieht dein Chat mit <b>!challenge</b> eine Challenge (Waffenregel, Ziel, Zusatzregel und Schwierigkeit) – mit derselben Animation wie auf der Seite. Cooldown, Sprache, Layout und Größe funktionieren wie beim Roulette.',
    stChalL1: '<code>mode=challenge</code> – Challenge statt Loadout; der Befehl ist dann standardmäßig <code>!challenge</code> (änderbar mit <code>cmd=</code>).',
    stChalL2: '<code>levels=schwer,wahnsinn</code> – nur diese Stufen ziehen (leicht, mittel, schwer, wahnsinn; mehrere mit Komma).',
    stChalL3: '<code>noveh=1</code> – keine Fahrzeug-Challenges; <code>play=solo</code> oder <code>play=squad</code> – nur Solo- bzw. Squad-Challenges.',
    stChalL4: 'Zum Ausprobieren ohne Stream: <a href="/tools/challenge/">Zufalls-Challenge auf der Seite</a>.'
  },
  en: {
    tChalT: 'Challenge Slot', tChalD: '291 challenges for 1 to 4 players – spin the wheel and play.',
    chLevels: 'Difficulty', chLv0: 'Easy', chLv1: 'Medium', chLv2: 'Hard', chLv3: 'Insane',
    chMode: 'Play style', chModeAll: 'All', chModeSolo: 'Solo', chModeSquad: 'Squad', chNoVeh: 'No vehicle challenges',
    chCounter: 'Challenge counter', chChallenges: 'challenges', chOfAll: 'of {n} in total',
    chSpin: 'Spin', chAgain: 'Spin again', chSpinning: 'Spinning …', chShare: 'Share challenge', chShareText: 'Can you beat this WARDOGS challenge?',
    chSound: 'Sound', chReelW: 'Weapon', chReelG: 'Goal', chReelM: 'Rule', chIdle: 'Spin for a challenge!', chNoRule: 'No extra rule',
    chStreakH: 'Your record', chDone: '✓ Done', chFail: '✗ Failed', chStreak: 'Streak', chBest: 'Best streak', chWon: 'Done', chTries: 'Tried',
    chStreakHint: 'Stored only in your browser.', chLogged: 'Logged!', chResetDone: 'Record reset.',
    chNotFound: 'This challenge doesn’t exist (any more) – just spin a new one.', chNone: 'No challenge matches these filters.',
    chTagSolo: 'Solo', chTagSquad: 'Squad', chTagVeh: 'Vehicle', chIdLbl: 'No.', chLvLast: 'At least one level stays selected.',
    chHowH: 'How it works',
    chHow: 'Every challenge combines a <b>weapon rule</b>, a <b>goal</b> and an <b>extra rule</b>. The difficulty is the sum of its parts – a shotgun is harder than an assault rifle, 20 kills harder than 5, no helmet harder than a helmet. Weapons, classes, tracks and prices come from our <a href="/tools/datenbank/">database</a>; goals only use mechanics our guides describe with sources (Control Zone, Hot Zone, Drill Tower, FOB, mortar, Halligan Bar …). Impossible combinations are filtered out, e.g. destroying a vehicle with only a pistol, or a budget below the weapon’s price.',
    chToRoulette: '🎰 Need a loadout? → Loadout Roulette', chToStreamer: '📺 For streamers: !challenge in Twitch chat', rrToChal: '🎲 Want more chaos? Random Challenge',
    stMode: 'Mode', stModeR: 'Loadout Roulette', stModeC: 'Random Challenge', stLevels: 'Difficulty', stNoVeh: 'No vehicle challenges',
    stChalH: 'Random Challenge on stream',
    stChalP: 'Set the <b>mode</b> above to “Random Challenge” and your chat draws a challenge with <b>!challenge</b> (weapon rule, goal, extra rule and difficulty) – with the same animation as on the site. Cooldown, language, layout and size work just like the roulette.',
    stChalL1: '<code>mode=challenge</code> – challenge instead of a loadout; the command then defaults to <code>!challenge</code> (change it with <code>cmd=</code>).',
    stChalL2: '<code>levels=schwer,wahnsinn</code> – only draw these levels (leicht, mittel, schwer, wahnsinn = easy, medium, hard, insane; several separated by commas).',
    stChalL3: '<code>noveh=1</code> – no vehicle challenges; <code>play=solo</code> or <code>play=squad</code> – only solo or squad challenges.',
    stChalL4: 'To try it without a stream: <a href="/tools/challenge/">Random Challenge on the site</a>.'
  },
  es: {
    tChalT: 'Tragaperras de retos', tChalD: '291 retos para 1 a 4 jugadores: gira la tragaperras y a jugar.',
    chLevels: 'Dificultad', chLv0: 'Fácil', chLv1: 'Media', chLv2: 'Difícil', chLv3: 'Locura',
    chMode: 'Modo de juego', chModeAll: 'Todos', chModeSolo: 'Solo', chModeSquad: 'Escuadra', chNoVeh: 'Sin retos de vehículos',
    chCounter: 'Contador de retos', chChallenges: 'retos', chOfAll: 'de {n} en total',
    chSpin: 'Girar', chAgain: 'Girar otra vez', chSpinning: 'Girando…', chShare: 'Compartir reto', chShareText: '¿Superas este reto de WARDOGS?',
    chSound: 'Sonido', chReelW: 'Arma', chReelG: 'Objetivo', chReelM: 'Regla', chIdle: '¡Gira para conseguir un reto!', chNoRule: 'Sin regla extra',
    chStreakH: 'Tu balance', chDone: '✓ Conseguido', chFail: '✗ No conseguido', chStreak: 'Racha', chBest: 'Mejor racha', chWon: 'Conseguidos', chTries: 'Intentos',
    chStreakHint: 'Solo se guarda en tu navegador.', chLogged: '¡Anotado!', chResetDone: 'Balance reiniciado.',
    chNotFound: 'Este reto no existe (ya) – gira uno nuevo.', chNone: 'Ningún reto coincide con estos filtros.',
    chTagSolo: 'Solo', chTagSquad: 'Escuadra', chTagVeh: 'Vehículo', chIdLbl: 'N.º', chLvLast: 'Al menos un nivel queda seleccionado.',
    chHowH: 'Cómo funciona',
    chHow: 'Cada reto combina una <b>regla de armas</b>, un <b>objetivo</b> y una <b>regla extra</b>. La dificultad es la suma de sus partes: una escopeta es más difícil que un fusil de asalto, 20 bajas más que 5 y sin casco más que con casco. Las armas, clases, tracks y precios salen de nuestra <a href="/tools/datenbank/">base de datos</a>; los objetivos solo usan mecánicas que nuestras guías describen con fuentes (Control Zone, Hot Zone, Drill Tower, FOB, mortero, Halligan Bar…). Las combinaciones imposibles se descartan, p. ej. destruir un vehículo solo con pistola o un presupuesto inferior al precio del arma.',
    chToRoulette: '🎰 ¿Y el loadout? → Ruleta de loadouts', chToStreamer: '📺 Para streamers: !challenge en el chat de Twitch', rrToChal: '🎲 ¿Más caos? Reto aleatorio',
    stMode: 'Modo', stModeR: 'Ruleta de loadouts', stModeC: 'Reto aleatorio', stLevels: 'Dificultad', stNoVeh: 'Sin retos de vehículos',
    stChalH: 'Reto aleatorio en el stream',
    stChalP: 'Pon arriba el <b>modo</b> en «Reto aleatorio» y tu chat sacará un reto con <b>!challenge</b> (regla de armas, objetivo, regla extra y dificultad), con la misma animación que en la web. Cooldown, idioma, diseño y tamaño funcionan igual que en la ruleta.',
    stChalL1: '<code>mode=challenge</code> – reto en lugar de loadout; el comando pasa a ser <code>!challenge</code> por defecto (cámbialo con <code>cmd=</code>).',
    stChalL2: '<code>levels=schwer,wahnsinn</code> – solo estos niveles (leicht, mittel, schwer, wahnsinn = fácil, media, difícil, locura; varios separados por comas).',
    stChalL3: '<code>noveh=1</code> – sin retos de vehículos; <code>play=solo</code> o <code>play=squad</code> – solo retos en solitario o de escuadra.',
    stChalL4: 'Para probarlo sin stream: <a href="/tools/challenge/">Reto aleatorio en la web</a>.'
  },
  fr: {
    tChalT: 'Machine à sous des défis', tChalD: '291 défis pour 1 à 4 joueurs – lance la machine et joue.',
    chLevels: 'Difficulté', chLv0: 'Facile', chLv1: 'Moyen', chLv2: 'Difficile', chLv3: 'Folie',
    chMode: 'Style de jeu', chModeAll: 'Tous', chModeSolo: 'Solo', chModeSquad: 'Escouade', chNoVeh: 'Sans défis de véhicule',
    chCounter: 'Compteur de défis', chChallenges: 'défis', chOfAll: 'sur {n} au total',
    chSpin: 'Lancer', chAgain: 'Relancer', chSpinning: 'Ça tourne…', chShare: 'Partager le défi', chShareText: 'Tu relèves ce défi WARDOGS ?',
    chSound: 'Son', chReelW: 'Arme', chReelG: 'Objectif', chReelM: 'Règle', chIdle: 'Lance la roue pour un défi !', chNoRule: 'Pas de règle en plus',
    chStreakH: 'Ton bilan', chDone: '✓ Réussi', chFail: '✗ Raté', chStreak: 'Série', chBest: 'Meilleure série', chWon: 'Réussis', chTries: 'Tentés',
    chStreakHint: 'Enregistré uniquement dans ton navigateur.', chLogged: 'Noté !', chResetDone: 'Bilan réinitialisé.',
    chNotFound: 'Ce défi n’existe pas (ou plus) – lance-en simplement un nouveau.', chNone: 'Aucun défi ne correspond à ces filtres.',
    chTagSolo: 'Solo', chTagSquad: 'Escouade', chTagVeh: 'Véhicule', chIdLbl: 'N°', chLvLast: 'Au moins un niveau reste sélectionné.',
    chHowH: 'Comment ça marche',
    chHow: 'Chaque défi combine une <b>règle d’arme</b>, un <b>objectif</b> et une <b>règle en plus</b>. La difficulté est la somme des éléments : un fusil à pompe est plus dur qu’un fusil d’assaut, 20 éliminations plus que 5, sans casque plus qu’avec. Armes, catégories, tracks et prix viennent de notre <a href="/tools/datenbank/">base de données</a> ; les objectifs n’utilisent que des mécaniques décrites avec sources dans nos guides (Control Zone, Hot Zone, Drill Tower, FOB, mortier, Halligan Bar…). Les combinaisons impossibles sont écartées, par ex. détruire un véhicule avec un simple pistolet ou un budget inférieur au prix de l’arme.',
    chToRoulette: '🎰 Et le loadout ? → Roulette de loadout', chToStreamer: '📺 Pour streamers : !challenge dans le chat Twitch', rrToChal: '🎲 Encore plus de chaos ? Défi aléatoire',
    stMode: 'Mode', stModeR: 'Roulette de loadout', stModeC: 'Défi aléatoire', stLevels: 'Difficulté', stNoVeh: 'Sans défis de véhicule',
    stChalH: 'Défi aléatoire en stream',
    stChalP: 'Règle le <b>mode</b> ci-dessus sur « Défi aléatoire » : ton chat tire alors un défi avec <b>!challenge</b> (règle d’arme, objectif, règle en plus et difficulté), avec la même animation que sur le site. Cooldown, langue, mise en page et taille fonctionnent comme pour la roulette.',
    stChalL1: '<code>mode=challenge</code> – un défi au lieu d’un loadout ; la commande devient alors <code>!challenge</code> par défaut (modifiable avec <code>cmd=</code>).',
    stChalL2: '<code>levels=schwer,wahnsinn</code> – uniquement ces niveaux (leicht, mittel, schwer, wahnsinn = facile, moyen, difficile, folie ; plusieurs séparés par des virgules).',
    stChalL3: '<code>noveh=1</code> – pas de défis de véhicule ; <code>play=solo</code> ou <code>play=squad</code> – uniquement des défis solo ou en escouade.',
    stChalL4: 'Pour essayer sans stream : <a href="/tools/challenge/">Défi aléatoire sur le site</a>.'
  }
};
Object.keys(FB26_I18N).forEach(l => Object.assign(I18N[l], FB26_I18N[l]));

// ---------- Frontbuch v29: Meta-Loadouts (/tools/meta-loadouts/) ----------
const FB29_I18N = {
  de: { tMetaT: 'Meta-Loadouts', tMetaD: 'Über 30 fertige Loadouts nach Rolle und Budget – mit Kosten pro Leben.', homeMetaAll: 'Alle Meta-Loadouts →', loToMeta: '📋 Fertige Loadouts nach Rolle und Budget → Meta-Loadouts' },
  en: { tMetaT: 'Meta loadouts', tMetaD: 'Over 30 ready-made loadouts by role and budget – with cost per life.', homeMetaAll: 'All meta loadouts →', loToMeta: '📋 Ready-made loadouts by role and budget → Meta loadouts' },
  es: { tMetaT: 'Loadouts meta', tMetaD: 'Más de 30 loadouts listos por rol y presupuesto, con coste por vida.', homeMetaAll: 'Todos los loadouts meta →', loToMeta: '📋 Loadouts listos por rol y presupuesto → Loadouts meta' },
  fr: { tMetaT: 'Loadouts méta', tMetaD: 'Plus de 30 loadouts prêts à l’emploi par rôle et budget, avec le coût par vie.', homeMetaAll: 'Tous les loadouts méta →', loToMeta: '📋 Loadouts prêts par rôle et budget → Loadouts méta' }
};
Object.keys(FB29_I18N).forEach(l => Object.assign(I18N[l], FB29_I18N[l]));

// ---------- Frontbuch v31: Challenge-Slot (eine Walze; ersetzt die Zufalls-Challenge aus v26, wo sich etwas ändert) ----------
const FB31_I18N = {
  de: {
    tChalT: 'Challenge-Slot', tChalD: '291 Challenges für 1 bis 4 Spieler – Slot drehen und loslegen.',
    chPlayers: 'Spieleranzahl', chP1: 'Solo', chP2: 'Duo', chP3: 'Trio', chP4: 'Squad',
    chPN1: '1 Spieler', chPN2: '2 Spieler', chPN3: '3 Spieler', chPN4: '4 Spieler',
    chO1: 'Solo (1 Spieler)', chO2: 'Duo (2 Spieler)', chO3: 'Trio (3 Spieler)', chO4: 'Squad (4 Spieler)',
    chInd: 'Einzel-Challenges dazuladen', chIndHint: 'Jeder spielt sie für sich.',
    chCounter: 'Auf der Walze', chChallenges: 'Challenges', chOfAll: 'von {n} insgesamt',
    chIdle: 'Dreh den Slot!', chReelAria: 'Challenge-Slot mit einer Walze. Drehen, um eine Challenge zu ziehen.', chWinnerLbl: 'Deine Challenge',
    chTagSolo: 'Solo', chTagSquad: 'Squad', chTagSquad24: 'Duo bis Squad', chTagAll: 'Jeder für sich', chIdLbl: 'Nr.',
    chNotFound: 'Diese Challenge gibt es nicht (mehr) – dreh einfach den Slot.', chOldLink: 'Dieser Link stammt von der alten Zufalls-Challenge – dreh den Slot für eine neue.',
    chHow: 'Die Walze zieht eine von <b>291 Challenges</b>, die wir von Hand zusammengestellt haben – in drei Stufen (leicht, mittel, schwer). Wähle oben, wie viele ihr seid: <b>Solo</b> (mit „Random“-Challenges, bei denen du dir einen Mitspieler suchst), <b>Duo</b>, <b>Trio</b> oder <b>Squad</b> (4 Spieler). Für Gruppen gibt es eigene Gruppen-Challenges; die Einzel-Challenges kannst du dazuladen, dann spielt jeder sie für sich. Auf der Walze laufen alle passenden Challenges der aktuellen Auswahl vorbei, gezogen wird gleichverteilt zufällig. Die Mechaniken (Control Zone, Hot Zone, Drill Tower, FOB, Mörser L81, Halligan Bar …) stammen aus unseren Guides.',
    stPlayers: 'Spieleranzahl', stInd: 'Einzel-Challenges dazuladen (ab Duo)', stModeC: 'Challenge-Slot',
    rrToChal: '🎲 Noch mehr Chaos? Challenge-Slot',
    stChalH: 'Challenge-Slot im Stream',
    stChalP: 'Stell oben den <b>Modus</b> auf „Challenge-Slot“: Dann dreht dein Chat mit <b>!challenge</b> die Walze und zieht eine Challenge – mit derselben Animation wie auf der Seite. Cooldown, Sprache, Layout und Größe funktionieren wie beim Roulette.',
    stChalL1: '<code>mode=challenge</code> – Challenge-Slot statt Loadout; der Befehl ist dann standardmäßig <code>!challenge</code> (änderbar mit <code>cmd=</code>).',
    stChalL2: '<code>p=2</code> – Spieleranzahl: 1 (Solo), 2 (Duo), 3 (Trio) oder 4 (Squad); <code>ind=0</code> – ab Duo nur die Gruppen-Challenges ohne die Einzel-Challenges.',
    stChalL3: '<code>lvl=schwer</code> – nur diese Stufen ziehen (leicht, mittel, schwer; mehrere mit Komma, z. B. <code>lvl=mittel,schwer</code>).',
    stChalL4: 'Zum Ausprobieren ohne Stream: <a href="/tools/challenge/">Challenge-Slot auf der Seite</a>.'
  },
  en: {
    tChalT: 'Challenge Slot', tChalD: '291 challenges for 1 to 4 players – spin the slot and play.',
    chPlayers: 'Players', chP1: 'Solo', chP2: 'Duo', chP3: 'Trio', chP4: 'Squad',
    chPN1: '1 player', chPN2: '2 players', chPN3: '3 players', chPN4: '4 players',
    chO1: 'Solo (1 player)', chO2: 'Duo (2 players)', chO3: 'Trio (3 players)', chO4: 'Squad (4 players)',
    chInd: 'Add individual challenges', chIndHint: 'Everyone plays them on their own.',
    chCounter: 'On the reel', chChallenges: 'challenges', chOfAll: 'of {n} in total',
    chIdle: 'Spin the slot!', chReelAria: 'Challenge slot with one reel. Spin to draw a challenge.', chWinnerLbl: 'Your challenge',
    chTagSolo: 'Solo', chTagSquad: 'Squad', chTagSquad24: 'Duo to Squad', chTagAll: 'Everyone on their own', chIdLbl: 'No.',
    chNotFound: 'This challenge doesn’t exist (any more) – just spin the slot.', chOldLink: 'This link is from the old Random Challenge – spin the slot for a new one.',
    chHow: 'The reel draws one of <b>291 hand-picked challenges</b> in three levels (easy, medium, hard). Choose how many of you are playing: <b>Solo</b> (with “random” challenges where you team up with a stranger), <b>Duo</b>, <b>Trio</b> or <b>Squad</b> (4 players). Groups get their own group challenges; you can add the individual challenges, in which case everyone plays them on their own. Every challenge that fits your current selection runs past on the reel, and the draw is uniformly random. The mechanics (Control Zone, Hot Zone, Drill Tower, FOB, L81 mortar, Halligan Bar …) come from our guides.',
    stPlayers: 'Players', stInd: 'Add individual challenges (from Duo)', stModeC: 'Challenge Slot',
    rrToChal: '🎲 Want more chaos? Challenge Slot',
    stChalH: 'Challenge Slot on stream',
    stChalP: 'Set the <b>mode</b> above to “Challenge Slot”: your chat then spins the reel with <b>!challenge</b> and draws a challenge – with the same animation as on the site. Cooldown, language, layout and size work just like the roulette.',
    stChalL1: '<code>mode=challenge</code> – Challenge Slot instead of a loadout; the command then defaults to <code>!challenge</code> (change it with <code>cmd=</code>).',
    stChalL2: '<code>p=2</code> – number of players: 1 (Solo), 2 (Duo), 3 (Trio) or 4 (Squad); <code>ind=0</code> – from Duo up, only the group challenges without the individual ones.',
    stChalL3: '<code>lvl=schwer</code> – only draw these levels (leicht, mittel, schwer = easy, medium, hard; several separated by commas, e.g. <code>lvl=mittel,schwer</code>).',
    stChalL4: 'To try it without a stream: <a href="/tools/challenge/">Challenge Slot on the site</a>.'
  },
  es: {
    tChalT: 'Tragaperras de retos', tChalD: '291 retos para 1 a 4 jugadores: gira la tragaperras y a jugar.',
    chPlayers: 'Jugadores', chP1: 'Solo', chP2: 'Duo', chP3: 'Trio', chP4: 'Squad',
    chPN1: '1 jugador', chPN2: '2 jugadores', chPN3: '3 jugadores', chPN4: '4 jugadores',
    chO1: 'Solo (1 jugador)', chO2: 'Duo (2 jugadores)', chO3: 'Trio (3 jugadores)', chO4: 'Squad (4 jugadores)',
    chInd: 'Añadir retos individuales', chIndHint: 'Cada uno los juega por su cuenta.',
    chCounter: 'En el rodillo', chChallenges: 'retos', chOfAll: 'de {n} en total',
    chIdle: '¡Gira la tragaperras!', chReelAria: 'Tragaperras de retos con un rodillo. Gira para sacar un reto.', chWinnerLbl: 'Tu reto',
    chTagSolo: 'Solo', chTagSquad: 'Squad', chTagSquad24: 'De Duo a Squad', chTagAll: 'Cada uno por su cuenta', chIdLbl: 'N.º',
    chNotFound: 'Este reto no existe (ya): gira la tragaperras.', chOldLink: 'Este enlace es del antiguo reto aleatorio: gira la tragaperras para conseguir uno nuevo.',
    chHow: 'El rodillo saca uno de <b>291 retos</b> elegidos a mano, en tres niveles (fácil, media, difícil). Elige cuántos jugáis: <b>Solo</b> (con retos «random» en los que buscas a un compañero cualquiera), <b>Duo</b>, <b>Trio</b> o <b>Squad</b> (4 jugadores). Los grupos tienen sus propios retos de grupo; puedes añadir los retos individuales y entonces cada uno los juega por su cuenta. En el rodillo pasan todos los retos que encajan con tu selección actual, y el sorteo es aleatorio con la misma probabilidad para todos. Las mecánicas (Control Zone, Hot Zone, Drill Tower, FOB, mortero L81, Halligan Bar…) salen de nuestras guías.',
    stPlayers: 'Jugadores', stInd: 'Añadir retos individuales (a partir de Duo)', stModeC: 'Tragaperras de retos',
    rrToChal: '🎲 ¿Más caos? Tragaperras de retos',
    stChalH: 'Tragaperras de retos en el stream',
    stChalP: 'Pon arriba el <b>modo</b> en «Tragaperras de retos»: tu chat girará el rodillo con <b>!challenge</b> y sacará un reto, con la misma animación que en la web. Cooldown, idioma, diseño y tamaño funcionan igual que en la ruleta de loadouts.',
    stChalL1: '<code>mode=challenge</code> – tragaperras de retos en lugar de loadout; el comando pasa a ser <code>!challenge</code> por defecto (cámbialo con <code>cmd=</code>).',
    stChalL2: '<code>p=2</code> – número de jugadores: 1 (Solo), 2 (Duo), 3 (Trio) o 4 (Squad); <code>ind=0</code> – a partir de Duo, solo los retos de grupo sin los individuales.',
    stChalL3: '<code>lvl=schwer</code> – solo estos niveles (leicht, mittel, schwer = fácil, media, difícil; varios separados por comas, p. ej. <code>lvl=mittel,schwer</code>).',
    stChalL4: 'Para probarlo sin stream: <a href="/tools/challenge/">Tragaperras de retos en la web</a>.'
  },
  fr: {
    tChalT: 'Machine à sous des défis', tChalD: '291 défis pour 1 à 4 joueurs – lance la machine et joue.',
    chPlayers: 'Joueurs', chP1: 'Solo', chP2: 'Duo', chP3: 'Trio', chP4: 'Squad',
    chPN1: '1 joueur', chPN2: '2 joueurs', chPN3: '3 joueurs', chPN4: '4 joueurs',
    chO1: 'Solo (1 joueur)', chO2: 'Duo (2 joueurs)', chO3: 'Trio (3 joueurs)', chO4: 'Squad (4 joueurs)',
    chInd: 'Ajouter les défis individuels', chIndHint: 'Chacun les joue de son côté.',
    chCounter: 'Sur le rouleau', chChallenges: 'défis', chOfAll: 'sur {n} au total',
    chIdle: 'Lance la machine !', chReelAria: 'Machine à sous des défis avec un rouleau. Lance-la pour tirer un défi.', chWinnerLbl: 'Ton défi',
    chTagSolo: 'Solo', chTagSquad: 'Squad', chTagSquad24: 'Du Duo au Squad', chTagAll: 'Chacun de son côté', chIdLbl: 'N°',
    chNotFound: 'Ce défi n’existe pas (ou plus) – lance simplement la machine.', chOldLink: 'Ce lien vient de l’ancien défi aléatoire – lance la machine pour en tirer un nouveau.',
    chHow: 'Le rouleau tire l’un des <b>291 défis</b> choisis à la main, en trois niveaux (facile, moyen, difficile). Indique combien vous jouez : <b>Solo</b> (avec des défis « random » où tu fais équipe avec un inconnu), <b>Duo</b>, <b>Trio</b> ou <b>Squad</b> (4 joueurs). Les groupes ont leurs propres défis de groupe ; tu peux ajouter les défis individuels, et chacun les joue alors de son côté. Tous les défis qui correspondent à ta sélection actuelle défilent sur le rouleau, et le tirage est aléatoire avec les mêmes chances pour tous. Les mécaniques (Control Zone, Hot Zone, Drill Tower, FOB, mortier L81, Halligan Bar…) viennent de nos guides.',
    stPlayers: 'Joueurs', stInd: 'Ajouter les défis individuels (à partir du Duo)', stModeC: 'Machine à sous des défis',
    rrToChal: '🎲 Encore plus de chaos ? Machine à sous des défis',
    stChalH: 'Machine à sous des défis en stream',
    stChalP: 'Règle le <b>mode</b> ci-dessus sur « Machine à sous des défis » : ton chat lance alors le rouleau avec <b>!challenge</b> et tire un défi, avec la même animation que sur le site. Cooldown, langue, mise en page et taille fonctionnent comme pour la roulette.',
    stChalL1: '<code>mode=challenge</code> – machine à sous des défis au lieu d’un loadout ; la commande devient alors <code>!challenge</code> par défaut (modifiable avec <code>cmd=</code>).',
    stChalL2: '<code>p=2</code> – nombre de joueurs : 1 (Solo), 2 (Duo), 3 (Trio) ou 4 (Squad) ; <code>ind=0</code> – à partir du Duo, uniquement les défis de groupe sans les défis individuels.',
    stChalL3: '<code>lvl=schwer</code> – uniquement ces niveaux (leicht, mittel, schwer = facile, moyen, difficile ; plusieurs séparés par des virgules, p. ex. <code>lvl=mittel,schwer</code>).',
    stChalL4: 'Pour essayer sans stream : <a href="/tools/challenge/">Machine à sous des défis sur le site</a>.'
  }
};
Object.keys(FB31_I18N).forEach(l => Object.assign(I18N[l], FB31_I18N[l]));

// ---------- Frontbuch v32: Streamer-Widget für den Challenge-Slot (ohne Chat) ----------
const FB32_I18N = {
  de: {
    wgChatH: 'Mit Twitch-Chat: Roulette und Challenge per Befehl',
    wgH: 'Streamer-Widget ohne Chat',
    wgP: 'Der Challenge-Slot als Browserquelle für OBS – <b>ohne Twitch-Chat, ohne Login und ohne Befehle für Zuschauer</b>. Du drehst selbst (Klick oder Leertaste), automatisch in festen Abständen oder bei jedem Szenenwechsel. Standard ist ein schlanker Ein-Zeilen-Balken (nur die Challenge plus „oiotv.de“), optional das große Layout. Stell hier alles ein und kopiere die URL.',
    wgLayC: 'Kompakt 640×90', wgLayF: 'Voll 800×450', wgAuto: 'Automatisch drehen alle … Minuten (0 = aus)', wgShow: 'Ergebnis anzeigen (Sekunden, 0 = bis zum nächsten Dreh)',
    wgSpinLoad: 'Beim Laden drehen (neuer Dreh bei jedem Szenenwechsel)', wgClear: 'Transparenter Hintergrund (ohne Balken und Kasten)',
    wgPreview: 'Vorschau des Widgets', wgPrevHint: 'Vorschau – Klick oder Leertaste dreht.', wgUrlH: 'Widget-URL', wgObsH: 'Widget in OBS einbinden',
    wgStep1: 'In OBS bei <b>Quellen</b> auf <b>+</b> klicken und <b>Browser</b> wählen.',
    wgStep2: 'Die URL von oben einfügen, Breite <b>{w}</b> und Höhe <b>{h}</b> eintragen.',
    wgStep3: 'Fertig. Drehen: Rechtsklick auf die Quelle → <b>Interagieren</b> → klicken oder Leertaste drücken. {auto}',
    wgStep3Auto: 'Die Walze dreht außerdem automatisch alle {n} Min.',
    wgTip: '<b>Tipp:</b> Setze in den Quelleneigenschaften den Haken bei <b>Browser aktualisieren, wenn Szene aktiv wird</b> und schalte „Beim Laden drehen“ an – dann zieht jeder Szenenwechsel eine neue Challenge.',
    wgParamsH: 'Parameter der Widget-URL',
    wgL1: '<code>p=2</code> – Spieleranzahl 1 (Solo), 2 (Duo), 3 (Trio) oder 4 (Squad); <code>lvl=mittel,schwer</code> – nur diese Stufen; <code>ind=0</code> – ab Duo ohne Einzel-Challenges.',
    wgL2: '<code>auto=5</code> – alle 5 Minuten automatisch drehen (Standard: aus); <code>show=30</code> – Ergebnis nach 30 Sekunden ausblenden (Standard: bleibt bis zum nächsten Dreh); <code>spin=1</code> – beim Laden einmal drehen.',
    wgL3: '<code>layout=full</code> – großes Layout 800 × 450 (Standard: <code>compact</code>, 640 × 90, eine Zeile); <code>theme=clear</code> – ohne Balken und Kasten; <code>scale=1.25</code> – Größe; <code>sound=1</code> – Ton.',
    wgL4: 'Die Sprache steckt im Pfad (<code>/en/overlay/challenge/</code>); alternativ <code>lang=en</code>. Das Widget lädt nichts von außen, setzt keine Cookies und hat kein Tracking.',
    wgToChal: '→ Challenge-Slot auf der Seite',
    chToWidget: '🎥 Als Streamer-Widget in OBS (ohne Chat)'
  },
  en: {
    wgChatH: 'With Twitch chat: roulette and challenge by command',
    wgH: 'Streamer widget without chat',
    wgP: 'The Challenge Slot as a browser source for OBS – <b>no Twitch chat, no login and no viewer commands</b>. You spin it yourself (click or Space), automatically at a fixed interval, or on every scene switch. The default is a slim one-line bar (just the challenge plus “oiotv.de”), with the large layout as an option. Set everything up here and copy the URL.',
    wgLayC: 'Compact 640×90', wgLayF: 'Full 800×450', wgAuto: 'Spin automatically every … minutes (0 = off)', wgShow: 'Show result for (seconds, 0 = until the next spin)',
    wgSpinLoad: 'Spin on load (a new spin on every scene switch)', wgClear: 'Transparent background (no bar or box)',
    wgPreview: 'Widget preview', wgPrevHint: 'Preview – click or press Space to spin.', wgUrlH: 'Widget URL', wgObsH: 'Add the widget to OBS',
    wgStep1: 'In OBS, click <b>+</b> under <b>Sources</b> and choose <b>Browser</b>.',
    wgStep2: 'Paste the URL from above and enter width <b>{w}</b> and height <b>{h}</b>.',
    wgStep3: 'Done. To spin: right-click the source → <b>Interact</b> → click or press Space. {auto}',
    wgStep3Auto: 'The reel also spins automatically every {n} min.',
    wgTip: '<b>Tip:</b> In the source properties, tick <b>Refresh browser when scene becomes active</b> and switch on “Spin on load” – then every scene switch draws a new challenge.',
    wgParamsH: 'Widget URL parameters',
    wgL1: '<code>p=2</code> – players: 1 (Solo), 2 (Duo), 3 (Trio) or 4 (Squad); <code>lvl=mittel,schwer</code> – only these levels (leicht, mittel, schwer = easy, medium, hard); <code>ind=0</code> – from Duo on, without the individual challenges.',
    wgL2: '<code>auto=5</code> – spin automatically every 5 minutes (default: off); <code>show=30</code> – hide the result after 30 seconds (default: stays until the next spin); <code>spin=1</code> – spin once on load.',
    wgL3: '<code>layout=full</code> – large layout 800 × 450 (default: <code>compact</code>, 640 × 90, one line); <code>theme=clear</code> – no bar or box; <code>scale=1.25</code> – size; <code>sound=1</code> – sound.',
    wgL4: 'The language is part of the path (<code>/en/overlay/challenge/</code>); alternatively <code>lang=en</code>. The widget loads nothing from outside, sets no cookies and has no tracking.',
    wgToChal: '→ Challenge Slot on the site',
    chToWidget: '🎥 As a streamer widget in OBS (no chat)'
  },
  es: {
    wgChatH: 'Con el chat de Twitch: ruleta y reto por comando',
    wgH: 'Widget para streamers sin chat',
    wgP: 'La tragaperras de retos como fuente de navegador para OBS: <b>sin chat de Twitch, sin inicio de sesión y sin comandos para los espectadores</b>. Giras tú (clic o barra espaciadora), automáticamente a intervalos fijos o en cada cambio de escena. Por defecto es una barra fina de una sola línea (solo el reto más «oiotv.de»); el diseño grande es opcional. Configura todo aquí y copia la URL.',
    wgLayC: 'Compacto 640×90', wgLayF: 'Completo 800×450', wgAuto: 'Girar automáticamente cada … minutos (0 = no)', wgShow: 'Mostrar el resultado (segundos, 0 = hasta el siguiente giro)',
    wgSpinLoad: 'Girar al cargar (un giro nuevo en cada cambio de escena)', wgClear: 'Fondo transparente (sin barra ni caja)',
    wgPreview: 'Vista previa del widget', wgPrevHint: 'Vista previa: clic o barra espaciadora para girar.', wgUrlH: 'URL del widget', wgObsH: 'Añadir el widget a OBS',
    wgStep1: 'En OBS, pulsa <b>+</b> en <b>Fuentes</b> y elige <b>Navegador</b>.',
    wgStep2: 'Pega la URL de arriba e introduce ancho <b>{w}</b> y alto <b>{h}</b>.',
    wgStep3: 'Listo. Para girar: clic derecho en la fuente → <b>Interactuar</b> → clic o barra espaciadora. {auto}',
    wgStep3Auto: 'Además, el rodillo gira solo cada {n} min.',
    wgTip: '<b>Consejo:</b> en las propiedades de la fuente, marca <b>Actualizar el navegador cuando la escena se active</b> y activa «Girar al cargar»: así cada cambio de escena saca un reto nuevo.',
    wgParamsH: 'Parámetros de la URL del widget',
    wgL1: '<code>p=2</code> – jugadores: 1 (Solo), 2 (Duo), 3 (Trio) o 4 (Squad); <code>lvl=mittel,schwer</code> – solo estos niveles (leicht, mittel, schwer = fácil, media, difícil); <code>ind=0</code> – a partir de Duo, sin los retos individuales.',
    wgL2: '<code>auto=5</code> – girar solo cada 5 minutos (por defecto: no); <code>show=30</code> – ocultar el resultado tras 30 segundos (por defecto: se queda hasta el siguiente giro); <code>spin=1</code> – girar una vez al cargar.',
    wgL3: '<code>layout=full</code> – diseño grande 800 × 450 (por defecto: <code>compact</code>, 640 × 90, una línea); <code>theme=clear</code> – sin barra ni caja; <code>scale=1.25</code> – tamaño; <code>sound=1</code> – sonido.',
    wgL4: 'El idioma va en la ruta (<code>/es/overlay/challenge/</code>); también vale <code>lang=es</code>. El widget no carga nada de fuera, no usa cookies y no tiene seguimiento.',
    wgToChal: '→ Tragaperras de retos en la web',
    chToWidget: '🎥 Como widget para streamers en OBS (sin chat)'
  },
  fr: {
    wgChatH: 'Avec le chat Twitch : roulette et défi par commande',
    wgH: 'Widget pour streamers sans chat',
    wgP: 'La machine à sous des défis comme source navigateur pour OBS : <b>sans chat Twitch, sans connexion et sans commande pour les spectateurs</b>. Tu lances toi-même (clic ou barre d’espace), automatiquement à intervalle fixe ou à chaque changement de scène. Par défaut, c’est une fine barre sur une seule ligne (juste le défi plus « oiotv.de »), la grande disposition est optionnelle. Règle tout ici et copie l’URL.',
    wgLayC: 'Compact 640×90', wgLayF: 'Complet 800×450', wgAuto: 'Lancer automatiquement toutes les … minutes (0 = non)', wgShow: 'Afficher le résultat (secondes, 0 = jusqu’au prochain tour)',
    wgSpinLoad: 'Lancer au chargement (un nouveau tour à chaque changement de scène)', wgClear: 'Fond transparent (sans barre ni cadre)',
    wgPreview: 'Aperçu du widget', wgPrevHint: 'Aperçu – clique ou appuie sur Espace pour lancer.', wgUrlH: 'URL du widget', wgObsH: 'Ajouter le widget à OBS',
    wgStep1: 'Dans OBS, clique sur <b>+</b> sous <b>Sources</b> et choisis <b>Navigateur</b>.',
    wgStep2: 'Colle l’URL ci-dessus et saisis la largeur <b>{w}</b> et la hauteur <b>{h}</b>.',
    wgStep3: 'C’est prêt. Pour lancer : clic droit sur la source → <b>Interagir</b> → clic ou barre d’espace. {auto}',
    wgStep3Auto: 'Le rouleau tourne aussi tout seul toutes les {n} min.',
    wgTip: '<b>Astuce :</b> dans les propriétés de la source, coche <b>Actualiser le navigateur quand la scène devient active</b> et active « Lancer au chargement » : chaque changement de scène tire alors un nouveau défi.',
    wgParamsH: 'Paramètres de l’URL du widget',
    wgL1: '<code>p=2</code> – joueurs : 1 (Solo), 2 (Duo), 3 (Trio) ou 4 (Squad) ; <code>lvl=mittel,schwer</code> – uniquement ces niveaux (leicht, mittel, schwer = facile, moyen, difficile) ; <code>ind=0</code> – à partir du Duo, sans les défis individuels.',
    wgL2: '<code>auto=5</code> – lancer automatiquement toutes les 5 minutes (par défaut : non) ; <code>show=30</code> – masquer le résultat après 30 secondes (par défaut : reste jusqu’au prochain tour) ; <code>spin=1</code> – un tour au chargement.',
    wgL3: '<code>layout=full</code> – grande disposition 800 × 450 (par défaut : <code>compact</code>, 640 × 90, une ligne) ; <code>theme=clear</code> – sans barre ni cadre ; <code>scale=1.25</code> – taille ; <code>sound=1</code> – son.',
    wgL4: 'La langue est dans le chemin (<code>/fr/overlay/challenge/</code>) ; sinon <code>lang=fr</code>. Le widget ne charge rien de l’extérieur, ne pose aucun cookie et n’a aucun suivi.',
    wgToChal: '→ Machine à sous des défis sur le site',
    chToWidget: '🎥 En widget streamer dans OBS (sans chat)'
  }
};
Object.keys(FB32_I18N).forEach(l => Object.assign(I18N[l], FB32_I18N[l]));

// ---------- Frontbuch v33: SEO-Texte für den WARDOGS Mörserrechner (/rechner/) ----------
// Nur Fakten aus Rechner (parts/js_calc.js), Anleitung (helpHtml) und Guide moerser-sph2.
const FB33_I18N = {
  de: {
    calcH1: 'WARDOGS Mörserrechner',
    calcCrumb: 'Mörserrechner',
    calcAboutH: 'Was rechnet der WARDOGS Mörserrechner?',
    calcAboutP: 'Der Mörserrechner von Frontbuch rechnet aus zwei Kartenpositionen die <strong>Distanz</strong> in Metern, die <strong>Richtung</strong> in Grad und in <strong>Mil</strong> (6400 Mil = 360°) und für den L81-Mörser die passende <strong>Elevation in Mil</strong>. Damit ist er Mörser-Rechner und Artillerie-Rechner in einem: Du gibst nur Koordinaten ein, die Mathematik übernimmt das Tool. Er läuft im Browser, ist kostenlos, merkt sich die letzten 15 Schüsse und funktioniert als App auch offline.',
    calcStepsH: 'So benutzt du den Mörserrechner in 3 Schritten',
    calcStep1: '<strong>Positionen eingeben:</strong> X und Y deiner Waffe und des Ziels von der Karte ablesen (0–160, eine Einheit = 100 m). Vertauscht? Dafür gibt es „⇄ Tauschen“.',
    calcStep2: '<strong>Waffe wählen:</strong> L81 Mörser oder SPH-2 Artillerie.',
    calcStep3: '<strong>Berechnen und richten:</strong> Richtung in Mil und beim L81 die Elevation übernehmen, feuern und nach dem ersten Einschlag korrigieren.',
    calcVsH: 'L81 oder SPH-2: der Unterschied',
    calcVsP: 'Der <strong>L81-Mörser</strong> ist ein Bauwerk für kurze Distanzen. Der Rechner deckt <strong>132 bis 684 m</strong> ab und liefert dafür die Elevation aus einer Community-Tabelle. Die <strong>SPH-2</strong> ist eine selbstfahrende Panzerhaubitze für große Distanzen von etwa <strong>780 bis 2.629 m</strong>. Hier zeigt der Rechner Distanz und Richtung; die Elevation hängt vom Bogen (Low/High) ab und kommt aus Community-Tabellen. Beispiel: Von 50/50 auf 53/54 sind es 500 m, Richtung 655 Mil und beim L81 eine Elevation von 461 Mil.',
    calcMoreP: 'Mehr dazu: <a href="/guides/moerser-sph2/">Guide Mörser L81 &amp; SPH-2</a> · <a href="/guides/artillerie-spotting/">Spotting für Artillerie</a> · <a href="/guides/artillerie-kontern/">Artillerie kontern</a>',
    calcFaqH: 'Häufige Fragen zum Mörserrechner',
    calcQ1: 'Ist der WARDOGS Mörserrechner kostenlos?',
    calcA1: 'Ja. Der Mörser-Rechner ist ein kostenloses, inoffizielles Fan-Tool ohne Anmeldung. Du kannst ihn als App installieren und dann auch offline nutzen.',
    calcQ2: 'Welche Reichweite hat der L81-Mörser im Rechner?',
    calcA2: 'Der Rechner nutzt eine Community-Tabelle von 132 bis 684 m. Liegt das Ziel näher oder weiter weg, zeigt er den Status rot an. Offizielle Reichweitenwerte gibt es nicht.',
    calcQ3: 'Warum zeigt der Rechner für die SPH-2 keine Elevation?',
    calcA3: 'Bei der SPH-2 hängt die Elevation vom Bogen ab (Low oder High). Der Artillerie-Rechner gibt dir Distanz und Richtung für etwa 780 bis 2.629 m, die Elevation holst du aus Community-Tabellen.',
    calcQ4: 'Was bedeutet Mil?',
    calcA4: 'Mil ist ein Winkelmaß: Ein voller Kreis hat 6400 Mil, 360° entsprechen also 6400 Mil. Der Rechner gibt die Richtung in Grad und in Mil aus, die Elevation des L81 in Mil.',
    calcQ5: 'Warum treffe ich trotz Rechner daneben?',
    calcA5: 'Der Rechner berücksichtigt keine Höhenunterschiede im Gelände. Oft sind auch X und Y vertauscht. Korrigiere nach dem ersten Einschlag, am besten mit einem Spotter.'
  },
  en: {
    calcH1: 'WARDOGS Mortar Calculator',
    calcCrumb: 'Mortar calculator',
    calcAboutH: 'What does the WARDOGS mortar calculator do?',
    calcAboutP: 'The Frontbuch mortar calculator takes two map positions and works out the <strong>distance</strong> in metres, the <strong>bearing</strong> in degrees and in <strong>mil</strong> (6400 mil = 360°) and, for the L81 mortar, the matching <strong>elevation in mil</strong>. That makes it a mortar calculator and an artillery calculator in one: you only enter coordinates, the tool does the math. It runs in your browser, is free, remembers your last 15 shots and works offline as an app.',
    calcStepsH: 'How to use the mortar calculator in 3 steps',
    calcStep1: '<strong>Enter positions:</strong> read the X and Y of your weapon and of the target from the map (0–160, one unit = 100 m). Mixed them up? That’s what “⇄ Swap” is for.',
    calcStep2: '<strong>Pick the weapon:</strong> L81 mortar or SPH-2 artillery.',
    calcStep3: '<strong>Calculate and aim:</strong> dial in the bearing in mil and, for the L81, the elevation, fire and correct after the first impact.',
    calcVsH: 'L81 or SPH-2: the difference',
    calcVsP: 'The <strong>L81 mortar</strong> is a buildable for short distances. The calculator covers <strong>132 to 684 m</strong> and gives you the elevation from a community table. The <strong>SPH-2</strong> is a self-propelled howitzer for long distances of about <strong>780 to 2,629 m</strong>. Here the calculator shows distance and bearing; the elevation depends on the arc (Low/High) and comes from community tables. Example: from 50/50 to 53/54 is 500 m, bearing 655 mil and, for the L81, an elevation of 461 mil.',
    calcMoreP: 'Read more: <a href="/guides/moerser-sph2/">Guide L81 mortar &amp; SPH-2</a> · <a href="/guides/artillerie-spotting/">Spotting for artillery</a> · <a href="/guides/artillerie-kontern/">Countering artillery</a>',
    calcFaqH: 'Mortar calculator FAQ',
    calcQ1: 'Is the WARDOGS mortar calculator free?',
    calcA1: 'Yes. The mortar calculator is a free, unofficial fan tool with no sign-up. You can install it as an app and then use it offline too.',
    calcQ2: 'What range does the L81 mortar have in the calculator?',
    calcA2: 'The calculator uses a community table from 132 to 684 m. If the target is closer or further away, the status turns red. There are no official range values.',
    calcQ3: 'Why doesn’t the calculator show an elevation for the SPH-2?',
    calcA3: 'For the SPH-2, the elevation depends on the arc (Low or High). The artillery calculator gives you distance and bearing for about 780 to 2,629 m; take the elevation from community tables.',
    calcQ4: 'What does mil mean?',
    calcA4: 'Mil is an angle unit: a full circle has 6400 mil, so 360° equals 6400 mil. The calculator shows the bearing in degrees and in mil, and the L81 elevation in mil.',
    calcQ5: 'Why do I still miss with the calculator?',
    calcA5: 'The calculator doesn’t account for height differences in the terrain. X and Y are also often swapped. Correct after the first impact, ideally with a spotter.'
  },
  es: {
    calcH1: 'Calculadora de mortero WARDOGS',
    calcCrumb: 'Calculadora de mortero',
    calcAboutH: '¿Qué calcula la calculadora de mortero de WARDOGS?',
    calcAboutP: 'La calculadora de mortero de Frontbuch toma dos posiciones del mapa y calcula la <strong>distancia</strong> en metros, la <strong>dirección</strong> en grados y en <strong>mil</strong> (6400 mil = 360°) y, para el mortero L81, la <strong>elevación en mil</strong> correspondiente. Es calculadora de mortero y calculadora de artillería a la vez: tú solo introduces coordenadas y la herramienta hace las cuentas. Funciona en el navegador, es gratis, guarda tus últimos 15 disparos y también funciona sin conexión como app.',
    calcStepsH: 'Cómo usar la calculadora de mortero en 3 pasos',
    calcStep1: '<strong>Introduce las posiciones:</strong> lee en el mapa la X y la Y de tu arma y del objetivo (0–160, una unidad = 100 m). ¿Las has invertido? Para eso está «⇄ Intercambiar».',
    calcStep2: '<strong>Elige el arma:</strong> mortero L81 o artillería SPH-2.',
    calcStep3: '<strong>Calcula y apunta:</strong> ajusta la dirección en mil y, con el L81, la elevación, dispara y corrige tras el primer impacto.',
    calcVsH: 'L81 o SPH-2: la diferencia',
    calcVsP: 'El <strong>mortero L81</strong> es una construcción para distancias cortas. La calculadora cubre de <strong>132 a 684 m</strong> y da la elevación a partir de una tabla de la comunidad. El <strong>SPH-2</strong> es un obús autopropulsado para distancias largas, de unos <strong>780 a 2.629 m</strong>. Aquí la calculadora muestra distancia y dirección; la elevación depende del arco (Low/High) y sale de tablas de la comunidad. Ejemplo: de 50/50 a 53/54 hay 500 m, dirección 655 mil y, con el L81, una elevación de 461 mil.',
    calcMoreP: 'Más información: <a href="/guides/moerser-sph2/">Guía mortero L81 y SPH-2</a> · <a href="/guides/artillerie-spotting/">Spotting para artillería</a> · <a href="/guides/artillerie-kontern/">Contrarrestar la artillería</a>',
    calcFaqH: 'Preguntas frecuentes sobre la calculadora de mortero',
    calcQ1: '¿Es gratis la calculadora de mortero de WARDOGS?',
    calcA1: 'Sí. La calculadora de mortero es una herramienta de fans gratuita y no oficial, sin registro. Puedes instalarla como app y usarla también sin conexión.',
    calcQ2: '¿Qué alcance tiene el mortero L81 en la calculadora?',
    calcA2: 'La calculadora usa una tabla de la comunidad de 132 a 684 m. Si el objetivo está más cerca o más lejos, el estado se muestra en rojo. No hay valores de alcance oficiales.',
    calcQ3: '¿Por qué la calculadora no muestra elevación para el SPH-2?',
    calcA3: 'En el SPH-2, la elevación depende del arco (Low o High). La calculadora de artillería te da distancia y dirección para unos 780 a 2.629 m; la elevación la sacas de tablas de la comunidad.',
    calcQ4: '¿Qué significa mil?',
    calcA4: 'El mil es una unidad de ángulo: un círculo completo tiene 6400 mil, así que 360° equivalen a 6400 mil. La calculadora da la dirección en grados y en mil, y la elevación del L81 en mil.',
    calcQ5: '¿Por qué fallo aunque use la calculadora?',
    calcA5: 'La calculadora no tiene en cuenta las diferencias de altura del terreno. También es frecuente invertir X e Y. Corrige tras el primer impacto, mejor con un spotter.'
  },
  fr: {
    calcH1: 'Calculateur de mortier WARDOGS',
    calcCrumb: 'Calculateur de mortier',
    calcAboutH: 'Que calcule le calculateur de mortier WARDOGS ?',
    calcAboutP: 'Le calculateur de mortier de Frontbuch prend deux positions sur la carte et calcule la <strong>distance</strong> en mètres, la <strong>direction</strong> en degrés et en <strong>mil</strong> (6400 mil = 360°) et, pour le mortier L81, l’<strong>élévation en mil</strong> correspondante. C’est à la fois un calculateur de mortier et un calculateur d’artillerie : tu saisis seulement des coordonnées, l’outil fait les maths. Il tourne dans le navigateur, est gratuit, garde tes 15 derniers tirs et fonctionne aussi hors ligne en tant qu’app.',
    calcStepsH: 'Utiliser le calculateur de mortier en 3 étapes',
    calcStep1: '<strong>Saisir les positions :</strong> relève sur la carte le X et le Y de ton arme et de la cible (0–160, une unité = 100 m). Inversés ? C’est à ça que sert « ⇄ Inverser ».',
    calcStep2: '<strong>Choisir l’arme :</strong> mortier L81 ou artillerie SPH-2.',
    calcStep3: '<strong>Calculer et pointer :</strong> reporte la direction en mil et, pour le L81, l’élévation, tire et corrige après le premier impact.',
    calcVsH: 'L81 ou SPH-2 : la différence',
    calcVsP: 'Le <strong>mortier L81</strong> est une construction pour les courtes distances. Le calculateur couvre de <strong>132 à 684 m</strong> et donne l’élévation d’après une table de la communauté. Le <strong>SPH-2</strong> est un obusier automoteur pour les longues distances, d’environ <strong>780 à 2 629 m</strong>. Ici, le calculateur affiche la distance et la direction ; l’élévation dépend de l’arc (Low/High) et vient de tables de la communauté. Exemple : de 50/50 à 53/54, il y a 500 m, direction 655 mil et, pour le L81, une élévation de 461 mil.',
    calcMoreP: 'Pour aller plus loin : <a href="/guides/moerser-sph2/">Guide mortier L81 &amp; SPH-2</a> · <a href="/guides/artillerie-spotting/">Spotting pour l’artillerie</a> · <a href="/guides/artillerie-kontern/">Contrer l’artillerie</a>',
    calcFaqH: 'Questions fréquentes sur le calculateur de mortier',
    calcQ1: 'Le calculateur de mortier WARDOGS est-il gratuit ?',
    calcA1: 'Oui. Le calculateur de mortier est un outil de fans gratuit et non officiel, sans inscription. Tu peux l’installer comme app et l’utiliser aussi hors ligne.',
    calcQ2: 'Quelle portée a le mortier L81 dans le calculateur ?',
    calcA2: 'Le calculateur utilise une table de la communauté de 132 à 684 m. Si la cible est plus proche ou plus loin, le statut passe au rouge. Il n’existe pas de valeurs de portée officielles.',
    calcQ3: 'Pourquoi le calculateur n’affiche-t-il pas d’élévation pour le SPH-2 ?',
    calcA3: 'Pour le SPH-2, l’élévation dépend de l’arc (Low ou High). Le calculateur d’artillerie te donne la distance et la direction pour environ 780 à 2 629 m ; l’élévation, tu la prends dans des tables de la communauté.',
    calcQ4: 'Que signifie mil ?',
    calcA4: 'Le mil est une unité d’angle : un cercle complet fait 6400 mil, donc 360° correspondent à 6400 mil. Le calculateur affiche la direction en degrés et en mil, et l’élévation du L81 en mil.',
    calcQ5: 'Pourquoi je rate encore ma cible avec le calculateur ?',
    calcA5: 'Le calculateur ne tient pas compte des différences d’altitude du terrain. Souvent, X et Y sont aussi inversés. Corrige après le premier impact, idéalement avec un spotter.'
  }
};
Object.keys(FB33_I18N).forEach(l => Object.assign(I18N[l], FB33_I18N[l]));

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Seiten-Skripte (Rechner, Tools, Guides) registrieren hier ihre Render-Funktionen für den Sprachwechsel.
window.fbLangHooks = window.fbLangHooks || [];

// ---------- Sprach-URLs: Deutsch unter /, Übersetzungen unter /en/, /es/, /fr/ ----------
// fbLP = Präfix der aktuellen Seite ('' für Deutsch). Statische Seiten tragen data-pl, 404/Offline erkennen es am Pfad.
window.fbLP = (function () {
  const pl = document.documentElement.dataset.pl;
  if (pl) return pl === 'de' ? '' : '/' + pl;
  const m = location.pathname.match(/^\/(en|es|fr)\//);
  return m ? '/' + m[1] : '';
})();
// Interne Pfade (ohne Sprachpräfix gespeichert) für die aktuelle Sprache auflösen
function fbHref(u) {
  if (typeof u !== 'string' || u[0] !== '/' || u[1] === '/' || !window.fbLP) return u;
  if (/^\/(assets|overlay)\//.test(u) || /^\/(en|es|fr)(\/|$)/.test(u) || /\.[a-z0-9]+$/i.test(u.split(/[?#]/)[0])) return u;
  return window.fbLP + u;
}
// Aktueller Pfad ohne Sprachpräfix (für Merkliste/Verlauf)
function fbPath() { return location.pathname.replace(/^\/(en|es|fr)(?=\/)/, ''); }

// ---------- Sprache anwenden ----------
function applyLang() {
  document.documentElement.lang = lang;
  const titleKey = document.body.dataset.titleKey;
  if (titleKey) document.title = t(titleKey);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n, el.dataset.i18nN ? { n: el.dataset.i18nN } : undefined); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); el.querySelectorAll('a[href^="/"]').forEach(a => a.setAttribute('href', fbHref(a.getAttribute('href')))); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });

  const menuBtn = document.getElementById('menuBtn');
  menuBtn.setAttribute('aria-label', document.body.classList.contains('menu-open') ? t('menuClose') : t('menuOpen'));

  const info = LANGS[lang];
  document.getElementById('langBtnFlag').setAttribute('href', '#' + info.flag);
  document.getElementById('langBtn').setAttribute('aria-label', t('langChoose') + ': ' + info.name);
  document.getElementById('langList').setAttribute('aria-label', t('langChoose'));
  document.querySelectorAll('#langList [role="option"]').forEach(li => {
    li.setAttribute('aria-selected', li.dataset.lang === lang ? 'true' : 'false');
  });

  window.fbLangHooks.forEach(fn => { try { fn(); } catch (e) { console.warn(e); } });
  if (window.renderShare) window.renderShare();
  if (window.renderMusic) window.renderMusic();
}

function setLang(code) {
  if (!I18N[code]) return;
  try { localStorage.setItem('wardogsLang', code); } catch (e) {}
  // Statische Sprachversion vorhanden? Dann zur übersetzten Fassung derselben Seite wechseln.
  const alt = document.querySelector('link[rel="alternate"][hreflang="' + code + '"]');
  if (alt && document.documentElement.dataset.pl && code !== document.documentElement.dataset.pl) {
    const u = new URL(alt.href, location.href);
    location.href = u.pathname + location.search + location.hash;
    return;
  }
  lang = code;
  applyLang();
}
// 404/Offline (ohne eigene Sprachfassung): interne Links in die Sprache des Pfads umschreiben
if (!document.documentElement.dataset.pl && window.fbLP) {
  document.querySelectorAll('a[href^="/"], form[action^="/"]').forEach(a => {
    const k = a.tagName === 'FORM' ? 'action' : 'href';
    a.setAttribute(k, fbHref(a.getAttribute(k)));
  });
}

// Service Worker registrieren (PWA / Offline)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch(() => {});
  });
}

// ---------- Sprachauswahl (Dropdown) ----------
(function () {
  const wrap = document.getElementById('langWrap');
  const btn = document.getElementById('langBtn');
  const list = document.getElementById('langList');
  const options = Array.from(list.querySelectorAll('[role="option"]'));

  function isOpen() { return !list.hidden; }

  function focusOption(i) {
    const idx = (i + options.length) % options.length;
    options.forEach((o, j) => o.tabIndex = j === idx ? 0 : -1);
    options[idx].focus();
    list.setAttribute('aria-activedescendant', options[idx].id);
  }

  function open(focusIdx) {
    list.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    const sel = options.findIndex(o => o.dataset.lang === lang);
    focusOption(focusIdx === undefined ? Math.max(0, sel) : focusIdx);
  }

  function close(returnFocus) {
    if (!isOpen()) return;
    list.hidden = true;
    btn.setAttribute('aria-expanded', 'false');
    list.removeAttribute('aria-activedescendant');
    if (returnFocus) btn.focus();
  }

  function choose(li) {
    setLang(li.dataset.lang);
    close(true);
  }

  window.closeLangMenu = () => close(false);

  btn.addEventListener('click', () => isOpen() ? close(true) : open());
  btn.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); open(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); open(options.length - 1); }
    else if (e.key === 'Escape' && isOpen()) { e.preventDefault(); e.stopPropagation(); close(true); }
  });

  list.addEventListener('keydown', (e) => {
    const cur = options.indexOf(document.activeElement);
    switch (e.key) {
      case 'ArrowDown': e.preventDefault(); focusOption(cur + 1); break;
      case 'ArrowUp': e.preventDefault(); focusOption(cur - 1); break;
      case 'Home': e.preventDefault(); focusOption(0); break;
      case 'End': e.preventDefault(); focusOption(options.length - 1); break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (cur >= 0) choose(options[cur]);
        break;
      case 'Escape': e.preventDefault(); e.stopPropagation(); close(true); break;
      case 'Tab': close(false); break;
    }
  });

  options.forEach(li => li.addEventListener('click', () => choose(li)));

  document.addEventListener('pointerdown', (e) => {
    if (isOpen() && !wrap.contains(e.target)) close(false);
  });
})();

// ---------- Menü / Drawer ----------
(function () {
  const btn = document.getElementById('menuBtn');
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  const BG = ['siteHeader', 'mainContent', 'siteFooter', 'tabBar', 'musicBar', 'musicFab'];
  const items = Array.from(drawer.querySelectorAll('.menu-item[aria-controls]'));
  let lastFocus = null;

  function isOpen() { return document.body.classList.contains('menu-open'); }

  function openMenu() {
    if (isOpen()) return;
    if (window.closeLangMenu) window.closeLangMenu();
    lastFocus = document.activeElement;
    document.body.classList.add('menu-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', t('menuClose'));
    BG.forEach(id => { const el = document.getElementById(id); if (el) el.inert = true; });
    updateInstallUI();
    setTimeout(() => closeBtn.focus(), 30);
  }

  function closeMenu(refocus) {
    if (!isOpen()) return;
    document.body.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', t('menuOpen'));
    BG.forEach(id => { const el = document.getElementById(id); if (el) el.inert = false; });
    if (refocus !== false) (lastFocus && document.contains(lastFocus) ? lastFocus : btn).focus();
  }

  window.fcCloseMenu = closeMenu;

  btn.addEventListener('click', () => isOpen() ? closeMenu() : openMenu());
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeMenu();
    } else if (e.key === 'Tab') {
      const f = Array.from(drawer.querySelectorAll('button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        .filter(el => !el.disabled && el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      const expand = item.getAttribute('aria-expanded') !== 'true';
      items.forEach(other => {
        other.setAttribute('aria-expanded', 'false');
        document.getElementById(other.getAttribute('aria-controls')).hidden = true;
      });
      if (expand) {
        item.setAttribute('aria-expanded', 'true');
        document.getElementById(item.getAttribute('aria-controls')).hidden = false;
      }
    });
  });

  // ---------- App installieren ----------
  let deferredPrompt = null;
  const installBtn = document.getElementById('installBtn');

  function isStandalone() {
    return (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
           window.navigator.standalone === true;
  }

  function updateInstallUI() {
    const installed = isStandalone();
    document.getElementById('installInstalled').hidden = !installed;
    document.getElementById('installPrompt').hidden = installed || !deferredPrompt;
    document.getElementById('installManual').hidden = installed || !!deferredPrompt;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    updateInstallUI();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    updateInstallUI();
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) { updateInstallUI(); return; }
    const p = deferredPrompt;
    deferredPrompt = null;
    p.prompt();
    try { await p.userChoice; } catch (e) {}
    updateInstallUI();
  });

  updateInstallUI();
})();

// ---------- Seite teilen ----------
(function () {
  const canon = document.querySelector('link[rel="canonical"]');
  const SHARE_URL = canon ? canon.href : location.href;
  const pop = document.getElementById('sharePop');
  const backdrop = document.getElementById('shareBackdrop');
  const closeBtn = document.getElementById('shareClose');
  const copyBtn = document.getElementById('shareCopy');
  const urlInput = document.getElementById('shareUrl');
  const msg = document.getElementById('shareMsg');
  const linksBox = document.getElementById('shareLinks');
  const headBtn = document.getElementById('shareHeadBtn');
  const menuItem = document.getElementById('miShare');
  const menuBtn = document.getElementById('menuBtn');
  const background = ['siteHeader', 'mainContent', 'siteFooter', 'tabBar', 'musicBar', 'musicFab'].map(id => document.getElementById(id));
  let returnFocus = null;
  let copyTimer = null;
  urlInput.value = SHARE_URL;

  function shareLinks() {
    const u = encodeURIComponent(SHARE_URL);
    const text = document.title;
    const tx = encodeURIComponent(text);
    return [
      { name: 'WhatsApp', color: '#25D366', href: 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + SHARE_URL) },
      { name: 'Telegram', color: '#229ED9', href: 'https://t.me/share/url?url=' + u + '&text=' + tx },
      { name: 'X', color: '#e7e9ea', href: 'https://x.com/intent/tweet?text=' + tx + '&url=' + u },
      { name: 'Reddit', color: '#FF4500', href: 'https://www.reddit.com/submit?url=' + u + '&title=' + encodeURIComponent(document.title) },
      { name: t('email'), color: '#94a3b8', href: 'mailto:?subject=' + encodeURIComponent(document.title) + '&body=' + encodeURIComponent(text + '\n\n' + SHARE_URL), mail: true }
    ];
  }

  function renderShare() {
    linksBox.innerHTML = shareLinks().map(l =>
      `<a href="${escapeHtml(l.href)}"${l.mail ? '' : ' target="_blank" rel="noopener noreferrer"'} aria-label="${escapeHtml(l.name + (l.mail ? '' : ' (' + t('newTab') + ')'))}"><span class="dot" style="background:${l.color}" aria-hidden="true"></span>${escapeHtml(l.name)}</a>`
    ).join('');
    if (!copyTimer) copyBtn.textContent = t('copyLink');
  }
  window.renderShare = renderShare;

  function isOpen() { return !pop.hidden; }

  function openPop(from) {
    returnFocus = from || document.activeElement;
    renderShare();
    msg.textContent = '';
    pop.hidden = false;
    backdrop.hidden = false;
    document.body.classList.add('share-open');
    document.body.style.overflow = 'hidden';
    background.forEach(el => el && (el.inert = true));
    setTimeout(() => copyBtn.focus(), 30);
  }

  function closePop() {
    if (!isOpen()) return;
    pop.hidden = true;
    backdrop.hidden = true;
    document.body.classList.remove('share-open');
    document.body.style.overflow = '';
    background.forEach(el => el && (el.inert = false));
    const target = (returnFocus && document.contains(returnFocus) && returnFocus.offsetParent !== null) ? returnFocus : menuBtn;
    target.focus();
  }

  async function share(from) {
    if (navigator.share) {
      const refocus = () => { if (from && document.contains(from) && from.offsetParent !== null) from.focus(); };
      try {
        await navigator.share({ title: document.title, text: document.title, url: SHARE_URL });
        refocus();
        return;
      } catch (e) {
        if (e && e.name === 'AbortError') { refocus(); return; }
      }
    }
    openPop(from);
  }

  function copied() {
    copyBtn.textContent = t('linkCopied');
    msg.textContent = '';
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyTimer = null; copyBtn.textContent = t('copyLink'); }, 1600);
  }

  function copyFallback() {
    const ta = document.createElement('textarea');
    ta.value = SHARE_URL;
    ta.setAttribute('readonly', '');
    ta.style.position = 'fixed';
    ta.style.left = '-9999px';
    pop.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    pop.removeChild(ta);
    if (ok) { copied(); copyBtn.focus(); }
    else {
      urlInput.focus();
      urlInput.select();
      msg.textContent = t('copyLinkFail');
    }
  }

  copyBtn.addEventListener('click', () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(SHARE_URL).then(copied).catch(copyFallback);
    } else {
      copyFallback();
    }
  });

  urlInput.addEventListener('focus', () => urlInput.select());

  window.fcShare = share;
  headBtn.addEventListener('click', () => share(headBtn));
  menuItem.addEventListener('click', () => {
    if (window.fcCloseMenu) window.fcCloseMenu(false);
    share(menuBtn);
  });
  closeBtn.addEventListener('click', closePop);
  backdrop.addEventListener('click', closePop);

  pop.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      closePop();
    } else if (e.key === 'Tab') {
      const f = Array.from(pop.querySelectorAll('button, a[href], input'))
        .filter(el => !el.disabled && el.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  renderShare();
})();

// ---------- Musik-Player: Spotify-Vorschauen von cloudybeatz ----------
// Track-Liste = Top-Tracks aus dem öffentlichen Spotify-Artist-Embed (Stand 17.10.2026).
// Neue Releases erscheinen hier erst nach einem Update dieser Liste.
  // 1. Can I Be for Real? – 3VKkgVw7qCtrvQ5OWrttLj
  // 2. Hardstyle Raverz – 0sLNVGZRddExhb4cun8z36
  // 3. Won't Stay – 3Yjh8SWU063b46lFBhsRm4
  // 4. Heart of Iron – 4rb2oi1eHqQG3ic4Qm21u8
  // 5. Please Stab Me.... – 4qnTOVMzGx91r2dNtbuwAC
  // 6. Dont Leave (explicit) – 5f2nKgvzGUutHSbfBS1iGN
  // 7. Night Times – 7tUCTIYPPiiNc8NXkHVLlv
  // 8. Ashes of the Fallen – 2bqLlvOmcQ2aC1n8hxx2vK
  // 9. R.a.W – 49yzGd69TSWivEVh66dET5
  // 10. L O V E S I C K – 0JiuhcOJCaejzvPOXAl1hN
const MUSIC = {
  name: 'cloudybeatz',
  tracks: ["3VKkgVw7qCtrvQ5OWrttLj", "0sLNVGZRddExhb4cun8z36", "3Yjh8SWU063b46lFBhsRm4", "4rb2oi1eHqQG3ic4Qm21u8", "4qnTOVMzGx91r2dNtbuwAC", "5f2nKgvzGUutHSbfBS1iGN", "7tUCTIYPPiiNc8NXkHVLlv", "2bqLlvOmcQ2aC1n8hxx2vK", "49yzGd69TSWivEVh66dET5", "0JiuhcOJCaejzvPOXAl1hN"],
  // Hintergrundfarbe des Spotify-Players je Track (für den Teilen-Button über dem „+“)
  colors: {"3VKkgVw7qCtrvQ5OWrttLj": "#7821ac", "0sLNVGZRddExhb4cun8z36": "#380000", "3Yjh8SWU063b46lFBhsRm4": "#972700", "4rb2oi1eHqQG3ic4Qm21u8": "#0d5395", "4qnTOVMzGx91r2dNtbuwAC": "#535353", "5f2nKgvzGUutHSbfBS1iGN": "#485048", "7tUCTIYPPiiNc8NXkHVLlv": "#102038", "2bqLlvOmcQ2aC1n8hxx2vK": "#28586f", "49yzGd69TSWivEVh66dET5": "#9f0000", "0JiuhcOJCaejzvPOXAl1hN": "#9f0000"},
  previewMs: 30000,
  collapseMs: 6000
};

(function () {
  const bar = document.getElementById('musicBar');
  const fab = document.getElementById('musicFab');
  const host = document.getElementById('musicHost');
  const placeholder = document.getElementById('musicPlaceholder');
  const toast = document.getElementById('musicToast');
  const covers = [document.getElementById('musicCoverPlus'), document.getElementById('musicCoverMore')];
  const n = MUSIC.tracks.length;
  const CONSENT_KEY = 'wardogsSpotifyConsent';
  const consentBox = document.getElementById('musicConsent');
  const consentBtn = document.getElementById('musicConsentBtn');

  let idx = 0;
  try {
    localStorage.removeItem('wardogsMusic'); // alter Minimiert-Status aus v6
    const savedIdx = parseInt(localStorage.getItem('wardogsMusicIdx'), 10);
    if (savedIdx >= 0 && savedIdx < n) idx = savedIdx;
  } catch (e) {}

  let ctl = null;
  let apiRequested = false;
  let isPlaying = false;
  let pendingPlay = false;
  let advancing = false;
  let last = { pos: 0, dur: 0, playing: false };
  let blockTimer = null;
  let toastTimer = null;
  let collapseTimer = null;
  let collapsed = false;
  let hovering = false;
  let phKey = 'musicLoading';

  const uri = (i) => 'spotify:track:' + MUSIC.tracks[i];

  function renderMusic() {
    bar.setAttribute('aria-label', t('musicBy', { name: MUSIC.name }));
    fab.setAttribute('aria-label', t('musicShow', { name: MUSIC.name }));
    fab.classList.toggle('playing', isPlaying);
    const f = bar.querySelector('iframe');
    if (f) f.title = t('musicBy', { name: MUSIC.name });
    if (!placeholder.hidden) placeholder.textContent = t(phKey);
    if (!toast.hidden) toast.textContent = t('musicTapNext');
  }
  window.renderMusic = renderMusic;

  // ----- Abdeckungen über „+“ und „…“ des Spotify-Players (fremder iframe) -----
  function placeShare() {
    const w = bar.clientWidth;
    // Spotify-Layout (gemessen): beide Buttons 24×24 bei top 48;
    // Abstand rechts ab 360 px Breite: „+“ 100 px, „…“ 60 px; darunter 84 px bzw. 52 px
    const wide = w >= 360;
    const rights = wide ? [100, 60] : [84, 52];
    const bg = MUSIC.colors[MUSIC.tracks[idx]] || '#282828';
    covers.forEach((c, k) => {
      c.style.right = (rights[k] - 2) + 'px';
      c.style.setProperty('--music-bg', bg);
    });
  }

  function showPlaceholder(key) {
    phKey = key;
    placeholder.textContent = t(key);
    placeholder.hidden = false;
    covers.forEach(c => c.hidden = true);
  }

  // ----- Auto-Einklappen -----
  function clearCollapse() { clearTimeout(collapseTimer); collapseTimer = null; }
  function scheduleCollapse() {
    clearCollapse();
    const a = document.activeElement;
    // Fokus auf eigenen Elementen im Player pausiert den Timer (Fokus im Spotify-iframe nicht – sonst klappt er auf Touch-Geräten nie ein)
    if (collapsed || hovering || (a && a.tagName !== 'IFRAME' && bar.contains(a) && a.matches(':focus-visible'))) return;
    collapseTimer = setTimeout(() => collapse(), MUSIC.collapseMs);
  }
  function collapse() {
    if (collapsed) return;
    if (!toast.hidden) return; // Hinweis sichtbar → offen lassen
    clearCollapse();
    collapsed = true;
    bar.classList.add('collapsed');
    bar.inert = true;
    bar.setAttribute('aria-hidden', 'true');
    fab.classList.add('show');
    fab.setAttribute('aria-expanded', 'false');
    fab.tabIndex = 0;
  }
  function expand(focusPlayer) {
    collapsed = false;
    bar.classList.remove('collapsed');
    bar.inert = false;
    bar.removeAttribute('aria-hidden');
    fab.classList.remove('show');
    fab.setAttribute('aria-expanded', 'true');
    fab.tabIndex = -1;
    placeShare();
    ensureApi();
    if (document.activeElement === fab) fab.blur();
    scheduleCollapse();
  }
  function interact() { if (!collapsed) scheduleCollapse(); }

  bar.addEventListener('pointerenter', () => { hovering = true; clearCollapse(); });
  bar.addEventListener('pointerleave', () => { hovering = false; scheduleCollapse(); });
  bar.addEventListener('focusin', clearCollapse);
  bar.addEventListener('focusout', () => setTimeout(scheduleCollapse, 0));
  // Klick/Tipp in den (fremden) Spotify-iframe → Fenster verliert den Fokus
  window.addEventListener('blur', () => {
    setTimeout(() => {
      const a = document.activeElement;
      if (a && a.tagName === 'IFRAME' && bar.contains(a)) interact();
    }, 0);
  });
  // Scrollen oder Tippen außerhalb → einklappen
  window.addEventListener('scroll', () => { if (!hovering) collapse(); }, { passive: true });
  document.addEventListener('pointerdown', (e) => {
    if (!bar.contains(e.target) && !fab.contains(e.target)) collapse();
  });
  fab.addEventListener('click', (e) => expand(e.detail === 0)); // Fokus nur bei Tastaturbedienung verschieben
  covers.forEach(c => c.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); }));

  // ----- Hinweis-Toast (strenge Autoplay-Regeln) -----
  function showToast(show) {
    clearTimeout(toastTimer);
    toast.hidden = !show;
    if (show) {
      toast.textContent = t('musicTapNext');
      if (collapsed) expand(false);
      clearCollapse();
      toastTimer = setTimeout(() => { toast.hidden = true; scheduleCollapse(); }, 8000);
    }
  }

  // ----- Spotify iFrame API -----
  function onReady() {
    placeholder.hidden = true;
    covers.forEach(c => c.hidden = false);
    placeShare();
    renderMusic();
    if (pendingPlay) {
      pendingPlay = false;
      ctl.play();
      clearTimeout(blockTimer);
      // Manche Browser blockieren Autoplay im neu geladenen Player → kurzer Hinweis
      blockTimer = setTimeout(() => { if (!isPlaying) showToast(true); }, 3500);
    } else if (!collapsed) {
      scheduleCollapse();
    }
  }

  function onUpdate(e) {
    const d = (e && e.data) || {};
    if (d.playingURI && d.playingURI !== uri(idx)) return; // Nachzügler des vorherigen Songs
    const playing = !d.isPaused;
    if (playing !== isPlaying) {
      isPlaying = playing;
      fab.classList.toggle('playing', isPlaying);
      interact(); // Play/Pause im Player = Interaktion
    }
    if (playing && !toast.hidden) showToast(false);
    const pos = d.position || 0;
    const dur = d.duration || 0;
    if (!advancing) {
      const cutOff = playing && pos >= MUSIC.previewMs;
      // Ende der Vorschau: Spotify meldet position === duration und sendet danach keine Updates mehr
      const ended = dur > 0 && pos >= dur - 250 && (playing || last.playing);
      if (cutOff || ended) { advancing = true; go(idx + 1, true); return; }
    }
    last = { pos, dur, playing };
  }

  function go(i, play) {
    idx = ((i % n) + n) % n;
    try { localStorage.setItem('wardogsMusicIdx', String(idx)); } catch (e) {}
    last = { pos: 0, dur: 0, playing: false };
    isPlaying = false;
    placeShare();
    if (!ctl) { pendingPlay = pendingPlay || play; return; }
    pendingPlay = play;
    ctl.loadUri(uri(idx));
    setTimeout(() => { advancing = false; }, 1200);
  }
  window.fcMusicNext = () => go(idx + 1, true);
  window.fcMusicGo = (i) => go(i, false);

  function hasConsent() { try { return localStorage.getItem(CONSENT_KEY) === '1'; } catch (e) { return false; } }
  function showConsent() {
    placeholder.hidden = true;
    covers.forEach(c => c.hidden = true);
    consentBox.hidden = false;
  }
  function ensureApi() {
    if (apiRequested) return;
    if (!hasConsent()) { showConsent(); return; }
    consentBox.hidden = true;
    if (!navigator.onLine) { showPlaceholder('musicOffline'); return; }
    apiRequested = true;
    showPlaceholder('musicLoading');
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      IFrameAPI.createController(host, { uri: uri(idx), width: '100%', height: 80 }, (c) => {
        ctl = c;
        c.addListener('ready', onReady);
        c.addListener('playback_update', onUpdate);
      });
    };
    const sc = document.createElement('script');
    sc.src = 'https://open.spotify.com/embed/iframe-api/v1';
    sc.async = true;
    sc.onerror = () => {
      apiRequested = false;
      sc.remove();
      showPlaceholder(navigator.onLine ? 'musicFail' : 'musicOffline');
      scheduleCollapse();
    };
    document.head.appendChild(sc);
  }

  window.addEventListener('online', () => { if (!apiRequested) ensureApi(); });
  window.addEventListener('offline', () => { if (!ctl) showPlaceholder('musicOffline'); });
  window.addEventListener('resize', placeShare);
  if ('ResizeObserver' in window) new ResizeObserver(placeShare).observe(bar);

  // Platz unten nur für das kleine Musik-Icon
  document.body.style.paddingBottom = '84px';
  fab.tabIndex = -1;
  renderMusic();
  placeShare();
  if (hasConsent()) showPlaceholder('musicLoading'); else showConsent();
  consentBtn.addEventListener('click', () => {
    try { localStorage.setItem(CONSENT_KEY, '1'); } catch (e) {}
    ensureApi();
    scheduleCollapse();
  });
  window.fbMusicConsent = { has: hasConsent, revoke: () => { try { localStorage.removeItem(CONSENT_KEY); } catch (e) {} } };
  // Player erst nach dem Laden der Seite im Leerlauf nachladen (Performance)
  const lazyStart = () => {
    (window.requestIdleCallback || ((f) => setTimeout(f, 1200)))(() => ensureApi(), { timeout: 3000 });
    scheduleCollapse();
  };
  if (document.readyState === 'complete') lazyStart(); else window.addEventListener('load', lazyStart);
})();
// ---------- Frontbuch v15: Merkliste, Verlauf, Suche, Lesefortschritt ----------
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => escapeHtml(String(s == null ? '' : s));
  const hooks = window.fbLangHooks;

  // ======================================================== Speicher
  const FK = 'fbFavs', RK = 'fbRecent';
  const get = k => { try { const x = JSON.parse(localStorage.getItem(k) || '[]'); return Array.isArray(x) ? x.filter(e => e && typeof e.u === 'string' && e.u.startsWith('/')) : []; } catch (e) { return []; } };
  const put = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} };
  const FBP = window.FBP = {
    favs: () => get(FK),
    recent: () => get(RK),
    isFav: u => get(FK).some(e => e.u === u),
    toggleFav(e) {
      let L = get(FK); const on = L.some(x => x.u === e.u);
      L = on ? L.filter(x => x.u !== e.u) : [{ u: e.u, t: e.t, k: e.k, i: e.i || '', tk: e.tk || '' }].concat(L).slice(0, 60);
      put(FK, L); renderAll(); return !on;
    },
    track(e) {
      if (!e || !e.u) return;
      const L = get(RK).filter(x => x.u !== e.u);
      L.unshift({ u: e.u, t: e.t, k: e.k, i: e.i || '', tk: e.tk || '', ts: Date.now() });
      put(RK, L.slice(0, 12)); renderAll();
    },
    clearRecent() { put(RK, []); renderAll(); }
  };
  const label = e => e.tk ? t(e.tk) : e.t;
  const isImg = s => typeof s === 'string' && s.startsWith('/assets/');
  function thumb(e, sz) {
    if (isImg(e.i)) return `<img class="fbt-pic${e.k === 'iw' ? ' wide' : ''}" src="${esc(e.i)}" width="${e.k === 'iw' ? sz * 2 : sz}" height="${sz}" loading="lazy" decoding="async" alt="">`;
    return `<span class="fb-ic" aria-hidden="true">${esc(e.i || '•')}</span>`;
  }
  const KIND = { g: 'navGuides', t: 'navTools', i: 'tDbT', iw: 'tDbT', l: 'navGlossary', f: 'navFaq' };
  function renderList(el) {
    const kind = el.dataset.fbList, max = +el.dataset.max || 60;
    const L = (kind === 'favs' ? FBP.favs() : FBP.recent()).filter(e => e.u !== fbPath() || kind === 'favs').slice(0, max);
    const sec = el.closest('[data-fb-sec]');
    if (sec) sec.hidden = !L.length;
    if (!L.length) { el.innerHTML = el.dataset.empty ? `<li class="fb-empty">${esc(t(el.dataset.empty))}</li>` : ''; return; }
    el.innerHTML = L.map(e => `<li><a class="fb-ritem" href="${esc(fbHref(e.u))}">${thumb(e, 28)}<span><b>${esc(label(e))}</b><small>${esc(t(KIND[e.k] || 'navHome'))}</small></span></a>${kind === 'favs' ? `<button type="button" class="fb-unfav" data-unfav="${esc(e.u)}" aria-label="${esc(t('favRemove'))}: ${esc(label(e))}">✕</button>` : ''}</li>`).join('');
  }
  function renderFavBtns() {
    $$('.fb-fav').forEach(b => {
      const on = FBP.isFav(b.dataset.fu);
      b.setAttribute('aria-pressed', String(on));
      const s = b.querySelector('span'); if (s) s.textContent = t(on ? 'faved' : 'fav');
    });
  }
  function renderAll() { $$('[data-fb-list]').forEach(renderList); renderFavBtns(); }
  window.fbRenderPersonal = renderAll;
  document.addEventListener('click', e => {
    const b = e.target.closest('.fb-fav');
    if (b) { FBP.toggleFav({ u: b.dataset.fu, t: b.dataset.ft, k: b.dataset.fk, i: b.dataset.fi, tk: b.dataset.ftk }); return; }
    const u = e.target.closest('[data-unfav]');
    if (u) { const L = FBP.favs().filter(x => x.u === u.dataset.unfav)[0]; if (L) FBP.toggleFav(L); return; }
    const sh = e.target.closest('.fb-sharebtn');
    if (sh) { const h = $('#shareHeadBtn'); if (h) h.click(); }
  });
  const rc = $('#recentClear'); if (rc) rc.addEventListener('click', () => FBP.clearRecent());
  // Seitenaufruf merken
  try { const tr = document.body.dataset.track; if (tr) { const e = JSON.parse(tr); e.u = fbPath(); FBP.track(e); } } catch (e) {}
  hooks.push(renderAll);
  renderAll();
  window.addEventListener('storage', e => { if (e.key === FK || e.key === RK) renderAll(); });

  // ======================================================== Such-Index
  let IDX = null, loading = null;
  const norm = s => String(s || '').toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  function loadIndex() {
    if (IDX) return Promise.resolve(IDX);
    if (loading) return loading;
    loading = new Promise(res => {
      const done = () => { IDX = (window.FB_SEARCH || []).map(e => ({ e, t: ' ' + norm(e.t), x: norm(e.x), s: norm(e.s) })); res(IDX); };
      if (window.FB_SEARCH) return done();
      const sc = document.createElement('script');
      sc.src = '/assets/search-data' + (window.fbLP ? '-' + window.fbLP.slice(1) : '') + '.js?v=' + '33';
      sc.onload = done; sc.onerror = () => { loading = null; res([]); };
      document.head.appendChild(sc);
    });
    return loading;
  }
  const KW = { t: 3, g: 2, i: 2, l: 1, f: 0 }, EX = { t: 15, g: 8, i: 8, l: 4, f: 0 };
  function search(q, kind) {
    const toks = norm(q).split(' ').filter(Boolean);
    if (!toks.length || !IDX) return [];
    const out = [];
    for (const r of IDX) {
      if (kind && kind !== 'all' && r.e.k !== kind) continue;
      const tl = r.e.tk ? ' ' + norm(t(r.e.tk)) + r.t : r.t;
      let sc = 0, ok = true;
      for (const tk of toks) {
        let s = 0;
        if (tl.startsWith(' ' + tk)) s += 10; else if (tl.includes(' ' + tk)) s += 7; else if (tk.length > 2 && tl.includes(tk)) s += 4;
        if ((' ' + r.x).includes(' ' + tk)) s += 2;
        if ((' ' + r.s).includes(' ' + tk)) s += 1;
        if (!s) { ok = false; break; }
        sc += s;
      }
      if (!ok) continue;
      if (tl.trim() === toks.join(' ')) sc += EX[r.e.k];
      out.push({ e: r.e, sc: sc + KW[r.e.k] });
    }
    return out.sort((a, b) => b.sc - a.sc);
  }
  function hl(text, q) {
    const toks = norm(q).split(' ').filter(x => x.length > 1).sort((a, b) => b.length - a.length);
    let h = esc(text);
    toks.forEach(tk => { h = h.replace(new RegExp('(^|[^<&;\\w/])(' + tk.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i'), '$1<mark>$2</mark>'); });
    return h;
  }
  const GROUPS = [['t', 'navTools', 4], ['g', 'navGuides', 6], ['i', 'tDbT', 8], ['l', 'navGlossary', 4], ['f', 'navFaq', 4]];
  function optionHtml(e, q, n, pre) {
    const img = e.m ? `<img class="fbt-pic${e.w ? ' wide' : ''}" src="${esc(e.m)}" width="${e.w ? 64 : 32}" height="32" loading="lazy" decoding="async" alt="">` : `<span class="fb-ic" aria-hidden="true">${esc(e.i || '•')}</span>`;
    const title = e.tk ? t(e.tk) : e.t;
    return `<a class="fb-sopt" role="option" id="${pre}-${n}" href="${esc(fbHref(e.u))}" aria-selected="false" tabindex="-1">${img}<span class="fb-sopt-txt"><b>${hl(title, q)}</b>${e.s ? `<small>${esc(e.s)}</small>` : ''}</span></a>`;
  }
  function resultsHtml(q, kind, pre, compact) {
    if (!q.trim()) return '';
    const res = search(q, kind);
    if (!res.length) return `<p class="fb-snone">${esc(t('sNone'))}</p>`;
    let n = 0, h = '';
    if (compact) { const O = 'tgilf'; return res.slice(0, 7).sort((a, b) => O.indexOf(a.e.k) - O.indexOf(b.e.k)).map(r => optionHtml(r.e, q, n++, pre)).join(''); }
    if (kind && kind !== 'all') return res.slice(0, 40).map(r => optionHtml(r.e, q, n++, pre)).join('');
    const top = k => Math.max(0, ...res.filter(r => r.e.k === k).map(r => r.sc));
    GROUPS.slice().sort((a, b) => top(b[0]) - top(a[0])).forEach(([k, key, max]) => {
      const L = res.filter(r => r.e.k === k).slice(0, max);
      if (L.length) h += `<div class="fb-sgrp" role="presentation">${esc(t(key))}</div>` + L.map(r => optionHtml(r.e, q, n++, pre)).join('');
    });
    return h;
  }
  // Tastatur-Navigation für eine Combobox
  function listNav(input, list) {
    const opts = () => $$('[role=option]', list);
    let idx = -1;
    function setIdx(i) {
      const O = opts(); if (!O.length) { idx = -1; input.removeAttribute('aria-activedescendant'); return; }
      idx = (i + O.length) % O.length;
      O.forEach((o, j) => o.setAttribute('aria-selected', String(j === idx)));
      input.setAttribute('aria-activedescendant', O[idx].id);
      O[idx].scrollIntoView({ block: 'nearest' });
    }
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(idx + 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(idx - 1); }
      else if (e.key === 'Enter') {
        const O = opts();
        const o = O[idx >= 0 ? idx : 0];
        if (o && input.value.trim()) { e.preventDefault(); location.href = o.getAttribute('href'); }
      }
    });
    return { reset() { idx = -1; input.removeAttribute('aria-activedescendant'); } };
  }

  // ======================================================== Such-Dialog
  const dlg = $('#searchDlg'), inp = $('#searchInput'), list = $('#searchList');
  if (dlg) {
    let kind = 'all', lastFocus = null;
    const nav = listNav(inp, list);
    const BG = ['siteHeader', 'mainContent', 'siteFooter', 'tabBar', 'musicBar', 'musicFab'];
    function quick() {
      const R = FBP.recent().slice(0, 6);
      const tools = (IDX || []).filter(r => r.e.k === 't').slice(0, 7);
      let n = 0;
      return (R.length ? `<div class="fb-sgrp" role="presentation">${esc(t('sRecent'))}</div>` + R.map(e => `<a class="fb-sopt" role="option" id="so-${n++}" href="${esc(fbHref(e.u))}" aria-selected="false" tabindex="-1">${thumb(e, 32)}<span class="fb-sopt-txt"><b>${esc(label(e))}</b><small>${esc(t(KIND[e.k] || 'navHome'))}</small></span></a>`).join('') : '') +
        `<div class="fb-sgrp" role="presentation">${esc(t('sQuick'))}</div>` + tools.map(r => optionHtml(r.e, '', n++, 'so')).join('');
    }
    function render() {
      nav.reset();
      const q = inp.value;
      list.innerHTML = q.trim() ? resultsHtml(q, kind, 'so') : quick();
    }
    function open(prefill) {
      if (!dlg.hidden) return;
      if (window.fcCloseMenu) window.fcCloseMenu(false);
      lastFocus = document.activeElement;
      dlg.hidden = false; document.body.classList.add('search-open');
      BG.forEach(id => { const el = document.getElementById(id); if (el) el.inert = true; });
      if (typeof prefill === 'string') inp.value = prefill;
      render();
      loadIndex().then(render);
      setTimeout(() => { inp.focus(); inp.select(); }, 20);
    }
    function close() {
      if (dlg.hidden) return;
      dlg.hidden = true; document.body.classList.remove('search-open');
      BG.forEach(id => { const el = document.getElementById(id); if (el) el.inert = false; });
      if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
    }
    window.fbSearchOpen = open; window.fbSearchClose = close;
    window.fbSearchQuery = (q, k) => loadIndex().then(() => search(q, k).map(r => r.e));
    $$('#searchBtn, #tabSearch').forEach(b => b && b.addEventListener('click', () => open()));
    $('#searchClose').addEventListener('click', close);
    $('#searchBack').addEventListener('click', close);
    inp.addEventListener('input', render);
    $('#searchFilters').addEventListener('click', e => {
      const c = e.target.closest('[data-sk]'); if (!c) return;
      kind = c.dataset.sk;
      $$('#searchFilters [data-sk]').forEach(x => x.setAttribute('aria-pressed', String(x === c)));
      render(); inp.focus();
    });
    dlg.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'Tab') {
        const f = $$('input, button, a[href]', dlg).filter(x => x.offsetParent !== null && x.tabIndex !== -1);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    list.addEventListener('click', e => { if (e.target.closest('a')) close(); });
    document.addEventListener('keydown', e => {
      const tg = e.target, typing = tg && (tg.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName));
      if ((e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        if (!dlg.hidden) return;
        e.preventDefault(); open();
      }
    });
    hooks.push(() => { if (!dlg.hidden) render(); });
  }

  // ======================================================== Startseiten-Suche (Vorschläge)
  const hIn = $('#fbHomeSearch'), hRes = $('#fbHomeResults');
  if (hIn && hRes) {
    const nav = listNav(hIn, hRes);
    function render() {
      nav.reset();
      const q = hIn.value;
      if (!q.trim()) { hRes.hidden = true; hIn.setAttribute('aria-expanded', 'false'); hRes.innerHTML = ''; return; }
      hRes.innerHTML = resultsHtml(q, 'all', 'ho', true) + `<button type="button" class="fb-smore" id="homeMore">${esc(t('sAllResults'))} ${svgArrow}</button>`;
      hRes.hidden = false; hIn.setAttribute('aria-expanded', 'true');
    }
    const svgArrow = '<svg class="ico sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
    hIn.addEventListener('focus', () => loadIndex().then(() => { if (hIn.value.trim()) render(); }), { once: false });
    hIn.addEventListener('input', () => loadIndex().then(render));
    hIn.addEventListener('keydown', e => { if (e.key === 'Escape') { hIn.value = ''; render(); } });
    hRes.addEventListener('click', e => { if (e.target.closest('#homeMore')) { const q = hIn.value; hIn.value = ''; render(); window.fbSearchOpen && window.fbSearchOpen(q); } });
    $('#homeSearchForm').addEventListener('submit', e => { e.preventDefault(); const q = hIn.value; if (window.fbSearchOpen) { hIn.value = ''; render(); window.fbSearchOpen(q); } });
    document.addEventListener('pointerdown', e => { if (!e.target.closest('#homeSearchForm')) { hRes.hidden = true; hIn.setAttribute('aria-expanded', 'false'); } });
    hooks.push(() => { if (!hRes.hidden) render(); });
    if ('requestIdleCallback' in window) requestIdleCallback(() => loadIndex()); else setTimeout(loadIndex, 1500);
  }

  // ======================================================== Guide: Lesefortschritt + Inhaltsverzeichnis
  const art = $('.guide .fb-article');
  if (art) {
    const bar = document.createElement('div'); bar.className = 'fb-progress'; bar.setAttribute('aria-hidden', 'true'); document.body.appendChild(bar);
    const heads = $$('h2[id]', art), tocLinks = $$('.fb-toc a, .fb-toc-m a');
    let ticking = false;
    function upd() {
      ticking = false;
      const r = art.getBoundingClientRect(), h = r.height - innerHeight * 0.6;
      bar.style.transform = `scaleX(${Math.max(0, Math.min(1, -r.top / Math.max(1, h)))})`;
      let cur = '';
      for (const hd of heads) { if (hd.getBoundingClientRect().top < 120) cur = hd.id; else break; }
      tocLinks.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + cur));
    }
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    upd();
    $$('.fb-toc-m a').forEach(a => a.addEventListener('click', () => { const d = a.closest('details'); if (d) d.open = false; }));
  }

  // ======================================================== Sprungziele (FAQ/Glossar) öffnen + markieren
  function openHash() {
    if (!location.hash) return;
    let el = null; try { el = document.getElementById(decodeURIComponent(location.hash.slice(1))); } catch (e) {}
    if (!el) return;
    if (el.tagName === 'DETAILS') el.open = true;
    el.classList.remove('fb-flash'); void el.offsetWidth; el.classList.add('fb-flash');
  }
  addEventListener('hashchange', openHash); openHash();
})();


// ---------- Startseite: „Weiter zum Rechner“ ----------
(function () {
  const box = document.getElementById('fbContinue');
  if (!box) return;
  let n = 0;
  try { const h = JSON.parse(localStorage.getItem('wardogsHistory') || '[]'); n = Array.isArray(h) ? h.length : 0; } catch (e) {}
  if (n > 0) {
    box.hidden = false;
    const d = box.querySelector('[data-i18n="homeContinueD"]');
    if (d) d.dataset.i18nN = String(n);
  }
})();

// ---------- E-Mail leicht verschleiert (per JS zusammengesetzt) ----------
document.querySelectorAll('.fb-mail').forEach(el => {
  const addr = el.dataset.u.split('').reverse().join('') + '@' + el.dataset.d.split('').reverse().join('');
  const a = document.createElement('a');
  a.href = 'mailto:' + addr; a.textContent = addr;
  el.replaceChildren(a);
});

// ---------- Datenschutz: Spotify-Einwilligung widerrufen ----------
(function () {
  const btn = document.getElementById('consentRevoke');
  const st = document.getElementById('consentState');
  if (!btn || !st) return;
  let revoked = false;
  function render() {
    const on = window.fbMusicConsent && window.fbMusicConsent.has();
    st.textContent = revoked ? t('consentRevoked') : t(on ? 'consentOn' : 'consentOff');
    btn.disabled = !on;
  }
  btn.addEventListener('click', () => {
    window.fbMusicConsent.revoke();
    revoked = true;
    render();
    // Player-iframe entfernen: Seite neu laden
    setTimeout(() => location.reload(), 900);
  });
  window.fbLangHooks.push(render);
})();

// ---------- Menü (Drawer): aufklappbare Gruppen ----------
function fbDrawerGroup(btn, open) {
  btn.setAttribute('aria-expanded', String(open));
  document.getElementById(btn.getAttribute('aria-controls')).hidden = !open;
}
document.querySelectorAll('.drawer-grp-btn').forEach(b => b.addEventListener('click', () => fbDrawerGroup(b, b.getAttribute('aria-expanded') !== 'true')));

// ---------- Desktop-Navigation: Gruppen (Tools / Mehr) ----------
(function () {
  const groups = [...document.querySelectorAll('.nav-grp')];
  if (!groups.length) return;
  const set = (g, open) => { g.querySelector('.nav-grp-btn').setAttribute('aria-expanded', String(open)); g.querySelector('.nav-pop').hidden = !open; };
  const closeAll = except => groups.forEach(g => g !== except && set(g, false));
  groups.forEach(g => {
    const b = g.querySelector('.nav-grp-btn');
    b.addEventListener('click', e => { e.stopPropagation(); const open = b.getAttribute('aria-expanded') !== 'true'; closeAll(g); set(g, open); });
    g.addEventListener('keydown', e => { if (e.key === 'Escape' && b.getAttribute('aria-expanded') === 'true') { e.preventDefault(); set(g, false); b.focus(); } });
  });
  document.addEventListener('click', e => { if (!e.target.closest('.nav-grp')) closeAll(); });
  document.addEventListener('focusin', e => { if (!e.target.closest || !e.target.closest('.nav-grp')) closeAll(); });
  const ni = document.getElementById('navInstall'), ns = document.getElementById('navShare');
  if (ni) ni.addEventListener('click', () => {
    closeAll();
    const mb = document.getElementById('menuBtn'), mi = document.getElementById('miInstall');
    if (!document.body.classList.contains('menu-open')) mb.click();
    const gm = document.getElementById('dgb-more'); if (gm) fbDrawerGroup(gm, true);
    if (mi && mi.getAttribute('aria-expanded') !== 'true') mi.click();
  });
  if (ns) ns.addEventListener('click', () => { closeAll(); document.getElementById('shareHeadBtn').click(); });
})();

applyLang();
