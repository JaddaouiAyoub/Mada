import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import AboutClient from './AboutClient';
import { SITE_URL, SITE_NAME, OG_IMAGE, localeAlternates, ogLocale } from '@/lib/site';
import { personSchema, breadcrumbSchema } from '@/lib/schema';

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
  const url = `${SITE_URL}/${locale}/about`;

  return {
    title: t('title'),
    description: t('description'),
    alternates: localeAlternates(locale, '/about'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url,
      siteName: SITE_NAME,
      type: 'profile',
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta.about' });
  const url = `${SITE_URL}/${locale}/about`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${url}#webpage`,
        url,
        name: t('title'),
        description: t('description'),
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
      },
      personSchema(t('description')),
      breadcrumbSchema(`${url}#breadcrumb`, [
        { name: locale === 'ar' ? 'الرئيسية' : 'Accueil', url: `${SITE_URL}/${locale}` },
        { name: t('title'), url },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <AboutClient locale={locale} />
      </main>
      <Footer />
    </>
  );
}
