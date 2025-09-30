import type { LocationCardProps } from "./LocationCard.types";

const LocationCard = ({
  title,
  time,
  type,
  capacity,
  location,
  mapSrc,
  dates,
  isComingSoon = false,
  comingSoonText = "*COMING SOON*",
}: LocationCardProps) => {
  return (
    <div className="location-card">
      <h4>{title}</h4>
      <div className="location-details">
        {isComingSoon && (
          <div className="training-time coming-soon">{comingSoonText}</div>
        )}
        <div className="training-time">{time}</div>
        <div className="training-type">{type}</div>
        <div className="training-capacity">{capacity}</div>
        <div className="training-location">{location}</div>
        {dates && <div className="training-dates">{dates}</div>}
      </div>
      <div className="map-container">
        <iframe
          src={mapSrc}
          width="100%"
          height="200"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LocationCard;
