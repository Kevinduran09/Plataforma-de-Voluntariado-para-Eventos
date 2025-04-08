export type myInscriptionsapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const myInscriptio = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}