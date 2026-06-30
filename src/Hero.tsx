import {
    ArrowRight,
    Dumbbell,
    PlayCircle,
    ShoppingBag,
    Sparkles,
    Users,
    Wallet,
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">

            {/* Glow Background */}
            <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />

            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[180px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-24">

                {/* Badge */}

                <div className="flex justify-center">

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium">

                        <Sparkles className="w-4 h-4" />

                        Plataforma Integral para Gimnasios

                    </div>

                </div>

                {/* Heading */}

                <div className="mt-8 text-center">

                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">

                        Administrá tu

                        <span className="block bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">

                            gimnasio desde un solo lugar

                        </span>

                    </h1>

                    <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-slate-400 leading-relaxed">

                        Gestioná clientes, membresías, caja, rutinas y ventas con una
                        plataforma moderna diseñada para gimnasios de cualquier tamaño.

                        Simplificá la administración y dedicá más tiempo a hacer crecer tu
                        negocio.

                    </p>

                </div>

                {/* CTA */}

                <div className="mt-12 flex flex-wrap justify-center gap-5">

                    <button className="group flex items-center gap-3 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all shadow-xl shadow-emerald-500/20">

                        Solicitar una Demo

                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />

                    </button>

                    <button className="flex items-center gap-3 px-7 py-4 rounded-2xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition">

                        <PlayCircle className="w-5 h-5 text-emerald-400" />

                        Ver funcionalidades

                    </button>

                </div>

                {/* Stats */}

                <div className="grid md:grid-cols-4 gap-5 mt-24">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6">

                        <Users className="w-8 h-8 text-emerald-400 mb-5" />

                        <h3 className="font-bold text-lg">

                            Gestión de Clientes

                        </h3>

                        <p className="text-sm text-slate-400 mt-2">

                            Registro completo de socios, membresías, historial de pagos,
                            asistencia y vencimientos.

                        </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6">

                        <Wallet className="w-8 h-8 text-cyan-400 mb-5" />

                        <h3 className="font-bold text-lg">

                            Gestión de Caja

                        </h3>

                        <p className="text-sm text-slate-400 mt-2">

                            Control diario de ingresos, egresos, arqueo de caja y reportes
                            financieros.

                        </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6">

                        <Dumbbell className="w-8 h-8 text-teal-400 mb-5" />

                        <h3 className="font-bold text-lg">

                            Gestión de Rutinas

                        </h3>

                        <p className="text-sm text-slate-400 mt-2">

                            Diseñá entrenamientos personalizados y realizá seguimiento del
                            progreso de cada alumno.

                        </p>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur p-6">

                        <ShoppingBag className="w-8 h-8 text-orange-400 mb-5" />

                        <h3 className="font-bold text-lg">

                            Tienda Integrada

                        </h3>

                        <p className="text-sm text-slate-400 mt-2">

                            Vendé suplementos, bebidas, accesorios e indumentaria desde la
                            misma plataforma.

                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
}