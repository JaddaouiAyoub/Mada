import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background glow orbs */}
            <div className="glow-orb w-96 h-96 bg-accent top-20 -left-24" />
            <div className="glow-orb w-80 h-80 bg-purple-500 bottom-20 -right-20" />
            <div className="glow-orb w-64 h-64 bg-cyan-400 top-1/2 left-1/2 -translate-x-1/2" />

            <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 glass text-sm font-medium text-slate-600 dark:text-slate-300"
                >
                    <Sparkles size={14} className="text-accent" />
                    MADA ELEVATE — Agence Digitale
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight"
                >
                    Architecting{' '}
                    <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                        Digital
                    </span>{' '}
                    Excellence
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-500 dark:text-slate-400 leading-relaxed"
                >
                    Nous concevons des écosystèmes web et mobiles haute performance.
                </motion.p>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover transition-colors"
                    >
                        Démarrer un Projet
                        <ArrowRight size={16} />
                    </a>
                    <a
                        href="#portfolio"
                        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold glass text-slate-700 dark:text-slate-300 hover:border-accent/50 transition-colors"
                    >
                        Voir le Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
