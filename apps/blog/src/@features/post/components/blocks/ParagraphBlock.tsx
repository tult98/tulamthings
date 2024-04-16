import TextBlock from '@blog/@features/post/components/blocks/TextBlock';
import { ParagraphBlockObjectResponse } from '@blog/types/api-endpoints';

const ParagraphBlock = ({ block }: { block: ParagraphBlockObjectResponse }) => {
  return (
    <p className="mb-6 break-words text-[1.1875rem]">
      {block.paragraph.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </p>
  );
};

export default ParagraphBlock;
