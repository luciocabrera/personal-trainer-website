import "./TrainingCard.css";
import type { TrainingCardProps } from "./TrainingCard.types";

const TrainingCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: TrainingCardProps) => {
  // Debug: Log the image source
  console.log("TrainingCard imageSrc:", imageSrc);
  
  return (
    <div className="training">
      <div className="training-image">
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="eager"
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "8px",
            display: "block",
            backgroundColor: "#f0f0f0",
          }}
          onLoad={() => console.log("Image loaded:", imageSrc)}
          onError={() => console.error("Image failed to load:", imageSrc)}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TrainingCard;
