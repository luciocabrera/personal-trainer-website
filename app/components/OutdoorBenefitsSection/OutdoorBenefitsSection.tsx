import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./OutdoorBenefitsSection.stylex.tsx";

const OutdoorBenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: "🌿",
      title: t("outdoorBenefits.benefits.nature.title"),
      description: t("outdoorBenefits.benefits.nature.description"),
    },
    {
      icon: "💪",
      title: t("outdoorBenefits.benefits.vitamin.title"),
      description: t("outdoorBenefits.benefits.vitamin.description"),
    },
    {
      icon: "🧘",
      title: t("outdoorBenefits.benefits.mental.title"),
      description: t("outdoorBenefits.benefits.mental.description"),
    },
    {
      icon: "🔥",
      title: t("outdoorBenefits.benefits.variety.title"),
      description: t("outdoorBenefits.benefits.variety.description"),
    },
  ];

  return (
    <section id="outdoor-benefits" {...stylex.props(styles.section)}>
      <div {...stylex.props(styles.container)}>
        <h2 {...stylex.props(styles.title)}>{t("outdoorBenefits.title")}</h2>
        <p {...stylex.props(styles.subtitle)}>
          {t("outdoorBenefits.subtitle")}
        </p>

        <div {...stylex.props(styles.content)}>
          <div {...stylex.props(styles.imageContainer)}>
            <img
              src="/images/outdoors.jpeg"
              alt={t("outdoorBenefits.imageAlt")}
              width="600"
              height="400"
              loading="lazy"
              {...stylex.props(styles.image)}
            />
          </div>

          <div {...stylex.props(styles.benefitsGrid)}>
            {benefits.map((benefit, index) => (
              <div key={index} {...stylex.props(styles.benefitCard)}>
                <div {...stylex.props(styles.benefitIcon)}>{benefit.icon}</div>
                <h3 {...stylex.props(styles.benefitTitle)}>{benefit.title}</h3>
                <p {...stylex.props(styles.benefitDescription)}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutdoorBenefitsSection;
