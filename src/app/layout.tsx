import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://jaddaoui.com'),
  title: {
    default: 'Jaddaoui Elevate — Agence Web & Développement Mobile au Maroc',
    template: '%s | Jaddaoui Elevate',
  },

  description:
    'Agence digitale basée à Casablanca. Sites web premium, applications mobiles iOS/Android, plateformes SaaS.',

  openGraph: {
    title: 'Jaddaoui Elevate — Agence Web & Développement Mobile au Maroc',
    description:
      'Agence digitale basée à Casablanca. Sites web premium, applications mobiles iOS/Android, plateformes SaaS.',
    url: 'https://jaddaoui.com',
    siteName: 'Jaddaoui Elevate',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jaddaoui Elevate',
        type: 'image/png',
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Jaddaoui Elevate',
    description:
      'Agence digitale basée à Casablanca. Sites web premium, applications mobiles iOS/Android, plateformes SaaS.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Jaddaoui Elevate',
      },
    ],
  },

  icons: {
    icon: [
      {
        url: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/favicon.ico',
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  },

  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
