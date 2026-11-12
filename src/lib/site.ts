export const SITE_URL = 'https://www.jaddaoui.com';
export const SITE_NAME = 'Ayoub Jaddaoui';
export const OG_IMAGE = '/og-image.png';

export const PERSON = {
  name: 'Ayoub Jaddaoui',
  email: 'jaddaouiayoub02@gmail.com',
  telephone: '+212700547163',
  linkedin: 'https://www.linkedin.com/in/ayoub-jaddaoui-392514250',
  github: 'https://github.com/jaddaouiayoub',
  sameAs: [
    'https://www.linkedin.com/in/ayoub-jaddaoui-392514250',
    'https://github.com/jaddaouiayoub',
  ],
};

export type Locale = 'fr' | 'ar';

/** Builds canonical + hreflang alternates for a path (without locale prefix, e.g. "/blog"). */
export function localeAlternates(locale: string, path = '') {
  return {
    canonical: `${SITE_URL}/${locale}${path}`,
    languages: {
      fr: `${SITE_URL}/fr${path}`,
      ar: `${SITE_URL}/ar${path}`,
      'x-default': `${SITE_URL}/fr${path}`,
    },
  };
}

export function ogLocale(locale: string) {
  return locale === 'ar' ? 'ar_MA' : 'fr_MA';
}
