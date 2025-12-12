'use client'

import { motion } from 'framer-motion'
import { Workflow, MessageSquareMore, Globe, Phone, ArrowRight } from 'lucide-react'
import { HoverCard } from '@/components/shared/hover-card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/scroll-reveal'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const serviceIcons = [Workflow, MessageSquareMore, Globe, Phone]
const serviceGradients = [
  { gradient: 'from-purple-500 to-blue-500', glowColor: 'rgba(139, 92, 246, 0.15)' },
  { gradient: 'from-cyan-500 to-purple-500', glowColor: 'rgba(6, 182, 212, 0.15)' },
  { gradient: 'from-blue-500 to-cyan-500', glowColor: 'rgba(59, 130, 246, 0.15)' },
  { gradient: 'from-purple-500 to-cyan-500', glowColor: 'rgba(139, 92, 246, 0.15)' },
]

export function Services() {
  const t = useTranslations('services')

  const services = [
    {
      icon: serviceIcons[0],
      title: t('systemAutomation.title'),
      tagline: t('systemAutomation.tagline'),
      description: t('systemAutomation.description'),
      features: [t('systemAutomation.features.0'), t('systemAutomation.features.1'), t('systemAutomation.features.2')],
      ...serviceGradients[0],
    },
    {
      icon: serviceIcons[1],
      title: t('chatbot.title'),
      tagline: t('chatbot.tagline'),
      description: t('chatbot.description'),
      features: [t('chatbot.features.0'), t('chatbot.features.1'), t('chatbot.features.2')],
      ...serviceGradients[1],
    },
    {
      icon: serviceIcons[2],
      title: t('website.title'),
      tagline: t('website.tagline'),
      description: t('website.description'),
      features: [t('website.features.0'), t('website.features.1'), t('website.features.2')],
      ...serviceGradients[2],
    },
    {
      icon: serviceIcons[3],
      title: t('receptionist.title'),
      tagline: t('receptionist.tagline'),
      description: t('receptionist.description'),
      features: [t('receptionist.features.0'), t('receptionist.features.1'), t('receptionist.features.2')],
      ...serviceGradients[3],
    },
  ]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(at 20% 80%, rgba(139, 92, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 20%, rgba(6, 182, 212, 0.1) 0px, transparent 50%)
          `,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
          >
            {t('title')}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </ScrollReveal>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.1}>
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <StaggerItem key={index}>
                <HoverCard className="h-full" glowColor={service.glowColor}>
                  <div className="p-8 h-full">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                      style={{ boxShadow: `0 0 30px ${service.glowColor}` }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Content */}
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-sm font-medium mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${service.gradient.includes('purple') ? '#a855f7' : '#06b6d4'}, ${service.gradient.includes('cyan') ? '#06b6d4' : '#3b82f6'})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.map((feature, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20 transition-colors"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href="/services"
                      className="inline-flex items-center text-white font-medium group"
                    >
                      <span className="relative">
                        {t('learnMore')}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
              boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)',
            }}
          >
            {t('viewAll')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
