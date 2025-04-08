import type { Evento } from "~/features/EventDashboard/domain/EventDashboard";

export interface RootObject {
    evento: Evento;
    eventoId: string;
    fecha_inscripcion: Date;
    id: string;
    usuarioId: string;
}
