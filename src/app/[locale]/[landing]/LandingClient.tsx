'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const WHATSAPP_BASE = 'https://wa.me/212700547163?text=';

interface FAQ { q: string; a: string; }

interface PageData {
  hero: string;
  heroSub: string;
  intro: string;
  faqs: FAQ[];
}

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="glass rounded-2xl border-main overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-bold text-strong text-sm sm:text-base group-hover:text-accent transition-colors">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-accent transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-sm text-strong font-medium opacity-75 leading-relaxed">
          {faq.a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function LandingClient({
  pageData,
  locale,
  slug,
  faqTitle,
  ctaTitle,
  ctaDesc,
  ctaWhatsapp,
}: {
  pageData: PageData;
  locale: string;
  slug: string;
  faqTitle: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaWhatsapp: string;
}) {
  const { t } = useLanguage();
  const waMsg = encodeURIComponent(`Bonjour, je suis intéressé par: ${pageData.hero}`);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="glow-orb w-96 h-96 bg-accent top-10 -left-24" />
        <div className="glow-orb w-80 h-80 bg-purple-500 bottom-0 right-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-bold text-accent mb-8 border-main"
          >
            ✦ Jaddaoui Elevate — Casablanca, Maroc
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-strong tracking-tight leading-tight mb-6"
          >
            {pageData.hero.split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  {' '}{word}
                </span>
              ) : (
                <span key={i}>{word}{' '}</span>
              )
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-strong font-medium opacity-75 max-w-2xl mx-auto mb-10"
          >
            {pageData.heroSub}
          </motion.p>

          <motion.a
            href={`${WHATSAPP_BASE}${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white shadow-xl shadow-green-500/30 text-base"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
          >
            <MessageCircle size={20} />
            {ctaWhatsapp}
          </motion.a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 border-main"
          >
            <p className="text-lg text-strong font-medium leading-relaxed opacity-85">
              {pageData.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 pb-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-strong text-center mb-10"
          >
            {faqTitle}
          </motion.h2>

          <div className="space-y-4">
            {pageData.faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 glass rounded-3xl p-10 text-center border-main"
          >
            <h2 className="font-display text-2xl font-bold text-strong mb-3">{ctaTitle}</h2>
            <p className="text-strong font-medium opacity-75 mb-8">{ctaDesc}</p>
            <a
              href={`${WHATSAPP_BASE}${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-white shadow-xl shadow-green-500/30"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
            >
              <MessageCircle size={20} />
              {ctaWhatsapp}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
