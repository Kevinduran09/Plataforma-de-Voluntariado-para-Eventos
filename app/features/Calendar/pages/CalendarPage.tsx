import React from 'react';
import CalendarComponent from '../ui/CalendarComponent';
import WorkInProgress from '~/components/WorkInProgress';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function CalendarPage() {
    return (
        <div>
            <WorkInProgress />
        </div>
    );
}