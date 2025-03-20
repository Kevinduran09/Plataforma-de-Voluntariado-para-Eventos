const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/ipngtree-settings-line-black-icon-png-image_3767553png',
    '/pngtree-settings-line-black-icon-png-image_3767553.png'
];

// Instalar el Service Worker y cachear archivos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Interceptar peticiones y servir desde la caché
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Activar el Service Worker y limpiar caché antigua
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cache) => cache !== CACHE_NAME).map((cache) => caches.delete(cache))
            );
        })
    );
});