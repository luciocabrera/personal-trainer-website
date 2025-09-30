import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>{t("hero.title")}</h1>
        <h2>{t("hero.subtitle")}</h2>
        <p>{t("hero.tagline")}</p>
        <p>{t("hero.description")}</p>
      </div>
      <div className="hero-image">
        {/* LCP Image: Optimized for Largest Contentful Paint using local image */}
        <img
          src="/images/strength-training.jpg"
          alt="Professional strength training session outdoors"
          fetchPriority="high"
          decoding="sync"
          width="800"
          height="600"
        />
      </div>
    </section>
  );
};
export default HeroSection;
