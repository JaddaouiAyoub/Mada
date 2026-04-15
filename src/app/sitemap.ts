import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const BASE_URL = 'https://jaddaoui.com';
const LOCALES = ['fr', 'ar'] as const;
const SEO_SLUGS = ['agence-web-maroc', 'developpement-mobile-maroc', 'developpeur-casablanca', 'jaddaoui-agency'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    // Homepage
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: { fr: `${BASE_URL}/fr`, ar: `${BASE_URL}/ar` } },
    });

    // About
    entries.push({
      url: `${BASE_URL}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: { languages: { fr: `${BASE_URL}/fr/about`, ar: `${BASE_URL}/ar/about` } },
    });

    // Blog index
    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: { languages: { fr: `${BASE_URL}/fr/blog`, ar: `${BASE_URL}/ar/blog` } },
    });

    // Blog posts
    const posts = getAllPosts(locale as 'fr' | 'ar');
    for (const post of posts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: {
            fr: `${BASE_URL}/fr/blog/${post.slug}`,
            ar: `${BASE_URL}/ar/blog/${post.slug}`,
          },
        },
      });
    }

    // SEO landing pages
    for (const slug of SEO_SLUGS) {
      entries.push({
        url: `${BASE_URL}/${locale}/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: {
            fr: `${BASE_URL}/fr/${slug}`,
            ar: `${BASE_URL}/ar/${slug}`,
          },
        },
      });
    }
  }

  return entries;
}
