interface IProps {
  post: any;
}

const PostCard = ({ post }: IProps) => {
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
      <div className="flex items-center space-x-2 group/read-more-button w-fit">
        <button className="font-bold">Read more</button>
        <svg
          width="36"
          height="12"
          viewBox="0 0 36 12"
          fill="none"
          className="text-primary"
        >
          <path
            d="M0.75 6H11.25 M6 0.75L11.25 6L6 11.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-opacity ease-in-out opacity-0 duration-125 group-hover:opacity-100"
          ></path>
          <path
            d="M15 10L19.5 5.5L15 1"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-opacity ease-in-out opacity-0 duration-125 group-hover/read-more-button:opacity-100"
          ></path>
          <path
            d="M23 10L27.5 5.5L23 1"
            stroke="currentColor"
            strokeOpacity="0.66"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-opacity duration-125 delay-[125ms] ease-in-out opacity-0 group-hover/read-more-button:opacity-100"
          ></path>
          <path
            d="M31 10L35.5 5.5L31 1"
            stroke="currentColor"
            strokeOpacity="0.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-opacity ease-in-out opacity-0 duration-125 delay-[250ms] group-hover/read-more-button:opacity-100"
          ></path>
        </svg>
      </div>
    </article>
  );
};

export default PostCard;
