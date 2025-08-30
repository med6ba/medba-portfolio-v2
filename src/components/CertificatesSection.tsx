import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Import certificate images
import cert1 from "@/assets/cert1.jpg"; // Web Developer - Sup'ISI
import supisi from "@/assets/sup'isi.jpeg"; // Web Developer - Sup'ISI
import cert2 from "@/assets/cert2.jpg"; // Responsive Web Design - freeCodeCamp
import cert3 from "@/assets/cert3.jpg"; // UI/UX design basics - M3aarf
import cert4 from "@/assets/cert4.jpg"; // Digital Skills: UX - Accenture
import cert5 from "@/assets/cert5.jpg"; // Visual Elements of UI Design - CAL ARTS
import cert6 from "@/assets/cert6.jpg"; // Intro to Front-End Development - Meta
import cert7 from "@/assets/cert7.jpg"; // Project Management - Google
import cert8 from "@/assets/cert8.jpg"; // JavaScript Essentials - Cisco Networking Academy
import cert9 from "@/assets/cert9.jpg"; // Introduction to PHP - Simplilearn

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Web Developer",
      issuer: "Sup'ISI",
      link: supisi,
      image: cert1,
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      link: "https://freecodecamp.org/certification/med6ba/responsive-web-design",
      image: cert2,
    },
    {
      title: "UI/UX design basics",
      issuer: "M3aarf",
      link: "https://www.m3aarf.com/student/certificate/1c9077b3",
      image: cert3,
    },
    {
      title: "Digital Skills: UX",
      issuer: "Accenture",
      link: "https://www.futurelearn.com/certificates/ordekbh",
      image: cert4,
    },
    {
      title: "Visual Elements of UI Design",
      issuer: "CAL ARTS",
      link: "https://coursera.org/verify/HOACYV9WPIBD",
      image: cert5,
    },
    {
      title: "Intro to Front-End Development",
      issuer: "Meta",
      link: "https://coursera.org/verify/GY4M13U476Z1",
      image: cert6,
    },
    {
      title: "Project Management",
      issuer: "Google",
      link: "https://coursera.org/share/371835a9a8827e9a8ed42052d83f7811",
      image: cert7,
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      link: "https://www.credly.com/badges/c97f8037-443b-473b-b978-e6261d126997/accept_via_choose_sign_up",
      image: cert8,
    },
    {
      title: "Introduction to PHP",
      issuer: "Simplilearn",
      link: "https://simpli-web.app.link/e/tu6jfDi7OSb",
      image: cert9,
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">
              Certificates
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of professional certifications that showcase my
              commitment to continuous learning and expertise in various
              technologies.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-slide-up">
            {certificates.map((cert, index) => (
              <Card key={index} className="group text-center">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-5 rounded-full w-fit transition-base shadow-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {cert.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium mb-4">
                    {cert.issuer}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="w-full"
                  >
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
