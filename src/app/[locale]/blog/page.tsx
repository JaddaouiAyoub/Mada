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
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/blog`,
      languages: { fr: '/fr/blog', ar: '/ar/blog' },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://jaddaoui.com/${locale}/blog`,
      images: [{ url: '/og-image.png' }],
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

  return (
    <>
      <Navbar />
      <main>
        <BlogIndexClient posts={posts} locale={locale} />
      </main>
      <Footer />
    </>
  );
}
