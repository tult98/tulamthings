import { ParagraphBlockObjectResponse } from '@blog/types/api-endpoints';
import TextBlock from '@blog/widgets/Block/TextBlock';

const ParagraphBlock = ({ block }: { block: ParagraphBlockObjectResponse }) => {
  return (
    <p className="text-[1.1875rem] mb-6 break-words">
      {block.paragraph.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </p>
  );
};

export default ParagraphBlock;
