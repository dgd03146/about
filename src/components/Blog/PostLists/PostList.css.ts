import { style } from '@vanilla-extract/css'

// import { sprinkles } from '@/system'

// export const posts = style([
//   sprinkles({
//     paddingY: '5',
//   }),
//   {
//     columns: 2,
//     // display: 'grid',
//     // gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//     gridRowGap: '1rem',
//     gridColumnGap: '1rem',
//   },
// ])

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
