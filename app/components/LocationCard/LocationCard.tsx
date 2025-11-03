import * as stylex from '@stylexjs/stylex';

import { styles } from './LocationCard.stylex';
import type { LocationCardProps } from './LocationCard.types';

const LocationCard = ({
  capacity,
  comingSoonText = '*COMING SOON*',
  dates,
  isComingSoon = false,
  location,
  mapSrc,
  time,
  title,
  type,
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
          aria-label={`Map for ${title} location`}
          height='200'
          src={mapSrc}
          title={`Interactive map showing location of ${title} training sessions at ${location}`}
          width='100%'
          {...stylex.props(styles.mapIframe)}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
          tabIndex={0}
        />
      </div>
    </div>
  );
};

export default LocationCard;
