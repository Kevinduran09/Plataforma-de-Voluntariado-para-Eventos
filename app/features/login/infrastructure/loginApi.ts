import type { loginmodel, userInterface } from "../domain/login";

export type loginapiInterface = {
    fetchLogin: (loginData: loginmodel) => Promise<userInterface[]>;
};



export const loginApi= {
    fetchLogin: async (loginData: loginmodel)=> {
        console.log(loginData);
        
        const response = await fetch(`http://localhost:3000/usuarios?correo=${loginData.email}&password=${loginData.password}`);
        return response.json();
    },
}