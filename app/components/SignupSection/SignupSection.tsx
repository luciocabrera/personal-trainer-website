import { useTranslation } from "react-i18next";
import { useActionData, Form, useNavigation } from "react-router";
import { useEffect, useRef } from "react";
import * as stylex from "@stylexjs/stylex";
import { SignupIcon, EmailIcon, InstagramIcon } from "@/components/Icons";
import { styles } from "./SignupSection.stylex";
import { BRAND } from "@/constants/brand";

const SignupSection = () => {
  const { t } = useTranslation();
  const actionData = useActionData() as
    | { success?: boolean; message?: string; error?: string }
    | undefined;
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);

  // Check if form is being submitted
  const isSubmitting = navigation.state === "submitting";

  // Handle successful form submission - clear form only
  useEffect(() => {
    if (actionData?.success && formRef.current) {
      // Clear the form
      formRef.current.reset();
    }
  }, [actionData?.success]);

  return (
    <section id="signup" {...stylex.props(styles.signup, styles.signupMobile)}>
      <h2 {...stylex.props(styles.signupTitle)}>{t("signup.title")}</h2>
      <div id="signup-image" {...stylex.props(styles.signupImage)}>
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

      <div {...stylex.props(styles.signupForm, styles.signupFormMobile)}>
        <p>{t("signup.signupNow")}</p>
        <p>{t("signup.nice")}</p>

        <Form
          method="post"
          ref={formRef}
          {...stylex.props(styles.signupFormElement)}
        >
          <input
            type="text"
            name="name"
            placeholder={t("form.name")}
            required
            {...stylex.props(styles.formInput)}
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder={t("form.email")}
            required
            {...stylex.props(styles.formInput)}
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder={t("form.message")}
            required
            rows={4}
            {...stylex.props(styles.formTextarea)}
            disabled={isSubmitting}
          ></textarea>
          <button
            type="submit"
            {...stylex.props(styles.formButton)}
            disabled={isSubmitting}
          >
            {isSubmitting ? t("form.submitting") : t("form.submit")}
          </button>
        </Form>

        {/* Contact Information */}
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
