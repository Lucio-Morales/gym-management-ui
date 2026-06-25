import { Activity, CheckCircle, CreditCard, Database, Dumbbell, LayoutDashboard, ShieldAlert, Sparkles, Zap } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950 relative overflow-hidden">

      {/* Luces de fondo unificadas */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Presentación / Hero */}
        <header className="pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-emerald-400 mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> Ecosistema de Gestión Operativa v1.0 (MVP)
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent leading-none">
            La plataforma inteligente para <br />
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Gimnasios de Alto Rendimiento</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Un sistema integral que conecta la administración del centro deportivo, la ingeniería de rutinas de tus entrenadores y el progreso real de tus atletas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl shadow-lg shadow-emerald-500/20 transition-all duration-200 transform hover:-translate-y-0.5">
              Acceder al Panel de Control
            </button>
            <button className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold rounded-xl border border-slate-800 transition-all duration-200">
              Explorar Documentación API
            </button>
          </div>
        </header>

        {/* NUEVA SECCIÓN: Experiencia por Roles */}
        <section className="py-12 border-t border-slate-900/60">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Una plataforma. Tres experiencias optimizadas.
            </h2>
            <p className="mt-2 text-slate-400 text-sm max-w-xl mx-auto">
              Cada usuario cuenta con un entorno de software diseñado específicamente para su flujo de trabajo diario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Rol 1: Administrador */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-900/80 hover:border-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <LayoutDashboard className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Panel de Control General</h3>
              </div>
              <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">Módulo Administrador</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Alta y gestión de Staff y Entrenadores.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Auditoría de membresías y estados de cobro.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Control de métricas operacionales del centro.</li>
              </ul>
            </div>

            {/* Rol 2: Entrenador */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-900/80 hover:border-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Constructor de Rutinas</h3>
              </div>
              <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Módulo Staff Técnico</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" /> Creación de plantillas reutilizables avanzadas.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" /> Parámetros dinámicos: Series, Reps, RIR y carga.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" /> Catálogo maestro y ejercicios personalizados.</li>
              </ul>
            </div>

            {/* Rol 3: Cliente */}
            <div className="p-6 rounded-2xl bg-slate-900/20 border border-slate-900/80 hover:border-slate-800/60 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Diario Móvil de Cargas</h3>
              </div>
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">Módulo Cliente Atleta</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Interfaz mobile-first para trackeo en sala de musculación.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Modificación de peso real con historial histórico visible.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" /> Gráficas automatizadas de evolución de RM e índices físicos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Características Técnicas / Arquitectura (El imán de reclutadores) */}
        <section className="py-16 border-t border-slate-900/60 bg-slate-900/10 rounded-3xl px-6 my-12 border border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 text-xs font-medium text-purple-400 mb-3 border border-purple-500/20">
                <Database className="w-3.5 h-3.5" /> Arquitectura & Datos
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Diseñado para la escalabilidad corporativa
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Este ecosistema de software no es solo una interfaz bonita. Detrás hay un diseño relacional estricto en <strong className="text-slate-200">PostgreSQL</strong> de tercera forma normal que separa los datos de configuración estática de los registros dinámicos de rendimiento.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900">
                  <ShieldAlert className="w-5 h-5 text-emerald-400 mb-2" />
                  <h4 className="text-sm font-bold text-slate-200">Seguridad Granular</h4>
                  <p className="text-xs text-slate-500 mt-1">Guards basados en roles a nivel de API que protegen la integridad de los datos.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-900">
                  <Zap className="w-5 h-5 text-teal-400 mb-2" />
                  <h4 className="text-sm font-bold text-slate-200">Modularidad con NestJS</h4>
                  <p className="text-xs text-slate-500 mt-1">Lógica desacoplada por dominios independientes listos para crecer a microservicios.</p>
                </div>
              </div>
            </div>

            {/* Simulación Gráfica / Live Preview del Progreso */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-900 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Historial de Sobrecarga Progresiva</p>
                  <h4 className="text-base font-bold text-slate-200 mt-0.5">Sentadilla Libre - Rendimiento Máximo</h4>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-medium border border-emerald-500/20">+15% este mes</span>
              </div>

              {/* Contenedor de "Gráfico Mockeado" con puro CSS elegante */}
              <div className="h-40 w-full flex items-end gap-3 pt-6 border-b border-slate-900 relative">
                <div className="absolute left-0 top-2 text-[10px] text-slate-600 w-full border-t border-slate-900/50 pt-1">100 kg</div>
                <div className="absolute left-0 top-16 text-[10px] text-slate-600 w-full border-t border-slate-900/50 pt-1">80 kg</div>
                <div className="absolute left-0 top-28 text-[10px] text-slate-600 w-full border-t border-slate-900/50 pt-1">60 kg</div>

                <div className="w-full flex justify-between items-end z-10 px-2 h-full pb-2">
                  <div className="w-8 bg-gradient-to-t from-emerald-500/20 to-emerald-500 h-[50%] rounded-t-md transition-all duration-500 group-hover:h-[55%] relative group/bar">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 px-1 rounded">70kg</span>
                  </div>
                  <div className="w-8 bg-gradient-to-t from-emerald-500/20 to-emerald-500 h-[65%] rounded-t-md transition-all duration-500 group-hover:h-[68%] relative group/bar">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 px-1 rounded">80kg</span>
                  </div>
                  <div className="w-8 bg-gradient-to-t from-emerald-500/20 to-emerald-500 h-[60%] rounded-t-md transition-all duration-500 group-hover:h-[65%] relative group/bar">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 px-1 rounded">75kg</span>
                  </div>
                  <div className="w-8 bg-gradient-to-t from-emerald-500/20 to-teal-400 h-[85%] rounded-t-md transition-all duration-500 group-hover:h-[90%] relative group/bar">
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-300 opacity-0 group-hover/bar:opacity-100 transition-opacity bg-slate-900 px-1 rounded">95kg</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-600 mt-2 px-2">
                <span>Semana 1</span>
                <span>Semana 2</span>
                <span>Semana 3</span>
                <span>Semana 4</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Integración de Pagos (Mercado Pago de fondo) */}
        <main className="py-12 pb-24">
          <div className="p-8 rounded-2xl border border-slate-900 bg-gradient-to-br from-slate-900/60 to-slate-900/20 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/10 text-xs font-medium text-blue-400 mb-3 border border-blue-500/20">
                <CreditCard className="w-3.5 h-3.5" /> Escalabilidad Financiera Futura
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Automatización de Recaudación</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Diseñado bajo patrones de arquitectura desacoplados (Strategy Pattern) listos para integrar webhooks de <strong className="text-slate-200">Mercado Pago Argentina</strong> para débitos automáticos, control de morosidad y suspensión automatizada de accesos de manera asíncrona.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0 justify-center">
              <div className="px-6 py-4 rounded-xl bg-slate-950/80 border border-slate-900 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <div className="text-left">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Localización</p>
                  <p className="text-sm font-semibold text-slate-200">Mercado Pago Ready</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900/60 py-8 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} GymApp Software Architecture. Desarrollado con el ecosistema moderno de TypeScript.
        </footer>
      </div>
    </div>
  );
}

export default App;