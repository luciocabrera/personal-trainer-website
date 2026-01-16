import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import nl from '@/locales/nl.json';
import type { Language } from '@/types/language.types';

/**
 * Read language from cookie (client-side only)
 */
const getLanguageFromCookie = (): Language | undefined => {
  if (typeof document === 'undefined') {
    return undefined;
  }

  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'language') {
      if (value === 'en' || value === 'nl' || value === 'es') {
        return value;
      }
    }
  }

  return undefined;
};

// Get initial language from cookie (for client) or use default (for server)
const initialLanguage = getLanguageFromCookie() ?? 'nl';

// Enhanced i18n configuration with optimizations
void i18n.use(initReactI18next).init({
  // Cache translations
  cache: {
    enabled: true,
  },

  // default language
  fallbackLng: 'nl',

  interpolation: {
    escapeValue: false,
  },

  // Use cookie language if available, otherwise default to 'nl'
  lng: initialLanguage,

  // Performance optimizations
  parseMissingKeyHandler: (key) => {
    // In production, return the key itself to avoid errors
    return process.env.NODE_ENV === 'production' ? key : `Missing: ${key}`;
  },

  // Preload languages for better performance
  preload: ['nl', 'en', 'es'],

  resources: {
    en: { translation: en },
    es: { translation: es },
    nl: { translation: nl },
  },
});

export default i18n;
