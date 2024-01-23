import { style } from '@vanilla-extract/css'
// import { calc } from '@vanilla-extract/css-utils'
import { sprinkles } from '@/system'

export const container = style([
  sprinkles({
    // paddingTop: {
    //   miniTablet: '70px',
    // },
  }),

  // FIXME:
  // height: calc.subtract('100vh', '280px'),
  // minHeight: '600px',
])

export const blogSection = style([
  sprinkles({
    flexDirection: 'column',
    height: 'full',
    // justifyContent: 'center',
    // gapY: 'small',
    // overflow: 'hidden',
  }),
])
