import {
    BadgePercent,
    Boxes,
    ChevronRight,
    CircleDollarSign,
    Package,
    Percent,
    Plus,
    Search,
    ShoppingBag,
    ShoppingCart,
    Tag,
    TrendingUp,
    Wallet,
} from "lucide-react";

const products = [
    {
        name: "Whey Protein Gold",
        category: "Suplementos",
        stock: 18,
        price: "$58.000",
        status: "Disponible",
    },
    {
        name: "Creatina Monohidrato",
        category: "Suplementos",
        stock: 6,
        price: "$34.500",
        status: "Stock Bajo",
    },
    {
        name: "Shaker GymManager",
        category: "Accesorios",
        stock: 35,
        price: "$12.000",
        status: "Disponible",
    },
    {
        name: "Barra Proteica",
        category: "Nutrición",
        stock: 52,
        price: "$4.800",
        status: "Disponible",
    },
];

const promotions = [
    {
        title: "20% OFF Whey Protein",
        description: "Durante todo Julio",
    },
    {
        title: "2x1 Barras Proteicas",
        description: "Solo fines de semana",
    },
    {
        title: "Combo Creatina + Shaker",
        description: "Ahorra un 15%",
    },
];

const stats = [
    {
        title: "Productos",
        value: "54",
        icon: Package,
    },
    {
        title: "Ventas",
        value: "183",
        icon: ShoppingCart,
    },
    {
        title: "Facturación",
        value: "$945K",
        icon: CircleDollarSign,
    },
    {
        title: "Promociones",
        value: "8",
        icon: BadgePercent,
    },
];

