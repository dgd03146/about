import { createVar, style } from '@vanilla-extract/css'

import { sprinkles } from '@/system'

export const container = style([
  sprinkles({}),
  {
    marginBottom: '20px',
  },
])

export const imageHeight = createVar()

export const imageWrapper = style([
  sprinkles({}),
  {
    position: 'relative',
  },
  {
    width: '100%',
    height: imageHeight,
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
