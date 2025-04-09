import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";

import "./app.css";
import ServiceWorker from "./core/ServiceWorker";
import { useEffect } from "react";
import Toast from "./components/Toast";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     navigator.serviceWorker
  //       .register("/sw.js")
  //       .then((registration) => {
  //         console.log("Service Worker registrado con éxito:", registration);

  //       })
  //       .catch((error) => {
  //         console.error("Error al registrar el Service Worker:", error);
  //       });
  //   }
  // }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/volunthub-192x192.png" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <script src="/registerService.js" />
      </body>
    </html>
  );
}

export default function App() {
  return (

    <>

      <Outlet />

    </>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto h-full">
      <div className="font-mono flex justify-center items-center flex-col gap-3 w-full">
        <h2 className="text-4xl md:text-5xl font-bold text-green-500 text-center">Pagina no encontrada</h2>
        <span className=" text-gray-600 text-2xl md:text-4xl">Error : {message}</span>
        <img src="/NotFount.svg" className="w-full xl:w-1/3" alt="Not Found" />
      </div>
    </main>
  );
}
