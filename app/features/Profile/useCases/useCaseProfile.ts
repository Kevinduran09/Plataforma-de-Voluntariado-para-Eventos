import ProfileRepository from '../domain/ProfileRepository';
import {ProfileApi} from '../infrastructure/ProfileApi'
export const GetProfile = async () => {
    const repository = new ProfileRepository(ProfileApi);
    return repository.getData();
};

export const SubscribeProfile = async (data:any) => {
    const repository = new ProfileRepository(ProfileApi);
    return repository.subscribe(data);
};