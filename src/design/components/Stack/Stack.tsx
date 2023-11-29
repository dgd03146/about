import { Children, ReactNode, forwardRef, ElementType } from 'react'

import { BoxProps, Box } from '../Box/Box'
import {
  mapResponsiveValue,
  ResponsiveValue,
  Space,
} from '@/design/styles/sprinkles.css'
import { PolymorphicRef } from '@/design/types/Polymorphic'

type Props = {
  children?: ReactNode
  space?: Space
  align?: ResponsiveValue<'left' | 'center' | 'right'>
}

type StackProps<C extends ElementType> = BoxProps<C, Props>

const alignToFlexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const

type StackComponent = <C extends React.ElementType = 'div'>(
  props: StackProps<C>,
) => React.ReactNode | null

export const Stack: StackComponent = forwardRef(
  <C extends ElementType = 'div'>(
    { as, children, space, align, ...restProps }: StackProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const stackItems = Children.toArray(children)
    const alignItems = align
      ? mapResponsiveValue(align, (value) => alignToFlexAlign[value])
      : undefined

    const ComponentType: React.ElementType = as || 'div'

    return (
      <Box<typeof ComponentType, Props>
        ref={ref}
        display="flex"
        flexDirection="column"
        alignItems={alignItems}
        paddingBottom={space}
        {...restProps}
      >
        {stackItems.map((item, index) => (
          <Box
            key={index}
            paddingBottom={index !== stackItems.length - 1 ? space : undefined}
          >
            {item}
          </Box>
        ))}
      </Box>
    )
  },
)
