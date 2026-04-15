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
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { fr: '/fr/about', ar: '/ar/about' },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://jaddaoui.com/${locale}/about`,
      images: [{ url: '/og-image.png' }],
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
    url: 'https://jaddaoui.com',
    image: 'https://jaddaoui.com/og-image.png',
    jobTitle: 'Full Stack Software Engineer & Digital Agency Founder',
    worksFor: {
      '@type': 'Organization',
      name: 'Jaddaoui Elevate',
      url: 'https://jaddaoui.com',
    },
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
