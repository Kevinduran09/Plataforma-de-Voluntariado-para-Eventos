import React from 'react';
import CreateEventComponent from '../ui/CreateEventComponent';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function CreateEventPage() {
    return (
        <div>
            <h1>CreateEventPage</h1>
            <CreateEventComponent />
        </div>
    );
}