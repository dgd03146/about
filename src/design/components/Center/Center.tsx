import React, { forwardRef } from 'react'
import { Box } from '..'
import { BoxProps } from '../Box/Box'
import { PolymorphicRef } from '@/design/types/Polymorphic'

type CenterComponent = <C extends React.ElementType = 'div'>(
  props: BoxProps<C>,
) => React.ReactNode | null

export const Center: CenterComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { ...restProps }: BoxProps<C>,
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
