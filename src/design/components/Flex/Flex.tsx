import type { ReactNode } from 'react'
import { forwardRef } from 'react'

import { Box, BoxProps } from '../Box'
import { Sprinkles } from '@/design/sprinkles.css'

interface FlexProps extends BoxProps {
  direction?: Sprinkles['flexDirection']
  grow?: Sprinkles['flexGrow']
  shrink?: Sprinkles['flexShrink']
  wrap?: Sprinkles['flexWrap']
}

type FlexComponent = (props: FlexProps) => ReactNode | null

export const Flex: FlexComponent = forwardRef((props, ref) => {
  const { direction, grow, shrink, wrap, ...restProps } = props

  return (
    <Box
      ref={ref}
      display="flex"
      flexDirection={direction}
      flexGrow={grow}
      flexShrink={shrink}
      flexWrap={wrap}
      {...restProps}
    />
  )
})
