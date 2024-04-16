import { PostCard } from '@blog/@features/post/components/PostCard';
import { DatabaseService } from '@blog/services/databases';
import { PageObjectResponse } from '@blog/types/api-endpoints';

export default async function PostListContainer() {
  const topLatestPosts = await DatabaseService.getTopLatestPosts(10);

  return (
    <section className="col-span-2">
      <h2 className="heading-2 mb-9">Recently published</h2>
      {topLatestPosts.results?.map((post) => (
        <PostCard key={post.id} post={post as PageObjectResponse} />
      ))}
    </section>
  );
}
