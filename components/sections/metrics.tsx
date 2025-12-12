'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/shared/animated-counter'
import { Clock, TrendingUp, Zap, Target } from 'lucide-react'

const metrics = [
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Always-On Automation',
    description: 'Your AI works around the clock',
  },
  {
    icon: TrendingUp,
    value: 50,
    suffix: '%+',
    label: 'Time Saved',
    description: 'On manual repetitive tasks',
  },
  {
    icon: Zap,
    value: 3,
    suffix: 'x',
    label: 'Faster Response',
    description: 'Customer query resolution',
  },
  {
    icon: Target,
    value: 100,
    suffix: '%',
    label: 'Lead Capture',
    description: 'Never miss an opportunity',
  },
]

export function Metrics() {
  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      {/* Animated Orbs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-accent-cyan/10 rounded-full blur-[100px]"
      />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-medium mb-4">
            By The Numbers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Real Results for <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            LIMITLESS AI&apos;s impact is quantified by our success metrics, showcasing the tangible benefits our AI solutions bring.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-8 text-center group hover:shadow-glow-purple transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl sm:text-5xl gradient-text mb-2">
                  <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-lg font-heading font-semibold text-white mb-2">
                  {metric.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted">{metric.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
