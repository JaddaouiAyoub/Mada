import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogIndexClient from './BlogIndexClient';
import { getAllPosts } from '@/lib/blog';

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
  const baseUrl = 'https://www.jaddaoui.com';
  
  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}/blog`,
      languages: { 
        fr: `${baseUrl}/fr/blog`, 
        ar: `${baseUrl}/ar/blog`, 
        'x-default': `${baseUrl}/fr/blog` 
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/blog`,
      siteName: 'Ayoub Jaddaoui',
      type: 'website',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t('title'),
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [
        {
          url: '/og-image.png',
          alt: t('title'),
        },
      ],
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getAllPosts(locale as 'fr' | 'ar');
  const baseUrl = 'https://www.jaddaoui.com';

  // JSON-LD: Blog structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${baseUrl}/${locale}/blog/#webpage`,
        url: `${baseUrl}/${locale}/blog`,
        name: 'Blog',
        isPartOf: {
          '@id': `${baseUrl}/#website`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/${locale}/blog/#breadcrumb`,
        },
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/${locale}/blog/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Accueil',
            item: `${baseUrl}/${locale}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${baseUrl}/${locale}/blog`,
          },
        ],
      },
      {
        '@type': 'ItemList',
        url: `${baseUrl}/${locale}/blog`,
        name: 'Articles du blog',
        itemListElement: posts.slice(0, 10).map((post, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          url: `${baseUrl}/${locale}/blog/${post.slug}`,
          name: post.title,
          description: post.excerpt,
          datePublished: post.date,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <BlogIndexClient posts={posts} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
