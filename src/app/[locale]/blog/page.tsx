import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import BlogIndexClient from './BlogIndexClient';
import { getAllPosts } from '@/lib/blog';
import { SITE_URL, SITE_NAME, OG_IMAGE, localeAlternates, ogLocale } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.blog' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      ...localeAlternates(locale, '/blog'),
      types: { 'application/rss+xml': `${SITE_URL}/${locale}/blog/rss.xml` },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${SITE_URL}/${locale}/blog`,
      siteName: SITE_NAME,
      type: 'website',
      locale: ogLocale(locale),
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: t('title'), type: 'image/png' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [{ url: OG_IMAGE, alt: t('title') }],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta.blog' });
  const posts = getAllPosts(locale as 'fr' | 'ar');
  const url = `${SITE_URL}/${locale}/blog`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        url,
        name: t('title'),
        description: t('description'),
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        author: { '@id': `${SITE_URL}/#person` },
        publisher: { '@id': `${SITE_URL}/#person` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        blogPost: posts.map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          url: `${url}/${post.slug}`,
          datePublished: post.date,
          author: { '@id': `${SITE_URL}/#person` },
        })),
      },
      breadcrumbSchema(`${url}#breadcrumb`, [
        { name: locale === 'ar' ? 'الرئيسية' : 'Accueil', url: `${SITE_URL}/${locale}` },
        { name: 'Blog', url },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <BlogIndexClient posts={posts} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
