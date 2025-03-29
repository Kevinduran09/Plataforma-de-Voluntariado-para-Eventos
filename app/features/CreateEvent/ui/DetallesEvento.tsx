import { Link } from 'react-router';
import DropZone from "../useCases/DropZone";
import TagsInput from "../useCases/TagsInput";



export default function FormularioEvento() {
    return (


        <form className="space-y-6 p-6 bg-white shadow-md rounded-lg">

            <header>
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 text-left mb-4 p-3">
                        Detalles del evento
                    </h1>
                </div>
            </header>
            {/* Título del Evento */}
            <div>
                <label htmlFor="event_title" className="block text-sm font-medium text-gray-900">
                    Título del Evento
                </label>
                <input
                    type="text"
                    id="event_title"
                    placeholder="Ingrese el título del evento"
                    className="mt-1 w-full p-3  rounded-lg bg-gray-50 text-gray-900"
                    required
                />
            </div>

            {/* Fecha y Hora */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-900">
                        Fecha
                    </label>
                    <input
                        type="date"
                        id="date"
                        className="mt-1 w-full p-3  rounded-lg bg-gray-50 text-gray-900"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-900">
                        Hora
                    </label>
                    <input
                        type="time"
                        id="time"
                        className="mt-1 w-full p-3  rounded-lg bg-gray-50 text-gray-900"
                        required
                    />
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
                    placeholder="Ingrese la ubicación del evento"
                    className="mt-1 w-full p-3  rounded-lg bg-gray-50 text-gray-900"
                    required
                />
            </div>

            {/* Categoría */}
            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-900">
                    Categoría
                </label>
                <select
                    id="category"
                    className="mt-1 w-full p-3  rounded-lg bg-gray-50 text-gray-900"
                    required
                >
                    <option value="" selected disabled>Seleccione la categoría del evento</option>
                    <option value="conferencia">Conferencia</option>
                    <option value="taller">Taller</option>
                    <option value="seminario">Seminario web</option>
                    <option value="otro">Otro</option>
                </select>
            </div>

            {/* Descripción */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                    Descripción
                </label>
                <textarea
                    id="description"
                    placeholder="Describa su evento y las actividades a realizar"
                    className="mt-1 w-full p-3  rounded-lg bg-gray-50 text-gray-900 h-24"
                    style={{ maxHeight: '200px', minHeight: "100px" }}
                    required
                ></textarea>
            </div>


            {/* Componente drag and drop */}
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                    Imagen de portada para el evento
                </label>
                <DropZone onImageUpload={(imageUrl) => console.log(imageUrl)} />
            </div>

            {/* Titulo voluntatios */}
            <div>
                <h1 className="text-2xl font-bold text-gray-800 text-left mb-4 p-3">
                    Requisitos para los voluntarios
                </h1>
            </div>


            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Número de voluntarios necesarios
                </label>
                <input
                    type="number"
                    min="1"
                    placeholder="Ej: 10"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-50 text-gray-900"
                />
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
                            placeholder="Lista separada por comas"
                            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">
                            Opcionales (ej: conocimientos técnicos)
                        </label>
                        <input
                            type="text"
                            placeholder="Lista separada por comas"
                            className="w-full p-3 rounded-lg bg-gray-50 text-gray-900"
                        />
                    </div>
                </div>
            </div>

            {/* Requisitos de edad */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Requisitos de edad *
                </label>
                <div className="flex items-center space-x-4">
                    <select
                        className="p-3 rounded-lg bg-gray-50 text-gray-900"
                        required
                    >
                        <option value="" disabled selected>Seleccione una opción</option>
                        <option value="8+">Mayores de 8 años</option>
                        <option value="12+">Mayores de 12 años</option>
                        <option value="16+">Mayores de 16 años</option>
                        <option value="18+">Mayores de 18 años</option>
                        <option value="all">Todas las edades bienvenidas</option>
                    </select>
                </div>
            </div>
            
             {/* Tarea a realizar (tag input) */}
             <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-900">
                   Tareas a realizar
                </label>
                <TagsInput />
            </div>




            {/* Requisitos adicionales */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Requisitos adicionales
                </label>
                <textarea
                    placeholder="Ej: Certificación en primeros auxilios, disponibilidad los fines de semana..."
                    className="w-full p-3 rounded-lg bg-gray-50 text-gray-900 min-h-[100px]"
                    style={{ maxHeight: '200px', minHeight: "100px" }}
                    required
                />
            </div>


            {/* Botones */}
            <div className="grid grid-cols-2 gap-6">

                {/* Botón de cancelar */}
                <div>
                    <Link to="/">
                        <button
                            type="button"
                            className="w-400px p-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-800 transition"
                        >
                            Cancelar
                        </button>
                    </Link>
                </div>



                <div className="flex gap-4 ml-auto">
                    {/* Botón de guardar */}
                    <button
                        type="submit"
                        className="w-400px p-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition mr-4"
                    >
                        Guardar Evento
                    </button>
                    {/* Botón de publicar */}
                    <button
                        type="submit"
                        className="w-400px p-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                    >
                        Publicar Evento
                    </button>
                </div>

            </div>

        </form >
    );
}
