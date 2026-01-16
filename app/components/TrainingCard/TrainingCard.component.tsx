import * as stylex from '@stylexjs/stylex';

import type { TrainingCardProps } from './TrainingCard.types';

import { styles } from './TrainingCard.stylex';

const TrainingCard = ({
  children,
  description,
  imageAlt,
  imageSrc,
  title,
}: TrainingCardProps) => {
  return (
    <div
      {...stylex.props(
        styles.training,
        styles.trainingMobile,
        styles.trainingSmallMobile
      )}
    >
      <div
        {...stylex.props(
          styles.trainingImage,
          styles.trainingImageMobile,
          styles.trainingImageSmallMobile
        )}
      >
        <img
          alt={imageAlt}
          decoding='async'
          height='600'
          loading='lazy'
          src={imageSrc}
          width='800'
          {...stylex.props(
            styles.trainingImageImg,
            styles.trainingImageImgMobile,
            styles.trainingImageImgSmallMobile
          )}
        />
      </div>
      <div {...stylex.props(styles.trainingBody)}>
        <h3
          {...stylex.props(
            styles.trainingTitle,
            styles.trainingTitleMobile,
            styles.trainingTitleSmallMobile
          )}
        >
          {title}
        </h3>
        <p
          {...stylex.props(
            styles.trainingDescription,
            styles.trainingDescriptionMobile,
            styles.trainingDescriptionSmallMobile
          )}
        >
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default TrainingCard;
