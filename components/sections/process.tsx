'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'
import { useTranslations } from 'next-intl'

const stepIcons = [Search, Lightbulb, Rocket, TrendingUp]

export function Process() {
  const t = useTranslations('process')

  const steps = [
    { icon: stepIcons[0], title: t('steps.discovery.title'), description: t('steps.discovery.description') },
    { icon: stepIcons[1], title: t('steps.strategy.title'), description: t('steps.strategy.description') },
    { icon: stepIcons[2], title: t('steps.implementation.title'), description: t('steps.implementation.description') },
    { icon: stepIcons[3], title: t('steps.optimization.title'), description: t('steps.optimization.description') },
  ]

  return (
    <section className="section relative overflow-hidden bg-background-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern" />
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span> {t('titleEnd')}
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="glass-card p-8 h-full text-center group hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    {/* Number Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold shadow-glow-purple">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 mt-4 group-hover:border-accent-purple/50 transition-colors">
                      <Icon className="w-8 h-8 text-accent-purple" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-heading font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full text-accent-purple/50"
                      >
                        <path
                          d="M9 6l6 6-6 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
