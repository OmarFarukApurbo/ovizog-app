import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import PillarsSection from "@/components/home/PillarsSection";
import WorkflowSection from "@/components/home/WorkflowSection";
import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <WorkflowSection />
      <PartnersSection />
      <Footer />
    </main>
  );
}
