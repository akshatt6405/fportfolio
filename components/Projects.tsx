'use client'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'
import { SectionHeader } from './About'

const projects = [
  {
    num: '01',
    title: 'Credit Card Fraud Detection',
    description: 'ML pipeline on 284k+ transactions. Benchmarked 5 models, with XGBoost reaching a 0.86 F1 score on a severely imbalanced dataset. Feature V14 alone contributed 61% of the importance in flagging fraud.',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'Jupyter'],
    github: 'https://github.com/akshatt6405/fraud-detection-ml',
  },
  {
    num: '02',
    title: 'AI for Bharat',
    description: "A social-impact AI solution built for the AI for BHARAT national initiative, applying machine learning to tackle real, on-the-ground problems in India's development.",
    tech: ['Python', 'Machine Learning', 'Data Science'],
    github: 'https://github.com/akshatt6405',
  },
  {
    num: '03',
    title: 'Collat.AI',
    description: 'AI-powered platform that estimates real-estate collateral value and resale liquidity for property-backed lending in India. Returns market value, distress value, resale potential, time-to-liquidate, and risk flags in under 30 seconds. Built for the TenzorX 2026 National AI Hackathon.',
    tech: ['React', 'FastAPI', 'XGBoost', 'LightGBM', 'SHAP', 'PostgreSQL'],
    github: 'https://github.com/akshatt6405/collat-ai',
  },
  {
    num: '04',
    title: 'Personal Portfolio',
    description: 'This very site. A terminal-inspired developer portfolio built from scratch with a custom design system, fluid motion, and a fully responsive layout.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/akshatt6405',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-8 md:px-20 bg-canvas overflow-hidden">
      <div className="absolute inset-0 term-grid pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader index="03" tag="What I've built" title="Things I've Built" cmd="git log --projects" />

        <div className="border-t border-black/8">
          {projects.map((p, i) => (
            <motion.a
              key={p.num}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group grid md:grid-cols-12 gap-x-8 gap-y-4 py-10 border-b border-black/8 items-start
                         hover:bg-black/[0.02] -mx-6 px-6 transition-colors duration-300"
            >
              <div className="md:col-span-1">
                <span className="mono text-2xl text-fg-faint group-hover:text-accent transition-colors">
                  {p.num}
                </span>
              </div>

              <div className="md:col-span-11">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="mono text-xl md:text-2xl font-medium text-fg group-hover:text-accent-bright transition-colors">
                    {p.title}
                  </h3>
                  <span className="shrink-0 mt-1 p-2 border border-black/10 text-fg-faint group-hover:border-accent group-hover:text-accent transition-all">
                    <ArrowUpRight size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

                <p className="text-fg-soft text-sm md:text-base leading-relaxed mb-5 max-w-2xl">{p.description}</p>

                <div className="flex flex-wrap items-center gap-2">
                  {p.tech.map(t => (
                    <span key={t} className="mono text-xs text-accent-bright px-2.5 py-1 border border-accent/25 bg-accent/[0.06]">
                      {t}
                    </span>
                  ))}
                  <span className="ml-auto flex items-center gap-1.5 mono text-xs text-fg-faint group-hover:text-accent-bright transition-colors">
                    <Github size={12} /> view_source
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-10 flex justify-between items-center flex-wrap gap-4">
          <p className="mono text-xs text-fg-faint">
            <span className="text-accent">$</span> more projects on github
          </p>
          <a href="https://github.com/akshatt6405" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 mono text-sm text-fg hover:text-accent-bright transition-colors group">
            <Github size={14} />
            <span className="link-underline">@akshatt6405</span>
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
