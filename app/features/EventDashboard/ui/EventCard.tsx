import React from 'react'
import type { Evento } from '../domain/EventDashboard'
import { useNavigate } from 'react-router'

export default function EventCard({evento}: {evento: Evento}) {
    const navigate = useNavigate()

    const handleShare = async () => {
        try {
            await navigator.share({
                title: evento.nombre,
                text: evento.descripcion,
                url: 'http:localhost:5173/eventdetail/' + evento.id,
            });
        } catch (error) {
            console.log('Error al compartir:', error);
            
            
        }
    };
  return (
      <div key={evento.id} className="bg-[#00c84621] p-4 rounded-lg shadow">
          <p className="text-sm font-semibold text-gray-600 categoria">{evento.categoria}</p>
          <h3 className="text-lg font-bold text-gray-800 nombre">{evento.nombre}</h3>
          <p className="text-gray-600 descripcion">{evento.descripcion}</p>
          <p className="text-gray-500 text-sm lugar">{evento.lugar} • {new Date(evento.fecha).toLocaleDateString()}</p>
          <p className="text-gray-500 text-sm voluntarios-requeridos">{evento.voluntarios_requeridos} voluntarios requeridos</p>
          <div className="mt-2 acciones">
              <button
                  
                  className=" btnMasInfo bg-green-500 text-white px-3 py-1 rounded mr-2 transition-all duration-300"
                  onClick={() => navigate(`/eventdetail/${evento.id}`)}
              >
                  Más Info
              </button>
              <button className="btnCompartir" onClick={handleShare}>Compartir</button>
          </div>
      </div>
  )
}
