import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { PostContent, PropertyType, PropertyValue, PropertyKey } from '@/types'
import { formatDate } from '@/utils'

export const convertProperty = (property: PropertyType) => {
  switch (property.type) {
    case 'title':
      return property.title.map((title) => title.plain_text).join(' ')
    case 'multi_select':
      return property.multi_select?.map((select) => select.name) || []
    case 'rich_text':
      return property.rich_text.map((text) => text.plain_text).join(' ')
    case 'number':
      return property.number
    case 'url':
      return property.url
    case 'date':
      return formatDate(property.date?.start as string)
    case 'formula':
      if (property.formula.type === 'string') return property.formula.string
      return ''
    case 'checkbox':
      return property.checkbox
    default:
      throw new Error(`Unknown property type: ${property.type}`)
  }
}

export const convertImage = (page: PageObjectResponse) => {
  const { cover } = page as PageObjectResponse
  if (cover) {
    switch (cover.type) {
      case 'file':
        return cover.file.url
      case 'external':
        return cover.external.url
      default:
        throw new Error(`Unknown cover type`)
    }
  }
  return ''
}

export const convertPageProperties = (
  page: PageObjectResponse,
  isDetail?: 'isDetail',
) => {
  if (!page) {
    throw new Error('Page is missing.') // 또는 특정한 에러 타입을 사용할 수 있습니다.
  }

  const { id, properties, created_time, last_edited_time } = page

  const res: Partial<PostContent> = {}
  Object.keys(properties).forEach((key: PropertyKey) => {
    const propertyValue: PropertyValue = properties[key]
    res[key] = convertProperty(propertyValue)
  })

  const { slug, title, tags, date, description, categories, coverImageHeight } =
    res

  if (isDetail) {
    return {
      title,
      description,
      tags,
      categories,
      date,
    }
  }

  const coverImage = convertImage(page)
  return {
    id,
    slug,
    title,
    categories,
    date,
    tags,
    coverImage,
    coverImageHeight,
    description,
    created_time: formatDate(created_time),
    last_edited_time: formatDate(last_edited_time),
  }
}
