import { Outlet } from "react-router";
import { HeaderSection } from "@/components/HeaderSection";
import { FooterSection } from "@/components/FooterSection";
import { SEOHead } from "@/components/SEOHead";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./main.stylex";
import { BRAND } from "@/constants/brand";

const MainLayout = () => (
  <>
    <SEOHead
      title={`${BRAND.name} - ${BRAND.tagline}`}
      description={`${BRAND.description} Try a free trial week!`}
      keywords="personal training, outdoor training, fitness, The Hague, Netherlands, strength training, HIIT, parent child training"
    />
    <div {...stylex.props(styles.app)}>
      <HeaderSection />
      <main id="main-content" role="main" {...stylex.props(styles.main)}>
        <Outlet />
      </main>
      <FooterSection />
    </div>
  </>
);
export default MainLayout;
