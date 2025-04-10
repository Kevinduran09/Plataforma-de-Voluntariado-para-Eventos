
import { savePostRequest } from "public/idb";
import type { typeEventSchema } from "../domain/CreateEvent";

export type CreateEventapiInterface = {
    createEvent: (data: typeEventSchema) => Promise<any>;
};
interface ServiceWorkerRegistrationWithSync extends ServiceWorkerRegistration {
    sync: {
        register: (tag: string) => Promise<void>;
    };
}

const API_URL =
    import.meta.env.VITE_PRODUCCION === "production"
        ? import.meta.env.VITE_API_URL_PRODUCCION
        : "http://localhost:3000";


export const CreateEventApi = {
 
    createEvent: async (data: typeEventSchema) => {
        console.log(data);
        
       try {
           const response = await fetch(`${API_URL}/eventos`, {
               method: 'POST',
               headers: {
                   'Content-Type': 'application/json',
               },
               body: JSON.stringify(data),
           });
           const result = await response.json();

           if (result.savedOffline) {
               console.log("Datos guardados offline. Se enviarán cuando haya conexión.");
           }

           return result;
       } catch (error) {
          console.error('Error al enviar el evento',error);
          throw error
          
       }
    },


    UploadImage: async(file:File)=>{
        const formData = new FormData();
        formData.append('file', file);
        formData.append('cloud_name', import.meta.env.VITE_CLOUD_NAME)
        formData.append('upload_preset', import.meta.env.VITE_UPLOAD_PRESET)
        try {
            const response = await fetch(`https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME}/image/upload`, {
                method: 'POST',
                body: formData
            })
            if (!response.ok) {
                throw new Error('Error uploading image')
            }

            return await response.json()
        } catch (error) {
            console.error('Error uploading image:', error)
            throw error
        }
    }
}