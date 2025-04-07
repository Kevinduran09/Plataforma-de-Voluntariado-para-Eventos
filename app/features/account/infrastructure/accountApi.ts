export type accountapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const accountApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}