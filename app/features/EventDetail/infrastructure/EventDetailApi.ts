import { API_URL } from "~/core/apidirection";
import type { Evento, Tarea } from "~/features/EventDashboard/domain/EventDashboard";

export type EventDetailapiInterface = {
    fetchData: (id: string, options?: RequestInit) => Promise<any>;
    isSubscribe: (idEvent: string, idUser: string) => Promise<any>;
    inscripeToEvent: (data: any) => Promise<any>;
    unSubcrip: (data: { userId: string, eventId: string }) => Promise<any>;
    changeTaskState: (new_tareas: Tarea[], idEvent: string) => Promise<any>
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
    },
    unSubcrip: async (data: { userId: string, eventId: string }) => {
        try {
            const result = await fetch(`${API_URL}/inscripciones?usuarioId=${data.userId}&eventoId=${data.eventId}`);
            if (!result) {
                throw new Error('Error catching inscription')
            }
            const inscripcion = await result.json()


            const response = await fetch(`${API_URL}/inscripciones/${inscripcion[0].id}`, {
                method: 'DELETE'
            })
            if (!response.ok) {
                throw new Error(`Error deleting inscription: ${response.statusText}`)
            }
            return await response.json()
        } catch (error) {
            console.error('error deleting inscription: ', error);
            throw error
        }
    },
    changeTaskState: async (new_tareas: Tarea[], idEvent: string) => {
        try {

            let taskResponse = await fetch(`${API_URL}/eventos/${idEvent}`, {
                method: 'PATCH',
                body: JSON.stringify({ tareas: new_tareas })
            })
            const result = await taskResponse.json();

            if (result.savedOffline) {
                console.log("Datos guardados offline. Se enviarán cuando haya conexión.");
            }

            return result;


        } catch (error) {
            console.error('error en la funcion: ', error);
            throw error
        }
    }

};