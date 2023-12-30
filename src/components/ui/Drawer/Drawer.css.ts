import { style } from '@vanilla-extract/css'

import { calc } from '@vanilla-extract/css-utils'
import { sprinkles } from '@/system/styles/sprinkles.css'

export const DrawerStyle = style([
  sprinkles({
    // display: 'flex',
    background: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  }),
  {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100vh',
    zIndex: '99',
    transformOrigin: 'bottom',
  },
])

export const HamburgerStyle = style([
  sprinkles({
    marginX: 'xxlarge',
  }),
])

export const RoutesStyle = style([
  sprinkles({
    display: 'flex',
    height: 'full',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: {
      mobile: 'column',
      desktop: 'row',
    },
  }),

  {
    height: calc.subtract('100vh', '140px'),
  },
])

export const menuVars = {
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

export const containerVars = {
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
