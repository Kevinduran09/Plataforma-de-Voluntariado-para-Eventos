export type ${featureName}apiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const ${featureName}Api = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}