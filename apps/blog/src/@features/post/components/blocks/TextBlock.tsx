import { TEXT_COLORS } from '@blog/constants/styles';
import { RichTextItemResponse } from '@blog/types/api-endpoints';
import Link from 'next/link';
import { useMemo } from 'react';

const TextBlock = ({ item }: { item: RichTextItemResponse }) => {
  const textStyles = useMemo(() => {
    let style = '';
    if (!item.annotations) return style;
    else if (item.annotations.bold) style += 'font-bold';
    else if (item.annotations.italic) style += 'italic';
    else if (item.annotations.strikethrough) style += 'line-through';
    else if (item.annotations.underline) style += 'underline';
    else if (item.annotations.color !== 'default')
      style += `${
        TEXT_COLORS[item.annotations.color as keyof typeof TEXT_COLORS]
      }`;
    else if (item.annotations.code)
      style +=
        'font-mono text-[0.9em] bg-[#E8E9EB] py-[4.5px] px-1.5 rounded-[3px] -leading-[0.5px]';

    return style;
  }, [item.annotations]);

  if (item.href)
    return (
      <Link
        className="text-primary underline opacity-80 hover:font-medium"
        href={item.href}
      >
        {item.plain_text}
      </Link>
    );

  return <span className={textStyles}>{item.plain_text}</span>;
};

export default TextBlock;
