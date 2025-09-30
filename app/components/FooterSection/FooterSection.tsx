import { useTranslation } from "react-i18next";
import { EmailIcon, InstagramIcon } from "../Icons";

const FooterSection = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-contacts">
          <a href="mailto:info@leveluptraining.nl" className="footer-link">
            <EmailIcon width={18} height={18} />
            info@leveluptraining.nl
          </a>
          <a
            href="https://instagram.com/leveluptraining"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
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
