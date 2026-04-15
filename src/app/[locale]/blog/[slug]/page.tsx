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
  if (!post) return {};

  return {
    title: `${post.title} | Jaddaoui Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: { fr: `/fr/blog/${slug}`, ar: `/ar/blog/${slug}` },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://jaddaoui.com/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Ayoub Jaddaoui'],
      images: [{ url: '/og-image.png' }],
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Ayoub Jaddaoui',
      url: 'https://jaddaoui.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Jaddaoui Elevate',
      logo: { '@type': 'ImageObject', url: 'https://jaddaoui.com/logo-dark.svg' },
    },
    image: 'https://jaddaoui.com/og-image.png',
    url: `https://jaddaoui.com/${locale}/blog/${slug}`,
    inLanguage: locale === 'ar' ? 'ar' : 'fr',
    keywords: post.tags?.join(', '),
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
