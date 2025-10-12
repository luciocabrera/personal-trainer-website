import { useEffect } from "react";
import { useLocation } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrainingsSection } from "@/components/TrainingsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { SignupSection } from "@/components/SignupSection";
import { sendContactEmail } from "@/services/emailService";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !message) {
    return {
      error: "Alle velden zijn verplicht",
      success: false,
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.toString())) {
    return {
      error: "Ongeldig e-mailadres",
      success: false,
    };
  }

  try {
    // Send email using the email service
    await sendContactEmail({
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
      message:
        "Bedankt voor je bericht! We hebben je aanvraag ontvangen en nemen zo snel mogelijk contact met je op.",
    };
  } catch (error) {
    console.error("Form submission error:", error);

    // Return different error messages based on error type
    const isEmailError =
      error instanceof Error && error.message.includes("Failed to send email");

    return {
      error:
        isEmailError ?
          "Er is een probleem opgetreden bij het verzenden van je bericht. Probeer het later opnieuw of stuur direct een e-mail naar desi4fit@gmail.com"
        : "Er is iets misgegaan. Probeer het later opnieuw of stuur een e-mail naar desi4fit@gmail.com",
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
