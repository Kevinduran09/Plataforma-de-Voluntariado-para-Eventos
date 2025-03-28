import React from 'react';
import PrimeraParte from '../ui/DetallesEvento';
import { Link } from 'react-router';

export async function clientLoader() {
    // Logica de consulta de datos
}

export default function CreateEventPage() {
    return (
        <div>
            <header>
                <div>
                    <h2 className="p-3 bg-gray-200 text-gray-700 text-sm flex items-center space-x-2">
                        <Link to={'/'}>  <a className="font-medium hover:underline">Home</a></Link>

                        
                        <span className="text-gray-500">›</span>
                        <span className="font-semibold">Crear evento</span>
                    </h2>
                </div>



                <div>
                    <h1  className="text-4xl font-bold text-gray-800 text-left mb-4 p-4">
                        Crear nuevo evento
                    </h1>
                </div>



            </header>
            <PrimeraParte />
        </div>
    );
}