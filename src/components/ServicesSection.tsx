import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Code, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: "Website Design",
      description:
        "Creating beautiful, user-friendly designs that capture your brand identity and provide exceptional user experiences across all devices.",
    },
    {
      icon: Code,
      title: "Website Development",
      description:
        "Building robust, scalable web applications using modern technologies like React, Node.js, and TypeScript for optimal performance.",
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description:
        "Providing ongoing support, updates, and optimization to keep your website secure, fast, and running smoothly at all times.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8">
              My Services
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive web development services to help bring your
              digital vision to life, from initial design concepts to ongoing
              maintenance and support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up mb-12">
            {services.map((service, index) => (
              <Card key={index} className="text-center group h-full">
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-6 p-4 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-base">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl mb-4">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Button */}
          {/* <div className="text-center">
            <Button
              size="lg"
              variant="default"
              className="px-6 py-3 font-semibold gap-2 rounded-2xl shadow-md"
              asChild
            >
              <Link to="/RequestService">
                Request a Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
