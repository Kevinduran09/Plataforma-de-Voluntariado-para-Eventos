import React from 'react';
import EventCard from './EventCard';
import type { Evento, Inscripciones } from '~/features/EventDashboard/domain/EventDashboard';
interface EventListSectionProps {
    title: string;
    events: Inscripciones[];
    emptyMessage: string;
    isPast: boolean;
}

export default function EventListSection({
    title,
    events,
    emptyMessage,
    isPast
}: EventListSectionProps) {
    return (
        <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 flex items-center">
                <span className={`w-3 h-3 rounded-full mr-3 ${isPast ? 'bg-gray-400' : 'bg-green-500'}`}></span>
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {events.map(event => (
                    <EventCard key={event.eventoId} event={event.evento} isPast={isPast} />
                ))}

                {events.length === 0 && (
                    <p className="text-gray-500 col-span-full text-center py-8">
                        {emptyMessage}
                    </p>
                )}
            </div>
        </section>
    );
}