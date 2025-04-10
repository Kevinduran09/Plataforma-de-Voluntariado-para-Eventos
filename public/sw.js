const CACHE_DYNAMIC_NAME = 'volunatarios-cache';
const CACHE_STATIC_NAME = 'volunatarios-cache-static';
const CATCH_METHODS = ['POST', 'PATCH', 'PUT', 'DELETE']
const API_URL = 'https://p01--json-server-db--yl5ffkw8twzb.code.run'
// Archivos estáticos que queremos almacenar en caché
const STATIC_FILES = ['/', '/index.html', "/assets/LandingPage-LW7tv-NQ.js", "/assets/EventDashboardPage-CBP3T0r-.js", "/assets/root-DhewjpDU.css", "/assets/EventDashboardPage-5Iqa_f-x.css", "/manifest.json", "/volunthub-512x512.png", "/Work-in-progress.gif"]

self.addEventListener('install', event => {
    console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {

    console.log('Service Worker activado');
});
// comentario
self.addEventListener('fetch', (event) => {
    const { request } = event


    if (request.url.startsWith('chrome-extension://')) {
        return; // No hacer nada si la solicitud es de una extensión de Chrome
    }


    if (request.method === 'POST' || request.method === 'PATCH' && url.href.startsWith(API_URL)) {
        event.respondWith(handlePostRequest(request))
    } else {
        // En todos los demás casos, usar fetch + cache
        event.respondWith(handleFetch(event));
    }
});


// Manejo de archivos estáticos
function handleStaticFile(request) {
    return caches.open(CACHE_STATIC_NAME)
        .then(cache => {
            return cache.match(request)
                .then(response => {
                    if (response) {
                        return response;  // Devuelve la respuesta de la caché si existe
                    }

                    // Si no está en caché, obtenemos el archivo desde la red
                    return fetch(request).then(networkResponse => {
                        // Guardar la respuesta en la caché para futuras solicitudes
                        cache.put(request, networkResponse.clone());
                        return networkResponse;
                    });
                });
        });
}

// Manejo de peticiones POST offline
async function handlePostRequest(request) {
    try {
        const response = await fetch(request.clone());
        return response;
    } catch (error) {
        const body = await request.clone().json();
        console.log(body)
        const data = {
            method: request.method,
            url: request.url,
            data: body
        }
        await saveRequest(data);

        const registration = await self.registration;
        if ('sync' in registration) {
            try {
                console.log('Registrando sincronización...');
                await registration.sync.register('sync-posts');
                console.log('Sincronización registrada correctamente');
            } catch (syncError) {
                console.error('Error al registrar la sincronización', syncError);
            }
        } else {
            console.warn('La sincronización en segundo plano no está soportada en este navegador');
        }

        return new Response(
            JSON.stringify({ savedOffline: true }),
            { status: 202, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

self.addEventListener('sync', (event) => {
    if (event.tag == 'sync-posts') {
        event.waitUntil(processQueuedRequests())

    }
})

// async function processQueuedRequests() {
//     const requests = await getAllRequests()

//     await Promise.all(
//         requests.map(async () => {
//             try {
//                 await fetch("https://p01--json-server-db--yl5ffkw8twzb.code.run/eventos", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify(req),
//                 });
//             } catch (error) {
//                 console.error('Reintento fallido', error);

//             }
//         })
//     )

//     await clearRequests()
// }

async function processQueuedRequests() {
    const requests = await getAllRequests();

    await Promise.all(
        requests.map(async (req) => {
            try {
                await fetch(req.url, {
                    method: req.method,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req.data),
                });
            } catch (error) {
                console.error('Reintento fallido', error);
            }
        })
    );

    await clearRequests();
}

// Maneja las solicitudes con caché y red
async function handleFetch(event) {
    const request = event.request;

    let response = await fetch(request)
        .then(res => {
            if (!res) {
                return caches.match(request); // Si no hay respuesta, intenta con la caché
            }

            // Si la respuesta es válida y el método es GET, almacenamos en la caché dinámica
            if (request.method === 'GET') {
                caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                    cache.put(request, res.clone());
                    clearCache(CACHE_DYNAMIC_NAME, 150); // Limitar el número de elementos en la caché
                });
            }
            return res.clone(); // Devolvemos la respuesta original
        })
        .catch(async () => {
            return caches.match(request); // Si la red falla, intentar obtener la respuesta desde la caché
        });

    return response;
}

// Limita la cantidad de elementos en la caché
function clearCache(cacheName, maxItems) {
    caches.open(cacheName)
        .then(cache => {
            cache.keys().then(keys => {
                if (keys.length > maxItems) {
                    cache.delete(keys[0]).then(() => {
                        clearCache(cacheName, maxItems); // Recursivo para limpiar los más antiguos
                    });
                }
            });
        });
}

// Utilizades de IndexedDB
function openDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('sync-db', 1);

        request.onupgradeneeded = (event) => {
            const db = request.result;
            if (!db.objectStoreNames.contains('requests')) {
                db.createObjectStore('requests', { keyPath: 'id', autoIncrement: true });
            }
        };

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

async function saveRequest(data) {
    const db = await openDB();
    const tx = db.transaction('requests', 'readwrite');
    tx.objectStore('requests').add(data);
    return tx.complete;
}

async function getAllRequests() {
    const db = await openDB();
    const tx = db.transaction('requests', 'readwrite');
    const store = tx.objectStore('requests');
    return new Promise((resolve, reject) => {
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
    });
}

async function clearRequests() {
    const db = await openDB();
    const tx = db.transaction('requests', 'readwrite');
    tx.objectStore('requests').clear();
    return tx.complete;
}
