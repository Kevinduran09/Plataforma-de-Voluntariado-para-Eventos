import type { typeEventSchema } from '../domain/CreateEvent';
import CreateEventRepository from '../domain/CreateEventRepository';
import {CreateEventApi} from '../infrastructure/CreateEventApi'
export const PostCreateEvent = async (data:typeEventSchema) => {
    const repository = new CreateEventRepository(CreateEventApi);
    return repository.postData(data);
};

export const SubscribeCreateEvent = async (data:any) => {
    const repository = new CreateEventRepository(CreateEventApi);
    return repository.subscribe(data);
};