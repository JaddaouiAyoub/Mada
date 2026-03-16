import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

const LanguageContext = createContext();

function detectSystemLanguage() {
    const lang = navigator.language || navigator.languages?.[0] || 'fr';
    return lang.startsWith('ar') ? 'ar' : 'fr';
}

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        const saved = localStorage.getItem('lang');
        return saved || detectSystemLanguage();
    });

    useEffect(() => {
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
        localStorage.setItem('lang', lang);
    }, [lang]);

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
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
    return ctx;
}
