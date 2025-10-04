import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import i18n from "../../i18n";
import { styles } from "./HeaderSection.stylex";

const HeaderSection = () => {
  const { t } = useTranslation();

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
        <div {...stylex.props(styles.logo)}>Level Up</div>
        <div
          {...stylex.props(styles.languageSelector)}
          role="group"
          aria-label="Language selection"
        >
          <button
            onClick={() => changeLanguage("en")}
            aria-label="Switch to English"
            type="button"
            {...stylex.props(styles.languageButton)}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("nl")}
            aria-label="Switch to Dutch"
            type="button"
            {...stylex.props(styles.languageButton)}
          >
            NL
          </button>
          <button
            onClick={() => changeLanguage("es")}
            aria-label="Switch to Spanish"
            type="button"
            {...stylex.props(styles.languageButton)}
          >
            ES
          </button>
        </div>
        <ul
          role="menubar"
          {...stylex.props(styles.menuList, styles.menuListMobile)}
        >
          <li role="none">
            <a href="#hero" role="menuitem" {...stylex.props(styles.menuLink)}>
              {t("nav.home")}
            </a>
          </li>
          <li role="none">
            <a
              href="#trainings"
              role="menuitem"
              {...stylex.props(styles.menuLink)}
            >
              {t("nav.trainings")}
            </a>
          </li>
          <li role="none">
            <a
              href="#schedule"
              role="menuitem"
              {...stylex.props(styles.menuLink)}
            >
              {t("nav.schedule")}
            </a>
          </li>
          <li role="none">
            <a
              href="#pricing"
              role="menuitem"
              {...stylex.props(styles.menuLink)}
            >
              {t("nav.pricing")}
            </a>
          </li>
          <li role="none">
            <a
              href="#signup"
              role="menuitem"
              {...stylex.props(styles.menuLink)}
            >
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
