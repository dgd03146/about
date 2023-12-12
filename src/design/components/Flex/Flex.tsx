import React, { forwardRef } from 'react'
import { PolymorphicRef } from '@/design/types/Polymorphic'
import { Box } from '..'
import {
  responsiveProperties,
  unresponsiveProperties,
} from '../../styles/sprinkles.css'
import { BoxProps } from '../Box/Box'

type Props = {
  direction?: keyof typeof responsiveProperties.styles.flexDirection.values
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values
  wrap?: keyof typeof unresponsiveProperties.styles.flexWrap.values
}

export type FlexProps<C extends React.ElementType> = BoxProps<C, Props>

type FlexComponent = <C extends React.ElementType = 'div'>(
  props: FlexProps<C>,
) => React.ReactNode | null

export const Flex: FlexComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, direction, grow, shrink, wrap, ...restProps }: FlexProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const ElementType: React.ElementType = as || 'div'
    return (
      <Box<typeof ElementType, Props>
        as={as}
        display="flex"
        ref={ref}
        flexDirection={direction}
        flexGrow={grow}
        flexShrink={shrink}
        flexWrap={wrap}
        {...restProps}
      />
    )
  },
)
