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
    const { isAuth } = useAuthStore()
    return (
        <header className="w-full flex items-center justify-between py-5 px-5 border-b-2 border-gray-200">
            {/* Logo */}
            <div className="w-full lg:w-auto flex flex-row justify-between lg:justify-center items-center gap-5 ">
                <Link className="text-4xl font-semibold" to="/">
                    <span className="text-black">Volunt</span>
                    <span className="text-green-500">Hub</span>
                </Link>

                {/* Botón de menú hamburguesa en móviles */}
                <button
                    className="lg:hidden text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-category-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 4h6v6h-6z" /><path d="M4 14h6v6h-6z" /><path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M7 7m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /></svg>
                </button>

                {/* Menú de navegación */}
                <nav
                    className={`absolute lg:relative top-16 lg:top-auto left-0 w-full lg:w-auto lg:flex flex-col lg:flex-row items-center bg-white lg:bg-transparent p-5 lg:p-0 shadow-md lg:shadow-none transition-all ${isOpen ? "block" : "hidden"
                        } lg:block`}
                >
                    <ul className="flex flex-col lg:flex-row gap-4">
                        {headerLinks.map((link) => (
                            <li key={link.title}>
                                <Link
                                    to={link.url}
                                    className="font-semibold hover:text-green-400 flex gap-2"
                                >
                                    {link.icon}
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Botones de ayuda, crear evento y perfil */}
            {isAuth ? (
                <div className="hidden lg:flex items-center gap-5">
                    <Link to="/help" className="font-semibold">
                        Help
                    </Link>
                    <Link
                        to={"/createevent"}
                        className="bg-green-500 p-2 rounded-lg text-white hover:bg-green-600 transition-all"
                    >
                        Create Event
                    </Link>
                    <Link
                        to={'/profile'}
                    >
                        <img
                            className="rounded-full w-10 h-10"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="Profile"
                        />
                    </Link>
                </div>
            ) : (
                <Link to="/login" className="font-medium text-green-600 text-xl mr-5">
                    Iniciar Sesion
                </Link>
            )}

        </header>
    );
}
