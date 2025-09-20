import { GlassCard } from "@/components/ui/glass-card"
import { Code, Database, Server, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable Python applications with best practices"
    },
    {
      icon: Database,
      title: "Data Focus",
      description: "Expert in data analysis, machine learning, and database optimization"
    },
    {
      icon: Server,
      title: "Full Stack",
      description: "Django, FastAPI, and modern web frameworks for complete solutions"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and scalability"
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Computer Applications student at St. Aloysius College, Jabalpur, 
                with a strong focus on Python development and full-stack web applications. 
                I love solving complex problems through clean, efficient code.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech has been marked by continuous learning and hands-on projects. 
                From building salon billing systems to creating AI-powered healthcare chatbots, 
                I enjoy transforming ideas into functional solutions that make a real impact.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  What I Bring
                </h3>
                <ul className="space-y-2">
                  {[
                    "Bachelor's in Computer Applications (CGPA: 9.32)",
                    "Hackathon Finalist - 5th place among 1400+ teams",
                    "Django & Full-stack development expertise",
                    "Python Full Course Certification",
                    "Strong communication and team collaboration"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, description }, index) => (
                <GlassCard 
                  key={title} 
                  className="p-6 text-center space-y-3 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto shadow-glow">
                    <Icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground">{title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}