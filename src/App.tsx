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
      
      <header className="fixed top-0 left-0 w-full p-8 z-[100] flex justify-between items-center bg-gradient-to-b from-[var(--color-pool-dark)] to-transparent">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-pool-blue rounded-full shadow-[0_0_20px_rgba(14,165,233,0.5)] flex items-center justify-center">
            <span className="text-white font-black">CP</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">CRYSTAL POOLS</span>
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
            <a href="#" className="hover:text-white transition-colors">Services</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-sm tracking-widest uppercase opacity-40">
            &copy; 2026 CRYSTAL POOLS MAINTENANCE &bull; EXCELLENCE IN EVERY DROP
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
