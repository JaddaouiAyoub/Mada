import { SITE_URL, OG_IMAGE, PERSON } from './site';

/** Single, shared Person entity so every page references the same @id. */
export function personSchema(description?: string) {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: PERSON.name,
    alternateName: 'Jaddaoui Ayoub',
    url: `${SITE_URL}/`,
    image: `${SITE_URL}${OG_IMAGE}`,
    ...(description ? { description } : {}),
    email: PERSON.email,
    telephone: PERSON.telephone,
    jobTitle: 'Développeur Full Stack',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'MA',
    },
    knowsAbout: [
      'Web Development',
      'Mobile App Development',
      'SaaS',
      'SEO',
      'Next.js',
      'React',
      'Angular',
      'Spring Boot',
      'Flutter',
      'TypeScript',
      'Node.js',
    ],
    sameAs: PERSON.sameAs,
  };
}

export function breadcrumbSchema(id: string, items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    '@id': id,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
