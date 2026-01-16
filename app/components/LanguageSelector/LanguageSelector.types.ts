import type { Language } from '@/types/language.types';

export type LanguageSelectorProps = {
  currentLanguage: string;
  onLanguageChange: (language: Language) => void;
  variant?: 'desktop' | 'mobile';
};
