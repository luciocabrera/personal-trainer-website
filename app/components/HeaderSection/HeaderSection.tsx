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

  const handleHomeClick = () => handleMenuClick('hero');
  const handleTrainingsClick = () => handleMenuClick('trainings');
  const handleOutdoorBenefitsClick = () => handleMenuClick('outdoor-benefits');
  const handleScheduleClick = () => handleMenuClick('schedule');
  const handlePricingClick = () => handleMenuClick('pricing');
  const handleSignupClick = () => handleMenuClick('signup');

  const handleEnglishClick = () => changeLanguage('en');
  const handleDutchClick = () => changeLanguage('nl');
  const handleSpanishClick = () => changeLanguage('es');

  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false);
  const handleMobileMenuClick = (e: React.MouseEvent) => e.stopPropagation();

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
              onClick={handleHomeClick}
            >
              {t('nav.home')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleTrainingsClick}
            >
              {t('nav.trainings')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleOutdoorBenefitsClick}
            >
              {t('nav.outdoorBenefits')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleScheduleClick}
            >
              {t('nav.schedule')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handlePricingClick}
            >
              {t('nav.pricing')}
            </button>
          </li>
          <li role='none'>
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleSignupClick}
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
            onClick={handleEnglishClick}
            {...stylex.props(
              styles.languageButton,
              currentLanguage === 'en' ? styles.languageButtonActive : null
            )}
          >
            EN
          </button>
          <button
            aria-label='Switch to Dutch'
            type='button'
            onClick={handleDutchClick}
            {...stylex.props(
              styles.languageButton,
              currentLanguage === 'nl' ? styles.languageButtonActive : null
            )}
          >
            NL
          </button>
          <button
            aria-label='Switch to Spanish'
            type='button'
            onClick={handleSpanishClick}
            {...stylex.props(
              styles.languageButton,
              currentLanguage === 'es' ? styles.languageButtonActive : null
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
          onClick={handleToggleMobileMenu}
        >
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen ? styles.hamburgerLineActive1 : null
            )}
          />
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen ? styles.hamburgerLineActive2 : null
            )}
          />
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen ? styles.hamburgerLineActive3 : null
            )}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen ? (
        <div
          {...stylex.props(styles.mobileMenuOverlay)}
          onClick={handleCloseMobileMenu}
        >
          <div
            {...stylex.props(styles.mobileMenu)}
            onClick={handleMobileMenuClick}
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
                onClick={handleEnglishClick}
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === 'en'
                    ? styles.mobileLanguageButtonActive
                    : null
                )}
              >
                EN
              </button>
              <button
                aria-label='Switch to Dutch'
                type='button'
                onClick={handleDutchClick}
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === 'nl'
                    ? styles.mobileLanguageButtonActive
                    : null
                )}
              >
                NL
              </button>
              <button
                aria-label='Switch to Spanish'
                type='button'
                onClick={handleSpanishClick}
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === 'es'
                    ? styles.mobileLanguageButtonActive
                    : null
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
                  onClick={handleHomeClick}
                >
                  {t('nav.home')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={handleTrainingsClick}
                >
                  {t('nav.trainings')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={handleOutdoorBenefitsClick}
                >
                  {t('nav.outdoorBenefits')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={handleScheduleClick}
                >
                  {t('nav.schedule')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={handlePricingClick}
                >
                  {t('nav.pricing')}
                </button>
              </li>
              <li role='none'>
                <button
                  role='menuitem'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={handleSignupClick}
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default HeaderSection;
