import { style } from '@vanilla-extract/css'

export const masonryGrid = style({
  display: 'flex',
  // marginLeft: '30px',
  columnGap: '1rem',

  width: 'auto',
})

export const masonryGridColumn = style({
  // paddingLeft: '30px',
  backgroundClip: 'padding-box',
})
