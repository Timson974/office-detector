const CACHE = 'od-v5';
const ASSETS = [
  '/office-detector/',
  '/office-detector/index.html',
  '/office-detector/manifest.json',
  '/office-detector/icons/icon-192.png',
  '/office-detector/icons/icon-512.png',
];

self.addEventListener('install', e =>
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  )
);

self.addEventListener('activate', e =>
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  )
);

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  // Don't cache external CDN requests (onnxruntime, huggingface model)
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
