import type { ElementType, ReactNode } from 'react'
import { forwardRef } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/design/types/Polymorphic'

export type BoxProps<C extends ElementType> = PolymorphicComponentPropWithRef<C>

type BoxComponent = <C extends ElementType = 'div'>(
  props: BoxProps<C>,
) => ReactNode | null

export const Box: BoxComponent = forwardRef(
  <C extends ElementType = 'div'>(
    { as, children }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div'

    return <Component ref={ref}>{children}</Component>
  },
)
