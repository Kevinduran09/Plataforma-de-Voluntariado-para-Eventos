import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EventListSection from '../ui/EventListSection';
import { organizeEventsByDate } from '../domain/eventHelper';
import type { Evento, Inscripciones, Tarea } from "~/features/EventDashboard/domain/EventDashboard";
import useAuthStore from '~/store/useAuthStore';
import { GetInscriptionEvents } from '~/features/EventDashboard';


export async function clientLoader() {

    const user = useAuthStore.getState().user;
    // const mockEvents: Evento[] = [
    //     {
    //         id: "1",
    //         titulo: "Reforestación en el parque",
    //         fecha: "2025-04-10",
    //         hora: "09:00",
    //         ubicacion: "Parque Nacional",
    //         categoria: "Ambiental",
    //         descripcion: "Evento de reforestación para mejorar las áreas verdes.",
    //         voluntariosRequeridos: "20",
    //         tareas: [
    //             { nombre: "Repartir bolsas y guantes", estado: "completado" },
    //             { nombre: "Recolectar plásticos", estado: "pendiente" },
    //             { nombre: "Clasificar residuos", estado: "pendiente" }
    //         ],
    //         organizador_id: "1",
    //         habilidadesRequeridas: '',
    //         habilidadesOpcionales: '',
    //         edadRequerida: '',
    //         requisitosAdicionales: ''
    //     },
    //     {
    //         "id": "4",
    //         "titulo": "Taller de Reciclaje",
    //         "fecha": "2025-03-15",
    //         "hora": "10:00",
    //         "ubicacion": "Centro Comunitario, San José",
    //         "categoria": "Educativo",
    //         "descripcion": "Taller práctico sobre técnicas de reciclaje en el hogar.",
    //         "voluntariosRequeridos": "15",
    //         "tareas": [
    //             {
    //                 "nombre": "Preparar materiales",
    //                 "estado": "completado"
    //             },
    //             {
    //                 "nombre": "Registrar participantes",
    //                 "estado": "completado"
    //             },
    //             {
    //                 "nombre": "Limpiar área",
    //                 "estado": "completado"
    //             }
    //         ],
    //         "organizador_id": "1",
    //         habilidadesRequeridas: '',
    //         habilidadesOpcionales: '',
    //         edadRequerida: '',
    //         requisitosAdicionales: ''
    //     },
    //     // Más eventos...
    // ];
    try {
        const events = (await GetInscriptionEvents(user.id)) || [];
        return { eventsInscription: events };
    } catch (error) {
        console.error(error);
        return {eventsInscription:[]}
    }

}

export default function inscriptionsPage() {
    const { eventsInscription } = useLoaderData() as { eventsInscription: Inscripciones[] };
    const { upcomingEvents, pastEvents } = organizeEventsByDate(eventsInscription);

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Mis Eventos</h1>

            <EventListSection
                title="Próximos Eventos"
                events={upcomingEvents}
                emptyMessage="No tienes eventos próximos"
                isPast={false}
            />

            <EventListSection
                title="Eventos Anteriores"
                events={pastEvents}
                emptyMessage="No has participado en eventos aún"
                isPast={true}
            />
        </div>
    );
}