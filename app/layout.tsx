import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'LIMITLESS AI | Smart AI Solutions That Power the Future of Business',
  description: 'Transform your business with intelligent automation. We create high-performance chatbots, AI receptionists, smart automations, and premium websites that make your business faster, sharper, and more profitable.',
  keywords: ['AI automation', 'chatbots', 'AI receptionist', 'business automation', 'workflow automation', 'Leicester UK'],
  authors: [{ name: 'LIMITLESS AI' }],
  openGraph: {
    title: 'LIMITLESS AI | Automate. Integrate. Elevate.',
    description: 'Smart AI Solutions That Power the Future of Business. Transform your operations with intelligent automation.',
    url: 'https://limitlessai.online',
    siteName: 'LIMITLESS AI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LIMITLESS AI | Automate. Integrate. Elevate.',
    description: 'Smart AI Solutions That Power the Future of Business.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
