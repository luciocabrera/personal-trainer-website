import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import i18n from "@/i18n";
import { styles } from "./HeaderSection.stylex";
import { BRAND } from "@/constants/brand";

const HeaderSection = () => {
  const { t, i18n: i18nInstance } = useTranslation();
  const currentLanguage = i18nInstance.language;

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header {...stylex.props(styles.header)}>
      <nav
        role="navigation"
        aria-label="Main navigation"
        {...stylex.props(styles.nav, styles.navMobile)}
      >
        <div {...stylex.props(styles.logo)}>{BRAND.name}</div>
        <div
          {...stylex.props(
            styles.languageSelector,
            styles.languageSelectorMobile
          )}
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
        <ul
          role="menubar"
          {...stylex.props(styles.menuList, styles.menuListMobile)}
        >
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() =>
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.home")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() =>
                document
                  .getElementById("trainings")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.trainings")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() =>
                document
                  .getElementById("schedule")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.schedule")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() =>
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.pricing")}
            </button>
          </li>
          <li role="none">
            <button
              role="menuitem"
              {...stylex.props(styles.menuLink)}
              onClick={() =>
                document
                  .getElementById("signup")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.contact")}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
