import React from 'react';
import type { userInterface } from '~/features/login/domain/login';

interface ProfileHeaderProps {
    user: userInterface | null;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="flex-shrink-0">
                    <img
                        className="h-12 w-12 rounded-full"
                        src={'/default-avatar.png'}
                        alt="User avatar"
                    />
                </div>
                <div className="ml-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        {user?.nombre || 'Usuario'}
                    </h1>
                    <p className="text-gray-500">
                        {user?.correo || 'correo@ejemplo.com'}
                    </p>
                </div>
            </div>
        </header>
    );
}