import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ProfileView from '../ui/ProfileView';
import ProfileEditForm from '../ui/ProfileEditForm';
import type { userProfile } from '../domain/account';

export async function clientLoader() {
    // En una app real, aquí harías la llamada a la API
    const mockUserData = {
        id: "2",
        nombre: "María Gómez",
        correo: "mariagomez@example.com",
        lugar_residencia: "Cartago",
        numero_contacto: "+506 7777-8888",
        foto_perfil: "/default-avatar.png"
    };
    return { user: mockUserData };
}

export default function AccountPage() {
    const { user: initialUser } = useLoaderData() as { user: userProfile };
    const [user, setUser] = useState<userProfile>(initialUser);
    const [isEditing, setIsEditing] = useState(false);
    const navigate = useNavigate();

    const handleSave = async (updatedUser: userProfile) => {
        try {
            // En una app real, esto llamaría a tu API
            // await updateUserProfile(updatedUser);
            // setUser(updatedUser);
            // setIsEditing(false);
        } catch (error) {
            console.error("Error al guardar los cambios:", error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">Mi Perfil</h1>

            {isEditing ? (
                <ProfileEditForm
                    user={user}
                    onSave={handleSave}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <ProfileView
                    user={user}
                    onEdit={() => setIsEditing(true)}
                />
            )}
        </div>
    );
}