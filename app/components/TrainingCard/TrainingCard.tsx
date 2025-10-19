import * as stylex from "@stylexjs/stylex";
import type { TrainingCardProps } from "./TrainingCard.types";
import { styles } from "./TrainingCard.stylex";

const TrainingCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
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
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          {...stylex.props(
            styles.trainingImageImg,
            styles.trainingImageImgMobile,
            styles.trainingImageImgSmallMobile
          )}
          onLoad={() => {}}
          onError={() => {}}
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
    </div>
  );
};

export default TrainingCard;
