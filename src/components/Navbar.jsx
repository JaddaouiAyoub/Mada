import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Valeurs', href: '#values' },
    { label: 'Contact', href: '#contact' },
];

const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const ThemeIcon = themeIcons[theme];

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-1 text-2xl font-bold tracking-tight">
                        <span className="font-display text-slate-900 dark:text-white">MAD</span>
                        <span className="font-display bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">A</span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-accent dark:text-slate-300 dark:hover:text-accent transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Theme toggle */}
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-slate-500 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            aria-label={`Theme: ${theme}`}
                        >
                            <ThemeIcon size={18} />
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-slate-500 hover:text-accent transition-colors"
                            aria-label={`Theme: ${theme}`}
                        >
                            <ThemeIcon size={18} />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="rounded-lg p-2 text-slate-500 hover:text-accent transition-colors"
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
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
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
