'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { GlassCard } from '@/components/shared/glass-card'

const testimonials = [
  {
    name: 'Cameron Murrell',
    role: 'CEO',
    company: 'TLG',
    content:
      'LIMITLESS AI transformed our customer service operations. Their AI chatbot handles 80% of our enquiries automatically, freeing up our team to focus on what matters most. The results exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Operations Director',
    company: 'Growth Labs',
    content:
      'The automation systems they built for us have saved countless hours every week. Our workflows are smoother, errors are down, and our team is more productive than ever. Highly recommend their services.',
    rating: 5,
  },
  {
    name: 'James Harrison',
    role: 'Founder',
    company: 'Digital First Agency',
    content:
      'Working with LIMITLESS AI was a game-changer. Their AI receptionist never misses a lead, and the integration with our existing systems was seamless. Professional team that delivers results.',
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Our clients share their experiences of working with LIMITLESS AI and how our solutions have positively impacted their businesses.
          </p>
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
                  <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center opacity-20">
                    <Quote className="w-8 h-8 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-muted text-sm">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
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
