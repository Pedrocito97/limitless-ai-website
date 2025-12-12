'use client'

import { motion } from 'framer-motion'
import { Workflow, MessageSquareMore, Globe, Phone, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { GlassCard } from '@/components/shared/glass-card'
import { CTA } from '@/components/sections/cta'

const services = [
  {
    icon: Workflow,
    title: 'System Automation',
    tagline: 'Your business on autopilot',
    description:
      'Transform the way your business operates with intelligent automation. We map out your processes, integrate your tools, and create seamless AI-powered workflows that eliminate manual tasks, reduce errors, and save hours every day.',
    longDescription:
      'From CRM syncing to automated follow-ups and internal operations, we build systems that help your business run smoother, faster, and more efficiently on autopilot.',
    features: [
      'Workflow mapping and optimization',
      'CRM and tool integration',
      'Automated follow-up sequences',
      'Error reduction and quality control',
      'Real-time data syncing',
      'Custom trigger-based actions',
    ],
    gradient: 'from-accent-purple to-accent-blue',
    glow: 'purple' as const,
  },
  {
    icon: MessageSquareMore,
    title: 'Intelligent Chatbot',
    tagline: '24/7 conversations that convert',
    description:
      'Bring your customer experience into the future with AI-powered chatbots that work 24/7. Our intelligent chatbots instantly answer questions, qualify leads, book appointments, and provide personalised support without the need for human intervention.',
    longDescription:
      'Designed to integrate seamlessly with your website and CRM, they help you convert more visitors, reduce response times, and automate customer service at scale.',
    features: [
      '24/7 instant customer responses',
      'Intelligent lead qualification',
      'Automated appointment booking',
      'Personalized conversation flows',
      'CRM and calendar integration',
      'Multi-language support',
    ],
    gradient: 'from-accent-cyan to-accent-purple',
    glow: 'cyan' as const,
  },
  {
    icon: Globe,
    title: 'Website Design',
    tagline: 'Digital presence that dominates',
    description:
      'Create a powerful online presence with modern, high-converting websites designed for performance and growth. We build clean, fast, mobile-responsive sites that reflect your brand and turn visitors into customers.',
    longDescription:
      'From smart layouts to seamless user experiences, every page is crafted with purpose — helping your business stand out, build trust, and drive results.',
    features: [
      'Modern, responsive design',
      'SEO optimization built-in',
      'High-speed performance',
      'Conversion-focused layouts',
      'Brand-aligned aesthetics',
      'Analytics integration',
    ],
    gradient: 'from-accent-blue to-accent-cyan',
    glow: 'blue' as const,
  },
  {
    icon: Phone,
    title: 'AI Receptionist',
    tagline: 'Never miss another opportunity',
    description:
      'Never miss a customer, call, or opportunity again. Our AI Receptionist handles enquiries, books appointments, responds instantly to messages, and manages follow-ups 24/7.',
    longDescription:
      'It greets your customers, answers common questions, and directs people to the right place, all while integrating seamlessly with your existing systems. Faster responses, better service, and more conversions — all on autopilot.',
    features: [
      '24/7 call and message handling',
      'Intelligent enquiry routing',
      'Automated appointment scheduling',
      'Follow-up management',
      'CRM and calendar sync',
      'Custom voice and personality',
    ],
    gradient: 'from-accent-purple to-accent-cyan',
    glow: 'purple' as const,
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Intelligent Solutions for
              <br />
              <span className="gradient-text">Modern Business</span>
            </h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              At Limitless AI, we help businesses grow faster by turning manual work into fully automated, intelligent systems. Our services are designed to streamline operations, boost customer engagement, and create a smarter, more efficient workflow across your entire business.
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
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>

                  {/* Features Card */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <GlassCard glow={service.glow} className="p-8">
                      <h3 className="text-xl font-heading font-semibold text-white mb-6">
                        Key Features
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
