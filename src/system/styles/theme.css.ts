import { createGlobalTheme } from '@vanilla-extract/css'
import { color } from '../tokens/colors'

const grid = 4
export const px = (value: string | number) => `${value}px`

const space = {
  '0': px(0),
  '1px': px(1 * grid),
  '0.5': px(0.5 * grid), // 2px
  '1': px(1 * grid), // 4px
  '1.5': px(1.5 * grid), // 6px
  '2': px(2 * grid), // 8px
  '2.5': px(2.5 * grid), // 10px
  '3': px(3 * grid), // 12px
  '3.5': px(3.5 * grid), // 14px
  '4': px(4 * grid), // 16px
  '5': px(5 * grid), // 20px
  '6': px(6 * grid), // 24px
  '7': px(7 * grid), // 28px
  '8': px(8 * grid), // 32px
  '9': px(9 * grid), // 36px
  '10': px(10 * grid), // 40px
  '11': px(11 * grid), // 44px
  '12': px(12 * grid), // 48px
  '14': px(14 * grid), // 56px
  '16': px(16 * grid), // 64px
  '20': px(20 * grid), // 80px
  '24': px(24 * grid), // 96px
  '28': px(28 * grid), // 112px
  '32': px(32 * grid), // 128px
  '36': px(36 * grid), // 144px
  '40': px(40 * grid), // 160px
  '44': px(44 * grid), // 176px
  '48': px(48 * grid), // 192px
  '52': px(52 * grid), // 208px
  '56': px(56 * grid), // 224px
  '60': px(60 * grid), // 240px
  '64': px(64 * grid), // 256px
  '72': px(72 * grid), // 288px
  '76': px(76 * grid), // 304px
  '80': px(80 * grid), // 320px
  '96': px(96 * grid), // 384px

  '100vh': '100vh',
  '100vw': '100vw',
}

export const vars = createGlobalTheme(':root', {
  font: {
    // kor: `var(--font-noto-sans-kor)`,
    pretendard: 'var(--font-pretendard)',
    nanumMyeongjo: 'var(--font-nanumMyeongjo)',
    inter: 'var(--font-inter)',
    hero: 'var(--font-rubik)',
    dm: 'var(--font-dm-sans)',
    brand: 'Shrikhand, "Helvetica Neue", HelveticaNeue, Helvetica, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    code: 'ml, "Roboto Mono", Menlo, monospace',

    playfair: 'var(--font-playfair)',
  },
  grid: px(grid),
  spacing: {
    ...space,
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
    fit: 'fit-content',
    max: 'max-content',
    min: 'min-content',

    ...space,
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
  palette: color,
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
