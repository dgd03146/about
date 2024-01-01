import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const NavLinkStyle = style([
  sprinkles({
    overflow: 'hidden',
    marginX: 'xxlarge',
  }),
])

export const HeaderStyle = style([
  sprinkles({
    fontSize: {
      mobile: '4xl',
      desktop: '6xl',
    },
    fontFamily: 'hero',
  }),
])

export const NavLinkVars = {
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
