const API_URL =
    import.meta.env.VITE_PRODUCCION === "production"
        ? import.meta.env.VITE_API_URL_PRODUCCION
        : "http://localhost:3000";

export const EventDashboardApi = {
    getInfo: async () => {
        const response = await fetch(`${API_URL}/eventos`);
        return response.json();
    },
    getEventsByUserLimit: async (userId: string) => {
        const response = await fetch(`${API_URL}/inscripciones?usuarioId=${userId}&_embed=evento&_limit=4`)
        return response.json()
    }
}