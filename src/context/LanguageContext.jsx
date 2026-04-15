'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLocale }) {
    // The locale is managed by the layout from the URL.
    // We synchronize our local context state with it.
    const [lang, setLangState] = useState(initialLocale || 'fr');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Sync with initialLocale when it changes (e.g., on navigation)
    useEffect(() => {
        if (initialLocale && initialLocale !== lang) {
            setLangState(initialLocale);
        }
    }, [initialLocale, lang]);

    useEffect(() => {
        if (!mounted) return;
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
        // We no longer manually set localStorage here to avoid loops with the router.
        // The URL is the single source of truth.
    }, [lang, mounted]);

    // This is still here for compatibility, but the Navbar will 
    // now favor URL navigation for language switching.
    const setLang = (newLang) => {
        setLangState(newLang);
    };

    const t = (keyPath) => {
        const keys = keyPath.split('.');
        let result = translations[lang];
        for (const key of keys) {
            if (result == null) return keyPath;
            result = result[key];
        }
        return result ?? keyPath;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
