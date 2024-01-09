export const getApiEndPoint = () => {
  return 'https://api.notion.com/v1/databases'
}

export const getNotionToken = () => {
  return process.env.NOTION_TOKEN as string
}
