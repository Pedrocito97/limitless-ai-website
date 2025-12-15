'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Bot, Globe, Phone } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { MagneticButton } from '@/components/shared/magnetic-button'

const floatingIcons = [
  { icon: Zap, delay: 0, x: '10%', y: '25%' },
  { icon: Bot, delay: 0.5, x: '85%', y: '20%' },
  { icon: Globe, delay: 1, x: '80%', y: '65%' },
  { icon: Phone, delay: 1.5, x: '12%', y: '70%' },
]

const smoothSpring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
}

const textVariants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
}

export function Hero() {
  const t = useTranslations('hero')

  const stats = [
    { value: '24/7', label: t('stats.alwaysOn') },
    { value: '50%+', label: t('stats.timeSaved') },
    { value: '3x', label: t('stats.fasterResponse') },
    { value: '100%', label: t('stats.leadCapture') },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[#0a0a0f]" />

      {/* Gradient Mesh - animated */}
      <motion.div
        className="absolute inset-0 z-[1] opacity-60"
        animate={{
          background: [
            `radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
             radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.2) 0px, transparent 50%),
             radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.2) 0px, transparent 50%)`,
            `radial-gradient(at 60% 30%, rgba(139, 92, 246, 0.25) 0px, transparent 50%),
             radial-gradient(at 70% 10%, rgba(6, 182, 212, 0.25) 0px, transparent 50%),
             radial-gradient(at 10% 60%, rgba(59, 130, 246, 0.2) 0px, transparent 50%)`,
            `radial-gradient(at 40% 20%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
             radial-gradient(at 80% 0%, rgba(6, 182, 212, 0.2) 0px, transparent 50%),
             radial-gradient(at 0% 50%, rgba(59, 130, 246, 0.2) 0px, transparent 50%)`,
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Animated Orbs with pulse */}
      <motion.div
        className="absolute z-[2] top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute z-[2] bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Icons with improved animation */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + item.delay, ...smoothSpring }}
            className="absolute hidden lg:block z-[3]"
            style={{ left: item.x, top: item.y }}
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-14 h-14 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/10 hover:border-white/20"
              style={{ boxShadow: '0 0 30px rgba(139, 92, 246, 0.2)' }}
            >
              <Icon className="w-6 h-6 text-purple-400" />
            </motion.div>
          </motion.div>
        )
      })}

      {/* Content */}
      <div className="relative z-[10] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-cyan-400"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-gray-400">{t('badge')}</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
        >
          <span className="text-white">{t('headline1')}</span>
          <br />
          <motion.span
            className="inline-block"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #3b82f6 100%)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {t('headline2')}
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-6"
        >
          {t('subheadline')}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10"
        >
          {t('description')}
          <span className="text-white font-medium"> {t('descriptionHighlight')}</span>
        </motion.p>

        {/* CTAs with Magnetic Buttons */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton href="/services" variant="primary">
            {t('exploreServices')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </MagneticButton>
          <MagneticButton href="/contact" variant="secondary">
            <Play className="mr-2 w-4 h-4" />
            {t('bookCall')}
          </MagneticButton>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors cursor-default"
            >
              <div
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1"
                style={{
                  fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                  background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-[3]" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[10]"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest">{t('scroll')}</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-purple-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
