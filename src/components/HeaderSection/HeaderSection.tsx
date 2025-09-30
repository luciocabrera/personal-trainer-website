import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
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
            <Link to="/#hero">{t("nav.home")}</Link>
          </li>
          <li>
            <Link to="/#trainings">{t("nav.trainings")}</Link>
          </li>
          <li>
            <Link to="/#schedule">{t("nav.schedule")}</Link>
          </li>
          <li>
            <Link to="/#pricing">{t("nav.pricing")}</Link>
          </li>
          <li>
            <Link to="/#signup">{t("nav.contact")}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderSection;
