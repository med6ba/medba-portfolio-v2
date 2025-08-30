import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/med6ba", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mohamedbenabdessadak",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:medba.dev@gmail.com",
      label: "Gmail",
    },
  ];

  // Function to scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-gray-800 py-6 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Copyright */}
        <p className="text-sm font-medium text-center md:text-left">
          © 2025 Medba. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary transition-colors shadow-lg group"
              aria-label={social.label}
            >
              <social.icon
                size={20}
                className="text-gray-700 group-hover:text-white transition-colors"
              />
            </a>
          ))}

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-primary transition-colors shadow-lg group"
            aria-label="Back to Top"
          >
            <ArrowUp
              size={20}
              className="text-gray-700 group-hover:text-white transition-colors"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
