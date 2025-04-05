import React, { useState, useEffect } from 'react';
import useAuthStore from '~/store/useAuthStore';
import { GetInscriptionEvents } from '../useCases/useCaseEventDashboard';
import type { Inscripciones } from '../domain/EventDashboard';

export default function InscriptionEvents() {
    const [eventsInscription, setEventsInscription] = useState<Inscripciones[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const user = useAuthStore.getState().user;

    useEffect(() => {
        const fetchEvents = async () => {
            if (!user) {
                setError('Usuario no autenticado');
                setLoading(false);
                return;
            }

            try {
                const events = (await GetInscriptionEvents('2')) || []; 
                console.log(events);
                
                setEventsInscription(events);
            } catch (err) {
                setError('Error al cargar los eventos');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [user]);

 

    return (
        <div>
            <h2 className="text-2xl font-bold mt-8 mb-4">Mis Eventos Registrados</h2>
            <div className="bg-white rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        {/* Aquí podrías mapear los eventos de inscripción */}
                    </div>
                </div>
                <ul>
                    {eventsInscription.length > 0 ? (
                        eventsInscription.map((evento, index) => (
                            <li key={index} className="py-2">
                                {evento.evento.nombre} • {new Date(evento.fecha_inscripcion).toLocaleDateString()} • {evento.evento.lugar}
                            </li>
                        ))
                    ) : (
                        <li>No hay eventos registrados.</li>
                    )}
                </ul>
                <div className="w-full flex justify-center">
                    <button
                        id="btnVerTodos"
                        className="mt-4 w-fit bg-blue-500 text-white py-2 px-3 rounded-lg transition-all duration-300"
                    >
                        Ver Todos Mis Eventos
                    </button>
                </div>
            </div>
        </div>
    );
}
