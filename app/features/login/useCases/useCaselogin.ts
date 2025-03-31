import type { userInterface } from '../domain/login';
import loginRepository from '../domain/loginRepository';
import { loginApi } from '../infrastructure/loginApi'
export const Getlogin = async (data: any) => {
    const repository = new loginRepository(loginApi);
    return repository.login(data)
   
};

export const Subscribelogin = async (data: any) => {
    const repository = new loginRepository(loginApi);
    return repository.subscribe(data);
};