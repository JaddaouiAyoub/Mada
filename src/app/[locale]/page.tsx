import { getTranslations } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Values from '@/components/Values';
import Footer from '@/components/Footer';
import { routing } from '@/i18n/routing';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.home' });

  // JSON-LD: LocalBusiness + WebSite
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://jaddaoui.com/#website',
        url: 'https://jaddaoui.com/',
        name: 'Jaddaoui Elevate',
        description: t('description'),
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://jaddaoui.com/fr/blog?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://jaddaoui.com/#organization',
        name: 'Jaddaoui Elevate',
        url: 'https://jaddaoui.com/',
        logo: 'https://jaddaoui.com/logo-dark.svg',
        image: 'https://jaddaoui.com/og-image.png',
        description: t('description'),
        telephone: '+212700547163',
        email: 'jaddaouiayoub02@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Casablanca',
          addressCountry: 'MA',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 33.5731,
          longitude: -7.5898,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Morocco',
        },
        serviceType: [
          'Web Development',
          'Mobile App Development',
          'SaaS Design',
          'SEO Optimization',
        ],
        priceRange: '$$',
        sameAs: ['https://github.com/jaddaouiayoub'],
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
