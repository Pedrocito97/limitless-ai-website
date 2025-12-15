'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface HoverCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function HoverCard({
  children,
  className,
  glowColor = 'rgba(139, 92, 246, 0.15)',
}: HoverCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()

    const x = (clientX - left) / width
    const y = (clientY - top) / height

    setRotateX((y - 0.5) * -10)
    setRotateY((x - 0.5) * 10)
    setGlowPosition({ x: x * 100, y: y * 100 })
  }

  const reset = () => {
    setRotateX(0)
    setRotateY(0)
    setGlowPosition({ x: 50, y: 50 })
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
      className={cn(
        'relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/20',
        className
      )}
    >
      {/* Glow effect that follows cursor */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 40%)`,
        }}
      />

      {/* Subtle border gradient on hover */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(139, 92, 246, 0.1), transparent 40%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
