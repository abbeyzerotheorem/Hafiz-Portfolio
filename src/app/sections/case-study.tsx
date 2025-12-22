import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { caseStudyLogoIds } from '@/lib/data';
import { getImageById } from "@/lib/placeholder-images";
import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CaseStudySection() {
  const logos = caseStudyLogoIds.map(id => getImageById(id)).filter(Boolean);

  return (
    <section id="case-study" className="py-24 sm:py-32 bg-background/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Carousel opts={{ loop: true }} className="w-full max-w-md mx-auto">
              <CarouselContent>
                {logos.map(logo => (
                  logo && <CarouselItem key={logo.id}>
                    <Card className="aspect-video flex items-center justify-center p-6 bg-white/[.08] backdrop-blur-[12px] border border-white/[.1] rounded-2xl">
                        <div className="relative w-4/5 h-4/5">
                            <Image src={logo.imageUrl} alt={logo.description} fill className="object-contain" data-ai-hint={logo.imageHint} />
                        </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[-50px] bg-white/10 border-white/20 hover:bg-accent hover:text-accent-foreground" />
              <CarouselNext className="right-[-50px] bg-white/10 border-white/20 hover:bg-accent hover:text-accent-foreground"/>
            </Carousel>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Study: Logo Design
            </h3>
            <p className="text-slate-300 mb-8">
              This collection showcases my approach to logo design, focusing on creating unique and scalable visual identities for diverse clients. From the modern and dynamic 'YOUNG STARS' to the corporate strength of 'ZIM LOGISTICS LTD,' each logo is crafted with precision and a deep understanding of the brand's core message.
            </p>
            <Button size="lg" className="rounded-full font-bold text-base bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 hover:border-accent transition-all duration-300 shadow-lg hover:shadow-accent/20">
                View Case Study
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
