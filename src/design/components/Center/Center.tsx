import React, { forwardRef } from 'react'
import { Box } from '..'
import {
  PolymorphicRef,
  PolymorphicComponentPropWithRef,
} from '@/design/types/Polymorphic'

export type CenterProps<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C>

export const Center = forwardRef(
  <C extends React.ElementType = 'div'>(
    { ...restProps }: CenterProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        ref={ref}
        {...restProps}
      />
    )
  },
)
