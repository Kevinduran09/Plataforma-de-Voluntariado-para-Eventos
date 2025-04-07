import React from 'react';
import { useLoaderData } from 'react-router';
import settingsComponent from '../ui/settingsComponent';
import type { Route } from '.react-router/types/app/+types/root';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function settingsPage() {
    const { data} = useLoaderData()
    return (
        <div>
            <h1>settingsPage</h1>
            <h2>data: {data}</h2>
            <settingsComponent />
        </div>
    );
}