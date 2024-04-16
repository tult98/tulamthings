import { DEFAULT_NOTION_HEADERS } from '@blog/constants';
import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
  QueryDatabaseResponse
} from '@blog/types/api-endpoints';

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

  static async getAllBlocksRecursive(
    id: string
  ): Promise<Array<PartialBlockObjectResponse | BlockObjectResponse>> {
    const queryBlocksRes = await fetch(
      `https://api.notion.com/v1/blocks/${id}/children?page_size=100`,
      {
        method: 'GET',
        headers: this.headers,
      }
    );
    const blocksData: ListBlockChildrenResponse = await queryBlocksRes.json();
    if (blocksData.has_more) {
      const nextBlocksList = await this.getAllBlocksRecursive(id);
      return blocksData.results.concat(nextBlocksList);
    }

    return blocksData.results;
  }

  static async getPostBySlug(slug: string) {
    const queryDatabaseRes = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
          filter: {
            property: 'slug',
            formula: {
              string: { equals: slug },
            },
          },
        }),
      }
    );
    const pageObject = (
      (await queryDatabaseRes.json()) as QueryDatabaseResponse
    ).results[0] as PageObjectResponse;

    if (pageObject.properties.title.type !== 'title') return null;

    const allBlocks = await this.getAllBlocksRecursive(pageObject.id);

    return {
      title: pageObject.properties.title.title[0].plain_text,
      blocks: allBlocks,
    };
  }
}
