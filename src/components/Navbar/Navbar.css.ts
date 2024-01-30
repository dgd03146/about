import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const navbar = style([
  sprinkles({
    width: 'full',
    maxWidth: '11/12',
    marginX: 'auto',
    maxHeight: 'navbar',
    height: 'navbar',
    background: 'inherit',
    // marginX: 'large',
  }),
])
