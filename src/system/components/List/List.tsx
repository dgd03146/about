import React, {
  forwardRef,
  ElementType,
  ReactNode,
  PropsWithChildren,
  DetailedHTMLProps,
  HTMLAttributes,
  ComponentType,
} from 'react'
import { PolymorphicRef } from '@/system'
import { Box, BoxProps } from '..'
import ListItem from './ListItem'

interface Props<T>
  extends PropsWithChildren<
    DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>
  > {
  items: T[]
  render: (item: T) => ReactNode
  keyExtractor: (item: T) => string
  rightControls?: ReactNode
  wrapperComponent?: ComponentType<any>
}

type ListProps<T, C extends ElementType> = BoxProps<C, Props<T>>

type ListComponent = <T, C extends React.ElementType = 'div'>(
  props: ListProps<T, C>,
) => React.ReactNode | null

export const List: ListComponent = forwardRef(
  <T, C extends ElementType = 'div'>(
    {
      as,
      items,
      render,
      keyExtractor,
      rightControls,
      wrapperComponent: Wrapper = Box,
      ...restProps
    }: ListProps<T, C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Container = Wrapper || Box
    const ContainerType = as || 'div'

    return (
      <Container as={ContainerType} {...restProps} ref={ref}>
        {items.map((item) => (
          <ListItem key={keyExtractor(item)} rightControls={rightControls}>
            {render(item)}
          </ListItem>
        ))}
      </Container>
    )
  },
)
