import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutClient from './AboutClient';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.about' });
  const baseUrl = 'https://www.jaddaoui.com';
  
  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: { 
        fr: `${baseUrl}/fr/about`, 
        ar: `${baseUrl}/ar/about`, 
        'x-default': `${baseUrl}/fr/about` 
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/about`,
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ayoub Jaddaoui',
    url: 'https://www.jaddaoui.com',
    image: 'https://www.jaddaoui.com/og-image.png',
    jobTitle: 'Développeur Full Stack & Freelance',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    email: 'jaddaouiayoub02@gmail.com',
    telephone: '+212700547163',
    knowsAbout: [
      'Next.js', 'React', 'TypeScript', 'Flutter', 'Node.js',
      'PostgreSQL', 'SEO', 'UI/UX Design', 'SaaS Architecture',
    ],
    sameAs: ['https://github.com/jaddaouiayoub'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <AboutClient locale={locale} />
      </main>
      <Footer />
    </>
  );
}
