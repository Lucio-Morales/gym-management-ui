import {
    Activity,
    ArrowUpRight,
    ShoppingCart,
    TrendingUp,
    Users,
    Wallet,
} from "lucide-react";

const stats = [
    {
        title: "Clientes Activos",
        value: "248",
        growth: "+12%",
        icon: Users,
        color: "text-emerald-400",
    },
    {
        title: "Facturación Mensual",
        value: "$2.850.000",
        growth: "+18%",
        icon: Wallet,
        color: "text-cyan-400",
    },
    {
        title: "Ventas Tienda",
        value: "137",
        growth: "+22%",
        icon: ShoppingCart,
        color: "text-orange-400",
    },
    {
        title: "Rutinas Activas",
        value: "194",
        growth: "+9%",
        icon: Activity,
        color: "text-violet-400",
    },
];

const monthlyIncome = [
    45,
    58,
    66,
    62,
    75,
    81,
    88,
    92,
];

export default function Dashboard() {
    return (
        <section
            id="dashboard"
            className="py-32 relative"
        >
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/5 blur-[160px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center">

                    <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">

                        Dashboard Inteligente

                    </span>

                    <h2 className="mt-6 text-4xl md:text-5xl font-black">

                        Toda la información

                        <span className="block text-cyan-400">

                            en tiempo real

                        </span>

                    </h2>

                    <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg">

                        Conocé el estado de tu gimnasio de un vistazo.
                        Clientes, ingresos, ventas y rendimiento
                        siempre actualizados.

                    </p>

                </div>

                {/* Cards */}

                <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-20">

                    {stats.map((stat) => {

                        const Icon = stat.icon;

                        return (

                            <div
                                key={stat.title}
                                className="rounded-3xl bg-slate-900/40 border border-slate-800 p-6 backdrop-blur-xl hover:border-emerald-500/40 transition"
                            >

                                <div className="flex justify-between">

                                    <div>

                                        <p className="text-slate-500 text-sm">

                                            {stat.title}

                                        </p>

                                        <h3 className="text-3xl font-black mt-2">

                                            {stat.value}

                                        </h3>

                                    </div>

                                    <div
                                        className={`w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center ${stat.color}`}
                                    >
                                        <Icon className="w-7 h-7" />
                                    </div>

                                </div>

                                <div className="mt-8 flex items-center gap-2 text-emerald-400 text-sm">

                                    <TrendingUp className="w-4 h-4" />

                                    {stat.growth}

                                    <span className="text-slate-500">

                                        respecto al mes anterior

                                    </span>

                                </div>

                            </div>

                        );
                    })}

                </div>

                {/* Dashboard */}

                <div className="grid lg:grid-cols-3 gap-8 mt-16">

                    {/* Chart */}

                    <div className="lg:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8">

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-slate-500">

                                    Facturación

                                </p>

                                <h3 className="text-2xl font-bold mt-2">

                                    Evolución Mensual

                                </h3>

                            </div>

                            <button className="flex items-center gap-2 text-emerald-400">

                                Ver reporte

                                <ArrowUpRight className="w-4 h-4" />

                            </button>

                        </div>

                        <div className="mt-12 flex justify-between items-end h-72">

                            {monthlyIncome.map((value, index) => (

                                <div
                                    key={index}
                                    className="flex flex-col items-center gap-3"
                                >

                                    <div
                                        className="w-10 rounded-t-xl bg-gradient-to-t from-emerald-600 to-emerald-400 hover:scale-105 transition"
                                        style={{
                                            height: `${value * 2}px`,
                                        }}
                                    />

                                    <span className="text-xs text-slate-500">

                                        {["E", "F", "M", "A", "M", "J", "J", "A"][index]}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Activity */}

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-8">

                        <h3 className="text-2xl font-bold">

                            Actividad reciente

                        </h3>

                        <div className="space-y-6 mt-10">

                            {[
                                "Nuevo cliente registrado",
                                "Pago de membresía recibido",
                                "Venta de proteína Whey",
                                "Nueva rutina creada",
                                "Cierre de caja realizado",
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >

                                    <div className="w-3 h-3 rounded-full bg-emerald-400 mt-2" />

                                    <div>

                                        <p className="font-medium">

                                            {item}

                                        </p>

                                        <span className="text-xs text-slate-500">

                                            Hace {index + 1} horas

                                        </span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}