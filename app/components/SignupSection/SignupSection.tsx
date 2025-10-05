import { useTranslation } from "react-i18next";
import * as stylex from "@stylexjs/stylex";
import { SignupIcon, EmailIcon, InstagramIcon } from "@/components/Icons";
import { styles } from "./SignupSection.stylex";
import { BRAND } from "@/constants/brand";

const SignupSection = () => {
  const { t } = useTranslation();

  return (
    <section id="signup" {...stylex.props(styles.signup, styles.signupMobile)}>
      <h2 {...stylex.props(styles.signupTitle)}>{t("signup.title")}</h2>
      <div {...stylex.props(styles.signupImage)}>
        {/* Clean icon approach: Contact/signup representation */}
        <div
          {...stylex.props(
            styles.signupIconContainer,
            styles.signupIconContainerMobile
          )}
        >
          <div
            {...stylex.props(styles.signupIconSvg, styles.signupIconSvgMobile)}
          >
            <SignupIcon />
          </div>
        </div>
      </div>

      <div {...stylex.props(styles.signupForm)}>
        <p>{t("signup.signupNow")}</p>
        <p>{t("signup.nice")}</p>
        <form {...stylex.props(styles.signupFormElement)}>
          <input
            type="text"
            placeholder={t("form.name")}
            {...stylex.props(styles.formInput)}
          />
          <input
            type="email"
            placeholder={t("form.email")}
            {...stylex.props(styles.formInput)}
          />
          <textarea
            placeholder={t("form.message")}
            {...stylex.props(styles.formTextarea)}
          ></textarea>
          <button type="submit" {...stylex.props(styles.formButton)}>
            {t("form.submit")}
          </button>
        </form>

        <div {...stylex.props(styles.contactSection)}>
          <p {...stylex.props(styles.contactTitle)}>{t("signup.contactUs")}</p>
          <div
            {...stylex.props(styles.contactLinks, styles.contactLinksMobile)}
          >
            <a
              href={`mailto:${BRAND.email}`}
              {...stylex.props(
                styles.contactLink,
                styles.emailLink,
                styles.contactLinkMobile
              )}
            >
              <div {...stylex.props(styles.contactLinkIcon)}>
                <EmailIcon />
              </div>
              <span>{t("signup.email")}</span>
            </a>

            <a
              href={BRAND.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(
                styles.contactLink,
                styles.instagramLink,
                styles.contactLinkMobile
              )}
            >
              <div {...stylex.props(styles.contactLinkIcon)}>
                <InstagramIcon />
              </div>
              <span>{t("signup.instagram")}</span>
            </a>
          </div>
          <p {...stylex.props(styles.followText)}>{t("signup.follow")}</p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
