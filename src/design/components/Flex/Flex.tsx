import React, { forwardRef } from 'react'
import { Box } from '..'
import {
  responsiveProperties,
  unresponsiveProperties,
} from '../../styles/sprinkles.css'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/design/types/Polymorphic'

interface Props {
  direction?: keyof typeof responsiveProperties.styles.flexDirection.values
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values
  wrap?: keyof typeof unresponsiveProperties.styles.flexWrap.values
}

export type FlexProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, Props>

export const Flex = forwardRef(
  <C extends React.ElementType = 'div'>(
    { direction, grow, shrink, wrap, ...restProps }: FlexProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box
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
