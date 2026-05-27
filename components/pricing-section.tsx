import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for individuals and small teams',
    price: '$29',
    period: '/month',
    features: [
      'Up to 100 workflows',
      'Basic integrations',
      'Email support',
      '5 GB storage',
      'Community access'
    ],
    cta: 'Start Free Trial',
    highlighted: false
  },
  {
    name: 'Professional',
    description: 'For growing teams and organizations',
    price: '$99',
    period: '/month',
    features: [
      'Unlimited workflows',
      '500+ integrations',
      'Priority support',
      '100 GB storage',
      'Advanced analytics',
      'Team collaboration',
      'Custom branding'
    ],
    cta: 'Start Free Trial',
    highlighted: true
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    period: 'pricing',
    features: [
      'Unlimited everything',
      'Custom integrations',
      '24/7 phone support',
      'Unlimited storage',
      'Advanced security',
      'Dedicated account manager',
      'SLA guarantee'
    ],
    cta: 'Contact Sales',
    highlighted: false
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Section Header */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your team. Always have the option to upgrade or downgrade.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 w-full lg:gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`border-border transition-all ${plan.highlighted ? 'lg:scale-105 ring-2 ring-primary' : ''}`}
              >
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <div>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>

                  <Button
                    className={plan.highlighted ? '' : 'bg-secondary text-foreground hover:bg-secondary/80'}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground text-left">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
