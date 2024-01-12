import { CalloutBlockObjectResponse } from '@blog/types/api-endpoints';
import TextBlock from '@blog/widgets/Block/TextBlock';
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
    <aside className="relative px-8 py-6 mt-12 mb-16 lg:-mx-8 bg-muted rounded-[4px] border-l-[3px] border-info">
      <div className="absolute top-0 left-0 flex items-center justify-center w-12 h-12 p-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
        {calloutIcon}
      </div>
      {block.callout.rich_text.map((text, index) => (
        <TextBlock key={index} item={text} />
      ))}
    </aside>
  );
};

export default CalloutBlock;
