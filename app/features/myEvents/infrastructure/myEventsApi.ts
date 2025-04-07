export type myEventsapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const myEventsApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}