import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { PricingIcon } from "@/components/Icons";
import { styles } from "./PricingSection.stylex";

const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="pricing"
      {...stylex.props(styles.pricing, styles.pricingMobile)}
    >
      <h2 {...stylex.props(styles.pricingTitle)}>{t("pricing.title")}</h2>
      <div {...stylex.props(styles.pricingImage)}>
        {/* Custom SVG: Membership/joining icon with fitness elements */}
        <div
          {...stylex.props(
            styles.pricingIconContainer,
            styles.pricingIconContainerMobile
          )}
        >
          <div
            {...stylex.props(
              styles.pricingIconSvg,
              styles.pricingIconSvgMobile
            )}
          >
            <PricingIcon />
          </div>
        </div>
      </div>
      <div {...stylex.props(styles.pricingGrid, styles.pricingGridMobile)}>
        <div {...stylex.props(styles.price)}>
          <h3 {...stylex.props(styles.priceTitle)}>
            {t("pricing.strip10.title")}
          </h3>
          <p>{t("pricing.strip10.desc")}</p>
        </div>
        <div {...stylex.props(styles.price)}>
          <h3 {...stylex.props(styles.priceTitle)}>
            {t("pricing.strip20.title")}
          </h3>
          <p>{t("pricing.strip20.desc")}</p>
        </div>
        <div {...stylex.props(styles.price)}>
          <h3 {...stylex.props(styles.priceTitle)}>
            {t("pricing.single.title")}
          </h3>
          <p>{t("pricing.single.desc")}</p>
        </div>
        <div {...stylex.props(styles.price)}>
          <h3 {...stylex.props(styles.priceTitle)}>
            {t("pricing.unlimited.title")}
          </h3>
          <p>{t("pricing.unlimited.desc")}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
