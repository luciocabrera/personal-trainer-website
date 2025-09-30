import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeroSection } from "../components/HeroSection";
import { TrainingsSection } from "../components/TrainingsSection";
import { ScheduleSection } from "../components/ScheduleSection";
import { PricingSection } from "../components/PricingSection";
import { SignupSection } from "../components/SignupSection";

export const HomePage = () => {
  const location = useLocation();

  // Smooth scroll to section based on route
  useEffect(() => {
    const scrollToSection = () => {
      const path = location.pathname.replace("/", "") || "hero";
      const element = document.getElementById(path);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // Small delay to ensure the page is rendered
    const timeoutId = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <div id="trainings">
        <TrainingsSection />
      </div>
      <div id="schedule">
        <ScheduleSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="signup">
        <SignupSection />
      </div>
    </>
  );
};
