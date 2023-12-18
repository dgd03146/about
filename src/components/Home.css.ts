import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'
import { sprinkles } from '@/system'

export const ContainerStyle = style([
  sprinkles({}),
  {
    // margin: 0,
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    height: calc.subtract('100%', '140px'),
  },
])

export const HeroStyle = style([sprinkles({})])
