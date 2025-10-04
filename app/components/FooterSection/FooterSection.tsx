import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { EmailIcon, InstagramIcon } from "../Icons";
import { styles } from "./FooterSection.stylex";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.footerContent)}>
        <div
          {...stylex.props(styles.footerContacts, styles.footerContactsMobile)}
        >
          <a
            href="mailto:info@leveluptraining.nl"
            {...stylex.props(styles.footerLink, styles.footerLinkMobile)}
          >
            <EmailIcon width={18} height={18} />
            info@leveluptraining.nl
          </a>
          <a
            href="https://instagram.com/leveluptraining"
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.footerLink, styles.footerLinkMobile)}
          >
            <InstagramIcon width={18} height={18} />
            @leveluptraining
          </a>
        </div>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
