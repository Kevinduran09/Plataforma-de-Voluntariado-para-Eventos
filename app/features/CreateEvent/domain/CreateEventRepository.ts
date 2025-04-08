
import type { z } from 'zod';
import type { CreateEventapiInterface } from '../infrastructure/CreateEventApi'
import { eventSchema, type typeEventSchema } from './CreateEvent';
class CreateEventRepository {
    static instance: CreateEventRepository;
    api: CreateEventapiInterface | undefined;
    constructor(api: CreateEventapiInterface) {
        if (CreateEventRepository.instance) {
            return CreateEventRepository.instance;
        }
        this.api = api;
        CreateEventRepository.instance = this;
    }

    async postData(data: typeEventSchema) {
        const estado = 'estado';
        data.tareas.forEach((tarea: { [key: string]: any }) => {
            tarea[estado] = 'pendiente';
        });
        console.log('tareas con estado',data);
        
        const response = await this.api?.createEvent(data);
        if (!response || response.length === 0) {
            return null;
        }
        return response;
    }

    async subscribe(data: any) {
        // Lógica para suscribirse
    }
}
export default CreateEventRepository;
