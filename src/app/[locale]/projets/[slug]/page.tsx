import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ExternalLink, MessageCircle, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import { projects, getProjectBySlug } from '@/data/projects';
import { SITE_URL, SITE_NAME, PERSON } from '@/lib/site';
import { breadcrumbSchema } from '@/lib/schema';

// Project descriptions only exist in French, so pages are generated for /fr only.
export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ locale: 'fr', slug: p.slug }));
}

const TYPE_LABEL: Record<string, string> = {
  saas: 'Plateforme SaaS',
  web: 'Site / Application web',
  mobile: 'Application mobile',
};

function shortDescription(desc: string) {
  if (desc.length <= 158) return desc;
  return desc.slice(0, 155).replace(/\s+\S*$/, '') + '…';
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const url = `${SITE_URL}/fr/projets/${slug}`;
  const title = `${project.title} — ${project.category} | ${SITE_NAME}`;
  const description = shortDescription(project.desc);

  return {
    title,
    description,
    keywords: [...project.tech, 'Ayoub Jaddaoui', 'développeur Maroc', 'développeur Casablanca'],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'article',
      locale: 'fr_MA',
      images: [{ url: project.img.src, width: project.img.width, height: project.img.height, alt: project.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: project.img.src, alt: project.title }],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (locale !== 'fr') notFound();
  setRequestLocale(locale);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const url = `${SITE_URL}/fr/projets/${slug}`;
  const hasDemo = project.preview && project.preview !== '#';
  const waUrl = `https://wa.me/${PERSON.telephone.replace('+', '')}?text=${encodeURIComponent(
    `Bonjour Ayoub, j'ai vu le projet ${project.title} et je souhaite discuter d'un projet similaire.`
  )}`;
  const related = projects.filter((p) => p.slug !== slug && p.type === project.type).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': project.type === 'web' ? 'WebSite' : 'SoftwareApplication',
        '@id': `${url}#project`,
        name: project.title,
        description: project.desc,
        url,
        image: `${SITE_URL}${project.img.src}`,
        inLanguage: 'fr',
        creator: { '@id': `${SITE_URL}/#person` },
        keywords: project.tech.join(', '),
        ...(project.type !== 'web'
          ? {
              applicationCategory: 'BusinessApplication',
              operatingSystem: project.type === 'mobile' ? 'Android, iOS' : 'Web',
            }
          : {}),
        ...(hasDemo ? { sameAs: project.preview } : {}),
      },
      breadcrumbSchema(`${url}#breadcrumb`, [
        { name: 'Accueil', url: `${SITE_URL}/fr` },
        { name: 'Portfolio', url: `${SITE_URL}/fr#portfolio` },
        { name: project.title, url },
      ]),
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="min-h-screen">
        <article>
          <header className="relative pt-32 pb-12 overflow-hidden">
            <div className="glow-orb w-96 h-96 bg-accent top-10 -left-24" />
            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
              <nav aria-label="Fil d'Ariane" className="mb-8 text-sm font-semibold text-muted">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/fr" className="hover:text-accent">Accueil</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/fr#portfolio" className="hover:text-accent">Portfolio</Link></li>
                  <li aria-hidden="true">/</li>
                  <li className="text-strong" aria-current="page">{project.title}</li>
                </ol>
              </nav>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                {TYPE_LABEL[project.type] ?? project.type}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-strong leading-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-lg sm:text-xl font-semibold text-strong opacity-75">
                {project.category}
              </p>
              <p className="mt-2 text-sm text-muted font-medium">
                Projet conçu et développé par{' '}
                <Link href="/fr/about" className="text-accent font-bold hover:underline">Ayoub Jaddaoui</Link>,
                développeur Full Stack à Casablanca, Maroc.
              </p>
            </div>
          </header>

          <section className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[2rem] glass border-main">
              <Image
                src={project.img}
                alt={`${project.title} — ${project.category}, réalisé par Ayoub Jaddaoui`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
          </section>

          <section className="mx-auto max-w-3xl px-4 sm:px-6 py-16 space-y-12">
            <div>
              <h2 className="font-display text-2xl font-bold text-strong mb-4">Présentation du projet</h2>
              <p className="text-strong font-medium opacity-80 leading-relaxed text-lg">{project.desc}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-strong mb-4">Technologies utilisées</h2>
              <ul className="flex flex-wrap gap-2">
                {project.tech.map((tech: string) => (
                  <li
                    key={tech}
                    className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-bold text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {hasDemo && (
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-white hover:bg-accent-hover transition-colors"
                >
                  Voir la démo en ligne <ExternalLink size={16} />
                </a>
              )}
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle size={16} /> Un projet similaire ? Parlons-en
              </a>
            </div>
          </section>
        </article>

        {related.length > 0 && (
          <section className="pb-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
              <h2 className="font-display text-2xl font-bold text-strong mb-8">Autres projets</h2>
              <ul className="grid gap-6 sm:grid-cols-3">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/fr/projets/${p.slug}`} className="group block glass rounded-2xl overflow-hidden border-main hover:border-accent/40 transition-colors">
                      <div className="relative aspect-[4/3]">
                        <Image src={p.img} alt={p.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-contain" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-strong group-hover:text-accent transition-colors">{p.title}</h3>
                        <p className="text-xs text-muted font-semibold mt-1">{p.category}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/fr#portfolio" className="mt-10 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline">
                <ArrowLeft size={16} /> Tout le portfolio
              </Link>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
