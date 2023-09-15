// import React, { ElementType } from 'react'
// import clsx from 'clsx'

// import * as styles from './ButtonBase.css'
// import { PolymorphicComponentPropWithRef } from '@/design/types/Polymorphic'

// export type ButtonProps<C extends ElementType> =
//   PolymorphicComponentPropWithRef<
//     C,
//     {
//       children?: React.ReactNode
//       href?: string
//       type?: 'button' | 'submit' | 'reset'
//       disabled?: boolean
//     }
//   >

// export type ButtonBaseProps<C extends ElementType> =
//   PolymorphicComponentPropWithRef<C>

// // type PolymorphicButtonBase = Polymorphic.ForwardRefComponent<'button', Props>

// // export type ButtonBaseProps = Polymorphic.OwnProps<PolymorphicButtonBase>

// type ButtonBaseComponent = <C extends ElementType = 'button'>(
//   props: ButtonProps<C>,
// ) => ReactNode | null

// export const ButtonBase = React.forwardRef((props, ref) => {
//   const {
//     className = '',
//     as: asProp = 'button',
//     disabled = false,
//     type = 'button',
//     ...restProps
//   } = props

//   const Component = (restProps.href ? 'a' : asProp) as 'button'

//   return (
//     <Component
//       ref={ref}
//       type={type}
//       className={clsx(
//         styles.root,
//         {
//           [styles.disabled]: disabled,
//         },
//         className,
//       )}
//       {...restProps}
//     />
//     // className={`${styles.root} ${disabled ? styles.disabled : ''} ${className || ''}`}
//   )
// }) as PolymorphicButtonBase
