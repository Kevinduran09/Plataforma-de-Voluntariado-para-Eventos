import {z, type TypeOf} from 'zod'

export const eventSchema= z.object({
    titulo: z.string().min(5, 'El titulo debe ser mayor a 5 caracteres'),
    fecha: z.string().refine(val => !isNaN(Date.parse(val)), "Fecha inválida").refine(val=>{
        const selectedDate = new Date(val)
        const today = new Date
        today.setHours(0,0,0,0)
        return selectedDate>=today
    },
    "La fecha no puede ser anterior o igual al dia de hoy"    
),
    hora: z.string().min(1, "La hora es requerida").regex(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/, "Formato HH:MM inválido").refine((time) => {
        const [hours, minutes] = time.split(':').map(Number);
        const minHour = 8; // 8:00 AM
        const maxHour = 17; // 6:00 PM

        return (
            (hours > minHour || (hours === minHour && minutes >= 0)) &&
            (hours < maxHour || (hours === maxHour && minutes <= 0))
        );
    }, "La hora debe estar entre 8:00 y 18:00"),
    ubicacion: z.string().min(1,'La ubicacion es requerida'),
    categoria: z.string().nonempty("Selecciona una categoría"),
    descripcion: z.string().min(20, "Mínimo 20 caracteres"),
    voluntariosRequeridos: z.coerce.number().min(1, "Mínimo 1 voluntario"),
    habilidadesRequeridas: z.string().optional(),
    habilidadesOpcionales: z.string().optional(),
    edadRequerida: z.string().nonempty("Selecciona una opción"),
    requisitosAdicionales: z.string().optional(),
    tareas: z.array(z.object({ nombre: z.string() })).min(1, "Agrega al menos 1 tarea"),
    imagen: z.instanceof(File).optional(),
    organizador_id: z.string().optional()
})


export type typeEventSchema = z.infer<typeof eventSchema>