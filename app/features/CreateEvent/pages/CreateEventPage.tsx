import React from 'react';
import { FormularioEvento } from '../ui/FormularioEvento';
import { Link, type ActionFunctionArgs } from 'react-router';



export default function CreateEventPage() {
    return (
        <div className='container mx-auto max-w-4xl px-3 mt-10'>
            <header>
                <div>
                    <h2 className="p-3 text-gray-700 text-sm flex items-center space-x-2">
                        <Link to={'/eventDashboard'} className="font-medium hover:underline"> Home</Link>


                        <span className="text-gray-500">›</span>
                        <span className="font-semibold">Crear evento</span>
                    </h2>
                </div>


            </header>
            <div >
                <h1 className="text-4xl font-bold text-gray-800 text-left mb-4 p-4">
                    Crear nuevo evento
                </h1>
                <FormularioEvento />
            </div>
        </div>
    );
}