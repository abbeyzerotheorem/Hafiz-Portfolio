import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-4 relative z-10">
      <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold text-white animate-fade-in-down">
        Hafiz Ali Zaib
      </h1>
      <p className="mt-4 text-lg md:text-xl lg:text-2xl text-slate-300 max-w-3xl">
        Graphic Designer &middot; Brand Identity Specialist
      </p>
      <Button asChild size="lg" className="mt-8 rounded-full font-bold text-base bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20">
        <Link href="#projects">Explore My Portfolio</Link>
      </Button>
    </section>
  );
}
