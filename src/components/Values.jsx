import { motion } from 'framer-motion';
import { Crosshair, TrendingUp, Palette } from 'lucide-react';

const values = [
    {
        icon: Crosshair,
        title: 'Précision',
        description:
            'Chaque pixel, chaque ligne de code est réfléchie pour atteindre un niveau d\'excellence technique irréprochable.',
    },
    {
        icon: TrendingUp,
        title: 'Scalabilité',
        description:
            'Des architectures pensées pour évoluer avec votre croissance, sans compromis sur les performances.',
    },
    {
        icon: Palette,
        title: 'Esthétique',
        description:
            'Un design premium qui marie fonctionnalité et beauté, pour une identité visuelle mémorable.',
    },
];

export default function Values() {
    return (
        <section id="values" className="py-24 sm:py-32">
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
                        Nos Valeurs
                    </h2>
                    <p className="mt-4 text-strong max-w-xl mx-auto font-semibold opacity-80">
                        Les piliers qui guident chacun de nos projets, plaçant <span className="text-accent underline decoration-2 underline-offset-4">votre réussite</span> au centre de tout.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 dark:hover:bg-slate-800/20 group"
                        >
                            <div className="mb-5 mx-auto inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                <value.icon size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-strong mb-3">
                                {value.title}
                            </h3>
                            <p className="text-strong leading-relaxed text-sm font-semibold opacity-90">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
