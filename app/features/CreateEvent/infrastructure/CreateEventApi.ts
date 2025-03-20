export type CreateEventapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const CreateEventApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}