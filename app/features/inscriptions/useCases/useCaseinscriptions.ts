import inscriptionsRepository from '../domain/inscriptionsRepository';
import {inscriptionsApi} from '../infrastructure/inscriptionsApi'
export const Getinscriptions = async () => {
    const repository = new inscriptionsRepository(inscriptionsApi);
    return repository.getData();
};

export const Subscribeinscriptions = async (data:any) => {
    const repository = new inscriptionsRepository(inscriptionsApi);
    return repository.subscribe(data);
};