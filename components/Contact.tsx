'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, Github, Linkedin } from 'lucide-react'
import { SectionHeader } from './About'

// ── EmailJS config (set these in Vercel → Project → Settings → Environment Variables) ──
// NEXT_PUBLIC_EMAILJS_SERVICE_ID, NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// Template variables expected: {{from_name}}, {{from_email}}, {{message}}
const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID  ?? ''
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  ?? ''
const CONFIGURED  = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full bg-black/[0.03] border border-black/10 px-4 py-3 mono text-sm text-fg placeholder-fg-faint/70 focus:outline-none focus:border-accent focus:bg-accent/[0.04] transition-colors'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    // Fallback to a mailto draft if EmailJS isn't configured yet
    if (!CONFIGURED) {
      const data = new FormData(formRef.current)
      const subject = encodeURIComponent(`Portfolio message from ${data.get('from_name') ?? ''}`)
      const body = encodeURIComponent(
        `${data.get('message') ?? ''}\n\nfrom ${data.get('from_name') ?? ''} (${data.get('from_email') ?? ''})`
      )
      window.location.href = `mailto:akshatisat@gmail.com?subject=${subject}&body=${body}`
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-28 px-8 md:px-20 bg-canvas-soft">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="06" tag="Get in touch" title="Let's Connect" cmd="./contact --send" />

        <div className="grid md:grid-cols-12 gap-x-12 gap-y-12 items-start">
          {/* Left — invitation + direct links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="md:col-span-5"
          >
            <p className="text-fg text-xl md:text-2xl leading-snug mb-5">
              Have a project in mind, want to collaborate, or just want to say hi?
            </p>
            <p className="text-fg-soft text-sm leading-relaxed mb-10">
              Drop a message and I&apos;ll get back to you soon, or reach me directly through any
              of the channels below.
            </p>

            <div className="divide-y divide-black/8 border-t border-black/8">
              <a href="mailto:akshatisat@gmail.com"
                className="group flex items-center gap-3 py-4 mono text-sm text-fg-soft hover:text-accent-bright transition-colors">
                <Mail size={15} /> <span className="link-underline">akshatisat@gmail.com</span>
              </a>
              <a href="https://github.com/akshatt6405" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 py-4 mono text-sm text-fg-soft hover:text-accent-bright transition-colors">
                <Github size={15} /> <span className="link-underline">github.com/akshatt6405</span>
              </a>
              <a href="https://www.linkedin.com/in/akshat-singh-53782123a" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-3 py-4 mono text-sm text-fg-soft hover:text-accent-bright transition-colors">
                <Linkedin size={15} /> <span className="link-underline">linkedin.com/in/akshat-singh</span>
              </a>
            </div>
          </motion.div>

          {/* Right — form, styled as a terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="panel">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-black/8">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                <span className="mono text-xs text-fg-faint ml-2">new_message.sh</span>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="mono text-xs text-accent block mb-2">--name</label>
                    <input type="text" name="from_name" required placeholder="your name" className={inputClass} />
                  </div>
                  <div>
                    <label className="mono text-xs text-accent block mb-2">--email</label>
                    <input type="email" name="from_email" required placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className="mono text-xs text-accent block mb-2">--message</label>
                  <textarea name="message" required rows={5} placeholder="tell me about your project or just say hello..."
                    className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" disabled={status === 'sending' || status === 'success'}
                  className="btn-accent mono px-7 py-3 text-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {status === 'sending' && <Loader2 size={14} className="animate-spin" />}
                  {status === 'success'  && <CheckCircle size={14} />}
                  {status === 'error'    && <AlertCircle size={14} />}
                  {status === 'idle'     && <Send size={14} />}
                  {{ idle: CONFIGURED ? 'send_message()' : 'compose_email()', sending: 'sending...', success: 'message_sent ✓', error: 'retry()' }[status]}
                </button>

                {status === 'success' && <p className="mono text-xs text-accent-bright">&gt; Thanks! I&apos;ll get back to you soon.</p>}
                {status === 'error'   && <p className="mono text-xs text-[#FF5F57]">&gt; Something went wrong. Email me at akshatisat@gmail.com</p>}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
