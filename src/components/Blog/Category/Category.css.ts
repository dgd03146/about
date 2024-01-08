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

    gapX: {
      mobile: 'medium',
      tablet: 'xlarge',
    },
    marginBottom: 'small',
  }),
])

export const categoryName = style([
  sprinkles({
    margin: 'none',
    background: {
      mobile: 'black',
      tablet: 'inherit',
    },

    color: {
      mobile: 'white',
      tablet: 'inherit',
    },

    fontFamily: 'hero',

    fontSize: {
      desktop: '8xl',
      laptop: '7xl',
      tablet: '5xl',
    },

    paddingX: {
      mobile: '1',
      tablet: '0',
    },
    paddingY: {
      mobile: '0.5',
      tablet: '0',
    },

    // background: 'black',
    // color: 'white',
    // fontFamily: 'inter',
  }),
  {
    // padding: '4px 12px',
    // fontWeight: '500',
    // borderRadius: '9999px',
  },
])
