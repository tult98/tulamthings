import Navbar from '@blog/components/Navbar';

type Props = {
  title?: string;
  disableWave?: boolean; // means in post details page
};

const Header = ({ disableWave, title }: Props) => {
  return (
    <header
      id="header"
      className={`${
        disableWave ? 'flex h-[400px] flex-col justify-between' : 'h-[200px]'
      } from-homepage-dark to-homepage-light relative bg-gradient-to-r lg:h-[400px]`}
    >
      <div
        className={`absolute left-0 right-0 bottom-0 h-[90px] w-full overflow-x-hidden ${
          disableWave ? 'hidden' : ''
        }`}
      >
        <svg
          preserveAspectRatio="none"
          width="1440"
          height="74"
          viewBox="0 0 1440 74"
          className="absolute left-[-3%] right-[-3%] bottom-0 w-[103%] min-w-[600px] text-white"
          fill="currentColor"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
      <Navbar />
      {disableWave && title && (
        <div className="flex justify-center">
          <div className="w-full max-w-[1100px] px-4 pb-9 sm:px-6 lg:px-8">
            <h1 className="text-gray-1000 text-[2.375rem] font-medium">
              {title}
            </h1>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
