'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Workflow, MessageSquareMore, Globe, Phone, ArrowRight } from 'lucide-react'
import { HoverCard } from '@/components/shared/hover-card'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/shared/scroll-reveal'

const services = [
  {
    icon: Workflow,
    title: 'System Automations',
    tagline: 'Your business on autopilot',
    description:
      'Transform the way your business operates with intelligent automation. We create seamless AI-powered workflows that eliminate manual tasks.',
    features: ['CRM Syncing', 'Automated Follow-ups', 'Process Integration'],
    gradient: 'from-purple-500 to-blue-500',
    glowColor: 'rgba(139, 92, 246, 0.15)',
  },
  {
    icon: MessageSquareMore,
    title: 'Intelligent Chatbots',
    tagline: '24/7 conversations that convert',
    description:
      'AI-powered chatbots that work around the clock. Instantly answer questions, qualify leads, and book appointments.',
    features: ['Lead Qualification', 'Appointment Booking', '24/7 Support'],
    gradient: 'from-cyan-500 to-purple-500',
    glowColor: 'rgba(6, 182, 212, 0.15)',
  },
  {
    icon: Globe,
    title: 'Website Design',
    tagline: 'Digital presence that dominates',
    description:
      'Modern, high-converting websites designed for performance. Clean, fast, mobile-responsive sites that turn visitors into customers.',
    features: ['Mobile Responsive', 'SEO Optimized', 'High Converting'],
    gradient: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
  },
  {
    icon: Phone,
    title: 'AI Receptionist',
    tagline: 'Never miss another opportunity',
    description:
      'Our AI Receptionist handles enquiries, books appointments, responds instantly, and manages follow-ups 24/7.',
    features: ['Call Handling', 'Instant Responses', 'Smart Routing'],
    gradient: 'from-purple-500 to-cyan-500',
    glowColor: 'rgba(139, 92, 246, 0.15)',
  },
]

export function Services() {
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
            Our Services
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}
          >
            Intelligent Solutions for{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Modern Business
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We build the tools that help your business save time, reduce costs, and scale with confidence.
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
                        Learn More
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
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
