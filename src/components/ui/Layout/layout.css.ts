import { style, globalStyle, createVar } from '@vanilla-extract/css'
// import { calc } from '@vanilla-extract/css-utils'
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

  display: 'flex',
  flexDirection: 'column',

  minHeight: '100vh',
})

export const ContainerStyle = style([sprinkles({}), {}])

export const MainStyle = style([
  sprinkles({
    minHeight: 'full',
    maxWidth: 'w-11/12',
    gridTemplateColumns: {
      desktop: '1/12',
      laptop: '1/8',
      tablet: '1/6',
      mobile: '1/6',
    },
    gridColumnGap: {
      desktop: '24px',
      laptop: '20px',
      mobile: '16px',
    },

    width: {
      mobile: 'small',
      tablet: 'small',
      laptop: 'large',
      desktop: 'xlarge',
    },
  }),
])

export const SectionStyle = style([
  sprinkles({
    minHeight: 'full',
    gridColumn: {
      mobile: '1/7',
      tablet: '1/7',
      laptop: '1/9',
      desktop: '1/13',
    },
  }),
])
