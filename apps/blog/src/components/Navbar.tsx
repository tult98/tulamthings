import Link from 'next/link';
import { useCallback } from 'react';
import Logo from './Logo';

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
          <ul className="bg-base-100 relative columns-2 gap-8 rounded-xl !px-6 !py-4">
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
                  className="hover:text-primary hover:bg-transparent"
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
    <section className="navbar flex justify-center">
      <div className="mt-2 flex w-full max-w-[1100px] justify-between px-2 sm:px-4 lg:mt-10 lg:justify-start lg:px-8">
        <Logo />
        <div className="flex-none lg:hidden">
          <label
            htmlFor="navbar-drawer"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-6 w-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <ul className="menu menu-horizontal hidden space-x-2 px-5 text-base font-normal lg:flex">
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
