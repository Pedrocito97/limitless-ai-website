import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { Process } from '@/components/sections/process'
import { Metrics } from '@/components/sections/metrics'
import { CaseStudies } from '@/components/sections/case-studies'
import { Testimonials } from '@/components/sections/testimonials'
import { CTA } from '@/components/sections/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Metrics />
      <CaseStudies />
      <Testimonials />
      <CTA />
    </>
  )
}
