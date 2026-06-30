import {
    ArrowRight,
    BarChart3,
    Bell,
    CalendarClock,
    CreditCard,
    Dumbbell,
    ShoppingBag,
    Users,
    Wallet,
} from "lucide-react";

const features = [
    {
        icon: Users,
        color: "text-emerald-400",
        title: "Gestión de Clientes",
        description:
            "Administrá socios, membresías, asistencia, historial de pagos y vencimientos desde un único lugar.",
        items: [
            "Alta de clientes",
            "Membresías",
            "Asistencia",
            "Historial",
        ],
    },
    {
        icon: Wallet,
        color: "text-cyan-400",
        title: "Gestión de Caja",
        description:
            "Controlá ingresos, egresos, arqueo diario y movimientos financieros en tiempo real.",
        items: [
            "Caja diaria",
            "Ingresos",
            "Egresos",
            "Arqueo",
        ],
    },
    {
        icon: Dumbbell,
        color: "text-teal-400",
        title: "Gestión de Rutinas",
        description:
            "Creá planes de entrenamiento reutilizables y realizá seguimiento del progreso de cada atleta.",
        items: [
            "Plantillas",
            "Series y repeticiones",
            "Seguimiento",
            "Historial",
        ],
    },
    {
        icon: ShoppingBag,
        color: "text-orange-400",
        title: "Tienda Integrada",
        description:
            "Vendé suplementos, bebidas, ropa y accesorios sin salir del sistema.",
        items: [
            "Stock",
            "Ventas",
            "Productos",
            "Reportes",
        ],
    },
    {
        icon: CreditCard,
        color: "text-violet-400",
        title: "Cobro de Membresías",
        description:
            "Registrá pagos y preparate para integrar Mercado Pago y otros medios digitales.",
        items: [
            "Cuotas",
            "Vencimientos",
            "Cobros",
            "Estado",
        ],
    },
    {
        icon: CalendarClock,
        color: "text-pink-400",
        title: "Control de Asistencia",
        description:
            "Registrá ingresos al gimnasio y consultá estadísticas de concurrencia.",
        items: [
            "Check-in",
            "Historial",
            "Frecuencia",
            "Reportes",
        ],
    },
    {
        icon: BarChart3,
        color: "text-sky-400",
        title: "Reportes",
        description:
            "Visualizá indicadores de clientes, ventas, ingresos y rendimiento del gimnasio.",
        items: [
            "Clientes",
            "Caja",
            "Ventas",
            "KPIs",
        ],
    },
    {
        icon: Bell,
        color: "text-yellow-400",
        title: "Recordatorios",
        description:
            "Notificaciones para vencimientos, pagos pendientes y novedades del gimnasio.",
        items: [
            "Pagos",
            "Avisos",
            "Clientes",
            "Eventos",
        ],
    },
];

export default function Features() {
    return (
        <section
            id="funciones"
            className="relative py-28"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 font-medium">
                        Todo lo que necesitás
                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-black">
                        Un sistema pensado para
                        <span className="block text-emerald-400">
                            administrar todo tu gimnasio
                        </span>
                    </h2>

                    <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Centralizá la operación diaria en una única plataforma.
                        Desde la administración de clientes hasta las ventas de la tienda,
                        todo conectado y sincronizado.
                    </p>

                </div>

                <div className="grid gap-7 mt-20 md:grid-cols-2 xl:grid-cols-4">

                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-lg p-7 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div
                                    className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${feature.color}`}
                                >
                                    <Icon className="w-7 h-7" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="mt-4 text-slate-400 text-sm leading-7">
                                    {feature.description}
                                </p>

                                <div className="mt-6 space-y-3">

                                    {feature.items.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm text-slate-300"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-emerald-400" />

                                            {item}
                                        </div>
                                    ))}

                                </div>

                                <button className="mt-8 flex items-center gap-2 text-emerald-400 group-hover:gap-3 transition-all">
                                    Saber más

                                    <ArrowRight className="w-4 h-4" />
                                </button>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}