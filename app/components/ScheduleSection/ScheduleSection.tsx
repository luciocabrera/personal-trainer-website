import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./ScheduleSection.stylex";

const ScheduleSection = () => {
  const { t } = useTranslation();

  const sessions = [
    {
      day: t("schedule.sessions.tuesday.day"),
      time: t("schedule.sessions.tuesday.time"),
      description: t("schedule.sessions.tuesday.description"),
    },
    {
      day: t("schedule.sessions.wednesdayMorning.day"),
      time: t("schedule.sessions.wednesdayMorning.time"),
      description: t("schedule.sessions.wednesdayMorning.description"),
    },
    {
      day: t("schedule.sessions.wednesdayLate.day"),
      time: t("schedule.sessions.wednesdayLate.time"),
      description: t("schedule.sessions.wednesdayLate.description"),
    },
    {
      day: t("schedule.sessions.friday.day"),
      time: t("schedule.sessions.friday.time"),
      description: t("schedule.sessions.friday.description"),
    },
  ];

  return (
    <>
      {/* Fixed schedule section */}
      <div {...stylex.props(styles.singleLocationCard)}>
        <h3 {...stylex.props(styles.locationsSectionTitle)}>
          {t("schedule.subtitle")}
        </h3>

        <h4 {...stylex.props(styles.locationTitle)}>
          {t("schedule.location")}
        </h4>
        <p {...stylex.props(styles.locationNote)}>
          {t("schedule.locationNote")}
        </p>

        <div {...stylex.props(styles.sessionsGrid)}>
          {sessions.map((session, index) => (
            <div key={index} {...stylex.props(styles.sessionCard)}>
              <div {...stylex.props(styles.sessionDay)}>{session.day}</div>
              <div {...stylex.props(styles.sessionTime)}>{session.time}</div>
              <div {...stylex.props(styles.sessionDescription)}>
                {session.description}
              </div>
            </div>
          ))}
        </div>

        <div {...stylex.props(styles.mapContainer)}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d153.2968825497753!2d4.360616655041655!3d52.06607342909638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e1!4m3!3m2!1d52.066126!2d4.3606169999999995!4m5!1s0x47c5b64cfb99935f%3A0x66ef456f0ce88342!2sOFM.%20Voorburg%20Mensperience%20Store%2C%20Herenstraat%2C%20Voorburg%2C%20Netherlands!3m2!1d52.0660039!2d4.360985299999999!5e0!3m2!1sen!2sus!4v1760278146653!5m2!1sen!2sus"
            width="100%"
            height="300"
            title="Interactive map showing Voorburg Station location"
            aria-label="Map for Voorburg Station location"
            {...stylex.props(styles.mapIframe)}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            tabIndex={0}
          />
        </div>
      </div>
      <div {...stylex.props(styles.singleLocationCard)}>
        <h3 {...stylex.props(styles.onDemandTitle)}>
          {t("schedule.onDemandTitle")}
        </h3>
        <p {...stylex.props(styles.onDemandDesc)}>
          {t("schedule.onDemandDesc")}
        </p>
        <p {...stylex.props(styles.contactInfo)}>{t("schedule.contactInfo")}</p>
      </div>
    </>
  );
};

export default ScheduleSection;
