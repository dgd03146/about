import { style } from '@vanilla-extract/css'

import { sprinkles } from '@/system'

export const carousel = style([
  {
    cursor: 'grab',
    overflow: 'hidden',
  },
])

export const innerCarousel = style([
  sprinkles({
    display: 'flex',

    flexDirection: {
      mobile: 'column',
      miniTablet: 'row',
    },
  }),
  {
    columnGap: '20px',
    rowGap: '10px',
  },
])

export const card = style([
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformStyle: 'preserve-3d',
    transition: 'all 0.7s ease',
    color: 'white',
    ':hover': {
      transform: 'rotateY(180deg)',
    },
  },
])

export const cardContainer = style([
  sprinkles({
    position: 'relative',

    minWidth: {
      mobile: '52',
      miniTablet: '64',
      tablet: '64',
      laptop: '64',
    },
    minHeight: {
      mobile: '72',
      miniTablet: '96',
      tablet: '96',
      laptop: '96',
    },
  }),
])

export const front = style([
  {
    cursor: 'pointer',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    pointerEvents: 'none',
  },
])

export const back = style([
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    transform: 'rotateY(180deg)',
  },
])

export const frontImage = style([
  {
    width: '100%',
    height: '100%',
  },
])
