import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';

import { styles } from './PricingSectionSingleDuo.stylex';

const PricingSectionSingleDuo = () => {
  const { t } = useTranslation();

  return (
    <section
      id='pricing'
      {...stylex.props(styles.pricing)}
    >
      {/* <h2 {...stylex.props(styles.pricingTitle)}>{t("pricing.title")}</h2>
      <div id="pricing-image" {...stylex.props(styles.pricingImage)}>
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
      </div> */}
      <div {...stylex.props(styles.pricingGrid, styles.pricingGridMobile)}>
        <div {...stylex.props(styles.price)}>
          {/* <h3 {...stylex.props(styles.priceTitle)}>
            {t("pricing.single.title")}
          </h3> */}
          <p>{t('pricing.single.desc')}</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSectionSingleDuo;
