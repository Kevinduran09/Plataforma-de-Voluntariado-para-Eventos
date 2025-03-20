export const EventDashboardApi = {
    getInfo: async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        return response.json();
    },
}