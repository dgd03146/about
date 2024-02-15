import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const container = style([
  sprinkles({
    width: 'full',
    height: 'full',
  }),
  {},
])

export const imageContainer = style([
  sprinkles({
    width: 'full',
    // paddingX: 'large',
  }),
  {
    maxWidth: '700px',
    cursor: 'default',
  },
])

export const imageWrapper = style([
  sprinkles({
    position: 'relative',
  }),
  {
    aspectRatio: '1/1',
  },
])

export const image = style([
  sprinkles({
    width: 'full',
    height: 'full',
  }),
  {
    objectFit: 'cover',
  },
])

export const motionBox = style([
  sprinkles({
    padding: 'small',
    background: 'white',
  }),
])
