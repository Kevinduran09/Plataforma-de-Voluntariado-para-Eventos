import { API_URL } from "~/core/apidirection";

export type EventDetailapiInterface = {
    fetchData: (id: string, options?: RequestInit) => Promise<any>;
    isSubscribe: (idEvent: string, idUser: string) => Promise<any>;
    inscripeToEvent: (data: any) => Promise<any>;
};


export const EventDetailApi = {
    fetchData: async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/eventos/${id}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return response.json();
        } catch (error) {
            console.error('Error en la API:', error);
            throw error;
        }
    },
    isSubscribe: async (idEvent: string, idUser: string) => {
        try {
            const response = await fetch(`${API_URL}/inscripciones?usuarioId=${idUser}&eventoId=${idEvent}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error en la API:', error);
            throw error;
        }
    },
    completeTask: async (name: String) => {
        try {
            const response = await fetch('')
        } catch (error) {
            console.error('error compleating to task:', error);
            throw error
        }
    },
    inscripeToEvent: async (data: {}) => {
        try {
            const response = await fetch(`${API_URL}/inscripciones`, {
                method: 'POST',
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error(`Error creating inscription: ${response.statusText}`)
            }
            return await response.json()
        } catch (error) {
            console.error('erro creating inscription: ', error);
            throw error
        }
    }
};