'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Globe, Workflow, Phone, ArrowRight, TrendingUp } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'
import { CTA } from '@/components/sections/cta'
import { useTranslations } from 'next-intl'

const caseStudyIcons = [MessageSquare, Globe, Workflow, Phone]
const caseStudyGradients = [
  'from-accent-purple to-accent-cyan',
  'from-accent-cyan to-accent-blue',
  'from-accent-blue to-accent-purple',
  'from-accent-purple to-accent-blue',
]

export default function CaseStudiesPage() {
  const t = useTranslations('caseStudiesPage')

  const caseStudies = [
    {
      icon: caseStudyIcons[0],
      category: t('items.chatbot.category'),
      title: t('items.chatbot.title'),
      client: t('items.chatbot.client'),
      challenge: t('items.chatbot.challenge'),
      solution: t('items.chatbot.solution'),
      results: [
        { label: t('items.chatbot.results.responseTime.label'), value: t('items.chatbot.results.responseTime.value'), description: t('items.chatbot.results.responseTime.description') },
        { label: t('items.chatbot.results.satisfaction.label'), value: t('items.chatbot.results.satisfaction.value'), description: t('items.chatbot.results.satisfaction.description') },
        { label: t('items.chatbot.results.conversion.label'), value: t('items.chatbot.results.conversion.value'), description: t('items.chatbot.results.conversion.description') },
      ],
      gradient: caseStudyGradients[0],
    },
    {
      icon: caseStudyIcons[1],
      category: t('items.website.category'),
      title: t('items.website.title'),
      client: t('items.website.client'),
      challenge: t('items.website.challenge'),
      solution: t('items.website.solution'),
      results: [
        { label: t('items.website.results.traffic.label'), value: t('items.website.results.traffic.value'), description: t('items.website.results.traffic.description') },
        { label: t('items.website.results.leads.label'), value: t('items.website.results.leads.value'), description: t('items.website.results.leads.description') },
        { label: t('items.website.results.pageLoad.label'), value: t('items.website.results.pageLoad.value'), description: t('items.website.results.pageLoad.description') },
      ],
      gradient: caseStudyGradients[1],
    },
    {
      icon: caseStudyIcons[2],
      category: t('items.automation.category'),
      title: t('items.automation.title'),
      client: t('items.automation.client'),
      challenge: t('items.automation.challenge'),
      solution: t('items.automation.solution'),
      results: [
        { label: t('items.automation.results.timeSaved.label'), value: t('items.automation.results.timeSaved.value'), description: t('items.automation.results.timeSaved.description') },
        { label: t('items.automation.results.errorRate.label'), value: t('items.automation.results.errorRate.value'), description: t('items.automation.results.errorRate.description') },
        { label: t('items.automation.results.capacity.label'), value: t('items.automation.results.capacity.value'), description: t('items.automation.results.capacity.description') },
      ],
      gradient: caseStudyGradients[2],
    },
    {
      icon: caseStudyIcons[3],
      category: t('items.receptionist.category'),
      title: t('items.receptionist.title'),
      client: t('items.receptionist.client'),
      challenge: t('items.receptionist.challenge'),
      solution: t('items.receptionist.solution'),
      results: [
        { label: t('items.receptionist.results.callHandling.label'), value: t('items.receptionist.results.callHandling.value'), description: t('items.receptionist.results.callHandling.description') },
        { label: t('items.receptionist.results.bookings.label'), value: t('items.receptionist.results.bookings.value'), description: t('items.receptionist.results.bookings.description') },
        { label: t('items.receptionist.results.afterHours.label'), value: t('items.receptionist.results.afterHours.value'), description: t('items.receptionist.results.afterHours.description') },
      ],
      gradient: caseStudyGradients[3],
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-6">
              {t('badge')}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              {t('title')} <span className="gradient-text">{t('titleHighlight')}</span>
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              {t('subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const Icon = study.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <GlassCard className="p-8 md:p-12 overflow-hidden relative">
                    {/* Background Gradient */}
                    <div
                      className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${study.gradient} opacity-5 blur-3xl`}
                    />

                    <div className="relative">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                        <div className="flex items-center space-x-4 mb-4 md:mb-0">
                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${study.gradient} flex items-center justify-center`}
                          >
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <span
                              className={`text-sm font-medium bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}
                            >
                              {study.category}
                            </span>
                            <h2 className="text-2xl font-heading font-bold text-white">
                              {study.title}
                            </h2>
                          </div>
                        </div>
                        <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-muted text-sm">
                          {study.client}
                        </span>
                      </div>

                      {/* Content Grid */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                            {t('theChallenge')}
                          </h3>
                          <p className="text-muted leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-accent-cyan mr-2" />
                            {t('ourSolution')}
                          </h3>
                          <p className="text-muted leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="border-t border-white/10 pt-8">
                        <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-accent-purple" />
                          {t('resultsAchieved')}
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                          {study.results.map((result, i) => (
                            <div key={i} className="text-center p-4 rounded-xl bg-white/5">
                              <div
                                className={`text-3xl font-heading font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent mb-1`}
                              >
                                {result.value}
                              </div>
                              <div className="text-white font-medium text-sm mb-1">
                                {result.label}
                              </div>
                              <div className="text-muted text-xs">{result.description}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
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
