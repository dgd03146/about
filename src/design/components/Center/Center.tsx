import React, { forwardRef } from 'react'
import { PolymorphicRef } from '@/design/types/Polymorphic'
import { Box, BoxProps } from '../Box/Box'

type CenterProps<C extends React.ElementType> = BoxProps<C, {}>

type CenterComponent = <C extends React.ElementType = 'div'>(
  props: CenterProps<C>,
) => React.ReactNode | null

export const Center: CenterComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { ...restProps }: CenterProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return (
      <Box<C>
        display="flex"
        alignItems="center"
        justifyContent="center"
        ref={ref}
        {...restProps}
      />
    )
  },
)
