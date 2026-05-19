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

  // JSON-LD: Person + WebSite
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.jaddaoui.com/#website',
        url: 'https://www.jaddaoui.com/',
        name: 'Ayoub Jaddaoui',
        description: t('description'),
        inLanguage: locale === 'ar' ? 'ar' : 'fr',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.jaddaoui.com/fr/blog?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.jaddaoui.com/#person',
        name: 'Ayoub Jaddaoui',
        url: 'https://www.jaddaoui.com/',
        image: 'https://www.jaddaoui.com/og-image.png',
        description: t('description'),
        telephone: '+212700547163',
        email: 'jaddaouiayoub02@gmail.com',
        jobTitle: 'Développeur Full Stack',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Casablanca',
          addressCountry: 'MA',
        },
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'SaaS Design',
          'SEO Optimization',
          'Next.js',
          'React',
          'Flutter',
        ],
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
