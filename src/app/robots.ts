import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/.well-known/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0.5,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://www.jaddaoui.com/sitemap.xml',
      'https://www.jaddaoui.com/fr/sitemap.xml',
      'https://www.jaddaoui.com/ar/sitemap.xml',
    ],
    host: 'https://www.jaddaoui.com',
  };
}
