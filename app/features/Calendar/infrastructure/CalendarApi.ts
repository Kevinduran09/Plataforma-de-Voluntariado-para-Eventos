export type CalendarapiInterface = {
    fetchData: (url: string, options?: RequestInit) => Promise<Response>;
};



export const CalendarApi = {
    fetchData: async () => {
        const response = await fetch('/api/${featureName.toLowerCase()}');
        return response.json();
    },
}