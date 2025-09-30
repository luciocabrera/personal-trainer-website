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
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          width="800"
          height="600"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
            backgroundColor: "#f0f0f0",
          }}
          onLoad={() => {}}
          onError={() => {}}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrainingCard;
