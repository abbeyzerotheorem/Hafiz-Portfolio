import Link from 'next/link';
import { Instagram, Dribbble, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    href: "https://www.instagram.com/",
    icon: Instagram,
    label: "Instagram"
  },
  {
    href: "https://dribbble.com/",
    icon: Dribbble,
    label: "Dribbble"
  },
  {
    href: "https://www.linkedin.com/",
    icon: Linkedin,
    label: "LinkedIn"
  }
];

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <span className="font-headline text-xl font-bold text-white">HAZ</span>
          <p className="text-sm text-slate-400">&copy; {new Date().getFullYear()} Hafiz Ali Zaib. All rights reserved.</p>
        </div>
        <div className="flex gap-2">
          {socialLinks.map((link) => (
             <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}
              className="p-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-slate-300 hover:text-accent hover:border-accent transition-all duration-300">
                <link.icon className="w-5 h-5" />
             </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
