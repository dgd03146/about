import { color } from '@/system/tokens'

export function getColorForPath(pathname: string) {
  const prefix = pathname.split('/')[1] // 패스에서 첫 번째 섹션을 추출

  switch (prefix) {
    case 'blog':
      return color.white
    case 'travel':
      return color.skyblue
    case 'food':
      return color.green
    default:
      return color.primary // 기본 색상
  }
}
