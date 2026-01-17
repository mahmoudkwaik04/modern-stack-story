import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-wide px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-8 md:p-10 hover:border-primary/30 transition-all duration-300">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative flex flex-col gap-4 sm:gap-6">
              {/* Icon - centered on mobile */}
              <div className="flex justify-center sm:justify-start">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-primary text-base sm:text-lg font-medium mb-4">
                  OSTİM Technical University
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-muted-foreground text-sm justify-center sm:justify-start">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    Ankara, Turkey
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    Expected Graduation: July 2027
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-start gap-2 text-muted-foreground text-sm">
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span>3rd Year Student</span>
                </div>

                {/* Relevant coursework */}
                <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-border">
                  <h4 className="text-xs sm:text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2">
                    {[
                      "Software Development",
                      "Web Technologies",
                      "Database Systems",
                      "Object-Oriented Programming",
                      "Software Engineering Principles"
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-2 sm:px-3 py-1 rounded-full bg-secondary text-xs sm:text-sm text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
