import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import LandingClient from './LandingClient';
import { routing } from '@/i18n/routing';
import { SEO_SLUGS, type SeoSlug } from '@/lib/landing';
import { SITE_URL, SITE_NAME, OG_IMAGE, localeAlternates, ogLocale } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

// Any other slug returns a real 404 instead of being rendered on demand.
export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { locale: string; landing: string }[] = [];
  for (const locale of routing.locales) {
    for (const slug of SEO_SLUGS) {
      params.push({ locale, landing: slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; landing: string }>;
}): Promise<Metadata> {
  const { locale, landing } = await params;
  if (!SEO_SLUGS.includes(landing as SeoSlug)) return {};

  const t = await getTranslations({ locale, namespace: `meta.landing.${landing}` });

  return {
    title: t('title'),
    description: t('description'),
    alternates: localeAlternates(locale, `/${landing}`),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${SITE_URL}/${locale}/${landing}`,
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

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string; landing: string }>;
}) {
  const { locale, landing } = await params;
  if (!SEO_SLUGS.includes(landing as SeoSlug)) notFound();
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: `landing.pages.${landing}` });
  const tLanding = await getTranslations({ locale, namespace: 'landing' });
  const url = `${SITE_URL}/${locale}/${landing}`;

  const pageData = {
    hero: t('hero'),
    heroSub: t('heroSub'),
    intro: t('intro'),
    faqs: t.raw('faqs') as { q: string; a: string }[],
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: pageData.hero,
        description: pageData.intro,
        provider: { '@id': `${SITE_URL}/#person` },
        areaServed: [
          { '@type': 'City', name: 'Casablanca' },
          { '@type': 'Country', name: 'Morocco' },
        ],
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        mainEntity: pageData.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
      breadcrumbSchema(`${url}#breadcrumb`, [
        { name: locale === 'ar' ? 'الرئيسية' : 'Accueil', url: `${SITE_URL}/${locale}` },
        { name: pageData.hero, url },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <LandingClient
          pageData={pageData}
          locale={locale}
          slug={landing}
          faqTitle={tLanding('faqTitle')}
          ctaTitle={tLanding('ctaTitle')}
          ctaDesc={tLanding('ctaDesc')}
          ctaWhatsapp={tLanding('ctaWhatsapp')}
        />
      </main>
      <Footer />
    </>
  );
}
