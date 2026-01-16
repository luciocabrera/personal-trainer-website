import i18n from 'i18next';

import { getLanguageFromCookie } from '@/utils/language-cookie.util';

import type { Route } from '../+types/root';

// Initialize i18n - must be imported to set up i18n
import '@/i18n';

/**
 * Loader to get language from cookies for SSR hydration
 * This ensures the server renders with the correct language to avoid hydration mismatch
 */
export const loader = async ({ request }: Route.LoaderArgs) => {
  const cookieHeader = request.headers.get('Cookie');
  const language = getLanguageFromCookie(cookieHeader) ?? 'nl';

  // Sync i18n to the cookie language BEFORE rendering
  // This ensures server renders with the correct language
  if (i18n.language !== language) {
    await i18n.changeLanguage(language);
  }

  return { language };
};
