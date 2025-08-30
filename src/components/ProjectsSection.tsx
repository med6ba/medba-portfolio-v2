import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import project1Image from "@/assets/project1.png";
import project2Image from "@/assets/project2.png";
import project3Image from "@/assets/project3.png";
import { toast } from "@/components/ui/use-toast";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Noor Al Houda Website",
      image: project1Image,
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      repoLink: "https://github.com/med6ba/noor-al-houda",
      demoLink: "https://nooralhouda.vercel.app",
      description:
        "An open-source, ad-free platform providing essential Islamic resources in a simple, user-friendly design.",
    },
    {
      title: "ISMOShare Platform",
      image: project2Image,
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      repoLink: "https://github.com/med6ba/ismoshare",
      demoLink: null,
      description:
        "A platform for ISMO Tetouan that centralizes resources and connects students, teachers, and administration.",
    },
    {
      title: "Medba Portfolio V1",
      image: project3Image,
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      repoLink: "https://github.com/med6ba/medba-portfolio-v1",
      demoLink: "https://med6ba.vercel.app",
      description:
        "My very first portfolio, showcasing my projects and skills while learning web development.",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating my skills in
              full-stack development, modern design principles, and cutting-edge
              technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-slide-up">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 transition-base"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 text-accent border border-accent text-sm rounded-full font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button variant="outline" asChild className="flex-1">
                      <a
                        href={project.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        View Repo
                      </a>
                    </Button>
                    <Button
                      variant="default"
                      asChild
                      className="flex-1"
                      onClick={() => {
                        if (project.demoLink) {
                          window.open(project.demoLink, "_blank");
                        } else {
                          toast({
                            title: "Coming soon!",
                            description:
                              "This demo is not yet available, but you can test the platform locally",
                          });
                        }
                      }}
                    >
                      <a className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
