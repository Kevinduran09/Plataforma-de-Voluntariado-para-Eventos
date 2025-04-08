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