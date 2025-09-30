import { useTranslation } from "react-i18next";
import { SignupIcon, EmailIcon, InstagramIcon } from "../Icons";

const SignupSection = () => {
  const { t } = useTranslation();

  return (
    <section id="signup" className="signup">
      <h2>{t("signup.title")}</h2>
      <div className="signup-image">
        {/* Clean icon approach: Contact/signup representation */}
        <div className="signup-icon-container">
          <SignupIcon />
        </div>
      </div>

      <div className="signup-form">
        <p>{t("signup.signupNow")}</p>
        <p>{t("signup.nice")}</p>
        <form>
          <input type="text" placeholder={t("form.name")} />
          <input type="email" placeholder={t("form.email")} />
          <textarea placeholder={t("form.message")}></textarea>
          <button type="submit">{t("form.submit")}</button>
        </form>

        <div className="contact-section">
          <p className="contact-title">{t("signup.contactUs")}</p>
          <div className="contact-links">
            <a
              href="mailto:info@leveluptraining.nl"
              className="contact-link email-link"
            >
              <EmailIcon />
              <span>{t("signup.email")}</span>
            </a>

            <a
              href="https://instagram.com/leveluptraining"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link instagram-link"
            >
              <InstagramIcon />
              <span>{t("signup.instagram")}</span>
            </a>
          </div>
          <p className="follow-text">{t("signup.follow")}</p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
