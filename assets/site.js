
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

const SLOT_I18N = {
  de: {
    slot: 'Slotmaschine',
    slotClose: 'Slotmaschine schließen',
    slotPlayMoney: 'Spielgeld – kein echtes Geld',
    slotBalance: 'Guthaben',
    slotBet: 'Einsatz',
    slotSpin: 'Drehen',
    slotSpinning: 'Dreht …',
    slotRestart: 'Neustart mit $100',
    slotSpins: 'Drehungen',
    slotBest: 'Größter Gewinn',
    slotSound: 'Ton',
    slotPaytable: 'Gewinntabelle',
    slotThree: '3 gleiche',
    slotTwo: '2 gleiche (beliebige Position)',
    slotRtp: 'Auszahlungsquote (RTP) ≈ 95 %: Auf lange Sicht verliert man – wie bei jedem Automaten. Zufall per crypto.getRandomValues.',
    slotDisclaimer: 'Nur zum Spaß: Spielgeld ohne Wert. Keine Einzahlung, keine Auszahlung, keine echten Gewinne.',
    slotReady: 'Einsatz wählen und „Drehen“ drücken.',
    slotWin3: '{syms} – Drei gleiche! +{amount} (×{mult})',
    slotWin2: '{syms} – Zwei gleiche: +{amount} (×{mult})',
    slotLose: '{syms} – kein Gewinn (−{bet})',
    slotBroke: 'Guthaben aufgebraucht – Neustart mit $100?',
    slotRestarted: 'Neues Spielgeld: $100. Viel Spaß!',
    symCherry: 'Kirsche', symStar: 'Stern', symTarget: 'Zielscheibe', symBomb: 'Bombe', symSkull: 'Totenkopf', symSeven: 'Sieben'
  },
  en: {
    slot: 'Slot machine',
    slotClose: 'Close slot machine',
    slotPlayMoney: 'Play money – not real money',
    slotBalance: 'Balance',
    slotBet: 'Bet',
    slotSpin: 'Spin',
    slotSpinning: 'Spinning …',
    slotRestart: 'Restart with $100',
    slotSpins: 'Spins',
    slotBest: 'Biggest win',
    slotSound: 'Sound',
    slotPaytable: 'Paytable',
    slotThree: '3 of a kind',
    slotTwo: '2 of a kind (any position)',
    slotRtp: 'Return to player (RTP) ≈ 95%: in the long run you lose – like any slot machine. Randomness via crypto.getRandomValues.',
    slotDisclaimer: 'Just for fun: play money with no value. No deposits, no payouts, no real winnings.',
    slotReady: 'Pick your bet and press “Spin”.',
    slotWin3: '{syms} – Three of a kind! +{amount} (×{mult})',
    slotWin2: '{syms} – Two of a kind: +{amount} (×{mult})',
    slotLose: '{syms} – no win (−{bet})',
    slotBroke: 'Out of play money – restart with $100?',
    slotRestarted: 'Fresh play money: $100. Have fun!',
    symCherry: 'Cherry', symStar: 'Star', symTarget: 'Target', symBomb: 'Bomb', symSkull: 'Skull', symSeven: 'Seven'
  },
  es: {
    slot: 'Tragaperras',
    slotClose: 'Cerrar tragaperras',
    slotPlayMoney: 'Dinero de juego: no es dinero real',
    slotBalance: 'Saldo',
    slotBet: 'Apuesta',
    slotSpin: 'Girar',
    slotSpinning: 'Girando…',
    slotRestart: 'Reiniciar con $100',
    slotSpins: 'Tiradas',
    slotBest: 'Mayor premio',
    slotSound: 'Sonido',
    slotPaytable: 'Tabla de premios',
    slotThree: '3 iguales',
    slotTwo: '2 iguales (cualquier posición)',
    slotRtp: 'Retorno al jugador (RTP) ≈ 95 %: a la larga se pierde, como en cualquier tragaperras. Azar mediante crypto.getRandomValues.',
    slotDisclaimer: 'Solo por diversión: dinero de juego sin valor. Sin depósitos, sin pagos, sin premios reales.',
    slotReady: 'Elige tu apuesta y pulsa «Girar».',
    slotWin3: '{syms}: ¡tres iguales! +{amount} (×{mult})',
    slotWin2: '{syms}: dos iguales, +{amount} (×{mult})',
    slotLose: '{syms}: sin premio (−{bet})',
    slotBroke: 'Te has quedado sin dinero de juego. ¿Reiniciar con $100?',
    slotRestarted: 'Nuevo dinero de juego: $100. ¡Diviértete!',
    symCherry: 'Cereza', symStar: 'Estrella', symTarget: 'Diana', symBomb: 'Bomba', symSkull: 'Calavera', symSeven: 'Siete'
  },
  fr: {
    slot: 'Machine à sous',
    slotClose: 'Fermer la machine à sous',
    slotPlayMoney: 'Argent fictif – pas d\u2019argent réel',
    slotBalance: 'Solde',
    slotBet: 'Mise',
    slotSpin: 'Lancer',
    slotSpinning: 'Ça tourne…',
    slotRestart: 'Recommencer avec $100',
    slotSpins: 'Tours',
    slotBest: 'Plus gros gain',
    slotSound: 'Son',
    slotPaytable: 'Table des gains',
    slotThree: '3 identiques',
    slotTwo: '2 identiques (n\u2019importe où)',
    slotRtp: 'Taux de retour (RTP) ≈ 95\u00a0% : à long terme, on perd – comme sur toute machine à sous. Hasard via crypto.getRandomValues.',
    slotDisclaimer: 'Juste pour le plaisir : argent fictif sans valeur. Pas de dépôt, pas de retrait, aucun gain réel.',
    slotReady: 'Choisissez votre mise et appuyez sur «\u00a0Lancer\u00a0».',
    slotWin3: '{syms} – Trois identiques\u00a0! +{amount} (×{mult})',
    slotWin2: '{syms} – Deux identiques\u00a0: +{amount} (×{mult})',
    slotLose: '{syms} – pas de gain (−{bet})',
    slotBroke: 'Plus d\u2019argent fictif – recommencer avec $100\u00a0?',
    slotRestarted: 'Nouvel argent fictif\u00a0: $100. Amusez-vous bien\u00a0!',
    symCherry: 'Cerise', symStar: 'Étoile', symTarget: 'Cible', symBomb: 'Bombe', symSkull: 'Crâne', symSeven: 'Sept'
  }
};
Object.keys(SLOT_I18N).forEach(l => Object.assign(I18N[l], SLOT_I18N[l]));

