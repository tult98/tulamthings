import ShareButtons from '@blog/@features/post/components/ShareButtons';
import { BlockObjectResponse } from '@blog/types/api-endpoints';
import React from 'react';

const renderHeading = (heading: BlockObjectResponse) => {
  if (heading.type === 'heading_2') {
    const plainText = heading.heading_2.rich_text?.[0]?.plain_text;
    const sectionId = plainText?.toLowerCase().replace(/ /g, '-');
    return (
      <a
        className="mt-3 block text-gray-800 opacity-70 hover:opacity-100"
        href={`#${sectionId}`}
      >
        {plainText}
      </a>
    );
  } else if (heading.type === 'heading_3') {
    const plainText = heading.heading_3.rich_text?.[0]?.plain_text;
    const sectionId = plainText?.toLowerCase().replace(/ /g, '-');
    return (
      <a
        className="mt-1 block pl-3 text-sm text-gray-800 opacity-70 hover:opacity-100"
        href={`#${sectionId}`}
      >
        {heading.heading_3.rich_text?.[0]?.plain_text}
      </a>
    );
  }
  return null;
};

const TableOfContent = ({
  headings,
  shareUrl,
}: {
  headings: BlockObjectResponse[];
  shareUrl: string;
}) => (
  <div>
    <p className="mb-4 text-base font-medium uppercase text-gray-900">
      Table of contents
    </p>
    {headings.map((heading, index) => (
      <React.Fragment key={index}>
        {renderHeading(heading as BlockObjectResponse)}
      </React.Fragment>
    ))}
    <ShareButtons shareUrl={shareUrl} />
  </div>
);

export default TableOfContent;
