import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ParallaxBackground } from '@/components/parallax-background';
import { HeroSection } from '@/app/sections/hero';
import { ProjectsSection } from '@/app/sections/projects';
import { AboutSection } from '@/app/sections/about';
import { ContactSection } from '@/app/sections/contact';
import { EducationSection } from '@/app/sections/education';
import { ScrollToTopButton } from '@/components/scroll-to-top-button';


export default function Home() {
  return (
          <div className="relative flex flex-col min-h-screen">

      <ParallaxBackground />
      <Header />
      <main className="flex-grow z-10">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
