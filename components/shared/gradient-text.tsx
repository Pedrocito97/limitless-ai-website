import { cn } from '@/lib/utils'

interface GradientTextProps {
  children: React.ReactNode
  className?: string
  animate?: boolean
}

export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-primary bg-clip-text text-transparent',
        animate && 'animate-gradient-text',
        className
      )}
    >
      {children}
    </span>
  )
}
