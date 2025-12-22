import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className={cn(
      "fixed top-0 left-0 w-full p-4 md:p-6 z-40",
      "bg-background/30 backdrop-blur-lg border-b border-white/10"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-headline text-2xl font-bold text-white hover:text-accent transition-colors duration-300">
          HAZ
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#projects" className="text-slate-300 hover:text-white transition-colors">Portfolio</a>
          <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
