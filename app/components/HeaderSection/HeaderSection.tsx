import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const HeaderSection = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav role="navigation" aria-label="Main navigation">
        <div className="logo">Level Up</div>
        <div
          className="language-selector"
          role="group"
          aria-label="Language selection"
        >
          <button
            onClick={() => changeLanguage("en")}
            aria-label="Switch to English"
            type="button"
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage("nl")}
            aria-label="Switch to Dutch"
            type="button"
          >
            NL
          </button>
          <button
            onClick={() => changeLanguage("es")}
            aria-label="Switch to Spanish"
            type="button"
          >
            ES
          </button>
        </div>
        <ul role="menubar">
          <li role="none">
            <a href="#hero" role="menuitem">
              {t("nav.home")}
            </a>
          </li>
          <li role="none">
            <a href="#trainings" role="menuitem">
              {t("nav.trainings")}
            </a>
          </li>
          <li role="none">
            <a href="#schedule" role="menuitem">
              {t("nav.schedule")}
            </a>
          </li>
          <li role="none">
            <a href="#pricing" role="menuitem">
              {t("nav.pricing")}
            </a>
          </li>
          <li role="none">
            <a href="#signup" role="menuitem">
              {t("nav.contact")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
