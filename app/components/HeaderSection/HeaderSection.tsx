import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const HeaderSection = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <div className="logo">Level Up</div>
        <div className="language-selector">
          <button onClick={() => changeLanguage("en")}>EN</button>
          <button onClick={() => changeLanguage("nl")}>NL</button>
          <button onClick={() => changeLanguage("es")}>ES</button>
        </div>
        <ul>
          <li>
            <a href="#hero">{t("nav.home")}</a>
          </li>
          <li>
            <a href="#trainings">{t("nav.trainings")}</a>
          </li>
          <li>
            <a href="#schedule">{t("nav.schedule")}</a>
          </li>
          <li>
            <a href="#pricing">{t("nav.pricing")}</a>
          </li>
          <li>
            <a href="#signup">{t("nav.contact")}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
