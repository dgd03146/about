import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { sprinkles } from '@/system'

export const ContainerStyle = style([
  sprinkles({
    fontFamily: 'hero',
  }),
  {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    height: calc.subtract('100vh', '280px'),
    minHeight: '500px',
  },
])

export const HeroStyle = style([sprinkles({})])
