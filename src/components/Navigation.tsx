import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect current active section
      const sections = document.querySelectorAll("section[id]");
      let current = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "certificates", label: "Certificates" },
    { id: "projects", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-custom-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo / Name */}
        <div className="font-extrabold text-xl tracking-wide cursor-pointer text-primary">
          <a href="/">Medba.Dev</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative font-medium transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
              {/* underline animation */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${
                  activeSection === item.id
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Mobile Burger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 bg-background/95 backdrop-blur-md p-6 rounded-lg shadow-custom-md animate-slide-down">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium text-left transition-colors ${
                activeSection === item.id
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
