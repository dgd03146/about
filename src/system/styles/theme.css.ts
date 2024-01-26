import { createGlobalTheme } from '@vanilla-extract/css'
import {
  fontSizes,
  fontFamily,
  fontWeight,
  color,
  breakpoints,
  space,
  borderRadius,
  borderWidth,
} from '../tokens'

export const vars = createGlobalTheme(':root', {
  fontFamily,
  space,
  contentWidth: {
    ...breakpoints,
    ...space,
  },
  fontSizes,
  fontWeight,
  palette: color,
  border: {
    width: borderWidth,
    radius: borderRadius,
  },
})
