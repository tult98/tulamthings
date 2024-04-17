import Header from '@blog/components/Header';
import SideBar from '@blog/components/SideBar';
import { Metadata } from 'next';
import localFont from 'next/font/local';
import '../global.css';

const wotFardFont = localFont({
  src: [
    {
      path: '../../../public/fonts/Wotfard-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Wotfard-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/Wotfard-SemiBold.ttf',
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
      <body className="font-wot-fard flex flex-col">
        <div className="drawer drawer-end">
          <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            <Header />
            <main className="w-full max-w-[1100px] self-center py-16 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
          <SideBar />
        </div>
      </body>
    </html>
  );
}
