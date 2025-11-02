import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { TrainingCard } from "@/components/TrainingCard";
import { styles } from "./TrainingsSection.stylex";
import { PricingSection } from "../PricingSection";
import { PricingSectionSingleDuo } from "../PricingSectionSingleDuo";

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
          imageSrc="/images/single_training.jpeg"
          imageAlt={t("trainings.level1.imageAlt")}
        >
          {/* <PricingSectionSingleDuo /> */}
        </TrainingCard>
        <TrainingCard
          title={t("trainings.level2.title")}
          description={t("trainings.level2.desc")}
          imageSrc="/images/duo_training.jpeg"
          imageAlt={t("trainings.level2.imageAlt")}
        >
          {/* <PricingSectionSingleDuo /> */}
        </TrainingCard>
        <TrainingCard
          title={t("trainings.level3.title")}
          description={t("trainings.level3.desc")}
          imageSrc="/images/small_group_training.jpeg"
          imageAlt={t("trainings.level3.imageAlt")}
        >
          {/* <PricingSection /> */}
        </TrainingCard>
      </div>
    </section>
  );
};

export default TrainingsSection;
