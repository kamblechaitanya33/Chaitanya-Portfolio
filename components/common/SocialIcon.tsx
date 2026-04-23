'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface SocialIconProps {
  href: string
  icon: React.ReactNode
  label: string
  delay?: number
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  href,
  icon,
  label,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.2, y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 transition-all duration-300"
        aria-label={label}
      >
        {icon}
      </Link>
    </motion.div>
  )
}
