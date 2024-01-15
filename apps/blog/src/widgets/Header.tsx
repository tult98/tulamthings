import Navbar from '@blog/widgets/Navbar';

type Props = {
  title?: string;
  disableWave?: boolean; // means in post details page
};

const Header = ({ disableWave, title }: Props) => {
  return (
    <header
      id="header"
      className={`${
        disableWave ? 'h-[400px] flex flex-col justify-between' : 'h-[200px]'
      } lg:h-[400px] bg-gradient-to-r from-homepage-dark to-homepage-light relative`}
    >
      <div
        className={`absolute left-0 right-0 bottom-0 w-full h-[90px] overflow-x-hidden ${
          disableWave ? 'hidden' : ''
        }`}
      >
        <svg
          preserveAspectRatio="none"
          width="1440"
          height="74"
          viewBox="0 0 1440 74"
          className="absolute left-[-3%] right-[-3%] bottom-0 w-[103%] text-white min-w-[600px]"
          fill="currentColor"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
      <Navbar />
      {/* TODO: fetch data from notion */}
      {disableWave && title && (
        <div className="flex justify-center">
          <div className="pb-9 w-full max-w-[1100px] px-2 sm:px-4 lg:px-8">
            <h1 className="text-gray-1000 font-medium text-[2.375rem]">
              {title}
            </h1>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
