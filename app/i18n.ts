import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import en from '@/locales/en.json';
import es from '@/locales/es.json';
import nl from '@/locales/nl.json';

// Enhanced i18n configuration with optimizations
i18n.use(initReactI18next).init({
  // Cache translations
  cache: {
    enabled: true,
  },

  // default language
  fallbackLng: 'nl',

  interpolation: {
    escapeValue: false,
  },

  lng: 'nl',

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
