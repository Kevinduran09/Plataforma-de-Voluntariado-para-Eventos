
export type CreateEventapiInterface = {
    createEvent: (data: any) => Promise<any>;
};



export const CreateEventApi = {
  createEvent: async (formData: FormData) => {
    const response = await fetch('http://localhost:3000/eventos', {
      method: 'POST',
      body: formData,
    });
    return response.json();
  }
}