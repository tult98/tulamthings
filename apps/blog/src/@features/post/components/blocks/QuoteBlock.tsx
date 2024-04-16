import TextBlock from '@blog/@features/post/components/blocks/TextBlock';
import { QuoteBlockObjectResponse } from '@blog/types/api-endpoints';

const QuoteBlock = ({ block }: { block: QuoteBlockObjectResponse }) => {
  return (
    <blockquote>
      <p className="my-12 mt-6 w-fit break-words text-[1.1875rem] text-gray-700">
        {block.quote.rich_text.map((text, index) => (
          <TextBlock key={index} item={text} />
        ))}
      </p>
    </blockquote>
  );
};

export default QuoteBlock;
