import Image from 'next/image';
import { getImageById } from '@/lib/placeholder-images';

export function AboutSection() {
  const aboutImage = getImageById('about-photo');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 flex justify-center">
            {aboutImage && (
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-accent/50 to-background">
                 <div className="rounded-full bg-background p-1">
                    <Image 
                        src={aboutImage.imageUrl} 
                        alt={aboutImage.description} 
                        fill 
                        className="object-cover rounded-full" 
                        data-ai-hint={aboutImage.imageHint} 
                        sizes="256px"
                    />
                 </div>
              </div>
            )}
          </div>
          <div className="lg:col-span-2 text-center lg:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I am Hafiz Ali Zaib, a Graphic Designer dedicated to crafting impactful brand identities across logos, posters, UI, and comprehensive brand management. My work is driven by deep brand understanding, meticulous attention to detail, and a commitment to visual clarity and scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
