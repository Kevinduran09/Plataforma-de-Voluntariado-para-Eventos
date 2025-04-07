import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuthStore from '~/store/useAuthStore';
import ProfileHeader from '../ui/ProfileHeader';
import SidebarNavItem from '../ui/SidebarNavItem';
import { Outlet } from 'react-router';
export async function clientLoader() {
    
    return { data: 'holamundo' };
}

export default function ProfilePage() {
    const { data } = useLoaderData();
    const { user } = useAuthStore();

    // Navigation items
    const navItems = [
        { path: 'account', label: 'Perfil', icon: '👤' },
        { path: 'events', label: 'Mis Eventos', icon: '📅' },
        { path: 'inscriptions', label: 'Mis Inscripciones', icon: '🎟️' },
        { path: 'settings', label: 'Configuraciones', icon: '⚙️' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Profile Header */}
            

            <div className="flex flex-col md:flex-row">
                {/* Sidebar Navigation */}
                <div className="w-full md:w-64 bg-white shadow-md md:min-h-[calc(100vh-4rem)] p-4">

                    <nav className="space-y-2">
                        {navItems.map((item) => (
                            <SidebarNavItem
                                key={item.path}
                                to={item.path}
                                icon={item.icon}
                            >
                                {item.label}
                            </SidebarNavItem>
                        ))}
                    </nav>
                </div>

                {/* Main Content Area */}
                <div className="flex-1 p-6">
                    {/* <ProfileHeader user={user} /> */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}