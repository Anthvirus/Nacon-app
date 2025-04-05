import Navbar from "../components/Navbar";
import AboutContent from "../components/Content";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="max-w-screen">
      <Navbar />
      <AboutContent />
      <Footer />
    </section>
  );
}
