import { customColors } from '@/system/tokens/colors'

export function getColorForPath(pathname: string) {
  const prefix = pathname.split('/')[1] // 패스에서 첫 번째 섹션을 추출

  switch (prefix) {
    case 'blog':
      // return '#EFEBEA'
      return customColors.white
    case 'travel':
      return customColors.orange
    case 'food':
      return customColors.green
    default:
      return customColors.primary // 기본 색상
  }
}
