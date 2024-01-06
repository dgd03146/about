import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const container = style([
  sprinkles({
    display: 'flex',
  }),
])

export const categoryContainer = style([
  sprinkles({
    display: 'flex',
    // flexDirection: {
    //   mobile: 'column',
    //   tablet: 'row',
    // },

    gapX: {
      mobile: 'small',
      tablet: 'large',
      laptop: 'xlarge',
    },
  }),
])

export const categoryName = style([
  sprinkles({
    margin: 'none',

    fontSize: {
      mobile: '3xl',
      miniTablet: '4xl',
      tablet: '5xl',
      laptop: '7xl',
      desktop: '8xl',
    },
    fontFamily: 'hero',
  }),
])
