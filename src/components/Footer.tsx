import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com/MishitaDodani", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/mishita-dodani-381664253", label: "LinkedIn" },
    { icon: Mail, href: "mailto:mishitadodani068@gmail.com", label: "Email" }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                Mishita Dodani
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Python developer and Computer Applications student passionate about creating 
                innovative solutions and building impactful projects.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" }
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a 
                      href={href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                mishitadodani068@gmail.com
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Mishita Dodani. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" /> and Python
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}