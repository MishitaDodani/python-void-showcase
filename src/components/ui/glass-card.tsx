import { cn } from "@/lib/utils"
import { ReactNode, CSSProperties } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  style?: CSSProperties
}

export function GlassCard({ children, className, hover = true, style }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-md bg-card-glass/80 border border-border/50 rounded-lg shadow-card",
        "transition-all duration-300",
        hover && "hover:bg-card-glass/90 hover:shadow-elevated hover:scale-[1.02]",
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}