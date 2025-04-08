import { use, useEffect, useState } from "react";
import { data, useLoaderData, useNavigate } from "react-router";
import '../styles/buttonsStyles.css';
import '../styles/eventStyle.css';
import type { Route } from '.react-router/types/app/+types/root';
import type { Evento } from "../domain/EventDashboard";
import { GetEventDashboard } from "../useCases/useCaseEventDashboard";

import InscriptionEvents from "../ui/InscriptionEvents";
import EventCard from "../ui/EventCard";
import useAuthStore from "~/store/useAuthStore";
import { type userInterface } from "~/features/login/domain/login";


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "EVENTOS VOLUNTARIADO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function clientLoader() {

  try {
    const response = await GetEventDashboard();
    const user = useAuthStore.getState().user;
    return { data: response, user: user }
  
  } catch (error) {
    console.log(error);
    const user = useAuthStore.getState().user;
    return { data: [], status: 500,user:user }
  }
  
  
  
}



export default function EventDashboardPage() {

  const { data: eventos, user, status } = useLoaderData<{ data: Evento[], user: userInterface, status: number | undefined }>();

  console.log(eventos.length,status);
  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Eventos Cercanos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          eventos.length === 0 && status === 500 ? (
            <p>No hay eventos disponibles.</p>
          ) : (
            eventos.map((evento) => (
              <EventCard key={evento.id} evento={evento} />
            ))
          )
        }
      </div>

      {user.id ? (
        <InscriptionEvents />
      )
        : ''
      }
    </div>
  );
}
