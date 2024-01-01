import { Children, ReactNode, forwardRef, ElementType } from 'react'

import { BoxProps, Box } from '../Box/Box'
import { Space } from '@/design/styles/sprinkles.css'
import { PolymorphicRef } from '@/design/types/Polymorphic'

type Props = {
  children?: ReactNode
  space?: Space
}

type StackProps<C extends ElementType> = BoxProps<C, Props>

type StackComponent = <C extends React.ElementType = 'div'>(
  props: StackProps<C>,
) => React.ReactNode | null

export const Stack: StackComponent = forwardRef(
  <C extends ElementType = 'div'>(
    { as, children, space, alignItems, ...restProps }: StackProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const stackItems = Children.toArray(children)

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
