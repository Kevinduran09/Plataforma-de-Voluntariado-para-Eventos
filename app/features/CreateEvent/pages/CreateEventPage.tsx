import React from 'react';
import PrimeraParte from '../ui/DetallesEvento';
import { Link } from 'react-router';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function CreateEventPage() {
    return (
        <div className='mx-auto max-w-4xl p-6 '>
            <header>
                <div>
                    <h2 className="p-3 text-gray-700 text-sm flex items-center space-x-2">
                        <Link to={'/'} className="font-medium hover:underline"> Home</Link>


                        <span className="text-gray-500">›</span>
                        <span className="font-semibold">Crear evento</span>
                    </h2>
                </div>



                <div>
                    <h1 className="text-4xl font-bold text-gray-800 text-left mb-4 p-4">
                        Crear nuevo evento
                    </h1>
                </div>



            </header>
            <PrimeraParte />
        </div>
    );
}