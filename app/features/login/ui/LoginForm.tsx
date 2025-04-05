import React, { useState } from 'react';
import { Form, useFetcher } from 'react-router-dom';

export default function LoginForm() {
    const fetcher = useFetcher();
    const errors = fetcher.data?.errors || {};
    const [login, setLogin] = useState({
        email: '',
        password: '',
    });

    function handleLogin(event: { target: { name: any; value: any; }; }) {
        const { name, value } = event.target;
        setLogin((prev) => ({ ...prev, [name]: value }));
    }

    return (
        
            <fetcher.Form method="post" className='mt-5'>
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-lg font-medium text-gray-700"
                    >
                        Correo electronico
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3"
                        placeholder="correoelectronico@example.com"
                        required
                        onChange={handleLogin}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-lg font-medium text-gray-700"
                    >
                        Tu Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="bg-gray-100 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-3"
                        placeholder="Contraseña"
                        required
                        onChange={handleLogin}
                    />
                </div>
                {errors.data ?? (
                    <div className='text-center mb-2'>
                        <span className="text-red-600">{errors.general}</span>
                    </div>
                )}
                <div className="flex items-center mb-6">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label
                        htmlFor="remember"
                        className="ml-2 text-sm font-medium text-gray-700"
                    >
                        Recuérdame
                    </label>
                </div>
                <button
                    type="submit"
                    className="w-full text-white font-semibold bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-sm px-5 py-3 text-center transition-all duration-150"
                >
                    Iniciar Sesión
                </button>
            </fetcher.Form>

    
    );
}
