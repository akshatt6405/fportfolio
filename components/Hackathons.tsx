'use client'
import { motion } from 'framer-motion'
import { SectionHeader } from './About'

const hackathons = [
  {
    name: 'Tenzor X',
    result: 'Semi-Finalist',
    year: '2024',
    description: 'AI/ML-focused hackathon where I advanced to the semi-final round among hundreds of participants nationally.',
    featured: true,
  },
  {
    name: 'ET Gen AI',
    result: 'Participant',
    year: '2024',
    description: 'Economic Times Generative AI challenge where my team built and presented an AI-powered solution to a real-world problem.',
    featured: false,
  },
  {
    name: 'EY Techathon',
    result: 'Participant',
    year: '2024',
    description: 'Ernst & Young technology innovation hackathon where I collaborated in a team to prototype a technology-driven solution.',
    featured: false,
  },
  {
    name: 'AI for BHARAT',
    result: 'Participant',
    year: '2024',
    description: "National initiative leveraging AI for India's development, where I built a social-impact AI solution addressing real needs.",
    featured: false,
  },
]

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-28 px-8 md:px-20 bg-canvas-soft">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" tag="Where I competed" title="Hackathon Journey" cmd="git log --hackathons" />

        <div className="border-t border-black/8">
          {hackathons.map((h, i) => (
            <motion.div
              key={h.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group grid md:grid-cols-12 gap-x-8 gap-y-3 py-8 border-b border-black/8 items-start"
            >
              <div className="md:col-span-3 flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${h.featured ? 'bg-accent shadow-[0_0_10px_rgba(59,130,246,0.7)]' : 'bg-fg-faint'}`} />
                <span className="mono text-sm text-fg-faint">{h.year}</span>
              </div>

              <div className="md:col-span-9">
                <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                  <h3 className="mono text-lg md:text-xl font-medium text-fg group-hover:text-accent-bright transition-colors">
                    {h.name}
                  </h3>
                  <span
                    className={`mono text-[0.7rem] uppercase tracking-wider px-2.5 py-1 border ${
                      h.featured
                        ? 'border-accent text-accent-bright bg-accent/[0.08]'
                        : 'border-black/12 text-fg-faint'
                    }`}
                  >
                    {h.result}
                  </span>
                </div>
                <p className="text-fg-soft text-sm leading-relaxed max-w-2xl">{h.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
