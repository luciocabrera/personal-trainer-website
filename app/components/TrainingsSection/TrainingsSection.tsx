import { useTranslation } from "react-i18next";
import { TrainingCard } from "../TrainingCard";
import strengthTrainingImg from "../../assets/strength-training.jpg";
import runningTrainingImg from "../../assets/running-training.jpg";
import parentChildTrainingImg from "../../assets/parent-child-training.jpg";

const TrainingsSection = () => {
  const { t } = useTranslation();

  // Debug: Log the imported image URLs
  console.log("Imported image URLs:", {
    strengthTrainingImg,
    runningTrainingImg,
    parentChildTrainingImg,
  });

  // Edge-compatible fallback URLs
  const getImageSrc = (importedImg: string, fallbackPath: string) => {
    // Check if the imported image is a valid URL
    if (typeof importedImg === "string" && importedImg.length > 0) {
      return importedImg;
    }
    // Fallback to public folder for Edge compatibility
    return fallbackPath;
  };

  return (
    <section id="trainings" className="trainings">
      <h2>{t("trainings.title")}</h2>
      <div className="trainings-grid">
        <TrainingCard
          title={t("trainings.level1.title")}
          description={t("trainings.level1.desc")}
          imageSrc={getImageSrc(
            strengthTrainingImg,
            "/images/strength-training.jpg"
          )}
          imageAlt={t("trainings.level1.imageAlt")}
        />
        <TrainingCard
          title={t("trainings.level2.title")}
          description={t("trainings.level2.desc")}
          imageSrc={getImageSrc(
            runningTrainingImg,
            "/images/running-training.jpg"
          )}
          imageAlt={t("trainings.level2.imageAlt")}
        />
        <TrainingCard
          title={t("trainings.level3.title")}
          description={t("trainings.level3.desc")}
          imageSrc={getImageSrc(
            parentChildTrainingImg,
            "/images/parent-child-training.jpg"
          )}
          imageAlt={t("trainings.level3.imageAlt")}
        />
      </div>
    </section>
  );
};

export default TrainingsSection;
