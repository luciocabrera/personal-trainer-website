import { useEffect } from "react";
import { useLocation } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrainingsSection } from "@/components/TrainingsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { SignupSection } from "@/components/SignupSection";
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
    // Process contact submission (database-first approach)
    await handleContactSubmission({
      name: name.toString(),
      email: email.toString(),
      message: message.toString(),
    });

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

  return (
    <>
      <HeroSection />
      <TrainingsSection />
      <ScheduleSection />
      <PricingSection />
      <SignupSection />
    </>
  );
}
