import { DatabaseService } from '@blog/services/databases';
import Header from '@blog/components/Header';
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
      <main className="flex w-full max-w-[1100px] justify-between self-center py-16 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
