import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Award } from "lucide-react";

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Web Developer",
      issuer: "Sup'ISI",
      link: "https://media.licdn.com/dms/image/v2/D562DAQFQQyEwCzGf7A/profile-treasury-image-shrink_1280_1280/B56ZZIVXzGGsAQ-/0/1744970284761?e=1756512000&v=beta&t=eIY0eb_GaiIXv8RbnOwGRj-o4tJJuNAlRlo7q9m241k",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      link: "https://freecodecamp.org/certification/med6ba/responsive-web-design",
    },
    {
      title: "UI/UX design basics",
      issuer: "M3aarf",
      link: "https://www.m3aarf.com/student/certificate/1c9077b3",
    },
    {
      title: "Digital Skills: UX",
      issuer: "Accenture",
      link: "https://www.futurelearn.com/certificates/ordekbh",
    },
    {
      title: "Visual Elements of UI Design",
      issuer: "CAL ARTS",
      link: "https://coursera.org/verify/HOACYV9WPIBD",
    },
    {
      title: "Intro to Front-End Development",
      issuer: "Meta",
      link: "https://coursera.org/verify/GY4M13U476Z1",
    },
    {
      title: "Project Management",
      issuer: "Google",
      link: "https://coursera.org/share/371835a9a8827e9a8ed42052d83f7811",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      link: "https://www.credly.com/badges/c97f8037-443b-473b-b978-e6261d126997/accept_via_choose_sign_up",
    },
    {
      title: "Introduction to PHP",
      issuer: "Simplilearn",
      link: "https://simpli-web.app.link/e/tu6jfDi7OSb",
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-secondary/30">
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
                  <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit group-hover:bg-accent/20 transition-base">
                    <Award className="text-accent" size={24} />
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
