import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import FeaturedTickets from "../components/FeaturedTickets.jsx";
import PopularShows from "../components/PopularShows.jsx";
import About from "../components/About.jsx";
import Testimoni from "../components/Testimoni.jsx";
import Footer from "../components/Footer.jsx";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-skysoft-50">
      <Navbar />
      <Hero />
      <FeaturedTickets />
      <PopularShows />
      <About />
      <Testimoni />
      <Footer />
    </div>
  );
}

