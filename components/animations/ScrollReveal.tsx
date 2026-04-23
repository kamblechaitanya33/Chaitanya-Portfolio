'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  className?: string
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollAnimation()

  const getVariants = () => {
    const baseHidden = { opacity: 0 }
    const baseVisible = { opacity: 1 }

    switch (direction) {
      case 'up':
        return {
          hidden: { ...baseHidden, y: 40 },
          visible: { ...baseVisible, y: 0 },
        }
      case 'down':
        return {
          hidden: { ...baseHidden, y: -40 },
          visible: { ...baseVisible, y: 0 },
        }
      case 'left':
        return {
          hidden: { ...baseHidden, x: 40 },
          visible: { ...baseVisible, x: 0 },
        }
      case 'right':
        return {
          hidden: { ...baseHidden, x: -40 },
          visible: { ...baseVisible, x: 0 },
        }
      default:
        return {
          hidden: baseHidden,
          visible: baseVisible,
        }
    }
  }

  return (
    <motion.div
      ref={elementRef}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={getVariants()}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
