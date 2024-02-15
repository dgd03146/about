import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const imageWrapper = style([
  sprinkles({
    position: 'relative',
    marginBottom: 'large',
    width: 'full',
  }),
  {
    aspectRatio: '4/5',
  },
])

export const image = style([
  sprinkles({
    width: 'full',
    height: 'full',
    cursor: 'pointer',
  }),
  {
    objectFit: 'cover',
    // borderRadius: '1rem',
  },
])
