'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, Mail } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/212700547163?text=Bonjour%2C%20je%20souhaite%20d%C3%A9marrer%20un%20projet.';
const EMAIL = 'jaddaouiayoub02@gmail.com';

const TECH_STACK = [
  { name: 'Next.js', color: '#000' },
  { name: 'React 19', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Flutter', color: '#54C5F8' },
  { name: 'Dart', color: '#0175C2' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Prisma', color: '#2D3748' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'Framer Motion', color: '#BB4BE1' },
  { name: 'NextAuth.js', color: '#6366F1' },
  { name: 'MongoDB', color: '#4DB33D' },
];

export default function AboutClient({ locale }: { locale: string }) {
  const { t } = useLanguage();

  const stats = [
    { value: '20+', label: t('about.statsProjects') },
    { value: '100%', label: t('about.statsSatisfaction') },
    { value: '5+', label: t('about.statsYears') },
    { value: '3+', label: t('about.statsCountries') },
  ];

  const journey = (t('about.journey') as unknown as Array<{ year: string; title: string; desc: string }>);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="glow-orb w-96 h-96 bg-accent top-20 -left-24" />
        <div className="glow-orb w-80 h-80 bg-purple-500 bottom-0 -right-20" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 glass text-sm font-semibold text-accent"
          >
            ✦ {t('about.badge')}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-strong leading-tight"
          >
            {t('about.title')}{' '}
            <span className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent block sm:inline">
              {t('about.name')}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-lg text-strong font-medium opacity-80 leading-relaxed"
          >
            {t('about.subtitle')}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((s, i) => (
              <div key={i} className="glass rounded-2xl p-5 text-center border-main">
                <div className="text-3xl font-black text-accent mb-1">{s.value}</div>
                <div className="text-xs font-bold text-muted uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-strong text-center mb-12"
          >
            {t('about.expertiseTitle')}
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-3">
            {TECH_STACK.map((tech, i) => (
              <motion.span
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-xl glass text-sm font-bold border-main hover:border-accent/40 transition-all cursor-default"
                style={{ color: tech.color }}
              >
                {tech.name}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl font-bold text-strong text-center mb-16"
          >
            {t('about.journeyTitle')}
          </motion.h2>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-blue-400 to-transparent" />

            <div className="space-y-10">
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 items-start"
                >
                  {/* Dot */}
                  <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center z-10">
                    <span className="text-[10px] font-black text-accent">{item.year.split('–')[0].slice(-2)}</span>
                  </div>
                  <div className="glass rounded-2xl p-6 flex-1 border-main">
                    <div className="text-xs font-bold text-accent uppercase tracking-widest mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-strong mb-2">{item.title}</h3>
                    <p className="text-sm text-strong font-medium opacity-75 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 text-center border-main"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-accent" size={28} />
            </div>
            <h2 className="font-display text-3xl font-bold text-strong mb-3">{t('about.ctaTitle')}</h2>
            <p className="text-strong font-medium opacity-75 mb-8">{t('about.ctaDesc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                <MessageCircle size={18} />
                {t('about.ctaWhatsapp')}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold glass border-main text-strong hover:border-accent/50 transition-all hover:scale-105 active:scale-95"
              >
                <Mail size={18} />
                {t('about.ctaEmail')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
