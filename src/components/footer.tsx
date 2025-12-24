import Link from 'next/link';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';

const socialLinks = [
  {
    href: "https://www.instagram.com/azgraphix.uk/",
    icon: Instagram,
    label: "Instagram (AZGraphix)"
  },
  {
    href: "https://www.facebook.com/azgraphix.uk",
    icon: Facebook,
    label: "Facebook (AZGraphix)"
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
          <div className="relative h-10 w-20">
              <Image
                src="https://i.pinimg.com/1200x/32/d3/b3/32d3b3e05b5cd641c8390508bb8755e0.jpg"
                alt="HAZ Logo"
                fill
                className="object-contain"
              />
          </div>
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
