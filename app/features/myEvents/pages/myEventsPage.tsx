import React from 'react';
import { useLoaderData } from 'react-router';
import inscriptionsComponent from '../ui/inscriptionsComponent';
import type { Route } from '.react-router/types/app/+types/root';
import WorkInProgress from '~/components/WorkInProgress';
export async function clientLoader() {
    // Logica de consulta de datos
    return {data:'holamundo'}
}

export default function myEventsPage() {
    const { data} = useLoaderData()
    return (
      <WorkInProgress/>
    );
}