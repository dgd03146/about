import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const HeaderStyle = style([
  sprinkles({
    display: 'flex',
    marginX: 'xxxlarge',
    // FIXME: maxWidth 이름 통일
  }),
  {
    maxHeight: '140px',
    height: '140px',
  },
])
