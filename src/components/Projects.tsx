import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Github, ExternalLink, Star } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Analytics Platform",
      description: "Full-stack Django application with real-time analytics dashboard for e-commerce businesses. Features include sales tracking, customer insights, and automated reporting.",
      tech: ["Django", "PostgreSQL", "Redis", "Chart.js", "Bootstrap"],
      github: "#",
      live: "#",
      featured: true,
      image: "🛍️"
    },
    {
      title: "ML Stock Predictor",
      description: "Machine learning model using LSTM networks to predict stock prices. Built with TensorFlow and deployed as a Flask API with interactive visualizations.",
      tech: ["Python", "TensorFlow", "Flask", "Pandas", "Plotly"],
      github: "#",
      live: "#",
      featured: true,
      image: "📈"
    },
    {
      title: "Task Automation Suite",
      description: "Collection of Python scripts for automating repetitive tasks including file organization, data processing, and report generation with scheduling capabilities.",
      tech: ["Python", "Celery", "SQLAlchemy", "APScheduler"],
      github: "#",
      featured: false,
      image: "🤖"
    },
    {
      title: "API Gateway Service",
      description: "High-performance API gateway built with FastAPI, featuring rate limiting, authentication, and request routing for microservices architecture.",
      tech: ["FastAPI", "Docker", "Redis", "JWT", "PostgreSQL"],
      github: "#",
      live: "#",
      featured: false,
      image: "🌐"
    },
    {
      title: "Data Pipeline Manager",
      description: "ETL pipeline system for processing large datasets with error handling, monitoring, and automated data validation using Apache Airflow.",
      tech: ["Apache Airflow", "Pandas", "SQLAlchemy", "Docker"],
      github: "#",
      featured: false,
      image: "🔄"
    },
    {
      title: "Social Media Analyzer",
      description: "Sentiment analysis tool for social media posts using NLP techniques. Provides insights into brand perception and trending topics.",
      tech: ["NLTK", "Scikit-learn", "Flask", "MongoDB", "D3.js"],
      github: "#",
      live: "#",
      featured: false,
      image: "💬"
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
