'use client'

import { motion } from 'framer-motion'
import { MessageSquare, Globe, Workflow, Phone, ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '@/components/shared/glass-card'
import { CTA } from '@/components/sections/cta'

const caseStudies = [
  {
    icon: MessageSquare,
    category: 'Chatbot Development',
    title: 'Revolutionizing Customer Interactions',
    client: 'E-commerce Platform',
    challenge:
      'A growing e-commerce business was struggling to handle increasing customer enquiries, leading to slow response times and lost sales opportunities.',
    solution:
      'We implemented an AI-powered chatbot that handles product inquiries, order tracking, returns, and FAQs 24/7. The chatbot integrates with their inventory system for real-time product availability.',
    results: [
      { label: 'Response Time', value: '70%', description: 'reduction in average response time' },
      { label: 'Customer Satisfaction', value: '45%', description: 'increase in CSAT scores' },
      { label: 'Sales Conversion', value: '25%', description: 'increase in chat-to-sale conversion' },
    ],
    gradient: 'from-accent-purple to-accent-cyan',
  },
  {
    icon: Globe,
    category: 'Website Creation',
    title: 'Digital Presence Reinvented',
    client: 'Professional Services Firm',
    challenge:
      'An established consultancy firm had an outdated website that wasn\'t generating leads or reflecting their expertise in the market.',
    solution:
      'We designed and built a modern, SEO-optimized website with a focus on lead generation. Features include case study showcases, service pages, and integrated booking system.',
    results: [
      { label: 'Organic Traffic', value: '3x', description: 'increase in monthly visitors' },
      { label: 'Lead Generation', value: '200%', description: 'more enquiries per month' },
      { label: 'Page Load', value: '<2s', description: 'average page load time' },
    ],
    gradient: 'from-accent-cyan to-accent-blue',
  },
  {
    icon: Workflow,
    category: 'Automation Services',
    title: 'Efficiency Redefined',
    client: 'Marketing Agency',
    challenge:
      'A marketing agency was spending too much time on manual data entry, client reporting, and project management tasks, limiting their growth capacity.',
    solution:
      'We automated their entire workflow: from client onboarding to reporting. Systems now auto-update CRM records, generate reports, and trigger notifications at key milestones.',
    results: [
      { label: 'Time Saved', value: '50%', description: 'reduction in admin tasks' },
      { label: 'Error Rate', value: '90%', description: 'fewer data entry errors' },
      { label: 'Client Capacity', value: '40%', description: 'more clients handled' },
    ],
    gradient: 'from-accent-blue to-accent-purple',
  },
  {
    icon: Phone,
    category: 'AI Receptionist',
    title: 'Never Miss Another Lead',
    client: 'Healthcare Clinic',
    challenge:
      'A busy medical clinic was missing calls during peak hours and after-hours, resulting in lost appointment bookings and frustrated patients.',
    solution:
      'We deployed an AI Receptionist that handles calls 24/7, books appointments directly into their system, answers common questions, and escalates urgent matters appropriately.',
    results: [
      { label: 'Call Handling', value: '100%', description: 'of calls answered' },
      { label: 'Bookings', value: '35%', description: 'increase in appointments' },
      { label: 'After-Hours', value: '24/7', description: 'availability achieved' },
    ],
    gradient: 'from-accent-purple to-accent-blue',
  },
]

export default function CaseStudiesPage() {
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
              Success Stories
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Client <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Discover how LIMITLESS AI has transformed businesses with our innovative solutions. Each case study showcases our expertise in AI integration and system automation.
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
                            The Challenge
                          </h3>
                          <p className="text-muted leading-relaxed">{study.challenge}</p>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                            <span className="w-2 h-2 rounded-full bg-accent-cyan mr-2" />
                            Our Solution
                          </h3>
                          <p className="text-muted leading-relaxed">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="border-t border-white/10 pt-8">
                        <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-accent-purple" />
                          Results Achieved
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
