import { DEFAULT_NOTION_HEADERS } from '@blog/constants';

export class DatabaseService {
  static headers: HeadersInit = DEFAULT_NOTION_HEADERS;

  static async getTopLatestPosts(numberOfPosts: number) {
    const body = { page_size: numberOfPosts };
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
