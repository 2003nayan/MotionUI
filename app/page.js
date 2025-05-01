import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CallToAction from "./components/CTA";
import Banner from "./components/Banner";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import AnimatedBanner from "./components/AnimatedBanner";
import ModernNavbar from "./components/ModernNavbar";
import HeroSection from "./components/HeroSection";
import FeaturesGrid from "./components/FeaturesGrid";
import CtaSection from "./components/CtaSection";
import ModernFooter from "./components/ModernFooter";

export default function Home() {
  return (
    <div>
      <AnimatedBanner />
      <ModernNavbar />
      <HeroSection />
      <FeaturesGrid />
      <CtaSection />
      <ModernFooter />
    </div>
  )
};