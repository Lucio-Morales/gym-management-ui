import { useState } from 'react';

// Definición de tipos para los datos de ejemplo (Mock Data)
interface Usuario {
    id: number;
    nombre: string;
    email: string;
    rol: 'Admin' | 'Editor' | 'Usuario';
    estado: 'Activo' | 'Inactivo';
}

// Datos de Mockup: Una lista de usuarios de ejemplo
const usuariosMock: Usuario[] = [
    { id: 1, nombre: 'Ana García', email: 'ana@ejemplo.com', rol: 'Admin', estado: 'Activo' },
    { id: 2, nombre: 'Carlos Ruiz', email: 'carlos@ejemplo.com', rol: 'Editor', estado: 'Activo' },
    { id: 3, nombre: 'Beatriz Díaz', email: 'bea@ejemplo.com', rol: 'Usuario', estado: 'Inactivo' },
    { id: 4, nombre: 'David Morán', email: 'david@ejemplo.com', rol: 'Editor', estado: 'Activo' },
    { id: 5, nombre: 'Elena Soto', email: 'elena@ejemplo.com', rol: 'Usuario', estado: 'Activo' },
];

// Componente de Tarjeta de Estadísticas Reutilizable
const StatCard = ({ titulo, valor, icono }: { titulo: string; valor: string; icono: string }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center">
        <div className="text-3xl mr-4">{icono}</div>
        <div>
            <p className="text-sm text-gray-500">{titulo}</p>
            <p className="text-2xl font-semibold text-gray-800">{valor}</p>
        </div>
    </div>
);

export const AdminPanel = () => {
    // Estado para simular la navegación entre secciones (aunque solo mostraremos una)
    const [seccionActiva, setSeccionActiva] = useState('Dashboard');

    const menuItems = ['Dashboard', 'Usuarios', 'Configuración', 'Reportes'];

    return (
        <div className="min-h-screen bg-gray-50 flex font-sans">
            {/* 1. Barra Lateral de Navegación (Sidebar) */}
            <aside className="w-64 bg-white shadow-md p-6 flex flex-col border-r border-gray-100">
                <div className="flex items-center mb-10">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full mr-3"></div>
                    <h1 className="text-2xl font-bold text-gray-900">Admin<span className='text-indigo-600'>Pro</span></h1>
                </div>

                <nav className="flex-grow">
                    <ul className="space-y-2">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setSeccionActiva(item)}
                                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors duration-150 flex items-center ${seccionActiva === item
                                            ? 'bg-indigo-50 text-indigo-700 font-medium'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                                        }`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mt-auto border-t pt-4 border-gray-100">
                    <button className="w-full text-left px-4 py-2 rounded-lg text-red-600 hover:bg-red-50">
                        Cerrar Sesión
                    </button>
                </div>
            </aside>

            {/* Contenedor Principal */}
            <div className="flex-1 flex flex-col">

                {/* 2. Encabezado (Header) */}
                <header className="bg-white shadow-sm p-4 flex items-center justify-between border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800">{seccionActiva}</h2>
                    <div className="flex items-center space-x-4">
                        <input
                            type="search"
                            placeholder="Buscar..."
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none"
                        />
                        <div className="relative">
                            <img src={`https://api.dicebear.com/8.x/adventurer/svg?seed=admin`} alt="Admin" className="w-10 h-10 rounded-full border-2 border-indigo-100" />
                            <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400" />
                        </div>
                        <div>
                            <p className='font-medium text-gray-800'>Admin User</p>
                            <p className='text-xs text-gray-500'>admin@empresa.com</p>
                        </div>
                    </div>
                </header>

                {/* 3. Área de Contenido Principal */}
                <main className="flex-1 p-8 space-y-8">

                    {/* Sección de Tarjetas de Estadísticas */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard titulo="Usuarios Totales" valor="1,284" icono="👥" />
                        <StatCard titulo="Nuevos Suscriptores (Este mes)" valor="45" icono="📈" />
                        <StatCard titulo="Tickets de Soporte Pendientes" valor="7" icono="🎫" />
                    </section>

                    {/* Sección de la Tabla de Datos (Mock) */}
                    <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold text-gray-800">Gestión de Usuarios</h3>
                            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center">
                                <span className="mr-2">+</span> Añadir Nuevo Usuario
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="border-b border-gray-200 text-gray-500">
                                    <tr>
                                        <th className="p-4 font-medium">Nombre</th>
                                        <th className="p-4 font-medium">Email</th>
                                        <th className="p-4 font-medium">Rol</th>
                                        <th className="p-4 font-medium">Estado</th>
                                        <th className="p-4 font-medium text-right">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    {usuariosMock.map((usuario) => (
                                        <tr key={usuario.id} className="hover:bg-gray-50">
                                            <td className="p-4 flex items-center">
                                                <img src={`https://api.dicebear.com/8.x/initials/svg?seed=${usuario.nombre}`} alt={usuario.nombre} className="w-8 h-8 rounded-full mr-3 bg-gray-100" />
                                                {usuario.nombre}
                                            </td>
                                            <td className="p-4">{usuario.email}</td>
                                            <td className="p-4">
                                                <span className={`px-2 py-0.5 rounded text-xs font-medium ${usuario.nombre === 'Ana García' ? 'bg-purple-100 text-purple-800' :
                                                        usuario.rol === 'Editor' ? 'bg-blue-100 text-blue-800' :
                                                            'bg-gray-100 text-gray-800'
                                                    }`}>
                                                    {usuario.rol}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${usuario.estado === 'Activo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                                    }`}>
                                                    <span className={`mr-1.5 h-2 w-2 rounded-full ${usuario.estado === 'Activo' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                                    {usuario.estado}
                                                </span>
                                            </td>
                                            <td className="p-4 text-right space-x-2">
                                                <button className="text-gray-400 hover:text-indigo-600 p-1.5 rounded hover:bg-indigo-50">✏️</button>
                                                <button className="text-gray-400 hover:text-red-600 p-1.5 rounded hover:bg-red-50">🗑️</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Paginación Mock */}
                        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 text-sm text-gray-500">
                            <p>Mostrando {usuariosMock.length} de {usuariosMock.length} usuarios</p>
                            <div className='flex space-x-1'>
                                <button className='px-3 py-1 border border-gray-200 rounded hover:bg-gray-50'>Anterior</button>
                                <button className='px-3 py-1 border border-gray-200 rounded bg-indigo-50 text-indigo-700'>1</button>
                                <button className='px-3 py-1 border border-gray-200 rounded hover:bg-gray-50'>Siguiente</button>
                            </div>
                        </div>
                    </section>

                </main>

                {/* Pie de Página (Footer) */}
                <footer className="bg-white p-6 text-center border-t border-gray-100 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} AdminPro Dashboard. Todos los derechos reservados.
                </footer>
            </div>
        </div>
    );
};