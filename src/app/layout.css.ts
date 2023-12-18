import { style, globalStyle } from '@vanilla-extract/css'
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

export const BodyStyle = style([
  sprinkles({
    background: 'primary',
  }),
])

export const MainStyle = style([
  sprinkles({
    gridTemplateColumns: {
      desktop: 'desktop',
      laptop: 'laptop',
      tablet: 'tablet',
      mobile: 'mobile',
    },
    gridColumnGap: {
      desktop: '24px',
      mobile: '16px',
    },
    width: {
      mobile: 'xsmall',
      tablet: 'small',
      laptop: 'large',
      desktop: 'xlarge',
    },
    // FIXME: maxWidth 이름 통일
    maxWidth: {
      mobile: 'xsmall',
      tablet: 'small',
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
      desktop: 'desktop',
      laptop: 'laptop',
      mobile: 'mobile',
    },
  }),
  { height: '100%' },
])
