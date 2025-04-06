import React from 'react';
import ExploreComponent from '../ui/ExploreComponent';
import type { Route } from '.react-router/types/app/+types/root';
import WorkInProgress from '~/components/WorkInProgress';
export function meta({ }: Route.MetaArgs) {
  return [
    { title: "APP EVENTOS VOLUNTARIADO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function clientLoader() {
  // Logica de consulta de datos
}

export default function ExplorePage() {
  return (
    <div>
      <WorkInProgress />
    </div>
  );
}