import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"
import { GlassCard } from "@/components/ui/glass-card"
import heroImage from "@/assets/hero-bg.jpg"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero pt-16"
      style={{
        backgroundImage: `linear-gradient(rgba(23, 25, 35, 0.8), rgba(23, 25, 35, 0.9)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >

      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20 animate-glow-pulse" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in-up">
          {/* Main heading with typewriter effect */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Hi, I'm{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent animate-glow-pulse">
                Mishita
              </span>
            </h1>
            <div className="text-xl md:text-3xl text-muted-foreground font-light">
              <div className="relative">
                <span className="sm:hidden block text-center border-r-2 border-primary animate-pulse px-1">
                  Python Developer<br />& Problem Solver
                </span>
                <span className="hidden sm:block overflow-hidden whitespace-nowrap border-r-2 border-primary animate-typewriter">
                  Python Developer & Problem Solver
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Computer Applications student at St. Aloysius College with expertise in Python, Django, 
            and full-stack development. I love building innovative solutions and have secured 
            5th place in AI hackathons among 1400+ teams.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg shadow-glow hover:shadow-elevated transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "https://github.com/MishitaDodani", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mishita-dodani-381664253", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mishitadodani068@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <GlassCard key={label} className="p-3 hover:shadow-glow">
                <a 
                  href={href}
                  className="flex items-center justify-center w-6 h-6 text-muted-foreground hover:text-primary transition-colors duration-300"
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  )
}