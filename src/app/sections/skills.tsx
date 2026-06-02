'use client';

import {
  BrainCircuit,
  Palette,
  ShoppingBag,
  FileText,
  Globe,
} from 'lucide-react';

const categories = [
  {
    title: 'AI & Creative Production',
    icon: BrainCircuit,
    items: [
      'AI Prompt Engineering (AI Tools & Automation)',
      'AI Cinematic Video Designer',
      'Video Editing',
      'Creative Content Writing',
    ],
  },
  {
    title: 'Design & Branding',
    icon: Palette,
    items: ['Canva Designing', 'Logo Designing', 'Branding & Visual Identity'],
  },
  {
    title: 'E-Commerce & Business',
    icon: ShoppingBag,
    items: ['Shopify Store Management (A to Z)', 'Digital Marketing', 'Social Media Management'],
  },
  {
    title: 'Business & Administrative Operations',
    icon: FileText,
    items: ['Financial Record Keeping', 'Business Documentation & Office Operations'],
  },
  {
    title: 'Travel & Support Services',
    icon: Globe,
    items: ['Visa Processing Assistance', 'Travel Booking & Reservation Management'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl md:text-5xl font-bold mb-16 text-white">
          My Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-accent/20"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent shadow-lg shadow-accent/10 transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                <category.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <ul className="space-y-3 text-slate-300">
                {category.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
