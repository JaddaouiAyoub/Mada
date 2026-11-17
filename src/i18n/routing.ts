import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fr', 'ar'],
  defaultLocale: 'fr',
  // Disable the HTTP `Link` hreflang header: it pointed x-default to unprefixed
  // URLs (which redirect) and declared /ar alternates for French-only pages (404).
  // hreflang is already declared in each page's <head> via generateMetadata.
  alternateLinks: false,
});
