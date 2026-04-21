import React from 'react';
import ScrollVideoBackground from './components/ScrollVideoBackground';
import ScrollFloat from './components/ScrollFloat';
import ContentStack from './components/ContentStack';

function App() {
  return (
    <div className="app">
      <ScrollVideoBackground frameCount={1} />
      
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: '2rem', 
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img 
          src="/assets/AIS Logo PNG.png" 
          alt="AIS Logo" 
          style={{ height: '40px', filter: 'drop-shadow(0 0 10px rgba(55, 189, 248, 0.5))' }} 
        />
      </header>

      <main>
        <ScrollFloat text="BUILD / WITH / MOTION" />
        <ContentStack />
        
        <div style={{ height: '50vh' }} />
        
        <footer style={{ 
          padding: '4rem', 
          textAlign: 'center', 
          color: 'var(--text-muted)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(7, 18, 28, 0.8)',
          backdropFilter: 'blur(20px)'
        }}>
          &copy; 2026 AI AUTOMATION SOCIETY &bull; JOIN THE MOVEMENT
        </footer>
      </main>
    </div>
  );
}

export default App;
