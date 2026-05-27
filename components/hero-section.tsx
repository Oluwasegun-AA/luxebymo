import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">✨ Workflow Automation Simplified</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-pretty">
            Automate Your Workflow,<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Amplify Your Impact
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
            StreamLine empowers teams to automate repetitive tasks, reduce manual work, and focus on what matters most. Build powerful workflows in minutes, not days.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="pt-8 text-sm text-muted-foreground">
            <p>Trusted by 10,000+ teams worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
