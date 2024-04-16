import CalloutBlock from '@blog/@features/post/components/blocks/CalloutBlock';
import CodePlayground from '@blog/@features/post/components/blocks/CodePlayground';
import CodeSnippet from '@blog/@features/post/components/blocks/CodeSnippet';
import HeadingBlock from '@blog/@features/post/components/blocks/HeadingBlock';
import ImageBlock from '@blog/@features/post/components/blocks/ImageBlock';
import ListItemBlock, {
  IListItemBlock,
} from '@blog/@features/post/components/blocks/ListItemBlock';
import ParagraphBlock from '@blog/@features/post/components/blocks/ParagraphBlock';
import QuoteBlock from '@blog/@features/post/components/blocks/QuoteBlock';
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
      return block.code.language !== 'json' ? (
        <CodeSnippet block={block as CodeBlockObjectResponse} />
      ) : (
        <CodePlayground block={block} />
      );
    default:
      return null;
  }
};

export default async function PostDetailContainer({ slug }: { slug: string }) {
  const post = await DatabaseService.getPostBySlug(slug);
  const headings = getTableOfContents(post ? post.blocks : []);

  return (
    <>
      <article
        id="article"
        className="mb-12 w-screen shrink basis-[686px] lg:w-auto"
      >
        {post?.blocks?.map((block, index) => (
          <React.Fragment key={index}>
            {renderBlockByType(block as any)}
          </React.Fragment>
        ))}
      </article>
      <aside className="sticky top-[148px] hidden shrink grow-0 basis-[250px] lg:block ">
        <TableOfContent headings={headings} />
      </aside>
    </>
  );
}
