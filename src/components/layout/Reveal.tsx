import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  /** Stagger delay in seconds */
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'section' | 'article'
}

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const

/**
 * Fade + rise-in on first scroll into view. Transform/opacity only.
 * prefers-reduced-motion is honoured globally in index.css, and Framer also
 * respects it, so motion collapses to a plain fade for those users.
 */
export function Reveal({ children, delay = 0, className, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay }}
    >
      {children}
    </MotionTag>
  )
}
