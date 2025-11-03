import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';

import { BRAND } from '@/constants/brand';
import i18n from '@/i18n';

import { styles } from './HeaderSection.stylex';

const HeaderSection = () => {
  const { i18n: i18nInstance, t } = useTranslation();
  const currentLanguage = i18nInstance.language;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false); // Close mobile menu when changing language
  };

  const handleMenuClick = (scrollToId: string) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header {...stylex.props(styles.header)}>
      <nav
        aria-label='Main navigation'
        role='navigation'
        {...stylex.props(styles.nav)}
      >
        <div {...stylex.props(styles.logo)}>{BRAND.name}</div>

        {/* Desktop Navigation */}
        <ul
          role='menubar'
          {...stylex.props(styles.menuList)}
        >
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick('hero')}
            >
              {t('nav.home')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick('trainings')}
            >
              {t('nav.trainings')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick('outdoor-benefits')}
            >
              {t('nav.outdoorBenefits')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick('schedule')}
            >
              {t('nav.schedule')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick('pricing')}
            >
              {t('nav.pricing')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick('signup')}
            >
              {t('nav.contact')}
            </button>
          </li>
        </ul>

        {/* Desktop Language Selector */}
        <div
          {...stylex.props(styles.languageSelector)}
          aria-label='Language selection'
          role='group'
        >
          <button
            aria-label='Switch to English'
            type='button'
            onClick={() => changeLanguage('en')}
            {...stylex.props(
              styles.languageButton,
              currentLanguage === 'en' && styles.languageButtonActive
            )}
          >
            EN
          </button>
          <button
            aria-label='Switch to Dutch'
            type='button'
            onClick={() => changeLanguage('nl')}
            {...stylex.props(
              styles.languageButton,
              currentLanguage === 'nl' && styles.languageButtonActive
            )}
          >
            NL
          </button>
          <button
            aria-label='Switch to Spanish'
            type='button'
            onClick={() => changeLanguage('es')}
            {...stylex.props(
              styles.languageButton,
              currentLanguage === 'es' && styles.languageButtonActive
            )}
          >
            ES
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          {...stylex.props(styles.hamburger)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          type='button'
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen && styles.hamburgerLineActive1
            )}
          />
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen && styles.hamburgerLineActive2
            )}
          />
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen && styles.hamburgerLineActive3
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          {...stylex.props(styles.mobileMenuOverlay)}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            {...stylex.props(styles.mobileMenu)}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Language Selector */}
            <div
              {...stylex.props(styles.mobileLanguageSelector)}
              aria-label='Language selection'
              role='group'
            >
              <button
                aria-label='Switch to English'
                type='button'
                onClick={() => changeLanguage('en')}
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === 'en' && styles.mobileLanguageButtonActive
                )}
              >
                EN
              </button>
              <button
                aria-label='Switch to Dutch'
                type='button'
                onClick={() => changeLanguage('nl')}
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === 'nl' && styles.mobileLanguageButtonActive
                )}
              >
                NL
              </button>
              <button
                aria-label='Switch to Spanish'
                type='button'
                onClick={() => changeLanguage('es')}
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === 'es' && styles.mobileLanguageButtonActive
                )}
              >
                ES
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul
              role='menubar'
              {...stylex.props(styles.mobileMenuList)}
            >
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick('hero')}
                >
                  {t('nav.home')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick('trainings')}
                >
                  {t('nav.trainings')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick('outdoor-benefits')}
                >
                  {t('nav.outdoorBenefits')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick('schedule')}
                >
                  {t('nav.schedule')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick('pricing')}
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick('signup')}
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;
