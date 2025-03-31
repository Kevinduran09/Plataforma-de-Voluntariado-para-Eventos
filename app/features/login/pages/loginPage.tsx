import { redirect, type ActionFunctionArgs } from 'react-router';
import LoginCard from '../ui/LoginCard';
import { Getlogin } from '../useCases/useCaselogin';
import { use } from 'react';
import useAuthStore from '~/store/useAuthStore';

export async function clientLoader() {


}
export async function clientAction({ request }: ActionFunctionArgs) {
    
    try {
     
        const formData = await request.formData();
        const loginData = Object.fromEntries(formData);

        const user = await Getlogin(loginData);

        if (!user) {
            return { errors: { general: "Credenciales inválidas." } };
        }

        useAuthStore.getState().setAuth(user[0]);
        return redirect("/");
    } catch (error) {
        
        console.error("Error en la autenticación:", error);
        return { errors: { general: "Ocurrió un error inesperado. Por favor, inténtalo de nuevo más tarde." } };
    }
}
export default function loginPage() {

    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <LoginCard />
        </div>
    );
}