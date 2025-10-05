import { useEffect } from "react";
import { useLocation } from "react-router";
import { HeroSection } from "@/components/HeroSection";
import { TrainingsSection } from "@/components/TrainingsSection";
import { ScheduleSection } from "@/components/ScheduleSection";
import { PricingSection } from "@/components/PricingSection";
import { SignupSection } from "@/components/SignupSection";

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
      <section id="hero" aria-labelledby="hero-title">
        <HeroSection />
      </section>
      <section id="trainings" aria-labelledby="trainings-title">
        <TrainingsSection />
      </section>
      <section id="schedule" aria-labelledby="schedule-title">
        <ScheduleSection />
      </section>
      <section id="pricing" aria-labelledby="pricing-title">
        <PricingSection />
      </section>
      <section id="signup" aria-labelledby="signup-title">
        <SignupSection />
      </section>
    </>
  );
}
