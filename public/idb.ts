import { openDB } from "idb";


export const dbPromise = openDB('requests-store', 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains('pending-posts')) {
            db.createObjectStore('pending-posts', { keyPath: 'id', autoIncrement: true });
        }
    },
});

export async function savePostRequest(requestData: any) {
    const db = await dbPromise;
    // requestData puede incluir la URL, método, cabeceras, cuerpo, etc.
    return db.add('pending-posts', requestData);
}

export async function getAllPostRequests() {
    const db = await dbPromise;
    return db.getAll('pending-posts');
}

export async function deletePostRequest(id: IDBValidKey | IDBKeyRange) {
    const db = await dbPromise;
    return db.delete('pending-posts', id);
}