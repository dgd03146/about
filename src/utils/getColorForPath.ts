import { customColors } from '@/system/tokens/colors'

export function getColorForPath(pathname: string) {
  switch (pathname) {
    case '/blog':
      return customColors.white
    case '/travel':
      return customColors.orange
    case '/food':
      return customColors.green
    default:
      return customColors.primary // 기본 색상
  }
}
