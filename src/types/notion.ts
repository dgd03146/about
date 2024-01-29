import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints'

export type PageProperties = PageObjectResponse['properties']
export type PropertyKey = keyof PageProperties
export type PropertyValue = PageProperties[PropertyKey]
export type PropertyType =
  PageObjectResponse['properties'][keyof PageObjectResponse['properties']]
