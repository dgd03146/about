import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const HeaderStyle = style([
  sprinkles({
    paddingX: 'xxxlarge',
    display: 'flex',
  }),
  {
    maxHeight: '140px',
    height: '140px',
  },
])
