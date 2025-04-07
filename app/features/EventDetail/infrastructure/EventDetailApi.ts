export type EventDetailapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<any>;
    isSubscribe: (idEvent: string, idUser: string) => Promise<any>;
};

export const EventDetailApi = {
    fetchData: async (url: string) => {
        try {
            const response = await fetch(url);
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
            const response = await fetch(`http://localhost:3000/inscripciones?usuarioId=${idUser}&eventoId=${idEvent}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }
           return await response.json();
        } catch (error) {
            console.error('Error en la API:', error);
            throw error;
        }
    },
    completeTask:async (name:String)=>{
        try {
            const response = await fetch('')
        } catch (error) {
            console.error('error compleating to task:',error);
            throw error
        }
    }
};