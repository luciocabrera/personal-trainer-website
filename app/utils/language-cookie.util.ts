import type { Language } from '@/types/language.types';

const LANGUAGE_COOKIE_NAME = 'language';
const COOKIE_MAX_AGE_DAYS = 365; // 1 year

/**
 * Parse cookies from a cookie header string
 */
export const parseCookies = (cookieHeader: string): Record<string, string> => {
  const cookies: Record<string, string> = {};

  for (const cookie of cookieHeader.split(';')) {
    const [name, ...valueParts] = cookie.trim().split('=');
    if (name !== '') {
      cookies[name] = valueParts.join('=');
    }
  }

  return cookies;
};

/**
 * Get language from cookie header (for server-side use)
 */
export const getLanguageFromCookie = (
  cookieHeader: string | null
): Language | undefined => {
  if (cookieHeader === null || cookieHeader === '') {
    return undefined;
  }

  const cookies = parseCookies(cookieHeader);
  const language = cookies[LANGUAGE_COOKIE_NAME];

  if (language === 'en' || language === 'nl' || language === 'es') {
    return language;
  }

  return undefined;
};

/**
 * Set language cookie (for client-side use)
 * Uses document.cookie API for cookie management
 */
export const setLanguageCookie = (language: Language): void => {
  // SSR guard - document may not exist on server
  if (typeof document === 'undefined') {
    return;
  }

  const maxAge = COOKIE_MAX_AGE_DAYS * 24 * 60 * 60; // Convert to seconds
  document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; path=/; max-age=${maxAge}; SameSite=Lax`;
};
