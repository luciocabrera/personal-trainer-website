import { useTranslation } from 'react-i18next';
import * as stylex from '@stylexjs/stylex';

import { TrainingCard } from '@/components/TrainingCard';

import { PricingSection } from '../PricingSection';
import { PricingSectionSingleDuo } from '../PricingSectionSingleDuo';

import { styles } from './TrainingsSection.stylex';

const TrainingsSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id='trainings'
      {...stylex.props(styles.trainings, styles.trainingsMobile)}
    >
      <h2 {...stylex.props(styles.trainingsTitle)}>{t('trainings.title')}</h2>
      <div {...stylex.props(styles.trainingsGrid, styles.trainingsGridMobile)}>
        <TrainingCard
          description={t('trainings.level1.desc')}
          imageAlt={t('trainings.level1.imageAlt')}
          imageSrc='/images/single_training.jpeg'
          title={t('trainings.level1.title')}
        >
          {/* <PricingSectionSingleDuo /> */}
        </TrainingCard>
        <TrainingCard
          description={t('trainings.level2.desc')}
          imageAlt={t('trainings.level2.imageAlt')}
          imageSrc='/images/duo_training.jpeg'
          title={t('trainings.level2.title')}
        >
          {/* <PricingSectionSingleDuo /> */}
        </TrainingCard>
        <TrainingCard
          description={t('trainings.level3.desc')}
          imageAlt={t('trainings.level3.imageAlt')}
          imageSrc='/images/small_group_training.jpeg'
          title={t('trainings.level3.title')}
        >
          {/* <PricingSection /> */}
        </TrainingCard>
      </div>
    </section>
  );
};

export default TrainingsSection;
