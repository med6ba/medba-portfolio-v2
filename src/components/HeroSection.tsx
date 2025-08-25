import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
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
      label: "Twitter",
      href: "https://twitter.com/med6ba",
      icon: Twitter,
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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/30"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Medba Profile"
              className="w-32 h-32 md:w-30 md:h-30 rounded-full mx-auto shadow-custom-xl border-6 border-primary/20"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            MOHAMED BEN ABDESSADAK
          </h1>

          {/* Job Title */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium mb-4">
            Full-Stack Developer
          </h2>

          {/* Download CV Button */}
          {/* <a href={myCV} download>
            <Button variant="hero" size="lg" className="gap-2 m-5">
              <Download size={10} />
              Download CV
            </Button>
          </a> */}

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-base shadow-custom-sm hover:shadow-custom-md transform hover:scale-105"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-3 py-1 text-accent font-semibold mb-4">
              Open to work
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
