import ExploreRepository from '../domain/ExploreRepository';
import { ExploreApi } from '../infrastructure/ExploreApi'
export const GetExplore = async () => {
    const repository = new ExploreRepository(ExploreApi);
    return repository.getData();
};

export const SubscribeExplore = async (data:any) => {
    const repository = new ExploreRepository(ExploreApi);
    return repository.subscribe(data);
};