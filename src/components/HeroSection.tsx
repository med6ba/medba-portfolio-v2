import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import myCV from "../assets/medba-cv.pdf";

const HeroSection = () => {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/med6ba",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamedbenabdessadak",
      icon: Linkedin,
    },
    {
      label: "Email",
      href: "mailto:medba.dev@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center from-background to-secondary/30"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Medba Profile"
              className="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto shadow-custom-xl border-4 border-primary/90 transform transition"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground tracking-wide mb-2">
            Mohamed Ben Abdessadak
          </h1>

          {/* Job Title */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-medium mb-2">
            Full-Stack Web Developer
          </h2>

          {/* Location */}
          <p className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-500 mb-5">
            <MapPin className="w-4 h-4 text-primary" />
            Tetouan, Morocco
          </p>

          {/* Open to Work Tag */}
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-1 text-green-700 font-semibold shadow-sm mb-5">
            Open to work
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all shadow-custom-sm hover:shadow-custom-md transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Download CV Button */}
          <a href={myCV} download>
            <Button
              variant="default"
              size="lg"
              className="font-semibold gap-2 rounded-2xl shadow-md"
            >
              <Download className="w-5 h-5" />
              Download CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
