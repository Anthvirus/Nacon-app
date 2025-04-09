import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrackingContent from "../components/Tracking";
export default function TrackingPage() {
  return (
    <section className="max-w-screen delay-[5s] ease-in-out">
      <Navbar />
      <TrackingContent />
      <Footer />
    </section>
  );
}
