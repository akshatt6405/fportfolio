'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Network, Database, Github, Linkedin, Trophy } from 'lucide-react'
import { SectionHeader } from './About'

type Skill =
  | { name: string; slug: string; color: string; url?: string; lucide?: false }
  | { name: string; lucide: true; icon: React.ElementType; color: string; slug?: never; url?: never }

type Group = { category: string; cmd: string; skills: Skill[] }

const skillGroups: Group[] = [
  {
    category: 'languages',
    cmd: 'ls ~/languages',
    skills: [
      { name: 'Java',       slug: 'openjdk',    color: 'f89820' },
      { name: 'Python',     slug: 'python',     color: '3776AB' },
      { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
      { name: 'HTML5',      slug: 'html5',      color: 'E34F26' },
      { name: 'CSS3',       slug: 'css3',       color: '1572B6', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    ],
  },
  {
    category: 'frameworks & runtime',
    cmd: 'ls ~/frameworks',
    skills: [
      { name: 'Node.js',    slug: 'nodedotjs', color: '339933' },
      { name: 'Express.js', slug: 'express',   color: '444444' },
    ],
  },
  {
    category: 'database',
    cmd: 'ls ~/database',
    skills: [
      { name: 'MySQL', slug: 'mysql', color: '4479A1' },
    ],
  },
  {
    category: 'tools & IDEs',
    cmd: 'ls ~/tools',
    skills: [
      { name: 'VS Code',       slug: 'vscode',       color: '007ACC', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'IntelliJ IDEA', slug: 'intellijidea', color: 'FE315D' },
      { name: 'GitHub',        slug: 'github',       color: '181717' },
      { name: 'Git',           slug: 'git',          color: 'F05032' },
    ],
  },
  {
    category: 'cs fundamentals',
    cmd: 'ls ~/cs-core',
    skills: [
      { name: 'OOPs',              lucide: true, icon: Code2,    color: '4f46e5' },
      { name: 'Computer Networks', lucide: true, icon: Network,  color: '0ea5e9' },
      { name: 'DBMS',              lucide: true, icon: Database, color: '8b5cf6' },
    ],
  },
]

type Profile = { label: string; handle: string; href: string; icon: React.ElementType }
const profiles: Profile[] = [
  { label: 'GitHub',     handle: 'akshatt6405',  href: 'https://github.com/akshatt6405' },
  { label: 'LinkedIn',   handle: 'Akshat Singh', href: 'https://www.linkedin.com/in/akshat-singh-53782123a' },
  { label: 'LeetCode',   handle: 'akshat__6405', href: 'https://leetcode.com/u/akshat__6405/' },
  { label: 'Codeforces', handle: 'akshat_6405',  href: 'https://codeforces.com/profile/akshat_6405' },
].map((p, i) => ({ ...p, icon: [Github, Linkedin, Code2, Trophy][i] }))

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.lucide && skill.icon) {
    const Icon = skill.icon
    return <Icon size={15} className="shrink-0 text-fg-soft" />
  }
  const src = skill.url ?? `https://cdn.simpleicons.org/${skill.slug}`
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={skill.name} width={15} height={15} className="shrink-0" />
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-8 md:px-20 bg-canvas-soft">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" tag="What I work with" title="My Tech Stack" cmd="ls -la ~/stack" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {skillGroups.map(group => (
            <motion.div key={group.category} variants={item} className="panel panel-hover p-5">
              <p className="mono text-xs text-fg-faint mb-4 pb-3 border-b border-black/8">
                <span className="text-accent">$</span> {group.cmd}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-2.5 py-1.5 mono text-xs text-fg border border-black/10 bg-black/[0.03] hover:border-accent/50 hover:text-accent-bright transition-colors"
                  >
                    <SkillIcon skill={skill} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Profiles */}
        <motion.div initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <p className="mono text-xs text-fg-faint mb-5">
            <span className="text-accent">$</span> cat ~/.profiles
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-black/8">
            {profiles.map(({ label, handle, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="group relative p-5 border-r border-b border-black/8 hover:bg-accent/[0.07] transition-colors duration-200">
                <div className="flex items-center justify-between mb-8">
                  <Icon size={19} className="text-fg-soft group-hover:text-accent-bright transition-colors" />
                  <ArrowUpRight size={15} className="text-fg-faint group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="mono text-sm text-fg group-hover:text-accent-bright transition-colors">{label}</p>
                <p className="mono text-xs text-fg-faint mt-1 truncate">@{handle}</p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
