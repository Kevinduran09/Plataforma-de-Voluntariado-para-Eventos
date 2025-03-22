

export const EventDashboardApi = {
    getInfo: async () => {
        const response = await fetch('http://localhost:3000/eventos/');
        return response.json();
    },
}