const LANGS = {
  de: { name: 'Deutsch', flag: 'flag-de' },
  en: { name: 'English', flag: 'flag-gb' },
  es: { name: 'Español', flag: 'flag-es' },
  fr: { name: 'Français', flag: 'flag-fr' }
};
const DE_DIRS = I18N.de.dirs;
const LEGACY_SHOT = /^(?:Schuss|Shot|Disparo|Tir) (\d+)$/;

function detectLang() {
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
    navHome: 'Start', navGuides: 'Guides', navCalc: 'Mörser-Rechner', navSlots: 'Slotmaschine',
    navGlossary: 'Glossar', navFaq: 'FAQ', navNews: 'Was ist neu', navImpressum: 'Impressum', navPrivacy: 'Datenschutz',
    navMore: 'Mehr', navLegal: 'Rechtliches',
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
    tileSlotsT: 'Slotmaschine', tileSlotsD: 'Zum Spaß – nur Spielgeld',
    homeContinue: 'Weiter zum Rechner', homeContinueD: 'Dein Schussverlauf ist gespeichert ({n}).',
    homeLatest: 'Neueste Guides', homePopular: 'Beliebte Themen', homeAllGuides: 'Alle Guides →', homeExtras: 'Nachschlagen',
    guidesTitle: 'Alle Guides', guidesLead: 'Filtere nach Kategorie oder suche nach Stichworten.',
    crumbHome: 'Start', crumbLabel: 'Brotkrumen-Navigation',
    calcGuideLink: 'Wie funktioniert der Rechner? → Guide „Mörser L81 & SPH-2“',
    titleHome: 'Frontbuch – Guides & Tools für WARDOGS', titleCalc: 'Mörser-Rechner (L81 & SPH-2) · Frontbuch',
    titleSlots: 'Slotmaschine (Spielgeld) · Frontbuch', titleGuides: 'Alle Guides · Frontbuch',
    slotPageLead: 'Ein kleines Spiel zum Zeitvertreib. Es geht nur um Spielgeld, das in deinem Browser gespeichert wird.',
    nfTitle: 'Seite nicht gefunden', nfText: 'Diese Seite gibt es nicht (mehr). Vielleicht hilft die Suche?', nfBack: 'Zur Startseite',
    offTitle: 'Du bist offline', offText: 'Diese Seite ist noch nicht gespeichert. Seiten, die du schon besucht hast, sowie Rechner und Slotmaschine funktionieren auch offline.',
    skip: 'Zum Inhalt springen',
    installedText: 'Du nutzt Frontbuch gerade als App.',
    installPromptText: 'Installiere Frontbuch als App – mit eigenem Icon. Rechner und besuchte Seiten funktionieren auch offline.',
    shareText: 'Frontbuch – Guides & Tools für WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> ist eine <strong>inoffizielle Fan-Seite</strong> zu WARDOGS – nicht verbunden mit BULKHEAD oder Team17.</p>
      <ul>
        <li>Die Guides sind eigene Texte. Fakten stammen aus öffentlichen Quellen, die unter jedem Guide verlinkt sind.</li>
        <li>Die Elevationswerte im Rechner stammen aus Community-Tabellen.</li>
        <li>Alle Angaben ohne Gewähr.</li>
        <li>Einstellungen, Schussverlauf und Spielgeld werden nur lokal in deinem Browser gespeichert.</li>
      </ul>
      <p><a href="/impressum/">Impressum</a> · <a href="/datenschutz/">Datenschutz</a></p>`
  },
  en: {
    musicConsentText: '♪ Music by cloudybeatz – playing it sends data to Spotify.', musicConsentBtn: 'Load player', musicConsentPrivacy: 'Privacy',
    consentOn: 'Status: Spotify player allowed (consent saved).', consentOff: 'Status: Spotify player not loaded (no consent).', consentRevokeBtn: 'Revoke consent', consentRevoked: 'Consent revoked – the player will no longer be loaded.',
    siteSub: 'Guides & tools for WARDOGS',
    navHome: 'Home', navGuides: 'Guides', navCalc: 'Mortar calculator', navSlots: 'Slot machine',
    navGlossary: 'Glossary', navFaq: 'FAQ', navNews: 'What\u2019s new', navImpressum: 'Legal notice', navPrivacy: 'Privacy',
    navMore: 'More', navLegal: 'Legal',
    fbFooter: 'Unofficial fan site, not affiliated with BULKHEAD or Team17.',
    fbFooterSmall: 'WARDOGS is a trademark of its respective owners. All information without guarantee.',
    footer: 'Unofficial fan site',
    fbDeNote: 'Guides are currently available in German only.',
    searchLabel: 'Search guides', searchPh: 'e.g. Mörser, Geld, FOB …', searchNone: 'No guides found.',
    searchCount: '{n} guides', searchAll: 'All', filterLabel: 'Filter by category', searchClear: 'Clear search',
    homeKicker: 'Unofficial fan site',
    homeLead: 'Guides, mortar calculator and tools for WARDOGS.',
    tileGuidesT: 'Guides', tileGuidesD: '{n} guides from basics to artillery',
    tileCalcT: 'Mortar calculator', tileCalcD: 'Distance, bearing and elevation for L81 & SPH-2',
    tileSlotsT: 'Slot machine', tileSlotsD: 'Just for fun – play money only',
    homeContinue: 'Back to the calculator', homeContinueD: 'Your shot history is saved ({n}).',
    homeLatest: 'Latest guides', homePopular: 'Popular topics', homeAllGuides: 'All guides →', homeExtras: 'Reference',
    guidesTitle: 'All guides', guidesLead: 'Filter by category or search by keyword.',
    crumbHome: 'Home', crumbLabel: 'Breadcrumb',
    calcGuideLink: 'How does it work? → Guide \u201cMörser L81 & SPH-2\u201d (German)',
    titleHome: 'Frontbuch – Guides & tools for WARDOGS', titleCalc: 'Mortar calculator (L81 & SPH-2) · Frontbuch',
    titleSlots: 'Slot machine (play money) · Frontbuch', titleGuides: 'All guides · Frontbuch',
    slotPageLead: 'A little game to pass the time. Play money only, stored in your browser.',
    nfTitle: 'Page not found', nfText: 'This page does not exist (any more). Maybe the search helps?', nfBack: 'Back to home',
    offTitle: 'You are offline', offText: 'This page has not been saved yet. Pages you already visited, the calculator and the slot machine also work offline.',
    skip: 'Skip to content',
    installedText: 'You are currently using Frontbuch as an app.',
    installPromptText: 'Install Frontbuch as an app – with its own icon. The calculator and visited pages also work offline.',
    shareText: 'Frontbuch – guides & tools for WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> is an <strong>unofficial fan site</strong> about WARDOGS – not affiliated with BULKHEAD or Team17.</p>
      <ul>
        <li>The guides are original texts (currently German only). Facts come from public sources linked below each guide.</li>
        <li>The calculator\u2019s elevation values come from community tables.</li>
        <li>All information without guarantee.</li>
        <li>Settings, shot history and play money are stored only locally in your browser.</li>
      </ul>
      <p><a href="/impressum/">Legal notice</a> · <a href="/datenschutz/">Privacy</a> (German)</p>`
  },
  es: {
    musicConsentText: '♪ Música de cloudybeatz – al reproducir se envían datos a Spotify.', musicConsentBtn: 'Cargar reproductor', musicConsentPrivacy: 'Privacidad',
    consentOn: 'Estado: reproductor de Spotify permitido (consentimiento guardado).', consentOff: 'Estado: reproductor de Spotify no cargado (sin consentimiento).', consentRevokeBtn: 'Revocar consentimiento', consentRevoked: 'Consentimiento revocado: el reproductor ya no se cargará.',
    siteSub: 'Guías y herramientas para WARDOGS',
    navHome: 'Inicio', navGuides: 'Guías', navCalc: 'Calculadora de mortero', navSlots: 'Tragaperras',
    navGlossary: 'Glosario', navFaq: 'FAQ', navNews: 'Novedades', navImpressum: 'Aviso legal', navPrivacy: 'Privacidad',
    navMore: 'Más', navLegal: 'Legal',
    fbFooter: 'Sitio de fans no oficial, sin relación con BULKHEAD ni Team17.',
    fbFooterSmall: 'WARDOGS es una marca de sus respectivos propietarios. Información sin garantía.',
    footer: 'Sitio de fans no oficial',
    fbDeNote: 'Por ahora, las guías solo están disponibles en alemán.',
    searchLabel: 'Buscar guías', searchPh: 'p. ej. Mörser, Geld, FOB …', searchNone: 'No se encontraron guías.',
    searchCount: '{n} guías', searchAll: 'Todas', filterLabel: 'Filtrar por categoría', searchClear: 'Borrar búsqueda',
    homeKicker: 'Sitio de fans no oficial',
    homeLead: 'Guías, calculadora de mortero y herramientas para WARDOGS.',
    tileGuidesT: 'Guías', tileGuidesD: '{n} guías, de lo básico a la artillería',
    tileCalcT: 'Calculadora de mortero', tileCalcD: 'Distancia, rumbo y elevación para L81 y SPH-2',
    tileSlotsT: 'Tragaperras', tileSlotsD: 'Por diversión: solo dinero de juego',
    homeContinue: 'Volver a la calculadora', homeContinueD: 'Tu historial de disparos está guardado ({n}).',
    homeLatest: 'Guías recientes', homePopular: 'Temas populares', homeAllGuides: 'Todas las guías →', homeExtras: 'Consulta',
    guidesTitle: 'Todas las guías', guidesLead: 'Filtra por categoría o busca por palabra clave.',
    crumbHome: 'Inicio', crumbLabel: 'Ruta de navegación',
    calcGuideLink: '¿Cómo funciona? → Guía «Mörser L81 & SPH-2» (en alemán)',
    titleHome: 'Frontbuch – Guías y herramientas para WARDOGS', titleCalc: 'Calculadora de mortero (L81 y SPH-2) · Frontbuch',
    titleSlots: 'Tragaperras (dinero de juego) · Frontbuch', titleGuides: 'Todas las guías · Frontbuch',
    slotPageLead: 'Un pequeño juego para pasar el rato. Solo dinero de juego, guardado en tu navegador.',
    nfTitle: 'Página no encontrada', nfText: 'Esta página no existe (o ya no existe). ¿Quizás ayude la búsqueda?', nfBack: 'Ir al inicio',
    offTitle: 'Sin conexión', offText: 'Esta página aún no se ha guardado. Las páginas ya visitadas, la calculadora y la tragaperras también funcionan sin conexión.',
    skip: 'Saltar al contenido',
    installedText: 'Estás usando Frontbuch como app.',
    installPromptText: 'Instala Frontbuch como app, con su propio icono. La calculadora y las páginas visitadas funcionan sin conexión.',
    shareText: 'Frontbuch – guías y herramientas para WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> es un <strong>sitio de fans no oficial</strong> sobre WARDOGS, sin relación con BULKHEAD ni Team17.</p>
      <ul>
        <li>Las guías son textos propios (por ahora solo en alemán). Los datos proceden de fuentes públicas enlazadas en cada guía.</li>
        <li>Los valores de elevación de la calculadora proceden de tablas de la comunidad.</li>
        <li>Información sin garantía.</li>
        <li>Los ajustes, el historial y el dinero de juego solo se guardan localmente en tu navegador.</li>
      </ul>
      <p><a href="/impressum/">Aviso legal</a> · <a href="/datenschutz/">Privacidad</a> (en alemán)</p>`
  },
  fr: {
    musicConsentText: '♪ Musique de cloudybeatz – la lecture transmet des données à Spotify.', musicConsentBtn: 'Charger le lecteur', musicConsentPrivacy: 'Confidentialité',
    consentOn: 'Statut : lecteur Spotify autorisé (consentement enregistré).', consentOff: 'Statut : lecteur Spotify non chargé (pas de consentement).', consentRevokeBtn: 'Retirer le consentement', consentRevoked: 'Consentement retiré – le lecteur ne sera plus chargé.',
    siteSub: 'Guides et outils pour WARDOGS',
    navHome: 'Accueil', navGuides: 'Guides', navCalc: 'Calculateur de mortier', navSlots: 'Machine à sous',
    navGlossary: 'Glossaire', navFaq: 'FAQ', navNews: 'Nouveautés', navImpressum: 'Mentions légales', navPrivacy: 'Confidentialité',
    navMore: 'Plus', navLegal: 'Légal',
    fbFooter: 'Site de fans non officiel, sans lien avec BULKHEAD ou Team17.',
    fbFooterSmall: 'WARDOGS est une marque de ses détenteurs respectifs. Informations sans garantie.',
    footer: 'Site de fans non officiel',
    fbDeNote: 'Les guides sont pour l\u2019instant uniquement en allemand.',
    searchLabel: 'Rechercher des guides', searchPh: 'p. ex. Mörser, Geld, FOB …', searchNone: 'Aucun guide trouvé.',
    searchCount: '{n} guides', searchAll: 'Tous', filterLabel: 'Filtrer par catégorie', searchClear: 'Effacer la recherche',
    homeKicker: 'Site de fans non officiel',
    homeLead: 'Guides, calculateur de mortier et outils pour WARDOGS.',
    tileGuidesT: 'Guides', tileGuidesD: '{n} guides, des bases à l\u2019artillerie',
    tileCalcT: 'Calculateur de mortier', tileCalcD: 'Distance, gisement et élévation pour L81 et SPH-2',
    tileSlotsT: 'Machine à sous', tileSlotsD: 'Pour le plaisir – argent fictif uniquement',
    homeContinue: 'Retour au calculateur', homeContinueD: 'Ton historique de tirs est enregistré ({n}).',
    homeLatest: 'Derniers guides', homePopular: 'Sujets populaires', homeAllGuides: 'Tous les guides →', homeExtras: 'Référence',
    guidesTitle: 'Tous les guides', guidesLead: 'Filtre par catégorie ou recherche par mot-clé.',
    crumbHome: 'Accueil', crumbLabel: 'Fil d\u2019Ariane',
    calcGuideLink: 'Comment ça marche ? → Guide « Mörser L81 & SPH-2 » (en allemand)',
    titleHome: 'Frontbuch – Guides et outils pour WARDOGS', titleCalc: 'Calculateur de mortier (L81 et SPH-2) · Frontbuch',
    titleSlots: 'Machine à sous (argent fictif) · Frontbuch', titleGuides: 'Tous les guides · Frontbuch',
    slotPageLead: 'Un petit jeu pour passer le temps. Uniquement de l\u2019argent fictif, enregistré dans ton navigateur.',
    nfTitle: 'Page introuvable', nfText: 'Cette page n\u2019existe pas (ou plus). La recherche peut peut-être aider ?', nfBack: 'Retour à l\u2019accueil',
    offTitle: 'Tu es hors ligne', offText: 'Cette page n\u2019a pas encore été enregistrée. Les pages déjà visitées, le calculateur et la machine à sous fonctionnent aussi hors ligne.',
    skip: 'Aller au contenu',
    installedText: 'Vous utilisez actuellement Frontbuch en tant qu\u2019application.',
    installPromptText: 'Installez Frontbuch comme application – avec sa propre icône. Le calculateur et les pages visitées fonctionnent hors ligne.',
    shareText: 'Frontbuch – guides et outils pour WARDOGS',
    aboutHtml: `<p><strong>Frontbuch</strong> est un <strong>site de fans non officiel</strong> consacré à WARDOGS – sans lien avec BULKHEAD ou Team17.</p>
      <ul>
        <li>Les guides sont des textes originaux (pour l\u2019instant en allemand). Les faits proviennent de sources publiques citées sous chaque guide.</li>
        <li>Les valeurs d\u2019élévation du calculateur proviennent de tables de la communauté.</li>
        <li>Informations sans garantie.</li>
        <li>Réglages, historique et argent fictif sont stockés uniquement en local dans ton navigateur.</li>
      </ul>
      <p><a href="/impressum/">Mentions légales</a> · <a href="/datenschutz/">Confidentialité</a> (en allemand)</p>`
  }
};
Object.keys(FB_I18N).forEach(l => Object.assign(I18N[l], FB_I18N[l]));

// ---------- Frontbuch: UI-Texte der Tools (Inhalte bleiben deutsch) ----------
const FB_TOOLS_I18N = {
  de: {
    navTools: 'Tools', navToolsAll: 'Alle Tools', navRef: 'Nachschlagen', titleTools: 'Tools · Frontbuch', toolsTitle: 'Tools', toolsLead: 'Rechner, Planer und Nachschlagewerke für WARDOGS.',
    tileToolsT: 'Tools', tileToolsD: 'Loadout-Planer, Datenbank, Tierlist',
    tLoadoutT: 'Loadout-Planer', tLoadoutD: 'Loadout bauen: Kosten pro Leben, Gewicht und Freischaltungen.',
    tTierT: 'Tierlist', tTierD: 'Waffen nach Klasse eingestuft.',
    tDbT: 'Datenbank', tDbD: 'Waffen, Rüstung, Fahrzeuge und Ausrüstung durchsuchen und vergleichen.',
    tCalcD: 'Distanz, Richtung und Elevation für L81 & SPH-2', tSlotsD: 'Zum Spaß – nur Spielgeld',
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
    navTools: 'Tools', navToolsAll: 'All tools', navRef: 'Reference', titleTools: 'Tools · Frontbuch', toolsTitle: 'Tools', toolsLead: 'Calculators, planners and references for WARDOGS.',
    tileToolsT: 'Tools', tileToolsD: 'Loadout planner, database, tier list',
    tLoadoutT: 'Loadout planner', tLoadoutD: 'Build a loadout: cost per life, weight and unlocks.',
    tTierT: 'Tier list', tTierD: 'Weapons ranked by class.',
    tDbT: 'Database', tDbD: 'Search and compare weapons, armour, vehicles and equipment.',
    tCalcD: 'Distance, bearing and elevation for L81 & SPH-2', tSlotsD: 'Just for fun – play money only',
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
    navTools: 'Herramientas', navToolsAll: 'Todas las herramientas', navRef: 'Consulta', titleTools: 'Herramientas · Frontbuch', toolsTitle: 'Herramientas', toolsLead: 'Calculadoras, planificadores y referencias para WARDOGS.',
    tileToolsT: 'Herramientas', tileToolsD: 'Planificador de equipamiento, base de datos, tier list',
    tLoadoutT: 'Planificador de equipamiento', tLoadoutD: 'Crea un equipamiento: coste por vida, peso y desbloqueos.',
    tTierT: 'Tier list', tTierD: 'Armas clasificadas por clase.',
    tDbT: 'Base de datos', tDbD: 'Busca y compara armas, blindaje, vehículos y equipo.',
    tCalcD: 'Distancia, rumbo y elevación para L81 y SPH-2', tSlotsD: 'Solo por diversión: dinero ficticio',
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
    navTools: 'Outils', navToolsAll: 'Tous les outils', navRef: 'Référence', titleTools: 'Outils · Frontbuch', toolsTitle: 'Outils', toolsLead: 'Calculateurs, planificateurs et références pour WARDOGS.',
    tileToolsT: 'Outils', tileToolsD: 'Planificateur d’équipement, base de données, tier list',
    tLoadoutT: 'Planificateur d’équipement', tLoadoutD: 'Compose un équipement : coût par vie, poids et déblocages.',
    tTierT: 'Tier list', tTierD: 'Armes classées par classe.',
    tDbT: 'Base de données', tDbD: 'Recherche et compare armes, armures, véhicules et équipement.',
    tCalcD: 'Distance, cap et élévation pour L81 et SPH-2', tSlotsD: 'Pour le plaisir – argent fictif uniquement',
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

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

// Seiten-Skripte (Rechner, Slot, Guides) registrieren hier ihre Render-Funktionen für den Sprachwechsel.
window.fbLangHooks = window.fbLangHooks || [];

// ---------- Sprache anwenden ----------
function applyLang() {
  document.documentElement.lang = lang;
  const titleKey = document.body.dataset.titleKey;
  if (titleKey) document.title = t(titleKey);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n, el.dataset.i18nN ? { n: el.dataset.i18nN } : undefined); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t(el.dataset.i18nAria)); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPh)); });
  // Hinweis „Guides nur auf Deutsch“ – nur für EN/ES/FR sichtbar
  document.querySelectorAll('.fb-de-note').forEach(el => { el.hidden = lang === 'de'; });

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
  lang = code;
  try { localStorage.setItem('wardogsLang', code); } catch (e) {}
  applyLang();
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
    const L = (kind === 'favs' ? FBP.favs() : FBP.recent()).filter(e => e.u !== location.pathname || kind === 'favs').slice(0, max);
    const sec = el.closest('[data-fb-sec]');
    if (sec) sec.hidden = !L.length;
    if (!L.length) { el.innerHTML = el.dataset.empty ? `<li class="fb-empty">${esc(t(el.dataset.empty))}</li>` : ''; return; }
    el.innerHTML = L.map(e => `<li><a class="fb-ritem" href="${esc(e.u)}">${thumb(e, 28)}<span><b>${esc(label(e))}</b><small>${esc(t(KIND[e.k] || 'navHome'))}</small></span></a>${kind === 'favs' ? `<button type="button" class="fb-unfav" data-unfav="${esc(e.u)}" aria-label="${esc(t('favRemove'))}: ${esc(label(e))}">✕</button>` : ''}</li>`).join('');
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
  try { const tr = document.body.dataset.track; if (tr) { const e = JSON.parse(tr); e.u = location.pathname; FBP.track(e); } } catch (e) {}
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
      sc.src = '/assets/search-data.js?v=' + '16';
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
    return `<a class="fb-sopt" role="option" id="${pre}-${n}" href="${esc(e.u)}" aria-selected="false" tabindex="-1">${img}<span class="fb-sopt-txt"><b>${hl(title, q)}</b>${e.s ? `<small>${esc(e.s)}</small>` : ''}</span></a>`;
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
      return (R.length ? `<div class="fb-sgrp" role="presentation">${esc(t('sRecent'))}</div>` + R.map(e => `<a class="fb-sopt" role="option" id="so-${n++}" href="${esc(e.u)}" aria-selected="false" tabindex="-1">${thumb(e, 32)}<span class="fb-sopt-txt"><b>${esc(label(e))}</b><small>${esc(t(KIND[e.k] || 'navHome'))}</small></span></a>`).join('') : '') +
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
