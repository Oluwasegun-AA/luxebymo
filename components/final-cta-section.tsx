import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground text-pretty">
            Ready to Streamline Your Workflow?
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl text-pretty">
            Join thousands of teams who are already saving hours every week. Start your free trial today—no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 gap-2"
            >
              Start Free 14-Day Trial <ArrowRight size={18} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/80">
            Free forever for single users • Full feature access • No credit card needed
          </p>
        </div>
      </div>
    </section>
  );
}
