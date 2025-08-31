import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <hr className="my-12 border-t border-gray-300" />
      <AboutSection />
      <hr className="my-12 border-t border-gray-300" />
      <CertificatesSection />
      <hr className="my-12 border-t border-gray-300" />
      <TechStack />
      <hr className="my-12 border-t border-gray-300" />
      <ProjectsSection />
      <hr className="my-12 border-t border-gray-300" />
      <ServicesSection />
      <hr className="my-12 border-t border-gray-300" />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
