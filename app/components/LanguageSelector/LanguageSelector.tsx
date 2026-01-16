import { useCallback, useEffect, useRef, useState } from 'react';
import * as stylex from '@stylexjs/stylex';

import type { Language } from '@/types/language.types';

import { styles } from './LanguageSelector.stylex';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: Language) => void;
  variant?: 'desktop' | 'mobile';
}

const LANGUAGES: Array<{ label: string; value: Language }> = [
  { label: 'EN', value: 'en' },
  { label: 'NL', value: 'nl' },
  { label: 'ES', value: 'es' },
];

export const LanguageSelector = ({
  currentLanguage,
  onLanguageChange,
  variant = 'desktop',
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLabel =
    LANGUAGES.find((lang) => lang.value === currentLanguage)?.label ?? 'NL';

  const handleToggle = useCallback(() => {
    console.log('handleToggle called, current isOpen:', isOpen);
    setIsOpen((prev) => !prev);
  }, [isOpen]);

  const handleSelect = useCallback(
    (language: Language) => {
      console.log('handleSelect called with:', language);
      onLanguageChange(language);
      setIsOpen(false);
    },
    [onLanguageChange]
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const isMobile = variant === 'mobile';

  return (
    <div
      ref={dropdownRef}
      {...stylex.props(
        styles.container,
        isMobile ? styles.containerMobile : styles.containerDesktop
      )}
    >
      <button
        aria-expanded={isOpen}
        aria-haspopup='listbox'
        aria-label='Language selection'
        type='button'
        onClick={handleToggle}
        {...stylex.props(
          styles.trigger,
          isMobile ? styles.triggerMobile : null
        )}
      >
        <span>{currentLabel}</span>
        <span
          {...stylex.props(styles.arrow, isOpen ? styles.arrowOpen : null)}
        >
          ▼
        </span>
      </button>

      {isOpen ? (
        <ul
          aria-label='Select language'
          role='listbox'
          {...stylex.props(
            styles.dropdown,
            isMobile ? styles.dropdownMobile : null
          )}
        >
          {LANGUAGES.map((lang) => (
            <li
              key={lang.value}
              role='none'
            >
              <button
                aria-selected={currentLanguage === lang.value}
                role='option'
                type='button'
                onClick={() => handleSelect(lang.value)}
                {...stylex.props(
                  styles.option,
                  currentLanguage === lang.value ? styles.optionActive : null
                )}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};
