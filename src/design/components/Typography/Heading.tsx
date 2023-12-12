import { ReactNode, forwardRef } from 'react'
import { PolymorphicRef } from '@/design/types/Polymorphic'
import { Box, BoxProps } from '..'

import * as styles from './typography.css'

interface Props {
  children: ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4'
}

type HeadingProps<C extends React.ElementType> = BoxProps<C, Props>

type HeadingComponent = <C extends React.ElementType = 'h2'>(
  props: HeadingProps<C>,
) => React.ReactNode | null

export const Heading: HeadingComponent = forwardRef(
  <C extends React.ElementType = 'h1'>(
    { as, children, ...restProps }: HeadingProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const headingClass = styles.HeadingStyle({ as })
    const ElementType: React.ElementType = as || 'h2'

    return (
      <Box<typeof ElementType, Props>
        as={as}
        className={headingClass}
        ref={ref}
        {...restProps}
      >
        {children}
      </Box>
    )
  },
)
