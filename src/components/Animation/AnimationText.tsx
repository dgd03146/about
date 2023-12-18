'use client'

import { useRef } from 'react'
import { Variant, motion } from 'framer-motion'
import { Heading } from '@/system/components'
import { ensureArray } from '@/utils'
import { AnimatedLine } from './AnimationLine'
import { useInViewAnimation } from './hooks/useInviewAnimation'

type AnimatedTextProps = {
  title: string
  text: string | string[]
  once?: boolean
  repeatDelay?: number
  animation?: {
    hidden: Variant
    visible: Variant
  }
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const AnimatedText = ({
  title,
  text,
  once,
  repeatDelay,
  animation = defaultAnimations,
}: AnimatedTextProps) => {
  const textArray = ensureArray(text)
  const titleArray = ensureArray(title)
  const ref = useRef(null)

  const { controls } = useInViewAnimation({
    once,
    ref,
    repeatDelay,
  })

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
          visibility: 'hidden',
          x: -1000,
          display: 'none',
        }}
        animate={{
          opacity: 1,
          visibility: 'visible',
          display: 'block',
          x: [300, 0],
        }}
        transition={{ duration: 2, delay: 0 }}
      >
        <Heading as="h1" fontSize="9xl">
          {titleArray.map((line, lineIndex) => (
            <AnimatedLine
              key={`${line}-${lineIndex}`}
              line={line}
              animation={animation}
            />
          ))}
        </Heading>
      </motion.div>
      <Heading as="h1" fontSize="6xl">
        <motion.span
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          aria-hidden
        >
          {textArray.map((line, lineIndex) => (
            <AnimatedLine
              key={`${line}-${lineIndex}`}
              line={line}
              animation={animation}
            />
          ))}
        </motion.span>
      </Heading>
    </>
  )
}
