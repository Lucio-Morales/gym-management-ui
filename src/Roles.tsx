import {
    Check,
    Dumbbell,
    ShieldCheck,
    Smartphone
} from "lucide-react";

const roles = [
    {
        title: "Administrador",
        subtitle: "Control total del gimnasio",
        color: "emerald",
        icon: ShieldCheck,
        items: [
            "Gestión de clientes",
            "Gestión de caja",
            "Control de membresías",
            "Ventas de la tienda",
            "Alta de usuarios",
            "Asignación de roles",
            "Reportes",
        ],
    },
    {
        title: "Entrenador",
        subtitle: "Gestión deportiva",
        color: "cyan",
        icon: Dumbbell,
        items: [
            "Crear rutinas",
            "Editar ejercicios",
            "Seguimiento",
            "Historial de cargas",
            "Evaluaciones",
            "Asignar entrenamientos",
        ],
    },
    {
        title: "Cliente",
        subtitle: "Experiencia Mobile",
        color: "orange",
        icon: Smartphone,
        items: [
            "Ver rutina",
            "Registrar pesos",
            "Historial",
            "Progreso",
            "Notificaciones",
            "Calendario",
        ],
    },
];

const colors = {
    emerald:
        "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",

    cyan:
        "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",

    orange:
        "text-orange-400 bg-orange-500/10 border-orange-500/20",
};

export default function Roles() {
    return (
        <section
            id="roles"
            className="py-32"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <span className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">

                        Experiencias personalizadas

                    </span>

                    <h2 className="text-5xl font-black mt-6">

                        Una plataforma.

                        <span className="block text-emerald-400">

                            Tres experiencias.

                        </span>

                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">

                        Cada usuario visualiza únicamente las herramientas
                        necesarias para realizar su trabajo.

                    </p>

                </div>

                <div className="grid lg:grid-cols-3 gap-8 mt-20">

                    {roles.map((role) => {
                        const Icon = role.icon;

                        return (
                            <div
                                key={role.title}
                                className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl overflow-hidden hover:-translate-y-2 transition"
                            >
                                <div className="p-8">

                                    <div
                                        className={`inline-flex p-4 rounded-2xl border ${colors[role.color as keyof typeof colors]
                                            }`}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>

                                    <h3 className="text-3xl font-bold mt-6">

                                        {role.title}

                                    </h3>

                                    <p className="text-slate-400 mt-2">

                                        {role.subtitle}

                                    </p>

                                </div>

                                <div className="border-t border-slate-800 p-8">

                                    <div className="space-y-4">

                                        {role.items.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-center gap-3"
                                            >
                                                <Check className="w-5 h-5 text-emerald-400" />

                                                <span>{item}</span>

                                            </div>
                                        ))}

                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}