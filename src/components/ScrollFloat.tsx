import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  text?: string;
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({ text = "BUILD / WITH MOTION" }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chars = containerRef.current.querySelectorAll('.char');
    
    gsap.fromTo(chars, 
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: 100,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=900',
          scrub: true,
          pin: true,
        }
      }
    );
  }, []);

  const renderText = () => {
    return text.split('').map((char, i) => (
      <span key={i} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div 
      ref={containerRef}
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'clamp(3rem, 10vw, 8rem)',
        fontWeight: 900,
        letterSpacing: '-0.05em',
        textAlign: 'center',
      }}
    >
      <div>{renderText()}</div>
    </div>
  );
};

export default ScrollFloat;
