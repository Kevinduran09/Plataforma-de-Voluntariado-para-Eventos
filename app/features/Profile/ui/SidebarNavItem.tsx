import React from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarNavItemProps {
    to: string;
    icon: string;
    children: React.ReactNode;
}

export default function SidebarNavItem({ to, icon, children }: SidebarNavItemProps) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${isActive
                    ? 'bg-blue-100 text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
            }
        >
            <span className="mr-3 text-lg">{icon}</span>
            {children}
        </NavLink>
    );
}