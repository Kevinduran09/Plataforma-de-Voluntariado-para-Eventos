import React from 'react';
import { Link } from 'react-router-dom';
import { type Evento } from '~/features/EventDashboard/domain/EventDashboard'; 
import { formatEventDate } from '~/helpers/dateFormatters';
import TaskProgress from './TaskProgress';
import EventDateBadge from './EventDateBadge';

interface EventCardProps {
    event: Evento;
    isPast: boolean;
}

export default function EventCard({ event, isPast }: EventCardProps) {
    const formattedDate = formatEventDate(event.fecha, event.hora);

    return (
        <Link
            to={`/eventDetail/${event.id}`}
            className={`group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${isPast ? 'opacity-80' : ''
                }`}
        >
            <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{event.categoria}</span>
                </div>

                <EventDateBadge date={event.fecha} isPast={isPast} />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                    {event.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{formattedDate}</p>
                <p className="text-gray-700 mb-3 flex items-center text-sm">
                    <svg className="w-4 h-4 mr-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.ubicacion}
                </p>

                {!isPast && event.tareas.length > 0 && (
                    <TaskProgress tasks={event.tareas} />
                )}
            </div>
        </Link>
    );
}