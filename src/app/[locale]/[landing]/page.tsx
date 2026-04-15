import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LandingClient from './LandingClient';
import { routing } from '@/i18n/routing';

const SEO_SLUGS = [
  'agence-web-maroc',
  'developpement-mobile-maroc',
  'developpeur-casablanca',
  'jaddaoui-agency',
] as const;

type SeoSlug = typeof SEO_SLUGS[number];

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
    alternates: {
      canonical: `/${locale}/${landing}`,
      languages: { fr: `/fr/${landing}`, ar: `/ar/${landing}` },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://jaddaoui.com/${locale}/${landing}`,
      images: [{ url: '/og-image.png' }],
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

  const t = await getTranslations({ locale, namespace: `landing.pages.${landing}` });
  const tLanding = await getTranslations({ locale, namespace: 'landing' });

  const pageData = {
    hero: t('hero'),
    heroSub: t('heroSub'),
    intro: t('intro'),
    faqs: (t.raw('faqs') as { q: string; a: string }[]),
  };

  // JSON-LD: Service + FAQPage
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: pageData.hero,
      description: pageData.intro,
      provider: {
        '@type': 'ProfessionalService',
        name: 'Jaddaoui Elevate',
        url: 'https://jaddaoui.com',
        address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
      },
      areaServed: { '@type': 'Country', name: 'Morocco' },
      url: `https://jaddaoui.com/${locale}/${landing}`,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: pageData.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
