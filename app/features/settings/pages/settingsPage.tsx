import React from 'react';
import { useLoaderData } from 'react-router';
import settingsComponent from '../ui/settingsComponent';
import type { Route } from '.react-router/types/app/+types/root';
import WorkInProgress from '~/components/WorkInProgress';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function settingsPage() {
    const { data} = useLoaderData()
    return (
         <WorkInProgress/>
    );
}