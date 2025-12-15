'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (clientX - left - width / 2) * strength
    const y = (clientY - top - height / 2) * strength
    setPosition({ x, y })
  }

  const reset = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseStyles = cn(
    'relative inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-300',
    variant === 'primary' &&
      'text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]',
    variant === 'secondary' &&
      'text-white border border-white/20 bg-white/5 backdrop-blur hover:bg-white/10 hover:border-white/30',
    className
  )

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={baseStyles}
    >
      {/* Shine effect for primary */}
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%)',
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['200% 200%', '-200% -200%'],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      )}
      <span className="relative z-10 flex items-center">{children}</span>
    </motion.div>
  )

  if (href) {
    return <Link href={href}>{content}</Link>
  }

  return (
    <button onClick={onClick} type="button">
      {content}
    </button>
  )
}
