import { getTranslations, setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Values from '@/components/Values';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { routing } from '@/i18n/routing';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/site';
import { personSchema } from '@/lib/schema';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta.home' });
  const inLanguage = locale === 'ar' ? 'ar' : 'fr';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        description: t('description'),
        inLanguage: ['fr', 'ar'],
        publisher: { '@id': `${SITE_URL}/#person` },
      },
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/${locale}#webpage`,
        url: `${SITE_URL}/${locale}`,
        name: t('title'),
        description: t('description'),
        inLanguage,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#person` },
        mainEntity: { '@id': `${SITE_URL}/#person` },
        primaryImageOfPage: `${SITE_URL}${OG_IMAGE}`,
      },
      personSchema(t('description')),
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#service`,
        name: `${SITE_NAME} — Développement Web & Mobile`,
        url: `${SITE_URL}/${locale}`,
        image: `${SITE_URL}${OG_IMAGE}`,
        description: t('description'),
        telephone: '+212700547163',
        email: 'jaddaouiayoub02@gmail.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Casablanca',
          addressRegion: 'Casablanca-Settat',
          addressCountry: 'MA',
        },
        areaServed: [
          { '@type': 'City', name: 'Casablanca' },
          { '@type': 'Country', name: 'Morocco' },
        ],
        founder: { '@id': `${SITE_URL}/#person` },
        knowsLanguage: ['fr', 'ar', 'en'],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Portfolio />
        <Testimonials />
        <Values />
      </main>
      <Footer />
    </>
  );
}
