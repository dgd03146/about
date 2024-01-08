import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const NavbarStyle = style([
  sprinkles({
    maxWidth: 'w-11/12',
    margin: 'auto',

    // marginX: 'large',
  }),
  {
    maxHeight: '140px',
    height: '140px',
    background: 'inherit',
  },
])
