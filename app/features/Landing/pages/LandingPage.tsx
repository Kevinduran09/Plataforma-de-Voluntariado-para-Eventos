import React from 'react';
import LandingComponent from '../ui/LandingComponent';
import type { Route } from '.react-router/types/app/+types/root';



export function meta({}: Route.MetaArgs) {
  return [
    { title: "APP EVENTOS VOLUNTARIADO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export async function clientLoader() {
    
}

export default function LandingPage() {
    return (
        <div>
            <LandingComponent/>
        </div>
    );
}