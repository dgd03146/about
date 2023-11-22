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
    borderRadius: 'large',
  }),
  variants: {
    variant: {
      solid: sprinkles({
        background: { lightMode: 'coolGray900', darkMode: 'gray100' },
        color: { lightMode: 'coolGray50', darkMode: 'gray900' },
      }),
      transparent: sprinkles({
        color: { lightMode: 'coolGray900', darkMode: 'gray100' },
      }),
    },
  },
})
