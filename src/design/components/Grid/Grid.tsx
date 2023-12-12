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

export type GridProps<C extends React.ElementType> = BoxProps<C, Props>

type GridComponent = <C extends React.ElementType = 'div'>(
  props: GridProps<C>,
) => React.ReactNode | null

export const Grid: GridComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, direction, grow, shrink, wrap, ...restProps }: GridProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const ElementType: React.ElementType = as || 'div'

    return (
      <Box<typeof ElementType, Props>
        as={as}
        display="grid"
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
