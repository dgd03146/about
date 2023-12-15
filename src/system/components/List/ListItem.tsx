import React, {
  DetailedHTMLProps,
  ElementType,
  LiHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  forwardRef,
} from 'react'

import { PolymorphicRef } from '@/design/types/Polymorphic'
import { Box } from '..'
import { BoxProps } from '../Box/Box'

interface Props
  extends PropsWithChildren<
    DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>
  > {
  rightControls?: ReactNode
}

type ListItemProps<C extends ElementType> = BoxProps<C, Props>

type ListItemComponent = <C extends React.ElementType = 'div'>(
  props: ListItemProps<C>,
) => React.ReactNode | null

const ListItem: ListItemComponent = forwardRef(
  <C extends ElementType = 'div'>(
    { rightControls, children, as, ...restProps }: ListItemProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const BoxType = as || 'li'

    return (
      <Box<typeof BoxType, Props> as={BoxType} {...restProps} ref={ref}>
        {children}
        {rightControls}
      </Box>
    )
  },
)
export default ListItem
