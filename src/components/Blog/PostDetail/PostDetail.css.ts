import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const container = style([
  sprinkles({
    // fontFamily: 'nanumMyeongjo',
    fontFamily: 'pretendard',
    paddingY: 'xxlarge',
  }),
  {
    margin: '0 auto',
    maxWidth: '680px',
  },
])
