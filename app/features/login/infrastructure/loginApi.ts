import type { loginmodel, userInterface } from "../domain/login";

export type loginapiInterface = {
    fetchLogin: (loginData: loginmodel) => Promise<userInterface[]>;
};


const API_URL =
    import.meta.env.VITE_PRODUCCION === "production"
        ? import.meta.env.VITE_API_URL_PRODUCCION
        : "http://localhost:3000";

export const loginApi= {
    fetchLogin: async (loginData: loginmodel)=> {
        console.log(loginData);
        
        const response = await fetch(`${API_URL}/usuarios?correo=${loginData.email}&password=${loginData.password}`);
        return response.json();
    },
}