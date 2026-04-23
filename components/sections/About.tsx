'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { AnimatedHeading } from '@/components/common/AnimatedHeading'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

const highlights = [
  'Built scalable Android & Flutter applications',
  'Integrated REST APIs with real-time data sync',
  'Developed fintech, CRM & ERP solutions',
  'Optimized app performance & reduced load time',
  'Designed user-centric UI/UX experiences',
  'Maintained clean architecture & modular code',
]

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-10 sm:py-14 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <ScrollReveal direction="up" className="mb-8 sm:mb-12 text-center md:text-left">
          <AnimatedHeading
            className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4"
            gradient
          >
            About Me.
          </AnimatedHeading>
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

          {/* Text Content */}
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left">

              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                I'm a Mobile Application Developer specializing in building
                high-performance, scalable applications using Android
                (Java/Kotlin) and Flutter.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                With hands-on experience in fintech, CRM systems, and ERP
                platforms, I build solutions that solve real-world business problems.
              </p>

              <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed">
                I continuously explore new technologies and best practices to
                stay ahead in mobile development.
              </p>

              {/* Skills */}
              <div className="pt-4 sm:pt-6">
                <p className="text-xs sm:text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">
                  Core Technologies
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {[
                    'Java (Android Development)',
                    'Kotlin (Modern Android)',
                    'Dart (Flutter)',
                    'JavaScript (React.js)',
                    'RoomDB / SQL',
                  ].map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start justify-center md:justify-start gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base"
                    >
                      <span className="text-cyan-400 mt-1">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </ScrollReveal>

          {/* Highlights Grid */}
          <ScrollReveal direction="right">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle
                      size={16}
                      className="text-cyan-400 group-hover:text-purple-400 transition-colors mt-1 flex-shrink-0"
                    />
                    <p className="text-xs sm:text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors">
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