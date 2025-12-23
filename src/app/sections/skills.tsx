'use client';

import {
  PenTool,
  Palette,
  Camera,
  Monitor,
  Clapperboard,
  ShoppingBag,
  Type,
  LayoutTemplate,
  Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = [
  { name: 'Logo Design', icon: PenTool },
  { name: 'Brand Identity', icon: Star },
  { name: 'UI/UX Design', icon: LayoutTemplate },
  { name: 'Social Media Posts', icon: Camera },
  { name: 'Poster Design', icon: Clapperboard },
  { name: 'Packaging', icon: ShoppingBag },
  { name: 'Color Theory', icon: Palette },
  { name: 'Typography', icon: Type },
  { name: 'Web Design', icon: Monitor },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl md:text-5xl font-bold mb-16 text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center text-center gap-4 animate-float"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/10 group-hover:bg-accent group-hover:border-accent/50 transition-all duration-300">
                <skill.icon className="w-12 h-12 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
