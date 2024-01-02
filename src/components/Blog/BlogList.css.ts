import { style } from '@vanilla-extract/css'
import { calc } from '@vanilla-extract/css-utils'

export const container = style([
  {
    height: calc.subtract('100vh', '280px'),
  },
])

export const carousel = style([
  {
    cursor: 'grab',
    overflow: 'hidden',
  },
])

export const innerCarousel = style([
  {
    display: 'flex',
    columnGap: '40px',
  },
])

export const imageWrapper = style([
  {
    minHeight: '250px',
    minWidth: '250px',
    padding: '40px 0',
  },
])

export const item = style([
  {
    pointerEvents: 'none',
    // minHeight: '40rem',
    // width: '30rem',
    // padding: '40px',
  },
])
export const image = style([
  {
    width: '100%',
    height: '100%',
    // borderRadius: '1rem',
  },
])
