import { AnimatePresence, motion } from 'framer-motion'
import { NavbarStyle } from '@/components/Navbar/Navbar.css'
import { ROUTES } from '@/constants/route'
import { Button, Flex, Heading } from '@/system/components'
import { NavLink } from '../../NavLink'
import CloseIcon from '../icons/CloseIcon'
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
