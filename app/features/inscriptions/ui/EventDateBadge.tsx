import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface EventDateBadgeProps {
    date: string;
    isPast: boolean;
}

export default function EventDateBadge({ date, isPast }: EventDateBadgeProps) {
    const eventDate = new Date(date);
    const day = format(eventDate, 'd', { locale: es });
    const month = format(eventDate, 'MMM', { locale: es });

    return (
        <div className={`absolute top-2 right-2 text-center rounded-md overflow-hidden shadow-sm ${isPast ? 'bg-gray-400' : 'bg-green-500'
            }`}>
            <div className="px-2 py-1 text-white font-bold text-sm">
                {day}
            </div>
            <div className="bg-white px-2 py-0.5 text-xs font-semibold text-gray-800 uppercase">
                {month}
            </div>
        </div>
    );
}