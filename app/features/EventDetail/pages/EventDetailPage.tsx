import React from 'react';
import { Link, useLoaderData } from 'react-router';
import EventDetailComponent from '../ui/EventDetailComponent';
import { GetEventDetail } from '../useCases/useCaseEventDetail';
import type { Evento } from '~/features/EventDashboard/domain/EventDashboard';

export async function clientLoader({ params }: { params: { id: string } }) {
    if (!params.id) {
        throw new Response('ID del evento no proporcionado', { status: 400 });
    }
    try {
        const data: Evento = await GetEventDetail(params.id);
        if (!data) {
            throw new Response('Evento no encontrado', { status: 404 });
        }
        return { data };
    } catch (error) {
        console.error('Error al cargar el evento:', error);
        throw new Response('Error al cargar el evento', { status: 500 });
    }
}

export default function EventDetailPage() {
    const { data } = useLoaderData<{ data: Evento }>();

    return (
        <div className="container mx-auto max-w-4xl px-3 mt-10">
            <header>
                <div>
                    <h2 className=" text-gray-700 text-sm flex items-center space-x-2">
                        <Link to={'/eventDashboard'} className="font-medium hover:underline"> Home</Link>
                        <span className="text-gray-500">›</span>
                        <span className="font-semibold">{data.nombre}</span>
                    </h2>
                </div>
            </header>
            <EventDetailComponent event={data} />
        </div>
    );
}