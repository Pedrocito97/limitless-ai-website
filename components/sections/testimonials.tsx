'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, BadgeCheck } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'
import { useTranslations } from 'next-intl'

export function Testimonials() {
  const t = useTranslations('testimonials')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const testimonials = [
    {
      company: t('items.edutechLabs.company'),
      location: t('items.edutechLabs.location'),
      content: t('items.edutechLabs.content'),
      rating: 5,
    },
    {
      company: t('items.architectBureau.company'),
      location: t('items.architectBureau.location'),
      content: t('items.architectBureau.content'),
      rating: 5,
    },
    {
      company: t('items.pristine.company'),
      location: t('items.pristine.location'),
      content: t('items.pristine.content'),
      rating: 5,
    },
  ]

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      next()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, next])

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
            {t('badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
            {t('title')} <span style={{
              background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>{t('titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-6">
            {t('subtitle')}
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-400">{t('averageRating')}</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="hidden sm:flex items-center space-x-2">
              <BadgeCheck className="w-4 h-4 text-cyan-400" />
              <span className="text-gray-400">{t('verifiedReviews')}</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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
                      <span className="text-cyan-400 text-xs font-medium">{t('verifiedClient')}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Company */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px]">
                      <div className="w-full h-full rounded-xl bg-[#0f0f1a] flex items-center justify-center">
                        <span className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
                          {testimonials[currentIndex].company.split(' ').map(n => n[0]).join('').slice(0, 2)}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif' }}>
                        {testimonials[currentIndex].company}
                      </div>
                      <div className="text-gray-500 text-sm flex items-center">
                        <svg className="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
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

              {/* Dots with Progress */}
              <div className="flex items-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-2 rounded-full transition-all overflow-hidden ${
                      index === currentIndex ? 'w-10 bg-white/10' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                  >
                    {index === currentIndex && (
                      <motion.div
                        key={currentIndex}
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}
                        initial={{ width: '0%' }}
                        animate={{ width: isPaused ? undefined : '100%' }}
                        transition={{ duration: 6, ease: 'linear' }}
                      />
                    )}
                  </button>
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
