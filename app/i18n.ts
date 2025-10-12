import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import es from "@/locales/es.json";

// Enhanced i18n configuration with optimizations
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    nl: { translation: nl },
    es: { translation: es },
  },
  lng: "nl", // default language
  fallbackLng: "nl",
  interpolation: {
    escapeValue: false,
  },
  // Performance optimizations
  parseMissingKeyHandler: (key) => {
    // In production, return the key itself to avoid errors
    return process.env.NODE_ENV === "production" ? key : `Missing: ${key}`;
  },
  // Preload languages for better performance
  preload: ["nl", "en", "es"],
  // Cache translations
  cache: {
    enabled: true,
  },
});

export default i18n;
