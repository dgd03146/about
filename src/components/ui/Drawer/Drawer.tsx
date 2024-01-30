'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, navbar } from '@/components/Blog'
import { ROUTES } from '@/constants'
import { Button, Flex, Heading } from '@/system/components'
import { CloseIcon } from '../icons'
import * as S from './Drawer.css'

type Props = {
  isOpen: boolean
  toggle: () => void
}

export const Drawer = ({ isOpen, toggle }: Props) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={S.menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className={S.DrawerStyle}
        >
          <Flex
            className={navbar}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Button variant="basic" onClick={toggle}>
              <Heading as="h1">
                <CloseIcon />
              </Heading>
            </Button>
          </Flex>
          <motion.div
            className={S.RoutesStyle}
            variants={S.containerVars}
            initial="initial"
            animate="open"
            // exit="initial"
          >
            {ROUTES.map(({ title, href }, index) => (
              <NavLink key={index} title={title} href={href} toggle={toggle} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
