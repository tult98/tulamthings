import { Metadata } from 'next';
import localFont from 'next/font/local';
import './global.css';
import Header from '../widgets/Header';

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
        <Header />
        <main className="max-w-[1100px] w-full self-center">{children}</main>
      </body>
    </html>
  );
}
