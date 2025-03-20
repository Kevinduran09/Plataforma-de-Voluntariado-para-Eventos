import React from 'react';
import CalendarComponent from '../ui/CalendarComponent';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function CalendarPage() {
    return (
        <div>
            <CalendarComponent />
        </div>
    );
}