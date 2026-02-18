import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Fintech Gold',
        category: 'Banking / SaaS',
        description: 'Une plateforme de gestion d\'actifs de luxe avec une interface minimaliste et sécurisée.',
        image:
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000',
    },
    {
        title: 'HealthTrack App',
        category: 'Mobile / Health',
        description: 'Application mobile de suivi de santé connectée pour des diagnostics en temps réel.',
        image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
    },
    {
        title: 'Cloud Manager',
        category: 'Enterprise / SaaS',
        description: 'Tableau de bord intelligent pour la gestion d\'infrastructures cloud complexes.',
        image:
            'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000',
    },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl sm:text-5xl font-bold text-strong">
                        Portfolio
                    </h2>
                    <p className="mt-4 text-strong max-w-xl mx-auto font-semibold opacity-80">
                        Une sélection de projets où l'excellence technique rencontre la vision créative.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-start justify-end p-8 translate-y-4 group-hover:translate-y-0">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                                    {project.title}
                                    <ExternalLink size={18} className="text-slate-400" />
                                </h3>
                                <p className="mt-3 text-sm text-slate-300 transition-opacity duration-300 delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
