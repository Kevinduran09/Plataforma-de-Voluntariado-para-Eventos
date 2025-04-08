export type Tarea = {
    nombre: string;
    estado: 'pendiente' | 'completado'
};

export type Evento = {
    id: string;
    titulo: string;
    fecha: string; // formato 'YYYY-MM-DD'
    hora: string;  // formato 'HH:mm'
    ubicacion: string;
    categoria: string;
    descripcion: string;
    voluntariosRequeridos: string;
    habilidadesRequeridas: string;
    habilidadesOpcionales: string;
    edadRequerida: string;
    requisitosAdicionales: string;
    tareas: Tarea[];
    organizador_id: string;
};
export interface Inscripciones {
    evento: Evento;
    eventoId: string;
    fecha_inscripcion: Date;
    id: string;
    usuarioId: string;
}