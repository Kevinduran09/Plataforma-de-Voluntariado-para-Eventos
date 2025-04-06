import React from 'react';
import { FormularioEvento } from '../ui/FormularioEvento';
import { Link, type ActionFunctionArgs } from 'react-router';

export async function clientAction({ request }: ActionFunctionArgs) {
        // Aquí puedes manejar la lógica de creación del evento
        // Aqui se llamaria la API que se encarga de crear el evento

        // const formData = await request.formData();
        // const loginData = Object.fromEntries(formData);
        // const result = await PostCreateEvent(loginData); // Llama a la función que maneja la creación del evento

    
        

    //  return null; // retorna una accion Como redireccion o un error 
}

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