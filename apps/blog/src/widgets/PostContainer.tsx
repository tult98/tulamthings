import PostCard from '@blog/components/PostCard';
import { DatabaseService } from '@blog/services/databases';

const PostContainer = async () => {
  const topLatestPosts = await DatabaseService.getTopLatestPosts(10);

  return (
    <section className='col-span-2'>
      <h2 className="heading-2 mb-9">
        Recently published
      </h2>
      {topLatestPosts.results?.map((post: any) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostContainer;
