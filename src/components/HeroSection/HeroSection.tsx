import { useTranslation } from "react-i18next";
import strengthTrainingImg from "../../assets/strength-training.jpg";

import ImageWithSkeleton from "../ImageWithSkeleton";
// Edge-compatible fallback URLs
const getImageSrc = (importedImg: string, fallbackPath: string) => {
  // Check if the imported image is a valid URL
  if (typeof importedImg === "string" && importedImg.length > 0) {
    return importedImg;
  }
  // Fallback to public folder for Edge compatibility
  return fallbackPath;
};

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
        {/* <img
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Outdoor fitness training group"
        /> */}
        <ImageWithSkeleton
          src={getImageSrc(
            strengthTrainingImg,
            "/images/strength-training.jpg"
          )}
          alt={"imageAlt"}
          width={800}
          height={600}
          loading="eager"
        />
      </div>
    </section>
  );
};
export default HeroSection;
