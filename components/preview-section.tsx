'use client';

import { useEffect, useRef, useState } from 'react';

export default function PreviewSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="preview" className="w-full py-20 md:py-32 bg-background" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={(el) => {
            if (el) elementsRef.current[0] = el;
          }}
          className="mb-16 text-center animate-scroll-in scroll-stagger-1"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4 text-foreground">
            A Glimpse of Excellence
          </h2>
          <p className="text-muted-foreground font-light">
            Discover the essence of luxury craftsmanship
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Featured large image */}
          <div
            ref={(el) => {
              if (el) elementsRef.current[1] = el;
            }}
            className="md:row-span-2 overflow-hidden rounded-sm animate-scroll-in scroll-stagger-2"
          >
            <div>

              <img
                src="/luxury-fashion-elegant-leather-bag.jpg"
                alt="Luxury fashion item"
                className="w-full h-full object-cover rounded-sm transition-smooth hover:scale-105 cursor-pointer"
              />
              <img
                src="luxebymo.png"
                alt="Luxury fashion item"
                className="w-full h-full object-cover rounded-sm transition-smooth hover:scale-105 cursor-pointer"
              />

            </div>
          </div>

          {/* Side images */}
          <div className="flex flex-col gap-8">
            <div
              ref={(el) => {
                if (el) elementsRef.current[2] = el;
              }}
              className="overflow-hidden rounded-sm animate-scroll-in scroll-stagger-3"
            >
              <img
                src="/og-image.png"
                alt="brand detail"
                className="w-full h-full object-cover rounded-sm transition-smooth hover:scale-105 cursor-pointer"
              />
            </div>
            <div
              ref={(el) => {
                if (el) elementsRef.current[3] = el;
              }}
              className="overflow-hidden rounded-sm animate-scroll-in scroll-stagger-4"
            >
              <img
                src="/luxury-brand-accessories.jpg"
                alt="Accessories"
                className="w-full h-full object-cover rounded-sm transition-smooth hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Description text */}
        <div
          ref={(el) => {
            if (el) elementsRef.current[4] = el;
          }}
          className="mt-16 max-w-2xl animate-scroll-in scroll-stagger-2"
        >
          <p className="text-sm tracking-wide uppercase text-accent mb-4 transition-smooth">Craftsmanship</p>
          <h3 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Where Heritage Meets Innovation
          </h3>
          <p className="text-muted-foreground font-light leading-relaxed">
            Every piece in the Luxebymo collection is a testament to meticulous attention to detail and an unwavering commitment to quality. Our artisans blend traditional techniques with contemporary design, creating timeless pieces that transcend trends.
          </p>
        </div>
      </div>
    </section>
  );
}
