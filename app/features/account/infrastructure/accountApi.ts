import { API_URL } from "~/core/apidirection";

export type accountapiInterface = {
    fetchData: (id: string) => Promise<Response>;
};



export const accountApi = {
    fetchData: async (id: string) => {
        try {
            const response = await fetch(`${API_URL}/usuarios/${id}`);

            return response.json()
        } catch (error) {
            console.error('error to fetching user profile: ', error)
            throw error
        }
    }
}
