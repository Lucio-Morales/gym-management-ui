import React, { useState } from 'react';

interface LoginPageProps {
    onLogin: () => void;
}
export const LoginPage = ({ onLogin }: LoginPageProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });

        onLogin();
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            {/* Contenedor del Login */}
            <div className="bg-white w-full max-w-md p-8 rounded-xl shadow-sm border border-gray-100">

                {/* Cabecera */}
                <div className="text-center mb-8">
                    <div className="w-12 h-12 bg-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">A</span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900">Bienvenido de nuevo</h1>
                    <p className="text-gray-500 mt-2">Ingresa tus credenciales para acceder a AdminPro</p>
                </div>

                {/* Formulario */}
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            // required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all"
                            placeholder="admin@empresa.com"
                        />
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <label className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <a href="#" className="text-xs text-indigo-600 hover:underline">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <input
                            type="password"
                            // required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors duration-150 shadow-sm"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                {/* Footer del login */}
                <p className="text-center text-sm text-gray-500 mt-8">
                    ¿No tienes una cuenta?{' '}
                    <a href="#" className="text-indigo-600 font-medium hover:underline">
                        Solicitar acceso
                    </a>
                </p>
            </div>
        </div>
    );
};