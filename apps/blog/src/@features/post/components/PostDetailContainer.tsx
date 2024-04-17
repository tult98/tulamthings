import CalloutBlock from '@blog/@features/post/components/blocks/CalloutBlock';
import CodeSnippet from '@blog/@features/post/components/blocks/CodeSnippet';
import HeadingBlock from '@blog/@features/post/components/blocks/HeadingBlock';
import ImageBlock from '@blog/@features/post/components/blocks/ImageBlock';
import ListItemBlock, {
  IListItemBlock,
} from '@blog/@features/post/components/blocks/ListItemBlock';
import ParagraphBlock from '@blog/@features/post/components/blocks/ParagraphBlock';
import QuoteBlock from '@blog/@features/post/components/blocks/QuoteBlock';
import ShareButtons from '@blog/@features/post/components/ShareButtons';
import TableOfContent from '@blog/@features/post/components/TableOfContent';
import { getTableOfContents } from '@blog/@features/post/utils/content';
import { DatabaseService } from '@blog/services/databases';
import {
  BlockObjectRequest,
  CalloutBlockObjectResponse,
  CodeBlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
} from '@blog/types/api-endpoints';
import React from 'react';

const renderBlockByType = (block: BlockObjectRequest | IListItemBlock) => {
  switch (block.type) {
    case 'heading_2':
      return <HeadingBlock block={block as Heading2BlockObjectResponse} />;
    case 'heading_3':
      return <HeadingBlock block={block as Heading3BlockObjectResponse} />;
    case 'paragraph':
      return <ParagraphBlock block={block as ParagraphBlockObjectResponse} />;
    case 'quote':
      return <QuoteBlock block={block as QuoteBlockObjectResponse} />;
    case 'callout':
      return <CalloutBlock block={block as CalloutBlockObjectResponse} />;
    case 'list_item':
      return <ListItemBlock blocks={block.blocks} />;
    case 'image':
      return <ImageBlock block={block as ImageBlockObjectResponse} />;
    case 'code':
      return <CodeSnippet block={block as CodeBlockObjectResponse} />;
    default:
      return null;
  }
};

export default async function PostDetailContainer({ slug }: { slug: string }) {
  const post = await DatabaseService.getPostBySlug(slug);
  const headings = getTableOfContents(post ? post.blocks : []);

  const shareUrl = `${process.env.NEXT_PUBLIC_APP_URL}/posts/${slug}`;

  return (
    <>
      <article
        id="article"
        className="mb-12 w-full max-w-[686px] shrink basis-[686px] lg:w-auto"
      >
        {post?.blocks?.map((block, index) => (
          <React.Fragment key={index}>
            {renderBlockByType(block as any)}
          </React.Fragment>
        ))}
        <div className="lg:hidden">
          <ShareButtons shareUrl={shareUrl} />
        </div>
      </article>
      <aside className="sticky top-[148px] hidden shrink grow-0 basis-[250px] lg:block ">
        <TableOfContent shareUrl={shareUrl} headings={headings} />
      </aside>
    </>
  );
}
