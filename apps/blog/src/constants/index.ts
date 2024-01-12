import 'server-only'

export const DEFAULT_NOTION_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${process.env.NOTION_KEY}`,
  'Notion-Version': '2022-06-28',
  'content-type': 'application/json',
};
