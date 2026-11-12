export const SEO_SLUGS = [
  'developpeur-fullstack-maroc',
  'developpement-mobile-maroc',
  'developpeur-casablanca',
  'ayoub-jaddaoui',
] as const;

export type SeoSlug = (typeof SEO_SLUGS)[number];
