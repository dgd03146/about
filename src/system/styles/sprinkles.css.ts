import { calc } from '@vanilla-extract/css-utils'
import {
  defineProperties,
  createSprinkles,
  // ConditionalValue,
} from '@vanilla-extract/sprinkles'

import { breakpoints } from '../tokens/breakPoints'
import { vars } from './theme.css'

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
    miniTablet: {
      '@media': `screen and (min-width: ${breakpoints.miniTablet})`,
    },
    tablet: { '@media': `screen and (min-width: ${breakpoints.tablet})` },
    laptop: { '@media': `screen and (min-width: ${breakpoints.laptop})` },
    desktop: { '@media': `screen and (min-width: ${breakpoints.desktop})` },
    tv: { '@media': `screen and (min-width: ${breakpoints.tv})` },
  },
  defaultCondition: 'mobile',
  responsiveArray: ['mobile', 'tablet', 'laptop', 'desktop', 'tv'],
  properties: {
    position: ['absolute', 'relative', 'fixed', 'sticky'],
    display: ['none', 'block', 'inline', 'inline-block', 'flex', 'grid'],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    justifyContent: [
      'flex-start',
      'center',
      'flex-end',
      'space-between',
      'space-around',
      'space-evenly',
    ],
    flexWrap: ['wrap', 'nowrap'],
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
      '1/2': 'repeat(2, 1fr)',
      '1/4': 'repeat(4, 1fr)',
      '1/6': 'repeat(6, 1fr)',
      '1/8': 'repeat(8, 1fr)',
      '1/12': 'repeat(12, 1fr)',
      '1/5': 'repeat(5, 1fr)',
    },
    gridColumn: {
      '1/2': '1/2',
      '1/3': '1/3',
      '1/7': '1 / 7',
      '1/8': '1/8',
      '1/9': '1 / 9',
      '1/13': '1 / 13',
      auto: 'auto',
    },
    'column-gap': space,
    'row-gap': space,
    gridColumnGap: ['8px', '16px', '17px', '20px', '24px', '32px', '40px'],
    width: vars.contentWidth,
    height: vars.contentWidth,
    minWidth: vars.contentWidth,
    maxWidth: vars.contentWidth,
    minHeight: vars.contentWidth,
    maxHeight: vars.contentWidth,
    transition: {
      slow: 'transform .3s ease, opacity .3s ease',
      fast: 'transform .15s ease, opacity .15s ease',
    },
    fontSize: vars.fontSizes,
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    margin: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    gapX: ['column-gap'],
    gapY: ['row-gap'],
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

    fontFamily: vars.font,
  },
})

export const unresponsiveProperties = defineProperties({
  properties: {
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1, 40],
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
