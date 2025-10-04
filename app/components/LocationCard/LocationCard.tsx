import * as stylex from "@stylexjs/stylex";
import type { LocationCardProps } from "./LocationCard.types";
import { styles } from "./LocationCard.stylex";

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
    <div {...stylex.props(styles.locationCard)}>
      <h4 {...stylex.props(styles.locationCardTitle)}>{title}</h4>
      <div {...stylex.props(styles.locationDetails)}>
        {isComingSoon && (
          <div
            {...stylex.props(
              styles.locationDetailsDiv,
              styles.locationDetailsDivMobile,
              styles.trainingTime,
              styles.trainingTimeMobile,
              styles.comingSoon,
              styles.comingSoonMobile
            )}
          >
            {comingSoonText}
          </div>
        )}
        <div
          {...stylex.props(
            styles.locationDetailsDiv,
            styles.locationDetailsDivMobile,
            styles.trainingTime,
            styles.trainingTimeMobile
          )}
        >
          {time}
        </div>
        <div
          {...stylex.props(
            styles.locationDetailsDiv,
            styles.locationDetailsDivMobile,
            styles.trainingType,
            styles.trainingTypeMobile
          )}
        >
          {type}
        </div>
        <div
          {...stylex.props(
            styles.locationDetailsDiv,
            styles.locationDetailsDivMobile,
            styles.trainingCapacity
          )}
        >
          {capacity}
        </div>
        <div
          {...stylex.props(
            styles.locationDetailsDiv,
            styles.locationDetailsDivMobile,
            styles.trainingLocation
          )}
        >
          {location}
        </div>
        {dates && (
          <div
            {...stylex.props(styles.trainingDates, styles.trainingDatesMobile)}
          >
            {dates}
          </div>
        )}
      </div>
      <div {...stylex.props(styles.mapContainer)}>
        <iframe
          src={mapSrc}
          width="100%"
          height="200"
          {...stylex.props(styles.mapIframe)}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default LocationCard;
