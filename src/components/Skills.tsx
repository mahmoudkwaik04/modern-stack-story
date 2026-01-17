import { useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories: SkillCategory[] = [
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "C#", level: 90 },
        { name: "ASP.NET", level: 85 },
        { name: "PHP", level: 75 },
        { name: "C++", level: 70 },
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "Responsive Design", level: 80 },
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "SQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 75 },
        { name: "SQL Server", level: 75 },
      ]
    },
    {
      title: "Tools & Concepts",
      icon: "🛠️",
      skills: [
        { name: "SDLC", level: 80 },
        { name: "OOP", level: 90 },
        { name: "Git", level: 75 },
        { name: "WAMP", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="container-wide px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-primary font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4 block">
            Technical Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-2">
            A comprehensive toolkit for building robust, scalable applications from front to back
          </p>
        </div>

        {/* Category tabs - scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 -mx-5 px-5 sm:mx-0 sm:px-0 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 text-sm sm:text-base ${
                activeCategory === index
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card border border-border hover:border-primary/30 text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="mr-1.5 sm:mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-6">
            {categories[activeCategory].skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: 'var(--gradient-primary)',
                      animationDelay: `${index * 100}ms`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Language proficiency */}
        <div className="mt-12 sm:mt-16 pt-10 sm:pt-16 border-t border-border">
          <h3 className="text-center text-lg sm:text-xl font-semibold mb-6 sm:mb-8">Language Proficiency</h3>
          <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-6 max-w-md sm:max-w-none mx-auto">
            {[
              { lang: "Arabic", level: "Native", flag: "🇵🇸" },
              { lang: "English", level: "B2", flag: "🇬🇧" },
              { lang: "Turkish", level: "Good", flag: "🇹🇷" },
            ].map((item) => (
              <div
                key={item.lang}
                className="flex flex-col sm:flex-row items-center gap-1 sm:gap-0 px-3 sm:px-6 py-3 sm:py-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all duration-300 text-center"
              >
                <span className="text-xl sm:text-2xl sm:mr-3">{item.flag}</span>
                <span className="font-medium text-sm sm:text-base">{item.lang}</span>
                <span className="text-muted-foreground text-xs sm:text-base sm:ml-2">({item.level})</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
