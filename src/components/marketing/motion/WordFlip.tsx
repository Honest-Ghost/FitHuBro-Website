'use client'

import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils/cn'
import { useReducedMotion } from './use-reduced-motion'

const CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.04 } },
}

const WORD: Variants = {
  hidden: { opacity: 0, y: '55%', rotateX: -72 },
  visible: {
    opacity: 1,
    y: '0%',
    rotateX: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
}

interface WordFlipProps {
  /** Plain text. Use `\n` to force a line break. */
  text: string
  className?: string
  /** Words matching these (case-insensitive) render in the brand slot. */
  accent?: string[]
  as?: 'h1' | 'h2' | 'p'
  delay?: number
}

/**
 * Headline reveal where each word hinges up from its own baseline. Words keep
 * their own perspective block so the rotation reads as depth per word rather
 * than one plate tipping.
 */
export function WordFlip({ text, className, accent = [], as = 'h2', delay = 0 }: WordFlipProps) {
  const reduced = useReducedMotion()
  const Tag = as
  const accented = new Set(accent.map((word) => word.toLowerCase()))

  const lines = text.split('\n').map((line) => line.trim().split(/\s+/))

  function tone(word: string) {
    return accented.has(word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()) ? 'text-secondary' : undefined
  }

  if (reduced) {
    return (
      <Tag className={className}>
        {lines.map((words, l) => (
          <span key={l} className="block">
            {words.map((word, w) => (
              <span key={w} className={tone(word)}>
                {word}
                {w < words.length - 1 ? ' ' : ''}
              </span>
            ))}
          </span>
        ))}
      </Tag>
    )
  }

  return (
    <Tag className={className}>
      <motion.span
        className="block"
        variants={CONTAINER}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-8% 0px' }}
        transition={{ delayChildren: delay }}
      >
        {lines.map((words, l) => (
          <span key={l} className="block overflow-hidden pb-[0.06em]">
            {words.map((word, w) => (
              <span
                key={w}
                className="inline-block [perspective:600px]"
                style={{ marginRight: '0.25em' }}
              >
                <motion.span
                  variants={WORD}
                  className={cn('inline-block origin-bottom', tone(word))}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
