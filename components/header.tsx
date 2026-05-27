'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToNewsletter = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center gap-3">
            <span className=" font-light tracking-[0.15em] uppercase transition-smooth hover:opacity-80" style={{ letterSpacing: '0.2em' }}>LUXEBYMO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#about" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">About</a>
            <a href="#preview" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Preview</a>
            <a href="#contact" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button variant="outline" onClick={scrollToNewsletter} className="tracking-wide uppercase text-xs">Notify Me</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            <a href="#about" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">About</a>
            <a href="#preview" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Preview</a>
            <a href="#contact" className="text-sm tracking-wide uppercase hover:text-accent transition-colors">Contact</a>
            <Button variant="outline" className="w-full tracking-wide uppercase text-xs mt-2">Notify Me</Button>
          </nav>
        )}
      </div>
    </header>
  );
}
