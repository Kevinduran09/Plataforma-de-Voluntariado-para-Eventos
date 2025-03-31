import React from 'react';
import { useLoaderData } from 'react-router';
import ProfileComponent from '../ui/ProfileComponent';
import type { Route } from '.react-router/types/app/+types/root';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function ProfilePage() {
    const { data} = useLoaderData()
    return (
        <div>
            <h1>ProfilePage</h1>
            <h2>data: {data}</h2>
            <ProfileComponent />
        </div>
    );
}