const primary = '#C8102E'
const primarySub = '#012169'
const secondary = '#0F64CD'
const black = '#000000'
const white = '#FFFFFF'
const grayScale = {
  w700: '#212529',
  w600: '#343A40',
  w500: '#6C757D',
  w400: '#A2AAB2',
  w300: '#C7CDD2',
  w200: '#DEE2E6',
  w100: '#E9ECEF',
  w50: '#F0F2F4',
  w0: '#F8F9FA',
}

export const palette = {
  colors: {
    primary,
    primarySub,
    secondary,
    black,
    white,
    grayScale,
    subtitleText: grayScale.w600,
    subText: grayScale.w500,
    optionalText: grayScale.w400,
    input: grayScale.w300,
    divider: grayScale.w100,
  },
  backgroundColors: {
    primary,
    primarySub,
    secondary,
    white,
    black,
    sub: grayScale.w100,
    optional: grayScale.w50,
  },
}
