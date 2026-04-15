'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Monitor } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
};

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { theme, toggleTheme, mounted: themeMounted } = useTheme();
    const { lang, t, mounted: langMounted } = useLanguage();
    const router = useRouter();
    const pathname = usePathname();

    const ThemeIcon = themeIcons[theme] || Monitor;

    const navLinks = [
        { label: t('nav.services'), id: 'services' },
        { label: t('nav.portfolio'), id: 'portfolio' },
        { label: t('nav.values'), id: 'values' },
        { label: t('nav.contact'), id: 'contact' },
    ];

    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbar = document.querySelector('nav');

    if (!element || !navbar) return;

    const navbarHeight = navbar.offsetHeight;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;

    const offsetPosition = elementPosition - navbarHeight - 10; // 10px marge

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
    });
};

    // Close mobile menu on larger screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileOpen]);

    const toggleLang = () => {
        const newLang = lang === 'fr' ? 'ar' : 'fr';
        const segments = pathname.split('/');
        segments[1] = newLang;
        const newPath = segments.join('/') || `/${newLang}`;
        router.push(newPath);
    };

    const handleLinkClick = (e, targetId) => {
    const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;

    if (isHomePage) {
        e.preventDefault();

        setMobileOpen(false);

        setTimeout(() => {
            scrollToSection(targetId);
        }, 300); // synchro avec animation
    } else {
        setMobileOpen(false);
    }
};

    const isMounted = themeMounted && langMounted;

    return (
        <nav className="fixed top-0 inset-x-0 z-50 glass">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Animated Logo */}
                    <Link href={`/${lang}`} className="flex items-center gap-2 group" aria-label="JADDAOUI ELEVATE">
                        <motion.div
                            className="relative w-9 h-9 flex-shrink-0 overflow-hidden rounded-xl"
                            whileHover={{ scale: 1.12, rotate: 4 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 350, damping: 18 }}
                        >
                            <Image
                                src="/logo-dark.svg"
                                alt="JE logo dark"
                                fill
                                className="object-contain transition-opacity duration-300 hidden dark:block"
                            />
                            <Image
                                src="/logo-light.svg"
                                alt="JE logo light"
                                fill
                                className="object-contain transition-opacity duration-300 block dark:hidden"
                            />
                            <motion.div
                                className="absolute inset-0 rounded-xl bg-accent/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>

                        <motion.span
                            className="text-xl font-black tracking-tight leading-none"
                            initial={{ opacity: 0, x: -6 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            <span className="font-display text-strong">JADD</span>
                            <span className="font-display bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">AOUI</span>
                        </motion.span>
                    </Link>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.id}
                                href={`/${lang}#${link.id}`}
                                onClick={(e) => handleLinkClick(e, link.id)}
                                className="text-sm font-bold text-strong hover:text-accent transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <motion.button
                            onClick={toggleLang}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                            aria-label="Toggle language"
                        >
                            <AnimatePresence mode="wait">
                                {isMounted && (
                                    <motion.span
                                        key={lang}
                                        initial={{ opacity: 0, y: -6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 6 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {lang === 'fr' ? 'عر' : 'FR'}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-strong transition-colors hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent/20"
                            aria-label={`Theme: ${theme}`}
                        >
                            <ThemeIcon size={18} />
                        </button>
                    </div>

                    {/* Mobile controls */}
                    <div className="flex md:hidden items-center gap-2">
                        <motion.button
                            onClick={toggleLang}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center rounded-full px-2.5 py-1 text-xs font-bold border border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                            aria-label="Toggle language"
                        >
                            <AnimatePresence mode="wait">
                                {isMounted && (
                                    <motion.span
                                        key={lang}
                                        initial={{ opacity: 0, y: -5 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {lang === 'fr' ? 'عر' : 'FR'}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </motion.button>

                        <button
                            onClick={toggleTheme}
                            className="rounded-full p-2 text-strong transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20"
                            aria-label={`Theme: ${theme}`}
                        >
                            <ThemeIcon size={18} />
                        </button>
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="rounded-lg p-2 text-strong transition-colors focus:outline-none focus:ring-2 focus:ring-accent/20"
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
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden glass border-t border-main overflow-hidden"
                    >
                        <div className="space-y-1 px-4 py-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={`/${lang}#${link.id}`}
                                        onClick={(e) => handleLinkClick(e, link.id)}
                                        className="block rounded-xl px-4 py-3 text-lg font-bold text-strong hover:bg-accent/10 hover:text-accent transition-all active:scale-95"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
