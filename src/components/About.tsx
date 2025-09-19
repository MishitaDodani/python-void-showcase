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
                I'm a passionate Python developer with over 5 years of experience building 
                robust applications and solving complex problems. My journey started with a 
                fascination for automation and has evolved into expertise across the entire 
                Python ecosystem.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                From data science projects that uncover insights to web applications that 
                serve thousands of users, I love turning ideas into reality through clean, 
                efficient code. I believe in continuous learning and staying up-to-date 
                with emerging technologies.
              </p>

              <div className="pt-4">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  What I Bring
                </h3>
                <ul className="space-y-2">
                  {[
                    "5+ years of Python development experience",
                    "Strong background in Django and FastAPI",
                    "Experience with machine learning and data analysis",
                    "Cloud deployment and DevOps practices",
                    "Agile development and team collaboration"
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