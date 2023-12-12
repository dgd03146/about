import React, {
  AllHTMLAttributes,
  ElementType,
  createElement,
  forwardRef,
} from 'react'
import classnames from 'classnames'
import { Sprinkles, sprinkles } from '@/design/styles/sprinkles.css'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '@/design/types/Polymorphic'
import * as resetStyles from '../../styles/reset.css'

export interface Props
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      | 'className'
      | 'content'
      | 'height'
      | 'translate'
      | 'color'
      | 'width'
      | 'cursor'
    >,
    Sprinkles {
  component?: ElementType
  className?: Parameters<typeof classnames>[0]
}

export type BoxProps<
  C extends React.ElementType,
  ExtraProps = {},
> = PolymorphicComponentPropWithRef<C, Props & ExtraProps>

type BoxComponent = <C extends React.ElementType = 'div', ExtraProps = {}>(
  props: BoxProps<C, ExtraProps>,
) => React.ReactNode | null

export const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = 'div', ExtraProps = {}>(
    {
      as,
      padding,
      paddingX,
      paddingY,
      paddingTop,
      paddingBottom,
      paddingLeft,
      paddingRight,
      margin,
      marginX,
      marginY,
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      flexGrow,
      flexShrink,
      borderRadius,
      position,
      top,
      bottom,
      left,
      right,
      inset,
      background,
      color,
      width,
      zIndex,
      opacity,
      pointerEvents,
      cursor,
      textAlign,
      maxWidth,
      minWidth,
      transition,
      overflow,
      gridTemplateColumns,
      gridColumnGap,
      className,
      ...restProps
    }: BoxProps<C, ExtraProps>,
    ref?: PolymorphicRef<C>,
  ) => {
    const component = as || 'div'

    const atomClasses = classnames(
      className,
      resetStyles.base,
      resetStyles.element[component as keyof typeof resetStyles.element],
      sprinkles({
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        margin,
        marginX,
        marginY,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        display,
        alignItems,
        justifyContent,
        flexDirection,
        flexWrap,
        flexGrow,
        flexShrink,
        borderRadius,
        position,
        top,
        bottom,
        left,
        right,
        inset,
        background,
        color,
        width,
        zIndex,
        opacity,
        pointerEvents,
        cursor,
        textAlign,
        maxWidth,
        minWidth,
        transition,
        overflow,
        gridTemplateColumns,
        gridColumnGap,
      }),
    )

    return createElement(component, {
      className: atomClasses,
      ref,
      ...restProps,
    })
  },
)
