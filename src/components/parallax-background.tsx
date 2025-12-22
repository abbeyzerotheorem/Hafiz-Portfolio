"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ShapeProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const Diamond = (props: ShapeProps) => (
  <svg width="1" height="1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M50 0L100 50L50 100L0 50L50 0Z" fill="currentColor"/>
  </svg>
);

const Square = (props: ShapeProps) => (
  <svg width="1" height="1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="100" height="100" fill="currentColor"/>
  </svg>
);

const Plus = (props: ShapeProps) => (
    <svg width="1" height="1" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M40 0H60V40H100V60H60V100H40V60H0V40H40V0Z" fill="currentColor"/>
    </svg>
)

const layers = [
  { Component: Diamond, speed: 0.1, top: '15%', left: '10%', size: 60, color: 'text-accent/10', rotate: 45 },
  { Component: Square, speed: 0.15, top: '25%', left: '85%', size: 80, color: 'text-white/5', rotate: 15 },
  { Component: Plus, speed: 0.08, top: '5%', left: '40%', size: 40, color: 'text-accent/10', rotate: 0 },
  { Component: Diamond, speed: 0.2, top: '70%', left: '5%', size: 100, color: 'text-white/5', rotate: 75 },
  { Component: Square, speed: 0.25, top: '80%', left: '90%', size: 50, color: 'text-accent/10', rotate: 30 },
  { Component: Plus, speed: 0.12, top: '50%', left: '50%', size: 70, color: 'text-white/5', rotate: 45 },
  { Component: Square, speed: 0.18, top: '95%', left: '20%', size: 120, color: 'text-accent/5', rotate: 60 },
];

export const ParallaxBackground = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      {layers.map((layer, i) => (
        <div
          key={i}
          className={cn('absolute', layer.color)}
          style={{
            top: layer.top,
            left: layer.left,
            width: layer.size,
            height: layer.size,
            transform: `translateY(${offsetY * layer.speed}px) rotate(${layer.rotate}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <layer.Component className="w-full h-full"/>
        </div>
      ))}
    </div>
  );
};
