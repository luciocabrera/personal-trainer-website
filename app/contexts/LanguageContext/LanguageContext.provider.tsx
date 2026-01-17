import i18n from 'i18next';
import { useEffect, useState } from 'react';

import type { Language } from '@/types/language.types';

import { setLanguageCookie } from '@/utils/language-cookie.util';

import { LanguageContext } from './LanguageContext.context';

type LanguageProviderProps = {
  children: React.ReactNode;
  defaultLanguage?: Language;
  initialLanguage?: Language;
};

/**
 * LanguageProvider component that manages language state and persistence
 * Uses cookies as primary storage for SSR compatibility
 * Wraps the application to provide language context to all child components
 */
export const LanguageProvider = ({
  children,
  defaultLanguage = 'nl',
  initialLanguage,
}: LanguageProviderProps) => {
  // Use initialLanguage from loader (cookie) if available, otherwise fall back to defaultLanguage
  const resolvedLanguage = initialLanguage ?? defaultLanguage;
  const [language, setLanguageState] = useState<Language>(resolvedLanguage);

  // Sync i18n with the resolved language on mount (only client-side)
  useEffect(() => {
    // Only update if i18n language differs from our resolved language
    if (i18n.language !== resolvedLanguage) {
      console.log(
        'LanguageProvider syncing i18n from',
        i18n.language,
        'to',
        resolvedLanguage,
      );
      void i18n.changeLanguage(resolvedLanguage);
    }
  }, [resolvedLanguage]);

  const changeLanguage = (newLanguage: Language) => {
    console.log('LanguageProvider changeLanguage:', newLanguage);
    setLanguageState(newLanguage);
    // Sync to cookie for SSR
    setLanguageCookie(newLanguage);
    // Sync i18n
    void i18n.changeLanguage(newLanguage);
  };

  const value = {
    changeLanguage,
    language,
  };

  return <LanguageContext value={value}>{children}</LanguageContext>;
};
