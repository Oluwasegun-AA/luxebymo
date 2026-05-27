import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager at TechCorp',
    content: 'StreamLine cut our workflow processing time by 80%. Our team can now focus on strategic initiatives instead of manual tasks.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupXYZ',
    content: 'The integration capabilities are outstanding. We connected our entire tech stack in just a few hours. Best investment we made this year.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Operations Lead at Enterprise Inc',
    content: 'The customer support is exceptional. Any issues we encountered were resolved within hours. Highly recommended for enterprise teams.',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Section Header */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Loved by Teams Everywhere
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say about their StreamLine experience.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
