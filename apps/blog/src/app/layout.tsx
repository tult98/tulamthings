import { Metadata } from 'next';
import localFont from 'next/font/local';
import Header from '../widgets/Header';
import './global.css';

const wotFardFont = localFont({
  src: [
    {
      path: '../../public/fonts/Wotfard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Wotfard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Wotfard-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-wot-fard',
});

export const metadata: Metadata = {
  title: 'tulamthings',
  description:
    "Join me on a journey through the fascinating world of technology at tulamthings. It's a blog where I share thoughts on the latest tech trends, gadget reviews, and software updates.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light" className={`${wotFardFont.variable}`}>
      <body className="flex flex-col font-wot-fard">
        <div className="drawer drawer-end">
          <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
          <div className="flex flex-col drawer-content">
            <Header />
            <main className="max-w-[1100px] w-full self-center py-16 lg:px-8 sm:px-6 px-4">
              {children}
            </main>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="navbar-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="z-20 min-h-full p-4 menu w-80 bg-base-200">
              <li>
                <a>Latest</a>
              </li>
              <li>
                <a>Posts</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
      </body>
    </html>
  );
}
