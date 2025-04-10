import { Link } from 'react-router';
import DropZone from "../ui/DropZone";
import TagsInput from "../ui/TagsInput";
import { PostCreateEvent } from '../useCases/useCaseCreateEvent';
import useAuthStore from '~/store/useAuthStore';
import { eventSchema, type typeEventSchema } from '../domain/CreateEvent';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '~/store/useToastStore';



export const FormularioEvento: React.FC = () => {
    const { openToast } = useToast()
    const { user } = useAuthStore()
    const { register, handleSubmit, formState: { errors }, setValue, control } = useForm<typeEventSchema>({
        resolver: zodResolver(eventSchema),
        defaultValues: {
            tareas: [],
            organizador_id: user.id
        }
    })


    const onSubmit = async (data: typeEventSchema) => {


        try {
            const result = await PostCreateEvent(data);
            console.log(result);
            
            if (result.savedOffline) {
                openToast('Guardado offline', `El evento ${data.titulo} se publicara cuando haya conexion`, 'success')

            } else {
                openToast('Guardado exitoso', `El evento ${data.titulo} se publico`, 'success')
            }
            if (result && !result.savedOffline) {
                openToast('Evento publicado', `El evento ${data.titulo} se publico`)
            }
        } catch (error) {
            console.error("Error:", error);
            openToast('No se pudo enviar el evento', 'Intente mas tarde', 'error')

        }
    };

    return (
        <div className="space-y-6 p-6 rounded-lg" >
            <header>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 text-left mb-4 p-3">
                        Detalles del evento
                    </h1>
                </div>
            </header>

            {/* Título del Evento */}
            <div>
                <label htmlFor="eventTitle" className="block text-sm font-medium text-gray-900">
                    Título del Evento
                </label>
                <input
                    type="text"
                    id="eventTitle"

                    {...register('titulo')}
                    placeholder="Ingrese el título del evento"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"

                />
                {errors.titulo && (
                    <p className="text-red-500 text-sm mt-1">{errors.titulo.message}</p>
                )}
            </div>

            {/* Fecha y Hora */}
            <div className="grid grid-cols-2 gap-4 ">
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-900">
                        Fecha
                    </label>
                    <input
                        type="date"
                        id="date"
                        {...register('fecha')}
                        className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                        required
                    />
                    {errors.fecha && (
                        <p className="text-red-500 text-sm mt-1">{errors.fecha.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-900">
                        Hora
                    </label>
                    <input
                        type="time"
                        id="time"
                        min={'07:00'}
                        max={'19:30'}
                        {...register('hora')}
                        className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                        required
                    />
                    {errors.hora && (
                        <p className="text-red-500 text-sm mt-1">{errors.hora.message}</p>
                    )}
                </div>
            </div>

            {/* Ubicación */}
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900">
                    Ubicación
                </label>
                <input
                    type="text"
                    id="location"
                    {...register('ubicacion')}
                    placeholder="Ingrese la ubicación del evento"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                    required
                />
                {errors.ubicacion && (
                    <p className="text-red-500 text-sm mt-1">{errors.ubicacion.message}</p>
                )}
            </div>

            {/* Categoría */}
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                    Categoría
                </label>
                <select
                    id="category"
                    {...register('categoria')}
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-700"

                >
                    <option value="" selected disabled>Seleccione la categoría del evento</option>
                    <option value="conferencia">Conferencia</option>
                    <option value="taller">Taller</option>
                    <option value="seminario">Seminario web</option>
                    <option value="otro">Otro</option>
                </select>
                {errors.categoria && (
                    <p className="text-red-500 text-sm mt-1">{errors.categoria.message}</p>
                )}
            </div>

            {/* Descripción */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                    Descripción
                </label>
                <textarea
                    id="description"
                    {...register('descripcion')}
                    placeholder="Describa su evento y las actividades a realizar"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900 h-24"
                    style={{ maxHeight: '200px', minHeight: "100px" }}
                    required
                ></textarea>
                {errors.descripcion && (
                    <p className="text-red-500 text-sm mt-1">{errors.descripcion.message}</p>
                )}
            </div>

            {/* Componente drag and drop */}
            <div>
                <label className="block text-sm font-medium text-gray-900">
                    Imagen de portada para el evento
                </label>
                <DropZone onImageUpload={(file) => setValue('imagen', file)} />
            </div>

            {/* Titulo voluntarios */}
            <div>
                <h2 className="text-2xl font-bold text-gray-800 text-left mb-4 p-3">
                    Requisitos para los voluntarios
                </h2>
            </div>

            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Número de voluntarios necesarios
                </label>
                <input
                    type="number"
                    id="volunteersNeeded"
                    {...register('voluntariosRequeridos')}
                    min="1"
                    placeholder="Ej: 10"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                />
                {errors.voluntariosRequeridos && (
                    <p className="text-red-500 text-sm mt-1">{errors.voluntariosRequeridos.message}</p>
                )}
            </div>

            {/* Habilidades requeridas */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Habilidades requeridas
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">
                            Obligatorias (ej: guía, primeros auxilios)
                        </label>
                        <input
                            type="text"
                            id="requiredSkills"
                            {...register('habilidadesRequeridas')}
                            placeholder="Lista separada por comas"
                            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                        />
                        {errors.habilidadesRequeridas && (
                            <p className="text-red-500 text-sm mt-1">{errors.habilidadesRequeridas.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">
                            Opcionales (ej: conocimientos técnicos)
                        </label>
                        <input
                            type="text"
                            id="optionalSkills"
                            {...register('habilidadesOpcionales')}
                            placeholder="Lista separada por comas"
                            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                        />
                        {errors.habilidadesOpcionales && (
                            <p className="text-red-500 text-sm mt-1">{errors.habilidadesOpcionales.message}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Requisitos de edad */}
            <div className="">
                <label className="block text-sm font-medium text-gray-900">
                    Edad Requerida*
                </label>
                <div className="space-x-4">
                    <select
                        id="ageRequirement"
                        {...register('edadRequerida')}
                        className="p-3 rounded-lg mt-2 bg-gray-100 text-gray-900"
                        required
                    >
                        <option value="" selected disabled>Seleccione una opción</option>
                        <option value="8+">Mayores de 8 años</option>
                        <option value="12+">Mayores de 12 años</option>
                        <option value="16+">Mayores de 16 años</option>
                        <option value="18+">Mayores de 18 años</option>
                        <option value="all">Todas las edades bienvenidas</option>
                    </select>
                    {errors.edadRequerida && (
                        <p className="text-red-500 text-sm mt-2">{errors.edadRequerida.message}</p>
                    )}
                </div>
            </div>

            {/* Tarea a realizar (tag input) */}
            <div>
                <label className="block text-sm font-medium text-gray-900 ">
                    Tareas a realizar
                </label>
                <TagsInput onTagsChange={(tags) => setValue('tareas', tags.map(tag => ({ nombre: tag.text })))} />
                {errors.tareas && (
                    <p className="text-red-500 text-sm mt-1">{errors.tareas.message}</p>
                )}
            </div>

            {/* Requisitos adicionales */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Requisitos adicionales
                </label>
                <textarea
                    id="additionalRequirements"
                    {...register('requisitosAdicionales')}
                    placeholder="Ej: Certificación en primeros auxilios, disponibilidad los fines de semana..."
                    className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 min-h-[100px]"
                    style={{ maxHeight: '200px', minHeight: "100px" }}
                    required
                />
                {errors.requisitosAdicionales && (
                    <p className="text-red-500 text-sm mt-1">{errors.requisitosAdicionales.message}</p>
                )}
            </div>

            {/* Botones */}
            <div className="grid grid-cols-2 gap-6">
                <div>
                    <Link to="/eventDashboard">
                        <button
                            type="button"
                            className="w-400px p-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-800 transition"
                        >
                            Cancelar
                        </button>
                    </Link>
                </div>

                <div className="flex gap-4 ml-auto">

                    <button
                        onClick={handleSubmit(onSubmit)}
                        className="w-400px p-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                    >
                        Publicar Evento
                    </button>
                </div>
            </div>
        </div>
    );
};