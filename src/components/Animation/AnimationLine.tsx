import React from 'react'
import { motion, Variant } from 'framer-motion'
import { Text } from '@/system/components'

type AnimatedLineProps = {
  line: string
  animation: {
    hidden: Variant
    visible: Variant
  }
}

export const AnimatedLine = ({ line, animation }: AnimatedLineProps) => {
  return (
    <Text as="span" display="block">
      {line.split(' ').map((word, wordIndex) => (
        <Text as="span" display="inline-block" key={`${word}-${wordIndex}`}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${char}-${charIndex}`}
              style={{ display: 'inline-block' }}
              variants={animation}
              whileHover={{
                transform: [
                  'scale3D(1,1,1)',
                  'scale3D(1.4,.55,1)',
                  'scale3D(.75,1.25,1)',
                  'scale3D(1.25,.85,1)',
                  'scale3D(.9,1.05,1)',
                  'scale3D(1,1,1)',
                ],
                color: '#0F64CD',
                transition: {
                  times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
                  duration: 1,
                },
              }}
            >
              {char}
            </motion.span>
          ))}
          <Text display="inline-block">&nbsp;</Text>
        </Text>
      ))}
    </Text>
  )
}
