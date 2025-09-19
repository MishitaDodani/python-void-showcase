import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GlassCard } from "@/components/ui/glass-card"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex.chen@example.com",
      href: "mailto:alex.chen@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      href: "#"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Ready to bring your Python project to life? Let's discuss how we can collaborate.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-muted border-border focus:border-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary"
                    placeholder="Project discussion"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-muted border-border focus:border-primary min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover:shadow-elevated transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </GlassCard>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in new opportunities and challenging projects. 
                  Whether you have a question about Python development, want to discuss 
                  a potential collaboration, or just want to say hello, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <GlassCard key={title} className="p-4 hover:shadow-glow">
                    <a 
                      href={href}
                      className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
                        <Icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{title}</div>
                        <div className="text-sm">{value}</div>
                      </div>
                    </a>
                  </GlassCard>
                ))}
              </div>

              <GlassCard className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">
                  Available for Freelance
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Currently accepting new projects and collaborations
                </p>
                <div className="w-3 h-3 bg-green-500 rounded-full mx-auto animate-pulse" />
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}