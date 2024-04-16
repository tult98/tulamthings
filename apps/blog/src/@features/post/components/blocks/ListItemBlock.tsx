import TextBlock from '@blog/@features/post/components/blocks/TextBlock';
import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from '@blog/types/api-endpoints';

export interface IListItemBlock {
  type: 'list_item';
  blocks: BlockObjectResponse[];
}

const ListItemBlock = ({ blocks }: { blocks: BlockObjectResponse[] }) => {
  return (
    <ul
      style={{ padding: 'revert' }}
      className={`mb-6 list-outside text-[1.1875rem] ${
        blocks[0].type === 'bulleted_list_item' ? '!list-disc' : '!list-decimal'
      }`}
    >
      {blocks.map((block) =>
        block.type === 'numbered_list_item' ? (
          <NumberListItemBlock
            key={block.id}
            block={block as NumberedListItemBlockObjectResponse}
          />
        ) : (
          <BulletListItemBlock
            key={block.id}
            block={block as BulletedListItemBlockObjectResponse}
          />
        ),
      )}
    </ul>
  );
};

const NumberListItemBlock = ({
  block,
}: {
  block: NumberedListItemBlockObjectResponse;
}) => {
  return (
    <li>
      {block.numbered_list_item.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </li>
  );
};

const BulletListItemBlock = ({
  block,
}: {
  block: BulletedListItemBlockObjectResponse;
}) => {
  return (
    <li>
      {block.bulleted_list_item.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </li>
  );
};

export default ListItemBlock;
