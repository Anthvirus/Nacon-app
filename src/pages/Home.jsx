import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import PartnerSection from "../components/PartnerSection";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function Home() {
  const footerRef = useRef();
  return (
    <div className="max-w-screen bg-[var(--Secondary)] min-h-max delay-[5s] ease-in-out">
      <header className="flex flex-col min-h-[60vh] xl:h-max header">
        <Navbar />
        <HeroSection footerRef={footerRef}/>
      </header>
      <section>
        <AboutSection />
        <ServiceSection />
        <PartnerSection/>
      </section>
      <Footer footerRef={footerRef} />
    </div>
  );
}
