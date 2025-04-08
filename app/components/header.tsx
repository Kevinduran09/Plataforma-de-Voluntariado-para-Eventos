import { useState } from "react";
import { Link } from "react-router";
import useAuthStore from "~/store/useAuthStore";

const headerLinks = [
    {
        title: 'Explore',
        url: '/explore',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-safari"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 16l2 -6l6 -2l-2 6l-6 2" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>
    },
    {
        title: 'Community',
        url: '/community',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-users-group"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1" /><path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M17 10h2a2 2 0 0 1 2 2v1" /><path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M3 13v-1a2 2 0 0 1 2 -2h2" /></svg>
    },
    {
        title: 'Calendar',
        url: '/calendar',
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" /><path d="M16 3v4" /><path d="M8 3v4" /><path d="M4 11h16" /><path d="M7 14h.013" /><path d="M10.01 14h.005" /><path d="M13.01 14h.005" /><path d="M16.015 14h.005" /><path d="M13.015 17h.005" /><path d="M7.01 17h.005" /><path d="M10.01 17h.005" /></svg>
    }
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuth } = useAuthStore();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="w-full flex items-center justify-between py-5 px-5 border-b-2 border-gray-200 bg-white sticky top-0 z-50">
            {/* Logo */}
            <div className="flex items-center">
                <Link className="text-4xl font-semibold" to="/eventDashboard" onClick={()=>setIsOpen(false)}>
                    <span className="text-black">Volunt</span>
                    <span className="text-green-500">Hub</span>
                </Link>
            </div>

            {/* Botón de menú hamburguesa - visible solo en móvil */}
            <button
                className="lg:hidden text-3xl focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`icon icon-tabler icons-tabler-outline icon-tabler-category-2 ${isOpen? 'rotate-60':'rotate-0'} transition-all duration-300`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
            </button>

            {/* Menú completo - responsive */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-5 lg:p-0`}>
                {/* Links principales */}
                <nav className="mb-6 lg:mb-0">
                    <ul className="flex flex-col lg:flex-row gap-6">
                        {headerLinks.map((link) => (
                            <li key={link.title}>
                                <Link
                                    to={link.url}
                                    className="font-semibold hover:text-green-400 flex items-center gap-2 py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="text-xl">{link.icon}</span>
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Sección de usuario */}
                {isAuth ? (
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-gray-200">
                        <Link
                            to="/help"
                            className="font-semibold hover:text-green-400 flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12h.01" />
                                <path d="M15 12h.01" />
                                <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
                                <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
                            </svg>
                            Help
                        </Link>

                        <Link
                            to="/createevent"
                            className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 transition-all flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3v18" />
                                <path d="M3 12h18" />
                            </svg>
                            Create Event
                        </Link>

                        <Link
                            to="/profile"
                            className="flex items-center gap-2"
                            onClick={() => setIsOpen(false)}
                        >
                            <img
                                className="rounded-full w-10 h-10"
                                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                alt="Profile"
                            />
                            <span className="lg:hidden">My Profile</span>
                        </Link>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="font-semibold text-green-500 hover:text-green-600 flex items-center gap-2 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                            <path d="m10 17 5-5-5-5" />
                            <path d="M15 12H3" />
                        </svg>
                        INICIAR SESIÓN
                    </Link>
                )}
            </div>
        </header>
    );
}