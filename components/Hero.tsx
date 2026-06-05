'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Code2, Trophy, FileText, ArrowDown } from 'lucide-react'

const roles = ['Full Stack Developer', 'ML Enthusiast', 'DSA Problem Solver', 'Software Developer']

function useTypewriter(words: string[]) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    const timeout = deleting ? 45 : 95
    const timer = setTimeout(() => {
      if (!deleting && text === word) { setTimeout(() => setDeleting(true), 2000); return }
      if (deleting && text === '') { setDeleting(false); setWordIndex(i => i + 1); return }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, timeout)
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  return text
}

const socials = [
  { label: 'github',     href: 'https://github.com/akshatt6405',                     icon: Github },
  { label: 'linkedin',   href: 'https://www.linkedin.com/in/akshat-singh-53782123a', icon: Linkedin },
  { label: 'leetcode',   href: 'https://leetcode.com/u/akshat__6405/',               icon: Code2 },
  { label: 'codeforces', href: 'https://codeforces.com/profile/akshat_6405',         icon: Trophy },
]

// neofetch-style key/values
const info: [string, string][] = [
  ['role',      'Full Stack Dev / ML'],
  ['education', 'B.E. EXTC, CS minor'],
  ['institute', 'SPIT, Mumbai'],
  ['focus',     'ML · DSA · Web'],
  ['status',    'available for work'],
]

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section className="relative min-h-screen flex flex-col bg-canvas overflow-hidden">
      <div className="absolute inset-0 term-grid pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-[70vh] glow pointer-events-none" />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl w-full mx-auto px-8 md:px-20 pt-32 pb-10">
        <div className="grid lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
          {/* Left — identity */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mono text-sm text-fg-faint mb-8 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse-glow" />
              <span className="text-accent">$</span>
              <span>./portfolio --launch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mono font-medium tracking-tighter text-fg text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.95]"
            >
              Akshat
              <br />
              <span className="text-accent">Singh</span>
              <span className="text-accent animate-blink">_</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mono text-lg md:text-xl text-fg-soft mt-7 flex items-center gap-2"
            >
              <span className="text-accent-bright">&gt;</span>
              <span className="text-fg">{role}</span>
              <span className="inline-block w-2.5 h-5 bg-accent animate-blink" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-fg-soft text-base max-w-md leading-relaxed mt-6"
            >
              Building clean, efficient, and scalable software. Passionate about ML, DSA, and
              shipping great products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex flex-wrap gap-3 mt-9"
            >
              <a href="#projects" className="btn-accent mono px-6 py-3 text-sm flex items-center gap-2 group">
                view_projects
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="btn-line mono px-6 py-3 text-sm flex items-center gap-2">
                <FileText size={14} /> resume
              </a>
              <a href="#contact" className="btn-line mono px-6 py-3 text-sm">
                contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex items-center gap-6 flex-wrap mt-9"
            >
              {socials.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 mono text-sm text-fg-faint hover:text-accent-bright transition-colors group">
                  <Icon size={14} />
                  <span className="link-underline">{label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — terminal window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.45 }}
            className="lg:col-span-5"
          >
            <div className="panel shadow-xl shadow-blue-950/5">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-black/8">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="mono text-xs text-fg-faint ml-2">akshat@spit: ~/whoami</span>
              </div>
              <div className="p-5 mono text-sm leading-relaxed">
                <p className="text-fg-faint mb-1">
                  <span className="text-accent">$</span> whoami
                </p>
                <p className="text-accent-bright mb-4 text-base">akshat_singh</p>
                {info.map(([k, v]) => (
                  <div key={k} className="flex items-baseline gap-2 py-[3px]">
                    <span className="text-accent w-28 shrink-0">{k}</span>
                    <span className="text-fg-faint">:</span>
                    <span className="text-fg-soft">{v}</span>
                  </div>
                ))}
                <p className="text-fg-faint mt-4">
                  <span className="text-accent">$</span> <span className="animate-blink">▌</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* tmux-style status bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="relative z-10 border-t border-black/8"
      >
        <div className="max-w-6xl w-full mx-auto px-8 md:px-20 py-3 flex items-center justify-between mono text-[0.7rem] text-fg-faint flex-wrap gap-2">
          <span className="flex items-center gap-2">
            <span className="bg-accent text-canvas px-2 py-0.5 font-semibold">NORMAL</span>
            <span className="hidden sm:inline">~/portfolio</span>
          </span>
          <span className="hidden md:flex items-center gap-4">
            <span>B.E. EXTC · CS minor</span>
            <span className="text-fg-faint">·</span>
            <span>Mumbai, India · SPIT</span>
          </span>
          <span className="flex items-center gap-2 text-accent-bright">
            <ArrowDown size={11} className="animate-bounce" />
            available for internships
          </span>
        </div>
      </motion.div>
    </section>
  )
}
