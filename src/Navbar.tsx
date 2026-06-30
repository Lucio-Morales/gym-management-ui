import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
    {
        label: "Funciones",
        href: "#funciones",
    },
    {
        label: "Módulos",
        href: "#modulos",
    },
    {
        label: "Beneficios",
        href: "#beneficios",
    },
    {
        label: "Contacto",
        href: "#contacto",
    },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <div className="backdrop-blur-xl bg-slate-950/70 border-b border-slate-800/60">
                <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

                    {/* Logo */}

                    <a
                        href="#"
                        className="flex items-center gap-3"
                    >
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg shadow-emerald-500/30">

                            <Dumbbell className="w-6 h-6 text-slate-950" />

                        </div>

                        <div>
                            <h1 className="font-bold text-lg text-white">
                                GymManager
                            </h1>

                            <p className="text-xs text-slate-500">
                                Software para gimnasios
                            </p>
                        </div>
                    </a>

                    {/* Desktop */}

                    <nav className="hidden md:flex items-center gap-10">

                        {links.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="text-slate-400 hover:text-white transition"
                            >
                                {item.label}
                            </a>
                        ))}

                    </nav>

                    {/* Desktop Buttons */}

                    <div className="hidden md:flex items-center gap-3">

                        <button className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-600 transition">

                            Iniciar sesión

                        </button>

                        <button className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition">

                            Solicitar Demo

                        </button>

                    </div>

                    {/* Mobile */}

                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden"
                    >
                        {open ? (
                            <X className="w-7 h-7" />
                        ) : (
                            <Menu className="w-7 h-7" />
                        )}
                    </button>

                </div>

                {/* Mobile Menu */}

                {open && (
                    <div className="md:hidden border-t border-slate-800 bg-slate-950">

                        <div className="flex flex-col px-6 py-6 gap-5">

                            {links.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="text-slate-300"
                                >
                                    {item.label}
                                </a>
                            ))}

                            <button className="mt-4 px-5 py-3 rounded-xl border border-slate-700">

                                Iniciar sesión

                            </button>

                            <button className="px-5 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold">

                                Solicitar Demo

                            </button>

                        </div>

                    </div>
                )}

            </div>
        </header>
    );
}