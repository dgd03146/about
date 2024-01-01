import React, { forwardRef } from 'react'
import { PolymorphicRef } from '@/system'
import { vars } from '@/system/styles/theme.css'
import { Box, BoxProps } from '../Box/Box'

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
    const display = centerContent ? 'flex' : 'block'
    const alignItems = centerContent ? 'center' : 'stretch'
    const flexDirection = centerContent ? 'column' : 'row'

    const ElementType: React.ElementType = as || 'div'

    return (
      <Box<typeof ElementType, Props>
        as={as}
        marginLeft="auto"
        marginRight="auto"
        maxWidth={maxWidth || 'full'}
        display={display}
        alignItems={alignItems}
        flexDirection={flexDirection}
        ref={ref}
        {...restProps}
      />
    )
  },
)
