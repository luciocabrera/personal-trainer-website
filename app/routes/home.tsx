import type { ActionFunctionArgs } from 'react-router';

import { useEffect, useState } from 'react';
import { useActionData, useLocation } from 'react-router';

import { CenteredNotification } from '@/components/CenteredNotification';
import { Confetti } from '@/components/Confetti';
import { HeroSection } from '@/components/HeroSection';
import { OutdoorBenefitsSection } from '@/components/OutdoorBenefitsSection';
import { PricingSection } from '@/components/PricingSection';
import { ScheduleSection } from '@/components/ScheduleSection';
import { SignupSection } from '@/components/SignupSection';
import { TrainingsSection } from '@/components/TrainingsSection';
import { handleContactSubmission } from '@/services/contactService';
import {
  getLanguageFromRequest,
  getServerTranslation,
} from '@/utils/serverI18n.util';

// Define the action response type
export type ActionResponse = {
  error?: string;
  message?: string;
  success: boolean;
};

export async function action({
  request,
}: ActionFunctionArgs): Promise<ActionResponse> {
  // Get user's language preference
  const language = getLanguageFromRequest(request);
  const { t } = getServerTranslation(language);

  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Basic validation - ensure values are strings, not Files
  if (
    name === null ||
    email === null ||
    message === null ||
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return {
      error: t('form.validation.required'),
      success: false,
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      error: t('form.validation.invalidEmail'),
      success: false,
    };
  }

  try {
    // Prepare email translations
    const emailTranslations = {
      adminEmailLabel: t('email.adminEmailLabel'),
      adminFooter: t('email.adminFooter'),
      adminMessageLabel: t('email.adminMessageLabel'),
      adminNameLabel: t('email.adminNameLabel'),
      adminSubject: t('email.adminSubject'),
      adminTitle: t('email.adminTitle'),
      autoReplyClosing: t('email.autoReplyClosing'),
      autoReplyDisclaimer: t('email.autoReplyDisclaimer'),
      autoReplyGreeting: t('email.autoReplyGreeting'),
      autoReplySubject: t('email.autoReplySubject'),
      autoReplyTeam: t('email.autoReplyTeam'),
      autoReplyThankYou: t('email.autoReplyThankYou'),
      autoReplyTitle: t('email.autoReplyTitle'),
      autoReplyYourMessage: t('email.autoReplyYourMessage'),
    };

    // Process contact submission (database-first approach)
    await handleContactSubmission({
      data: {
        email,
        message,
        name,
      },
      emailTranslations,
    });

    return {
      message: t('form.success.message'),
      success: true,
    };
  } catch (error: unknown) {
    console.error('Form submission error:', error);

    // Since email is non-blocking, this error is only for database failures
    return {
      error: t('form.error.general'),
      success: false,
    };
  }
}

export default function Home() {
  const location = useLocation();
  const actionData = useActionData<ActionResponse>();

  const [isNotificationDismissed, setIsNotificationDismissed] = useState(false);

  // Smooth scroll to section based on hash
  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash.replace('#', '');
      // eslint-disable-next-line security/detect-possible-timing-attacks -- hash is from URL, not a secret
      if (hash !== '') {
        const element = document.querySelector(`#${hash}`);
        if (element !== null) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    // Small delay to ensure the page is rendered
    const timeoutId = setTimeout(scrollToSection, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [location.hash]);

  const handleCloseNotification = () => {
    setIsNotificationDismissed(true);
  };

  // Show notification if we have actionData and it hasn't been dismissed
  const shouldShowNotification =
    actionData !== undefined && !isNotificationDismissed;

  return (
    <>
      <HeroSection />
      <TrainingsSection />
      <OutdoorBenefitsSection />
      <ScheduleSection />
      <PricingSection />
      <SignupSection />

      {/* Centered Success/Error Notification */}
      {shouldShowNotification && (
        <CenteredNotification
          autoHideDelay={actionData.success ? 10_000 : 6000}
          isAutoHide
          isVisible={shouldShowNotification}
          message={
            actionData.success
              ? (actionData.message ?? '')
              : (actionData.error ?? '')
          }
          onClose={handleCloseNotification}
          type={actionData.success ? 'success' : 'error'}
        />
      )}

      {/* Confetti for successful submissions */}
      {shouldShowNotification && actionData.success ? (
        <Confetti isActive />
      ) : undefined}
    </>
  );
}
