import type { Evento, Inscripciones, Tarea } from "~/features/EventDashboard/domain/EventDashboard";

export function organizeEventsByDate(events: Inscripciones[]) {
    const now = new Date();
    console.log(events);
    
    const upcomingEvents = events
        .filter(event => new Date(event.evento.fecha) >= now)
        .sort((a, b) => new Date(a.evento.fecha).getTime() - new Date(b.evento.fecha).getTime());

    const pastEvents = events
        .filter(event => new Date(event.evento.fecha) < now)
        .sort((a, b) => new Date(b.evento.fecha).getTime() - new Date(a.evento.fecha).getTime());

    return { upcomingEvents, pastEvents };
}

export function calculateTaskProgress(tasks: Tarea[]) {
    const completed = tasks.filter(t => t.estado === 'completado').length;
    return {
        completed,
        total: tasks.length,
        percentage: Math.round((completed / tasks.length) * 100)
    };
}

export function isPastEvent(event:Evento){
    const now = new Date()
    
    const eventDate = new Date(event.fecha)

    return eventDate < now
}