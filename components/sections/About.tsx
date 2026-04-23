'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const highlights = [
  'Call Logs Management App',
  'Financial Locker App',
  'Location Tracking System',
  'Question Paper Generator',    
  '5+ Years Experience', 
  'Android & Flutter Expert',
]

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal direction="up" className="mb-12">
          <AnimatedHeading
            className="text-4xl md:text-5xl font-bold mb-4"
            gradient
          >
            About Me.
          </AnimatedHeading>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-slate-400 leading-relaxed">
                I&apos;m a passionate mobile application developer with
                expertise in creating high-performance Android and Flutter
                applications. With a strong foundation in software architecture
                and user-centric design, I transform ideas into robust,
                scalable solutions.
              </p>

              <p className="text-lg text-slate-400 leading-relaxed">
                My journey in mobile development has been marked by continuous
                learning and innovation. I specialize in building fintech
                applications, CRM systems, ERP solutions, and performance
                optimization. Every project I undertake is an opportunity to
                push boundaries and deliver exceptional value.
              </p>

              <p className="text-lg text-slate-400 leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring new technologies,
                contributing to open-source projects, and sharing knowledge
                with the developer community.
              </p>

              <div className="pt-6">
                <p className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                  Key Focus Areas
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400">→</span>
                    Mobile App Architecture & Design Patterns
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400">→</span>
                    API Integration & Backend Synchronization
                  </li>
                  <li className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400">→</span>
                    Performance Optimization & Code Quality
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          {/* Highlights Grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className="text-cyan-400 group-hover:text-purple-400 transition-colors mt-0.5 flex-shrink-0"
                    />
                    <p className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
                      {highlight}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
