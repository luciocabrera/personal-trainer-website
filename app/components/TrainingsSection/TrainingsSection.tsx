import { useTranslation } from "react-i18next";
import { TrainingCard } from "../TrainingCard";

const TrainingsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="trainings" className="trainings">
      <h2>{t("trainings.title")}</h2>
      <div className="trainings-grid">
        <TrainingCard
          title={t("trainings.level1.title")}
          description={t("trainings.level1.desc")}
          imageSrc="/images/strength-training.jpg"
          imageAlt={t("trainings.level1.imageAlt")}
        />
        <TrainingCard
          title={t("trainings.level2.title")}
          description={t("trainings.level2.desc")}
          imageSrc="/images/running-training.jpg"
          imageAlt={t("trainings.level2.imageAlt")}
        />
        <TrainingCard
          title={t("trainings.level3.title")}
          description={t("trainings.level3.desc")}
          imageSrc="/images/parent-child-training.jpg"
          imageAlt={t("trainings.level3.imageAlt")}
        />
      </div>
    </section>
  );
};

export default TrainingsSection;
