import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ProfileView from '../ui/ProfileView';
import ProfileEditForm from '../ui/ProfileEditForm';
import type { userProfile } from '../domain/account';
import useAuthStore from '~/store/useAuthStore';
import { Getaccount } from '../useCases/useCaseaccount';

export async function clientLoader() {
    // En una app real, aquí harías la llamada a la API
   const user = useAuthStore.getState().user

   try {
        const userAccount = await Getaccount(user.id)
        if(userAccount){
            return {user:user}
        }
   } catch (error) {
        console.error(error);
        throw error
        
   }
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