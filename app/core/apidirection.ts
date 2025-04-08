export const API_URL =
    import.meta.env.VITE_PRODUCCION === "production"
        ? import.meta.env.VITE_API_URL_PRODUCCION
        : "http://localhost:3000";
