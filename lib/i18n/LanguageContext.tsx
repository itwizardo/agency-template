'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import nlTranslations from '@/locales/nl.json';
import enTranslations from '@/locales/en.json';
import deTranslations from '@/locales/de.json';
import frTranslations from '@/locales/fr.json';
import esTranslations from '@/locales/es.json';

export type Locale = 'nl' | 'en' | 'de' | 'fr' | 'es';
type Translations = typeof nlTranslations;

export const localeNames: Record<Locale, { name: string; flag: string }> = {
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  en: { name: 'English', flag: '🇬🇧' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  fr: { name: 'Français', flag: '🇫🇷' },
  es: { name: 'Español', flag: '🇪🇸' },
};

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const translations: Record<Locale, Translations> = {
  nl: nlTranslations,
  en: enTranslations,
  de: deTranslations,
  fr: frTranslations,
  es: esTranslations,
};

const validLocales: Locale[] = ['nl', 'en', 'de', 'fr', 'es'];

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('nl');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('locale') as Locale;
    if (saved && validLocales.includes(saved)) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  // Prevent hydration mismatch by using default locale until mounted
  const currentLocale = mounted ? locale : 'nl';

  return (
    <LanguageContext.Provider
      value={{
        locale: currentLocale,
        setLocale,
        t: translations[currentLocale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
