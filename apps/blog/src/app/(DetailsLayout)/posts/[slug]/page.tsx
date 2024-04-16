import { PostDetailContainer } from '@blog/@features/post';

export default async function Index({ params }: { params: { slug: string } }) {
  return <PostDetailContainer slug={params.slug} />;
}
