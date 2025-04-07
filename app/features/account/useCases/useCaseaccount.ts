import accountRepository from '../domain/accountRepository';
import {accountApi} from '../infrastructure/accountApi'
export const Getaccount = async () => {
    const repository = new accountRepository(accountApi);
    return repository.getData();
};

export const Subscribeaccount = async (data:any) => {
    const repository = new accountRepository(accountApi);
    return repository.subscribe(data);
};