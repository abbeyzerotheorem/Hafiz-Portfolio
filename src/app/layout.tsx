import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL('https://azgraphix.uk'),
  title: {
    default: 'Hafiz Ali Zaib | Graphic Designer',
    template: '%s | Hafiz Ali Zaib',
  },
  description:
    'Portfolio of Hafiz Ali Zaib, a Graphic Designer, Brand Identity Specialist, and AI Prompt Engineer crafting memorable visual brands.',
  keywords: [
    'Graphic Designer',
    'Brand Identity',
    'Logo Design',
    'UI Design',
    'Poster Design',
    'AI Prompt Engineering',
    'Creative Portfolio',
  ],
  authors: [{ name: 'Hafiz Ali Zaib', url: 'https://azgraphix.uk' }],
  creator: 'Hafiz Ali Zaib',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Hafiz Ali Zaib | Graphic Designer',
    description:
      'Portfolio of Hafiz Ali Zaib, a Graphic Designer, Brand Identity Specialist, and AI Prompt Engineer crafting memorable visual brands.',
    siteName: 'Hafiz Ali Zaib Portfolio',
    images: [
      {
        url: '/logos/hafiz.jpg',
        alt: 'Hafiz Ali Zaib branding and portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hafiz Ali Zaib | Graphic Designer',
    description:
      'Portfolio of Hafiz Ali Zaib, a Graphic Designer, Brand Identity Specialist, and AI Prompt Engineer crafting memorable visual brands.',
    creator: '@AZGraphix',
    images: ['/logos/hafiz.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700;800&family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hafiz Ali Zaib',
              url: 'https://azgraphix.uk',
              jobTitle: 'Graphic Designer',
              description:
                'Graphic Designer and Brand Identity Specialist creating memorable visual brands with AI-enhanced design workflows.',
              sameAs: [
                'https://www.instagram.com/azgraphix.uk/',
                'https://www.facebook.com/azgraphix.uk',
                'https://www.instagram.com/alizaibshahid_official/',
                'https://www.facebook.com/alizaibshahofficial',
              ],
            }),
          }}
        />
      </head>
      <body className="font-body bg-background text-foreground antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
