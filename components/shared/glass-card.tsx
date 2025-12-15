import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: 'purple' | 'cyan' | 'blue' | 'none'
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = 'none',
}: GlassCardProps) {
  const glowClasses = {
    purple: 'hover:shadow-glow-purple',
    cyan: 'hover:shadow-glow-cyan',
    blue: 'hover:shadow-glow-blue',
    none: '',
  }

  return (
    <div
      className={cn(
        'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl',
        hover && 'transition-all duration-300 hover:bg-white/10 hover:border-white/20',
        glowClasses[glow],
        className
      )}
    >
      {children}
    </div>
  )
}
