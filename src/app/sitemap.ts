import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SEO_SLUGS } from '@/lib/landing';
import { SITE_URL, localeAlternates } from '@/lib/site';
import { projects } from '@/data/projects';

const LOCALES = ['fr', 'ar'] as const;

type Entry = MetadataRoute.Sitemap[number];

function entry(
  locale: string,
  path: string,
  priority: number,
  changeFrequency: Entry['changeFrequency'],
  lastModified?: Date,
  withAlternates = true
): Entry {
  return {
    url: `${SITE_URL}/${locale}${path}`,
    lastModified: lastModified ?? new Date(),
    changeFrequency,
    priority,
    ...(withAlternates ? { alternates: { languages: localeAlternates(locale, path).languages } } : {}),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of LOCALES) {
    entries.push(entry(locale, '', 1.0, 'weekly'));
    entries.push(entry(locale, '/about', 0.8, 'monthly'));
    entries.push(entry(locale, '/blog', 0.9, 'weekly'));

    for (const slug of SEO_SLUGS) {
      entries.push(entry(locale, `/${slug}`, 0.85, 'monthly'));
    }

    const otherLocale = locale === 'fr' ? 'ar' : 'fr';
    const translatedSlugs = new Set(getAllPosts(otherLocale).map((p) => p.slug));
    for (const post of getAllPosts(locale)) {
      // Only declare hreflang alternates when the translation actually exists.
      entries.push(
        entry(
          locale,
          `/blog/${post.slug}`,
          0.7,
          'monthly',
          new Date(post.date),
          translatedSlugs.has(post.slug)
        )
      );
    }
  }

  // Project pages (French only)
  for (const project of projects) {
    entries.push(entry('fr', `/projets/${project.slug}`, 0.75, 'monthly', undefined, false));
  }

  return entries;
}
