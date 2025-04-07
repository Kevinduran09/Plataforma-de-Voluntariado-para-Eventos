class accountmodel{
    
}

export type userProfile = {
    id: string;
    nombre: string;
    correo: string;
    lugar_residencia?: string | null;
    numero_contacto?: string | null;
    foto_perfil: string;
}