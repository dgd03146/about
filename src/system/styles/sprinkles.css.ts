import { calc } from '@vanilla-extract/css-utils'
import {
  defineProperties,
  createSprinkles,
  // ConditionalValue,
} from '@vanilla-extract/sprinkles'

import { vars } from '../theme.css'
import { breakpoints } from '../tokens/breakPoints'

const space = vars.spacing
export type Space = keyof typeof space

const negativeSpace = {
  '-xsmall': `${calc(space.xsmall).negate()}`,
  '-small': `${calc(space.small).negate()}`,
  '-medium': `${calc(space.medium).negate()}`,
  '-large': `${calc(space.large).negate()}`,
  '-xlarge': `${calc(space.xlarge).negate()}`,
  '-xxlarge': `${calc(space.xxlarge).negate()}`,
  '-xxxlarge': `${calc(space.xxxlarge).negate()}`,
}

const margins = {
  ...space,
  ...negativeSpace,
}

// FIXME: unify breakpoints
export const responsiveProperties = defineProperties({
  conditions: {
    mobile: { '@media': `screen and (min-width: ${breakpoints.mobile})` },
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
    laptop: { '@media': `screen and (min-width: ${breakpoints.laptop})` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
    tv: { '@media': `screen and (min-width: ${breakpoints.tv})` },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'laptop', 'desktop', 'tv'],
  properties: {
    position: ['absolute', 'relative', 'fixed'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'grid'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: ['flex-start', 'center', 'flex-end', 'space-between'],
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    pointerEvents: ['none', 'auto'],
    overflow: ['hidden'],
    opacity: [0, 1],
    textAlign: ['left', 'center', 'right'],
    gridTemplateColumns: {
      mobile: 'repeat(2, 1fr)',
      tablet: 'repeat(4, 1fr)',
      laptop: 'repeat(8, 1fr)',
      desktop: 'repeat(12, 1fr)',
    },
    gridColumn: {
      desktop: '1 / 13',
      laptop: '1 / 9',
      mobile: '1 / 7',
    },
    gridColumnGap: ['8px', '16px', '24px', '32px', '40px'],
    width: vars.contentWidth,
    minWidth: vars.contentWidth,
    maxWidth: vars.contentWidth,
    transition: {
      slow: 'transform .3s ease, opacity .3s ease',
      fast: 'transform .15s ease, opacity .15s ease',
    },
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
  },
})

export const lightMode = 'light'
export const darkMode = 'dark'

const colorProperties = defineProperties({
  // conditions: {
  //   lightMode: {},
  //   darkMode: { selector: `.${darkMode} &` },
  // },
  // defaultCondition: 'lightMode',
  properties: {
    background: vars.palette,
    color: vars.palette,
  },
})

export const textProperties = defineProperties({
  properties: {
    fontWeight: vars.fontWeight,
    fontSize: vars.fontSizes,
  },
})

export const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ['wrap', 'nowrap'],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1],
    border: ['none'],
    borderRadius: vars.border.radius,
    cursor: ['pointer'],
  },
  shorthands: {
    inset: ['top', 'bottom', 'left', 'right'],
  },
})

export const sprinkles = createSprinkles(
  textProperties,
  responsiveProperties,
  unresponsiveProperties,
  colorProperties,
)

export type Sprinkles = Parameters<typeof sprinkles>[0]

// import { createSprinkles, defineProperties } from '@vanilla-extract/sprinkles'

// import { breakpoints } from '@design/tokens'
// import { themeVars } from '../theme/createTheme'

// // using values from tokens due to CSS scoping issue when using `vars`

// const flexAlignment = ['flex-start', 'center', 'flex-end', 'stretch'] as const

// const spacing = {
//   ...themeVars.spacing,
//   auto: 'auto',
// }

// const size = {
//   ...spacing,
//   '1/2': '50%',
//   '1/3': '33.333333%',
//   '2/3': '66.666667%',
//   '1/4': '25%',
//   '2/4': '50%',
//   '3/4': '75%',
//   '1/5': '20%',
//   '2/5': '40%',
//   '3/5': '60%',
//   '4/5': '80%',
//   '1/6': '16.666667%',
//   '2/6': '33.333333%',
//   '3/6': '50%',
//   '4/6': '66.666667%',
//   '5/6': '83.333333%',
//   full: '100%',
// }

