import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const SlideInStyle = style([
  sprinkles({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'full',
    height: 'h-screen',
    // position: 'fixed',
    // bottom: 0,
    // width: 'w-screen',

    background: 'blue',
  }),
  {
    // zIndex: 1000,
    transformOrigin: 'bottom',
  },
])

export const SlideOutStyle = style([
  sprinkles({
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'full',
    height: 'h-screen',
    // position: 'fixed',
    // bottom: 0,
    // width: 'w-screen',

    background: 'blue',
  }),
  {
    // zIndex: 1000,
    transformOrigin: 'top',
  },
])
