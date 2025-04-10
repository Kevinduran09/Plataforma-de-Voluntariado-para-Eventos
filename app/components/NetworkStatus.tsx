import React, { useEffect } from "react";
import { useToast } from "~/store/useToastStore"; 

const NetworkStatus: React.FC = () => {
    const { openToast } = useToast();

    useEffect(() => {
        const handleOnline = () => {
            openToast("Conexión restaurada", "¡Ahora estás conectado a Internet!", "success", 3000);
        };

        const handleOffline = () => {
            openToast("Sin conexión", "Parece que no tienes acceso a Internet", "error", 3000);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, [openToast]);

    return null; 
};

export default NetworkStatus;
