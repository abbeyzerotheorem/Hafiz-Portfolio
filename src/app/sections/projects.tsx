

'use client';

import { useMemo, useState } from 'react';
import { projects, ProjectCategory, categoryCounts } from '@/lib/data';
import { getImageById, ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

type ProjectWithMedia = (typeof projects)[0] & { image?: ImagePlaceholder };

function ProjectCard({ project }: { project: ProjectWithMedia }) {
  if (!project.image && !project.videoUrl) return null;

  const label = project.image?.description ?? project.title;
  const hint = project.image?.imageHint ?? project.title;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group overflow-hidden rounded-2xl bg-white/[.08] backdrop-blur-[12px] border border-white/[.1] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-accent/20 hover:border-accent/50 cursor-pointer">
          <CardContent className="p-0">
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={project.image!.imageUrl}
                  alt={project.image!.description}
                  fill
                  loading="lazy"
                  quality={65}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={project.image!.imageHint}
                />
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="font-headline text-xl font-bold text-white mb-2">{label}</h3>
                <Badge variant="outline" className="border-accent/50 text-accent font-mono text-xs transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">{project.category}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="p-0 border-0 max-w-4xl bg-transparent">
        <DialogTitle className="sr-only">{label}</DialogTitle>
        <div className="relative aspect-video bg-black">
          {project.videoUrl ? (
            <video
              controls
              src={project.videoUrl}
              className="h-full w-full object-contain"
            />
          ) : (
            <Image
              src={project.image!.imageUrl}
              alt={project.image!.description}
              fill
              loading="lazy"
              quality={65}
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}


export function ProjectsSection() {
  const categories: ('All' | ProjectCategory)[] = ['All', 'Logos', 'Posters', 'UI Design', 'Brands Managed', '3D Animation'];
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [showAll, setShowAll] = useState(false);
  const initialProjectCount = 6;

  const handleCategoryChange = (category: 'All' | ProjectCategory) => {
    setActiveCategory(category);
    setShowAll(false);
  }

  const allProjects = useMemo(
    () => projects.map(p => ({ ...p, image: p.imageId ? getImageById(p.imageId) : undefined })),
    []
  );

  const shuffledAllProjects = useMemo(() => {
    const items = [...allProjects];
    for (let i = items.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, [activeCategory, allProjects]);

  const filteredProjects = activeCategory === 'All'
    ? shuffledAllProjects
    : allProjects.filter(p => p.category === activeCategory);

  const visibleProjects = activeCategory === 'All' && !showAll 
    ? filteredProjects.slice(0, initialProjectCount) 
    : filteredProjects;

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
              onClick={() => handleCategoryChange(category)}
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
          {visibleProjects.map(project => (
            (project.image || project.videoUrl) && <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {activeCategory === 'All' && filteredProjects.length > initialProjectCount && !showAll && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="rounded-full font-bold text-base bg-white/10 backdrop-blur-md border-white/10 text-white hover:bg-white/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20"
            >
              View More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
