import React from 'react';
import ScrollVideoBackground from './components/ScrollVideoBackground';
import ScrollFloat from './components/ScrollFloat';
import ContentStack from './components/ContentStack';
import { LiquidGlassHero } from './components/ui/liquid-glass';

function App() {
  return (
    <div className="app">
      {/* Cinematic Background Scrubber */}
      <ScrollVideoBackground frameCount={1} />
      
      <header className="fixed top-0 left-0 w-full p-6 z-[100] flex justify-between items-center bg-gradient-to-b from-[var(--color-pool-dark)] to-transparent">
        <div className="flex items-center gap-4">
          <img 
            src="/assets/deddy-logo.png" 
            alt="D'Eddy Logo" 
            className="h-16 drop-shadow-[0_0_15px_rgba(20,184,166,0.5)]" 
          />
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter text-white leading-none">D'EDDY</span>
            <span className="text-xs font-bold tracking-[0.3em] text-teal-400 uppercase">Piscina</span>
          </div>
        </div>
        <button className="px-6 py-2 bg-pool-blue/10 border border-pool-blue/20 rounded-full text-pool-blue text-sm font-medium hover:bg-pool-blue/20 transition-all">
          Request Quote
        </button>
      </header>

      <main>
        {/* NEW ELITE HERO COMPONENT */}
        <LiquidGlassHero />

        {/* CINEMATIC JOURNEY CONTINUES */}
        <ScrollFloat text="PURE / CLEAR / WATER" />
        
        <div className="relative z-50">
          <ContentStack />
        </div>
        
        <div className="h-[50vh]" />
        
        <footer className="p-16 text-center text-gray-500 border-t border-white/5 bg-pool-dark/80 backdrop-blur-3xl">
          <div className="mb-6 flex justify-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Servicios</a>
            <a href="#" className="hover:text-white transition-colors">Precios</a>
            <a href="#" className="hover:text-white transition-colors">Testimonios</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
          <p className="text-sm tracking-widest uppercase opacity-40">
            &copy; 2026 MANTENIMIENTO D'EDDY PISCINA &bull; EXCELENCIA EN CADA GOTA
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
