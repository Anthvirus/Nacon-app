import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import PartnerSection from "../components/PartnerSection";
export default function Home() {
  return (
    <div className="w-full bg-[var(--Secondary)] min-h-max">
      <header className="flex flex-col min-h-[70vh] xl:h-max header">
        <Navbar />
        <HeroSection />
      </header>
      <section>
        <AboutSection />
        <ServiceSection />
        <PartnerSection/>
      </section>
    </div>
  );
}
