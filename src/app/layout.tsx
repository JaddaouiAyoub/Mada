import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://jaddaoui.com'),
  title: {
    default: 'Ayoub Jaddaoui — Développeur Full Stack | Casablanca, Maroc',
    template: '%s | Ayoub Jaddaoui',
  },

  applicationName: 'Ayoub Jaddaoui',

  appleWebApp: {
    capable: true,
    title: 'Ayoub Jaddaoui',
    statusBarStyle: 'default',
  },

  description:
    'Ayoub Jaddaoui (Jaddaoui Ayoub) — Développeur Full Stack basé à Casablanca (Casa). Création de sites web premium, applications mobiles iOS/Android, et plateformes SaaS. Expert Next.js, React & Flutter.',

  keywords: [
    'jaddaoui',
    'ayoub jaddaoui',
    'jaddaoui ayoub',
    'developpeur casa',
    'développeur casablanca',
    'développeur full stack maroc',
    'freelance web casablanca',
    'création site web maroc',
    'développeur web freelance',
    'développeur application mobile',
  ],

  authors: [{ name: 'Ayoub Jaddaoui', url: 'https://jaddaoui.com' }],
  creator: 'Ayoub Jaddaoui',
  publisher: 'Ayoub Jaddaoui',

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

  openGraph: {
    title: 'Ayoub Jaddaoui — Développeur Full Stack | Casablanca, Maroc',
    description:
      'Développeur Full Stack basé à Casablanca. Sites web premium, applications mobiles iOS/Android, plateformes SaaS. Spécialiste Next.js, React & Flutter.',
    url: 'https://jaddaoui.com',
    siteName: 'Ayoub Jaddaoui',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayoub Jaddaoui — Développeur Full Stack',
        type: 'image/png',
      },
    ],
    locale: 'fr_MA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Ayoub Jaddaoui — Développeur Full Stack',
    description:
      'Développeur Full Stack basé à Casablanca. Sites web premium, applications mobiles iOS/Android, plateformes SaaS. Spécialiste Next.js, React & Flutter.',
    images: [
      {
        url: '/og-image.png',
        alt: 'Ayoub Jaddaoui — Développeur Full Stack',
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
