import 'server-only'

import type { PostInfo } from '@/types'
import { cache } from 'react'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { getNotionDatabaseId, getNotionToken } from '@/envs'
import { formatDate } from '../utils/formatDate'

type PageProperties = PageObjectResponse['properties']
type PropertyKey = keyof PageProperties
type PropertyValue = PageProperties[PropertyKey]
type PropertyType =
  PageObjectResponse['properties'][keyof PageObjectResponse['properties']]

const notionClient = new Client({
  auth: getNotionToken(),
})

const convertProperty = (property: PropertyType) => {
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

const pageToImageUrl = (page: PageObjectResponse) => {
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

export const convertPageProperties = (page: PageObjectResponse) => {
  const { id, properties, created_time, last_edited_time } = page

  const res: Partial<PostInfo> = {}
  Object.keys(properties).forEach((key: PropertyKey) => {
    const propertyValue: PropertyValue = properties[key]
    res[key] = convertProperty(propertyValue)
  })

  const coverImage = pageToImageUrl(page)
  const { title, tags, date, description, categories, coverImageHeight } = res

  return {
    id,
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

export const getPosts = cache(async () => {
  const databaseQuery = await notionClient.databases.query({
    database_id: getNotionDatabaseId(),
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  })

  const pages: PostInfo[] = databaseQuery.results.map((pageData) => {
    const page = pageData as PageObjectResponse
    return convertPageProperties(page)
  })

  console.log(pages, 'pages')

  return pages
})

export const getPostDetail = (slug: string) => {
  return notionClient.databases.query({
    database_id: getNotionDatabaseId(),
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  })
}
