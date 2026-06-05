'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'about',        href: '#about',        idx: '01' },
  { name: 'skills',       href: '#skills',       idx: '02' },
  { name: 'projects',     href: '#projects',     idx: '03' },
  { name: 'hackathons',   href: '#hackathons',   idx: '04' },
  { name: 'achievements', href: '#achievements', idx: '05' },
  { name: 'contact',      href: '#contact',      idx: '06' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-canvas/80 backdrop-blur-xl border-b border-black/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group mono">
          <span className="text-accent text-sm">~/</span>
          <span className="text-fg font-medium text-sm tracking-tight group-hover:text-accent-bright transition-colors">
            akshat
          </span>
          <span className="text-accent animate-blink">_</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-baseline gap-1.5 mono text-sm text-fg-soft hover:text-fg transition-colors"
            >
              <span className="text-[0.6rem] text-accent opacity-70">{link.idx}</span>
              <span className="link-underline">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden w-9 h-9 flex items-center justify-center border border-black/15 text-fg hover:border-accent hover:text-accent transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-canvas/95 backdrop-blur-xl border-b border-black/8 overflow-hidden"
          >
            <div className="px-8 py-3 flex flex-col">
              {links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-3 mono text-sm text-fg-soft hover:text-accent-bright border-b border-black/5 last:border-0 transition-colors"
                >
                  <span className="text-[0.6rem] text-accent">{link.idx}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
