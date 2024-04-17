import {
  BlockObjectRequest,
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@blog/types/api-endpoints';

export const getTableOfContents = (
  blocks: (BlockObjectRequest | PartialBlockObjectResponse)[],
) => {
  const headings = blocks.filter((block: any) =>
    block.type.startsWith('heading'),
  );

  return headings as BlockObjectResponse[];
};

export const getCodeLanguage = (language: string) => {
  switch (language) {
    case 'javascript':
      return 'jsx';
    case 'typescript':
      return 'tsx';
    default:
      return language;
  }
};
