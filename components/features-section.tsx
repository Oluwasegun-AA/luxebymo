import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Lock, BarChart3, Workflow } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Execute workflows at scale with sub-second response times. Process thousands of tasks simultaneously without breaking a sweat.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SSO, and compliance certifications. Your data stays secure with industry-leading security standards.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor workflow performance with detailed dashboards. Track metrics, identify bottlenecks, and optimize continuously.'
  },
  {
    icon: Workflow,
    title: 'Easy Integration',
    description: 'Connect to 500+ apps and services. Build complex workflows by connecting your favorite tools without any coding.'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Section Header */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Powerful Features Built for Teams
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to automate your workflow and scale your operations effortlessly.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
