import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const NavbarStyle = style([
  sprinkles({
    width: 'full',
    maxWidth: 'w-11/12',
    margin: 'auto',

    // marginX: 'large',
  }),
  {
    maxHeight: '90px',
    height: '90px',
    background: 'inherit',
  },
])
