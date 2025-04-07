import React from 'react';
import { useLoaderData } from 'react-router';
import myEventsComponent from '../ui/myEventsComponent';
import type { Route } from '.react-router/types/app/+types/root';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function myEventsPage() {
    const { data} = useLoaderData()
    return (
        <div>
            <h1>myEventsPage</h1>
            <h2>data: {data}</h2>
            <myEventsComponent />
        </div>
    );
}