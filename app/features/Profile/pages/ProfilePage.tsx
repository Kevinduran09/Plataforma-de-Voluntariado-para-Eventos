import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import ProfileComponent from '../ui/ProfileComponent';
import type { Route } from '.react-router/types/app/+types/root';
import  useAuthStore from '~/store/useAuthStore';

export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function ProfilePage() {
    const { data} = useLoaderData()
    const {user} = useAuthStore()
    console.log(user);
    
    return (
        <div>
            <h1>ProfilePage</h1>
            <h2>data: {user.nombre}</h2>
            <ProfileComponent />
        </div>
    );
}