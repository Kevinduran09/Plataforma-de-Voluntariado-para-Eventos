import React from 'react';
import { useLoaderData } from 'react-router';
import inscriptionsComponent from '../ui/inscriptionsComponent';
import type { Route } from '.react-router/types/app/+types/root';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function inscriptionsPage() {
    const { data} = useLoaderData()
    return (
        <div>
            <h1>inscriptionsPage</h1>
            <h2>data: {data}</h2>
            <inscriptionsComponent />
        </div>
    );
}