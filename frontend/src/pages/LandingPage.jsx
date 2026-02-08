import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedTickets from "../components/FeaturedTickets.jsx";
import About from "../components/About.jsx";
import Footer from "../components/Footer.jsx";
import landingBg from "../assets/LANDINGPAGE.jpg";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="fixed inset-0 -z-20 bg-center bg-cover"
        style={{ backgroundImage: `url(${landingBg})` }}
      />

      <div className="fixed inset-0 -z-10 bg-white/55" />
      <div className="relative">
        <Navbar />
        <Hero />
        <FeaturedTickets />
        <About />
        <Footer />
      </div>
    </div>
  );
}