export default function StoreSection() {
    return (
        <section
            id="tienda"
            className="relative py-32 overflow-hidden"
        >
            {/* Background */}

            <div className="absolute left-0 top-0 w-[700px] h-[700px] rounded-full bg-orange-500/5 blur-[160px]" />

            <div className="absolute right-0 bottom-0 w-[700px] h-[700px] rounded-full bg-emerald-500/5 blur-[160px]" />

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}

                <div className="max-w-3xl">

                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">

                        <ShoppingBag className="w-4 h-4" />

                        Centro de Ventas Integrado

                    </div>

                    <h2 className="mt-8 text-5xl font-black leading-tight">

                        Vendé productos

                        <span className="block bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">

                            sin salir del sistema

                        </span>

                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-400">

                        Publicá suplementos, bebidas, indumentaria y accesorios desde un
                        único panel.

                        Administrá el stock, creá promociones y registrá ventas que se
                        sincronizan automáticamente con la caja del gimnasio.

                    </p>

                </div>

                {/* Mockup */}

                <div className="mt-20 rounded-[32px] border border-slate-800 bg-slate-900/50 backdrop-blur-xl overflow-hidden shadow-2xl shadow-black/40">

                    {/* Top Bar */}

                    <div className="border-b border-slate-800 px-8 py-5 flex items-center justify-between">

                        <div className="flex items-center gap-4">

                            <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center">

                                <ShoppingBag className="w-5 h-5 text-orange-400" />

                            </div>

                            <div>

                                <h3 className="font-bold text-lg">

                                    Módulo de Ventas

                                </h3>

                                <p className="text-sm text-slate-500">

                                    Gestión de productos y promociones

                                </p>

                            </div>

                        </div>

                        <button className="flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition">

                            <Plus className="w-4 h-4" />

                            Nuevo Producto

                        </button>

                    </div>

                    <div className="grid lg:grid-cols-12">

                        {/* Sidebar */}

                        <aside className="lg:col-span-3 border-r border-slate-800 p-6">

                            <div className="relative">

                                <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-500" />

                                <input
                                    placeholder="Buscar producto..."
                                    className="w-full rounded-xl bg-slate-950 border border-slate-800 py-3 pl-11 pr-4 outline-none focus:border-orange-500 transition"
                                />

                            </div>

                            <div className="mt-8 space-y-3">

                                {[
                                    "Todos los productos",
                                    "Suplementos",
                                    "Bebidas",
                                    "Accesorios",
                                    "Indumentaria",
                                    "Promociones",
                                    "Stock bajo",
                                ].map((item) => (
                                    <button
                                        key={item}
                                        className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-left text-slate-300 hover:bg-slate-800 transition"
                                    >
                                        <span>{item}</span>

                                        <ChevronRight className="w-4 h-4 text-slate-500" />
                                    </button>
                                ))}
                            </div>

                            <div className="mt-10 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">

                                <div className="flex items-center gap-3">

                                    <Tag className="w-5 h-5 text-orange-400" />

                                    <h4 className="font-semibold">

                                        Promoción destacada

                                    </h4>

                                </div>

                                <p className="mt-4 text-2xl font-black text-white">

                                    20% OFF

                                </p>

                                <p className="mt-2 text-sm text-slate-400">

                                    En todas las proteínas premium hasta fin de mes.

                                </p>

                            </div>

                        </aside>

                        {/* Main Content */}

                        <div className="lg:col-span-9 p-8">

                            {/* KPIs */}

                            <div className="grid md:grid-cols-4 gap-5">

                            </div>
                            {stats.map((stat) => {
                                const Icon = stat.icon;

                                return (
                                    <div
                                        key={stat.title}
                                        className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5"
                                    >
                                        <div className="flex items-center justify-between">

                                            <div>

                                                <p className="text-xs uppercase tracking-wider text-slate-500">

                                                    {stat.title}

                                                </p>

                                                <h4 className="mt-2 text-2xl font-black">

                                                    {stat.value}

                                                </h4>

                                            </div>

                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/10">

                                                <Icon className="h-5 w-5 text-orange-400" />

                                            </div>

                                        </div>
                                    </div>
                                );
                            })}

                            {/* Productos + Promociones */}

                            <div className="mt-8 grid gap-8 xl:grid-cols-3">

                                {/* Productos */}

                                <div className="xl:col-span-2 rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden">

                                    <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">

                                        <div>

                                            <h4 className="font-bold text-lg">

                                                Productos publicados

                                            </h4>

                                            <p className="text-sm text-slate-500">

                                                Administrá el catálogo de tu gimnasio.

                                            </p>

                                        </div>

                                        <button className="rounded-xl border border-slate-700 px-4 py-2 hover:bg-slate-800 transition">

                                            Ver todos

                                        </button>

                                    </div>

                                    <div>

                                        {products.map((product) => (

                                            <div
                                                key={product.name}
                                                className="grid grid-cols-12 items-center border-b border-slate-800 px-6 py-5 hover:bg-slate-900 transition"
                                            >

                                                <div className="col-span-5">

                                                    <h5 className="font-semibold">

                                                        {product.name}

                                                    </h5>

                                                    <p className="mt-1 text-sm text-slate-500">

                                                        {product.category}

                                                    </p>

                                                </div>

                                                <div className="col-span-2">

                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-medium ${product.stock <= 10
                                                                ? "bg-red-500/10 text-red-400"
                                                                : "bg-emerald-500/10 text-emerald-400"
                                                            }`}
                                                    >
                                                        Stock {product.stock}
                                                    </span>

                                                </div>

                                                <div className="col-span-2 font-semibold">

                                                    {product.price}

                                                </div>

                                                <div className="col-span-2">

                                                    <span
                                                        className={`rounded-full px-3 py-1 text-xs font-medium ${product.status === "Disponible"
                                                                ? "bg-emerald-500/10 text-emerald-400"
                                                                : "bg-orange-500/10 text-orange-400"
                                                            }`}
                                                    >
                                                        {product.status}
                                                    </span>

                                                </div>

                                                <div className="flex justify-end">

                                                    <button className="rounded-lg border border-slate-700 px-3 py-2 hover:bg-slate-800">

                                                        Editar

                                                    </button>

                                                </div>

                                            </div>

                                        ))}

                                    </div>

                                </div>

                                {/* Promociones */}

                                <div className="space-y-6">

                                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">

                                        <div className="flex items-center gap-3">

                                            <Percent className="w-6 h-6 text-orange-400" />

                                            <h4 className="font-bold text-lg">

                                                Promociones activas

                                            </h4>

                                        </div>

                                        <div className="mt-6 space-y-4">

                                            {promotions.map((promo) => (

                                                <div
                                                    key={promo.title}
                                                    className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-4"
                                                >

                                                    <h5 className="font-semibold">

                                                        {promo.title}

                                                    </h5>

                                                    <p className="mt-2 text-sm text-slate-400">

                                                        {promo.description}

                                                    </p>

                                                </div>

                                            ))}

                                        </div>

                                    </div>

                                    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-6">

                                        <div className="flex items-center gap-3">

                                            <TrendingUp className="w-6 h-6 text-emerald-400" />

                                            <div>

                                                <h4 className="font-bold">

                                                    Producto más vendido

                                                </h4>

                                                <p className="text-sm text-slate-500">

                                                    Últimos 30 días

                                                </p>

                                            </div>

                                        </div>

                                        <div className="mt-6">

                                            <h3 className="text-3xl font-black">

                                                Whey Protein Gold

                                            </h3>

                                            <p className="mt-2 text-slate-400">

                                                86 unidades vendidas este mes.

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* Flujo */}

                            <div className="mt-10 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-8">

                                <h4 className="text-2xl font-bold">

                                    Todo conectado automáticamente

                                </h4>

                                <p className="mt-3 max-w-3xl text-slate-400">

                                    Cada venta impacta en el resto del sistema sin necesidad de realizar tareas manuales.
                                </p>

                                <div className="mt-10 grid gap-6 md:grid-cols-5">

                                    <div className="rounded-xl bg-slate-950 p-5 text-center border border-slate-800">

                                        <ShoppingCart className="mx-auto mb-4 h-8 w-8 text-orange-400" />

                                        <p className="font-semibold">

                                            Venta realizada

                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-slate-950 p-5 text-center border border-slate-800">

                                        <Boxes className="mx-auto mb-4 h-8 w-8 text-cyan-400" />

                                        <p className="font-semibold">

                                            Descuenta stock

                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-slate-950 p-5 text-center border border-slate-800">

                                        <Wallet className="mx-auto mb-4 h-8 w-8 text-emerald-400" />

                                        <p className="font-semibold">

                                            Registra ingreso

                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-slate-950 p-5 text-center border border-slate-800">

                                        <TrendingUp className="mx-auto mb-4 h-8 w-8 text-violet-400" />

                                        <p className="font-semibold">

                                            Actualiza reportes

                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-slate-950 p-5 text-center border border-slate-800">

                                        <Package className="mx-auto mb-4 h-8 w-8 text-orange-400" />

                                        <p className="font-semibold">

                                            Historial disponible

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}