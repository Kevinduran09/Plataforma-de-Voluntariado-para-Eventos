export type ExploreapiInterface = {
    fetch: (url: string, options?: RequestInit) => Promise<Response>;
};



export const ExploreApi = {
    fetch: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}