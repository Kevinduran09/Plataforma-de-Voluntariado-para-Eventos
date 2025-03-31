import { create } from "zustand";
import type { userInterface } from "~/features/login/domain/login";
type store = {
    isAuth: boolean
    user: userInterface,
    setAuth: (user: userInterface) => void
}


const useAuthStore = create<store>()((set) => ({
    isAuth: false,
    user:{
        contrasena: "",
        correo: "",
        id: "",
        lugar_residencia: "",
        nombre: "",
        numero_contacto: ""
    },
    setAuth: (user) => set((state) => ({
        user: user,
        isAuth: true
    }))
}))

export default useAuthStore