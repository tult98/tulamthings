import { DatabaseService } from '@blog/services/databases';
import Header from '@blog/widgets/Header';
import React from 'react';

export default async function PostDetailsLayout({
  params: { slug },
  children,
}: {
  params: { slug: string };
  children: React.ReactNode;
}) {
  const post = await DatabaseService.getPostBySlug(slug);

  return (
    <>
      <Header disableWave={true} title={post?.title ?? ''} />
      <main className="max-w-[1100px] w-full self-center py-16 lg:px-8 sm:px-6 px-4 flex justify-between">
        {children}
      </main>
    </>
  );
}
