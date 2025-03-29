export type EventDetailapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<any>;
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
};