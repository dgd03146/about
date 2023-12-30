import React from 'react'
import { motion } from 'framer-motion'

import { useRouter } from 'next/navigation'
import { Box, Button, Heading } from '@/system/components'
import { ensureArray } from '@/utils'
import { AnimatedLine } from '../ui'
import { defaultAnimations } from '../ui/Animation/AnimatedText'
import * as S from './NavLink.css'

type Props = {
  title: string
  href: string
  toggle: () => void
}

export const NavLink = ({ title, href, toggle }: Props) => {
  const router = useRouter()
  const titleArray = ensureArray(title)

  const handleRoute = () => {
    router.push(href)
    toggle()
  }

  return (
    <Box className={S.NavLinkStyle}>
      <motion.div variants={S.NavLinkVars}>
        <Button onClick={handleRoute}>
          <Heading as="h1" className={S.HeaderStyle}>
            {titleArray.map((line, lineIndex) => (
              <AnimatedLine
                key={`${line}-${lineIndex}`}
                line={line}
                animation={defaultAnimations}
              />
            ))}
          </Heading>
        </Button>
      </motion.div>
    </Box>
  )
}
