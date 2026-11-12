'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useMessages } from 'next-intl';

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLocale }) {
    // The URL (via the [locale] layout) is the single source of truth for the locale.
    const lang = initialLocale || 'fr';
    const [mounted, setMounted] = useState(false);
    // Messages come from next-intl (src/i18n/messages/*.json) so every key
    // available server-side is also available to client components.
    const messages = useMessages();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }, [lang]);

    // Kept for backward compatibility; language switching is done via URL navigation.
    const setLang = () => {};

    const t = useCallback(
        (keyPath) => {
            let result = messages;
            for (const key of keyPath.split('.')) {
                if (result == null) return keyPath;
                result = result[key];
            }
            return result ?? keyPath;
        },
        [messages]
    );

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
