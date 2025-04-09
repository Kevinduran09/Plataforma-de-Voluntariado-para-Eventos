import { API_URL } from "~/core/apidirection";

export type accountapiInterface = {
    fetchData: (id: string) => Promise<Response>;
};



export const accountApi = {
    fetchData: async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/usuarios/${id}`);
            return response.json();
        } catch (error) {
            console.error('Error fetching user profile: ', error);
            throw error;
        }
    },
    updateData: async (id: string, data: any) => {
        try {
            const response = await fetch(`${API_URL}/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error(`Error updating user: ${response.statusText}`);
            }

            return response.json();
        } catch (error) {
            console.error('Error updating user profile: ', error);
            throw error;
        }
    },
};
