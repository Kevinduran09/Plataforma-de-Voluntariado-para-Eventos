import settingsRepository from '../domain/settingsRepository';
import {settingsApi} from '../infrastructure/settingsApi'
export const Getsettings = async () => {
    const repository = new settingsRepository(settingsApi);
    return repository.getData();
};

export const Subscribesettings = async (data:any) => {
    const repository = new settingsRepository(settingsApi);
    return repository.subscribe(data);
};