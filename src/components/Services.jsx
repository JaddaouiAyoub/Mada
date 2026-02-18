import { motion } from 'framer-motion';
import { Globe, Smartphone, Layers } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Web Development',
        description:
            'Applications web performantes et scalables, avec une architecture moderne et une expérience utilisateur soignée.',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description:
            'Applications natives et cross-platform qui offrent une expérience fluide sur tous les appareils.',
    },
    {
        icon: Layers,
        title: 'SaaS Design',
        description:
            'Interfaces SaaS complexes transformées en produits intuitifs, avec un design système cohérent.',
    },
];

export default function Services() {
    return (
        <section id="services" className="py-24 sm:py-32">
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
                        Nos Services
                    </h2>
                    <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
                        Des solutions digitales sur mesure pour propulser votre entreprise.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
                        >
                            <div className="mb-5 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                                <service.icon size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
