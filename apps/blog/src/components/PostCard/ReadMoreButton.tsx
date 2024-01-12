type Props = React.ComponentPropsWithoutRef<'button'> & object;

export default function ReadMoreButton(props: Props) {
  return (
    <div className="flex items-center space-x-2 group/read-more-button w-fit">
      <button {...props} className="font-bold">
        Read more
      </button>
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
  );
}
