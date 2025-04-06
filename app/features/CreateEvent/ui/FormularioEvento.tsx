import { useState } from 'react';
import { Link } from 'react-router';
import DropZone from "../infrastructure/DropZone";
import TagsInput from "../infrastructure/TagsInput";
import { CreateEventApi } from "../infrastructure/CreateEventApi";
import type { Tag } from "react-tag-input";

export const FormularioEvento: React.FC = () => {
    const [formData, setFormData] = useState({
        eventTitle: '',
        date: '',
        time: '',
        location: '',
        category: '',
        description: '',
        volunteersNeeded: '',
        requiredSkills: '',
        optionalSkills: '',
        ageRequirement: '',
        additionalRequirements: '',
    });

    const [tags, setTags] = useState<Tag[]>([]);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formDataToSend = new FormData();

        // Agregar campos del formulario
        formDataToSend.append('title', formData.eventTitle);
        formDataToSend.append('date', formData.date);
        formDataToSend.append('time', formData.time);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('category', formData.category);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('volunteersNeeded', formData.volunteersNeeded);
        formDataToSend.append('requiredSkills', formData.requiredSkills);
        formDataToSend.append('optionalSkills', formData.optionalSkills);
        formDataToSend.append('ageRequirement', formData.ageRequirement);
        formDataToSend.append('additionalRequirements', formData.additionalRequirements);
        formDataToSend.append('tasks', JSON.stringify(tags.map(tag => tag.text)));

        // Agregar imagen si existe
        if (imageFile) {
            formDataToSend.append('image', imageFile);
        }

        try {
            const response = await CreateEventApi.createEvent(formDataToSend);
            console.log('Evento creado:', response);
        } catch (error) {
            console.error('Error al crear evento:', error);
        }




        // datos enviados
        const formDataObject = {
            title: formDataToSend.get('title') as string,
            date: formDataToSend.get('date') as string,
            time: formDataToSend.get('time') as string,
            location: formDataToSend.get('location') as string,
            category: formDataToSend.get('category') as string,
            description: formDataToSend.get('description') as string,
            volunteersNeeded: formDataToSend.get('volunteersNeeded') as string,
            requiredSkills: formDataToSend.get('requiredSkills') as string,
            optionalSkills: formDataToSend.get('optionalSkills') as string,
            ageRequirement: formDataToSend.get('ageRequirement') as string,
            additionalRequirements: formDataToSend.get('additionalRequirements') as string,
            tasks: JSON.parse(formDataToSend.get('tasks') as string),
            image: formDataToSend.get('image') instanceof File 
              ? (formDataToSend.get('image') as File).name 
              : 'No image'
          };
        
          console.log('📤 Datos a enviar:', formDataObject);
    };

    return (
        <form className="space-y-6 p-6 rounded-lg" onSubmit={handleSubmit}>
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
                    value={formData.eventTitle}
                    onChange={handleInputChange}
                    placeholder="Ingrese el título del evento"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
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
                        value={formData.date}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
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
                        value={formData.time}
                        onChange={handleInputChange}
                        className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
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
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Ingrese la ubicación del evento"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
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
                    value={formData.category}
                    onChange={handleInputChange}
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-700"
                    required
                >
                    <option value="" disabled>Seleccione la categoría del evento</option>
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
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Describa su evento y las actividades a realizar"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900 h-24"
                    style={{ maxHeight: '200px', minHeight: "100px" }}
                    required
                ></textarea>
            </div>

            {/* Componente drag and drop */}
            <div>
                <label className="block text-sm font-medium text-gray-900">
                    Imagen de portada para el evento
                </label>
                <DropZone onImageUpload={(file) => setImageFile(file)} />
            </div>

            {/* Titulo voluntarios */}
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
                    id="volunteersNeeded"
                    value={formData.volunteersNeeded}
                    onChange={handleInputChange}
                    min="1"
                    placeholder="Ej: 10"
                    className="mt-1 w-full p-3 rounded-lg bg-gray-100 text-gray-900"
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
                            id="requiredSkills"
                            value={formData.requiredSkills}
                            onChange={handleInputChange}
                            placeholder="Lista separada por comas"
                            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
                        />
                    </div>
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">
                            Opcionales (ej: conocimientos técnicos)
                        </label>
                        <input
                            type="text"
                            id="optionalSkills"
                            value={formData.optionalSkills}
                            onChange={handleInputChange}
                            placeholder="Lista separada por comas"
                            className="w-full p-3 rounded-lg bg-gray-100 text-gray-900"
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
                        id="ageRequirement"
                        value={formData.ageRequirement}
                        onChange={handleInputChange}
                        className="p-3 rounded-lg bg-gray-100 text-gray-900"
                        required
                    >
                        <option value="" disabled>Seleccione una opción</option>
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
                <label className="block text-sm font-medium text-gray-900">
                    Tareas a realizar
                </label>
                <TagsInput onTagsChange={setTags} />
            </div>

            {/* Requisitos adicionales */}
            <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-900">
                    Requisitos adicionales
                </label>
                <textarea
                    id="additionalRequirements"
                    value={formData.additionalRequirements}
                    onChange={handleInputChange}
                    placeholder="Ej: Certificación en primeros auxilios, disponibilidad los fines de semana..."
                    className="w-full p-3 rounded-lg bg-gray-100 text-gray-900 min-h-[100px]"
                    style={{ maxHeight: '200px', minHeight: "100px" }}
                    required
                />
            </div>

            {/* Botones */}
            <div className="grid grid-cols-2 gap-6">
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
                    <button
                        type="submit"
                        className="w-400px p-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition mr-4"
                    >
                        Guardar Evento
                    </button>
                    <button
                        type="submit"
                        className="w-400px p-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                    >
                        Publicar Evento
                    </button>
                </div>
            </div>
        </form>
    );
};