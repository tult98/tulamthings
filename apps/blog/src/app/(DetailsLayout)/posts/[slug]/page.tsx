import { DatabaseService } from '@blog/services/databases';
import {
  BlockObjectRequest,
  BlockObjectResponse,
  CalloutBlockObjectResponse,
  CodeBlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PartialBlockObjectResponse,
  QuoteBlockObjectResponse,
} from '@blog/types/api-endpoints';
import CalloutBlock from '@blog/components/Block/CalloutBlock';
import CodePlayground from '@blog/components/Block/CodePlayground';
import CodeSnippet from '@blog/components/Block/CodeSnippet';
import HeadingBlock from '@blog/components/Block/HeadingBlock';
import ImageBlock from '@blog/components/Block/ImageBlock';
import ListItemBlock, {
  IListItemBlock,
} from '@blog/components/Block/ListItemBlock';
import ParagraphBlock from '@blog/components/Block/ParagraphBlock';
import QuoteBlock from '@blog/components/Block/QuoteBlock';
import React from 'react';
import TableOfContent from '@blog/widgets/TableOfContent';

const getTableOfContents = (
  blocks: (BlockObjectResponse | PartialBlockObjectResponse)[]
) => {
  const headings = blocks.filter((block: any) =>
    block.type.startsWith('heading')
  );

  return headings as BlockObjectResponse[];
};

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

export default async function Index({ params }: { params: { slug: string } }) {
  const post = await DatabaseService.getPostBySlug(params.slug);
  const headings = getTableOfContents(post ? post.blocks : []);

  return (
    <>
      <article id="article" className="shrink basis-[686px] w-screen lg:w-auto mb-12">
        {post?.blocks?.map((block, index) => (
          <React.Fragment key={index}>
            {renderBlockByType(block as any)}
          </React.Fragment>
        ))}
      </article>
      <aside className="hidden lg:block sticky grow-0 shrink basis-[250px] top-[148px] ">
        <TableOfContent headings={headings} />
      </aside>
    </>
  );
}
