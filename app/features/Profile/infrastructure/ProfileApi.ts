export type ProfileapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const ProfileApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}