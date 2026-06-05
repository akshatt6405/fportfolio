'use client'
import { motion } from 'framer-motion'
import { Award, Medal } from 'lucide-react'
import { SectionHeader } from './About'

const certificates = [
  { name: 'Tenzor X: Semi-Finalist', issuer: 'Tenzor X' },
  { name: 'ET Gen AI Certificate',    issuer: 'Economic Times' },
  { name: 'EY Techathon Certificate', issuer: 'Ernst & Young' },
]

const achievements = [
  {
    name: '2nd Place: Mini Project (Semester 5)',
    detail: 'Sardar Patel Institute of Technology',
    badge: '🥈 2nd Place',
  },
  {
    name: 'Tenzor X: Semi-Finalist',
    detail: 'Ranked among top teams nationally',
    badge: '🏆 Semi-Finalist',
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

export default function Certificates() {
  return (
    <section id="achievements" className="py-28 px-8 md:px-20 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="05" tag="Recognition" title="Wins & Certificates" cmd="ls ~/achievements" />

        {/* Certificates */}
        <div className="mb-16">
          <p className="mono text-xs text-fg-faint mb-5">
            <span className="text-accent">$</span> ls ~/certificates
          </p>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4">
            {certificates.map(cert => (
              <motion.div key={cert.name} variants={item} className="panel panel-hover p-5 group">
                <Award size={18} className="text-accent mb-6" />
                <p className="mono text-sm text-fg leading-snug group-hover:text-accent-bright transition-colors">
                  {cert.name}
                </p>
                <p className="mono text-xs text-fg-faint mt-2">{cert.issuer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <div>
          <p className="mono text-xs text-fg-faint mb-5">
            <span className="text-accent">$</span> cat ~/achievements/*.log
          </p>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4">
            {achievements.map(ach => (
              <motion.div key={ach.name} variants={item}
                className="panel panel-hover p-5 flex items-start gap-4 group">
                <Medal size={20} className="text-accent shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap mb-1.5">
                    <p className="mono text-sm text-fg group-hover:text-accent-bright transition-colors">
                      {ach.name}
                    </p>
                    <span className="mono text-[0.7rem] text-fg-soft border border-black/12 px-2 py-0.5 shrink-0">
                      {ach.badge}
                    </span>
                  </div>
                  <p className="mono text-xs text-fg-faint">{ach.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
