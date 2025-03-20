import CreateEventRepository from '../domain/CreateEventRepository';
import {CreateEventApi} from '../infrastructure/CreateEventApi'
export const GetCreateEvent = async () => {
    const repository = new CreateEventRepository(CreateEventApi);
    return repository.getData();
};

export const SubscribeCreateEvent = async (data:any) => {
    const repository = new CreateEventRepository(CreateEventApi);
    return repository.subscribe(data);
};