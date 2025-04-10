import type { Tarea } from '~/features/EventDashboard/domain/EventDashboard';
import EventDetailRepository from '../domain/EventDetailRepository';
import { EventDetailApi } from '../infrastructure/EventDetailApi';

export const GetEventDetail = async (id: string) => {
    const repository = new EventDetailRepository(EventDetailApi);
    return repository.getData(id);
};

export const isUserSubscribed = async (userId: string, eventId: string) => {
    const repository = new EventDetailRepository(EventDetailApi);
    return repository.Issubscribe(userId,eventId);
};

export const SubscribeToEvent = async (userId:string,eventId:string)=>{
    const repository = new EventDetailRepository(EventDetailApi)
    return repository.SuscribeToEvent(userId,eventId)
}
export const UnSubscribetoEvent = async (userId: string, eventId: string) => {
    const repository = new EventDetailRepository(EventDetailApi)
    return repository.unSubscribetoEvent(userId, eventId)
}
export const CompleteTask = async (new_tareas: Tarea[], idEvento: string)=>{
    const repository = new EventDetailRepository(EventDetailApi)
    return repository.CompleteTask(new_tareas, idEvento)
}