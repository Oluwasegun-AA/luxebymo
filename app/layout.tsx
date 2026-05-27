import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const _geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Luxebymo - Fashion Redefined',
  description: 'Experience the pinnacle of Affordable luxury fashion. Luxebymo redefines elegance and sophistication.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: '/favicon.jpg',
    apple: '/favicon.jpg',
    shortcut: '/favicon.jpg',
  },
  manifest: '/site.webmanifest',
  themeColor: '#1a1a1a',
  keywords: ['luxury fashion', 'designer clothing', 'premium fashion', 'Luxebymo', 'Luxebymo', 'coming soon'],
  authors: [{ name: 'Luxebymo' }],
  creator: 'Luxebymo',
  publisher: 'Luxebymo',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.luxebymo.com',
    siteName: 'Luxebymo',
    title: 'Luxebymo - Fashion Redefined',
    description: 'Experience the pinnacle of Affordable luxury fashion. Luxebymo redefines elegance and sophistication.',
    images: [
      {
        url: process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png` : 'https://www.luxebymo.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Luxebymo - Luxury Fashion Brand',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@luxebymo',
    creator: '@luxebymo',
    title: 'Luxebymo - Fashion Redefined',
    description: 'Experience the pinnacle of Affordable luxury fashion. Luxebymo redefines elegance and sophistication.',
    images: [process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.png` : 'https://www.luxebymo.com/og-image.png'],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.luxebymo.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
