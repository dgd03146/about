// import type { ReactNode } from 'react'
// import { forwardRef } from 'react'

// import { Box } from '../Box'
// import { Sprinkles } from '@/design/components/sprinkles.css'
// import { PolymorphicComponentPropWithRef } from '@/design/types/Polymorphic'

// interface Props {
//   direction?: Sprinkles['flexDirection']
//   grow?: Sprinkles['flexGrow']
//   shrink?: Sprinkles['flexShrink']
//   wrap?: Sprinkles['flexWrap']
// }

// type FlexProps = PolymorphicComponentPropWithRef<typeof Box, Props>

// type FlexComponent = (props: FlexProps) => ReactNode | null

// export const Flex: FlexComponent = forwardRef((props, ref) => {
//   const { direction, grow, shrink, wrap, ...restProps } = props

//   return (
//     <Box
//       ref={ref}
//       display="flex"
//       flexDirection={direction}
//       flexGrow={grow}
//       flexShrink={shrink}
//       flexWrap={wrap}
//       {...restProps}
//     />
//   )
// })
