import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Découverte',
        description: `Immersion totale dans votre univers pour comprendre vos enjeux, vos cibles et vos objectifs stratégiques.`,
    },
    {
        icon: PenTool,
        title: 'Conception',
        description: `Architecture de l'expérience utilisateur et création d'une interface premium alignée sur votre image de marque.`,
    },
    {
        icon: Code2,
        title: 'Développement',
        description: `Ingénierie de pointe utilisant les technologies les plus performantes pour un produit robuste et rapide.`,
    },
    {
        icon: Rocket,
        title: 'Lancement',
        description: `Déploiement optimisé, tests rigoureux et accompagnement post-lancement pour garantir votre succès.`,
    },
];

export default function Process() {
    return (
        <section id="process" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Decorative line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-200/50 dark:bg-slate-800/50 -translate-y-1/2 hidden lg:block" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-display text-4xl font-bold text-strong transition-colors duration-500">Notre Méthodologie</h2>
                    <p className="mt-4 text-strong max-w-2xl mx-auto transition-colors duration-500 opacity-80">
                        Un processus rigoureux et créatif pour transformer vos idées en icônes du digital.
                    </p>
                </motion.div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500" />
                                <div className="relative glass w-16 h-16 rounded-2xl flex items-center justify-center text-accent border-main group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                    <step.icon size={28} />
                                </div>
                                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-[10px] font-bold text-white border-2 border-main transition-colors duration-500">
                                    0{i + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-strong mb-3 group-hover:text-accent transition-colors duration-500">{step.title}</h3>
                            <p className="text-sm text-strong leading-relaxed font-semibold transition-colors duration-500 opacity-90">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
