import { ReactNode, ElementType, forwardRef } from 'react'

import { PolymorphicRef } from '@/system'
import { Box, BoxProps } from '..'
import { TextStyle } from './typography.css'

interface Props {
  text?: string
  children?: ReactNode
  variant?: 'solid' | 'transparent'
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid'
  as?: 'p' | 'span'
}

export type TextProps<C extends ElementType = 'p'> = BoxProps<C, Props>

type TextComponent = <C extends ElementType = 'p'>(
  props: TextProps<C>,
) => ReactNode | null

export const Text: TextComponent = forwardRef(
  <C extends React.ElementType = 'p'>(
    { as, text, display, variant, children, ...restProps }: TextProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const TextClass = TextStyle({ variant })
    const ComponentType: ElementType = as || 'p'
    const textDisplay = display || 'block'
    return (
      <Box<typeof ComponentType, Props>
        as={as}
        display={textDisplay}
        ref={ref}
        className={TextClass}
        {...restProps}
      >
        {text}
        {children}
      </Box>
    )
  },
)
