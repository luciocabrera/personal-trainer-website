/**
 * Server-side i18n utilities for action functions
 */
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import nl from "@/locales/nl.json";

type Language = "en" | "es" | "nl";

const translations = {
  en,
  es,
  nl,
};

export const getServerTranslation = (language: Language = "nl") => {
  const t = (key: string): string => {
    const keys = key.split(".");
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if path doesn't exist
      }
    }

    return typeof value === "string" ? value : key;
  };

  return { t };
};

// Get language from request headers
export const getLanguageFromRequest = (request: Request): Language => {
  const acceptLanguage = request.headers.get("Accept-Language") || "";

  if (acceptLanguage.includes("en")) return "en";
  if (acceptLanguage.includes("es")) return "es";

  return "nl"; // Default to Dutch
};
