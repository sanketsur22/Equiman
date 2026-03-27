import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import StatsSection from "@/components/StatsSection";
import FunnelSection from "@/components/FunnelSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <StatsSection />
      <FunnelSection />
      <AboutSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

