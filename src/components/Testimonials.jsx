import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Marc-Antoine R.",
        role: "CEO, TechSphere",
        content: "L'expertise technique de MADA ELEVATE est tout simplement impressionnante. Ils ont transformé notre vision complexe en une plateforme fluide et performante.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Sophie Lefebvre",
        role: "Directrice Marketing, Luxia",
        content: "Un design d'une élégance rare et une attention aux détails qui fait toute la différence. Notre taux de conversion a bondi de 40% suite à la refonte.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Karim Benhallam",
        role: "Fondateur, NextGen SaaS",
        content: "Plus qu'une agence, un véritable partenaire stratégique. Leur méthodologie rigoureuse nous a permis de lancer notre produit en un temps record.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(next, 3000); // 3s as per user request
        return () => clearInterval(interval);
    }, [isHovered, next]);

    const getIndices = () => {
        const p = (index - 1 + testimonials.length) % testimonials.length;
        const nIdx = (index + 1) % testimonials.length;
        return { prev: p, current: index, next: nIdx };
    };

    const indices = getIndices();

    return (
        <section id="testimonials" className="py-24 sm:py-32 overflow-hidden bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl font-bold text-strong mb-4">Paroles de Partenaires</h2>
                    <p className="text-muted max-w-2xl mx-auto font-medium">
                        Ils nous ont fait confiance pour bâtir leur avenir numérique.
                    </p>
                </motion.div>

                <div
                    className="relative flex items-center justify-center min-h-[450px]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Main Carousel Wrapper */}
                    <div className="relative flex items-center justify-center w-full max-w-5xl overflow-visible">
                        <AnimatePresence mode="popLayout" initial={false}>
                            {/* Peeking Left (Previous) */}
                            <motion.div
                                key={`prev-${indices.prev}`}
                                initial={{ opacity: 0, x: -150, scale: 0.8, rotateY: 20 }}
                                animate={{ opacity: 0.4, x: -380, scale: 0.8, rotateY: 20 }}
                                exit={{ opacity: 0, x: -500, scale: 0.7 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute hidden lg:block glass rounded-[2rem] p-8 max-w-md blur-[2px] pointer-events-none select-none"
                            >
                                <p className="italic text-lg text-strong opacity-40 line-clamp-3">
                                    &ldquo;{testimonials[indices.prev].content}&rdquo;
                                </p>
                            </motion.div>

                            {/* Current Center Slide */}
                            <motion.div
                                key={`current-${indices.current}`}
                                initial={{ opacity: 0, scale: 0.85, y: 30, zIndex: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0, zIndex: 10 }}
                                exit={{ opacity: 0, scale: 0.85, y: -30, zIndex: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 glass rounded-[2.5rem] p-10 md:p-14 max-w-3xl shadow-2xl shadow-accent/5 border-accent/20 hover:border-accent/40 transition-colors duration-500"
                            >
                                <Quote size={60} className="text-accent/10 absolute top-8 left-8" />
                                <div className="relative z-10 text-center">
                                    <p className="text-xl md:text-2xl font-serif text-strong italic leading-relaxed mb-10">
                                        &ldquo;{testimonials[indices.current].content}&rdquo;
                                    </p>
                                    <div className="flex flex-col items-center">
                                        <div className="w-20 h-20 rounded-full overflow-hidden mb-5 border-2 border-accent/30 p-1 bg-white/5">
                                            <img
                                                src={testimonials[indices.current].avatar}
                                                alt={testimonials[indices.current].name}
                                                className="w-full h-full object-cover rounded-full"
                                            />
                                        </div>
                                        <h4 className="text-xl font-bold text-strong">{testimonials[indices.current].name}</h4>
                                        <p className="text-sm text-accent font-semibold tracking-wide uppercase">{testimonials[indices.current].role}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Peeking Right (Next) */}
                            <motion.div
                                key={`next-${indices.next}`}
                                initial={{ opacity: 0, x: 150, scale: 0.8, rotateY: -20 }}
                                animate={{ opacity: 0.4, x: 380, scale: 0.8, rotateY: -20 }}
                                exit={{ opacity: 0, x: 500, scale: 0.7 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute hidden lg:block glass rounded-[2rem] p-8 max-w-md blur-[2px] pointer-events-none select-none"
                            >
                                <p className="italic text-lg text-strong opacity-40 line-clamp-3">
                                    &ldquo;{testimonials[indices.next].content}&rdquo;
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? 'w-10 bg-accent shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'w-2 bg-strong/10'
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
