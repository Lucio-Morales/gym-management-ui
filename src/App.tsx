
import Dashboard from "./Dashboard";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Roles from "./Roles";
import StoreSection from "./StoreSection";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      <Navbar />

      <Hero />

      <Features />

      <Dashboard />

      <Roles />

      <StoreSection />

    </div>
  );
}

export default App;