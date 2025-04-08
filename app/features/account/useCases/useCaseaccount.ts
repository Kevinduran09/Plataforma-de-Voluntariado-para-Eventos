import accountRepository from '../domain/accountRepository';
import {accountApi} from '../infrastructure/accountApi'
export const Getaccount = async (id:string) => {
    const repository = new accountRepository(accountApi);
    return repository.getData(id);
};

export const Subscribeaccount = async (data:any) => {
    const repository = new accountRepository(accountApi);
    return repository.subscribe(data);
};