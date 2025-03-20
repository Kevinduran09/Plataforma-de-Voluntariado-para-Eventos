import React from 'react';
import ExploreComponent from '../ui/ExploreComponent';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function ExplorePage() {
    return (
        <div>
            <h1>ExplorePage</h1>
            <ExploreComponent />
        </div>
    );
}