import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const services = [
  {
    id: 'service-1',
    title: 'Basic Package',
    description: 'AI-powered promo video for launches, campaigns, and brand reveals.',
    image: '/Ai_Video_Package/3.png',
    footer: 'Perfect for social media, pitch decks, and website hero spots.'
  },
  {
    id: 'service-2',
    title: 'Standard Package',
    description: 'Short-form, attention-grabbing clips optimized for reels and ads.',
    image: '/Ai_Video_Package/5.png',
    footer: 'Designed to boost engagement and brand recall across platforms.'
  },
  {
    id: 'service-3',
    title: 'Premium Package',
    description: 'A premium AI-driven visual story that brings your brand narrative to life.',
    image: '/Ai_Video_Package/10.png',
    footer: 'Includes polished visuals, motion direction, and video-ready assets.'
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-accent mb-4">Service Packages</p>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">AI Video & Brand Support</h2>
          <p className="text-slate-300 text-lg leading-8">
            Discover three tailored packages that combine creative brand design with AI-enhanced video storytelling, crafted for modern businesses and digital brands.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 justify-items-center">
          {services.map(service => (
            <Dialog key={service.id}>
              <article className="group mx-auto w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-accent/25">
                <DialogTrigger asChild>
                  <div className="relative mx-auto w-[320px] sm:w-[360px] md:w-[420px] h-[240px] sm:h-[280px] overflow-hidden bg-slate-950/10 cursor-pointer">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-3">
                        Package
                      </span>
                      <h3 className="text-2xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-slate-200 text-sm leading-6">{service.description}</p>
                    </div>
                  </div>
                </DialogTrigger>
                <div className="p-6 border-t border-white/10 bg-slate-950/30">
                  <p className="text-sm text-slate-300 leading-6">{service.footer}</p>
                </div>
              </article>

              <DialogContent className="max-w-5xl p-0 bg-transparent shadow-none">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 bg-slate-950">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>
                <div className="mt-4 rounded-b-3xl border border-white/10 bg-background/95 p-6 text-center">
                  <DialogTitle className="text-xl font-bold text-white">{service.title}</DialogTitle>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
