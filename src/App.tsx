import "./App.css";
import {
  HeaderSection,
  HeroSection,
  TrainingsSection,
  ScheduleSection,
  PricingSection,
  SignupSection,
  FooterSection,
  SEOHead,
} from "./components";

function App() {
  return (
    <div className="app">
      <SEOHead
        title="Level Up Training - Outdoor Personal Training in The Hague"
        description="Professional outdoor personal training in The Hague. Small groups, all weather conditions. Strength, condition & flexibility training. Try a free trial week!"
        keywords="personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
      />
      <HeaderSection />
      <main>
        <HeroSection />
        <TrainingsSection />
        <ScheduleSection />
        <PricingSection />
        <SignupSection />
      </main>
      <FooterSection />
    </div>
  );
}

export default App;
