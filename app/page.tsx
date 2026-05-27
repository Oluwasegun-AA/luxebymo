import Header from '@/components/header';
import ComingSoonHero from '@/components/coming-soon-hero';
import PreviewSection from '@/components/preview-section';
import NewsletterSection from '@/components/newsletter-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Header />
      <ComingSoonHero />
      <PreviewSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
