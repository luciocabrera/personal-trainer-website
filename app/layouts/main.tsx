import { Outlet } from "react-router";
import { HeaderSection } from "../components/HeaderSection";
import { FooterSection } from "../components/FooterSection";
import { SEOHead } from "../components/SEOHead";
import "../App.css";

export default function MainLayout() {
  return (
    <>
      <SEOHead
        title="Level Up Training - Outdoor Personal Training in The Hague"
        description="Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training. Try a free trial week!"
        keywords="personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
      />
      <div className="app">
        <HeaderSection />
        <main>
          <Outlet />
        </main>
        <FooterSection />
      </div>
    </>
  );
}