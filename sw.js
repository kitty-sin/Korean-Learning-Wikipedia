// Service Worker for Korean Illustrated Encyclopedia (韓語學習圖解百科 PWA)
const CACHE_NAME = 'korean-wiki-pwa-v2';

const PRECACHE_ASSETS = [
  './',
  './index.html',
  './verbs.html',
  './manifest.webmanifest',
  './manifest.json',
  './css/encyclopedia.css?v=20260920_v5',
  './js/encyclopedia_data.js',
  './js/verbs_data.js',
  './js/adjectives_data.js',
  './js/adverbs_data.js',
  './js/pronouns_data.js',
  './js/proper_nouns_data.js',
  './js/dependent_nouns_data.js',
  './js/numerals_data.js',
  './js/determiners_data.js',
  './js/particles_data.js',
  './js/greetings_data.js',
  './js/loanwords_data.js',
  './js/sanrio_food_data.js',
  './js/search_index.js',
  './js/encyclopedia_search.js',
  './js/encyclopedia_app.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon.png'
];

// 安裝階段：預先快取所有核心資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-caching non-fatal warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// 啟動階段：清理舊版本快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Clearing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 請求攔截策略：
// 1. 頁面導航 (HTML)：網路優先 (Network First)，若離線則使用快取
// 2. 靜態資源 (JS/CSS/圖片)：快取優先並背景更新 (Stale-While-Revalidate)
self.addEventListener('fetch', (event) => {
  // 只攔截 GET 請求與 http/https 協議
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (!url.protocol.startsWith('http')) return;

  // 頁面導航請求
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            return cached || caches.match('./index.html');
          });
        })
    );
    return;
  }

  // 靜態資源請求 (Stale-while-revalidate)
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // 網路失敗時若無快取則安靜返回
        });

      return cachedResponse || fetchPromise;
    })
  );
});
