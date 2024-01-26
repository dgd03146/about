import { color } from '@/system/tokens/color'

export function getColorForPath(pathname: string) {
  const prefix = pathname.split('/')[1] // 패스에서 첫 번째 섹션을 추출

  switch (prefix) {
    case 'blog':
      // return '#EFEBEA'
      return color.white
    case 'travel':
      return color.orange
    case 'food':
      return color.green
    default:
      return color.primary // 기본 색상
  }
}
