import React from 'react';
import { Link, useLoaderData } from 'react-router';
import EventDetailComponent from '../ui/EventDetailComponent';
import { GetEventDetail, isUserSubscribed } from '../useCases/useCaseEventDetail';
import type { Evento } from '~/features/EventDashboard/domain/EventDashboard';
import useAuthStore from '~/store/useAuthStore';

export async function clientLoader({ params }: { params: { id: string } }) {
    if (!params.id) {
        throw new Response('ID del evento no proporcionado', { status: 400 });
    }
    try {
        const data: Evento = await GetEventDetail(params.id);
        if (!data) {
            throw new Response('Evento no encontrado', { status: 404 });
        }

        const user = useAuthStore.getState().user;
        if (!user) {
            throw new Response('Usuario no autenticado', { status: 401 });
        }
        if(!user.id) {
            return { data: data, isSub: false };
        }
        const isSub: boolean = await isUserSubscribed(user.id, data.id);
        console.log('Usuario:', user.id, 'Evento:', data.id, 'Suscrito:', isSub);
        
        return { data:data,isSub };
    } catch (error) {
        console.error('Error al cargar el evento:', error);
        throw new Response('Error al cargar el evento', { status: 500 });
    }
}

export default function EventDetailPage() {
    const { data,isSub } = useLoaderData<{ data: Evento,isSub:boolean }>();

    return (
        <div className="container mx-auto max-w-4xl px-3 mt-10">
            <header>
                <div>
                    <h2 className=" text-gray-700 text-sm flex items-center space-x-2">
                        <Link to={'/eventDashboard'} className="font-medium hover:underline"> Home</Link>
                        <span className="text-gray-500">›</span>
                        <span className="font-semibold">{data.titulo}</span>
                    </h2>
                </div>
            </header>
            <EventDetailComponent event={data} isSubscrited={isSub} />
        </div>
    );
}