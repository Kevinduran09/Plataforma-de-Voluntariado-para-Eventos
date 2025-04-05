export interface Evento {
    categoria: string;
    descripcion: string;
    fecha: Date;
    id: string;
    lugar: string;
    nombre: string;
    organizador_id: number;
    tareas: Tarea[];
    voluntarios_requeridos: number;
}

export interface Tarea {
    estado: string;
    nombre: string;
}

export interface Inscripciones {
    evento: Evento;
    eventoId: string;
    fecha_inscripcion: Date;
    id: string;
    usuarioId: string;
}