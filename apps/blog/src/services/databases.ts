import { DEFAULT_NOTION_HEADERS } from '@blog/constants';
import { QueryDatabaseResponse } from '@blog/types/api-endpoints';

export class DatabaseService {
  static headers: HeadersInit = DEFAULT_NOTION_HEADERS;

  static async getTopLatestPosts(
    numberOfPosts: number
  ): Promise<QueryDatabaseResponse> {
    const body = {
      page_size: numberOfPosts,
      filter: {
        and: [
          {
            property: 'is_published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'is_updated',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'published_at',
          direction: 'ascending',
        },
        {
          property: 'created_at',
          direction: 'ascending',
        },
      ],
    };
    const options: RequestInit = {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    };
    const res = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      options
    );

    return res.json();
  }
}
