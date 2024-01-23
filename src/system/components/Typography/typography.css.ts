import { recipe } from '@vanilla-extract/recipes'

import { sprinkles } from '@/system'

export const HeadingStyle = recipe({
  base: sprinkles({
    // paddingBottom: 'medium',
    fontWeight: 'semibold',
    display: 'block',
    margin: 'none',
  }),
  variants: {
    as: {
      h1: sprinkles({
        fontSize: '3xl',
        fontWeight: 'bold',
      }),
      h2: sprinkles({
        fontSize: '2xl',
        fontWeight: 'bold',
      }),
      h3: sprinkles({
        fontSize: 'xl',
      }),
      h4: sprinkles({
        fontSize: 'lg',
      }),
    },
  },
  defaultVariants: {
    as: 'h2',
  },
})

// FIXME: span, blockquote, p태그 별로 다 다르게 고치기
export const TextStyle = recipe({
  base: sprinkles({
    margin: 'none',
  }),
  variants: {
    variant: {
      solid: sprinkles({
        background: 'yellow',
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
