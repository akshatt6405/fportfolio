'use client'
import { motion } from 'framer-motion'
import { SectionHeader } from './About'

const subjects = [
  {
    code: 'OOPs',
    title: 'Object Oriented Programming',
    description: 'Strong grasp of OOP principles applied in Java and Python — designing modular, reusable, and maintainable systems.',
    concepts: [
      { name: 'Encapsulation', desc: 'Binding data and methods, restricting direct access' },
      { name: 'Inheritance',   desc: 'Deriving new classes from existing ones for code reuse' },
      { name: 'Polymorphism',  desc: 'One interface, multiple implementations (overloading & overriding)' },
      { name: 'Abstraction',   desc: 'Hiding complexity, exposing only essential features' },
    ],
  },
  {
    code: 'CN',
    title: 'Computer Networks',
    description: 'Solid understanding of how data flows across networks — from physical transmission to application-layer protocols.',
    concepts: [
      { name: 'OSI & TCP/IP',         desc: '7-layer OSI model and 4-layer TCP/IP stack' },
      { name: 'HTTP / HTTPS',         desc: 'Web communication protocols and TLS security' },
      { name: 'DNS & IP Addressing',  desc: 'Domain resolution, subnetting, CIDR notation' },
      { name: 'TCP vs UDP',           desc: 'Reliable vs connectionless transport protocols' },
    ],
  },
  {
    code: 'DBMS',
    title: 'Database Management Systems',
    description: 'Proficient in designing schemas, writing complex queries, and understanding the internals of relational databases.',
    concepts: [
      { name: 'SQL & Queries',     desc: 'Joins, subqueries, aggregations, stored procedures' },
      { name: 'Normalization',     desc: '1NF → 3NF, eliminating redundancy and anomalies' },
      { name: 'ACID Properties',   desc: 'Atomicity, Consistency, Isolation, Durability' },
      { name: 'Indexing & Keys',   desc: 'B-trees, primary/foreign keys, query optimization' },
    ],
  },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function CSFundamentals() {
  return (
    <section id="cs-fundamentals" className="py-24 px-8 md:px-20 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <SectionHeader tag="Core Knowledge" title="CS Fundamentals" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {subjects.map((s) => (
            <motion.div key={s.code} variants={item}
              className="group rounded-2xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-50 transition-all duration-300 overflow-hidden">

              {/* Header */}
              <div className="px-6 pt-6 pb-4 border-b border-slate-100">
                <span className="inline-block px-3 py-1 text-xs font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg mb-3 tracking-wider">
                  {s.code}
                </span>
                <h3 className="text-slate-900 font-semibold text-base leading-snug mb-2 group-hover:text-indigo-700 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">{s.description}</p>
              </div>

              {/* Concepts */}
              <div className="px-6 py-4 space-y-3">
                {s.concepts.map((c) => (
                  <div key={c.name} className="flex items-start gap-3">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <div>
                      <p className="text-slate-700 text-sm font-medium leading-none mb-0.5">{c.name}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
