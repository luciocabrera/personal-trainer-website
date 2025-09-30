import ImageWithSkeleton from "../ImageWithSkeleton";
import "./TrainingCard.css";
import type { TrainingCardProps } from "./TrainingCard.types";

const TrainingCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: TrainingCardProps) => {
  return (
    <div className="training">
      <div className="training-image">
        <ImageWithSkeleton
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={600}
          loading="eager"
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrainingCard;
