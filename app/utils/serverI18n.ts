/**
 * Server-side i18n utilities for action functions
 */
import en from '@/locales/en.json';
import es from '@/locales/es.json';
import nl from '@/locales/nl.json';
import type { Language } from '@/types/language.types';

import { getLanguageFromCookie } from './language-cookie.util';

const translations = {
  en,
  es,
  nl,
};

export const getServerTranslation = (language: Language = 'nl') => {
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = translations[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if path doesn't exist
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t };
};

// Get language from request (cookie first, then Accept-Language header)
export const getLanguageFromRequest = (request: Request): Language => {
  // First, check cookie
  const cookieHeader = request.headers.get('Cookie');
  const cookieLanguage = getLanguageFromCookie(cookieHeader);
  if (cookieLanguage) {
    return cookieLanguage;
  }

  // Fallback to Accept-Language header
  const acceptLanguage = request.headers.get('Accept-Language') ?? '';

  if (acceptLanguage.includes('en')) return 'en';
  if (acceptLanguage.includes('es')) return 'es';

  return 'nl'; // Default to Dutch
};
