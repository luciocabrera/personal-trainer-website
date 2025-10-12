import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/locales/en.json";
import nl from "@/locales/nl.json";
import es from "@/locales/es.json";

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
});

export default i18n;
