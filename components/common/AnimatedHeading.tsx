'use client'

import { motion } from 'framer-motion'

interface AnimatedHeadingProps {
  children: React.ReactNode
  className?: string
  gradient?: boolean
  delay?: number
}

export const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  className = '',
  gradient = false,
  delay = 0,
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`${gradient ? 'gradient-text' : ''} ${className}`}
    >
      {children}
    </motion.h2>
  )
}
