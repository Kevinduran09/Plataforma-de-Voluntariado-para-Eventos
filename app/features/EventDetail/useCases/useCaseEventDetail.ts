import EventDetailRepository from '../domain/EventDetailRepository';
import { EventDetailApi } from '../infrastructure/EventDetailApi';

export const GetEventDetail = async (id: string) => {
    const repository = new EventDetailRepository(EventDetailApi);
    return repository.getData(id);
};

export const SubscribeEventDetail = async (data: any) => {
    const repository = new EventDetailRepository(EventDetailApi);
    return repository.subscribe(data);
};