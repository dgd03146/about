import React, { forwardRef } from 'react'
import { Box } from '..'

import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/design/types/Polymorphic'
import { vars } from '@/design/vars.css'

interface Props {
  centerContent?: boolean
  maxWidth?: keyof typeof vars.contentWidth
}

export type ContainerProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, Props>

export const Container = forwardRef(
  <C extends React.ElementType = 'div'>(
    { maxWidth, centerContent, ...restProps }: ContainerProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const alignItems = centerContent ? 'center' : 'stretch'
    const flexDirection = centerContent ? 'column' : 'row'

    return (
      <Box
        maxWidth={maxWidth}
        marginLeft="auto"
        marginRight="auto"
        alignItems={alignItems}
        flexDirection={flexDirection}
        ref={ref}
        {...restProps}
      />
    )
  },
)
