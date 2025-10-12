import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./HeroSection.stylex";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" {...stylex.props(styles.hero, styles.heroMobile)}>
      <div {...stylex.props(styles.heroContent)}>
        <h1 {...stylex.props(styles.heroTitle, styles.heroTitleMobile)}>
          {t("hero.title")}
        </h1>
        <h2 {...stylex.props(styles.heroSubtitle, styles.heroSubtitleMobile)}>
          {t("hero.subtitle")}
        </h2>
        <p {...stylex.props(styles.heroParagraph)}>{t("hero.tagline")}</p>
        <p {...stylex.props(styles.heroParagraph)}>{t("hero.description")}</p>
      </div>
      <div {...stylex.props(styles.heroImage)}>
        {/* LCP Image: Optimized for Largest Contentful Paint using local image */}
        <img
          src="/images/hero.jpeg"
          alt="Professional strength training session outdoors"
          fetchPriority="high"
          decoding="sync"
          width="800"
          height="600"
          {...stylex.props(styles.heroImageImg, styles.heroImageImgMobile)}
        />
      </div>
    </section>
  );
};
export default HeroSection;
