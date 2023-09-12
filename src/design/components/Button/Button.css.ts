import { style } from '@vanilla-extract/css'

import { themeVars } from '@/design/theme'

export const root = style({
  backgroundColor: themeVars.colors.primary,
  borderRadius: themeVars.spacing[100],
  paddingTop: themeVars.spacing[200],
  paddingBottom: themeVars.spacing[200],
  paddingLeft: themeVars.spacing[400],
  paddingRight: defaultVars.spacing[400],
  color: '#ffffff',
  fontWeight: 400,
  fontSize: themeVars.fontSize.body,
  lineHeight: themeVars.spacing[500],
  fontFamily: themeVars.fontFamily,
  ':hover': {
    backgroundColor: themeVars.backgroundColors.primary,
  },
  ':active': {
    backgroundColor: themeVars.backgroundColors.primarySub,
    boxShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
  },
  ':focus': {
    boxShadow: '0 1px 0 rgba(0,0,0,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
  },
})
