'use client'

import { motion } from 'framer-motion'
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description:
      'We start by understanding your business challenges, goals, and current workflows to identify the best automation opportunities.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description:
      'We design a custom AI solution tailored to your specific needs, outlining the tools, integrations, and workflows required.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implementation',
    description:
      'Our team builds and deploys your automation systems with careful testing to ensure everything works seamlessly.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Optimization',
    description:
      'We continuously monitor, refine, and optimize your systems to deliver the best results and ROI over time.',
  },
]

export function Process() {
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
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            How We <span className="gradient-text">Transform</span> Your Business
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            A proven methodology to deliver exceptional AI automation solutions that drive real results.
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
