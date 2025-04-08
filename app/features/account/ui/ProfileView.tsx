import React from 'react';

interface ProfileViewProps {
    user: {
        id: string;
        nombre: string;
        correo: string;
        lugar_residencia?: string | null;
        numero_contacto?: string | null;
        foto_perfil: string;
    };
    onEdit: () => void;
}

const ProfileView: React.FC<ProfileViewProps> = ({ user, onEdit }) => {
    console.log(user);
    
    return (
        <div className="space-y-6">
            <div className="flex items-center flex-wrap space-x-6">
                <img
                    src={user.foto_perfil || 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80' }
                    alt="Foto de perfil"
                    className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                    <h2 className="text-xl font-semibold">{user.nombre}</h2>
                    <p className="text-gray-600">{user.correo}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700">Información de contacto</h3>
                    <p className="mt-2 text-gray-600">
                        <span className="font-medium">Teléfono:</span> {user.numero_contacto || 'No especificado'}
                    </p>
                    <p className="mt-1 text-gray-600">
                        <span className="font-medium">Ubicación:</span> {user.lugar_residencia || 'No especificado'}
                    </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-700">Preferencias</h3>
                    <p className="mt-2 text-gray-600">Configuración de notificaciones</p>
                    <p className="mt-1 text-gray-600">Preferencias de privacidad</p>
                </div>
            </div>

            <div className="mt-8">
                <button
                    onClick={onEdit}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Editar Perfil
                </button>
            </div>
        </div>
    );
};

export default ProfileView;