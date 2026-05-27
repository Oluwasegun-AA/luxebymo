'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('✓ Thank you! Check your email for early access details.');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to submit. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-4xl md:text-5xl font-light tracking-tight mb-6 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
          Be Among the First
        </h2>
        <p className={`text-lg font-light opacity-90 mb-12 max-w-2xl mx-auto ${isLoaded ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          Subscribe to our exclusive mailing list and receive early access to Luxebymo's inaugural collection.
        </p>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className={`max-w-md mx-auto flex flex-col sm:flex-row gap-3 ${isLoaded ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className="text-primary-foreground placeholder:opacity-60 bg-primary-foreground/10 border-primary-foreground/20 transition-smooth focus:bg-primary-foreground/20 focus:border-primary-foreground/40"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 tracking-wide uppercase text-sm whitespace-nowrap transition-smooth hover-lift disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Notify Me'}
          </Button>
        </form>

        {/* Feedback message below the form */}
        {message && (
          <p className={`text-sm mt-4 font-light transition-smooth ${message.includes('Thank you') ? 'text-green-200' : 'text-red-200'}`}>
            {message}
          </p>
        )}

        <p className={`text-xs opacity-70 mt-6 font-light transition-smooth ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
