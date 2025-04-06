import React, { useState, useEffect } from 'react';
import useAuthStore from '~/store/useAuthStore';
import { GetInscriptionEvents } from '../useCases/useCaseEventDashboard';
import type { Inscripciones } from '../domain/EventDashboard';
import { ItemPillComponent } from './ItemPillComponent';

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
            {
                eventsInscription.length > 0 ? (
                    <div>
                        <h2 className="text-2xl font-bold mt-8 mb-4">Mis Eventos Registrados</h2>
                        <div className="bg-white rounded-lg p-4">

                            <ul>
                                {
                                    eventsInscription.map((evento, index) => (
                                        <ItemPillComponent key={index} index={index} evento={evento} />
                                    ))
                                }
                            </ul>
                            <div className="w-full flex justify-center">
                                <button

                                    className="btnVerTodos mt-4 w-fit bg-blue-500 text-white py-2 px-3 rounded-lg transition-all duration-300"
                                >
                                    Ver Todos Mis Eventos
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-center items-center mt-24">
                        <p className="text-lg text-center font-semibold">Todavia no te has inscrito a ningun evento, qué esperas.</p>
                    </div>
                )
            }
        </div>
    );
}
