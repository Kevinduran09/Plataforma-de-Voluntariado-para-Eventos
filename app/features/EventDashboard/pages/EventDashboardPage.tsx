import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import '../styles/buttonsStyles.css';
import '../styles/eventStyle.css';
import type { Route } from '.react-router/types/app/+types/root';
import type { Evento } from "../domain/EventDashboard";
import { GetEventDashboard } from "../useCases/useCaseEventDashboard";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EVENTOS VOLUNTARIADO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {
  const response = await GetEventDashboard();

  if (!response) {
    throw new Response("Error al cargar los eventos", { status: 500 });
  }
  return { data: response }
}



export default function EventDashboardPage() {

  const { data: eventos } = useLoaderData<{ data: Evento[] }>();

  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Eventos Cercanos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventos.map((evento) => (
          <div key={evento.id} className="bg-green-100 p-4 rounded-lg shadow">
            <p className="text-sm font-semibold text-gray-600 categoria">{evento.categoria}</p>
            <h3 className="text-lg font-bold text-gray-800 nombre">{evento.nombre}</h3>
            <p className="text-gray-600 descripcion">{evento.descripcion}</p>
            <p className="text-gray-500 text-sm lugar">{evento.lugar} • {new Date(evento.fecha).toLocaleDateString()}</p>
            <p className="text-gray-500 text-sm voluntarios-requeridos">{evento.voluntarios_requeridos} voluntarios requeridos</p>
            <div className="mt-2 acciones">
              <button
                id="btnMasInfo"
                className="bg-green-500 text-white px-3 py-1 rounded mr-2 transition-all duration-300"
                onClick={() => navigate(`/eventdetail/${evento.id}`)}
              >
                Más Info
              </button>
              <button id="btnCompartir" className="bg-green-500 text-white px-3 py-1 rounded">Compartir</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Mis Eventos Registrados</h2>
      <div className="bg-white rounded-lg p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            {/* <button id="btnDirecciones" className="text-blue-500 underline mr-4">Direcciones</button>
            <button id="btnCalendario" className="text-blue-500 underline">Calendario</button> */}
          </div>
        </div>
        <ul>
          <li className="">Animal Shelter Support • Mañana, 2:00 PM • Confirmado</li>
          <li className="">Literacy Workshop • Próximo lunes, 5:30 PM • Pendiente</li>
          <li className="py-2">Community Garden • Próximo sábado, 9:00 AM • Confirmado</li>
        </ul>
        <div className="w-full flex justify-center">
          <button id="btnVerTodos" className="mt-4 w-fit bg-blue-500 text-white py-2 px-3 rounded-lg transition-all duration-300">
            Ver Todos Mis Eventos
          </button>
        </div>
      </div>
    </div>
  );
}
