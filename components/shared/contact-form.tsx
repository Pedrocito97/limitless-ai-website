'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle } from 'lucide-react'
import { GlassCard } from './glass-card'
import { useTranslations } from 'next-intl'

export function ContactForm() {
  const t = useTranslations('contactForm')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <GlassCard className="p-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center"
        >
          <CheckCircle className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-heading font-bold text-white mb-2">
          {t('success.title')}
        </h3>
        <p className="text-muted">
          {t('success.message')}
        </p>
      </GlassCard>
    )
  }

  return (
    <GlassCard className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white mb-2"
            >
              {t('firstName')} <span className="text-accent-purple">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-purple transition-colors"
              placeholder={t('placeholders.firstName')}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white mb-2"
            >
              {t('lastName')}
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-purple transition-colors"
              placeholder={t('placeholders.lastName')}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            {t('email')} <span className="text-accent-purple">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-purple transition-colors"
            placeholder={t('placeholders.email')}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white mb-2"
          >
            {t('phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-purple transition-colors"
            placeholder={t('placeholders.phone')}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            {t('message')} <span className="text-accent-purple">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-accent-purple transition-colors resize-none"
            placeholder={t('placeholders.message')}
          />
        </div>

        <motion.button
          type="submit"
          disabled={isLoading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {t('sending')}
            </span>
          ) : (
            <span className="flex items-center justify-center">
              {t('send')}
              <Send className="ml-2 w-4 h-4" />
            </span>
          )}
        </motion.button>
      </form>
    </GlassCard>
  )
}
