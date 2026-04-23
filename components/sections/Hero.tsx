'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-0"
    >
      {/* Background Gradient Blur */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-4">
            Hi, I&apos;m{' '}
            <span className="gradient-text">Chaitanya Kamble</span>
          </h1>
        </motion.div>

        {/* Role with Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          <p className="text-2xl md:text-3xl text-cyan-400 font-semibold">
            Mobile Application Developer
          </p>
          <p className="text-lg md:text-xl text-slate-400 mt-2">
            Android & Flutter Specialist
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful, functional mobile applications with cutting-edge
          technologies. Specializing in ERP, CRM, Fintech solutions, and
          performance optimization.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-shadow inline-flex items-center gap-2 justify-center"
          >
            View My Work
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg bg-slate-800 text-cyan-400 font-semibold border border-slate-700 hover:border-cyan-500 transition-colors inline-flex items-center gap-2 justify-center"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="w-8 h-12 border-2 border-cyan-400/50 rounded-full flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
