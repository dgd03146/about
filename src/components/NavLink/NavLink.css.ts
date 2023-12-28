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
  }),
])
