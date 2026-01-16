import { use } from 'react';

import { LanguageContext } from '@/contexts/LanguageContext';

/**
 * Hook to access language context
 * Must be used within a LanguageProvider
 */
export const useLanguage = () => {
  const context = use(LanguageContext);

  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
};
