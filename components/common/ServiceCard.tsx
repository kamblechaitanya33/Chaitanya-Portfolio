'use client'

import { motion } from 'framer-motion'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="mb-4 text-3xl text-cyan-400 group-hover:text-purple-400 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors leading-relaxed">
          {description}
        </p>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-cyan" />
    </motion.div>
  )
}
