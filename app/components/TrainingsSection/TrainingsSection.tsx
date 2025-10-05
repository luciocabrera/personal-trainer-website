import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { TrainingCard } from "@/components/TrainingCard";
import { styles } from "./TrainingsSection.stylex";

const TrainingsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="trainings"
      {...stylex.props(styles.trainings, styles.trainingsMobile)}
    >
      <h2 {...stylex.props(styles.trainingsTitle)}>{t("trainings.title")}</h2>
      <div {...stylex.props(styles.trainingsGrid, styles.trainingsGridMobile)}>
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
