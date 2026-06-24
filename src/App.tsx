import { CheckCircle, CreditCard, Dumbbell, Sparkles, TrendingUp, Users } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-hidden">

      {/* Luces de fondo unificadas para toda la experiencia */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Contenedor Principal (Todo fluye aquí dentro) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Presentación / Hero */}
        <header className="pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> El futuro de la gestión fitness está aquí
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Domina la gestión de tu <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Gimnasio</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Optimiza tu centro deportivo. Automatiza las tareas tediosas y repetitivas del día a día para enfocarte en lo que realmente importa: **hacer crecer tu comunidad**.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5">
              Comenzar ahora
            </button>
            <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-all duration-200">
              Ver Demo
            </button>
          </div>
        </header>

        {/* Sección de Características */}
        <main className="py-12 pb-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base">
              Diseñado específicamente para resolver los dolores de cabeza de la administración fitness.
            </p>
          </div>

          {/* Grid de Características */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Card 1: Entrenadores y Clientes */}
            <div className="p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-900 hover:border-slate-800 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-5 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Staff & Clientes</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Control total de perfiles. Gestiona altas de clientes, asignación de entrenadores y control de asistencias sin fricciones.
              </p>
            </div>

            {/* Card 2: Rutinas */}
            <div className="p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-900 hover:border-slate-800 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 mb-5 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all duration-300">
                <Dumbbell className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Rutinas Personalizadas</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Crea, edita y asigna planes de entrenamiento a la medida de cada usuario. Configuración de series, repeticiones y videos de apoyo.
              </p>
            </div>

            {/* Card 3: Seguimiento */}
            <div className="p-6 bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-900 hover:border-slate-800 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-5 group-hover:bg-blue-500 group-hover:text-slate-950 transition-all duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Seguimiento de Progreso</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Gráficas de evolución física, cargas máximas e historial de rendimiento. Mantén a tus atletas motivados con datos reales.
              </p>
            </div>

          </div>

          {/* Sección de Integración de Pagos */}
          <div className="mt-16 p-8 rounded-2xl border border-slate-900 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/10 text-xs font-medium text-blue-400 mb-3 border border-blue-500/20">
                <CreditCard className="w-3.5 h-3.5" /> Pagos Automatizados
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cobros sin dolores de cabeza</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Olvídate de perseguir deudores. Integración nativa con <strong className="text-slate-200">Mercado Pago</strong> y múltiples pasarelas para suscripciones mensuales automáticas y alertas de vencimiento.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 justify-center">
              <div className="px-6 py-4 rounded-xl bg-slate-950/80 border border-slate-900 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Compatible con</p>
                  <p className="text-sm font-semibold text-slate-200">Mercado Pago</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900/60 py-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} GymApp Software. Todos los derechos reservados.
        </footer>
      </div>
    </div>
  );
}

export default App;