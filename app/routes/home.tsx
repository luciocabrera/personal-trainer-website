import { useEffect, useState } from 'react';
import type { ActionFunctionArgs } from 'react-router';
import { useActionData, useLocation } from 'react-router';

import CenteredNotification from '@/components/CenteredNotification/CenteredNotification';
import Confetti from '@/components/Confetti/Confetti';
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
} from '@/utils/serverI18n';

// Define the action response type
export interface ActionResponse {
  error?: string;
  message?: string;
  success: boolean;
}

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
    await handleContactSubmission(
      {
        email: email.toString(),
        message: message.toString(),
        name: name.toString(),
      },
      emailTranslations
    );

    // Log successful submission
    console.log('Contact form submission successful:', {
      email: email.toString(),
      name: name.toString(),
      timestamp: new Date().toISOString(),
    });

    return {
      message: t('form.success.message'),
      success: true,
    };
  } catch (error) {
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

  const [notificationDismissed, setNotificationDismissed] = useState(false);

  // Smooth scroll to section based on hash
  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash.replace('#', '');
      if (hash !== '') {
        const element = document.getElementById(hash);
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

    return () => clearTimeout(timeoutId);
  }, [location.hash]);

  const handleCloseNotification = () => {
    setNotificationDismissed(true);
  };

  // Show notification if we have actionData and it hasn't been dismissed
  const showNotification = actionData !== undefined && !notificationDismissed;

  return (
    <>
      <HeroSection />
      <TrainingsSection />
      <OutdoorBenefitsSection />
      <ScheduleSection />
      <PricingSection />
      <SignupSection />

      {/* Centered Success/Error Notification */}
      {showNotification === true && (
        <CenteredNotification
          autoHide
          autoHideDelay={actionData.success === true ? 10000 : 6000}
          isVisible={showNotification}
          message={
            actionData.success === true
              ? (actionData.message ?? '')
              : (actionData.error ?? '')
          }
          type={actionData.success === true ? 'success' : 'error'}
          onClose={handleCloseNotification}
        />
      )}

      {/* Confetti for successful submissions */}
      {showNotification === true && actionData.success === true ? (
        <Confetti isActive />
      ) : null}
    </>
  );
}
