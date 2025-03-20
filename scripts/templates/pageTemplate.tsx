import React from 'react';
import ${featureName}Component from '../ui/${featureName}Component';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function ${featureName}Page() {
    return (
        <div>
            <h1>${featureName}Page</h1>
            <${featureName}Component />
        </div>
    );
}