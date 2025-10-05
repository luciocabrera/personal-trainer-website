import { useTranslation } from "react-i18next";
import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import i18n from "@/i18n";
import { styles } from "./HeaderSection.stylex";
import { BRAND } from "@/constants/brand";

const HeaderSection = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLanguage = i18nInstance.language;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false); // Close mobile menu when changing language
  };

  const handleMenuClick = (scrollToId: string) => {
    document.getElementById(scrollToId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header {...stylex.props(styles.header)}>
      <nav
        role="navigation"
        aria-label="Main navigation"
        {...stylex.props(styles.nav)}
      >
        <div {...stylex.props(styles.logo)}>{BRAND.name}</div>

        {/* Desktop Navigation */}
        <ul role="menubar" {...stylex.props(styles.menuList)}>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick("hero")}
            >
              {t("nav.home")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick("trainings")}
            >
              {t("nav.trainings")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick("schedule")}
            >
              {t("nav.schedule")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick("pricing")}
            >
              {t("nav.pricing")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() => handleMenuClick("signup")}
            >
              {t("nav.contact")}
            </button>
          </li>
        </ul>

        {/* Desktop Language Selector */}
        <div
          {...stylex.props(styles.languageSelector)}
          role="group"
          aria-label="Language selection"
        >
          <button
            onClick={() => changeLanguage("en")}
            aria-label="Switch to English"
            type="button"
            {...stylex.props(
              styles.languageButton,
              currentLanguage === "en" && styles.languageButtonActive
            )}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("nl")}
            aria-label="Switch to Dutch"
            type="button"
            {...stylex.props(
              styles.languageButton,
              currentLanguage === "nl" && styles.languageButtonActive
            )}
          >
            NL
          </button>
          <button
            onClick={() => changeLanguage("es")}
            aria-label="Switch to Spanish"
            type="button"
            {...stylex.props(
              styles.languageButton,
              currentLanguage === "es" && styles.languageButtonActive
            )}
          >
            ES
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          {...stylex.props(styles.hamburger)}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          type="button"
        >
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen && styles.hamburgerLineActive1
            )}
          ></span>
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen && styles.hamburgerLineActive2
            )}
          ></span>
          <span
            {...stylex.props(
              styles.hamburgerLine,
              isMobileMenuOpen && styles.hamburgerLineActive3
            )}
          ></span>
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
              role="group"
              aria-label="Language selection"
            >
              <button
                onClick={() => changeLanguage("en")}
                aria-label="Switch to English"
                type="button"
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === "en" && styles.mobileLanguageButtonActive
                )}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("nl")}
                aria-label="Switch to Dutch"
                type="button"
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === "nl" && styles.mobileLanguageButtonActive
                )}
              >
                NL
              </button>
              <button
                onClick={() => changeLanguage("es")}
                aria-label="Switch to Spanish"
                type="button"
                {...stylex.props(
                  styles.mobileLanguageButton,
                  currentLanguage === "es" && styles.mobileLanguageButtonActive
                )}
              >
                ES
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <ul role="menubar" {...stylex.props(styles.mobileMenuList)}>
              <li role="none">
                <button
                  role="menuitem"
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick("hero")}
                >
                  {t("nav.home")}
                </button>
              </li>
              <li role="none">
                <button
                  role="menuitem"
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick("trainings")}
                >
                  {t("nav.trainings")}
                </button>
              </li>
              <li role="none">
                <button
                  role="menuitem"
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick("schedule")}
                >
                  {t("nav.schedule")}
                </button>
              </li>
              <li role="none">
                <button
                  role="menuitem"
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick("pricing")}
                >
                  {t("nav.pricing")}
                </button>
              </li>
              <li role="none">
                <button
                  role="menuitem"
                  {...stylex.props(styles.mobileMenuLink)}
                  onClick={() => handleMenuClick("signup")}
                >
                  {t("nav.contact")}
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
