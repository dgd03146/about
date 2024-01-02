import { style, globalStyle, createVar } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { sprinkles } from '@/system'

globalStyle('a', {
  textDecoration: 'none',
  color: 'black',
})

globalStyle('body', {
  margin: 0,

  boxSizing: 'border-box',
})

export const brandColor = createVar()
export const textColor = createVar()

export const container = style({
  background: brandColor,
})

export const ContainerStyle = style([
  sprinkles({
    // paddingX: {
    //   mobile: 'large',
    //   tablet: 'large',
    //   laptop: 'none',
    // },
  }),
])

export const MainStyle = style([
  sprinkles({
    maxWidth: 'w-11/12',
    gridTemplateColumns: {
      desktop: '1/12',
      laptop: '1/8',
      tablet: '1/6',
    },
    gridColumnGap: {
      desktop: '24px',
      laptop: '20px',
      mobile: '16px',
    },

    width: {
      mobile: 'full',
      tablet: 'full',
      laptop: 'large',
      desktop: 'xlarge',
    },
  }),
  {
    height: calc.subtract('100vh', '140px'),
  },
])

export const SectionStyle = style([
  sprinkles({
    gridColumn: {
      mobile: '1/7',
      tablet: '1/7',
      laptop: '1/9',
      desktop: '1/13',
    },
  }),
  { height: '100%' },
])
