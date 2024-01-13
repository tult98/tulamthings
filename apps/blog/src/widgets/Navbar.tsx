import Link from 'next/link';
import { useCallback } from 'react';
import Logo from '../components/Logo';

interface INavigationItem {
  id: number;
  label: string;
  href?: string;
  children?: INavigationItem[];
}

const navigationItems: INavigationItem[] = [
  {
    id: 1,
    label: 'Latest',
    href: '/',
  },
  {
    id: 2,
    label: 'Topics',
    children: [
      {
        id: 1,
        label: 'React',
        href: 'topics/react',
      },
      {
        id: 2,
        label: 'Performance',
        href: 'topics/performance',
      },
      {
        id: 3,
        label: 'Next.js',
        href: 'topics/nextjs',
      },
      {
        id: 4,
        label: 'CSS',
        href: 'topics/css',
      },
    ],
  },
  {
    id: 3,
    label: 'About',
    href: '/portfolio',
  },
];

const Navbar = () => {
  // only support for render 2 levels of navigation
  const renderNavigation = useCallback((navigation: INavigationItem) => {
    if (navigation.children) {
      return (
        <details>
          <summary>{navigation.label}</summary>
          <ul className="relative gap-8 !px-6 !py-4 columns-2 bg-base-100 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="12"
              fill="#FFFFFF"
              viewBox="0 0 32 12"
              className="absolute -top-3 left-6"
            >
              <path d="M 0 12 C 8 12 9.6 0 16 0 C 22.4 0 24 12 32 12 Z"></path>
            </svg>
            {navigation.children.map((child) => (
              <li key={child.id}>
                <Link
                  href={child.href!}
                  className="hover:bg-transparent hover:text-primary"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      );
    }

    return <Link href={navigation.href!}>{navigation.label}</Link>;
  }, []);

  return (
    <section className="absolute top-0 left-0 flex justify-center navbar">
      <div className="max-w-[1100px] w-full lg:mt-10 px-4 lg:px-8 flex justify-between lg:justify-start">
        <Logo />
        <div className="lg:hidden dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <ul className="hidden px-5 space-x-2 text-base font-normal menu menu-horizontal lg:flex">
          {navigationItems.map((navigation) => (
            <li
              className={`${navigation.children ? 'z-10' : ''}`}
              key={navigation.id}
            >
              {renderNavigation(navigation)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
