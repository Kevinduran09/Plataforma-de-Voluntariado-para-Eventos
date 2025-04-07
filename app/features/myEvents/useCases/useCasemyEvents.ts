import myEventsRepository from '../domain/myEventsRepository';
import {myEventsApi} from '../infrastructure/myEventsApi'
export const GetmyEvents = async () => {
    const repository = new myEventsRepository(myEventsApi);
    return repository.getData();
};

export const SubscribemyEvents = async (data:any) => {
    const repository = new myEventsRepository(myEventsApi);
    return repository.subscribe(data);
};