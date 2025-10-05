import { Outlet } from "react-router";
import { HeaderSection } from "@/components/HeaderSection";
import { FooterSection } from "@/components/FooterSection";
import * as stylex from "@stylexjs/stylex";
import { styles } from "./main.stylex";

const MainLayout = () => (

    <div {...stylex.props(styles.app)}>
      <HeaderSection />
      <main id="main-content" role="main" {...stylex.props(styles.main)}>
        <Outlet />
      </main>
      <FooterSection />
    </div>

);
export default MainLayout;
