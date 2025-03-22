export interface Evento {
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
