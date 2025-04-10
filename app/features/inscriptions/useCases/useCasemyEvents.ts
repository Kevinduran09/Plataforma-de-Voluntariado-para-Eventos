import myEventsRepository from '../domain/myEventsRepository';
import { InscriptionsAPI } from '../infrastructure/inscriptionsApi'
export const getEventsInscription = async (userId:string) => {
    const repository = new myEventsRepository(InscriptionsAPI);
    return repository.getEventsInscription(userId);
};

export const SubscribemyEvents = async (data:any) => {
    const repository = new myEventsRepository(InscriptionsAPI);
    return repository.subscribe(data);
};