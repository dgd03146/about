import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const NavbarStyle = style([
  sprinkles({
    margin: 'auto',
    marginX: 'large',
  }),
  {
    maxHeight: '140px',
    height: '140px',
  },
])
