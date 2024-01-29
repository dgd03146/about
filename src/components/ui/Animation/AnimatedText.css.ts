import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const title = style([
  sprinkles({
    padding: 'none',
    margin: 'none',
    fontSize: {
      desktop: '11xl',
      laptop: '9xl',
      tablet: '7xl',
      mobile: '5xl',
    },
  }),
])

export const subTitle = style([
  sprinkles({
    padding: 'none',
    margin: 'none',
    fontSize: {
      desktop: '7xl',
      laptop: '6xl',
      tablet: '5xl',

      mobile: '3xl',
    },
  }),
])
