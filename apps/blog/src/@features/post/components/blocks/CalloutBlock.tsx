import TextBlock from '@blog/@features/post/components/blocks/TextBlock';
import { CalloutBlockObjectResponse } from '@blog/types/api-endpoints';
import Image from 'next/image';
import { useMemo } from 'react';

const CalloutBlock = ({ block }: { block: CalloutBlockObjectResponse }) => {
  const calloutIcon = useMemo(() => {
    if (block.callout?.icon?.type === 'emoji') return block.callout.icon.emoji;
    else if (block.callout?.icon?.type === 'external')
      return (
        <Image
          alt="callout-icon"
          src={block.callout.icon.external.url}
          width={28}
          height={28}
        />
      );
    else if (block.callout?.icon?.type === 'file')
      return (
        <Image
          alt="callout-icon"
          src={block.callout.icon.file.url}
          width={28}
          height={28}
        />
      );
    return null;
  }, [block]);

  return (
    <aside className="bg-muted border-info relative mt-12 mb-16 rounded-[4px] border-l-[3px] px-8 py-6 lg:-mx-8">
      <div className="absolute top-0 left-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white p-2">
        {calloutIcon}
      </div>
      {block.callout.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </aside>
  );
};

export default CalloutBlock;
