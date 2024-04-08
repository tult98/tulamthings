import ReadMoreButton from '@blog/components/PostCard/ReadMoreButton';
import { PageObjectResponse } from '@blog/types/api-endpoints';
import Link from 'next/link';

type Props = {
  post: PageObjectResponse;
};

export default function PostCard({ post }: Props) {
  if (
    post.properties.title.type !== 'title' ||
    post.properties.preface.type !== 'rich_text' ||
    post.properties.slug.type !== 'formula' ||
    post.properties.slug.formula.type !== 'string'
  )
    return null;

  return (
    <Link href={`posts/${post.properties.slug.formula.string}`}>
      <article className="mb-12 group hover:cursor-pointer">
        <h3 className="font-bold text-[1.375rem] text-neutral group-hover:text-primary">
          {post.properties.title.title?.[0]?.plain_text ?? ''}
        </h3>
        <p className="my-4">
          {post.properties.preface.rich_text?.[0]?.plain_text ?? ''}
        </p>
        <ReadMoreButton />
      </article>
    </Link>
  );
}
