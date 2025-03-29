const API_URL =
    process.env.NODE_ENV === "production"
        ?  process.env.REACT_APP_API_URL
        : "http://localhost:3000";

export const EventDashboardApi = {
    getInfo: async () => {
        const response = await fetch('http://localhost:3000/eventos/');
        return response.json();
    },
}