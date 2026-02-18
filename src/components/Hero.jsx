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
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 glass text-sm font-semibold text-strong"
                >
                    <Sparkles size={14} className="text-accent" />
                    MADA ELEVATE — Agence Digitale
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="font-display text-5xl sm:text-6xl md:text-8xl font-black tracking-tight text-strong leading-[1.1]"
                >
                    Architects of <br />
                    <span className="bg-gradient-to-r from-accent via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Digital Icons
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-strong leading-relaxed font-medium"
                >
                    MADA ELEVATE propulse les marques visionnaires vers l'excellence numérique. <br className="hidden sm:block" />
                    <span className="text-accent font-bold italic">"Votre satisfaction est notre priorité absolue."</span>
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
                        className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold glass text-strong hover:border-accent/50 transition-colors"
                    >
                        Voir le Portfolio
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
