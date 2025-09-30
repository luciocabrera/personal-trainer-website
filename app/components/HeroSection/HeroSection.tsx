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
        {/* Suggested: Group of people doing outdoor fitness training in a park, sunrise/sunset lighting, energetic poses */}
        <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Outdoor fitness training group"
        />
      </div>
    </section>
  );
};
export default HeroSection;
