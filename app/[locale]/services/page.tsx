'use client'

import { motion } from 'framer-motion'
import { Workflow, MessageSquareMore, Globe, Phone, Check, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'
import { CTA } from '@/components/sections/cta'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const serviceIcons = [Workflow, MessageSquareMore, Globe, Phone]
const serviceStyles = [
  { gradient: 'from-accent-purple to-accent-blue', glow: 'purple' as const },
  { gradient: 'from-accent-cyan to-accent-purple', glow: 'cyan' as const },
  { gradient: 'from-accent-blue to-accent-cyan', glow: 'blue' as const },
  { gradient: 'from-accent-purple to-accent-cyan', glow: 'purple' as const },
]

export default function ServicesPage() {
  const t = useTranslations('servicesPage')

  const services = [
    {
      icon: serviceIcons[0],
      title: t('systemAutomation.title'),
      tagline: t('systemAutomation.tagline'),
      description: t('systemAutomation.description'),
      longDescription: t('systemAutomation.longDescription'),
      features: [
        t('systemAutomation.features.0'),
        t('systemAutomation.features.1'),
        t('systemAutomation.features.2'),
        t('systemAutomation.features.3'),
        t('systemAutomation.features.4'),
        t('systemAutomation.features.5'),
      ],
      ...serviceStyles[0],
    },
    {
      icon: serviceIcons[1],
      title: t('chatbot.title'),
      tagline: t('chatbot.tagline'),
      description: t('chatbot.description'),
      longDescription: t('chatbot.longDescription'),
      features: [
        t('chatbot.features.0'),
        t('chatbot.features.1'),
        t('chatbot.features.2'),
        t('chatbot.features.3'),
        t('chatbot.features.4'),
        t('chatbot.features.5'),
      ],
      ...serviceStyles[1],
    },
    {
      icon: serviceIcons[2],
      title: t('website.title'),
      tagline: t('website.tagline'),
      description: t('website.description'),
      longDescription: t('website.longDescription'),
      features: [
        t('website.features.0'),
        t('website.features.1'),
        t('website.features.2'),
        t('website.features.3'),
        t('website.features.4'),
        t('website.features.5'),
      ],
      ...serviceStyles[2],
    },
    {
      icon: serviceIcons[3],
      title: t('receptionist.title'),
      tagline: t('receptionist.tagline'),
      description: t('receptionist.description'),
      longDescription: t('receptionist.longDescription'),
      features: [
        t('receptionist.features.0'),
        t('receptionist.features.1'),
        t('receptionist.features.2'),
        t('receptionist.features.3'),
        t('receptionist.features.4'),
        t('receptionist.features.5'),
      ],
      ...serviceStyles[3],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-medium mb-6">
              {t('badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              {t('title')}
              <br />
              <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-2">
                      {service.title}
                    </h2>
                    <p
                      className={`text-lg font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-4`}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-muted mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <p className="text-muted mb-8 leading-relaxed">
                      {service.longDescription}
                    </p>
                    <Link href="/contact" className="btn-primary inline-flex">
                      {t('getStarted')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features Card */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <GlassCard glow={service.glow} className="p-8">
                      <h3 className="text-xl font-heading font-semibold text-white mb-6">
                        {t('keyFeatures')}
                      </h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center space-x-3"
                          >
                            <div
                              className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}
                            >
                              <Check className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-white">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </>
  )
}
