import { useTranslation } from "react-i18next";
import { PricingIcon } from "../Icons";

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <section id="pricing" className="pricing">
      <h2>{t("pricing.title")}</h2>
      <div className="pricing-image">
        {/* Custom SVG: Membership/joining icon with fitness elements */}
        <div className="pricing-icon-container">
          <PricingIcon />
        </div>
      </div>
      <div className="pricing-grid">
        <div className="price">
          <h3>{t("pricing.strip10.title")}</h3>
          <p>{t("pricing.strip10.desc")}</p>
        </div>
        <div className="price">
          <h3>{t("pricing.strip20.title")}</h3>
          <p>{t("pricing.strip20.desc")}</p>
        </div>
        <div className="price">
          <h3>{t("pricing.single.title")}</h3>
          <p>{t("pricing.single.desc")}</p>
        </div>
        <div className="price">
          <h3>{t("pricing.unlimited.title")}</h3>
          <p>{t("pricing.unlimited.desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
