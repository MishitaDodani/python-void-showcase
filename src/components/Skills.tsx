import { GlassCard } from "@/components/ui/glass-card"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "SQL", level: 90 },
        { name: "PHP", level: 75 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "Django", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Tools & Databases",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "Visual Studio Code", level: 90 },
        { name: "PyCharm", level: 85 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <GlassCard 
                key={category.title} 
                className="p-6 space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold text-foreground text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Python Highlight */}
          <div className="mt-16 text-center">
            <GlassCard className="p-8 max-w-2xl mx-auto animate-scale-in">
              <div className="flex items-center justify-center mb-4">
                <div className="text-6xl mr-4">🐍</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Python Specialist
                  </h3>
                  <p className="text-muted-foreground">
                    Core expertise in the Python ecosystem
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {[
                  "Web Development", "Data Science", "Machine Learning", 
                  "API Development", "Automation", "Testing"
                ].map((tag) => (
                  <span 
                    key={tag}
                    className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}