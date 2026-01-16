import * as stylex from '@stylexjs/stylex';
import { useTranslation } from 'react-i18next';

import { styles } from './OutdoorBenefitsSection.stylex';

const OutdoorBenefitsSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      description: t('outdoorBenefits.benefits.nature.description'),
      icon: '🌿',
      id: 'nature',
      title: t('outdoorBenefits.benefits.nature.title'),
    },
    {
      description: t('outdoorBenefits.benefits.vitamin.description'),
      icon: '💪',
      id: 'vitamin',
      title: t('outdoorBenefits.benefits.vitamin.title'),
    },
    {
      description: t('outdoorBenefits.benefits.mental.description'),
      icon: '🧘',
      id: 'mental',
      title: t('outdoorBenefits.benefits.mental.title'),
    },
    {
      description: t('outdoorBenefits.benefits.variety.description'),
      icon: '🔥',
      id: 'variety',
      title: t('outdoorBenefits.benefits.variety.title'),
    },
  ];

  return (
    <section
      id='outdoor-benefits'
      {...stylex.props(styles.section)}
    >
      <div {...stylex.props(styles.container)}>
        <h2 {...stylex.props(styles.title)}>{t('outdoorBenefits.title')}</h2>
        <p {...stylex.props(styles.subtitle)}>
          {t('outdoorBenefits.subtitle')}
        </p>

        <div {...stylex.props(styles.content)}>
          <div {...stylex.props(styles.imageContainer)}>
            <img
              alt={t('outdoorBenefits.imageAlt')}
              height='400'
              loading='lazy'
              src='/images/outdoors.jpeg'
              width='600'
              {...stylex.props(styles.image)}
            />
          </div>

          <div {...stylex.props(styles.benefitsGrid)}>
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                {...stylex.props(styles.benefitCard)}
              >
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
