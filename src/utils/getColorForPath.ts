import { customColors } from '@/system/tokens/colors'

export function getColorForPath(pathname: string) {
  switch (pathname) {
    case '/blog':
      return customColors.white
    case '/travel':
      return 'pink'
    case '/food':
      return 'green'
    default:
      return 'yellow' // 기본 색상
  }
}
