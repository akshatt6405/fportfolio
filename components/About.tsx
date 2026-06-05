'use client'
import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Mail } from 'lucide-react'

export function SectionHeader({
  index,
  tag,
  title,
  cmd,
}: {
  index?: string
  tag: string
  title: string
  cmd?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {/* terminal command line */}
      <div className="mono text-xs sm:text-sm flex flex-wrap items-center gap-x-2 mb-5 text-fg-faint">
        <span className="text-accent">akshat@spit</span>
        <span className="text-fg-faint">:</span>
        <span className="text-accent-bright">~/{(cmd ?? title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}</span>
        <span className="text-fg-faint">$</span>
        <span className="text-fg-soft">{cmd ?? `cat ${tag.toLowerCase().replace(/\s+/g, '_')}.md`}</span>
      </div>

      <div className="flex items-baseline gap-4 border-b border-black/10 pb-5">
        {index && <span className="mono text-sm text-fg-faint shrink-0">[{index}]</span>}
        <h2 className="mono text-3xl md:text-[2.6rem] font-medium tracking-tight text-fg">
          {title}
        </h2>
      </div>
    </motion.div>
  )
}

const facts = [
  { icon: GraduationCap, title: 'Sardar Patel Institute of Technology', sub: 'B.E. EXTC (Major) · CS (Minor) · Mumbai' },
  { icon: MapPin,        title: 'Mumbai, India',                        sub: 'Open to remote & hybrid opportunities' },
  { icon: Mail,          title: 'akshatisat@gmail.com',                 sub: 'Always open to collaborating' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-8 md:px-20 bg-canvas">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" tag="Who I am" title="The Person Behind the Code" cmd="cat about.md" />

        <div className="grid md:grid-cols-12 gap-x-12 gap-y-14 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 space-y-6"
          >
            <p className="text-fg text-lg md:text-xl leading-relaxed">
              I&apos;m <span className="text-accent-bright">Akshat Singh</span>, a developer and ML
              enthusiast pursuing my B.E. at{' '}
              <span className="text-fg">Sardar Patel Institute of Technology</span>, Mumbai, majoring
              in <span className="text-fg">Electronics &amp; Telecommunication (EXTC)</span>{' '}
              with a minor in <span className="text-fg">Computer Science</span>.
            </p>
            <p className="text-fg-soft leading-relaxed max-w-xl">
              I love building things, from end-to-end web applications to machine learning pipelines
              that solve real problems. Clean code and thoughtful design go hand in hand for me.
            </p>
            <p className="text-fg-soft leading-relaxed max-w-xl">
              Outside of coding, I sharpen my DSA skills daily and enjoy taking on hackathon
              challenges. Always looking to grow, collaborate, and contribute to work that matters.
            </p>

            <div className="pt-1 flex flex-wrap gap-2">
              {['machine-learning', 'full-stack-dev', 'dsa', 'software-engineering'].map(tag => (
                <span key={tag} className="mono text-xs text-accent-bright px-2.5 py-1 border border-accent/30 bg-accent/5">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="pt-4 divide-y divide-black/8 border-t border-black/10">
              {facts.map(fact => (
                <div key={fact.title} className="group flex items-start gap-4 py-4">
                  <fact.icon size={16} className="text-accent mt-1 shrink-0" />
                  <div>
                    <p className="text-fg font-medium text-sm">{fact.title}</p>
                    <p className="mono text-xs text-fg-faint mt-0.5">{fact.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Side — photo terminal window + manifesto */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="md:col-span-5 space-y-6"
          >
            <div className="panel">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/8">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <span className="mono text-[0.7rem] text-fg-faint ml-2">akshat.jpg</span>
              </div>
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/akshat.jpg"
                  alt="Akshat Singh"
                  className="w-full aspect-[4/5] object-cover grayscale contrast-[1.05] hover:grayscale-0 transition-[filter] duration-500"
                />
                <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-accent/10" />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-canvas/90 to-transparent p-4">
                  <p className="mono text-xs text-accent-bright">
                    <span className="text-accent">$</span> akshat_singh :: SPIT, Mumbai
                  </p>
                </div>
              </div>
            </div>

            <figure className="panel p-6">
              <p className="mono text-xs text-accent mb-3">{'/* what i believe */'}</p>
              <p className="text-fg text-base leading-relaxed">
                I believe in building products grounded in clean code, driven by purpose, and
                designed to solve problems that actually matter.
              </p>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
