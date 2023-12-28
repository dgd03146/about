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
