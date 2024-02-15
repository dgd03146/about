import { style } from '@vanilla-extract/css'
import { sprinkles } from '@/system'

export const container = style([
  sprinkles({
    position: 'fixed',
    top: 0,
    left: 0,
    // display: 'flex',
    // flexDirection: 'column',

    width: 'full',
    height: 'full',

    cursor: 'pointer',
  }),
  {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 50,
    // opacity: '70%',
  },
])

export const modal = style([
  sprinkles({
    marginX: 'auto',
    width: '4/5',

    margin: 'none',
    padding: 'none',
  }),

  {
    paddingTop: '70px',
    maxWidth: '700px',
  },
])
