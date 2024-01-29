import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { TEXT_ANIMATION } from '@/constants'
import { Box, Button, Heading } from '@/system/components'
import { ensureArray } from '@/utils'
import { AnimatedLine } from '../ui'
import * as styles from './NavLink.css'

type Props = {
  title: string
  href: string
  toggle: () => void
}

export const NavLink = ({ title, href, toggle }: Props) => {
  const router = useRouter()
  const titleArray = ensureArray(title)

  const handleRoute = () => {
    toggle()
    router.push(href)
  }

  return (
    <Box className={styles.navLink}>
      <motion.div variants={styles.navLinkVars}>
        <Button onClick={handleRoute}>
          <Heading as="h1" className={styles.header}>
            {titleArray.map((line, lineIndex) => (
              <AnimatedLine
                key={`${line}-${lineIndex}`}
                line={line}
                animation={TEXT_ANIMATION}
              />
            ))}
          </Heading>
        </Button>
      </motion.div>
    </Box>
  )
}
