import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Github, ExternalLink, Star } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Salon Billing System",
      description: "A full-stack billing system for Wayz Salon using Django and SQLite with features like service-based billing, user authentication, and invoice generation. Designed with Bootstrap for clean, responsive UI.",
      tech: ["Django", "SQLite", "Bootstrap", "Python"],
      github: "https://github.com/MishitaDodani/salon-billing-system",
      live: "#",
      featured: true,
      image: "💇"
    },
    {
      title: "AI Healthcare Chatbot",
      description: "An AI-powered healthcare chatbot using Python, Twilio, FastAPI, and Google Gemini for real-time patient interaction via WhatsApp. Hackathon finalist project that secured 5th place among 1400+ teams.",
      tech: ["Python", "FastAPI", "Twilio", "Google Gemini"],
      github: "https://github.com/MishitaDodani",
      live: "#",
      featured: true,
      image: "🤖"
    },
    {
      title: "Shortest Path Finder",
      description: "A maze-solving visualizer using Python and the curses library that demonstrates the Breadth-First Search (BFS) algorithm in real time with step-by-step animation.",
      tech: ["Python", "Curses", "BFS Algorithm"],
      github: "https://github.com/MishitaDodani/shortest-path-finder",
      featured: false,
      image: "🗺️"
    },
    {
      title: "Typing Speed Test Application",
      description: "A Python-based typing speed test that calculates Words Per Minute (WPM) and accuracy in real time with live feedback over a 60-second test window.",
      tech: ["Python", "GUI", "Real-time Analytics"],
      github: "https://github.com/MishitaDodani/typing-speed-test",
      live: "#",
      featured: false,
      image: "⌨️"
    },
    {
      title: "Aim Trainer Game",
      description: "A pygame-based aim training game with target tracking, speed calculation, and accuracy metrics. Features growing/shrinking targets with collision detection and real-time performance statistics.",
      tech: ["Python", "Pygame", "Game Development"],
      github: "https://github.com/MishitaDodani/aim-trainer",
      featured: false,
      image: "🎯"
    },
    {
      title: "Flappy Bird Clone",
      description: "A classic Flappy Bird game recreation using Pygame with collision detection, high score tracking, and smooth gameplay mechanics. Features pipe generation and gravity-based bird movement.",
      tech: ["Python", "Pygame", "Game Logic"],
      github: "https://github.com/MishitaDodani/flappy-bird",
      featured: false,
      image: "🐦"
    }
  ]

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of Python applications solving real-world problems
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <GlassCard 
                key={project.title} 
                className="p-8 space-y-6 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center space-x-1 text-accent">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))
                  }
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-muted-foreground/20 hover:border-primary hover:text-primary"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary-glow"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </GlassCard>
            ))
            }
          </div>

          {/* Other Projects Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground text-center">
              More Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <GlassCard 
                  key={project.title} 
                  className="p-6 space-y-4 animate-scale-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{project.image}</div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted/50 text-muted-foreground rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))
                    }
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs text-muted-foreground">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-muted-foreground hover:text-primary p-2"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.live && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-primary p-2"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </GlassCard>
              ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
