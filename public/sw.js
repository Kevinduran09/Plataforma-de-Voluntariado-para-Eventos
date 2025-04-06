const CACHE_NAME = 'pwa-cache-v1';
const API_CACHE_NAME = 'api-cache-v1';
const urlsToCache = [
    '/',
    '/public/pngtree-settings-line-black-icon-png-image_3767553.jpg',
    '/public/volunteering-animate.svg',
    '/public/NotFount.svg',
    '/createevent',
];

// Instalar el Service Worker y cachear archivos estáticos
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Estrategia Network First para /eventos/
const networkFirst = async (request) => {
    try {
        // Primero intentamos obtener del servidor
        const networkResponse = await fetch(request);

        // Si la respuesta es válida, actualizamos el caché
        if (networkResponse.ok) {
            const cache = await caches.open(API_CACHE_NAME);
            await cache.put(request, networkResponse.clone());
        }
        return networkResponse;
    } catch (error) {
        // Si falla la red, buscamos en caché
        const cachedResponse = await caches.match(request);
        return cachedResponse || Response.error();
    }
};

// Interceptar peticiones
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Aplicar estrategia network-first solo para rutas /eventos/
    if (url.pathname.startsWith('/eventos/')) {
        event.respondWith(networkFirst(event.request));
    } else {
        // Para otros recursos, usar cache-first como antes
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});

// Activar el Service Worker y limpiar caché antigua
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cache) => cache !== CACHE_NAME && cache !== API_CACHE_NAME)
                    .map((cache) => caches.delete(cache))
            );
        })
    );
});