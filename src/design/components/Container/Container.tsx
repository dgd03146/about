import React, { forwardRef } from 'react'
import { Box } from '..'
import { BoxProps } from '../Box/Box'
import { PolymorphicRef } from '@/design/types/Polymorphic'

export const Container = forwardRef(
  <C extends React.ElementType = 'div'>(
    { ...restProps }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    return <Box marginLeft="auto" marginRight="auto" {...restProps} ref={ref} />
  },
)
