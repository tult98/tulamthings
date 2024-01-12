import ReadMoreButton from '@blog/components/PostCard/ReadMoreButton';

type Props = {
  post: any;
};

const PostCard = ({ post }: Props) => {
  return (
    <article className="mb-12 group hover:cursor-pointer">
      <h3 className="font-bold text-[1.375rem] text-neutral group-hover:text-primary">
        An Interactive Guide to CSS Grid
      </h3>
      <p className="my-4">
        CSS Grid is an incredibly powerful tool for building layouts on the web,
        but like all powerful tools, there&apos;s a significant learning curve.
        In this tutorial, we&apos;ll build a mental model for how CSS Grid works
        and how we can use it effectively. I&apos;ll share the biggest 💡
        lightbulb moments I&apos;ve had in my own learning journey.
      </p>
      <ReadMoreButton />
    </article>
  );
};

export default PostCard;
