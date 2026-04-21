import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollVideoBackgroundProps {
  frameCount?: number;
  framePath?: string;
}

const ScrollVideoBackground: React.FC<ScrollVideoBackgroundProps> = ({ frameCount = 30, framePath = '/bg-frames/frame-' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    const loadedImages = [];
    if (frameCount <= 1) {
      const img = new Image();
      img.src = 'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?q=80&w=1480';
      img.onload = () => {
        setLoadedCount(1);
      };
      loadedImages.push(img);
    } else {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameIndex = i.toString().padStart(4, '0');
        img.src = `${framePath}${frameIndex}.jpg`;
        img.onload = () => {
          setLoadedCount((prev) => prev + 1);
        };
        loadedImages.push(img);
      }
    }
    setImages(loadedImages);
  }, [frameCount, framePath]);

  useEffect(() => {
    if (loadedCount < frameCount || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = (index: number) => {
      const img = images[Math.floor(index)];
      if (img && img.complete && canvasRef.current) {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (!context) return;
        
        const { width, height } = canvas;
        const imgRatio = img.width / img.height;
        const canvasRatio = width / height;
        
        let drawWidth = width;
        let drawHeight = height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
          drawWidth = height * imgRatio;
          offsetX = (width - drawWidth) / 2;
        } else {
          drawHeight = width / imgRatio;
          offsetY = (height - drawHeight) / 2;
        }

        context.clearRect(0, 0, width, height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Initial render
    render(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(ScrollTrigger.getById('bg-scrub')?.progress * (frameCount - 1) || 0);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const tl = gsap.to({}, {
      scrollTrigger: {
        id: 'bg-scrub',
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          const index = self.progress * (frameCount - 1);
          render(index);
        },
      },
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      tl.kill();
      ScrollTrigger.getById('bg-scrub')?.kill();
    };
  }, [loadedCount, images, frameCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ScrollVideoBackground;
