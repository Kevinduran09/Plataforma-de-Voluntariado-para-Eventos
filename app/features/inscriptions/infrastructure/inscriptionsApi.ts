import { API_URL } from "~/core/apidirection";

export type myInscriptionsapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
    getEventsByUser:(userId: string) => Promise<Response>;
};



export const InscriptionsAPI = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
    getEventsByUser: async (userId: string) => {
        const response = await fetch(`${API_URL}/inscripciones?usuarioId=${userId}&_embed=evento`)
        return response.json()
    },
}