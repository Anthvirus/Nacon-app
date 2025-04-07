import Navbar from "../components/Navbar";
import ServiceBody from "../components/Service";
import Footer from "../components/Footer";

export default function ServicePage() {
  return (
    <section className="max-w-screen">
        <Navbar />
        <ServiceBody />
        <Footer />
    </section>
  );
}
