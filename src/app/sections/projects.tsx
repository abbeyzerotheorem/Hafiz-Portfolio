'use client';

import { useState } from 'react';
import { projects, ProjectCategory, categoryCounts } from '@/lib/data';
import { getImageById, ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type ProjectWithImage = (typeof projects)[0] & { image: ImagePlaceholder | undefined };

function ProjectCard({ project }: { project: ProjectWithImage }) {
  if (!project.image) return null;

  return (
    <Card className="group overflow-hidden rounded-2xl bg-white/[.08] backdrop-blur-[12px] border border-white/[.1] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image.imageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.image.imageHint}
          />
        </div>
        <div className="p-6">
          <div className="flex justify-between items-start">
            <h3 className="font-headline text-xl font-bold text-white mb-2">{project.title}</h3>
            <Badge variant="outline" className="border-accent/50 text-accent font-mono text-xs transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">{project.category}</Badge>
          </div>
          <p className="text-slate-400 text-sm transition-opacity duration-300 md:opacity-0 group-hover:opacity-100">{project.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}


export function ProjectsSection() {
  const categories: ('All' | ProjectCategory)[] = ['All', 'Logos', 'Posters', 'UI Design', 'Brands Managed'];
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');

  const filteredProjects = (activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory))
    .map(p => ({ ...p, image: getImageById(p.imageId) }));

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-headline text-4xl md:text-5xl font-bold mb-4 text-white">My Portfolio</h2>
        <p className="text-center text-slate-300 max-w-2xl mx-auto mb-12">
            A curated collection of my work in brand identity, visual design, and user interface development.
        </p>
        
        <div className="flex justify-center flex-wrap gap-3 mb-16">
          {categories.map(category => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant="outline"
              className={cn(
                "rounded-full backdrop-blur-sm border-white/10 transition-all duration-300 text-white font-medium",
                activeCategory === category 
                  ? 'bg-accent text-accent-foreground border-accent' 
                  : 'bg-white/10 hover:bg-white/20'
              )}
            >
              {category} <span className="ml-2 opacity-70 text-xs">({categoryCounts[category]})</span>
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            project.image && <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
