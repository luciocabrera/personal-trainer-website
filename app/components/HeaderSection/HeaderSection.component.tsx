import * as stylex from '@stylexjs/stylex';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router';

import type { Language } from '@/types/language.types';

import { BRAND } from '@/constants/brand';
import { useLanguage } from '@/hooks/useLanguage.hook';

import { LanguageSelector } from '../LanguageSelector';
import { styles } from './HeaderSection.stylex';

const handleMobileMenuClick = (event: React.MouseEvent) => {
  event.stopPropagation();
};

const HeaderSection = () => {
  const { t } = useTranslation();
  const { changeLanguage, language: currentLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLanguageChange = (lng: Language) => {
    changeLanguage(lng);
    setIsMobileMenuOpen(false); // Close mobile menu when changing language
  };

  const handleMenuClick = (scrollToId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname === '/') {
      document.querySelector(`#${scrollToId}`)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      void navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        document.querySelector(`#${scrollToId}`)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const handleHomeClick = () => {
    if (location.pathname === '/') {
      handleMenuClick('hero');
    } else {
      void navigate('/');
    }
    setIsMobileMenuOpen(false);
  };
  const handleTrainingsClick = () => { handleMenuClick('trainings'); };
  const handleScheduleClick = () => { handleMenuClick('schedule'); };
  const handlePricingClick = () => { handleMenuClick('pricing'); };
  const handleSignupClick = () => { handleMenuClick('signup'); };

  const handleToggleMobileMenu = () => { setIsMobileMenuOpen(!isMobileMenuOpen); };
  const handleCloseMobileMenu = () => { setIsMobileMenuOpen(false); };

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
          <li
            role='none'
            {...stylex.props(styles.menuItem)}
          >
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleHomeClick}
            >
              {t('nav.home')}
            </button>
          </li>
          <li
            role='none'
            {...stylex.props(styles.menuItem)}
          >
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleTrainingsClick}
            >
              {t('nav.trainings')}
            </button>
          </li>
          <li
            role='none'
            {...stylex.props(styles.menuItem)}
          >
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handleScheduleClick}
            >
              {t('nav.schedule')}
            </button>
          </li>
          <li
            role='none'
            {...stylex.props(styles.menuItem)}
          >
            <button
              role='menuitem'
              {...stylex.props(styles.menuLink)}
              onClick={handlePricingClick}
            >
              {t('nav.pricing')}
            </button>
          </li>
          <li
            role='none'
            {...stylex.props(styles.menuItem)}
          >
            <Link
              role='menuitem'
              to='/blog'
              {...stylex.props(styles.menuLink)}
            >
              {t('nav.blog')}
            </Link>
          </li>
          <li
            role='none'
            {...stylex.props(styles.menuItem)}
          >
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
        <LanguageSelector
          currentLanguage={currentLanguage}
          onLanguageChange={handleLanguageChange}
          variant='desktop'
        />

        {/* Mobile Hamburger Button */}
        <button
          {...stylex.props(styles.hamburger)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={handleToggleMobileMenu}
          type='button'
        >
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen ? styles.hamburgerLineActive1 : undefined
            )}
          />
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen ? styles.hamburgerLineActive2 : undefined
            )}
          />
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen ? styles.hamburgerLineActive3 : undefined
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
                <Link
                  role='menuitem'
                  to='/blog'
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={handleCloseMobileMenu}
                >
                  {t('nav.blog')}
                </Link>
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

            {/* Mobile Language Selector */}
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={handleLanguageChange}
              variant='mobile'
            />
          </div>
        </div>
      ) : undefined}
    </header>
  );
};

export default HeaderSection;
