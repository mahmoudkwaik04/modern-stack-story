import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10 hover:border-primary/30 transition-all duration-300">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative flex flex-col sm:flex-row gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Science in Software Engineering
                </h3>
                <p className="text-primary text-lg font-medium mb-4">
                  OSTİM Technical University
                </p>

                <div className="flex flex-wrap gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Ankara, Turkey
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Expected Graduation: July 2027
                  </div>
                </div>

                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>3rd Year Student</span>
                </div>

                {/* Relevant coursework */}
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
                    Key Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Software Development",
                      "Web Technologies",
                      "Database Systems",
                      "Object-Oriented Programming",
                      "Software Engineering Principles"
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
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
