import { Children, ReactNode, forwardRef, ElementType } from 'react'

import { BoxProps, Box } from '../Box/Box'
import {
  mapResponsiveValue,
  ResponsiveValue,
} from '@/design/styles/sprinkles.css'

type Props<C extends ElementType> = {
  children: ReactNode
  space: BoxProps<C>['paddingBottom']
  align?: ResponsiveValue<'left' | 'center' | 'right'>
}

type StackProps<C extends React.ElementType> = BoxProps<C, Props<C>>

const alignToFlexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
} as const

export const Stack = forwardRef(
  <C extends React.ElementType = 'div'>({
    children,
    space,
    align,
  }: StackProps<C>) => {
    const stackItems = Children.toArray(children)
    const alignItems = align
      ? mapResponsiveValue(align, (value) => alignToFlexAlign[value])
      : undefined

    return (
      <Box display="flex" flexDirection="column" alignItems={alignItems}>
        {stackItems.map((item, index) => (
          <Box
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            paddingBottom={index !== stackItems.length - 1 ? space : undefined}
          >
            {item}
          </Box>
        ))}
      </Box>
    )
  },
)
