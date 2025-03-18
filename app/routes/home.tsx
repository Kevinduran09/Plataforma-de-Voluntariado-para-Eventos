import type { Route } from "./+types/home";

import { Dashboard } from "./Dashboard";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "APP EVENTOS VOLUNTARIADO" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Home() {
  return <Dashboard />;
}
