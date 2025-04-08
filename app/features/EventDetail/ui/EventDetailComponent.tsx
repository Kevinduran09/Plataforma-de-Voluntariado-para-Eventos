import React from 'react';
import type { Evento } from '~/features/EventDashboard/domain/EventDashboard';
import { EventTasks } from './EventTask';
import { number } from 'zod';
import { SubscribeToEvent } from '../useCases/useCaseEventDetail';
import RegisterToEvent from './RegisterToEvent';

const EventDetailComponent: React.FC<{ event: Evento, isSubscrited: boolean }> = ({ event, isSubscrited }) => {

 

    return (
        <div className="flex flex-col gap-8 px-4 py-6">
            {/* Título del evento */}
            <div className="text-start">
                <h1 className="text-3xl font-bold">{event.titulo}</h1>
            </div>
            <div>
                <span className="text-1xl me-2 px-2.5 py-1  bg-blue-200 text-blue-500 rounded-xl">{event.categoria}</span>
            </div>

            {/* Imagen del evento */}
            <div className="w-full mx-auto h-72 md:h-80 bg-gray-200 rounded-2xl flex items-center justify-center">
                <img
                    src={ /* event.imagen || */ "https://placehold.co/800x400?text=Event+Image"}
                    alt="Event"
                    className="w-full h-full object-cover rounded-2xl"
                />
            </div>

            {/* Información del evento */}
            <div className="flex flex-col gap-6 ">
                {/* Fecha y hora */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        {/* Icono reloj */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={2} />
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{new Date(event.fecha).toLocaleDateString()}</p>
                        <p className="text-sm text-gray-500">{new Date(event.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    </div>
                </div>

                {/* Dirección */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10a2 2 0 100-4 2 2 0 000 4z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{event.ubicacion}</p>
                    </div>
                </div>

                {/* Voluntarios */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                        {/* Icono usuario*/}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C13.104 2 14 2.896 14 4C14 5.104 13.104 6 12 6C10.896 6 10 5.104 10 4C10 2.896 10.896 2 12 2Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 14C6 11.791 8.791 10 12 10C15.209 10 18 11.791 18 14V16C18 16.553 17.553 17 17 17H7C6.447 17 6 16.553 6 16V14Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-lg font-semibold">{event.voluntariosRequeridos} voluntarios registrados</p>
                        <p className="text-sm text-gray-500">{Math.max(0, Number.parseInt(event.voluntariosRequeridos) - (event.tareas?.length || 0))} espacios restantes</p>
                    </div>
                </div>
            </div>

            {/* Descripción del evento */}
            <div className='mt-5'>
                <h2 className="text-2xl font-semibold">About This Event</h2>
                <p className="text-gray-700 p-4">{event.descripcion}</p>
            </div>

            {/* Que traer */}
            <div>
                <h2 className="text-2xl font-semibold">What to Bring</h2>
                {event.requisitosAdicionales?(
                    <ul className="list-disc list-inside text-gray-700 mt-2 ml-3 p-2">
                        {
                            event.requisitosAdicionales.split(',').map((requisito) => {
                                return <li className='mt-2'>{requisito}</li>
                            })
                        }
                    </ul>
                ):(
                    <h2 className='text-gray-600 mt-4 text-center'>No hay requisitos</h2>
                )}
            </div>


            <EventTasks tareas={event.tareas} isUserSubscribed={isSubscrited} />

           <RegisterToEvent idEvent={event.id} eventName={event.titulo} isSubscrited={isSubscrited}/>
        </div>
    );
};

export default EventDetailComponent;