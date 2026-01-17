import { Code2, GraduationCap, Briefcase, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Software Engineering Student",
      description: "3rd year at OSTİM Technical University"
    },
    {
      icon: Briefcase,
      title: "Freelance Developer",
      description: "Building real-world solutions"
    },
    {
      icon: Code2,
      title: ".NET Specialist",
      description: "Full-stack web development"
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always exploring new tech"
    }
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="container-wide px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <span className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
              About Me
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Crafting Digital Experiences with{" "}
              <span className="gradient-text">Precision & Passion</span>
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg">
              <p>
                I'm a third-year Software Engineering student at OSTİM Technical University with a strong focus on Full Stack development, specializing in .NET technologies.
              </p>
              <p>
                I have hands-on experience building web applications, working with both front-end and back-end technologies, and writing clean, maintainable code that scales.
              </p>
              <p className="hidden sm:block">
                I'm highly motivated to continuously learn new tools and frameworks, improve my problem-solving skills, and apply software engineering principles to real-world projects. I thrive in both team environments and independent work.
              </p>
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-4 sm:p-6 rounded-xl border border-border bg-card card-gradient hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
