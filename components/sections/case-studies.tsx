'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Globe, Workflow, Phone } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

const caseStudyIcons = [MessageSquare, Globe, Workflow, Phone]
const caseStudyGradients = [
  'from-accent-purple to-accent-cyan',
  'from-accent-cyan to-accent-blue',
  'from-accent-blue to-accent-purple',
  'from-accent-purple to-accent-blue',
]

export function CaseStudies() {
  const t = useTranslations('caseStudies')

  const caseStudies = [
    {
      icon: caseStudyIcons[0],
      category: t('items.chatbot.category'),
      title: t('items.chatbot.title'),
      description: t('items.chatbot.description'),
      result: t('items.chatbot.result'),
      gradient: caseStudyGradients[0],
    },
    {
      icon: caseStudyIcons[1],
      category: t('items.website.category'),
      title: t('items.website.title'),
      description: t('items.website.description'),
      result: t('items.website.result'),
      gradient: caseStudyGradients[1],
    },
    {
      icon: caseStudyIcons[2],
      category: t('items.automation.category'),
      title: t('items.automation.title'),
      description: t('items.automation.description'),
      result: t('items.automation.result'),
      gradient: caseStudyGradients[2],
    },
    {
      icon: caseStudyIcons[3],
      category: t('items.receptionist.category'),
      title: t('items.receptionist.title'),
      description: t('items.receptionist.description'),
      result: t('items.receptionist.result'),
      gradient: caseStudyGradients[3],
    },
  ]

  return (
    <section className="section relative overflow-hidden bg-background-secondary">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-purple/10 border border-accent-purple/20 text-accent-purple text-sm font-medium mb-4">
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  hover
                  glow="purple"
                  className="h-full p-8 group cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent border border-white/10`}
                    >
                      {study.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-heading font-bold text-white mb-3">
                    {study.title}
                  </h3>
                  <p className="text-muted mb-6 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Result Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                      <span className="text-sm text-accent-cyan font-medium">
                        {study.result}
                      </span>
                    </div>
                    <div className="flex items-center text-white font-medium text-sm group-hover:text-accent-purple transition-colors">
                      {t('viewCaseStudy')}
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/case-studies" className="btn-secondary">
            {t('viewAll')}
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
