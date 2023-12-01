import { ReactNode, ElementType, forwardRef } from 'react'

import { Box, BoxProps } from '..'
import { TextStyle } from './typography.css'

import { PolymorphicRef } from '@/design/types/Polymorphic'

interface Props {
  text?: string
  children?: ReactNode
  variant?: 'solid' | 'transparent'
  as?: 'p' | 'span'
}

export type TextProps<C extends ElementType = 'p'> = BoxProps<C, Props>

type TextComponent = <C extends ElementType = 'p'>(
  props: TextProps<C>,
) => ReactNode | null

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'h1'>(
    { as, text, variant, children }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const ComponentType: ElementType = as || 'p'
    const TextClass = TextStyle({ variant })

    return (
      <Box<typeof ComponentType, Props>
        as={as}
        display="block"
        ref={ref}
        className={TextClass}
      >
        {text}
        {children}
      </Box>
    )
  },
)
