'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageSquare, Globe, Workflow, Phone } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'

const caseStudies = [
  {
    icon: MessageSquare,
    category: 'Chatbot Development',
    title: 'Revolutionizing Interactions',
    description:
      'Explore how our chatbot development services have revolutionized customer interactions, providing seamless experiences and efficient communication.',
    result: '70% reduction in response time',
    gradient: 'from-accent-purple to-accent-cyan',
  },
  {
    icon: Globe,
    category: 'Website Creation',
    title: 'Digital Presence Reinvented',
    description:
      'Learn about our responsive website creation process that focuses on creating engaging, SEO-friendly websites optimized for success.',
    result: '3x increase in conversions',
    gradient: 'from-accent-cyan to-accent-blue',
  },
  {
    icon: Workflow,
    category: 'Automation Services',
    title: 'Efficiency Redefined',
    description:
      'Experience the power of automation with our system integration services that streamline processes, reduce errors, and increase productivity.',
    result: '50% time saved daily',
    gradient: 'from-accent-blue to-accent-purple',
  },
  {
    icon: Phone,
    category: 'AI Receptionist',
    title: 'Tailored to You',
    description:
      'AI Receptionist handles enquiries, books appointments, responds instantly, and manages follow-ups 24/7 while integrating with your existing systems.',
    result: '100% lead capture rate',
    gradient: 'from-accent-purple to-accent-blue',
  },
]

export function CaseStudies() {
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
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Client <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Discover how LIMITLESS AI has transformed businesses with our innovative solutions.
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
                      View Case Study
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
            View All Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
