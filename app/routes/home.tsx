import { useEffect } from "react";
import { useLocation } from "react-router";
import type { ActionFunctionArgs } from "react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrainingsSection } from "@/components/TrainingsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { SignupSection } from "@/components/SignupSection";

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
    // For now, we'll just log the form data
    // In production, you'd send this to an email service like:
    // - Nodemailer with SMTP
    // - SendGrid API
    // - Mailgun API
    // - Railway's email service

    console.log("Contact form submission:", {
      name: name.toString(),
      email: email.toString(),
      message: message.toString(),
      timestamp: new Date().toISOString(),
    });

    // TODO: Replace with actual email sending logic
    // Example with Nodemailer:
    /*
    await sendEmail({
      to: "desi4fit@gmail.com",
      subject: `Nieuwe contactaanvraag van ${name}`,
      text: `
        Naam: ${name}
        E-mail: ${email}
        Bericht: ${message}
      `
    });
    */

    return {
      success: true,
      message:
        "Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.",
    };
  } catch (error) {
    console.error("Form submission error:", error);
    return {
      error:
        "Er is iets misgegaan. Probeer het later opnieuw of stuur een e-mail naar desi4fit@gmail.com",
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
