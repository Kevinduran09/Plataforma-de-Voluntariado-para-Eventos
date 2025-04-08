import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { userInterface } from "~/features/login/domain/login";
type store = {
    isAuth: boolean
    user: userInterface,
    setAuth: (user: userInterface) => void
}


const useAuthStore = create<store>()(persist((set) => ({
    isAuth: false,
    user: {
        contrasena: "",
        correo: "",
        id: "",
        lugar_residencia: "",
        nombre: "",
        numero_contacto: ""
    },
    setAuth: (user) => set(() => ({
        user: user,
        isAuth: true
    }))
}),
    {
        name:'auth-store',
        storage: createJSONStorage(()=>localStorage)
    }
))

export default useAuthStore