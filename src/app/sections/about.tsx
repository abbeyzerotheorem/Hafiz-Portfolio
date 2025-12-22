import Image from 'next/image';
import { getImageById } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const stats = [
    { value: '50+', label: 'Design Shopify Stores' },
    { value: '300+', label: 'Graphic Designs' },
    { value: '20+', label: 'Brands Managed' },
];

export function AboutSection() {
  const aboutImage = getImageById('about-photo');

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex justify-center">
            {aboutImage && (
              <div className="relative w-[300px] h-[380px] sm:w-[350px] sm:h-[440px] rounded-3xl overflow-hidden p-2 bg-white/[.08] backdrop-blur-[12px] border border-white/[.1]">
                <Image 
                    src={aboutImage.imageUrl} 
                    alt={aboutImage.description} 
                    fill 
                    className="object-cover rounded-2xl" 
                    data-ai-hint={aboutImage.imageHint} 
                    sizes="(max-width: 640px) 300px, 350px"
                />
              </div>
            )}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                Hi! I'm Hafiz Ali Zaib
            </h2>
            <h3 className="font-headline text-4xl md:text-5xl font-bold text-accent mb-6">
                I'm a Graphic Designer
            </h3>
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              I specialize in logo design and have created professional logos for many brands – all at reasonable prices. I also design social media posts and handle all other graphic design work with creativity and high quality.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-5 py-3 text-center w-36">
                        <p className="font-headline text-3xl font-bold text-white">{stat.value}</p>
                        <p className="text-sm text-slate-300">{stat.label}</p>
                    </div>
                ))}
            </div>

            <Button asChild size="lg" className="rounded-full font-bold text-base bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20">
                <Link href="#contact">Get in Touch</Link>
            </Button>

          </div>
        </div>
      </div>
    </section>
  );
}
