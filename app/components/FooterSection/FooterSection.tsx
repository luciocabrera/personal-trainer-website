import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { EmailIcon, InstagramIcon } from "@/components/Icons";
import { styles } from "./FooterSection.stylex";
import { BRAND } from "@/constants/brand";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer {...stylex.props(styles.footer)}>
      <div {...stylex.props(styles.footerContent)}>
        <div
          {...stylex.props(styles.footerContacts, styles.footerContactsMobile)}
        >
          <a
            href={`mailto:${BRAND.email}`}
            {...stylex.props(styles.footerLink, styles.footerLinkMobile)}
          >
            <EmailIcon width={18} height={18} />
            {BRAND.email}
          </a>
          <a
            href={BRAND.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            {...stylex.props(styles.footerLink, styles.footerLinkMobile)}
          >
            <InstagramIcon width={18} height={18} />
            {BRAND.instagram.handle}
          </a>
        </div>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
