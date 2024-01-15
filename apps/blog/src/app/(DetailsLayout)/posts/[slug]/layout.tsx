import Header from '@blog/widgets/Header';
import React from 'react';

export default function PostDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header disableWave={true} title={'This is default title'} />
      <main className="max-w-[1100px] w-full self-center py-16 lg:px-8 sm:px-6 px-4">
        {children}
      </main>
    </>
  );
}
