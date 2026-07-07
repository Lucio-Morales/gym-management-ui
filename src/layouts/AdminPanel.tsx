import { useState } from 'react';

// El tipo Usuario y usuariosMock permanecen idénticos
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: 'Admin' | 'Editor' | 'Usuario';
    estado: 'Activo' | 'Inactivo';
}

const usuariosMock: Usuario[] = [
    { id: 1, nombre: 'Ana García', email: 'ana@ejemplo.com', rol: 'Admin', estado: 'Activo' },
    { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@ejemplo.com', rol: 'Editor', estado: 'Activo' },
    { id: 3, nombre: 'Beatriz Díaz', email: 'bea@ejemplo.com', rol: 'Usuario', estado: 'Inactivo' },
    { id: 4, nombre: 'David Morán', email: 'david@ejemplo.com', rol: 'Editor', estado: 'Activo' },
    { id: 5, nombre: 'Elena Soto', email: 'elena@ejemplo.com', rol: 'Usuario', estado: 'Activo' },
];

const StatCard = ({ titulo, valor, icono }: { titulo: string; valor: string; icono: string }) => (
    <div className="bg-stone-950 p-6 rounded-lg shadow-sm border border-stone-800 flex items-center">
        <div className="text-3xl mr-4">{icono}</div>
        <div>
            <p className="text-sm text-stone-500">{titulo}</p>
            <p className="text-2xl font-semibold text-white">{valor}</p>
        </div>
    </div>
);

export const AdminPanel = () => {
    const [seccionActiva, setSeccionActiva] = useState('Dashboard');
    const menuItems = ['Dashboard', 'Usuarios', 'Configuración', 'Reportes'];

    return (
        <div className="min-h-screen bg-black flex font-sans">
            <aside className="w-64 bg-black shadow-md p-6 flex flex-col border-r border-stone-800">
                <div className="flex items-center mb-10">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full mr-3"></div>
                    <h1 className="text-2xl font-bold text-white">Admin<span className='text-indigo-600'>Pro</span></h1>
                </div>

                <nav className="grow">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setSeccionActiva(item)}
                                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-150 flex items-center ${seccionActiva === item
                                        ? 'bg-indigo-950 text-indigo-300 font-medium'
                                        : 'text-stone-400 hover:bg-stone-900 hover:text-white'
                                        }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto border-t pt-4 border-stone-800">
                    <button className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-950/50">
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="bg-black shadow-sm p-4 flex items-center justify-between border-b border-stone-800">
                    <h2 className="text-xl font-semibold text-white">{seccionActiva}</h2>
                    <div className="flex items-center space-x-4">
                        <input
                            type="search"
                            placeholder="Buscar..."
                            className="px-4 py-2 bg-stone-900 border border-stone-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-white"
                        />
                        <div className="relative">
                            <img src={`https://api.dicebear.com/8.x/adventurer/svg?seed=admin`} alt="Admin" className="w-10 h-10 rounded-full border-2 border-stone-700" />
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-black bg-green-500" />
                        </div>
                        <div>
                            <p className='font-medium text-white'>Admin User</p>
                            <p className='text-xs text-stone-500'>admin@empresa.com</p>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 space-y-8">
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard titulo="Usuarios Totales" valor="1,284" icono="👥" />
                        <StatCard titulo="Nuevos Suscriptores (Este mes)" valor="45" icono="📈" />
                        <StatCard titulo="Tickets de Soporte Pendientes" valor="7" icono="🎫" />
                    </section>

                    <section className="bg-black p-6 rounded-lg shadow-sm border border-stone-800">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-white">Gestión de Usuarios</h3>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center">
                                <span className="mr-2">+</span> Añadir Nuevo Usuario
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="border-b border-stone-800 text-stone-500">
                                    <tr>
                                        <th className="p-4 font-medium">Nombre</th>
                                        <th className="p-4 font-medium">Email</th>
                                        <th className="p-4 font-medium">Rol</th>
                                        <th className="p-4 font-medium">Estado</th>
                                        <th className="p-4 font-medium text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-800 text-stone-300">
                                    {usuariosMock.map((usuario) => (
                                        <tr key={usuario.id} className="hover:bg-stone-900">
                                            <td className="p-4 flex items-center">
                                                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${usuario.nombre}`} alt={usuario.nombre} className="w-8 h-8 rounded-full mr-3 bg-stone-700" />
                                                {usuario.nombre}
                                            </td>
                                            <td className="p-4 text-stone-400">{usuario.email}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${usuario.nombre === 'Ana García' ? 'bg-purple-950 text-purple-300' :
                                                    usuario.rol === 'Editor' ? 'bg-blue-950 text-blue-300' :
                                                        'bg-stone-800 text-stone-300'
                                                    }`}>
                                                    {usuario.rol}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${usuario.estado === 'Activo' ? 'bg-green-950 text-green-300' : 'bg-red-950 text-red-300'
                                                    }`}>
                                                    <span className={`mr-1.5 h-2 w-2 rounded-full ${usuario.estado === 'Activo' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    {usuario.estado}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right space-x-2">
                                                <button className="text-stone-500 hover:text-indigo-400 p-1.5 rounded hover:bg-stone-800">✏️</button>
                                                <button className="text-stone-500 hover:text-red-400 p-1.5 rounded hover:bg-stone-800">🗑️</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-800 text-sm text-stone-500">
                            <p>Mostrando {usuariosMock.length} de {usuariosMock.length} usuarios</p>
                            <div className='flex space-x-1'>
                                <button className='px-3 py-1 border border-stone-800 rounded hover:bg-stone-900'>Anterior</button>
                                <button className='px-3 py-1 border border-stone-800 rounded bg-stone-800 text-white'>1</button>
                                <button className='px-3 py-1 border border-stone-800 rounded hover:bg-stone-900'>Siguiente</button>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="bg-black p-6 text-center border-t border-stone-800 text-sm text-stone-600">
                    &copy; {new Date().getFullYear()} AdminPro Dashboard. Todos los derechos reservados.
                </footer>
            </div>
        </div>
    );
};