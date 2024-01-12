import ReadMoreButton from '@blog/components/PostCard/ReadMoreButton';
import { PageObjectResponse } from '@blog/types/api-endpoints';

type Props = {
  post: PageObjectResponse;
};

export default function PostCard({ post }: Props) {
  return (
    <article className="mb-12 group hover:cursor-pointer">
      <h3 className="font-bold text-[1.375rem] text-neutral group-hover:text-primary">
        {(post.properties.title as any).title[0].plain_text}
      </h3>
      <p className="my-4">
        {(post.properties.preface as any).rich_text[0].plain_text}
      </p>
      <ReadMoreButton />
    </article>
  );
}
