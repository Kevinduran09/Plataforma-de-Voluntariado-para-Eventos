import React from 'react';
import { useLoaderData } from 'react-router';
import ${featureName}Component from '../ui/${featureName}Component';
import type { Route } from '.react-router/types/app/+types/root';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function ${featureName}Page() {
    const { data} = useLoaderData()
    return (
        <div>
            <h1>${featureName}Page</h1>
            <h2>data: {data}</h2>
            <${featureName}Component />
        </div>
    );
}