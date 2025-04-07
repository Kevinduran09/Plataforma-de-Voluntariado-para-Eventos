import React, { useState } from 'react';
import {type  userProfile } from '../domain/account';
interface ProfileEditFormProps {
    user: userProfile;
    onSave: (user: userProfile) => void;
    onCancel: () => void;
}

const ProfileEditForm: React.FC<ProfileEditFormProps> = ({ user, onSave, onCancel }) => {
    const [editedUser, setEditedUser] = useState<userProfile>({ ...user });
    const [profileImage, setProfileImage] = useState<string>(user.foto_perfil);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    setProfileImage(event.target.result as string);
                    setEditedUser(prev => ({ ...prev, foto_perfil: event.target?.result as string }));
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(editedUser);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
                <div className="flex flex-col items-center">
                    <img 
                        src={profileImage} 
                        alt="Foto de perfil" 
                        className="w-24 h-24 rounded-full object-cover border-2 border-gray-200 mb-4"
                    />
                    <label className="cursor-pointer text-blue-600 hover:text-blue-800">
                        Cambiar foto
                        <input 
                            type="file" 
                            accept="image/*" 
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                </div>

                <div className="flex-1 space-y-4">
                    <div>
                        <label className="block text-gray-700 mb-1">Nombre completo</label>
                        <input
                            type="text"
                            name="nombre"
                            value={editedUser.nombre}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            name="correo"
                            value={editedUser.correo}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 mb-1">Número de contacto</label>
                    <input
                        type="tel"
                        name="numero_contacto"
                        value={editedUser.numero_contacto ?? ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">Lugar de residencia</label>
                    <input
                        type="text"
                        name="lugar_residencia"
                        value={editedUser.lugar_residencia ?? ''}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                </div>
            </div>

            <div className="flex justify-end space-x-4 pt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Guardar Cambios
                </button>
            </div>
        </form>
    );
};

export default ProfileEditForm;