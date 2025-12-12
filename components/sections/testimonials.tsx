'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, BadgeCheck } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'

const testimonials = [
  {
    name: 'Dr. Marcus Chen',
    role: 'CEO & Founder',
    company: 'EdutechLabs Global',
    location: 'Singapore',
    content:
      'The consulting expertise from LIMITLESS AI was nothing short of exceptional. They didn\'t just implement solutions—they transformed our entire approach to educational technology. Their strategic insights helped us identify automation opportunities we never knew existed. Within three months, we scaled our operations across 12 countries. An absolute game-changer for global EdTech.',
    rating: 5,
  },
  {
    name: 'Yohannes Tadesse',
    role: 'Principal Architect',
    company: 'Architect Bureau',
    location: 'Addis Ababa, Ethiopia',
    content:
      'LIMITLESS AI understood the unique challenges of running an architecture firm in East Africa. Their intelligent systems now handle client communications, project scheduling, and follow-ups seamlessly. We\'ve seen a 200% increase in project inquiries and never miss an opportunity. They delivered world-class service that rivals anything I\'ve seen internationally.',
    rating: 5,
  },
  {
    name: 'Isabella Fernández',
    role: 'Operations Director',
    company: 'Pristine',
    location: 'Marbella, Spain',
    content:
      'Our administrative workload was drowning our team until LIMITLESS AI stepped in. They automated everything—scheduling, employee management, client communications, invoicing—the works. Our staff now focuses on delivering exceptional service instead of paperwork. It\'s like having an entire operations department working 24/7. Absolutely revolutionary for our business.',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />

      <div className="section-container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
            Trusted by <span style={{
              background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Businesses Worldwide</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-6">
            From Singapore to Ethiopia to Spain — businesses across the globe trust LIMITLESS AI to transform their operations.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-400">5.0 Average Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="hidden sm:flex items-center space-x-2">
              <BadgeCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400">100% Verified Reviews</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-8 md:p-12 relative">
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-8 right-8 w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                      boxShadow: '0 0 40px rgba(139, 92, 246, 0.15)',
                    }}
                    animate={{
                      boxShadow: [
                        '0 0 40px rgba(139, 92, 246, 0.15)',
                        '0 0 60px rgba(6, 182, 212, 0.2)',
                        '0 0 40px rgba(139, 92, 246, 0.15)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Quote className="w-10 h-10 text-purple-400/50" />
                  </motion.div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1.5 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1, type: 'spring', stiffness: 300 }}
                      >
                        <Star
                          className="w-6 h-6 text-yellow-400 fill-yellow-400"
                          style={{ filter: 'drop-shadow(0 0 6px rgba(250, 204, 21, 0.5))' }}
                        />
                      </motion.div>
                    ))}
                    <span className="ml-2 text-yellow-400/80 text-sm font-medium">5.0</span>
                    <div className="ml-4 flex items-center space-x-1 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      <BadgeCheck className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-xs font-medium">Verified Client</span>
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px]">
                      <div className="w-full h-full rounded-full bg-[#0f0f1a] flex items-center justify-center">
                        <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
                          {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials[currentIndex].role}, <span className="text-purple-400">{testimonials[currentIndex].company}</span>
                      </div>
                      <div className="text-gray-500 text-xs mt-0.5 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-gradient-primary'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
