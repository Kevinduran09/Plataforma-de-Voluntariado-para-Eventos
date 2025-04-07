import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import '../styles/buttonsStyles.css';
import '../styles/eventStyle.css';
import type { Route } from '.react-router/types/app/+types/root';
import type { Evento } from "../domain/EventDashboard";
import { GetEventDashboard } from "../useCases/useCaseEventDashboard";

import InscriptionEvents from "../ui/InscriptionEvents";
import EventCard from "../ui/EventCard";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EVENTOS VOLUNTARIADO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {

  const eventos = [
    {
      id: "1",
      categoria: "Ambiental",
      nombre: "Reforestación en el parque",
      descripcion: "Evento de reforestación para mejorar las áreas verdes.",
      fecha: "2025-04-10",
      lugar: "Parque Nacional",
      voluntarios_requeridos: 20,
      organizador_id: "1",
      tareas: [
        { nombre: "Repartir bolsas y guantes", estado: "completado" },
        { nombre: "Recolectar plásticos", estado: "pendiente" },
        { nombre: "Clasificar residuos", estado: "pendiente" }
      ]
    },
    {
      id: "2",
      categoria: "Ambiental",
      nombre: "Limpieza de Playa",
      descripcion: "Actividad para recolectar desechos y limpiar la costa.",
      fecha: "2025-04-20",
      lugar: "Playa Tamarindo",
      voluntarios_requeridos: 25,
      organizador_id: "3",
      tareas: [
        { nombre: "Repartir bolsas y guantes", estado: "pendiente" },
        { nombre: "Recolectar plásticos", estado: "pendiente" },
        { nombre: "Clasificar residuos", estado: "pendiente" }
      ]
    },
    {
      id: "69c1",
      nombre: "Limpieza de Playa",
      fecha: "2025-04-20",
      time: "09:00",
      lugar: "Playa del Sol",
      categoria: "Medio Ambiente",
      descripcion: "Un evento para limpiar la playa y crear conciencia ambiental.",
      voluntarios_requeridos: 20,
      requiredSkills: "Trabajo en equipo, limpieza",
      optionalSkills: "Primeros auxilios",
      ageRequirement: "18+",
      additionalRequirements: "Llevar guantes y protector solar",
      tareas: [
        "Recolectar basura",
        "Separar reciclables",
        "Asistir a voluntarios"
      ],
      image: "base64string_or_filename.jpg"
    },
  ];

  return { data: eventos }
}



export default function EventDashboardPage() {

  const { data: eventos } = useLoaderData<{ data: Evento[] }>();

  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Eventos Cercanos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {eventos.map((evento) => (
          <EventCard evento={evento} />
        ))}
      </div>

      {true ? (
        <InscriptionEvents/>
      )
      :''
      }
    </div>
  );
}
