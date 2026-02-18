import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-main transition-colors duration-500">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid gap-12 md:grid-cols-3">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-1 text-2xl font-bold tracking-tight mb-4">
                            <span className="font-display text-strong">MAD</span>
                            <span className="font-display bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                A
                            </span>
                        </div>
                        <p className="text-sm text-strong leading-relaxed max-w-xs font-semibold opacity-80">
                            Agence digitale haute performance. Nous transformons vos ambitions en expériences numériques exceptionnelles.
                        </p>
                    </motion.div>

                    {/* Quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-strong mb-6 uppercase text-xs tracking-[0.2em]">Navigation</h4>
                        <ul className="space-y-3 text-sm text-strong font-semibold opacity-90">
                            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
                            <li><a href="#process" className="hover:text-accent transition-colors">Processus</a></li>
                            <li><a href="#portfolio" className="hover:text-accent transition-colors">Portfolio</a></li>
                            <li><a href="#values" className="hover:text-accent transition-colors">Valeurs</a></li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="font-bold text-strong mb-6 uppercase text-xs tracking-[0.2em]">Contact</h4>
                        <ul className="space-y-4 text-sm text-strong font-semibold opacity-90">
                            <li className="flex items-start gap-3">
                                <Mail size={16} className="text-accent shrink-0 mt-0.5" />
                                <span>hello@madaelevate.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={16} className="text-accent shrink-0 mt-0.5" />
                                <span>+261 34 00 000 00</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                                <span>Antananarivo, Madagascar</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Social Proof / Newsletter Placeholder Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 glass rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <h4 className="text-2xl font-bold text-strong mb-2 italic">"Votre satisfaction est notre priorité."</h4>
                        <p className="text-sm text-strong font-semibold opacity-80">Discutons de votre prochain projet ambitieux dès aujourd'hui.</p>
                    </div>
                    <a href="mailto:hello@madaelevate.com" className="px-8 py-4 bg-accent text-white rounded-xl font-bold hover:bg-accent-hover transition-all shadow-xl shadow-accent/40 active:scale-95">
                        Démarrer l'aventure
                    </a>
                </motion.div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-main text-center text-xs text-muted font-medium transition-colors duration-500">
                    © {new Date().getFullYear()} MADA ELEVATE. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
