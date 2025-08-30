import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import school1 from "../assets/high-school.jpg";
import school2 from "../assets/1337-logo.jpg";
import school3 from "../assets/ofppt-logo.jpg";
import bac from "../assets/medba-bac.png";

const AboutSection = () => {
  const education = [
    {
      title: "High School Degree",
      institution: "Hassan II High School",
      period: "Sept 2022 - Jun 2023",
      school: school1,
      link: bac,
    },
    {
      title: "Pool Experience",
      institution: "1337 MED Coding School",
      period: "Jun - Jul 2024",
      school: school2,
      link: "https://www.github.com/med6ba/medba-pool.git",
      schoolLink: "https://www.1337.ma",
    },
    {
      title: "TS diploma",
      institution: "ISMO Tétouan-OFPPT",
      period: "Sept 2024 - Now",
      school: school3,
      schoolLink: "https://www.ismo.ma",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">
              About Me
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* About Text */}
          <div className="mb-16 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed text-justify max-w-3xl mx-auto">
              I’m Medba, a 19-year-old Full-Stack Web Developer passionate about building
              clean, responsive, and user-friendly websites. I focus on turning
              ideas into functional digital experiences while continuously
              learning and improving my skills.
            </p>
          </div>

          {/* Education Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-up">
            {education.map((edu, index) => (
              <Card key={index} className="text-center group">
                <CardHeader className="pb-2">
                  <div className="mx-auto mb-2 p-3 rounded-full w-fit transition-base">
                    <img
                      src={edu.school}
                      width={100}
                      style={{ borderRadius: "1000px" }}
                      alt="school"
                    />
                  </div>

                  {/* Title as link */}
                  <a
                    href={edu.link} // رابط كل title
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg font-semibold text-black transition ${
                      index < 2 ? "underline" : ""
                    }`}
                  >
                    {edu.title}
                  </a>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-medium">
                    <a
                      href={edu.schoolLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${index > 0 ? "underline" : ""}`}
                    >
                      {edu.institution}
                    </a>
                  </p>
                  <p className="text-sm text-primary font-semibold">
                    {edu.period}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
