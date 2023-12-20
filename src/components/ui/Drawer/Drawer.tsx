import { AnimatePresence, motion } from 'framer-motion'
import { NavbarStyle } from '@/components/Navbar/Navbar.css'
import { ROUTES } from '@/constants/route'
// import { Flex, Grid, Heading } from '@/system/components'
import { Button, Flex, Heading } from '@/system/components'
import { NavLink } from '../../NavLink'
import CloseIcon from '../icons/CloseIcon'
import * as S from './Drawer.css'

type Props = {
  // isOpen: boolean
  toggle: () => void
}

export const Drawer = ({ toggle }: Props) => {
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.9,
        staggerDirection: 1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={menuVars}
        initial="initial"
        animate="animate"
        exit="exit"
        className={S.DrawerStyle}
      >
        <Flex
          className={NavbarStyle}
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
          variants={containerVars}
          initial="initial"
          animate="open"
          exit="initial"
        >
          {ROUTES.map(({ title, href }, index) => (
            <NavLink key={index} title={title} href={href} />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
