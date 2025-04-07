export type inscriptionsapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const inscriptionsApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}