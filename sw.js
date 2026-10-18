// Frontbuch Service Worker v16
// - Precache: App-Shell + Rechner + Slots + Offline-Seite
// - HTML (Navigation): network-first, besuchte Seiten werden zwischengespeichert
// - Gleiche Herkunft, nur GET; alles andere (Spotify usw.) geht direkt ans Netz
const CACHE_NAME = 'frontbuch-v16';
const PRECACHE = [
  "/",
  "/rechner/",
  "/slots/",
  "/guides/",
  "/tools/",
  "/offline/",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.ico",
  "/favicon.svg",
  "/assets/site.css?v=16",
  "/assets/site.js?v=16",
  "/assets/rechner.js?v=16",
  "/assets/slots.js?v=16",
  "/assets/guides.js?v=16",
  "/assets/guides-data.js?v=16",
  "/assets/data.js?v=16",
  "/assets/tools.js?v=16",
  "/assets/search-data.js?v=16"
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isHtml(req) {
  return req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (isHtml(req)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const res = await fetch(req, { cache: 'no-cache' });
        if (res && res.ok && res.type === 'basic') {
          // Ohne Query speichern, damit /guides/?q=… offline die Übersicht findet
          cache.put(url.origin + url.pathname, res.clone());
        }
        return res;
      } catch (e) {
        const hit = await cache.match(url.origin + url.pathname) || await cache.match(req, { ignoreSearch: true });
        if (hit) return hit;
        if (url.pathname === '/index.html') { const home = await cache.match('/'); if (home) return home; }
        return (await cache.match('/offline/')) || new Response('Offline', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  // Statische Dateien: stale-while-revalidate
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const hit = await cache.match(req);
    const net = fetch(req).then((res) => {
      if (res && res.ok && res.type === 'basic') cache.put(req, res.clone());
      return res;
    }).catch(() => null);
    if (hit) { event.waitUntil(net); return hit; }
    const res = await net;
    return res || new Response('', { status: 504 });
  })());
});
