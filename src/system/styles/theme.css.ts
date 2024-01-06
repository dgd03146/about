import { createGlobalTheme } from '@vanilla-extract/css'
import colors from 'tailwindcss/colors'
import { customColors } from '../tokens/colors'

const grid = 4
export const px = (value: string | number) => `${value}px`

export const tailwindPalette = {
  ...customColors,
  transparent: 'transparent',

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

const sizeValues = {
  '0': '0px',
  '1px': '1px',
  '0.5': '0.125rem', // 2px
  '1': '0.25rem', // 4px
  '1.5': '0.375rem', // 6px
  '2': '0.5rem', // 8px
  '2.5': '0.625rem', // 10px
  '3': '0.75rem', // 12px
  '3.5': '0.875rem', // 14px
  '4': '1rem', // 16px
  '5': '1.25rem', // 20px
  '6': '1.5rem', // 24px
  '7': '1.75rem', // 28px
  '8': '2rem', // 32px
  '9': '2.25rem', // 36px
  '10': '2.5rem', // 40px
  '11': '2.75rem', // 44px
  '12': '3rem', // 48px
  '14': '3.5rem', // 56px
  '16': '4rem', // 64px
  '20': '5rem', // 80px
  '24': '6rem', // 96px
  '28': '7rem', // 112px
  '32': '8rem', // 128px
  '36': '9rem', // 144px
  '40': '10rem', // 160px
  '44': '11rem', // 176px
  '48': '12rem', // 192px
  '52': '13rem', // 208px
  '56': '14rem', // 224px
  '60': '15rem', // 240px
  '64': '16rem', // 256px
  '72': '18rem', // 288px
  '76': '19rem', // 304px
  '80': '20rem', // 320px
  '96': '24rem', // 384px
}

export const vars = createGlobalTheme(':root', {
  font: {
    // kor: `var(--font-noto-sans-kor)`,
    en: 'var(--font-inter)',
    hero: 'var(--font-rubik)',
    dm: 'var(--font-dm-sans)',
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'ml, "Roboto Mono", Menlo, monospace',
    onest: 'var(--font-onest)',
    playfair: 'var(--font-playfair)',
  },
  grid: px(grid),
  spacing: {
    ...sizeValues,
    none: '0',
    xsmall: px(1 * grid),
    small: px(2 * grid),
    medium: px(3 * grid),
    large: px(5 * grid),
    xlarge: px(8 * grid),
    xxlarge: px(12 * grid),
    xxxlarge: px(24 * grid),
    auto: 'auto',
    full: '100%',
    '70px': '70px',
    'h-screen': '100vh',
    'w-screen': '100vw',
  },

  contentWidth: {
    xsmall: px(375), // mobile
    small: px(768), // tablet
    standard: px(740),
    large: px(1080), // laptop
    xlarge: px(1200), // desktop
    xxlarge: px(1920), // tv
    'w-1/5': '20%',
    'w-2/5': '40%',
    'w-1/2': '50%',
    'w-3/5': '60%',
    'w-4/5': '80%',
    'w-11/12': '92%',
    full: '100%',

    'h-screen': '100vh',
    'w-screen': '100vw',
    auto: 'auto',
    'fit-content': 'fit-content',
    'max-content': 'max-content',
    'min-content': 'min-content',

    ...sizeValues,
  },
  fontSizes: {
    xs: px(12),
    sm: px(14),
    base: px(16),
    lg: px(18),
    xl: px(20),
    '2xl': px(24),
    '3xl': px(30),
    '4xl': px(36),
    '5xl': px(48),
    '6xl': px(60),
    '7xl': px(72),
    '76px': px(76),
    '80px': px(80),
    '84px': px(84),
    '88px': px(88),
    '92px': px(92),
    '8xl': px(96),
    '9xl': px(128),
    '10xl': px(144),
    '11xl': px(160),
    '12xl': px(180),
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
