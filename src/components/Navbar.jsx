import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const { lang, setLang, t } = useLanguage();

    const ThemeIcon = themeIcons[theme];

    const navLinks = [
        { label: t('nav.services'), href: '#services' },
        { label: t('nav.portfolio'), href: '#portfolio' },
        { label: t('nav.values'), href: '#values' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    const toggleLang = () => setLang(lang === 'fr' ? 'ar' : 'fr');

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Animated Logo */}
                    <a href="#" className="flex items-center gap-2 group" aria-label="JADDAOUI ELEVATE">
                        <motion.div
                            className="relative w-9 h-9 flex-shrink-0 overflow-hidden rounded-xl"
                            whileHover={{ scale: 1.12, rotate: 4 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                        >
                            {/* Dark mode logo */}
                            <img
                                src="/logo-dark.svg"
                                alt="JE logo dark"
                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 hidden dark:block"
                            />
                            {/* Light mode logo */}
                            <img
                                src="/logo-light.svg"
                                alt="JE logo light"
                                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 block dark:hidden"
                            />
                            {/* Animated glow ring on hover */}
                            <motion.div
                                className="absolute inset-0 rounded-xl bg-accent/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        {/* Text wordmark */}
                        <motion.span
                            className="text-xl font-black tracking-tight leading-none"
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <span className="font-display text-strong">JADD</span>
                            <span className="font-display bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">AOUI</span>
                        </motion.span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-bold text-strong hover:text-accent transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Language Toggle */}
                        <motion.button
                            onClick={toggleLang}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                            aria-label="Toggle language"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={lang}
                                    initial={{ opacity: 0, y: -6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 6 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {lang === 'fr' ? 'عر' : 'FR'}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-strong transition-colors hover:bg-accent/10"
                            aria-label={`Theme: ${theme}`}
                        >
                            <ThemeIcon size={18} />
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center gap-2">
                        {/* Language Toggle Mobile */}
                        <motion.button
                            onClick={toggleLang}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center rounded-full px-2.5 py-1 text-xs font-bold border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                            aria-label="Toggle language"
                        >
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={lang}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {lang === 'fr' ? 'عر' : 'FR'}
                                </motion.span>
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-strong transition-colors"
                            aria-label={`Theme: ${theme}`}
                        >
                            <ThemeIcon size={18} />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="rounded-lg p-2 text-strong transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass border-t border-slate-200/50 dark:border-slate-800/50"
                    >
                        <div className="space-y-1 px-4 py-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => {
                                        setMobileOpen(false);
                                    }}
                                    className="block rounded-lg px-3 py-2 text-base font-bold text-strong hover:bg-accent/10 transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
