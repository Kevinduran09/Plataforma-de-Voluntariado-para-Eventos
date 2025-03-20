import LandingRepository from '../domain/LandingRepository';

export const GetLanding = async () => {
    const repository = new LandingRepository();
    return repository.getData();
};

export const SubscribeLanding = async (data) => {
    const repository = new LandingRepository();
    return repository.subscribe(data);
};