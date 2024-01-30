import { style } from '@vanilla-extract/css'

import { sprinkles } from '@/system'

export const section = style([
  sprinkles({
    flexDirection: 'column',
    height: 'full',
  }),
])
