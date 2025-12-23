import { Button } from '@/components/ui/button';
import { getImageById } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroSection() {
  const heroImage = getImageById('hero-portrait');
  return (
    <section id="hero" className="container mx-auto px-4 py-24 md:py-32 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="relative inline-block">
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl font-extrabold text-white uppercase tracking-tighter">
              Graphic
              <br />
              Designer
            </h1>
            <p className="font-serif text-3xl md:text-4xl text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] whitespace-nowrap">
              Hafiz Ali Zaib
            </p>
          </div>

          <div className="mt-8 lg:mt-12 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 justify-center lg:justify-start">
            <p className="text-slate-300 max-w-xs leading-relaxed">
              Creative designer specializing in impactful brand identities and visual storytelling.
            </p>
            <Button asChild variant="link" className="text-accent hover:text-white p-0">
              <Link href="#contact">
                Contact me <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

        </div>

        <div className="flex justify-center">
          {heroImage && (
            <div className="relative w-[300px] h-[400px] sm:w-[380px] sm:h-[500px] rounded-3xl overflow-hidden border border-white/[.1] p-2 bg-white/[.08] backdrop-blur-[12px]">
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover rounded-2xl"
                data-ai-hint={heroImage.imageHint}
                sizes="(max-width: 640px) 300px, 380px"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
