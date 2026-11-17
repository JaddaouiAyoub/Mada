import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { projects } from '@/data/projects';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

// Project content only exists in French: the index is generated for /fr only.
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: 'fr' }];
}

const URL = `${SITE_URL}/fr/projets`;
const TITLE = `Projets réalisés — SaaS, sites web & apps mobiles | ${SITE_NAME}`;
const DESCRIPTION = `Les ${projects.length} projets réalisés par Ayoub Jaddaoui, développeur Full Stack à Casablanca : plateformes SaaS, sites web, e-commerce et applications mobiles.`;

const GROUPS: { type: string; label: string }[] = [
  { type: 'saas', label: 'Plateformes SaaS' },
  { type: 'web', label: 'Sites & applications web' },
  { type: 'mobile', label: 'Applications mobiles' },
];

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'fr_MA',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: TITLE }],
  },
};

export default async function ProjectsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== 'fr') notFound();
  setRequestLocale(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${URL}#page`,
        url: URL,
        name: TITLE,
        description: DESCRIPTION,
        inLanguage: 'fr',
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: projects.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${URL}/${p.slug}`,
            name: p.title,
          })),
        },
      },
      breadcrumbSchema(`${URL}#breadcrumb`, [
        { name: 'Accueil', url: `${SITE_URL}/fr` },
        { name: 'Projets', url: URL },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="min-h-screen">
        <header className="relative pt-32 pb-12 overflow-hidden">
          <div className="glow-orb w-96 h-96 bg-accent top-10 -left-24" />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-sm font-semibold text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/fr" className="hover:text-accent">Accueil</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-strong" aria-current="page">Projets</li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-strong leading-tight">
              Projets réalisés
            </h1>
            <p className="mt-4 max-w-3xl text-lg font-semibold text-strong opacity-75">
              {DESCRIPTION}
            </p>
          </div>
        </header>

        {GROUPS.map(({ type, label }) => {
          const items = projects.filter((p) => p.type === type);
          if (items.length === 0) return null;
          return (
            <section key={type} className="pb-16">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-strong mb-8">
                  {label} <span className="text-muted text-lg">({items.length})</span>
                </h2>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/fr/projets/${p.slug}`}
                        className="group block h-full glass rounded-2xl overflow-hidden border-main hover:border-accent/40 transition-colors"
                      >
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={p.img}
                            alt={`${p.title} — ${p.category}`}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-contain"
                          />
                        </div>
                        <div className="p-5">
                          <h3 className="font-bold text-strong group-hover:text-accent transition-colors">{p.title}</h3>
                          <p className="text-xs text-muted font-semibold mt-1 uppercase tracking-wide">{p.category}</p>
                          <p className="mt-3 text-sm text-strong opacity-75 line-clamp-3">{p.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
