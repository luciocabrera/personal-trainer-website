import { useEffect, useState } from "react";
import { useLocation, useActionData } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrainingsSection } from "@/components/TrainingsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { SignupSection } from "@/components/SignupSection";
import CenteredNotification from "@/components/CenteredNotification/CenteredNotification";
import Confetti from "@/components/Confetti/Confetti";
import { handleContactSubmission } from "@/services/contactService";
import {
  getServerTranslation,
  getLanguageFromRequest,
} from "@/utils/serverI18n";

export async function action({ request }: ActionFunctionArgs) {
  // Get user's language preference
  const language = getLanguageFromRequest(request);
  const { t } = getServerTranslation(language);

  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !message) {
    return {
      error: t("form.validation.required"),
      success: false,
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    return {
      error: t("form.validation.invalidEmail"),
      success: false,
    };
  }

  try {
    // Prepare email translations
    const emailTranslations = {
      adminSubject: t("email.adminSubject"),
      adminTitle: t("email.adminTitle"),
      adminNameLabel: t("email.adminNameLabel"),
      adminEmailLabel: t("email.adminEmailLabel"),
      adminMessageLabel: t("email.adminMessageLabel"),
      adminFooter: t("email.adminFooter"),
      autoReplySubject: t("email.autoReplySubject"),
      autoReplyTitle: t("email.autoReplyTitle"),
      autoReplyGreeting: t("email.autoReplyGreeting"),
      autoReplyThankYou: t("email.autoReplyThankYou"),
      autoReplyYourMessage: t("email.autoReplyYourMessage"),
      autoReplyClosing: t("email.autoReplyClosing"),
      autoReplyTeam: t("email.autoReplyTeam"),
      autoReplyDisclaimer: t("email.autoReplyDisclaimer"),
    };

    // Process contact submission (database-first approach)
    await handleContactSubmission(
      {
        name: name.toString(),
        email: email.toString(),
        message: message.toString(),
      },
      emailTranslations
    );

    // Log successful submission
    console.log("Contact form submission successful:", {
      name: name.toString(),
      email: email.toString(),
      timestamp: new Date().toISOString(),
    });

    return {
      success: true,
      message: t("form.success.message"),
    };
  } catch (error) {
    console.error("Form submission error:", error);

    // Since email is non-blocking, this error is only for database failures
    return {
      error: t("form.error.general"),
      success: false,
    };
  }
}

export default function Home() {
  const location = useLocation();
  const actionData = useActionData() as
    | { success?: boolean; message?: string; error?: string }
    | undefined;

  const [notificationDismissed, setNotificationDismissed] = useState(false);

  // Smooth scroll to section based on hash
  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
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
  const showNotification = actionData && !notificationDismissed;

  return (
    <>
      <HeroSection />
      <TrainingsSection />
      <ScheduleSection />
      <PricingSection />
      <SignupSection />

      {/* Centered Success/Error Notification */}
      {showNotification && (
        <CenteredNotification
          message={actionData.success ? actionData.message! : actionData.error!}
          type={actionData.success ? "success" : "error"}
          isVisible={Boolean(showNotification)}
          onClose={handleCloseNotification}
          autoHide={true}
          autoHideDelay={actionData.success ? 10000 : 6000}
        />
      )}

      {/* Confetti for successful submissions */}
      {showNotification && actionData?.success && <Confetti isActive={true} />}
    </>
  );
}
