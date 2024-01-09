import { createVar, style } from '@vanilla-extract/css'

import { sprinkles } from '@/system'

export const imageHeight = createVar()

export const container = style([
  sprinkles({
    fontFamily: 'pretendard',
  }),
  {
    position: 'relative',
    marginBottom: '20px',
    background: 'white',
    cursor: 'pointer',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',

    height: imageHeight,
  },
])

export const imageWrapper = style([
  sprinkles({}),
  {
    position: 'relative',
  },
  {
    width: '100%',
    height: '100%',
  },
])

export const image = style([
  sprinkles({}),
  {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    // borderRadius: '1rem',
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

export const front = style([
  {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',

    display: 'flex',
    flexDirection: 'column',
    // pointerEvents: 'none',
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
