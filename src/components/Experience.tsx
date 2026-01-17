import { Building2, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Trendow Marketing Agency",
      type: "Freelance",
      period: "January 2024 - August 2024",
      location: "Remote",
      description: [
        "Developed a full-stack website using modern front-end and back-end technologies, contributing to all phases of the software development lifecycle",
        "Implemented robust and scalable solutions, ensuring high performance and user satisfaction",
        "Collaborated effectively in a remote environment to deliver project requirements on time"
      ],
      technologies: ["ASP.NET", "C#", "JavaScript", "SQL", "Bootstrap"]
    }
  ];

  return (
    <section id="experience" className="section-padding relative">
      <div className="container-wide px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Professional Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            Turning ideas into functional, elegant software solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 sm:pl-8 pb-12 border-l-2 border-border last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30" />
              
              <div className="group p-5 sm:p-8 rounded-2xl border border-border bg-card card-gradient hover:border-primary/30 transition-all duration-300 ml-2 sm:ml-4">
                {/* Header */}
                <div className="flex flex-col gap-2 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{exp.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-primary mt-1">
                      <Building2 className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{exp.company}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary/10 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    {exp.location}
                  </div>
                </div>

                {/* Description */}
                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 rounded-full bg-secondary text-xs sm:text-sm font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
