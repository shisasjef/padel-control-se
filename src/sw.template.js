/* Pádel Control SÉ · Service Worker (Offline-first PWA for GitHub Pages & standalone installs) */
const APP_VERSION = '__PADEL_APP_VERSION__';
const APP_CACHE = `${APP_VERSION}-shell`;
const RUNTIME_CACHE = `${APP_VERSION}-runtime`;

const CORE_ASSETS = /* __PADEL_CORE_ASSETS__ */;

const CACHEABLE_CDN_HOSTS = new Set([
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdn.jsdelivr.net',
  'storage.googleapis.com'
]);

const BYPASS_HOSTS = new Set([
  'ntfy.sh',
  'is.gd',
  'v.gd',
  'api.qrserver.com'
]);

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(APP_CACHE);
    await Promise.allSettled(
      CORE_ASSETS.map(async (asset) => {
        const res = await fetch(new Request(asset, { cache: 'reload' }));
        if (res && res.ok) {
          await cache.put(asset, res);
        }
      })
    );
    if (!self.registration.active) {
      await self.skipWaiting();
    }
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter((k) => k.startsWith('padel-se-') && k !== APP_CACHE && k !== RUNTIME_CACHE)
        .map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

function isNavigationOrShell(req, url) {
  if (req.mode === 'navigate') return true;
  if (url.origin !== self.location.origin) return false;
  const scopePath = new URL(self.registration.scope).pathname;
  return url.pathname === scopePath || url.pathname === `${scopePath}index.html`;
}

async function networkFirstShell(req) {
  const cache = await caches.open(APP_CACHE);
  const cached =
    (await cache.match('./index.html', { ignoreSearch: true })) ||
    (await cache.match('./', { ignoreSearch: true }));

  const networkPromise = fetch(req).then(async (res) => {
    if (res && res.ok) {
      try {
        await cache.put('./index.html', res.clone());
        await cache.put('./', res.clone());
      } catch {}
    }
    return res;
  });

  if (!cached) {
    return networkPromise;
  }

  let timeoutId;
  const timeoutPromise = new Promise((resolve) => {
    timeoutId = setTimeout(() => resolve(null), 3500);
  });

  try {
    const raceWinner = await Promise.race([
      networkPromise.catch(() => null),
      timeoutPromise
    ]);
    clearTimeout(timeoutId);
    if (raceWinner && raceWinner.ok) {
      return raceWinner;
    }
    return cached;
  } catch {
    clearTimeout(timeoutId);
    return cached;
  }
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req, { ignoreSearch: false });
  const netPromise = fetch(req)
    .then(async (res) => {
      if (res && (res.ok || res.type === 'opaque')) {
        try {
          await cache.put(req, res.clone());
        } catch {}
      }
      return res;
    })
    .catch(() => null);

  if (cached) return cached;
  const netRes = await netPromise;
  return netRes || Response.error();
}

async function cacheFirstRuntime(req) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res && (res.ok || res.type === 'opaque')) {
    try {
      await cache.put(req, res.clone());
    } catch {}
  }
  return res;
}

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  if (
    BYPASS_HOSTS.has(url.hostname) ||
    url.pathname.endsWith('/sse') ||
    url.searchParams.has('poll')
  ) {
    return;
  }

  if (isNavigationOrShell(req, url)) {
    event.respondWith(networkFirstShell(req));
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(staleWhileRevalidate(req, APP_CACHE));
    return;
  }

  if (CACHEABLE_CDN_HOSTS.has(url.hostname)) {
    event.respondWith(
      url.hostname === 'fonts.googleapis.com'
        ? staleWhileRevalidate(req, RUNTIME_CACHE)
        : cacheFirstRuntime(req)
    );
  }
});
