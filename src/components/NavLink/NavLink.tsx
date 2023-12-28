import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Box, Heading } from '@/system/components'
import { ensureArray } from '@/utils'

import { AnimatedLine } from '../ui'
import { defaultAnimations } from '../ui/Animation/AnimatedText'
import * as S from './NavLink.css'

type Props = {
  title: string
  href: string
}

const NavLinkVars = {
  initial: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
}

export const NavLink = ({ title, href }: Props) => {
  const titleArray = ensureArray(title)
  return (
    <Box className={S.NavLinkStyle}>
      <motion.div variants={NavLinkVars}>
        <Link href={href}>
          <Heading as="h1" className={S.HeaderStyle}>
            {titleArray.map((line, lineIndex) => (
              <AnimatedLine
                key={`${line}-${lineIndex}`}
                line={line}
                animation={defaultAnimations}
              />
            ))}
          </Heading>
        </Link>
      </motion.div>
    </Box>
  )
}
