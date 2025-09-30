import { Outlet } from "react-router-dom";
import { HeaderSection } from "../HeaderSection";
import { FooterSection } from "../FooterSection";
import { SEOHead } from "../SEOHead";

export const RootLayout = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen flex flex-col">
        <HeaderSection />
        <main className="flex-1">
          <Outlet />
        </main>
        <FooterSection />
      </div>
    </>
  );
};
