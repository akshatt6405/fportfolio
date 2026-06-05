'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Trophy, ArrowUp, Mail } from 'lucide-react'

const socials = [
  { href: 'https://github.com/akshatt6405',                     icon: Github,   label: 'github' },
  { href: 'https://www.linkedin.com/in/akshat-singh-53782123a', icon: Linkedin, label: 'linkedin' },
  { href: 'https://leetcode.com/u/akshat__6405/',               icon: Code2,    label: 'leetcode' },
  { href: 'https://codeforces.com/profile/akshat_6405',         icon: Trophy,   label: 'codeforces' },
  { href: 'mailto:akshatisat@gmail.com',                        icon: Mail,     label: 'email' },
]

const navLinks = [
  { name: 'about',        href: '#about' },
  { name: 'skills',       href: '#skills' },
  { name: 'projects',     href: '#projects' },
  { name: 'hackathons',   href: '#hackathons' },
  { name: 'achievements', href: '#achievements' },
  { name: 'contact',      href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-canvas border-t border-black/8 px-8 md:px-20 pt-20 pb-8 overflow-hidden">
      <div className="absolute inset-0 term-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Oversized wordmark */}
        <div className="border-b border-black/8 pb-10 mb-12">
          <p className="mono font-medium tracking-tighter text-fg text-[clamp(2.5rem,12vw,9rem)] leading-none">
            akshat<span className="text-accent">.</span>singh
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-black/8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4 mono">
              <span className="text-accent text-sm">~/</span>
              <span className="font-medium text-base text-fg">akshat</span>
              <span className="text-accent animate-blink">_</span>
            </div>
            <p className="text-fg-soft text-sm leading-relaxed max-w-xs">
              Student at SPIT Mumbai, building clean software and solving real-world problems with code.
            </p>
            <p className="mono text-xs text-fg-faint mt-4">B.E. EXTC (Major) · CS (Minor)</p>
          </div>

          {/* Nav links */}
          <div>
            <p className="mono text-xs text-fg-faint mb-5">
              <span className="text-accent">$</span> ls ~/sections
            </p>
            <ul className="space-y-2.5">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href}
                    className="mono text-fg-soft hover:text-accent-bright text-sm transition-colors link-underline">
                    {link.name}/
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="mono text-xs text-fg-faint mb-5">
              <span className="text-accent">$</span> cat ~/.connect
            </p>
            <ul className="space-y-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 mono text-fg-soft hover:text-accent-bright transition-colors text-sm group">
                    <Icon size={15} />
                    <span className="link-underline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-6 flex items-center justify-between flex-wrap gap-4">
          <p className="mono text-xs text-fg-faint">
            <span className="text-accent">#</span> © {new Date().getFullYear()} Akshat Singh · built with Next.js
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 mono text-xs text-fg-soft hover:text-accent-bright transition-colors border border-black/12 hover:border-accent px-3 py-1.5">
            back_to_top <ArrowUp size={12} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
