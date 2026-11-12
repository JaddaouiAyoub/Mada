import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import BlogPostClient from './BlogPostClient';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { SITE_URL, SITE_NAME, OG_IMAGE, ogLocale } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

type Locale = 'fr' | 'ar';

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const post of getAllPosts(locale as Locale)) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

/** hreflang alternates only for languages where this article actually exists. */
function postAlternates(locale: string, slug: string) {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    if (getPostBySlug(slug, l as Locale)) languages[l] = `${SITE_URL}/${l}/blog/${slug}`;
  }
  if (languages.fr) languages['x-default'] = languages.fr;
  return { canonical: `${SITE_URL}/${locale}/blog/${slug}`, languages };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as Locale);
  if (!post) return {};
  const url = `${SITE_URL}/${locale}/blog/${slug}`;

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    alternates: postAlternates(locale, slug),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [SITE_NAME],
      section: post.category,
      tags: post.tags,
      siteName: SITE_NAME,
      locale: ogLocale(locale),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: post.title, type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [{ url: OG_IMAGE, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = getPostBySlug(slug, locale as Locale);
  if (!post) notFound();

  const related = getAllPosts(locale as Locale)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  const url = `${SITE_URL}/${locale}/blog/${slug}`;
  const wordCount = post.content.split(/\s+/).filter(Boolean).length;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: { '@id': `${SITE_URL}/#person`, '@type': 'Person', name: SITE_NAME, url: `${SITE_URL}/` },
        publisher: { '@id': `${SITE_URL}/#person` },
        image: { '@type': 'ImageObject', url: `${SITE_URL}${OG_IMAGE}`, width: 1200, height: 630 },
        url,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        articleSection: post.category,
        keywords: post.tags?.join(', '),
        wordCount,
        timeRequired: `PT${post.readTime}M`,
        isPartOf: { '@id': `${SITE_URL}/${locale}/blog#blog` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      breadcrumbSchema(`${url}#breadcrumb`, [
        { name: locale === 'ar' ? 'الرئيسية' : 'Accueil', url: `${SITE_URL}/${locale}` },
        { name: 'Blog', url: `${SITE_URL}/${locale}/blog` },
        { name: post.title, url },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <BlogPostClient post={post} related={related} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
