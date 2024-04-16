import {
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from '@blog/types/api-endpoints';

export type HeadingBlockObjectResponse =
  | Heading2BlockObjectResponse
  | Heading3BlockObjectResponse;

const getHeadingText = (block: HeadingBlockObjectResponse) => {
  switch (block.type) {
    case 'heading_2':
      return block.heading_2.rich_text[0].plain_text;
    case 'heading_3':
      return block.heading_3.rich_text[0].plain_text;
    default:
      return '';
  }
};

const HeadingBlock = ({ block }: { block: HeadingBlockObjectResponse }) => {
  const headingId = getHeadingText(block).toLowerCase().replace(/ /g, '-');
  if (block.type === 'heading_2')
    return <Heading2Block block={block} id={headingId} />;
  else if (block.type === 'heading_3')
    return <Heading3Block block={block} id={headingId} />;
  return null;
};

const Heading2Block = ({
  block,
  id,
}: {
  block: Heading2BlockObjectResponse;
  id: string;
}) => {
  return (
    <h2 id={id} className="text-accent mb-8 break-words text-[2rem] font-bold">
      {block.heading_2.rich_text[0].plain_text}
    </h2>
  );
};

const Heading3Block = ({
  block,
  id,
}: {
  block: Heading3BlockObjectResponse;
  id: string;
}) => {
  return (
    <h3
      id={id}
      className="mt-16 mb-3 break-words text-[1.5625rem] font-bold text-gray-900"
    >
      {block.heading_3.rich_text[0].plain_text}
    </h3>
  );
};

export default HeadingBlock;
