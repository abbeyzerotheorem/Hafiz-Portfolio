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

const initialLayers = [
    { Component: Diamond, top: '15%', left: '10%', size: 60, color: 'text-accent/10', rotate: 45, delay: 0 },
    { Component: Square, top: '25%', left: '85%', size: 80, color: 'text-white/5', rotate: 15, delay: 1 },
    { Component: Plus, top: '5%', left: '40%', size: 40, color: 'text-accent/10', rotate: 0, delay: 2 },
    { Component: Diamond, top: '70%', left: '5%', size: 100, color: 'text-white/5', rotate: 75, delay: 3 },
    { Component: Square, top: '80%', left: '90%', size: 50, color: 'text-accent/10', rotate: 30, delay: 4 },
    { Component: Plus, top: '50%', left: '50%', size: 70, color: 'text-white/5', rotate: 45, delay: 5 },
    { Component: Square, top: '95%', left: '20%', size: 120, color: 'text-accent/5', rotate: 60, delay: 6 },
    { Component: Diamond, top: '5%', left: '95%', size: 30, color: 'text-accent/10', rotate: 20, delay: 7 },
    { Component: Plus, top: '90%', left: '70%', size: 50, color: 'text-white/5', rotate: -15, delay: 8 },
    { Component: Square, top: '40%', left: '15%', size: 45, color: 'text-accent/5', rotate: 0, delay: 9 },
];

export const ParallaxBackground = () => {
  const [layers, setLayers] = useState<any[]>([]);

  useEffect(() => {
    setLayers(
      initialLayers.map(layer => ({
        ...layer,
        animationDuration: `${Math.random() * 5 + 5}s`
      }))
    );
  }, []);

  if (layers.length === 0) {
    return <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden" />;
  }

  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      {layers.map((layer, i) => (
        <div
          key={i}
          className={cn('absolute animate-float', layer.color)}
          style={{
            top: layer.top,
            left: layer.left,
            width: layer.size,
            height: layer.size,
            transform: `rotate(${layer.rotate}deg)`,
            animationDelay: `${layer.delay * 0.5}s`,
            animationDuration: layer.animationDuration
          }}
        >
          <layer.Component className="w-full h-full"/>
        </div>
      ))}
    </div>
  );
};
