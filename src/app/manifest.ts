import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ayoub Jaddaoui — Développeur Full Stack',
    short_name: 'Ayoub Jaddaoui',
    description:
      'Développeur Full Stack basé à Casablanca. Création de sites web premium, applications mobiles iOS/Android, et plateformes SaaS.',
    start_url: '/fr',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    screenshots: [
      {
        src: '/og-image.png',
        type: 'image/png',
        sizes: '1200x630',
        form_factor: 'wide',
      },
    ],
    categories: ['business', 'developer'],
    shortcuts: [
      {
        name: 'Blog',
        short_name: 'Blog',
        description: 'Lire les derniers articles',
        url: '/fr/blog',
        icons: [{ src: '/favicon.svg', sizes: 'any' }],
      },
      {
        name: 'À Propos',
        short_name: 'About',
        description: 'En savoir plus sur Ayoub',
        url: '/fr/about',
        icons: [{ src: '/favicon.svg', sizes: 'any' }],
      },
    ],
    categories_ar: ['أعمال', 'مطور'],
    lang: 'fr',
    dir: 'auto',
    prefer_related_applications: false,
  };
}