// export const unresponsiveStyles = defineProperties({
//   properties: {
//     zIndex: [-1, 0, 1],
//     borderRadius: themeVars.spacing,
//     borderStyle: [
//       'none',
//       'hidden',
//       'dotted',
//       'dashed',
//       'solid',
//       'double',
//       'groove',
//       'ridge',
//       'inset',
//       'outset',
//     ],
//     cursor: ['auto', 'default', 'pointer', 'grab', 'grabbing'],
//     outlineStyle: [
//       'auto',
//       'none',
//       'dotted',
//       'dashed',
//       'solid',
//       'double',
//       'groove',
//       'ridge',
//       'inset',
//       'outset',
//     ],
//     overflow: ['visible', 'hidden', 'clip', 'scroll', 'auto', 'initial'],
//     placeContent: ['center'],
//     pointerEvents: ['auto', 'none'],
//     textAlign: ['left', 'center', 'right'],
//     textDecorationLine: [
//       'none',
//       'underline',
//       'overline',
//       'line-through',
//       'blink',
//       'initial',
//     ],
//     userSelect: ['none', 'auto', 'text', 'contain', 'all'],
//     whiteSpace: [
//       'normal',
//       'nowrap',
//       'pre',
//       'pre-wrap',
//       'pre-line',
//       'break-spaces',
//     ],
//     wordBreak: ['normal', 'break-all', 'break-word', 'keep-all', 'initial'],
//   },
//   shorthands: {
//     textDecoration: ['textDecorationLine'],
//   },
// })

// export const colorStyles = defineProperties({
//   properties: {
//     colors: themeVars.colors,
//     background: themeVars.backgroundColors,
//   },
// })

// export const fontStyles = defineProperties({
//   properties: {
//     fontSize: themeVars.fontSize,
//     fontWeight: themeVars.fontWeight,
//   },
// })

// export const responsiveStyles = defineProperties({
//   conditions: {
//     xs: {},
//     sm: { '@media': `screen and (min-width: ${breakpoints.sm})` },
//     md: { '@media': `screen and (min-width: ${breakpoints.md})` },
//     lg: { '@media': `screen and (min-width: ${breakpoints.lg})` },
//     xl: { '@media': `screen and (min-width: ${breakpoints.xl})` },
//   },
//   defaultCondition: 'xs',

//   properties: {
//     pointerEvents: ['none', 'auto'],
//     opacity: [0, 1],
//     top: size,
//     right: size,
//     bottom: size,
//     left: size,
//     alignItems: [...flexAlignment, 'baseline'],
//     alignSelf: [...flexAlignment, 'baseline'],
//     display: [
//       'block',
//       'inline',
//       'inline-block',
//       'flex',
//       'inline-flex',
//       'grid',
//       'inline-grid',
//       'flow-root',
//       'contents',
//     ],

//     flex: {
//       1: '1 1 0%',
//       auto: '1 1 auto',
//       initial: '0 1 auto',
//       none: 'none',
//     },
//     flexDirection: ['row', 'column', 'row-reverse', 'column-reverse'],
//     flexGrow: [0, 1],
//     flexShrink: [0, 1],
//     flexWrap: ['wrap', 'nowrap', 'wrap-reverse'],
//     // don't include "auto" for gap
//     gap: themeVars.spacing,

//     height: { ...size },
//     justifyContent: [
//       ...flexAlignment,
//       'space-around',
//       'space-evenly',
//       'space-between',
//     ],
//     justifySelf: flexAlignment,
//     marginBottom: spacing,
//     marginLeft: spacing,
//     marginRight: spacing,
//     marginTop: spacing,
//     maxHeight: { ...size, 0: '0px', full: '100%' },
//     maxWidth: {
//       ...size,
//       ...breakpoints,
//       0: '0px',
//       none: 'none',
//       full: '100%',
//       'min-content': 'min-content',
//       'max-content': 'max-content',
//       prose: '60ch',
//     },
//     minHeight: { 0: '0px', full: '100%' },
//     minWidth: {
//       0: '0px',
//       full: '100%',
//       'min-content': 'min-content',
//       'max-content': 'max-content',
//     },
//     paddingBottom: spacing,
//     paddingLeft: spacing,
//     paddingRight: spacing,
//     paddingTop: spacing,
//     placeContent: ['center'],
//     position: ['absolute', 'relative', 'static', 'fixed', 'sticky', 'initial'],
//     textAlign: ['left', 'center', 'right'],
//     width: size,
//     transition: {
//       slow: 'transform .3s ease, opacity .3s ease',
//       fast: 'transform .15s ease, opacity .15s ease',
//     },
//   },
//   shorthands: {
//     inset: ['top', 'bottom', 'left', 'right'],
//     margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
//     marginX: ['marginLeft', 'marginRight'],
//     marginY: ['marginTop', 'marginBottom'],
//     padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
//     paddingX: ['paddingLeft', 'paddingRight'],
//     paddingY: ['paddingTop', 'paddingBottom'],
//     spacing: ['gap'],
//   },
// })

// export const sprinkles = createSprinkles(
//   unresponsiveStyles,
//   responsiveStyles,
//   colorStyles,
// )

// export type Sprinkles = Parameters<typeof sprinkles>[0]
