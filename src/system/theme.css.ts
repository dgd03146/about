import { createGlobalTheme } from '@vanilla-extract/css'
import colors from 'tailwindcss/colors'

const grid = 4
export const px = (value: string | number) => `${value}px`

const tailwindPalette = {
  white: '#fff',
  black: '#0e0e10',
  primary: '#F0DC28',
  secondary: '#0F64CD',

  red: colors.red['500'],
  yellow: colors.yellow['300'],
  green50: colors.emerald['50'],
  green200: colors.emerald['200'],
  green300: colors.emerald['300'],
  green400: colors.emerald['400'],
  green500: colors.emerald['500'],
  green600: colors.emerald['600'],

  coolGray50: colors.coolGray['50'],
  coolGray100: colors.coolGray['100'],
  coolGray200: colors.coolGray['200'],
  coolGray300: colors.coolGray['300'],
  coolGray400: colors.coolGray['400'],
  coolGray500: colors.coolGray['500'],
  coolGray600: colors.coolGray['600'],
  coolGray700: colors.coolGray['700'],
  coolGray800: colors.coolGray['800'],
  coolGray900: colors.coolGray['900'],

  gray50: colors.gray['50'],
  gray100: colors.gray['100'],
  gray200: colors.gray['200'],
  gray300: colors.gray['300'],
  gray400: colors.gray['400'],
  gray500: colors.gray['500'],
  gray600: colors.gray['600'],
  gray700: colors.gray['700'],
  gray800: colors.gray['800'],
  gray900: colors.gray['900'],

  blueGray800: colors.blueGray['800'],
  blueGray900: colors.blueGray['900'],

  teal50: colors.teal['50'],
  teal100: colors.teal['100'],
  teal200: colors.teal['200'],
  teal200muted: '#b6eee3',
  teal300: colors.teal['300'],
  teal400: colors.teal['400'],
  teal500: colors.teal['500'],
  teal600: colors.teal['600'],
  teal700: colors.teal['700'],
  teal800: colors.teal['800'],
  teal900: colors.teal['900'],

  blue50: colors.sky['50'],
  blue100: colors.sky['100'],
  blue200: colors.sky['200'],
  blue300: colors.sky['300'],
  blue400: colors.sky['400'],
  blue500: colors.sky['500'],
  blue600: colors.sky['600'],
  blue700: colors.sky['700'],
  blue800: colors.sky['800'],
  blue900: colors.sky['900'],

  pink50: colors.fuchsia['50'],
  pink100: colors.fuchsia['100'],
  pink200: colors.fuchsia['200'],
  pink300: colors.fuchsia['300'],
  pink400: colors.fuchsia['400'],
  pink500: colors.fuchsia['500'],
  pink600: colors.fuchsia['600'],
  pink700: colors.fuchsia['700'],
  pink800: colors.fuchsia['800'],
  pink900: colors.fuchsia['900'],
}

export const vars = createGlobalTheme(':root', {
  fonts: {
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    heading:
      '"DM Sans", "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'ml, "Roboto Mono", Menlo, monospace',
  },
  grid: px(grid),
  spacing: {
    none: '0',
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
    auto: 'auto',
  },
  contentWidth: {
    xsmall: px(360), // mobile
    small: px(600), // tablet
    standard: px(740),
    large: px(1080), // laptop
    xlarge: px(1200), // desktop
    xxlarge: px(1920), // tv
    full: '100%',
  },
  fontSizes: {
    xsmall: px(12),
    small: px(14),
    medium: px(16),
    large: px(18),
    xlarge: px(20),
    xxlarge: px(24),
    xxxlarge: px(30),
    xxxxlarge: px(36),
    xxxxxlarge: px(48),
  },
  fontWeight: {
    normal: '400',
    semibold: '500',
    bold: '700',
  },
  palette: tailwindPalette,
  border: {
    width: {
      standard: px(1 * grid),
      large: px(2 * grid),
    },
    radius: {
      small: px(2 * grid),
      medium: px(4 * grid),
      large: px(7 * grid),
      full: '9999px',
    },
  },
})