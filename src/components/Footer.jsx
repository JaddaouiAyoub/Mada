import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className="border-t border-slate-200/50 dark:border-slate-800/50">
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
                            <span className="font-display text-slate-900 dark:text-white">MAD</span>
                            <span className="font-display bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                                A
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
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
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Navigation</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
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
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
                            <li className="flex items-center gap-2">
                                <Mail size={14} className="text-accent" />
                                hello@madaelevate.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={14} className="text-accent" />
                                +261 34 00 000 00
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin size={14} className="text-accent" />
                                Antananarivo, Madagascar
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center text-xs text-slate-400 dark:text-slate-500">
                    © {new Date().getFullYear()} MADA ELEVATE. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
}
