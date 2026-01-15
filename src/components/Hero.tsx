import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 hero-glow" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 backdrop-blur-sm mb-8 opacity-0 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-fade-in-up delay-100">
            Hi, I'm{" "}
            <span className="gradient-text">Mahmoud Abukwaik</span>
          </h1>

          {/* Role */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 opacity-0 animate-fade-in-up delay-200">
            Full Stack .NET Developer
          </p>

          {/* Tagline */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up delay-300 text-balance">
            Software Engineering student passionate about building scalable web applications 
            with clean, maintainable code. Specializing in .NET technologies and modern web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 animate-fade-in-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-up delay-500">
            <a
              href="https://github.com/mahmoudkwaik04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmoud-abukwaik-85b315346/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:mahmoudkwaik99@gmail.com"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
