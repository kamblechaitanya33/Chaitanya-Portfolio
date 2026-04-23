'use client'

import { motion } from 'framer-motion'

export const EmailSidebar: React.FC = () => {
  return (
    <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-6 px-6 py-8">
      {/* Vertical Line */}
      <div className="w-0.5 h-24 bg-gradient-to-b from-transparent to-slate-700" />

      {/* Email Text */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="writing-vertical-rl"
      >
        <a
          href="mailto:Georgy@gmail.com"
          className="text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-300 font-medium tracking-wider hover:tracking-widest flex flex-col gap-1"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          Georgy@gmail.com
        </a>
      </motion.div>
    </div>
  )
}
