'use client';

import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 rounded-full h-12 w-12 transition-opacity duration-300',
        'bg-accent/80 backdrop-blur-md border-accent/50 text-accent-foreground hover:bg-accent hover:border-accent',
        'shadow-lg shadow-accent/30',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-6 w-6" />
    </Button>
  );
}
