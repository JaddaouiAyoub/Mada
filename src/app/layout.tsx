import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.jaddaoui.com'),
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
    'Ayoub Jaddaoui (Jaddaoui Ayoub) — Développeur Full Stack basé à Casablanca (Casa). Création de sites web premium, applications mobiles iOS/Android, et plateformes SaaS. Expert Spring boot, Angular, Next.js, React & Flutter.',

  keywords: [
    // Branding
    'Ayoub Jaddaoui',
    'Jaddaoui Ayoub',
    'jaddaoui',

    // Core métier
    'développeur full stack maroc',
    'développeur web casablanca',
    'freelance web maroc',
    'développeur freelance casablanca',

    // Services
    'création site web maroc',
    'création application mobile maroc',
    'développement SaaS maroc',
    'création site e-commerce maroc',

    // Technologies
    'Next.js developer Morocco',
    'Flutter developer Morocco',
    'React developer Morocco',
    'Spring Boot developer Morocco',

    // Local SEO
    'développeur casablanca',
    'agence web casablanca',
    'développeur mobile maroc',
  ],

  authors: [{ name: 'Ayoub Jaddaoui', url: 'https://www.jaddaoui.com' }],
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
      'Développeur Full Stack basé à Casablanca. Sites web premium, applications mobiles iOS/Android, plateformes SaaS. Spécialiste Spring boot, Angular, Next.js, React & Flutter.',
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
