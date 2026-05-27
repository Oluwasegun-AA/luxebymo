
'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ComingSoonHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToNewsletter = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <div className={`w-96 h-96 rounded-full bg-accent blur-3xl transition-smooth-slow ${isLoaded ? 'opacity-5' : 'opacity-0'}`}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Subtle badge */}
        <div className={`inline-block mb-8 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          <span className="text-xs tracking-widest uppercase text-accent">Luxury Fashion</span>
        </div>

        {/* Main headline */}
        <h1 className={`text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-foreground text-balance ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Exceptional
          <br />
          <span className="font-light italic text-accent transition-smooth hover:opacity-80">Elegance</span>
          <br />
          Awaits
        </h1>

        {/* Description */}
        <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light leading-relaxed ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <strong>Luxebymo</strong> is crafting the future of <strong>affordable luxury fashion</strong>. Prepare to experience sophistication redefined, where heritage meets innovation.
        </p>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <Button size="lg" onClick={scrollToNewsletter} className="gap-2 tracking-wide uppercase text-sm transition-smooth hover-lift">
            Join the Waitlist <ArrowRight size={18} className="transition-smooth group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="tracking-wide uppercase text-sm transition-smooth hover-lift">
            Learn More
          </Button>
        </div>

        {/* Coming soon date */}
        <div className={`mt-16 pt-12 border-t border-border ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <p className="text-xs tracking-widest uppercase text-muted-foreground animate-glow-pulse">
            Launching Soon . . .
          </p>
        </div>
      </div>
    </section>
  );
}
