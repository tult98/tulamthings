type Props = React.ComponentPropsWithoutRef<'button'> & object;

export default async function ReadMoreButton(props: Props) {
  return (
    <div className="group/read-more-button flex w-fit items-center space-x-2">
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
          className="duration-125 opacity-0 transition-opacity ease-in-out group-hover:opacity-100"
        ></path>
        <path
          d="M15 10L19.5 5.5L15 1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="duration-125 opacity-0 transition-opacity ease-in-out group-hover/read-more-button:opacity-100"
        ></path>
        <path
          d="M23 10L27.5 5.5L23 1"
          stroke="currentColor"
          strokeOpacity="0.66"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="duration-125 opacity-0 transition-opacity delay-[125ms] ease-in-out group-hover/read-more-button:opacity-100"
        ></path>
        <path
          d="M31 10L35.5 5.5L31 1"
          stroke="currentColor"
          strokeOpacity="0.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="duration-125 opacity-0 transition-opacity delay-[250ms] ease-in-out group-hover/read-more-button:opacity-100"
        ></path>
      </svg>
    </div>
  );
}
