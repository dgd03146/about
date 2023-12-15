import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/design/styles/sprinkles.css'

export const BodyStyle = style([
  sprinkles({
    background: 'primary',
  }),
  {
    margin: 0,
    boxSizing: 'border-box',
  },
])

export const ContainerStyle = style([
  sprinkles({
    background: 'red',
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
])

export const SectionStyle = style([
  sprinkles({
    gridColumn: {
      desktop: 'desktop',
      laptop: 'laptop',
      mobile: 'mobile',
    },
  }),
  {
    height: '100vh', // h-full
  },
])
