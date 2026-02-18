import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Fintech Gold',
        category: 'Fintech',
        image:
            'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000',
    },
    {
        title: 'HealthTrack App',
        category: 'Health Tech',
        image:
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000',
    },
    {
        title: 'Cloud Manager',
        category: 'Cloud / SaaS',
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
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                        Portfolio
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                        Quelques-unes de nos réalisations récentes.
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
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-6">
                                <span className="text-xs font-medium uppercase tracking-wider text-accent mb-1">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                    {project.title}
                                    <ExternalLink size={16} className="opacity-60" />
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
