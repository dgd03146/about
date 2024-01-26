import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const NavbarStyle = style([
  sprinkles({
    width: 'full',
    maxWidth: '11/12',
    margin: 'auto',
    maxHeight: 'navbar',
    height: 'navbar',
    background: 'inherit',
    // marginX: 'large',
  }),
])
