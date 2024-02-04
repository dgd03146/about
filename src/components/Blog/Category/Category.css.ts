import { createVar, style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'
import { color } from '@/system/tokens'

export const textColor = createVar()

export const container = style([
  sprinkles({
    display: 'flex',
  }),
])

export const categoryContainer = style([
  sprinkles({
    display: 'flex',
    width: 'full',
    justifyContent: 'center',
    marginY: 'xlarge',
    gapX: 'medium',
  }),
])

export const categoryName = style([
  sprinkles({
    fontSize: '2xl',
    margin: 'none',
    fontFamily: 'hero',
  }),
  {
    color: textColor,
    // FIXME: 보고 바꿀것
    ':hover': {
      color: color.green,
    },
    transition: 'ease-out 0.3s',
  },
])
