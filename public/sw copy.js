
// import { savePostRequest } from "./idb.js"; // si también está en `public/`

const CACHE_DYNAMIC_NAME = 'volunatarios-cache';

self.addEventListener('install', event => {
    console.log('Service Worker instalado');
});

self.addEventListener('activate', (event) => {

    console.log('Service Worker activado');
});
// comentario
self.addEventListener('fetch', (event) => {
    const { request } = event
    // Redirige a la lógica de caché con red
    if (request.url.startsWith('chrome-extension://')) {
        return; // No hacer nada si la solicitud es de una extensión de Chrome
    }
    // Si es un POST al endpoint de eventos, aplicar lógica especial
    if (request.method === 'POST' && request.url.includes('https://p01--json-server-db--yl5ffkw8twzb.code.run/eventos')) {
        event.respondWith(handlePostRequest(request));
    } else {
        // En todos los demás casos, usar fetch + cache
        event.respondWith(handleFetch(event));
    }
});

// Manejo de peticiones POST offline
async function handlePostRequest(request) {
    try {
        const response = await fetch(request.clone());
        return response;
    } catch (error) {
        const body = await request.clone().json(); // ← esta línea necesita `await`
        await saveRequest(body);

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

        // Asegúrate de que la respuesta se envíe incluso si la sincronización falla
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

async function processQueuedRequests() {
    const requests = await getAllRequests()

    await Promise.all(
        requests.map(async () => {
            try {
                await fetch("https://p01--json-server-db--yl5ffkw8twzb.code.run/eventos", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req),
                });
            } catch (error) {
                console.error('Reintento fallido', error);

            }
        })
    )

    await clearRequests()
}
const isStaticFile = request => {
    return STATIC_EXTENSIONS.some(ext => request.url.endsWith(ext));
};


function handleStaticFile(e) {
    e.respondWith(
        fetch(e.request)
            .then(response => {
                return caches.open(STATIC_CACHE_KEY).then(cache => {
                    cache.put(e.request, response.clone());
                    return response;
                });
            })
            .catch(() => {
                return caches.match(e.request);
            })
    );
}

// Maneja las solicitudes con caché y red
async function handleFetch(event) {
    const request = event.request;
    // console.log(request);

    let response = await fetch(request)
        .then(res => {


            if (!res) {


                // Si no hay respuesta, intenta obtenerla desde la caché
                return caches.match(request);
            }
            // Si hay respuesta de la API, la guardamos en la caché
            caches.open(CACHE_DYNAMIC_NAME).then(cache => {



                if (request.method === 'GET') {
                    caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                        cache.put(request, res.clone());
                        clearCache(CACHE_DYNAMIC_NAME, 150);
                    });
                }

            });
            return res.clone(); // Devolvemos la respuesta original
        })
        .catch(async () => {
            // Si la API no responde, intenta con la caché
            return caches.match(request);
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
        const request = indexedDB.open('sync-db', 1)

        request.onupgradeneeded = (event) => {
            const db = request.result
            if (!db.objectStoreNames.contains('requests')) {
                db.createObjectStore('requests', { keyPath: 'id', autoIncrement: true })
            }
        }

        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
    })
}

async function saveRequest(data) {
    const db = await openDB()
    const tx = db.transaction('requests', 'readwrite')
    tx.objectStore('requests').add(data)
    return tx.complete

}

async function getAllRequests() {
    const db = await openDB()
    const tx = db.transaction('requests', 'readwrite')
    const store = tx.objectStore('requests')
    return new Promise((resolve, reject) => {
        const req = store.getAll()
        req.onsuccess = () => resolve(req.result)
        req.onerror = () => reject(req.error)
    })
}

async function clearRequests() {
    const db = await openDB()
    const tx = db.transaction('requests', 'readwrite')
    tx.objectStore('requests').clear()
    return tx.complete
}
