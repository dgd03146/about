import React, { forwardRef } from 'react'
import { Box, BoxProps } from '../Box/Box'
import { vars } from '@/design/theme.css'
import { PolymorphicRef } from '@/design/types/Polymorphic'

type Props = {
  centerContent?: boolean
  maxWidth?: keyof typeof vars.contentWidth
}

type ContainerProps<C extends React.ElementType> = BoxProps<C, Props>

type ContainerComponent = <C extends React.ElementType = 'div'>(
  props: ContainerProps<C>,
) => React.ReactNode | null

export const Container: ContainerComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, centerContent, maxWidth, ...restProps }: ContainerProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const alignItems = centerContent ? 'center' : 'stretch'
    const flexDirection = centerContent ? 'column' : 'row'
    const display = centerContent ? 'flex' : 'block'

    const ElementType: React.ElementType = as || 'div'

    return (
      <Box<typeof ElementType, Props>
        as={as}
        marginLeft="auto"
        marginRight="auto"
        maxWidth={maxWidth || 'large'}
        display={display}
        alignItems={alignItems}
        flexDirection={flexDirection}
        ref={ref}
        {...restProps}
      />
    )
  },
)
