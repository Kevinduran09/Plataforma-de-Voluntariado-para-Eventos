
export type CreateEventapiInterface = {
    createEvent: (data: any) => Promise<any>;
};



export const CreateEventApi = {
 
    createEvent: async (data: any) => {
        const response = await fetch('http://localhost:3000/eventos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}