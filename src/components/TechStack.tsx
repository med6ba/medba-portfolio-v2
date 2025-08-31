import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiPhp,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPython,
  SiC,
  SiGnubash,
  SiFigma,
} from "react-icons/si";

const TechStack = () => {
  const tech = [
    { name: "Bash", icon: SiGnubash, color: "#4EAA25" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React JS", icon: SiReact, color: "#61DAFB" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
  ];

  return (
    <section id="techstack" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">
              Tech Stack
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of technologies and tools I use to design, develop,
              and deploy efficient digital solutions.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-slide-up">
            {tech.map((item, index) => (
              <Card
                key={index}
                className="text-center group hover:shadow-lg transition"
              >
                <CardHeader className="pb-2 flex flex-col items-center">
                  <item.icon size={40} style={{ color: item.color }} />
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-foreground">{item.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
