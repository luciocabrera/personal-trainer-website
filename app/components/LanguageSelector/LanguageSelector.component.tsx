import * as stylex from '@stylexjs/stylex';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { Language } from '@/types/language.types';

import type { LanguageSelectorProps } from './LanguageSelector.types';

import { styles } from './LanguageSelector.stylex';

const LANGUAGES: { label: string; value: Language }[] = [
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
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const handleSelect = useCallback(
    (language: Language) => {
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
        onClick={handleToggle}
        type='button'
        {...stylex.props(
          styles.trigger,
          isMobile ? styles.triggerMobile : undefined
        )}
      >
        <span>{currentLabel}</span>
        <span
          {...stylex.props(styles.arrow, isOpen ? styles.arrowOpen : undefined)}
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
            isMobile ? styles.dropdownMobile : undefined
          )}
        >
          {LANGUAGES.map((lang) => (
            <li
              key={lang.value}
              role='none'
            >
              <button
                aria-selected={currentLanguage === lang.value}
                onClick={() => { handleSelect(lang.value); }}
                role='option'
                type='button'
                {...stylex.props(
                  styles.option,
                  currentLanguage === lang.value ? styles.optionActive : undefined
                )}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      ) : undefined}
    </div>
  );
};
