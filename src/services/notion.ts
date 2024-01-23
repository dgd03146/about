// import 'server-only'

import type { PostInfo } from '@/types'
import { cache } from 'react'
import { Client } from '@notionhq/client'
import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'
import { NotionAPI } from 'notion-client'
import { NotionToMarkdown } from 'notion-to-md'
import { getNotionDatabaseId, getNotionToken } from '@/envs'
import { formatDate } from '../utils/formatDate'

// FIXME: 분리

type PageProperties = PageObjectResponse['properties']
type PropertyKey = keyof PageProperties
type PropertyValue = PageProperties[PropertyKey]
type PropertyType =
  PageObjectResponse['properties'][keyof PageObjectResponse['properties']]

const notionClient = new Client({
  auth: getNotionToken(),
})

// Notion post page
const notionAPI = new NotionAPI()

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

export const convertPageProperties = (
  page: PageObjectResponse,
  isDetail?: 'isDetail',
) => {
  if (!page) {
    throw new Error('Page is missing.') // 또는 특정한 에러 타입을 사용할 수 있습니다.
  }

  const { id, properties, created_time, last_edited_time } = page

  const res: Partial<PostInfo> = {}
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

  const coverImage = pageToImageUrl(page)
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

  const pages = databaseQuery.results.map((pageData) => {
    const page = pageData as PageObjectResponse
    return convertPageProperties(page)
  })

  return pages
})

export const getPostDetail = async (pageId: string) => {
  const recordMap = await notionAPI.getPage(pageId)

  return recordMap
}

const notion = new Client({
  auth: getNotionToken(),
})

// passing notion client to the option
const n2m = new NotionToMarkdown({ notionClient: notion })

export const getPagebySlug = async (slug: string) => {
  const response = await notionClient.databases.query({
    database_id: getNotionDatabaseId(),
    filter: {
      property: 'slug',
      rich_text: {
        equals: slug,
      },
    },
  })
  return response.results[0]
}

// type ImageSizes = Record<string, { width: number; height: number }>

export const getPostPage = async (slug: string) => {
  const page = await getPagebySlug(slug)
  const convertedPost = convertPageProperties(
    page as PageObjectResponse,
    'isDetail',
  )
  const mdBlocks = await n2m.pageToMarkdown(page.id)
  const markdown = n2m.toMarkdownString(mdBlocks).parent

  const post = {
    title: convertedPost.title,
    description: convertedPost.description,
    tags: convertedPost.tags,
    categories: convertedPost.categories,
    date: convertedPost.date,
  }

  return { post, markdown }
}

// export const getIdBySlug = async (slug: string) => {
//   const response = await notionClient.databases.query({
//     database_id: getNotionDatabaseId(),
//     filter: {
//       property: 'slug',
//       rich_text: {
//         equals: slug,
//       },
//     },
//   })

//   return response.results[0].id
// }
