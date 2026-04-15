import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://jaddaoui.com'),
    title: {
    default: 'Jaddaoui Elevate - Agence Web Casablanca',
    template: '%s | Jaddaoui Elevate',
  },

  description:
    'Agence web & mobile à Casablanca spécialisée en développement moderne.',

  openGraph: {
    title: 'Jaddaoui Elevate - Agence Web Casablanca',
    description:
      'Agence web & mobile à Casablanca spécialisée en développement moderne.',
    url: 'https://jaddaoui.com',
    siteName: 'Jaddaoui Elevate',
    images: [
      {
        url: '/og-image.png', // 🔥 IMPORTANT
        width: 1200,
        height: 630,
        alt: 'Jaddaoui Elevate',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jaddaoui Elevate',
    description:
      'Agence web & mobile à Casablanca spécialisée en développement moderne.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: '/logo-dark.svg',
    apple: '/logo-dark.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
