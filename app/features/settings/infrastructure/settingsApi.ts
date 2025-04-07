export type settingsapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const settingsApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}