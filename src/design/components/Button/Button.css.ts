import { recipe } from '@vanilla-extract/recipes'
import { sprinkles } from '@/design/styles/sprinkles.css'

export const buttonStyle = recipe({
  base: sprinkles({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    paddingY: {
      mobile: 'medium',
      tablet: 'large',
    },
    paddingX: {
      mobile: 'large',
      tablet: 'xlarge',
    },
    border: 'none',
    borderRadius: 'large',
  }),
  variants: {
    variant: {
      solid: sprinkles({
        background: 'pink600',
        color: 'white',
      }),
      transparent: sprinkles({
        color: 'gray100',
        background: 'blue500',
      }),
    },
  },
})
