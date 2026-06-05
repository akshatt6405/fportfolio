import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Akshat Singh | Developer & ML Enthusiast',
  description:
    'Portfolio of Akshat Singh, a Full Stack Developer, ML Enthusiast, and Competitive Programmer from SPIT Mumbai.',
  keywords: ['Akshat Singh', 'portfolio', 'developer', 'machine learning', 'SPIT'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
