'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export function CTA() {
  const t = useTranslations('cta')

  return (
    <section className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent-purple/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-accent-cyan/20 rounded-full blur-[100px]"
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-primary opacity-10 blur-2xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent-cyan/30 blur-3xl" />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-primary/20 border border-accent-purple/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span className="text-sm text-white font-medium">
              {t('badge')}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6"
          >
            {t('title')}
            <br />
            <span className="gradient-text">{t('titleHighlight')}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted max-w-2xl mx-auto mb-10"
          >
            {t('description')}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact" className="btn-primary group">
              {t('bookCall')}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="btn-secondary">
              {t('exploreServices')}
            </Link>
          </motion.div>

          {/* Trust Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <p className="text-sm text-muted mb-4">{t('trustedBy')}</p>
            <div className="flex items-center justify-center space-x-8 opacity-50">
              {[1, 2, 3, 4].map((_, i) => (
                <div
                  key={i}
                  className="w-24 h-8 bg-white/10 rounded"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
