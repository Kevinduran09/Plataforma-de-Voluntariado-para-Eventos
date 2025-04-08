import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import type { Inscripciones } from '../domain/EventDashboard';

export const ItemPillComponent: React.FC<{
    index: number,
    evento: Inscripciones
}> = ({ index, evento }) => {

    // Hook de navegación de React Router
    const navigate = useNavigate();

    // Función para manejar el clic y redirigir
    const handleClick = () => {
        navigate(`/eventdetail/${evento.id}`); // Redirige a /evento/:id
    };

    return (
        <li
            key={index}
            className="py-2 hover:bg-gray-100 cursor-pointer" // Estilo hover y cursor
            onClick={handleClick} // Manejador de clic
        >
            <div className='flex justify-items-stretch flex-wrap gap-3 items-center'>
                <img
                    src={`https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80`}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full mr-2"
                />
                <span>{evento.evento.titulo}</span>
                •
                <span className="text-sm text-gray-500">
                    {new Date(evento.fecha_inscripcion).toLocaleDateString()}
                </span>
                •
                <span className="text-sm text-gray-500">{evento.evento.ubicacion}</span>
            </div>
        </li>
    );
};