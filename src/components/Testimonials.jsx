'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Globe, Smartphone, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProjectBySlug } from '../data/projects';

// Factual project outcomes (no invented clients or reviews).
// Texts live in src/i18n/messages/*.json under testimonials.items.<slug>.
const RESULT_SLUGS = ['syndicflow', 'rentflow', 'driveflow', 'tawziiflow', 'powergym', 'centerhub'];

const TYPE_ICON = { saas: Cloud, web: Globe, mobile: Smartphone };

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const { t } = useLanguage();

    const items = RESULT_SLUGS.map((slug) => {
        const project = getProjectBySlug(slug);
        return project && {
            slug,
            title: project.title,
            img: project.img,
            type: project.type,
            sector: t(`testimonials.items.${slug}.sector`),
            result: t(`testimonials.items.${slug}.result`),
        };
    }).filter(Boolean);

    const count = items.length;

    const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    }, [isHovered, next]);

    const prevIdx = (index - 1 + count) % count;
    const nextIdx = (index + 1) % count;
    const current = items[index];
    const Icon = TYPE_ICON[current.type] || Globe;

    return (
        <section id="resultats" className="py-24 sm:py-32 overflow-hidden bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl font-bold text-strong mb-4">
                        {t('testimonials.sectionTitle')}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto font-medium">
                        {t('testimonials.sectionSubtitle')}
                    </p>
                </motion.div>

                <div
                    className="relative flex items-center justify-center min-h-[450px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="relative flex items-center justify-center w-full max-w-5xl overflow-visible">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {/* Peeking Left */}
                            <motion.div
                                key={`prev-${prevIdx}`}
                                initial={{ opacity: 0, x: -150, scale: 0.8, rotateY: 20 }}
                                animate={{ opacity: 0.4, x: -380, scale: 0.8, rotateY: 20 }}
                                exit={{ opacity: 0, x: -500, scale: 0.7 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute hidden lg:block glass rounded-[2rem] p-8 max-w-md blur-[2px] pointer-events-none select-none"
                                aria-hidden="true"
                            >
                                <p className="text-lg text-strong opacity-40 line-clamp-3">{items[prevIdx].result}</p>
                            </motion.div>

                            {/* Current */}
                            <motion.article
                                key={`current-${index}`}
                                initial={{ opacity: 0, scale: 0.85, y: 30, zIndex: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0, zIndex: 10 }}
                                exit={{ opacity: 0, scale: 0.85, y: -30, zIndex: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 glass rounded-[2.5rem] p-10 md:p-14 max-w-3xl w-full shadow-2xl shadow-accent/5 border-accent/20 hover:border-accent/40 transition-colors duration-500"
                            >
                                <div className="relative z-10 text-center">
                                    <div className="flex flex-col items-center mb-8">
                                        <div className="relative w-24 h-16 rounded-xl overflow-hidden mb-4 border border-accent/30 bg-white/5">
                                            <Image
                                                src={current.img}
                                                alt={`${current.title} — ${current.sector}`}
                                                fill
                                                sizes="96px"
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-strong">{current.title}</h3>
                                        <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-accent font-semibold tracking-wide uppercase">
                                            <Icon size={14} aria-hidden="true" />
                                            {current.sector}
                                        </p>
                                    </div>
                                    <p className="text-xl md:text-2xl font-serif text-strong leading-relaxed mb-8">
                                        {current.result}
                                    </p>
                                    <Link
                                        href={`/fr/projets/${current.slug}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline underline-offset-4"
                                    >
                                        {t('testimonials.cta')} <ArrowRight size={16} className="rtl:rotate-180" />
                                    </Link>
                                </div>
                            </motion.article>

                            {/* Peeking Right */}
                            <motion.div
                                key={`next-${nextIdx}`}
                                initial={{ opacity: 0, x: 150, scale: 0.8, rotateY: -20 }}
                                animate={{ opacity: 0.4, x: 380, scale: 0.8, rotateY: -20 }}
                                exit={{ opacity: 0, x: 500, scale: 0.7 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute hidden lg:block glass rounded-[2rem] p-8 max-w-md blur-[2px] pointer-events-none select-none"
                                aria-hidden="true"
                            >
                                <p className="text-lg text-strong opacity-40 line-clamp-3">{items[nextIdx].result}</p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {items.map((item, i) => (
                        <button
                            key={item.slug}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-2 bg-strong/10'}`}
                            aria-label={item.title}
                            aria-current={i === index ? 'true' : undefined}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
