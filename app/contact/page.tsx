'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Clock, MessageSquare, ArrowRight } from 'lucide-react'
import { ContactForm } from '@/components/shared/contact-form'
import { GlassCard } from '@/components/shared/glass-card'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Support@limitlessai.online',
    href: 'mailto:Support@limitlessai.online',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '1B Halford St, Leicester LE1 1JA, UK',
    href: 'https://maps.google.com/?q=1B+Halford+St,+Leicester+LE1+1JA,+UK',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
  },
]

const benefits = [
  {
    icon: MessageSquare,
    title: 'Free Consultation',
    description: 'Book a no-obligation call to discuss your automation needs',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Get your custom solution up and running in weeks, not months',
  },
  {
    icon: Phone,
    title: 'Ongoing Support',
    description: 'Continuous optimization and support after launch',
  },
]

export default function ContactPage() {
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
              Get Started
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              Let&apos;s Start Your
              <br />
              <span className="gradient-text">Automation Journey</span>
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge AI solutions? Reach out today and let&apos;s start a journey towards innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon
                    const content = (
                      <GlassCard
                        hover
                        className="p-6 flex items-center space-x-4"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-muted mb-1">{item.label}</div>
                          <div className="text-white font-medium">{item.value}</div>
                        </div>
                      </GlassCard>
                    )

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    )
                  })}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-xl font-heading font-bold text-white mb-6">
                  Why Work With Us?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent-purple" />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-muted text-sm">{benefit.description}</p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Social Proof */}
              <GlassCard className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center"
                      >
                        <span className="text-white text-sm font-bold">
                          {String.fromCharCode(65 + i)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Trusted by UK Businesses
                    </div>
                    <div className="text-muted text-sm">
                      Join businesses already saving time with AI
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
