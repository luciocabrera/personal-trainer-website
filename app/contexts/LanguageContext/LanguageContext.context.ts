import { createContext } from 'react';

import type { Language } from '@/types/language.types';

type LanguageContextValue = {
  changeLanguage: (language: Language) => void;
  language: Language;
};

export const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);
