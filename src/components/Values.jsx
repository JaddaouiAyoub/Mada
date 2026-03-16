import { motion } from 'framer-motion';
import { Crosshair, TrendingUp, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Crosshair, TrendingUp, Palette];

export default function Values() {
    const { t } = useLanguage();
    const items = t('values.items');

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
                        {t('values.sectionTitle')}
                    </h2>
                    <p className="mt-4 text-strong max-w-xl mx-auto font-semibold opacity-80">
                        {t('values.sectionSubtitle')}{' '}
                        <span className="text-accent underline decoration-2 underline-offset-4">
                            {t('values.sectionHighlight')}
                        </span>{' '}
                        {t('values.sectionEnd')}
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((value, i) => {
                        const Icon = icons[i];
                        return (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass rounded-2xl p-8 text-center hover:border-accent/50 transition-all duration-300 dark:hover:bg-slate-800/20 group"
                            >
                                <div className="mb-5 mx-auto inline-flex rounded-xl bg-accent/10 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-strong mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-strong leading-relaxed text-sm font-semibold opacity-90">
                                    {value.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
