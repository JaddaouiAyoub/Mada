import { motion } from 'framer-motion';
import { Globe, Smartphone, Layers } from 'lucide-react';

const services = [
    {
        icon: Globe,
        title: 'Web Development',
        description:
            'Nous bâtissons des plateformes web ultra-rapides, SEO-friendly et scalables. Du site vitrine complexe aux architectures microservices.',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description:
            'Expériences iOS et Android natives ou hybrides privilégiant la fluidité, le design intuitif et l\'engagement utilisateur maximal.',
    },
    {
        icon: Layers,
        title: 'SaaS Design',
        description:
            'Conception de produits SaaS centrés sur l\'utilisateur, avec une approche axée sur la conversion et des design systems sophistiqués.',
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
                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-strong">
                        Nos Services
                    </h2>
                    <p className="mt-4 text-muted max-w-xl mx-auto font-medium">
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
                            className="group relative glass rounded-2xl p-8 border-main hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 flex flex-col items-start overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative mb-6 inline-flex rounded-xl bg-accent/10 p-4 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 shadow-sm">
                                <service.icon size={28} />
                            </div>
                            <h3 className="relative text-2xl font-bold text-strong mb-4 group-hover:text-accent transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="relative text-strong leading-relaxed text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
