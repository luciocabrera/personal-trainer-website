import { createContext } from 'react';

import type { Language } from '@/types/language.types';

interface LanguageContextValue {
  changeLanguage: (language: Language) => void;
  language: Language;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);
