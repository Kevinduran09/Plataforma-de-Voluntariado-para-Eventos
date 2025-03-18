import React from 'react'
import type { Route } from '../+types/root';
export function meta({}: Route.MetaArgs) {
  return [
    { title: "DETAIL EVENT" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export const EventDetail = () => {
  return (
    <div>EventDetail</div>
  )
}
