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
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Crafting Digital Experiences with{" "}
              <span className="gradient-text">Precision & Passion</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                I'm a third-year Software Engineering student at OSTİM Technical University with a strong focus on Full Stack development, specializing in .NET technologies.
              </p>
              <p>
                I have hands-on experience building web applications, working with both front-end and back-end technologies, and writing clean, maintainable code that scales.
              </p>
              <p>
                I'm highly motivated to continuously learn new tools and frameworks, improve my problem-solving skills, and apply software engineering principles to real-world projects. I thrive in both team environments and independent work.
              </p>
            </div>
          </div>

          {/* Right side - Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card card-gradient hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
