import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPostClient from './BlogPostClient';
import { getAllPosts, getPostBySlug } from '@/lib/blog';

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    const posts = getAllPosts(locale as 'fr' | 'ar');
    for (const post of posts) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as 'fr' | 'ar');
  const baseUrl = 'https://www.jaddaoui.com';
  
  if (!post) return {};

  return {
    title: `${post.title} | Ayoub Jaddaoui`,
    description: post.excerpt,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}/blog/${slug}`,
      languages: { 
        fr: `${baseUrl}/fr/blog/${slug}`, 
        ar: `${baseUrl}/ar/blog/${slug}`, 
        'x-default': `${baseUrl}/fr/blog/${slug}` 
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${baseUrl}/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Ayoub Jaddaoui'],
      siteName: 'Ayoub Jaddaoui',
      locale: locale === 'ar' ? 'ar_MA' : 'fr_MA',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: '/og-image.png',
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale as 'fr' | 'ar');
  if (!post) notFound();

  const allPosts = getAllPosts(locale as 'fr' | 'ar');
  const related = allPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const baseUrl = 'https://www.jaddaoui.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${baseUrl}/${locale}/blog/${slug}/#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        author: {
          '@type': 'Person',
          name: 'Ayoub Jaddaoui',
          url: `${baseUrl}`,
          image: `${baseUrl}/og-image.png`,
        },
        publisher: {
          '@type': 'Person',
          name: 'Ayoub Jaddaoui',
          url: `${baseUrl}`,
          image: `${baseUrl}/og-image.png`,
        },
        image: {
          '@type': 'ImageObject',
          url: `${baseUrl}/og-image.png`,
          width: 1200,
          height: 630,
        },
        url: `${baseUrl}/${locale}/blog/${slug}`,
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        isPartOf: {
          '@id': `${baseUrl}/${locale}/blog/#webpage`,
        },
        breadcrumb: {
          '@id': `${baseUrl}/${locale}/blog/${slug}/#breadcrumb`,
        },
        keywords: post.tags?.join(', '),
        mainEntity: {
          '@id': `${baseUrl}/${locale}/blog/${slug}/#article`,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/${locale}/blog/${slug}/#breadcrumb`,
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
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `${baseUrl}/${locale}/blog/${slug}`,
          },
        ],
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
        <BlogPostClient post={post} related={related} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
