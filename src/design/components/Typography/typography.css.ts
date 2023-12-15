import { recipe } from '@vanilla-extract/recipes'

import { sprinkles } from '@/design/styles/sprinkles.css'

export const HeadingStyle = recipe({
  base: sprinkles({
    paddingBottom: 'medium',
    fontWeight: 'semibold',
  }),
  variants: {
    as: {
      h1: sprinkles({
        fontSize: 'xxxlarge',
        fontWeight: 'bold',
      }),
      h2: sprinkles({
        fontSize: 'xxlarge',
        fontWeight: 'bold',
      }),
      h3: sprinkles({
        fontSize: 'xlarge',
      }),
      h4: sprinkles({
        fontSize: 'large',
      }),
    },
  },
  defaultVariants: {
    as: 'h2',
  },
})

// FIXME: change later
export const TextStyle = recipe({
  base: sprinkles({}),
  variants: {
    variant: {
      solid: sprinkles({
        background: 'yellow',
        paddingY: 'xxxlarge',
        // background: { lightMode: 'yellow', darkMode: 'gray100' },
        // color: { lightMode: 'white', darkMode: 'gray900' },
      }),
      transparent: sprinkles({
        color: 'teal200',
        // color: { lightMode: 'coolGray900', darkMode: 'gray100' },
      }),
    },
  },
})
