import * as stylex from '@stylexjs/stylex';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, useActionData, useNavigation } from 'react-router';

import type { ActionResponse } from '@/routes/home';

import { EmailIcon, InstagramIcon, SignupIcon } from '@/components/Icons';
import { BRAND } from '@/constants/brand';

import { styles } from './SignupSection.stylex';

const SignupSection = () => {
  const { t } = useTranslation();
  const actionData = useActionData<ActionResponse>();
  const navigation = useNavigation();
  const formRef = useRef<HTMLFormElement>(null);

  // Check if form is being submitted
  const isSubmitting = navigation.state === 'submitting';

  // Handle successful form submission - clear form only
  useEffect(() => {
    if (actionData?.success === true && formRef.current !== null) {
      // Clear the form
      formRef.current.reset();
    }
  }, [actionData?.success]);

  return (
    <section
      id='signup'
      {...stylex.props(styles.signup, styles.signupMobile)}
    >
      <h2 {...stylex.props(styles.signupTitle)}>{t('signup.title')}</h2>
      <div
        id='signup-image'
        {...stylex.props(styles.signupImage)}
      >
        {/* Clean icon approach: Contact/signup representation */}
        <div
          {...stylex.props(
            styles.signupIconContainer,
            styles.signupIconContainerMobile,
          )}
        >
          <div
            {...stylex.props(styles.signupIconSvg, styles.signupIconSvgMobile)}
          >
            <SignupIcon />
          </div>
        </div>
      </div>

      <div
        suppressHydrationWarning
        {...stylex.props(styles.signupForm, styles.signupFormMobile)}
      >
        <p>{t('signup.signupNow')}</p>
        <p>{t('signup.nice')}</p>

        <Form
          method='post'
          ref={formRef}
          {...stylex.props(styles.signupFormElement)}
        >
          <input
            disabled={isSubmitting}
            name='name'
            placeholder={t('form.name')}
            required
            suppressHydrationWarning
            translate='no'
            type='text'
            {...stylex.props(styles.formInput)}
          />
          <input
            disabled={isSubmitting}
            name='email'
            placeholder={t('form.email')}
            required
            suppressHydrationWarning
            translate='no'
            type='email'
            {...stylex.props(styles.formInput)}
          />
          <textarea
            disabled={isSubmitting}
            name='message'
            placeholder={t('form.message')}
            required
            rows={4}
            translate='no'
            {...stylex.props(styles.formTextarea)}
          />
          <button
            disabled={isSubmitting}
            translate='no'
            type='submit'
            {...stylex.props(styles.formButton)}
          >
            {isSubmitting ? t('form.submitting') : t('form.submit')}
          </button>
        </Form>

        {/* Contact Information */}
        <div {...stylex.props(styles.contactSection)}>
          <p {...stylex.props(styles.contactTitle)}>{t('signup.contactUs')}</p>
          <div
            {...stylex.props(styles.contactLinks, styles.contactLinksMobile)}
          >
            <a
              href={`mailto:${BRAND.email}`}
              {...stylex.props(
                styles.contactLink,
                styles.emailLink,
                styles.contactLinkMobile,
              )}
            >
              <div {...stylex.props(styles.contactLinkIcon)}>
                <EmailIcon />
              </div>
              <span>{t('signup.email')}</span>
            </a>

            <a
              href={BRAND.instagram.url}
              rel='noopener noreferrer'
              target='_blank'
              {...stylex.props(
                styles.contactLink,
                styles.instagramLink,
                styles.contactLinkMobile,
              )}
            >
              <div {...stylex.props(styles.contactLinkIcon)}>
                <InstagramIcon />
              </div>
              <span>{t('signup.instagram')}</span>
            </a>
          </div>
          <p {...stylex.props(styles.followText)}>{t('signup.follow')}</p>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
