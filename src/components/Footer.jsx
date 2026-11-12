'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { PERSON } from '../lib/site';
import { useLanguage } from '../context/LanguageContext';

const EMAIL = 'jaddaouiayoub02@gmail.com';
const PHONE = '+212700547163';

const LANDING_SLUGS = [
    'developpeur-fullstack-maroc',
    'developpement-mobile-maroc',
    'developpeur-casablanca',
];

export default function Footer() {
    const { lang, t } = useLanguage();
    const home = `/${lang}`;

    const navLinks = [
        { href: `${home}#services`, label: t('footer.services') },
        { href: `${home}#process`, label: t('footer.processus') },
        { href: `${home}#portfolio`, label: t('footer.portfolio') },
        { href: `${home}#values`, label: t('footer.values') },
        { href: `${home}/about`, label: t('nav.about') },
        { href: `${home}/blog`, label: t('nav.blog') },
    ];

    return (
        <footer id="contact" className="border-t border-main transition-colors duration-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Link href={home} className="flex items-center gap-1 text-2xl font-bold tracking-tight mb-4" dir="ltr">
                            <span className="font-display text-strong">JADD</span>
                            <span className="font-display bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                AOUI
                            </span>
                        </Link>
                        <p className="text-sm text-strong leading-relaxed max-w-xs font-semibold opacity-80">
                            {t('footer.tagline')}
                        </p>
                        <ul className="mt-6 flex gap-3 text-sm font-bold">
                            <li>
                                <a href={PERSON.linkedin} target="_blank" rel="me noopener noreferrer" className="rounded-lg border border-accent/30 px-3 py-1.5 text-accent hover:bg-accent/10 transition-colors">
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Quick links */}
                    <motion.nav
                        aria-label={t('footer.navigation')}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-bold text-strong mb-6 uppercase text-xs tracking-[0.2em]">{t('footer.navigation')}</h2>
                        <ul className="space-y-3 text-sm text-strong font-semibold opacity-90">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-accent transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>

                    {/* Expertise (internal links to SEO landing pages) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-bold text-strong mb-6 uppercase text-xs tracking-[0.2em]">
                            {lang === 'ar' ? 'الخبرات' : 'Expertise'}
                        </h2>
                        <ul className="space-y-3 text-sm text-strong font-semibold opacity-90">
                            {LANDING_SLUGS.map((slug) => (
                                <li key={slug}>
                                    <Link href={`${home}/${slug}`} className="hover:text-accent transition-colors">
                                        {t(`landing.pages.${slug}.hero`)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="font-bold text-strong mb-6 uppercase text-xs tracking-[0.2em]">{t('footer.contact')}</h2>
                        <address className="not-italic">
                            <ul className="space-y-4 text-sm text-strong font-semibold opacity-90">
                                <li className="flex items-start gap-3">
                                    <Mail size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                    <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">{EMAIL}</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Phone size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                    <a href={`tel:${PHONE}`} className="hover:text-accent transition-colors" dir="ltr">+212 7 00 54 71 63</a>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin size={16} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>{lang === 'ar' ? 'الدار البيضاء، المغرب' : 'Casablanca, Maroc'}</span>
                                </li>
                            </ul>
                        </address>
                    </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 glass rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <p className="text-2xl font-bold text-strong mb-2 italic">{t('footer.quote')}</p>
                        <p className="text-sm text-strong font-semibold opacity-80">{t('footer.quoteSubtitle')}</p>
                    </div>
                    <a href={`mailto:${EMAIL}`} className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-hover transition-all shadow-xl shadow-accent/40 active:scale-95">
                        {t('footer.ctaButton')}
                    </a>
                </motion.div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-main text-center text-xs text-muted font-medium transition-colors duration-500">
                    © {new Date().getFullYear()} {t('footer.rights')}
                </div>
            </div>
        </footer>
    );
}
