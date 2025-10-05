import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { LocationCard } from "@/components/LocationCard";
import { styles } from "./ScheduleSection.stylex";

const ScheduleSection = () => {
  const { t } = useTranslation();

  return (
    <section
      id="schedule"
      {...stylex.props(styles.schedule, styles.scheduleMobile)}
    >
      <h2 {...stylex.props(styles.scheduleTitle)}>{t("schedule.title")}</h2>

      <div {...stylex.props(styles.locationsSection)}>
        <h3 {...stylex.props(styles.locationsSectionTitle)}>
          {t("schedule.locationsTitle")}
        </h3>
        <div
          {...stylex.props(styles.locationsGrid, styles.locationsGridMobile)}
        >
          <LocationCard
            title={t("schedule.locations.peacePalace.title")}
            time={t("schedule.locations.peacePalace.time")}
            type={t("schedule.locations.peacePalace.type")}
            capacity={t("schedule.locations.peacePalace.capacity")}
            location={t("schedule.locations.peacePalace.location")}
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.8934567890!2d4.287647315708086!3d52.10516097972684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6a7e1b02a59%3A0x5f1b6a7e1b02a59!2sPeace%20Palace%2C%20Carnegieplein%202%2C%202517%20KJ%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456789"
          />

          <LocationCard
            title={t("schedule.locations.scheveningse.title")}
            time={t("schedule.locations.scheveningse.time")}
            type={t("schedule.locations.scheveningse.type")}
            capacity={t("schedule.locations.scheveningse.capacity")}
            location={t("schedule.locations.scheveningse.location")}
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1677.3326386195881!2d4.335391910669067!3d52.0488124708928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b6f4c5d05b47%3A0xc9bfa2760dec51c3!2s2282%20JR%20Rijswijk!5e1!3m2!1sen!2snl!4v1759050133365!5m2!1sen!2snl"
          />

          <LocationCard
            title={t("schedule.locations.indischMonument.title")}
            time={t("schedule.locations.indischMonument.time")}
            type={t("schedule.locations.indischMonument.type")}
            capacity={t("schedule.locations.indischMonument.capacity")}
            location={t("schedule.locations.indischMonument.location")}
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2447.123!2d4.301234!3d52.098765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b8d5e6f7a8b9%3A0x1a2b3c4d5e6f7a8b!2sIndisch%20Monument%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456791"
            dates={t("schedule.locations.indischMonument.dates")}
          />

          <LocationCard
            title={t("schedule.locations.verademing.title")}
            time={t("schedule.locations.verademing.time")}
            type={t("schedule.locations.verademing.type")}
            capacity={t("schedule.locations.verademing.capacity")}
            location={t("schedule.locations.verademing.location")}
            mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.456!2d4.283456!3d52.087654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b9e1f2a3b4c5%3A0x6d7e8f9a0b1c2d3e!2sDe%20Verademing%2C%20The%20Hague%2C%20Netherlands!5e0!3m2!1sen!2snl!4v1695123456792"
            isComingSoon={true}
            comingSoonText={t("schedule.comingSoon")}
          />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
